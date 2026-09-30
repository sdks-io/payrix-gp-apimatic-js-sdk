import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  saferPaymentsResponseItemSchema,
  type SaferPaymentsResponseItem,
} from "./safer-payments-response-item.js";

export type SaferPaymentsResponseResult = {
  response?: SaferPaymentsResponseItem;
};

export const saferPaymentsResponseResultSchema: Schema<SaferPaymentsResponseResult> =
  s.object<SaferPaymentsResponseResult>({
    response: s.optional(s.lazy(() => saferPaymentsResponseItemSchema)),
  });
