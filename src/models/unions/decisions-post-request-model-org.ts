import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { orgsPostRequestSchema, type OrgsPostRequest } from "../orgs-post-request.js";

/**
 * If this decision resource relates to an Org, then this field stores the identifier of the Org.
 */
export type DecisionsPostRequestModelOrg = string | OrgsPostRequest;

export const decisionsPostRequestModelOrgSchema: Schema<DecisionsPostRequestModelOrg> =
  s.of<DecisionsPostRequestModelOrg>(s.union([s.string(), s.lazy(() => orgsPostRequestSchema)]));
