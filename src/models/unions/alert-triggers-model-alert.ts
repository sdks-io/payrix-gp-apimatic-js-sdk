import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { alertsResponseSchema, type AlertsResponse } from "../alerts-response.js";

/** The identifier of the Alert resource that you want to invoke with this trigger. */
export type AlertTriggersModelAlert = string | AlertsResponse;

export const alertTriggersModelAlertSchema: Schema<AlertTriggersModelAlert> = s.of<AlertTriggersModelAlert>(
  s.union([s.string(), s.lazy(() => alertsResponseSchema)]),
);
