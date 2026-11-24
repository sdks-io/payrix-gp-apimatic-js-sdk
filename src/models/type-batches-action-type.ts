import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the specific action taken. */
export const TypeBatchesActionType = {
  BatchSingle: "BATCH_SINGLE",
  Close: "CLOSE",
  BatchList: "BATCH_LIST",
} as const;
export type TypeBatchesActionType =
  | (typeof TypeBatchesActionType)[keyof typeof TypeBatchesActionType]
  | (string & {});

export const typeBatchesActionTypeSchema: EnumSchema<TypeBatchesActionType> =
  s.enumOf<TypeBatchesActionType>(TypeBatchesActionType);
