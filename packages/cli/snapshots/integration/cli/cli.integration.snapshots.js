// IMPORTANT
// This snapshot file is auto-generated, but designed for humans.
// It should be checked into source control and tracked carefully.
// Re-generate by setting UPDATE_SNAPSHOTS=1 and running tests.
// Make sure to inspect the changes in the snapshots below.
// Do not ignore changes!

'use strict';

exports[`cli lists available commands 1`] = `
Available commands:
  lb4 app
  lb4 extension
  lb4 controller
  lb4 datasource
  lb4 import-lb3-models
  lb4 model
  lb4 repository
  lb4 service
  lb4 example
  lb4 openapi
  lb4 observer
  lb4 interceptor
  lb4 discover
  lb4 relation
  lb4 update
  lb4 rest-crud
  lb4 copyright
  lb4 openapi-spec
  lb4 install-completion
  lb4 uninstall-completion
`;


exports[`cli prints commands with --help 1`] = `
Available commands:
  lb4 app
  lb4 extension
  lb4 controller
  lb4 datasource
  lb4 import-lb3-models
  lb4 model
  lb4 repository
  lb4 service
  lb4 example
  lb4 openapi
  lb4 observer
  lb4 interceptor
  lb4 discover
  lb4 relation
  lb4 update
  lb4 rest-crud
  lb4 copyright
  lb4 openapi-spec
  lb4 install-completion
  lb4 uninstall-completion
`;


exports[`cli saves command metadata to .yo-rc.json 1`] = `
{
  "commands": {
    "base": {
      "help": {
        "name": "help",
        "type": "Boolean",
        "alias": "h",
        "description": "Print the generator's options and usage"
      },
      "skip-cache": {
        "name": "skip-cache",
        "type": "Boolean",
        "description": "Do not remember prompt answers",
        "default": false
      },
      "skip-install": {
        "name": "skip-install",
        "type": "Boolean",
        "description": "Do not automatically install dependencies",
        "default": false
      },
      "force-install": {
        "name": "force-install",
        "type": "Boolean",
        "description": "Fail on install dependencies error",
        "default": false
      },
      "ask-answered": {
        "type": "Boolean",
        "description": "Show prompts for already configured options",
        "default": false,
        "name": "ask-answered",
        "hide": false
      }
    },
    "app": {
      "options": {
        "help": {
          "name": "help",
          "type": "Boolean",
          "alias": "h",
          "description": "Print the generator's options and usage"
        },
        "skip-cache": {
          "name": "skip-cache",
          "type": "Boolean",
          "description": "Do not remember prompt answers",
          "default": false
        },
        "skip-install": {
          "name": "skip-install",
          "type": "Boolean",
          "description": "Do not automatically install dependencies",
          "default": false
        },
        "force-install": {
          "name": "force-install",
          "type": "Boolean",
          "description": "Fail on install dependencies error",
          "default": false
        },
        "ask-answered": {
          "type": "Boolean",
          "description": "Show prompts for already configured options",
          "default": false,
          "name": "ask-answered",
          "hide": false
        },
        "applicationName": {
          "type": "String",
          "description": "Application class name",
          "name": "applicationName",
          "hide": false
        },
        "docker": {
          "type": "Boolean",
          "description": "Include Dockerfile and .dockerignore",
          "name": "docker",
          "hide": false
        },
        "repositories": {
          "type": "Boolean",
          "description": "Include repository imports and RepositoryMixin",
          "name": "repositories",
          "hide": false
        },
        "services": {
          "type": "Boolean",
          "description": "Include service-proxy imports and ServiceMixin",
          "name": "services",
          "hide": false
        },
        "apiconnect": {
          "type": "Boolean",
          "description": "Include ApiConnectComponent",
          "name": "apiconnect",
          "hide": false
        },
        "description": {
          "type": "String",
          "description": "Description for the application",
          "name": "description",
          "hide": false
        },
        "outdir": {
          "type": "String",
          "description": "Project root directory for the application",
          "name": "outdir",
          "hide": false
        },
        "eslint": {
          "type": "Boolean",
          "description": "Enable eslint",
          "name": "eslint",
          "hide": false
        },
        "prettier": {
          "type": "Boolean",
          "description": "Enable prettier",
          "name": "prettier",
          "hide": false
        },
        "mocha": {
          "type": "Boolean",
          "description": "Enable mocha",
          "name": "mocha",
          "hide": false
        },
        "loopbackBuild": {
          "type": "Boolean",
          "description": "Use @loopback/build",
          "name": "loopbackBuild",
          "hide": false
        },
        "vscode": {
          "type": "Boolean",
          "description": "Use preconfigured VSCode settings",
          "name": "vscode",
          "hide": false
        },
        "private": {
          "type": "Boolean",
          "description": "Mark the project private (excluded from npm publish)",
          "name": "private",
          "hide": false
        },
        "config": {
          "type": "String",
          "alias": "c",
          "description": "JSON file name or value to configure options",
          "name": "config",
          "hide": false
        },
        "yes": {
          "type": "Boolean",
          "alias": "y",
          "description": "Skip all confirmation prompts with default or provided value",
          "name": "yes",
          "hide": false
        },
        "format": {
          "type": "Boolean",
          "description": "Format generated code using npm run lint:fix",
          "name": "format",
          "hide": false
        },
        "packageManager": {
          "type": "String",
          "description": "Change the default package manager",
          "alias": "pm",
          "name": "packageManager",
          "hide": false
        }
      },
      "arguments": [
        {
          "type": "String",
          "required": false,
          "description": "Project name for the application",
          "name": "name"
        }
      ],
      "name": "app"
    },
    "extension": {
      "options": {
        "help": {
          "name": "help",
          "type": "Boolean",
          "alias": "h",
          "description": "Print the generator's options and usage"
        },
        "skip-cache": {
          "name": "skip-cache",
          "type": "Boolean",
          "description": "Do not remember prompt answers",
          "default": false
        },
        "skip-install": {
          "name": "skip-install",
          "type": "Boolean",
          "description": "Do not automatically install dependencies",
          "default": false
        },
        "force-install": {
          "name": "force-install",
          "type": "Boolean",
          "description": "Fail on install dependencies error",
          "default": false
        },
        "ask-answered": {
          "type": "Boolean",
          "description": "Show prompts for already configured options",
          "default": false,
          "name": "ask-answered",
          "hide": false
        },
        "componentName": {
          "type": "String",
          "description": "Component name",
          "name": "componentName",
          "hide": false
        },
        "description": {
          "type": "String",
          "description": "Description for the extension",
          "name": "description",
          "hide": false
        },
        "outdir": {
          "type": "String",
          "description": "Project root directory for the extension",
          "name": "outdir",
          "hide": false
        },
        "eslint": {
          "type": "Boolean",
          "description": "Enable eslint",
          "name": "eslint",
          "hide": false
        },
        "prettier": {
          "type": "Boolean",
          "description": "Enable prettier",
          "name": "prettier",
          "hide": false
        },
        "mocha": {
          "type": "Boolean",
          "description": "Enable mocha",
          "name": "mocha",
          "hide": false
        },
        "loopbackBuild": {
          "type": "Boolean",
          "description": "Use @loopback/build",
          "name": "loopbackBuild",
          "hide": false
        },
        "vscode": {
          "type": "Boolean",
          "description": "Use preconfigured VSCode settings",
          "name": "vscode",
          "hide": false
        },
        "private": {
          "type": "Boolean",
          "description": "Mark the project private (excluded from npm publish)",
          "name": "private",
          "hide": false
        },
        "config": {
          "type": "String",
          "alias": "c",
          "description": "JSON file name or value to configure options",
          "name": "config",
          "hide": false
        },
        "yes": {
          "type": "Boolean",
          "alias": "y",
          "description": "Skip all confirmation prompts with default or provided value",
          "name": "yes",
          "hide": false
        },
        "format": {
          "type": "Boolean",
          "description": "Format generated code using npm run lint:fix",
          "name": "format",
          "hide": false
        },
        "packageManager": {
          "type": "String",
          "description": "Change the default package manager",
          "alias": "pm",
          "name": "packageManager",
          "hide": false
        }
      },
      "arguments": [
        {
          "type": "String",
          "required": false,
          "description": "Project name for the extension",
          "name": "name"
        }
      ],
      "name": "extension"
    },
    "controller": {
      "options": {
        "help": {
          "name": "help",
          "type": "Boolean",
          "alias": "h",
          "description": "Print the generator's options and usage"
        },
        "skip-cache": {
          "name": "skip-cache",
          "type": "Boolean",
          "description": "Do not remember prompt answers",
          "default": false
        },
        "skip-install": {
          "name": "skip-install",
          "type": "Boolean",
          "description": "Do not automatically install dependencies",
          "default": false
        },
        "force-install": {
          "name": "force-install",
          "type": "Boolean",
          "description": "Fail on install dependencies error",
          "default": false
        },
        "ask-answered": {
          "type": "Boolean",
          "description": "Show prompts for already configured options",
          "default": false,
          "name": "ask-answered",
          "hide": false
        },
        "controllerType": {
          "type": "String",
          "required": false,
          "description": "Type for the controller",
          "name": "controllerType",
          "hide": false
        },
        "config": {
          "type": "String",
          "alias": "c",
          "description": "JSON file name or value to configure options",
          "name": "config",
          "hide": false
        },
        "yes": {
          "type": "Boolean",
          "alias": "y",
          "description": "Skip all confirmation prompts with default or provided value",
          "name": "yes",
          "hide": false
        },
        "format": {
          "type": "Boolean",
          "description": "Format generated code using npm run lint:fix",
          "name": "format",
          "hide": false
        },
        "packageManager": {
          "type": "String",
          "description": "Change the default package manager",
          "alias": "pm",
          "name": "packageManager",
          "hide": false
        }
      },
      "arguments": [
        {
          "type": "String",
          "required": false,
          "description": "Name for the controller",
          "name": "name"
        }
      ],
      "name": "controller"
    },
    "datasource": {
      "options": {
        "help": {
          "name": "help",
          "type": "Boolean",
          "alias": "h",
          "description": "Print the generator's options and usage"
        },
        "skip-cache": {
          "name": "skip-cache",
          "type": "Boolean",
          "description": "Do not remember prompt answers",
          "default": false
        },
        "skip-install": {
          "name": "skip-install",
          "type": "Boolean",
          "description": "Do not automatically install dependencies",
          "default": false
        },
        "force-install": {
          "name": "force-install",
          "type": "Boolean",
          "description": "Fail on install dependencies error",
          "default": false
        },
        "ask-answered": {
          "type": "Boolean",
          "description": "Show prompts for already configured options",
          "default": false,
          "name": "ask-answered",
          "hide": false
        },
        "config": {
          "type": "String",
          "alias": "c",
          "description": "JSON file name or value to configure options",
          "name": "config",
          "hide": false
        },
        "yes": {
          "type": "Boolean",
          "alias": "y",
          "description": "Skip all confirmation prompts with default or provided value",
          "name": "yes",
          "hide": false
        },
        "format": {
          "type": "Boolean",
          "description": "Format generated code using npm run lint:fix",
          "name": "format",
          "hide": false
        },
        "packageManager": {
          "type": "String",
          "description": "Change the default package manager",
          "alias": "pm",
          "name": "packageManager",
          "hide": false
        }
      },
      "arguments": [
        {
          "type": "String",
          "required": false,
          "description": "Name for the datasource",
          "name": "name"
        }
      ],
      "name": "datasource"
    },
    "import-lb3-models": {
      "options": {
        "help": {
          "name": "help",
          "type": "Boolean",
          "alias": "h",
          "description": "Print the generator's options and usage"
        },
        "skip-cache": {
          "name": "skip-cache",
          "type": "Boolean",
          "description": "Do not remember prompt answers",
          "default": false
        },
        "skip-install": {
          "name": "skip-install",
          "type": "Boolean",
          "description": "Do not automatically install dependencies",
          "default": false
        },
        "force-install": {
          "name": "force-install",
          "type": "Boolean",
          "description": "Fail on install dependencies error",
          "default": false
        },
        "ask-answered": {
          "type": "Boolean",
          "description": "Show prompts for already configured options",
          "default": false,
          "name": "ask-answered",
          "hide": false
        },
        "config": {
          "type": "String",
          "alias": "c",
          "description": "JSON file name or value to configure options",
          "name": "config",
          "hide": false
        },
        "yes": {
          "type": "Boolean",
          "alias": "y",
          "description": "Skip all confirmation prompts with default or provided value",
          "name": "yes",
          "hide": false
        },
        "format": {
          "type": "Boolean",
          "description": "Format generated code using npm run lint:fix",
          "name": "format",
          "hide": false
        },
        "packageManager": {
          "type": "String",
          "description": "Change the default package manager",
          "alias": "pm",
          "name": "packageManager",
          "hide": false
        },
        "outDir": {
          "type": "String",
          "description": "Directory where to write the generated source file",
          "default": "src/models",
          "name": "outDir",
          "hide": false
        }
      },
      "arguments": [
        {
          "type": "String",
          "required": true,
          "description": "Path to your LoopBack 3.x application. This can be a project directory (e.g. \\"my-lb3-app\\") or the server file (e.g. \\"my-lb3-app/server/server.js\\").",
          "name": "lb3app"
        }
      ],
      "name": "import-lb3-models"
    },
    "model": {
      "options": {
        "help": {
          "name": "help",
          "type": "Boolean",
          "alias": "h",
          "description": "Print the generator's options and usage"
        },
        "skip-cache": {
          "name": "skip-cache",
          "type": "Boolean",
          "description": "Do not remember prompt answers",
          "default": false
        },
        "skip-install": {
          "name": "skip-install",
          "type": "Boolean",
          "description": "Do not automatically install dependencies",
          "default": false
        },
        "force-install": {
          "name": "force-install",
          "type": "Boolean",
          "description": "Fail on install dependencies error",
          "default": false
        },
        "ask-answered": {
          "type": "Boolean",
          "description": "Show prompts for already configured options",
          "default": false,
          "name": "ask-answered",
          "hide": false
        },
        "base": {
          "type": "String",
          "required": false,
          "description": "A valid based model",
          "name": "base",
          "hide": false
        },
        "dataSource": {
          "type": "String",
          "required": false,
          "description": "The name of the dataSource which contains this model and suppots model discovery",
          "name": "dataSource",
          "hide": false
        },
        "table": {
          "type": "String",
          "required": false,
          "description": "If discovering a model from a dataSource, specify the name of its table/view",
          "name": "table",
          "hide": false
        },
        "schema": {
          "type": "String",
          "required": false,
          "description": "If discovering a model from a dataSource, specify the schema which contains it",
          "name": "schema",
          "hide": false
        },
        "config": {
          "type": "String",
          "alias": "c",
          "description": "JSON file name or value to configure options",
          "name": "config",
          "hide": false
        },
        "yes": {
          "type": "Boolean",
          "alias": "y",
          "description": "Skip all confirmation prompts with default or provided value",
          "name": "yes",
          "hide": false
        },
        "format": {
          "type": "Boolean",
          "description": "Format generated code using npm run lint:fix",
          "name": "format",
          "hide": false
        },
        "packageManager": {
          "type": "String",
          "description": "Change the default package manager",
          "alias": "pm",
          "name": "packageManager",
          "hide": false
        }
      },
      "arguments": [
        {
          "type": "String",
          "required": false,
          "description": "Name for the model",
          "name": "name"
        }
      ],
      "name": "model"
    },
    "repository": {
      "options": {
        "help": {
          "name": "help",
          "type": "Boolean",
          "alias": "h",
          "description": "Print the generator's options and usage"
        },
        "skip-cache": {
          "name": "skip-cache",
          "type": "Boolean",
          "description": "Do not remember prompt answers",
          "default": false
        },
        "skip-install": {
          "name": "skip-install",
          "type": "Boolean",
          "description": "Do not automatically install dependencies",
          "default": false
        },
        "force-install": {
          "name": "force-install",
          "type": "Boolean",
          "description": "Fail on install dependencies error",
          "default": false
        },
        "ask-answered": {
          "type": "Boolean",
          "description": "Show prompts for already configured options",
          "default": false,
          "name": "ask-answered",
          "hide": false
        },
        "model": {
          "type": "String",
          "required": false,
          "description": "A valid model name",
          "name": "model",
          "hide": false
        },
        "id": {
          "type": "String",
          "required": false,
          "description": "A valid ID property name for the specified model",
          "name": "id",
          "hide": false
        },
        "datasource": {
          "type": "String",
          "required": false,
          "description": "A valid datasource name",
          "name": "datasource",
          "hide": false
        },
        "repositoryBaseClass": {
          "type": "String",
          "required": false,
          "description": "A valid repository base class",
          "default": "DefaultCrudRepository",
          "name": "repositoryBaseClass",
          "hide": false
        },
        "config": {
          "type": "String",
          "alias": "c",
          "description": "JSON file name or value to configure options",
          "name": "config",
          "hide": false
        },
        "yes": {
          "type": "Boolean",
          "alias": "y",
          "description": "Skip all confirmation prompts with default or provided value",
          "name": "yes",
          "hide": false
        },
        "format": {
          "type": "Boolean",
          "description": "Format generated code using npm run lint:fix",
          "name": "format",
          "hide": false
        },
        "packageManager": {
          "type": "String",
          "description": "Change the default package manager",
          "alias": "pm",
          "name": "packageManager",
          "hide": false
        }
      },
      "arguments": [
        {
          "type": "String",
          "required": false,
          "description": "Name for the repository ",
          "name": "name"
        }
      ],
      "name": "repository"
    },
    "service": {
      "options": {
        "help": {
          "name": "help",
          "type": "Boolean",
          "alias": "h",
          "description": "Print the generator's options and usage"
        },
        "skip-cache": {
          "name": "skip-cache",
          "type": "Boolean",
          "description": "Do not remember prompt answers",
          "default": false
        },
        "skip-install": {
          "name": "skip-install",
          "type": "Boolean",
          "description": "Do not automatically install dependencies",
          "default": false
        },
        "force-install": {
          "name": "force-install",
          "type": "Boolean",
          "description": "Fail on install dependencies error",
          "default": false
        },
        "ask-answered": {
          "type": "Boolean",
          "description": "Show prompts for already configured options",
          "default": false,
          "name": "ask-answered",
          "hide": false
        },
        "type": {
          "type": "String",
          "required": false,
          "description": "Service type - proxy, class or provider",
          "name": "type",
          "hide": false
        },
        "datasource": {
          "type": "String",
          "required": false,
          "description": "A valid datasource name",
          "name": "datasource",
          "hide": false
        },
        "config": {
          "type": "String",
          "alias": "c",
          "description": "JSON file name or value to configure options",
          "name": "config",
          "hide": false
        },
        "yes": {
          "type": "Boolean",
          "alias": "y",
          "description": "Skip all confirmation prompts with default or provided value",
          "name": "yes",
          "hide": false
        },
        "format": {
          "type": "Boolean",
          "description": "Format generated code using npm run lint:fix",
          "name": "format",
          "hide": false
        },
        "packageManager": {
          "type": "String",
          "description": "Change the default package manager",
          "alias": "pm",
          "name": "packageManager",
          "hide": false
        }
      },
      "arguments": [
        {
          "type": "String",
          "required": false,
          "description": "Name for the service",
          "name": "name"
        }
      ],
      "name": "service"
    },
    "example": {
      "options": {
        "help": {
          "name": "help",
          "type": "Boolean",
          "alias": "h",
          "description": "Print the generator's options and usage"
        },
        "skip-cache": {
          "name": "skip-cache",
          "type": "Boolean",
          "description": "Do not remember prompt answers",
          "default": false
        },
        "skip-install": {
          "name": "skip-install",
          "type": "Boolean",
          "description": "Do not automatically install dependencies",
          "default": false
        },
        "force-install": {
          "name": "force-install",
          "type": "Boolean",
          "description": "Fail on install dependencies error",
          "default": false
        },
        "ask-answered": {
          "type": "Boolean",
          "description": "Show prompts for already configured options",
          "default": false,
          "name": "ask-answered",
          "hide": false
        },
        "config": {
          "type": "String",
          "alias": "c",
          "description": "JSON file name or value to configure options",
          "name": "config",
          "hide": false
        },
        "yes": {
          "type": "Boolean",
          "alias": "y",
          "description": "Skip all confirmation prompts with default or provided value",
          "name": "yes",
          "hide": false
        },
        "format": {
          "type": "Boolean",
          "description": "Format generated code using npm run lint:fix",
          "name": "format",
          "hide": false
        },
        "packageManager": {
          "type": "String",
          "description": "Change the default package manager",
          "alias": "pm",
          "name": "packageManager",
          "hide": false
        }
      },
      "arguments": [
        {
          "type": "String",
          "description": "Name of the example to clone",
          "required": false,
          "name": "example-name"
        }
      ],
      "name": "example"
    },
    "openapi": {
      "options": {
        "help": {
          "name": "help",
          "type": "Boolean",
          "alias": "h",
          "description": "Print the generator's options and usage"
        },
        "skip-cache": {
          "name": "skip-cache",
          "type": "Boolean",
          "description": "Do not remember prompt answers",
          "default": false
        },
        "skip-install": {
          "name": "skip-install",
          "type": "Boolean",
          "description": "Do not automatically install dependencies",
          "default": false
        },
        "force-install": {
          "name": "force-install",
          "type": "Boolean",
          "description": "Fail on install dependencies error",
          "default": false
        },
        "ask-answered": {
          "type": "Boolean",
          "description": "Show prompts for already configured options",
          "default": false,
          "name": "ask-answered",
          "hide": false
        },
        "url": {
          "description": "URL or file path of the OpenAPI spec",
          "required": false,
          "type": "String",
          "name": "url",
          "hide": false
        },
        "validate": {
          "description": "Validate the OpenAPI spec",
          "required": false,
          "default": false,
          "type": "Boolean",
          "name": "validate",
          "hide": false
        },
        "server": {
          "description": "Generate server-side controllers for the OpenAPI spec",
          "required": false,
          "default": true,
          "type": "Boolean",
          "name": "server",
          "hide": false
        },
        "client": {
          "description": "Generate client-side service proxies for the OpenAPI spec",
          "required": false,
          "default": false,
          "type": "Boolean",
          "name": "client",
          "hide": false
        },
        "datasource": {
          "type": "String",
          "required": false,
          "description": "A valid datasource name for the OpenAPI endpoint",
          "name": "datasource",
          "hide": false
        },
        "baseModel": {
          "description": "Base model class",
          "required": false,
          "default": "",
          "type": "String",
          "name": "baseModel",
          "hide": false
        },
        "promote-anonymous-schemas": {
          "description": "Promote anonymous schemas as models",
          "required": false,
          "default": false,
          "type": "Boolean",
          "name": "promote-anonymous-schemas",
          "hide": false
        },
        "config": {
          "type": "String",
          "alias": "c",
          "description": "JSON file name or value to configure options",
          "name": "config",
          "hide": false
        },
        "yes": {
          "type": "Boolean",
          "alias": "y",
          "description": "Skip all confirmation prompts with default or provided value",
          "name": "yes",
          "hide": false
        },
        "format": {
          "type": "Boolean",
          "description": "Format generated code using npm run lint:fix",
          "name": "format",
          "hide": false
        },
        "packageManager": {
          "type": "String",
          "description": "Change the default package manager",
          "alias": "pm",
          "name": "packageManager",
          "hide": false
        }
      },
      "arguments": [
        {
          "description": "URL or file path of the OpenAPI spec",
          "required": false,
          "type": "String",
          "name": "url"
        }
      ],
      "name": "openapi"
    },
    "observer": {
      "options": {
        "help": {
          "name": "help",
          "type": "Boolean",
          "alias": "h",
          "description": "Print the generator's options and usage"
        },
        "skip-cache": {
          "name": "skip-cache",
          "type": "Boolean",
          "description": "Do not remember prompt answers",
          "default": false
        },
        "skip-install": {
          "name": "skip-install",
          "type": "Boolean",
          "description": "Do not automatically install dependencies",
          "default": false
        },
        "force-install": {
          "name": "force-install",
          "type": "Boolean",
          "description": "Fail on install dependencies error",
          "default": false
        },
        "ask-answered": {
          "type": "Boolean",
          "description": "Show prompts for already configured options",
          "default": false,
          "name": "ask-answered",
          "hide": false
        },
        "group": {
          "description": "Name of the observer group for ordering",
          "required": false,
          "type": "String",
          "name": "group",
          "hide": false
        },
        "config": {
          "type": "String",
          "alias": "c",
          "description": "JSON file name or value to configure options",
          "name": "config",
          "hide": false
        },
        "yes": {
          "type": "Boolean",
          "alias": "y",
          "description": "Skip all confirmation prompts with default or provided value",
          "name": "yes",
          "hide": false
        },
        "format": {
          "type": "Boolean",
          "description": "Format generated code using npm run lint:fix",
          "name": "format",
          "hide": false
        },
        "packageManager": {
          "type": "String",
          "description": "Change the default package manager",
          "alias": "pm",
          "name": "packageManager",
          "hide": false
        }
      },
      "arguments": [
        {
          "type": "String",
          "required": false,
          "description": "Name for the observer",
          "name": "name"
        }
      ],
      "name": "observer"
    },
    "interceptor": {
      "options": {
        "help": {
          "name": "help",
          "type": "Boolean",
          "alias": "h",
          "description": "Print the generator's options and usage"
        },
        "skip-cache": {
          "name": "skip-cache",
          "type": "Boolean",
          "description": "Do not remember prompt answers",
          "default": false
        },
        "skip-install": {
          "name": "skip-install",
          "type": "Boolean",
          "description": "Do not automatically install dependencies",
          "default": false
        },
        "force-install": {
          "name": "force-install",
          "type": "Boolean",
          "description": "Fail on install dependencies error",
          "default": false
        },
        "ask-answered": {
          "type": "Boolean",
          "description": "Show prompts for already configured options",
          "default": false,
          "name": "ask-answered",
          "hide": false
        },
        "global": {
          "description": "Flag to indicate a global interceptor",
          "required": false,
          "type": "Boolean",
          "name": "global",
          "hide": false
        },
        "group": {
          "description": "Group name for ordering the global interceptor",
          "required": false,
          "type": "String",
          "name": "group",
          "hide": false
        },
        "config": {
          "type": "String",
          "alias": "c",
          "description": "JSON file name or value to configure options",
          "name": "config",
          "hide": false
        },
        "yes": {
          "type": "Boolean",
          "alias": "y",
          "description": "Skip all confirmation prompts with default or provided value",
          "name": "yes",
          "hide": false
        },
        "format": {
          "type": "Boolean",
          "description": "Format generated code using npm run lint:fix",
          "name": "format",
          "hide": false
        },
        "packageManager": {
          "type": "String",
          "description": "Change the default package manager",
          "alias": "pm",
          "name": "packageManager",
          "hide": false
        }
      },
      "arguments": [
        {
          "type": "String",
          "required": false,
          "description": "Name for the interceptor",
          "name": "name"
        }
      ],
      "name": "interceptor"
    },
    "discover": {
      "options": {
        "help": {
          "name": "help",
          "type": "Boolean",
          "alias": "h",
          "description": "Print the generator's options and usage"
        },
        "skip-cache": {
          "name": "skip-cache",
          "type": "Boolean",
          "description": "Do not remember prompt answers",
          "default": false
        },
        "skip-install": {
          "name": "skip-install",
          "type": "Boolean",
          "description": "Do not automatically install dependencies",
          "default": false
        },
        "force-install": {
          "name": "force-install",
          "type": "Boolean",
          "description": "Fail on install dependencies error",
          "default": false
        },
        "ask-answered": {
          "type": "Boolean",
          "description": "Show prompts for already configured options",
          "default": false,
          "name": "ask-answered",
          "hide": false
        },
        "config": {
          "type": "String",
          "alias": "c",
          "description": "JSON file name or value to configure options",
          "name": "config",
          "hide": false
        },
        "yes": {
          "type": "Boolean",
          "alias": "y",
          "description": "Skip all confirmation prompts with default or provided value",
          "name": "yes",
          "hide": false
        },
        "format": {
          "type": "Boolean",
          "description": "Format generated code using npm run lint:fix",
          "name": "format",
          "hide": false
        },
        "packageManager": {
          "type": "String",
          "description": "Change the default package manager",
          "alias": "pm",
          "name": "packageManager",
          "hide": false
        },
        "dataSource": {
          "type": "String",
          "alias": "ds",
          "description": "The name of the datasource to discover",
          "name": "dataSource",
          "hide": false
        },
        "views": {
          "type": "Boolean",
          "description": "Boolean to discover views",
          "default": true,
          "name": "views",
          "hide": false
        },
        "schema": {
          "type": "String",
          "description": "Schema to discover",
          "default": "",
          "name": "schema",
          "hide": false
        },
        "all": {
          "type": "Boolean",
          "description": "Discover all models without prompting users to select",
          "default": false,
          "name": "all",
          "hide": false
        },
        "outDir": {
          "type": "String",
          "description": "Specify the directory into which the \`model.model.ts\` files will be placed",
          "name": "outDir",
          "hide": false
        }
      },
      "arguments": [
        {
          "type": "String",
          "required": false,
          "description": "Name for the discover",
          "name": "name"
        }
      ],
      "name": "discover"
    },
    "relation": {
      "options": {
        "help": {
          "name": "help",
          "type": "Boolean",
          "alias": "h",
          "description": "Print the generator's options and usage"
        },
        "skip-cache": {
          "name": "skip-cache",
          "type": "Boolean",
          "description": "Do not remember prompt answers",
          "default": false
        },
        "skip-install": {
          "name": "skip-install",
          "type": "Boolean",
          "description": "Do not automatically install dependencies",
          "default": false
        },
        "force-install": {
          "name": "force-install",
          "type": "Boolean",
          "description": "Fail on install dependencies error",
          "default": false
        },
        "ask-answered": {
          "type": "Boolean",
          "description": "Show prompts for already configured options",
          "default": false,
          "name": "ask-answered",
          "hide": false
        },
        "relationType": {
          "type": "String",
          "required": false,
          "description": "Relation type",
          "name": "relationType",
          "hide": false
        },
        "sourceModel": {
          "type": "String",
          "required": false,
          "description": "Source model",
          "name": "sourceModel",
          "hide": false
        },
        "destinationModel": {
          "type": "String",
          "required": false,
          "description": "Destination model",
          "name": "destinationModel",
          "hide": false
        },
        "defaultForeignKeyName": {
          "type": "String",
          "required": false,
          "description": "default foreign key name",
          "name": "defaultForeignKeyName",
          "hide": false
        },
        "foreignKeyName": {
          "type": "String",
          "required": false,
          "description": "Destination model foreign key name",
          "name": "foreignKeyName",
          "hide": false
        },
        "relationName": {
          "type": "String",
          "required": false,
          "description": "Relation name",
          "name": "relationName",
          "hide": false
        },
        "defaultRelationName": {
          "type": "String",
          "required": false,
          "description": "Default relation name",
          "name": "defaultRelationName",
          "hide": false
        },
        "registerInclusionResolver": {
          "type": "Boolean",
          "required": false,
          "description": "Allow <sourceModel> queries to include data from related <destinationModel>",
          "name": "registerInclusionResolver",
          "hide": false
        },
        "config": {
          "type": "String",
          "alias": "c",
          "description": "JSON file name or value to configure options",
          "name": "config",
          "hide": false
        },
        "yes": {
          "type": "Boolean",
          "alias": "y",
          "description": "Skip all confirmation prompts with default or provided value",
          "name": "yes",
          "hide": false
        },
        "format": {
          "type": "Boolean",
          "description": "Format generated code using npm run lint:fix",
          "name": "format",
          "hide": false
        },
        "packageManager": {
          "type": "String",
          "description": "Change the default package manager",
          "alias": "pm",
          "name": "packageManager",
          "hide": false
        }
      },
      "arguments": [],
      "name": "relation"
    },
    "update": {
      "options": {
        "help": {
          "name": "help",
          "type": "Boolean",
          "alias": "h",
          "description": "Print the generator's options and usage"
        },
        "skip-cache": {
          "name": "skip-cache",
          "type": "Boolean",
          "description": "Do not remember prompt answers",
          "default": false
        },
        "skip-install": {
          "name": "skip-install",
          "type": "Boolean",
          "description": "Do not automatically install dependencies",
          "default": false
        },
        "force-install": {
          "name": "force-install",
          "type": "Boolean",
          "description": "Fail on install dependencies error",
          "default": false
        },
        "ask-answered": {
          "type": "Boolean",
          "description": "Show prompts for already configured options",
          "default": false,
          "name": "ask-answered",
          "hide": false
        },
        "semver": {
          "type": "Boolean",
          "required": false,
          "default": false,
          "description": "Check version compatibility using semver semantics",
          "name": "semver",
          "hide": false
        },
        "config": {
          "type": "String",
          "alias": "c",
          "description": "JSON file name or value to configure options",
          "name": "config",
          "hide": false
        },
        "yes": {
          "type": "Boolean",
          "alias": "y",
          "description": "Skip all confirmation prompts with default or provided value",
          "name": "yes",
          "hide": false
        },
        "format": {
          "type": "Boolean",
          "description": "Format generated code using npm run lint:fix",
          "name": "format",
          "hide": false
        },
        "packageManager": {
          "type": "String",
          "description": "Change the default package manager",
          "alias": "pm",
          "name": "packageManager",
          "hide": false
        }
      },
      "arguments": [],
      "name": "update"
    },
    "rest-crud": {
      "options": {
        "help": {
          "name": "help",
          "type": "Boolean",
          "alias": "h",
          "description": "Print the generator's options and usage"
        },
        "skip-cache": {
          "name": "skip-cache",
          "type": "Boolean",
          "description": "Do not remember prompt answers",
          "default": false
        },
        "skip-install": {
          "name": "skip-install",
          "type": "Boolean",
          "description": "Do not automatically install dependencies",
          "default": false
        },
        "force-install": {
          "name": "force-install",
          "type": "Boolean",
          "description": "Fail on install dependencies error",
          "default": false
        },
        "ask-answered": {
          "type": "Boolean",
          "description": "Show prompts for already configured options",
          "default": false,
          "name": "ask-answered",
          "hide": false
        },
        "model": {
          "type": "String",
          "required": false,
          "description": "A valid model name",
          "name": "model",
          "hide": false
        },
        "datasource": {
          "type": "String",
          "required": false,
          "description": "A valid datasource name",
          "name": "datasource",
          "hide": false
        },
        "basePath": {
          "type": "String",
          "required": false,
          "description": "A valid base path",
          "name": "basePath",
          "hide": false
        },
        "config": {
          "type": "String",
          "alias": "c",
          "description": "JSON file name or value to configure options",
          "name": "config",
          "hide": false
        },
        "yes": {
          "type": "Boolean",
          "alias": "y",
          "description": "Skip all confirmation prompts with default or provided value",
          "name": "yes",
          "hide": false
        },
        "format": {
          "type": "Boolean",
          "description": "Format generated code using npm run lint:fix",
          "name": "format",
          "hide": false
        },
        "packageManager": {
          "type": "String",
          "description": "Change the default package manager",
          "alias": "pm",
          "name": "packageManager",
          "hide": false
        }
      },
      "arguments": [
        {
          "type": "String",
          "required": false,
          "description": "Name for the rest-config",
          "name": "name"
        }
      ],
      "name": "rest-crud"
    },
    "copyright": {
      "options": {
        "help": {
          "type": "Boolean",
          "alias": "h",
          "description": "Print the generator's options and usage",
          "name": "help",
          "hide": false
        },
        "skip-cache": {
          "type": "Boolean",
          "description": "Do not remember prompt answers",
          "default": false,
          "name": "skip-cache",
          "hide": false
        },
        "skip-install": {
          "type": "Boolean",
          "description": "Do not automatically install dependencies",
          "default": false,
          "name": "skip-install",
          "hide": false
        },
        "force-install": {
          "type": "Boolean",
          "description": "Fail on install dependencies error",
          "default": false,
          "name": "force-install",
          "hide": false
        },
        "ask-answered": {
          "type": "Boolean",
          "description": "Show prompts for already configured options",
          "default": false,
          "name": "ask-answered",
          "hide": false
        },
        "owner": {
          "type": "String",
          "required": false,
          "description": "Copyright owner",
          "name": "owner",
          "hide": false
        },
        "license": {
          "type": "String",
          "required": false,
          "description": "License",
          "name": "license",
          "hide": false
        },
        "updateLicense": {
          "type": "Boolean",
          "required": false,
          "description": "Update license in package.json and LICENSE",
          "name": "updateLicense",
          "hide": false
        },
        "gitOnly": {
          "type": "Boolean",
          "required": false,
          "default": true,
          "description": "Only update git tracked files",
          "name": "gitOnly",
          "hide": false
        },
        "exclude": {
          "type": "String",
          "required": false,
          "default": "",
          "description": "Exclude files that match the pattern",
          "name": "exclude",
          "hide": false
        }
      },
      "arguments": [],
      "name": "copyright"
    },
    "openapi-spec": {
      "options": {
        "help": {
          "name": "help",
          "type": "Boolean",
          "alias": "h",
          "description": "Print the generator's options and usage"
        },
        "skip-cache": {
          "name": "skip-cache",
          "type": "Boolean",
          "description": "Do not remember prompt answers",
          "default": false
        },
        "skip-install": {
          "name": "skip-install",
          "type": "Boolean",
          "description": "Do not automatically install dependencies",
          "default": false
        },
        "force-install": {
          "name": "force-install",
          "type": "Boolean",
          "description": "Fail on install dependencies error",
          "default": false
        },
        "ask-answered": {
          "type": "Boolean",
          "description": "Show prompts for already configured options",
          "default": false,
          "name": "ask-answered",
          "hide": false
        },
        "out": {
          "alias": "o",
          "type": "String",
          "required": false,
          "description": "File name for the OpenAPI spec to be written",
          "name": "out",
          "hide": false
        },
        "config": {
          "type": "String",
          "alias": "c",
          "description": "JSON file name or value to configure options",
          "name": "config",
          "hide": false
        },
        "yes": {
          "type": "Boolean",
          "alias": "y",
          "description": "Skip all confirmation prompts with default or provided value",
          "name": "yes",
          "hide": false
        },
        "format": {
          "type": "Boolean",
          "description": "Format generated code using npm run lint:fix",
          "name": "format",
          "hide": false
        },
        "packageManager": {
          "type": "String",
          "description": "Change the default package manager",
          "alias": "pm",
          "name": "packageManager",
          "hide": false
        }
      },
      "arguments": [],
      "name": "openapi-spec"
    }
  }
}

`;
