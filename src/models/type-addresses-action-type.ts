import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the specific action taken. */
export const TypeAddressesActionType = {
  AddressList: "ADDRESS_LIST",
} as const;
export type TypeAddressesActionType =
  | (typeof TypeAddressesActionType)[keyof typeof TypeAddressesActionType]
  | (string & {});

export const typeAddressesActionTypeSchema: EnumSchema<TypeAddressesActionType> =
  s.enumOf<TypeAddressesActionType>(TypeAddressesActionType);
