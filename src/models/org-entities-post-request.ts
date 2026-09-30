import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { orgsPostRequestSchema, type OrgsPostRequest } from "./orgs-post-request.js";

export type OrgEntitiesPostRequest = {
  org: OrgsPostRequest;
  /** The identifier of the Entity that this orgEntity is associated with. */
  entity: string;
};

export const orgEntitiesPostRequestSchema: Schema<OrgEntitiesPostRequest> = s.object<OrgEntitiesPostRequest>({
  org: orgsPostRequestSchema,
  entity: s.string(),
});
