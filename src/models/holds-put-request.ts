import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { holdsHoldSource1Schema, type HoldsHoldSource1 } from "./holds-hold-source1.js";
import { holdsReleaseAction1Schema, type HoldsReleaseAction1 } from "./holds-release-action1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";

export type HoldsPutRequest = {
  /** The identifier of the Login that owns this holds resource. */
  login?: string;
  /**
   * If this hold resource was triggered through Payrix Integration Risk, then this field stores the
   * identifier of the VerificationRef.
   */
  verificationRef?: string;
  /**
   * If this hold was released, this will contain the timestamp for when it was released.
   * (YYYY-MM-DD HH:II:SS)
   */
  released?: string;
  /**
   * If this hold was reviewed, this will contain the timestamp for when it was reviewed.
   * (YYYY-MM-DD HH:II:SS)
   */
  reviewed?: string;
  releaseAction?: HoldsReleaseAction1;
  holdSource?: HoldsHoldSource1;
  /** reasonid for why a hold was created. */
  holdSourceId?: string;
  /** The timestamp when hold was considered to be delaying funding. (YYYY-MM-DD HH:II:SS) */
  delayedFundingStartDate?: string;
  /**
   * The timestamp when hold stopped delaying funding, this might be due to the hold been released,
   * cancelled or funded. (YYYY-MM-DD HH:II:SS)
   */
  delayedFundingEndDate?: string;
  /** The person who review the hold applied. */
  analyst?: string;
  /** The timestamp for the most recent update of the analyst field. (YYYY-MM-DD HH:II:SS) */
  claimed?: string;
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const holdsPutRequestSchema: Schema<HoldsPutRequest> = s.object<HoldsPutRequest>({
  login: s.optional(s.string()),
  verificationRef: s.optional(s.string()),
  released: s.optional(s.string()),
  reviewed: s.optional(s.string()),
  releaseAction: s.optional(s.lazy(() => holdsReleaseAction1Schema)),
  holdSource: s.optional(s.lazy(() => holdsHoldSource1Schema)),
  holdSourceId: s.optional(s.string()),
  delayedFundingStartDate: s.optional(s.string()),
  delayedFundingEndDate: s.optional(s.string()),
  analyst: s.optional(s.string()),
  claimed: s.optional(s.string()),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
});
