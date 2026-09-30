import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { entity17Schema, type Entity17 } from "./entity17.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";

export type Fund = {
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
  entity?: Entity17;
  currency?: Record<string, unknown>;
  /**
   * The amount held in this Fund that is marked as reserved, This field is specified in cents(up to
   * three decimal points). See <a href="https://www.iban.com/currency-codes"
   * target="_blank">Currency codes</a> for all valid values.
   */
  reserved?: number;
  /**
   * The current funds pending for the entity, This field is specified in cents(up to three decimal
   * points)
   */
  pending?: number;
  /**
   * The amount held in this Fund that is currently available for disbursement, This field is
   * specified in cents(up to three decimal points).
   */
  available?: number;
  /**
   * The total amount held in this Fund, This field is specified in cents(up to three decimal
   * points).
   */
  total?: number;
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const fundSchema: Schema<Fund> = s.object<Fund>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  entity: s.optional(s.lazy(() => entity17Schema)),
  currency: s.optional(s.record(s.string(), s.unknown())),
  reserved: s.optional(s.number()),
  pending: s.optional(s.number()),
  available: s.optional(s.number()),
  total: s.optional(s.number()),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
});
