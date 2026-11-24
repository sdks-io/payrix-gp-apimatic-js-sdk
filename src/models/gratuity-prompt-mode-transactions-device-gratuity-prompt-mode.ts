import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Describes whether a device prompts a payer for a gratuity when the payer is entering their
 * payment method details to the device.
 */
export const GratuityPromptModeTransactionsDeviceGratuityPromptMode = {
  Prompt: "PROMPT",
  NotRequired: "NOT_REQUIRED",
} as const;
export type GratuityPromptModeTransactionsDeviceGratuityPromptMode =
  | (typeof GratuityPromptModeTransactionsDeviceGratuityPromptMode)[keyof typeof GratuityPromptModeTransactionsDeviceGratuityPromptMode]
  | (string & {});

export const gratuityPromptModeTransactionsDeviceGratuityPromptModeSchema: EnumSchema<GratuityPromptModeTransactionsDeviceGratuityPromptMode> =
  s.enumOf<GratuityPromptModeTransactionsDeviceGratuityPromptMode>(
    GratuityPromptModeTransactionsDeviceGratuityPromptMode,
  );
