import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";

export type CredentialsPutRequest = {
  /**
   * The name of this Credential resource. This field is stored as a text string and must be between
   * 1 and 100 characters long.
   */
  name?: string;
  /**
   * A description of this Credential resource. This field is stored as a text string and must be
   * between 1 and 100 characters long.
   */
  description?: string;
  /**
   * The username to use when authenticating to the integration associated with this Credential
   * resource. This field is stored as a text string and must be between 1 and 50 characters long.
   */
  username?: string;
  /**
   * The password to use when authenticating to the integration associated with this Credential
   * resource. This field is stored as a text string and must be between 1 and 50 characters long.
   */
  password?: string;
  /**
   * The username to use when connecting to the integration associated with this Credential
   * resource. This field is stored as a text string and must be between 1 and 50 characters long.
   * This field is only necessary when it is required by the integration.
   */
  connectUsername?: string;
  /**
   * The password to use when connecting to the integration associated with this Credential
   * resource. This field is stored as a text string and must be between 1 and 50 characters long.
   * This field is only necessary when it is required by the integration.
   */
  connectPassword?: string;
  /**
   * The secret resource identifier to use when connecting using this Credential. This field is only
   * necessary when a private key is required by the integration.
   */
  secret?: string;
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const credentialsPutRequestSchema: Schema<CredentialsPutRequest> = s.object<CredentialsPutRequest>({
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  username: s.optional(s.string()),
  password: s.optional(s.string()),
  connectUsername: s.optional(s.string()),
  connectPassword: s.optional(s.string()),
  secret: s.optional(s.string()),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
});
