import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { loginsResponseSchema, type LoginsResponse } from "../logins-response.js";

/** The identifier of the Login that this Alert applies to. */
export type AlertsModelForlogin = string | LoginsResponse;

export const alertsModelForloginSchema: Schema<AlertsModelForlogin> = s.of<AlertsModelForlogin>(
  s.union([s.string(), s.lazy(() => loginsResponseSchema)]),
);
