import type { ClientOptions } from "./client-options.js";
import type { ServerBase, UrlTemplate } from "./core/api-request.js";
import { ConfigurationError } from "./core/errors.js";
import * as s from "./core/validation/index.js";

export const ServerEnvironment = {
  Production: "production",
  Environment2: "environment2",
  Environment3: "environment3",
} as const;
export type ServerEnvironment = (typeof ServerEnvironment)[keyof typeof ServerEnvironment];

export type Servers = {
  default: (subPath: string) => UrlTemplate;
};

const productionSchemas = {
  baseUrl: s.of(s.defaulted(s.string(), "https://test-api.payrix.com")),
};

const environment2Schemas = {
  baseUrl: s.of(s.defaulted(s.string(), "https://test-api.payrixcanada.com")),
};

const environment3Schemas = {
  baseUrl: s.of(s.defaulted(s.string(), "{serverUrl}")),
  serverUrl: s.of(s.defaulted(s.string(), "https://custom.payrix.com")),
};

export function buildServers(options: ClientOptions): Servers {
  const base = {
    default: defaultServer(options),
  };
  return {
    default: (subPath) => ({ ...base.default, subPath }),
  };
}

function defaultServer(options: ClientOptions): ServerBase {
  const environment = options.serverEnvironment;
  switch (environment) {
    case ServerEnvironment.Production:
    case undefined:
      return { baseUrl: productionSchemas.baseUrl.decode(options.serverOptions?.baseUrl) };
    case ServerEnvironment.Environment2:
      return { baseUrl: environment2Schemas.baseUrl.decode(options.serverOptions?.baseUrl) };
    case ServerEnvironment.Environment3:
      return {
        baseUrl: environment3Schemas.baseUrl.decode(options.serverOptions?.baseUrl),
        variables: { serverUrl: environment3Schemas.serverUrl.decode(options.serverOptions?.serverUrl) },
      };
    default:
      unknownEnvironment(environment);
  }
}

function unknownEnvironment(environment: never): never {
  throw new ConfigurationError(`Unknown server environment: ${String(environment)}`);
}
