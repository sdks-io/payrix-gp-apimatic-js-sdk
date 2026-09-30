import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import { orgsPostRequestSchema, type OrgsPostRequest } from "./orgs-post-request.js";
import { reservesLevel2Schema, type ReservesLevel2 } from "./reserves-level2.js";
import { reservesRelease2Schema, type ReservesRelease2 } from "./reserves-release2.js";

export type ReservesPostRequest = {
  /** The Login that owns this resource. */
  login: string;
  org?: OrgsPostRequest;
  /** The division on which this reserve applies. */
  division?: string;
  /** The partition on which this reserve applies. */
  partition?: string;
  level?: ReservesLevel2;
  /** The identifier of the Entity that this Reserve applies to. */
  entity?: string;
  /** The entity hold from which this reserve was generated. */
  hold?: string;
  /**
   * The name of this Reserve. This field is stored as a text string and must be between 1 and 100
   * characters long.
   */
  name?: string;
  /**
   * A description of this Reserve. This field is stored as a text string and must be between 0 and
   * 100 characters long.
   */
  description?: string;
  /**
   * The percentage of funds to reserve, expressed in basis points. For example, 25.3% is expressed
   * as '2530'.
   */
  percent: number;
  release?: ReservesRelease2;
  /**
   * A multiplier that you can use to adjust the schedule set in the 'release' field, which is
   * specified as an integer and its value determines how the schedule is multiplied.
   *
   * @default 1
   */
  releaseFactor?: number;
  /**
   * The date on which this Reserve resource should start reserving funds from the Entity or Org.
   * The date is specified as an eight digit string in YYYYMMDD format, for example, '20160120' for
   * January 20, 2016.
   */
  start?: number;
  /**
   * The date on which this Reserve resource should stop reserving funds from the Entity or Org. The
   * date is specified as an eight digit string in YYYYMMDD format, for example, '20160120' for
   * January 20, 2016.
   */
  finish?: number;
  /** The maximum amount to reserve. */
  max?: number;
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const reservesPostRequestSchema: Schema<ReservesPostRequest> = s.object<ReservesPostRequest>({
  login: s.string(),
  org: s.optional(s.lazy(() => orgsPostRequestSchema)),
  division: s.optional(s.string()),
  partition: s.optional(s.string()),
  level: s.optional(s.lazy(() => reservesLevel2Schema)),
  entity: s.optional(s.string()),
  hold: s.optional(s.string()),
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  percent: s.number(),
  release: s.optional(s.lazy(() => reservesRelease2Schema)),
  releaseFactor: s.defaulted(s.number(), 1),
  start: s.optional(s.number()),
  finish: s.optional(s.number()),
  max: s.optional(s.number()),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
});
