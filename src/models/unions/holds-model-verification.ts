import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { verificationsResponseSchema, type VerificationsResponse } from "../verifications-response.js";

/**
 * If this hold resource was triggered through a verification, then this field stores the identifier
 * of the Verification.
 */
export type HoldsModelVerification = string | VerificationsResponse;

export const holdsModelVerificationSchema: Schema<HoldsModelVerification> = s.of<HoldsModelVerification>(
  s.union([s.string(), s.lazy(() => verificationsResponseSchema)]),
);
