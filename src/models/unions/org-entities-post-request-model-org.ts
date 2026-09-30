import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { orgsPostRequestSchema, type OrgsPostRequest } from "../orgs-post-request.js";

/** The identifier of the Org that this orgEntity is associated with. */
export type OrgEntitiesPostRequestModelOrg = string | OrgsPostRequest;

export const orgEntitiesPostRequestModelOrgSchema: Schema<OrgEntitiesPostRequestModelOrg> =
  s.of<OrgEntitiesPostRequestModelOrg>(s.union([s.string(), s.lazy(() => orgsPostRequestSchema)]));
