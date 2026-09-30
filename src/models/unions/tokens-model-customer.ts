import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { customersResponseSchema, type CustomersResponse } from "../customers-response.js";

/** The Customer that this Token is associated with. */
export type TokensModelCustomer = string | CustomersResponse;

export const tokensModelCustomerSchema: Schema<TokensModelCustomer> = s.of<TokensModelCustomer>(
  s.union([s.string(), s.lazy(() => customersResponseSchema)]),
);
