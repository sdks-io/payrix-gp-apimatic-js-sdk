import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  accountVerificationType2Schema,
  type AccountVerificationType2,
} from "./account-verification-type2.js";
import { creator18Schema, type Creator18 } from "./creator18.js";

export type AccountVerificationResponse = {
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
  /** The identifier of the Account that you want to verify. */
  account?: string;
  type?: AccountVerificationType2;
  /** The first verification amount debited in cents. */
  debit1?: number;
  /** The second verification amount debited in cents. */
  debit2?: number;
  /** The number of verification challenge responses attempted. */
  trials?: number;
  /** Account that will be deposited with both amounts: debit1 and debit2. */
  toaccount?: string;
};

export const accountVerificationResponseSchema: Schema<AccountVerificationResponse> =
  s.object<AccountVerificationResponse>({
    id: s.optional(s.string()),
    created: s.optional(s.string()),
    modified: s.optional(s.string()),
    creator: s.optional(s.lazy(() => creator18Schema)),
    modifier: s.optional(s.string()),
    account: s.optional(s.string()),
    type: s.optional(s.lazy(() => accountVerificationType2Schema)),
    debit1: s.optional(s.number()),
    debit2: s.optional(s.number()),
    trials: s.optional(s.number()),
    toaccount: s.optional(s.string()),
  });
