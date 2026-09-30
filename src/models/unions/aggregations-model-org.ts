import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { orgsResponseSchema, type OrgsResponse } from "../orgs-response.js";

/** The identifier of the Org that this Aggregation applies to. */
export type AggregationsModelOrg = string | OrgsResponse;

export const aggregationsModelOrgSchema: Schema<AggregationsModelOrg> = s.of<AggregationsModelOrg>(
  s.union([s.string(), s.lazy(() => orgsResponseSchema)]),
);
