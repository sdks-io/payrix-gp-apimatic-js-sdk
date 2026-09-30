import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { divisionsResponseSchema, type DivisionsResponse } from "../divisions-response.js";

/** The identifier of the Division associated with this fundingParameter. */
export type FundingParametersModelDivision = string | DivisionsResponse;

export const fundingParametersModelDivisionSchema: Schema<FundingParametersModelDivision> =
  s.of<FundingParametersModelDivision>(s.union([s.string(), s.lazy(() => divisionsResponseSchema)]));
