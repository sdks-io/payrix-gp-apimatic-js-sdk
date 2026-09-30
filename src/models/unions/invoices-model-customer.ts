import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { customersResponseSchema, type CustomersResponse } from "../customers-response.js";

/** The identifier of the Customer of this invoice resource. */
export type InvoicesModelCustomer = string | CustomersResponse;

export const invoicesModelCustomerSchema: Schema<InvoicesModelCustomer> = s.of<InvoicesModelCustomer>(
  s.union([s.string(), s.lazy(() => customersResponseSchema)]),
);
