import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates if the device is capable of pulling the card into the device while the transaction is
 * taking place
 */
export const CardCaptureVerificationsDeviceCapabilitiesCardCapture = {
  Yes: "YES",
  No: "NO",
} as const;
export type CardCaptureVerificationsDeviceCapabilitiesCardCapture =
  | (typeof CardCaptureVerificationsDeviceCapabilitiesCardCapture)[keyof typeof CardCaptureVerificationsDeviceCapabilitiesCardCapture]
  | (string & {});

export const cardCaptureVerificationsDeviceCapabilitiesCardCaptureSchema: EnumSchema<CardCaptureVerificationsDeviceCapabilitiesCardCapture> =
  s.enumOf<CardCaptureVerificationsDeviceCapabilitiesCardCapture>(
    CardCaptureVerificationsDeviceCapabilitiesCardCapture,
  );
