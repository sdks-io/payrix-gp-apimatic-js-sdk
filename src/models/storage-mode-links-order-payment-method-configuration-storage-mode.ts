import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates whether to store the card as part of a transaction. `ALWAYS` - The card information is
 * always stored irrespective of whether the payment method authorization was successful or not
 * `ON_SUCCESS` - The card information is only stored if the payment method authorization was
 * successful `PROMPT` - Prompt the payer to store their card
 */
export const StorageModeLinksOrderPaymentMethodConfigurationStorageMode = {
  Always: "ALWAYS",
  OnSuccess: "ON_SUCCESS",
  Prompt: "PROMPT",
} as const;
export type StorageModeLinksOrderPaymentMethodConfigurationStorageMode =
  | (typeof StorageModeLinksOrderPaymentMethodConfigurationStorageMode)[keyof typeof StorageModeLinksOrderPaymentMethodConfigurationStorageMode]
  | (string & {});

export const storageModeLinksOrderPaymentMethodConfigurationStorageModeSchema: EnumSchema<StorageModeLinksOrderPaymentMethodConfigurationStorageMode> =
  s.enumOf<StorageModeLinksOrderPaymentMethodConfigurationStorageMode>(
    StorageModeLinksOrderPaymentMethodConfigurationStorageMode,
  );
