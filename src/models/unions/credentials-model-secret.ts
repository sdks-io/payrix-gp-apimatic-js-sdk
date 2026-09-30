import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { secretsResponseSchema, type SecretsResponse } from "../secrets-response.js";

/**
 * The secret resource identifier to use when connecting using this Credential. This field is only
 * necessary when a private key is required by the integration.
 */
export type CredentialsModelSecret = string | SecretsResponse;

export const credentialsModelSecretSchema: Schema<CredentialsModelSecret> = s.of<CredentialsModelSecret>(
  s.union([s.string(), s.lazy(() => secretsResponseSchema)]),
);
