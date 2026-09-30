import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { orgsResponseSchema, type OrgsResponse } from "../orgs-response.js";

/**
 * The identifier of the Org who should pay this Fee on behalf of the Entity identified in the value
 * of the 'forentity' field. This field is optional. If it is set, then the Fee is charged to this
 * Org instead.
 */
export type FeesModelOrg = string | OrgsResponse;

export const feesModelOrgSchema: Schema<FeesModelOrg> = s.of<FeesModelOrg>(
  s.union([s.string(), s.lazy(() => orgsResponseSchema)]),
);
