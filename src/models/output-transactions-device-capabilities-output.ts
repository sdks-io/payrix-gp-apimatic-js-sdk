import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates the output capabilities of the device.
 * * `NONE` - The device has no output capability.
 * * `PRINT` - The device has the ability to print.
 * * `DISPLAY` - The device has display capability.
 * * `PRINT_AND_DISPLAY` - The device has print and display capability.
 * * `UNKNOWN` - The device's output capability is unknown.
 */
export const OutputTransactionsDeviceCapabilitiesOutput = {
  None: "NONE",
  Print: "PRINT",
  Display: "DISPLAY",
  PrintAndDisplay: "PRINT_AND_DISPLAY",
  Unknown: "UNKNOWN",
} as const;
export type OutputTransactionsDeviceCapabilitiesOutput =
  | (typeof OutputTransactionsDeviceCapabilitiesOutput)[keyof typeof OutputTransactionsDeviceCapabilitiesOutput]
  | (string & {});

export const outputTransactionsDeviceCapabilitiesOutputSchema: EnumSchema<OutputTransactionsDeviceCapabilitiesOutput> =
  s.enumOf<OutputTransactionsDeviceCapabilitiesOutput>(OutputTransactionsDeviceCapabilitiesOutput);
