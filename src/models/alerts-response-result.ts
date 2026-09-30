import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { alertsResponseItemSchema, type AlertsResponseItem } from "./alerts-response-item.js";

export type AlertsResponseResult = {
  response?: AlertsResponseItem;
};

export const alertsResponseResultSchema: Schema<AlertsResponseResult> = s.object<AlertsResponseResult>({
  response: s.optional(s.lazy(() => alertsResponseItemSchema)),
});
