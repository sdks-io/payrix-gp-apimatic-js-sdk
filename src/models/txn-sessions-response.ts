import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { configurationsSchema, type Configurations } from "./configurations.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { login2Schema, type Login2 } from "./login2.js";

export type TxnSessionsResponse = {
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
  login?: Login2;
  /** The Merchant being used to create this txn session. */
  merchant?: string;
  /** The current status of this key. */
  status?: string;
  configurations?: Configurations;
  /** The origin from this request. */
  origin?: string;
  /**
   * Specifies the number of minutes for which the key remains valid. Once this duration expires,
   * the key will be automatically voided and cannot be used.
   */
  durationAvailable?: number;
  /** Indicates the number of times the key has been used to make requests. */
  timesUsed?: number;
  /** Indicates the number of approved transactions that have been made using this key. */
  timesApproved?: number;
  /** The randomly generated key used to authenticate a user. */
  key?: string;
};

export const txnSessionsResponseSchema: Schema<TxnSessionsResponse> = s.object<TxnSessionsResponse>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  login: s.optional(s.lazy(() => login2Schema)),
  merchant: s.optional(s.string()),
  status: s.optional(s.string()),
  configurations: s.optional(s.lazy(() => configurationsSchema)),
  origin: s.optional(s.string()),
  durationAvailable: s.optional(s.number()),
  timesUsed: s.optional(s.number()),
  timesApproved: s.optional(s.number()),
  key: s.optional(s.string()),
});
