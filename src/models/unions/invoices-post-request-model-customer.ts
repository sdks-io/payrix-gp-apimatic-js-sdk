import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { customersPostRequestSchema, type CustomersPostRequest } from "../customers-post-request.js";

/** The identifier of the Customer of this invoice resource. */
export type InvoicesPostRequestModelCustomer = string | CustomersPostRequest | null;

export const invoicesPostRequestModelCustomerSchema: Schema<InvoicesPostRequestModelCustomer> =
  s.of<InvoicesPostRequestModelCustomer>(
    s.nullable(s.union([s.string(), s.lazy(() => customersPostRequestSchema)])),
  );
