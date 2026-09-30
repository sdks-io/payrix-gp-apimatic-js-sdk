import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { orgsResponseSchema, type OrgsResponse } from "../orgs-response.js";

/** The identifier of the Org that this orgEntity is associated with. */
export type OrgEntitiesModelOrg = string | OrgsResponse;

export const orgEntitiesModelOrgSchema: Schema<OrgEntitiesModelOrg> = s.of<OrgEntitiesModelOrg>(
  s.union([s.string(), s.lazy(() => orgsResponseSchema)]),
);
