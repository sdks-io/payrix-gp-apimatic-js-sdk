import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const VerificationRefAction = {
  _0: "0",
  _1: "1",
  _3: "3",
  _4: "4",
  _5: "5",
  _6: "6",
  _8: "8",
  ManualReview: "manualReview",
  Approved: "approved",
  Declined: "declined",
} as const;
export type VerificationRefAction =
  | (typeof VerificationRefAction)[keyof typeof VerificationRefAction]
  | (string & {});

export const verificationRefActionSchema: EnumSchema<VerificationRefAction> =
  s.enumOf<VerificationRefAction>(VerificationRefAction);
