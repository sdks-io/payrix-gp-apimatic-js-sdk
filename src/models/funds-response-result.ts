import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fundsResponseItemSchema, type FundsResponseItem } from "./funds-response-item.js";

export type FundsResponseResult = {
  response?: FundsResponseItem;
};

export const fundsResponseResultSchema: Schema<FundsResponseResult> = s.object<FundsResponseResult>({
  response: s.optional(s.lazy(() => fundsResponseItemSchema)),
});
