import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { holdsResponseItemSchema, type HoldsResponseItem } from "./holds-response-item.js";

export type HoldsResponseResult = {
  response?: HoldsResponseItem;
};

export const holdsResponseResultSchema: Schema<HoldsResponseResult> = s.object<HoldsResponseResult>({
  response: s.optional(s.lazy(() => holdsResponseItemSchema)),
});
