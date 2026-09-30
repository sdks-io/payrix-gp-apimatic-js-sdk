import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  alertTriggersResponseItemSchema,
  type AlertTriggersResponseItem,
} from "./alert-triggers-response-item.js";

export type AlertTriggersResponseResult = {
  response?: AlertTriggersResponseItem;
};

export const alertTriggersResponseResultSchema: Schema<AlertTriggersResponseResult> =
  s.object<AlertTriggersResponseResult>({
    response: s.optional(s.lazy(() => alertTriggersResponseItemSchema)),
  });
