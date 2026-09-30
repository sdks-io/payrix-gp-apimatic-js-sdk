import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { orgsResponseSchema, type OrgsResponse } from "../orgs-response.js";

/** The identifier of the Org in which entities will have their earnings/expenses shares. */
export type ProfitSharesModelOrg = string | OrgsResponse;

export const profitSharesModelOrgSchema: Schema<ProfitSharesModelOrg> = s.of<ProfitSharesModelOrg>(
  s.union([s.string(), s.lazy(() => orgsResponseSchema)]),
);
