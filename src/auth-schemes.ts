import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { apiKeyHeaderAuth } from "./core/auth/schemes.js";

export type AuthSchemes = {
  readonly apiKey: AuthScheme;
  readonly sessionKey: AuthScheme;
  readonly txnSessionKey: AuthScheme;
  readonly username: AuthScheme;
  readonly password: AuthScheme;
};

export function buildAuthSchemes(options: ClientOptions): AuthSchemes {
  return {
    apiKey: apiKeyHeaderAuth({ name: "APIKEY", token: options.apiKey }),
    sessionKey: apiKeyHeaderAuth({ name: "SESSIONKEY", token: options.sessionKey }),
    txnSessionKey: apiKeyHeaderAuth({ name: "TXNSESSIONKEY", token: options.txnSessionKey }),
    username: apiKeyHeaderAuth({ name: "USERNAME", token: options.username }),
    password: apiKeyHeaderAuth({ name: "PASSWORD", token: options.password }),
  };
}
