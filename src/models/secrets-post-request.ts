import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import { orgsPostRequestSchema, type OrgsPostRequest } from "./orgs-post-request.js";
import { secretLocked1Schema, type SecretLocked1 } from "./secret-locked1.js";
import { secretType1Schema, type SecretType1 } from "./secret-type1.js";
import { secretsPlatform1Schema, type SecretsPlatform1 } from "./secrets-platform1.js";

export type SecretsPostRequest = {
  /** The identifier of the Login that owns this secret resource. */
  login: string;
  /** The identifier of the Entity associated with this secret. */
  entity?: string;
  org?: OrgsPostRequest;
  /** The identifier of the Division associated with this secret. */
  division?: string;
  /** The identifier of the Partition associated with this secret. */
  partition?: string;
  type: SecretType1;
  platform?: SecretsPlatform1;
  /**
   * The name of this Secret. This field is stored as a text string and must be between 0 and 100
   * characters long.
   */
  name?: string;
  /**
   * A description of this Secret. This field is stored as a text string and must be between 0 and
   * 500 characters long.
   */
  description?: string;
  /**
   * The actual key or the indicator of which key to use. This field is stored as a text string and
   * must be between 1 and 5000 characters long.
   */
  key: string;
  locked?: SecretLocked1;
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const secretsPostRequestSchema: Schema<SecretsPostRequest> = s.object<SecretsPostRequest>({
  login: s.string(),
  entity: s.optional(s.string()),
  org: s.optional(s.lazy(() => orgsPostRequestSchema)),
  division: s.optional(s.string()),
  partition: s.optional(s.string()),
  type: secretType1Schema,
  platform: s.optional(s.lazy(() => secretsPlatform1Schema)),
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  key: s.string(),
  locked: s.optional(s.lazy(() => secretLocked1Schema)),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
});
