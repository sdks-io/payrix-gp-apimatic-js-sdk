import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  embeddedFinanceResponseItemSchema,
  type EmbeddedFinanceResponseItem,
} from "./embedded-finance-response-item.js";

export type EmbeddedFinanceResponseResult = {
  response?: EmbeddedFinanceResponseItem;
};

export const embeddedFinanceResponseResultSchema: Schema<EmbeddedFinanceResponseResult> =
  s.object<EmbeddedFinanceResponseResult>({
    response: s.optional(s.lazy(() => embeddedFinanceResponseItemSchema)),
  });
