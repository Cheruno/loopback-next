// Copyright IBM Corp. 2020. All Rights Reserved.
// Node module: @loopback/example-validation-app
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {bind, inject, Provider} from '@loopback/core';
import {
  asMiddleware,
  ErrorWriterOptions,
  HttpErrors,
  LogError,
  Middleware,
  MiddlewareContext,
  Response,
  RestBindings,
  RestTags,
} from '@loopback/rest';

@bind(
  asMiddleware({
    group: 'validationError',
    chain: RestTags.REST_MIDDLEWARE_CHAIN,
    upstreamGroups: 'sendResponse',
    downstreamGroups: 'cors',
  }),
)
export class ValidationErrorMiddlewareProvider implements Provider<Middleware> {
  constructor(
    @inject(RestBindings.SequenceActions.LOG_ERROR)
    protected logError: LogError,
    @inject(RestBindings.ERROR_WRITER_OPTIONS, {optional: true})
    protected errorWriterOptions?: ErrorWriterOptions,
  ) {}

  async value() {
    const middleware: Middleware = async (ctx, next) => {
      try {
        return await next();
      } catch (err) {
        return this.handleError(ctx, err);
      }
    };
    return middleware;
  }

  /**
   * Handle errors
   * If the request url is `/coffee-shops`, customize the error message.
   * @param context
   * @param err
   */
  handleError(
    context: MiddlewareContext,
    err: HttpErrors.HttpError,
  ): Response | undefined {
    // 2. customize error for particular endpoint
    if (context.request.url === '/coffee-shops') {
      // if this is a validation error
      if (err.statusCode === 422) {
        const customizedMessage = 'My customized validation error message';

        let customizedProps = {};
        if (this.errorWriterOptions?.debug) {
          customizedProps = {stack: err.stack};
        }

        // 3. Create a new error with customized properties
        // you can change the status code here too
        const errorData = {
          statusCode: 422,
          message: customizedMessage,
          resolution: 'Contact your admin for troubleshooting.',
          code: 'VALIDATION_FAILED',
          ...customizedProps,
        };

        context.response.status(422).send(errorData);

        // 4. log the error using RestBindings.SequenceActions.LOG_ERROR
        this.logError(err, err.statusCode, context.request);

        // The error was handled
        return context.response;
      } else {
        throw err;
      }
    }
  }
}
