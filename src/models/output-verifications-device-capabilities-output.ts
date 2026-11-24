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
export const OutputVerificationsDeviceCapabilitiesOutput = {
  None: "NONE",
  Print: "PRINT",
  Display: "DISPLAY",
  PrintAndDisplay: "PRINT_AND_DISPLAY",
  Unknown: "UNKNOWN",
} as const;
export type OutputVerificationsDeviceCapabilitiesOutput =
  | (typeof OutputVerificationsDeviceCapabilitiesOutput)[keyof typeof OutputVerificationsDeviceCapabilitiesOutput]
  | (string & {});

export const outputVerificationsDeviceCapabilitiesOutputSchema: EnumSchema<OutputVerificationsDeviceCapabilitiesOutput> =
  s.enumOf<OutputVerificationsDeviceCapabilitiesOutput>(OutputVerificationsDeviceCapabilitiesOutput);
