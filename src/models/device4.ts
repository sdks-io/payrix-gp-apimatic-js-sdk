import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { deviceCapabilitiesSchema, type DeviceCapabilities } from "./device-capabilities.js";
import { entryMode15Schema, type EntryMode15 } from "./entry-mode15.js";
import {
  gratuityPromptModeTransactionsDeviceGratuityPromptModeSchema,
  type GratuityPromptModeTransactionsDeviceGratuityPromptMode,
} from "./gratuity-prompt-mode-transactions-device-gratuity-prompt-mode.js";
import { osTransactionsDeviceOsSchema, type OsTransactionsDeviceOs } from "./os-transactions-device-os.js";
import { payerVerificationSchema, type PayerVerification } from "./payer-verification.js";
import {
  printReceiptModeTransactionsDevicePrintReceiptModeSchema,
  type PrintReceiptModeTransactionsDevicePrintReceiptMode,
} from "./print-receipt-mode-transactions-device-print-receipt-mode.js";
import {
  typeTransactionsDeviceTypeSchema,
  type TypeTransactionsDeviceType,
} from "./type-transactions-device-type.js";

export type Device4 = {
  /**
   * Indicates the type of physical device used to process the transaction.
   * * `TERMINAL` - A device used to prompt the payer to enter their payment method credentials to
   *   process a transaction.
   * * `MOBILE_PHONE` - A mobile phone was used as the processing device.
   * * `MOBILE_POS` - Mobile device with no add-on hardware.
   * * `MOBILE_POS_PLUS_HARDWARE` - Mobile device with add-on hardware.
   * * `MOBILE_POS_PLUS_DONGLE` - Dedicated mPOS Terminal with PCI compliant dongle.
   * * `DONGLE_PIN` - Dongle with software-based application that supports PIN entry on glass.
   * * `MOBILE_POS_PIN` - Off the shelf mobile device with software-based application that supports
   *   PIN entry on glass.
   */
  type?: TypeTransactionsDeviceType;
  /** The time from the device in ISO8601 format. */
  time?: string;
  /** The sequence number from the device used to align with the transaction processing platform. */
  sequenceNumber?: string;
  /**
   * A unique identifier for the physical device. This value persists with the device even if it is
   * repurposed.
   */
  serialNumber?: string;
  /**
   * Describes whether a device prompts a payer for a gratuity when the payer is entering their
   * payment method details to the device.
   */
  gratuityPromptMode?: GratuityPromptModeTransactionsDeviceGratuityPromptMode;
  /** Describes the receipts a device prints when processing a transaction. */
  printReceiptMode?: PrintReceiptModeTransactionsDevicePrintReceiptMode;
  /** Indicates the allowed entry modes for a specific transaction. */
  entryModes?: EntryMode15[];
  /**
   * A reference that uniquely identifies the merchant point of integration, like a device or
   * website.
   */
  terminalId?: string;
  /** Indicates the version of the application being used on the device */
  applicationVersion?: string;
  /** Indicates the method used to verify the payer. */
  payerVerifications?: PayerVerification[];
  /**
   * Indicates the operating system on the device
   * * `ANDROID`
   * * `IOS`
   */
  os?: OsTransactionsDeviceOs;
  /** The integrator submitted reference or identifier for the device. */
  reference?: string;
  capabilities?: DeviceCapabilities;
  /** The IP address of the device used for this transaction. */
  ipAddress?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const device4Properties: s.Shape<Device4> = {
  type: s.optional(s.lazy(() => typeTransactionsDeviceTypeSchema)),
  time: s.optional(s.string()),
  sequenceNumber: s.optional(s.string()),
  serialNumber: s.optional(s.string()),
  gratuityPromptMode: s.optional(s.lazy(() => gratuityPromptModeTransactionsDeviceGratuityPromptModeSchema)),
  printReceiptMode: s.optional(s.lazy(() => printReceiptModeTransactionsDevicePrintReceiptModeSchema)),
  entryModes: s.optional(s.array(s.lazy(() => entryMode15Schema))),
  terminalId: s.optional(s.string()),
  applicationVersion: s.optional(s.string()),
  payerVerifications: s.optional(s.array(s.lazy(() => payerVerificationSchema))),
  os: s.optional(s.lazy(() => osTransactionsDeviceOsSchema)),
  reference: s.optional(s.string()),
  capabilities: s.optional(s.lazy(() => deviceCapabilitiesSchema)),
  ipAddress: s.optional(s.string()),
  _keysMap: {
    sequenceNumber: "sequence_number",
    serialNumber: "serial_number",
    gratuityPromptMode: "gratuity_prompt_mode",
    printReceiptMode: "print_receipt_mode",
    entryModes: "entry_modes",
    terminalId: "terminal_id",
    applicationVersion: "application_version",
    payerVerifications: "payer_verifications",
    ipAddress: "ip_address",
  },
};

export const device4InternalSchema: Schema<Device4> = s.object<Device4>(device4Properties, {
  additionalProperties: s.json(),
});

export const device4Schema: Schema<Device4> = s.lazySchema(() =>
  s.object<Device4>(
    {
      ...device4Properties,
      time: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      sequenceNumber: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      serialNumber: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      terminalId: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      applicationVersion: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      reference: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      ipAddress: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
