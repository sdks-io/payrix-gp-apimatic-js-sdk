import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The HTTP method to use when redirecting to the redirect_url */
export const RedirectHttpMethodTransactionsPaymentMethodRedirectHttpMethod = {
  Post: "POST",
  Get: "GET",
} as const;
export type RedirectHttpMethodTransactionsPaymentMethodRedirectHttpMethod =
  | (typeof RedirectHttpMethodTransactionsPaymentMethodRedirectHttpMethod)[keyof typeof RedirectHttpMethodTransactionsPaymentMethodRedirectHttpMethod]
  | (string & {});

export const redirectHttpMethodTransactionsPaymentMethodRedirectHttpMethodSchema: EnumSchema<RedirectHttpMethodTransactionsPaymentMethodRedirectHttpMethod> =
  s.enumOf<RedirectHttpMethodTransactionsPaymentMethodRedirectHttpMethod>(
    RedirectHttpMethodTransactionsPaymentMethodRedirectHttpMethod,
  );
