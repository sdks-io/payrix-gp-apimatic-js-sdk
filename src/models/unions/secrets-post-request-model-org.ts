import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { orgsPostRequestSchema, type OrgsPostRequest } from "../orgs-post-request.js";

/** The identifier of the Org associated with this secret. */
export type SecretsPostRequestModelOrg = string | OrgsPostRequest;

export const secretsPostRequestModelOrgSchema: Schema<SecretsPostRequestModelOrg> =
  s.of<SecretsPostRequestModelOrg>(s.union([s.string(), s.lazy(() => orgsPostRequestSchema)]));
