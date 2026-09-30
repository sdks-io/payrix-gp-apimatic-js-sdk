import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { invoicesResponseItemSchema, type InvoicesResponseItem } from "./invoices-response-item.js";

export type InvoicesResponseResult = {
  response?: InvoicesResponseItem;
};

export const invoicesResponseResultSchema: Schema<InvoicesResponseResult> = s.object<InvoicesResponseResult>({
  response: s.optional(s.lazy(() => invoicesResponseItemSchema)),
});
