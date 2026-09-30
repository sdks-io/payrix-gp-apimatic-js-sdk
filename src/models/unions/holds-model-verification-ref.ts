import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  verificationRefsResponseSchema,
  type VerificationRefsResponse,
} from "../verification-refs-response.js";

/**
 * If this hold resource was triggered through Payrix Integration Risk, then this field stores the
 * identifier of the VerificationRef.
 */
export type HoldsModelVerificationRef = string | VerificationRefsResponse;

export const holdsModelVerificationRefSchema: Schema<HoldsModelVerificationRef> =
  s.of<HoldsModelVerificationRef>(s.union([s.string(), s.lazy(() => verificationRefsResponseSchema)]));
