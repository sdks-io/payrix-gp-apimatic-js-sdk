import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { orgsResponseSchema, type OrgsResponse } from "../orgs-response.js";

/** The identifier of the Org associated with this secret. */
export type SecretsModelOrg = string | OrgsResponse;

export const secretsModelOrgSchema: Schema<SecretsModelOrg> = s.of<SecretsModelOrg>(
  s.union([s.string(), s.lazy(() => orgsResponseSchema)]),
);
