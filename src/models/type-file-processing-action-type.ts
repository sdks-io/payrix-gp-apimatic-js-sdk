import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of action executed for the Link. */
export const TypeFileProcessingActionType = {
  FileCreate: "FILE_CREATE",
  FileSingle: "FILE_SINGLE",
} as const;
export type TypeFileProcessingActionType =
  | (typeof TypeFileProcessingActionType)[keyof typeof TypeFileProcessingActionType]
  | (string & {});

export const typeFileProcessingActionTypeSchema: EnumSchema<TypeFileProcessingActionType> =
  s.enumOf<TypeFileProcessingActionType>(TypeFileProcessingActionType);
