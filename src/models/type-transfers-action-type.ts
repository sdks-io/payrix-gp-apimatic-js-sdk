import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the specific action taken. */
export const TypeTransfersActionType = {
  Transfer: "TRANSFER",
  Reverse: "REVERSE",
  TransferSingle: "TRANSFER_SINGLE",
  TransferList: "TRANSFER_LIST",
} as const;
export type TypeTransfersActionType =
  | (typeof TypeTransfersActionType)[keyof typeof TypeTransfersActionType]
  | (string & {});

export const typeTransfersActionTypeSchema: EnumSchema<TypeTransfersActionType> =
  s.enumOf<TypeTransfersActionType>(TypeTransfersActionType);
