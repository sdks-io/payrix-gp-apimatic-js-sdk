import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates whether the 3DS Method was completed successfully.
 * * `YES`
 * * `NO`
 */
export const MethodUrlCompletionStatusAuthenticationsMethodUrlCompletionStatus = {
  Yes: "YES",
  No: "NO",
} as const;
export type MethodUrlCompletionStatusAuthenticationsMethodUrlCompletionStatus =
  | (typeof MethodUrlCompletionStatusAuthenticationsMethodUrlCompletionStatus)[keyof typeof MethodUrlCompletionStatusAuthenticationsMethodUrlCompletionStatus]
  | (string & {});

export const methodUrlCompletionStatusAuthenticationsMethodUrlCompletionStatusSchema: EnumSchema<MethodUrlCompletionStatusAuthenticationsMethodUrlCompletionStatus> =
  s.enumOf<MethodUrlCompletionStatusAuthenticationsMethodUrlCompletionStatus>(
    MethodUrlCompletionStatusAuthenticationsMethodUrlCompletionStatus,
  );
