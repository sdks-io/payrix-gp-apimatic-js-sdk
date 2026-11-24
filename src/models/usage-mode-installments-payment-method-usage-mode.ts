import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates the behaviour of the payment method token. This functionality is available based on
 * your life configuration.
 * * `USE_CARD_NUMBER` - When using the payment method token to transaction process, this indicates
 *   to use the card number also known as the PAN or FPAN.
 * * `USE_NETWORK_TOKEN` - When using the payment method token to transaction process, this
 *   indicates to use the network token instead of the card number.
 */
export const UsageModeInstallmentsPaymentMethodUsageMode = {
  UseCardNumber: "USE_CARD_NUMBER",
  UseNetworkToken: "USE_NETWORK_TOKEN",
} as const;
export type UsageModeInstallmentsPaymentMethodUsageMode =
  | (typeof UsageModeInstallmentsPaymentMethodUsageMode)[keyof typeof UsageModeInstallmentsPaymentMethodUsageMode]
  | (string & {});

export const usageModeInstallmentsPaymentMethodUsageModeSchema: EnumSchema<UsageModeInstallmentsPaymentMethodUsageMode> =
  s.enumOf<UsageModeInstallmentsPaymentMethodUsageMode>(UsageModeInstallmentsPaymentMethodUsageMode);
