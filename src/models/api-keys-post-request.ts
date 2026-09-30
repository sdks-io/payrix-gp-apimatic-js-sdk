import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { apiKeyPublic1Schema, type ApiKeyPublic1 } from "./api-key-public1.js";
import { apikeysToken1Schema, type ApikeysToken1 } from "./apikeys-token1.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";

export type ApiKeysPostRequest = {
  /**
   * The login under which to perform this action. If you do not supply a login in this field, then
   * the API defaults to the login that is currently authenticated.
   */
  login: string;
  /**
   * The name for the key. An apikey may represent a private (secret) key code that is used
   * internally (server-side) by the application authenticating to the API.
   *
   * A private key should never be exposed to external/untrusted entities and should be immediately
   * deactivated if compromised. All API resources and actions can be accessed/performed with a
   * private apikey.
   */
  name?: string;
  /** Description of ApiKeys. */
  description?: string;
  public?: ApiKeyPublic1;
  token?: ApikeysToken1;
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const apiKeysPostRequestSchema: Schema<ApiKeysPostRequest> = s.object<ApiKeysPostRequest>({
  login: s.string(),
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  public: s.optional(s.lazy(() => apiKeyPublic1Schema)),
  token: s.optional(s.lazy(() => apikeysToken1Schema)),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
});
