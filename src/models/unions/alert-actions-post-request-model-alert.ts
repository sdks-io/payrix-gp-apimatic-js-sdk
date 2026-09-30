import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { alertsPostRequestSchema, type AlertsPostRequest } from "../alerts-post-request.js";

/** The identifier of the Alert resource that defines this alertAction. */
export type AlertActionsPostRequestModelAlert = string | AlertsPostRequest;

export const alertActionsPostRequestModelAlertSchema: Schema<AlertActionsPostRequestModelAlert> =
  s.of<AlertActionsPostRequestModelAlert>(s.union([s.string(), s.lazy(() => alertsPostRequestSchema)]));
