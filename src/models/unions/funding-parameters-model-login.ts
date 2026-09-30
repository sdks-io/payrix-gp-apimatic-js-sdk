import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { loginsResponseSchema, type LoginsResponse } from "../logins-response.js";

/** The identifier of the Login that owns this fundingParameter resource. */
export type FundingParametersModelLogin = string | LoginsResponse;

export const fundingParametersModelLoginSchema: Schema<FundingParametersModelLogin> =
  s.of<FundingParametersModelLogin>(s.union([s.string(), s.lazy(() => loginsResponseSchema)]));
