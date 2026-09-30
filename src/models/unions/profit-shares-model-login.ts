import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { loginsResponseSchema, type LoginsResponse } from "../logins-response.js";

/** The identifier of the Login that owns this ProfitShare. */
export type ProfitSharesModelLogin = string | LoginsResponse;

export const profitSharesModelLoginSchema: Schema<ProfitSharesModelLogin> = s.of<ProfitSharesModelLogin>(
  s.union([s.string(), s.lazy(() => loginsResponseSchema)]),
);
