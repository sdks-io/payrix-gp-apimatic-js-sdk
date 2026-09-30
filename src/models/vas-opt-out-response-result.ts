import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { vasOptOutResponseItemSchema, type VasOptOutResponseItem } from "./vas-opt-out-response-item.js";

export type VasOptOutResponseResult = {
  response?: VasOptOutResponseItem;
};

export const vasOptOutResponseResultSchema: Schema<VasOptOutResponseResult> =
  s.object<VasOptOutResponseResult>({
    response: s.optional(s.lazy(() => vasOptOutResponseItemSchema)),
  });
