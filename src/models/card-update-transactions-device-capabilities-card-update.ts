import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * This field indicates the ability of the device and software to update or change the card
 * information
 */
export const CardUpdateTransactionsDeviceCapabilitiesCardUpdate = {
  Yes: "YES",
  No: "NO",
} as const;
export type CardUpdateTransactionsDeviceCapabilitiesCardUpdate =
  | (typeof CardUpdateTransactionsDeviceCapabilitiesCardUpdate)[keyof typeof CardUpdateTransactionsDeviceCapabilitiesCardUpdate]
  | (string & {});

export const cardUpdateTransactionsDeviceCapabilitiesCardUpdateSchema: EnumSchema<CardUpdateTransactionsDeviceCapabilitiesCardUpdate> =
  s.enumOf<CardUpdateTransactionsDeviceCapabilitiesCardUpdate>(
    CardUpdateTransactionsDeviceCapabilitiesCardUpdate,
  );
