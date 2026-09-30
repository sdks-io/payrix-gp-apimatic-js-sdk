import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { orgsPostRequestSchema, type OrgsPostRequest } from "../orgs-post-request.js";

/**
 * The identifier of the Org that this Reserve's resource applies to. If you set this field, then
 * the Reserve applies to all Entities in the Org.
 */
export type ReservesPostRequestModelOrg = string | OrgsPostRequest;

export const reservesPostRequestModelOrgSchema: Schema<ReservesPostRequestModelOrg> =
  s.of<ReservesPostRequestModelOrg>(s.union([s.string(), s.lazy(() => orgsPostRequestSchema)]));
