import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { merchantsResponseItemSchema, type MerchantsResponseItem } from "./merchants-response-item.js";

export type MerchantsResponseResult = {
  response?: MerchantsResponseItem;
};

export const merchantsResponseResultSchema: Schema<MerchantsResponseResult> =
  s.object<MerchantsResponseResult>({
    response: s.optional(s.lazy(() => merchantsResponseItemSchema)),
  });
