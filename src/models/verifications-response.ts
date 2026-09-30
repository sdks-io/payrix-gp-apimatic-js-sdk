import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { verificationType2Schema, type VerificationType2 } from "./verification-type2.js";
import { verificationsGenerated2Schema, type VerificationsGenerated2 } from "./verifications-generated2.js";

export type VerificationsResponse = {
  /** The ID of this resource. */
  id?: string;
  /**
   * The date and time at which this resource was created. The format should be YYYY-MM-DD
   * HH:MM:SS.SSSS
   */
  created?: string;
  /**
   * The date and time at which this resource was modified. The format should be YYYY-MM-DD
   * HH:MM:SS.SSSS
   */
  modified?: string;
  creator?: Creator18;
  /** The identifier of the Login that last modified this resource. */
  modifier?: string;
  /** The Login that owns this resource. */
  login?: string;
  /** The identifier of the Entity that you want to verify. */
  entity?: string;
  /** The identifier of the Member that you want to verify. */
  member?: string;
  /** The Txn id in which this Verification belongs to. */
  txn?: string;
  /** The TerminalTxn id in which this Verification belongs to. */
  terminalTxn?: string;
  /** The Account id in which this Verification belongs to. */
  account?: string;
  /** Used to link multiple decisions together. */
  decision?: string;
  type?: VerificationType2;
  /** Whether this verification was created from cache. The format should be YYYY-MM-DD HH:MM:SS. */
  fromCache?: string;
  /** The Options for this Verification. */
  options?: number;
  /** The Additional Options for this Verification. */
  additionalOptions?: number;
  /** Level conditions. */
  level?: string;
  /**
   * The value for this Verification. This is used to associate a Verification to a Watchlist for
   * Watchlist Verifications.
   */
  value?: string;
  /** The score for this Verification. This field is specified as an integer between 0 and 100. */
  score?: number;
  /** Description of the verification. */
  description?: string;
  /** The reference number for this verification. */
  ref?: string;
  generated?: VerificationsGenerated2;
};

export const verificationsResponseSchema: Schema<VerificationsResponse> = s.object<VerificationsResponse>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  login: s.optional(s.string()),
  entity: s.optional(s.string()),
  member: s.optional(s.string()),
  txn: s.optional(s.string()),
  terminalTxn: s.optional(s.string()),
  account: s.optional(s.string()),
  decision: s.optional(s.string()),
  type: s.optional(s.lazy(() => verificationType2Schema)),
  fromCache: s.optional(s.string()),
  options: s.optional(s.number()),
  additionalOptions: s.optional(s.number()),
  level: s.optional(s.string()),
  value: s.optional(s.string()),
  score: s.optional(s.number()),
  description: s.optional(s.string()),
  ref: s.optional(s.string()),
  generated: s.optional(s.lazy(() => verificationsGenerated2Schema)),
});
