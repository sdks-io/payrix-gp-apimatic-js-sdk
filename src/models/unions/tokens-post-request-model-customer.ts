import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { customersPostRequestSchema, type CustomersPostRequest } from "../customers-post-request.js";

/** The Customer that this Token is associated with. */
export type TokensPostRequestModelCustomer = string | CustomersPostRequest;

export const tokensPostRequestModelCustomerSchema: Schema<TokensPostRequestModelCustomer> =
  s.of<TokensPostRequestModelCustomer>(s.union([s.string(), s.lazy(() => customersPostRequestSchema)]));
