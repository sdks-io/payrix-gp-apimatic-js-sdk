import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { loginsResponseSchema, type LoginsResponse } from "../logins-response.js";

/** The identifier of the Login that owns this resource. */
export type CurrencyRatesModelLogin = string | LoginsResponse;

export const currencyRatesModelLoginSchema: Schema<CurrencyRatesModelLogin> = s.of<CurrencyRatesModelLogin>(
  s.union([s.string(), s.lazy(() => loginsResponseSchema)]),
);
