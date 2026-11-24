import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * This field indicates the ability of the device and software to update or change the card
 * information
 */
export const CardUpdateVerificationsDeviceCapabilitiesCardUpdate = {
  Yes: "YES",
  No: "NO",
} as const;
export type CardUpdateVerificationsDeviceCapabilitiesCardUpdate =
  | (typeof CardUpdateVerificationsDeviceCapabilitiesCardUpdate)[keyof typeof CardUpdateVerificationsDeviceCapabilitiesCardUpdate]
  | (string & {});

export const cardUpdateVerificationsDeviceCapabilitiesCardUpdateSchema: EnumSchema<CardUpdateVerificationsDeviceCapabilitiesCardUpdate> =
  s.enumOf<CardUpdateVerificationsDeviceCapabilitiesCardUpdate>(
    CardUpdateVerificationsDeviceCapabilitiesCardUpdate,
  );
