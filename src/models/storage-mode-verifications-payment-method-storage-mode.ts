import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates whether to store the card as part of a transaction.
 * * `ALWAYS` - The card information is always stored irrespective of whether the payment method
 *   authorization was successful or not.
 * * `ON_SUCCESS` - The card information is only stored if the payment method authorization was
 *   successful.
 */
export const StorageModeVerificationsPaymentMethodStorageMode = {
  Always: "ALWAYS",
  OnSuccess: "ON_SUCCESS",
} as const;
export type StorageModeVerificationsPaymentMethodStorageMode =
  | (typeof StorageModeVerificationsPaymentMethodStorageMode)[keyof typeof StorageModeVerificationsPaymentMethodStorageMode]
  | (string & {});

export const storageModeVerificationsPaymentMethodStorageModeSchema: EnumSchema<StorageModeVerificationsPaymentMethodStorageMode> =
  s.enumOf<StorageModeVerificationsPaymentMethodStorageMode>(
    StorageModeVerificationsPaymentMethodStorageMode,
  );
