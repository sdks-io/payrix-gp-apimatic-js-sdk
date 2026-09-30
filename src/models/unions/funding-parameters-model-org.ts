import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { orgsResponseSchema, type OrgsResponse } from "../orgs-response.js";

/** The identifier of the Org associated with this fundingParameter. */
export type FundingParametersModelOrg = string | OrgsResponse;

export const fundingParametersModelOrgSchema: Schema<FundingParametersModelOrg> =
  s.of<FundingParametersModelOrg>(s.union([s.string(), s.lazy(() => orgsResponseSchema)]));
