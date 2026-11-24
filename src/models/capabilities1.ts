import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { attendanceModeSchema, type AttendanceMode } from "./attendance-mode.js";
import { authorizationMode4Schema, type AuthorizationMode4 } from "./authorization-mode4.js";
import {
  cardCaptureVerificationsDeviceCapabilitiesCardCaptureSchema,
  type CardCaptureVerificationsDeviceCapabilitiesCardCapture,
} from "./card-capture-verifications-device-capabilities-card-capture.js";
import {
  cardUpdateTransactionsDeviceCapabilitiesCardUpdateSchema,
  type CardUpdateTransactionsDeviceCapabilitiesCardUpdate,
} from "./card-update-transactions-device-capabilities-card-update.js";
import {
  enabledResponseTransactionsDeviceCapabilitiesEnabledResponseSchema,
  type EnabledResponseTransactionsDeviceCapabilitiesEnabledResponse,
} from "./enabled-response-transactions-device-capabilities-enabled-response.js";
import { entryMode28Schema, type EntryMode28 } from "./entry-mode28.js";
import { fraudSchema, type Fraud } from "./fraud.js";
import { locationSchema, type Location } from "./location.js";
import {
  maxPinCountTransactionsDeviceCapabilitiesMaxPinCountSchema,
  type MaxPinCountTransactionsDeviceCapabilitiesMaxPinCount,
} from "./max-pin-count-transactions-device-capabilities-max-pin-count.js";
import { mobileSchema, type Mobile } from "./mobile.js";
import {
  outputTransactionsDeviceCapabilitiesOutputSchema,
  type OutputTransactionsDeviceCapabilitiesOutput,
} from "./output-transactions-device-capabilities-output.js";
import { payerVerification1Schema, type PayerVerification1 } from "./payer-verification1.js";

export type Capabilities1 = {
  /** Describes the entry mode capabilities a device has. */
  entryModes?: EntryMode28[];
  /** Describes the capabilities a device has to verify a payer. */
  payerVerifications?: PayerVerification1[];
  /** Describes the mobile features a device has. */
  mobile?: Mobile[];
  /**
   * Describes the data the device can process when it receives a response for a card authorization.
   */
  enabledResponse?: EnabledResponseTransactionsDeviceCapabilitiesEnabledResponse[];
  /** Describes whether the device can process partial authorizations. */
  authorizationModes?: AuthorizationMode4[];
  /** Indicates whether the device is attended or not. */
  attendanceModes?: AttendanceMode[];
  /** Describes the instruction a device can indicate to the clerk in the case of fraud. */
  fraud?: Fraud[];
  /** The number of lines that can be used to display information on the device. */
  displayLineCount?: number;
  /**
   * Describes the location where the device is being used.
   * * `ON_MERCHANT_PREMISIS` - The transaction took place on the merchant's premesis. This value
   *   should be used for EMV contact transactions and must be provided in conjuction with an
   *   attendance_mode.
   * * `OFF_MERCHANT_PREMISIS` - The transaction took place away from the merchant's premesis. This
   *   value should be used for EMV contact transactions and must be provided in conjuction with an
   *   attendance_mode.
   * * `ON_PAYER_PREMISIS` - The transaction took place on the payer's premesis. This value can be
   *   used for EMV contact or EMV contactless transactions and must be provided in conjuction with
   *   an attendance_mode.
   * * `OFF_PAYER_PREMISIS` - The transaction took place away from the payer's premesis. This value
   *   can be used for EMV contact or EMV contactless transactions and must be provided in
   *   conjuction with an attendance_mode.
   * * `ON_MERCHANT_PREMISES_MPOS` - The transaction took place on the merchant's premesis, using
   *   the merchant's mobile POS solution. Attendance_mode should not be sent when providing this
   *   location.
   * * `OFF_MERCHANT_PREMISES_MPOS` - The transaction took place away from the merchant's premesis,
   *   and used the merchant's mobile POS solution. Attendance_mode should not be sent when
   *   providing this location.
   * * `ON_MERCHANT_PREMISES_PAYER_POS` - The transaction took place away from the merchant's
   *   premesis, and used the merchant's mobile POS solution. Attendance_mode should not be sent
   *   when providing this location.
   * * `OFF_MERCHANT_PREMISES_PAYER_POS` - The transaction took place away from the merchant's
   *   premesis, and used the merchant's mobile POS solution. Attendance_mode should not be sent
   *   when providing this location.
   * * `UNKNOWN` - The transaction took place at an unknown location.
   */
  location?: Location[];
  /**
   * Indicates the output capabilities of the device.
   * * `NONE` - The device has no output capability.
   * * `PRINT` - The device has the ability to print.
   * * `DISPLAY` - The device has display capability.
   * * `PRINT_AND_DISPLAY` - The device has print and display capability.
   * * `UNKNOWN` - The device's output capability is unknown.
   */
  output?: OutputTransactionsDeviceCapabilitiesOutput;
  /**
   * Indicates if the device is capable of pulling the card into the device while the transaction is
   * taking place
   */
  cardCapture?: CardCaptureVerificationsDeviceCapabilitiesCardCapture;
  /** Indicates the maximum accepted length for PIN number. */
  maxPinCount?: MaxPinCountTransactionsDeviceCapabilitiesMaxPinCount;
  /**
   * This field indicates the ability of the device and software to update or change the card
   * information
   */
  cardUpdate?: CardUpdateTransactionsDeviceCapabilitiesCardUpdate;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const capabilities1Properties: s.Shape<Capabilities1> = {
  entryModes: s.optional(s.array(s.lazy(() => entryMode28Schema))),
  payerVerifications: s.optional(s.array(s.lazy(() => payerVerification1Schema))),
  mobile: s.optional(s.array(s.lazy(() => mobileSchema))),
  enabledResponse: s.optional(
    s.array(s.lazy(() => enabledResponseTransactionsDeviceCapabilitiesEnabledResponseSchema)),
  ),
  authorizationModes: s.optional(s.array(s.lazy(() => authorizationMode4Schema))),
  attendanceModes: s.optional(s.array(s.lazy(() => attendanceModeSchema))),
  fraud: s.optional(s.array(s.lazy(() => fraudSchema))),
  displayLineCount: s.optional(s.float64()),
  location: s.optional(s.array(s.lazy(() => locationSchema))),
  output: s.optional(s.lazy(() => outputTransactionsDeviceCapabilitiesOutputSchema)),
  cardCapture: s.optional(s.lazy(() => cardCaptureVerificationsDeviceCapabilitiesCardCaptureSchema)),
  maxPinCount: s.optional(s.lazy(() => maxPinCountTransactionsDeviceCapabilitiesMaxPinCountSchema)),
  cardUpdate: s.optional(s.lazy(() => cardUpdateTransactionsDeviceCapabilitiesCardUpdateSchema)),
  _keysMap: {
    entryModes: "entry_modes",
    payerVerifications: "payer_verifications",
    enabledResponse: "enabled_response",
    authorizationModes: "authorization_modes",
    attendanceModes: "attendance_modes",
    displayLineCount: "display_line_count",
    cardCapture: "card_capture",
    maxPinCount: "max_pin_count",
    cardUpdate: "card_update",
  },
};

export const capabilities1InternalSchema: Schema<Capabilities1> = s.object<Capabilities1>(
  capabilities1Properties,
  { additionalProperties: s.json() },
);

export const capabilities1Schema: Schema<Capabilities1> = s.lazySchema(() =>
  s.object<Capabilities1>(
    {
      ...capabilities1Properties,
      displayLineCount: s.optional(s.float64().check(s.gte(1), s.lte(50))),
    },
    { additionalProperties: s.json() },
  ),
);
