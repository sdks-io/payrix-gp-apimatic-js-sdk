import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates if the payer is enrolled for 3DS with this card.
 * * `ENROLLED`
 * * `NOT_ENROLLED`
 * * `NOT_ENROLLED_ATTEMPT`
 * * `UNABLE_TO_VERIFY`
 */
export const EnrolledStatusAuthenticationsThreeDsEnrolledStatus = {
  Enrolled: "ENROLLED",
  NotEnrolled: "NOT_ENROLLED",
  NotEnrolledAttempt: "NOT_ENROLLED_ATTEMPT",
  UnableToVerify: "UNABLE_TO_VERIFY",
} as const;
export type EnrolledStatusAuthenticationsThreeDsEnrolledStatus =
  | (typeof EnrolledStatusAuthenticationsThreeDsEnrolledStatus)[keyof typeof EnrolledStatusAuthenticationsThreeDsEnrolledStatus]
  | (string & {});

export const enrolledStatusAuthenticationsThreeDsEnrolledStatusSchema: EnumSchema<EnrolledStatusAuthenticationsThreeDsEnrolledStatus> =
  s.enumOf<EnrolledStatusAuthenticationsThreeDsEnrolledStatus>(
    EnrolledStatusAuthenticationsThreeDsEnrolledStatus,
  );
