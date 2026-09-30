import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import {
  pinlessDebitConversionsPlatform2Schema,
  type PinlessDebitConversionsPlatform2,
} from "./pinless-debit-conversions-platform2.js";

export type PinlessDebitConversionsResponse = {
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
  /**
   * The Date and time when an entity was enabled for pinlessDebitConversion. The date is specified
   * as an eight digit string in YYYY-MM-DD hh:mm:ss format, for example, '2023-06-01 01:00:00' for
   * June 01, 2023. 1:00 am.
   */
  enablementDate?: string;
  /** The identifier of the Org (group) that pinlessDebitConversion is associated to. */
  org?: string;
  /** The identifier of the Division that pinlessDebitConversion is associated to. */
  division?: string;
  /** The identifier of the Partition that pinlessDebitConversion is associated to. */
  partition?: string;
  platform?: PinlessDebitConversionsPlatform2;
  inactive?: Inactive1;
  frozen?: Frozen1;
  /** In case resource is deleted, this field will then show the date it occurred. */
  deleted?: string;
  /** The id of user who deleted the pinlessDebitConversion. */
  deleter?: string;
};

export const pinlessDebitConversionsResponseSchema: Schema<PinlessDebitConversionsResponse> =
  s.object<PinlessDebitConversionsResponse>({
    id: s.optional(s.string()),
    created: s.optional(s.string()),
    modified: s.optional(s.string()),
    creator: s.optional(s.lazy(() => creator18Schema)),
    modifier: s.optional(s.string()),
    enablementDate: s.optional(s.string()),
    org: s.optional(s.string()),
    division: s.optional(s.string()),
    partition: s.optional(s.string()),
    platform: s.optional(s.lazy(() => pinlessDebitConversionsPlatform2Schema)),
    inactive: s.optional(s.lazy(() => inactive1Schema)),
    frozen: s.optional(s.lazy(() => frozen1Schema)),
    deleted: s.optional(s.string()),
    deleter: s.optional(s.string()),
  });
