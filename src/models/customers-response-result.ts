import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customersResponseItemSchema, type CustomersResponseItem } from "./customers-response-item.js";

export type CustomersResponseResult = {
  response?: CustomersResponseItem;
};

export const customersResponseResultSchema: Schema<CustomersResponseResult> =
  s.object<CustomersResponseResult>({
    response: s.optional(s.lazy(() => customersResponseItemSchema)),
  });
