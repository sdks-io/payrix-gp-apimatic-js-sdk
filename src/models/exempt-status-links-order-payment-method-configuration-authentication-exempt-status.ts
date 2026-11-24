import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates if any exemptions apply to this transaction in the case of HOSTED_PAYMENT_PAGE type
 * transactions.
 * * `LOW_VALUE` - Transactions up to 30 EUR (or converted equivalent) can be exempted from SCA
 *   (Strong Customer Authentication), dependent on the following criteria: Up to a maximum of five
 *   (5) consecutive transactions. Or, up to a cumulative limit of 100 EUR (or converted
 *   equivalent)*
 */
export const ExemptStatusLinksOrderPaymentMethodConfigurationAuthenticationExemptStatus = {
  LowValue: "LOW_VALUE",
} as const;
export type ExemptStatusLinksOrderPaymentMethodConfigurationAuthenticationExemptStatus =
  | (typeof ExemptStatusLinksOrderPaymentMethodConfigurationAuthenticationExemptStatus)[keyof typeof ExemptStatusLinksOrderPaymentMethodConfigurationAuthenticationExemptStatus]
  | (string & {});

export const exemptStatusLinksOrderPaymentMethodConfigurationAuthenticationExemptStatusSchema: EnumSchema<ExemptStatusLinksOrderPaymentMethodConfigurationAuthenticationExemptStatus> =
  s.enumOf<ExemptStatusLinksOrderPaymentMethodConfigurationAuthenticationExemptStatus>(
    ExemptStatusLinksOrderPaymentMethodConfigurationAuthenticationExemptStatus,
  );
