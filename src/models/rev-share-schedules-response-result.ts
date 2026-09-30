import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  revShareSchedulesResponseItemSchema,
  type RevShareSchedulesResponseItem,
} from "./rev-share-schedules-response-item.js";

export type RevShareSchedulesResponseResult = {
  response?: RevShareSchedulesResponseItem;
};

export const revShareSchedulesResponseResultSchema: Schema<RevShareSchedulesResponseResult> =
  s.object<RevShareSchedulesResponseResult>({
    response: s.optional(s.lazy(() => revShareSchedulesResponseItemSchema)),
  });
