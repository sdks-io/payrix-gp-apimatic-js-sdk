import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { orgsResponseSchema, type OrgsResponse } from "../orgs-response.js";

/** The identifier of the Org associated with this Mcc resource. */
export type MccsModelOrg = string | OrgsResponse;

export const mccsModelOrgSchema: Schema<MccsModelOrg> = s.of<MccsModelOrg>(
  s.union([s.string(), s.lazy(() => orgsResponseSchema)]),
);
