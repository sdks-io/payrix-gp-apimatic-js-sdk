import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  taxFormRequestsResponseItemSchema,
  type TaxFormRequestsResponseItem,
} from "./tax-form-requests-response-item.js";

export type TaxFormRequestsResponseResult = {
  response?: TaxFormRequestsResponseItem;
};

export const taxFormRequestsResponseResultSchema: Schema<TaxFormRequestsResponseResult> =
  s.object<TaxFormRequestsResponseResult>({
    response: s.optional(s.lazy(() => taxFormRequestsResponseItemSchema)),
  });
