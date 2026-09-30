import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { orgsResponseSchema, type OrgsResponse } from "../orgs-response.js";

/** The identifier of the Org that this entityRoute applies to. */
export type EntityRoutesModelOrg = string | OrgsResponse;

export const entityRoutesModelOrgSchema: Schema<EntityRoutesModelOrg> = s.of<EntityRoutesModelOrg>(
  s.union([s.string(), s.lazy(() => orgsResponseSchema)]),
);
