import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { loginsResponseSchema, type LoginsResponse } from "../logins-response.js";

/** The identifier of the Login that this Aggregation applies to. */
export type AggregationsModelForlogin = string | LoginsResponse;

export const aggregationsModelForloginSchema: Schema<AggregationsModelForlogin> =
  s.of<AggregationsModelForlogin>(s.union([s.string(), s.lazy(() => loginsResponseSchema)]));
