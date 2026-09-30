import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { loginsResponseSchema, type LoginsResponse } from "../logins-response.js";

/** The identifier of the Login that created this resource. */
export type AlertsModelLogin = string | LoginsResponse;

export const alertsModelLoginSchema: Schema<AlertsModelLogin> = s.of<AlertsModelLogin>(
  s.union([s.string(), s.lazy(() => loginsResponseSchema)]),
);
