import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { apm8Schema, type Apm8 } from "./apm8.js";
import { authentication10Schema, type Authentication10 } from "./authentication10.js";
import { digitalWalletsSchema, type DigitalWallets } from "./digital-wallets.js";
import {
  entryModeLinksOrderPaymentMethodConfigurationEntryModeSchema,
  type EntryModeLinksOrderPaymentMethodConfigurationEntryMode,
} from "./entry-mode-links-order-payment-method-configuration-entry-mode.js";
import {
  storageModeLinksOrderPaymentMethodConfigurationStorageModeSchema,
  type StorageModeLinksOrderPaymentMethodConfigurationStorageMode,
} from "./storage-mode-links-order-payment-method-configuration-storage-mode.js";
import { storedCredential3Schema, type StoredCredential3 } from "./stored-credential3.js";

export type PaymentMethodConfiguration = {
  authentication?: Authentication10;
  apm?: Apm8;
  /**
   * Indicates whether to store the card as part of a transaction. `ALWAYS` - The card information
   * is always stored irrespective of whether the payment method authorization was successful or not
   * `ON_SUCCESS` - The card information is only stored if the payment method authorization was
   * successful `PROMPT` - Prompt the payer to store their card
   */
  storageMode?: StorageModeLinksOrderPaymentMethodConfigurationStorageMode;
  /**
   * Indicates how the payment method information was obtained by the Merchant for this transaction.
   *
   * MOTO - A CNP channel entry mode where the payment method information was obtained over the
   * phone or via postal mail. ECOM - A CNP channel entry mode where the payment method was obtained
   * via a browser
   */
  entryMode?: EntryModeLinksOrderPaymentMethodConfigurationEntryMode;
  digitalWallets?: DigitalWallets;
  storedCredential?: StoredCredential3;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paymentMethodConfigurationSchema: Schema<PaymentMethodConfiguration> =
  s.object<PaymentMethodConfiguration>(
    {
      authentication: s.optional(s.lazy(() => authentication10Schema)),
      apm: s.optional(s.lazy(() => apm8Schema)),
      storageMode: s.optional(s.lazy(() => storageModeLinksOrderPaymentMethodConfigurationStorageModeSchema)),
      entryMode: s.optional(s.lazy(() => entryModeLinksOrderPaymentMethodConfigurationEntryModeSchema)),
      digitalWallets: s.optional(s.lazy(() => digitalWalletsSchema)),
      storedCredential: s.optional(s.lazy(() => storedCredential3Schema)),
      _keysMap: {
        storageMode: "storage_mode",
        entryMode: "entry_mode",
        digitalWallets: "digital_wallets",
        storedCredential: "stored_credential",
      },
    },
    { additionalProperties: s.json() },
  );
