import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the maximum accepted length for PIN number. */
export const MaxPinCountTransactionsDeviceCapabilitiesMaxPinCount = {
  Unknown: "UNKNOWN",
  NotSupported: "NOT_SUPPORTED",
  _4: "4",
  _5: "5",
  _6: "6",
  _7: "7",
  _8: "8",
  _9: "9",
  _10: "10",
  _11: "11",
  _12: "12",
} as const;
export type MaxPinCountTransactionsDeviceCapabilitiesMaxPinCount =
  | (typeof MaxPinCountTransactionsDeviceCapabilitiesMaxPinCount)[keyof typeof MaxPinCountTransactionsDeviceCapabilitiesMaxPinCount]
  | (string & {});

export const maxPinCountTransactionsDeviceCapabilitiesMaxPinCountSchema: EnumSchema<MaxPinCountTransactionsDeviceCapabilitiesMaxPinCount> =
  s.enumOf<MaxPinCountTransactionsDeviceCapabilitiesMaxPinCount>(
    MaxPinCountTransactionsDeviceCapabilitiesMaxPinCount,
  );
