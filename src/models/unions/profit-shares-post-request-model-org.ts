import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { orgsPostRequestSchema, type OrgsPostRequest } from "../orgs-post-request.js";

/** The identifier of the Org in which entities will have their earnings/expenses shares. */
export type ProfitSharesPostRequestModelOrg = string | OrgsPostRequest;

export const profitSharesPostRequestModelOrgSchema: Schema<ProfitSharesPostRequestModelOrg> =
  s.of<ProfitSharesPostRequestModelOrg>(s.union([s.string(), s.lazy(() => orgsPostRequestSchema)]));
