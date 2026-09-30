import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { orgsResponseSchema, type OrgsResponse } from "../orgs-response.js";

/**
 * The identifier of the Org that this Reserve's resource applies to. If you set this field, then
 * the Reserve applies to all Entities in the Org.
 */
export type ReservesModelOrg = string | OrgsResponse;

export const reservesModelOrgSchema: Schema<ReservesModelOrg> = s.of<ReservesModelOrg>(
  s.union([s.string(), s.lazy(() => orgsResponseSchema)]),
);
