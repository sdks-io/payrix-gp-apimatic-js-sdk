import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates whether the request is the first,a subsequent or the last capture request when
 * capturing multiple amounts separately.
 */
export const CaptureSequenceTransactionsCaptureSequence = {
  First: "FIRST",
  Subsequent: "SUBSEQUENT",
  Last: "LAST",
} as const;
export type CaptureSequenceTransactionsCaptureSequence =
  | (typeof CaptureSequenceTransactionsCaptureSequence)[keyof typeof CaptureSequenceTransactionsCaptureSequence]
  | (string & {});

export const captureSequenceTransactionsCaptureSequenceSchema: EnumSchema<CaptureSequenceTransactionsCaptureSequence> =
  s.enumOf<CaptureSequenceTransactionsCaptureSequence>(CaptureSequenceTransactionsCaptureSequence);
