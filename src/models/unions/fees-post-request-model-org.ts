import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { orgsPostRequestSchema, type OrgsPostRequest } from "../orgs-post-request.js";

/**
 * The identifier of the Org who should pay this Fee on behalf of the Entity identified in the value
 * of the 'forentity' field. This field is optional. If it is set, then the Fee is charged to this
 * Org instead.
 */
export type FeesPostRequestModelOrg = string | OrgsPostRequest;

export const feesPostRequestModelOrgSchema: Schema<FeesPostRequestModelOrg> = s.of<FeesPostRequestModelOrg>(
  s.union([s.string(), s.lazy(() => orgsPostRequestSchema)]),
);
