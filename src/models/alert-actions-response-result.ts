import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  alertActionsResponseItemSchema,
  type AlertActionsResponseItem,
} from "./alert-actions-response-item.js";

export type AlertActionsResponseResult = {
  response?: AlertActionsResponseItem;
};

export const alertActionsResponseResultSchema: Schema<AlertActionsResponseResult> =
  s.object<AlertActionsResponseResult>({
    response: s.optional(s.lazy(() => alertActionsResponseItemSchema)),
  });
