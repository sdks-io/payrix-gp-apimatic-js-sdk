import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { apiKeyPublic1Schema, type ApiKeyPublic1 } from "./api-key-public1.js";
import { apikeysToken1Schema, type ApikeysToken1 } from "./apikeys-token1.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import { login2Schema, type Login2 } from "./login2.js";

export type ApiKeysResponse = {
  /** The ID of this resource. */
  id?: string;
  /**
   * The date and time at which this resource was created. The format should be YYYY-MM-DD
   * HH:MM:SS.SSSS
   */
  created?: string;
  /**
   * The date and time at which this resource was modified. The format should be YYYY-MM-DD
   * HH:MM:SS.SSSS
   */
  modified?: string;
  creator?: Creator18;
  /** The identifier of the Login that last modified this resource. */
  modifier?: string;
  login?: Login2;
  /**
   * The cryptographically secure, randomly generated key to be used in authentication.
   *
   * An apikey may represent a private (secret) key code that is used internally (server-side) by
   * the application authenticating to the API.
   *
   * A private key should never be exposed to external/untrusted entities and should be immediately
   * deactivated if compromised. All API resources and actions can be accessed and performed with a
   * private apikey.
   */
  key?: string;
  /** The name of the API key. */
  name?: string;
  /** Description of the ApiKey. */
  description?: string;
  public?: ApiKeyPublic1;
  token?: ApikeysToken1;
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const apiKeysResponseSchema: Schema<ApiKeysResponse> = s.object<ApiKeysResponse>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  login: s.optional(s.lazy(() => login2Schema)),
  key: s.optional(s.string()),
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  public: s.optional(s.lazy(() => apiKeyPublic1Schema)),
  token: s.optional(s.lazy(() => apikeysToken1Schema)),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
});
