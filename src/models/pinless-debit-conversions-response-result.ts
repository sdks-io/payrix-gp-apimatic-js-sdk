import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  pinlessDebitConversionsResponseItemSchema,
  type PinlessDebitConversionsResponseItem,
} from "./pinless-debit-conversions-response-item.js";

export type PinlessDebitConversionsResponseResult = {
  response?: PinlessDebitConversionsResponseItem;
};

export const pinlessDebitConversionsResponseResultSchema: Schema<PinlessDebitConversionsResponseResult> =
  s.object<PinlessDebitConversionsResponseResult>({
    response: s.optional(s.lazy(() => pinlessDebitConversionsResponseItemSchema)),
  });
