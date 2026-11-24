import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates how the payment method information was obtained by the Merchant for this transaction.
 *
 * MOTO - A CNP channel entry mode where the payment method information was obtained over the phone
 * or via postal mail. ECOM - A CNP channel entry mode where the payment method was obtained via a
 * browser
 */
export const EntryModeLinksOrderPaymentMethodConfigurationEntryMode = {
  Ecom: "ECOM",
  Moto: "MOTO",
} as const;
export type EntryModeLinksOrderPaymentMethodConfigurationEntryMode =
  | (typeof EntryModeLinksOrderPaymentMethodConfigurationEntryMode)[keyof typeof EntryModeLinksOrderPaymentMethodConfigurationEntryMode]
  | (string & {});

export const entryModeLinksOrderPaymentMethodConfigurationEntryModeSchema: EnumSchema<EntryModeLinksOrderPaymentMethodConfigurationEntryMode> =
  s.enumOf<EntryModeLinksOrderPaymentMethodConfigurationEntryMode>(
    EntryModeLinksOrderPaymentMethodConfigurationEntryMode,
  );
