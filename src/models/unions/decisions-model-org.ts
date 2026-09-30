import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { orgsResponseSchema, type OrgsResponse } from "../orgs-response.js";

/**
 * If this decision resource relates to an Org, then this field stores the identifier of the Org.
 */
export type DecisionsModelOrg = string | OrgsResponse;

export const decisionsModelOrgSchema: Schema<DecisionsModelOrg> = s.of<DecisionsModelOrg>(
  s.union([s.string(), s.lazy(() => orgsResponseSchema)]),
);
