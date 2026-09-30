import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { alertsResponseSchema, type AlertsResponse } from "../alerts-response.js";

/** The identifier of the Alert resource that defines this alertAction. */
export type AlertActionsModelAlert = string | AlertsResponse;

export const alertActionsModelAlertSchema: Schema<AlertActionsModelAlert> = s.of<AlertActionsModelAlert>(
  s.union([s.string(), s.lazy(() => alertsResponseSchema)]),
);
