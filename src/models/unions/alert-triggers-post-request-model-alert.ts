import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { alertsPostRequestSchema, type AlertsPostRequest } from "../alerts-post-request.js";

/** The identifier of the Alert resource that you want to invoke with this trigger. */
export type AlertTriggersPostRequestModelAlert = string | AlertsPostRequest;

export const alertTriggersPostRequestModelAlertSchema: Schema<AlertTriggersPostRequestModelAlert> =
  s.of<AlertTriggersPostRequestModelAlert>(s.union([s.string(), s.lazy(() => alertsPostRequestSchema)]));
