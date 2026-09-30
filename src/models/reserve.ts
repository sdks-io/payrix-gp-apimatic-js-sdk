import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { division3Schema, type Division3 } from "./division3.js";
import { entity28Schema, type Entity28 } from "./entity28.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { holdSchema, type Hold } from "./hold.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import { login2Schema, type Login2 } from "./login2.js";
import { org4Schema, type Org4 } from "./org4.js";
import { partitionsResponseSchema, type PartitionsResponse } from "./partitions-response.js";
import { reserveEntriesResponseSchema, type ReserveEntriesResponse } from "./reserve-entries-response.js";
import { reserveStatus2Schema, type ReserveStatus2 } from "./reserve-status2.js";
import { reservesLevel2Schema, type ReservesLevel2 } from "./reserves-level2.js";
import { reservesRelease2Schema, type ReservesRelease2 } from "./reserves-release2.js";

export type Reserve = {
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
  org?: Org4;
  division?: Division3;
  partition?: PartitionsResponse;
  level?: ReservesLevel2;
  entity?: Entity28;
  hold?: Hold;
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
  percent?: number;
  release?: ReservesRelease2;
  /**
   * A multiplier that you can use to adjust the schedule set in the 'release' field, which is
   * specified as an integer and its value determines how the schedule is multiplied.
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
  status?: ReserveStatus2;
  inactive?: Inactive1;
  frozen?: Frozen1;
  reserveEntries?: ReserveEntriesResponse[];
};

export const reserveSchema: Schema<Reserve> = s.object<Reserve>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  login: s.optional(s.lazy(() => login2Schema)),
  org: s.optional(s.lazy(() => org4Schema)),
  division: s.optional(s.lazy(() => division3Schema)),
  partition: s.optional(s.lazy(() => partitionsResponseSchema)),
  level: s.optional(s.lazy(() => reservesLevel2Schema)),
  entity: s.optional(s.lazy(() => entity28Schema)),
  hold: s.optional(s.lazy(() => holdSchema)),
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  percent: s.optional(s.number()),
  release: s.optional(s.lazy(() => reservesRelease2Schema)),
  releaseFactor: s.optional(s.number()),
  start: s.optional(s.number()),
  finish: s.optional(s.number()),
  max: s.optional(s.number()),
  status: s.optional(s.lazy(() => reserveStatus2Schema)),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
  reserveEntries: s.optional(s.array(s.lazy(() => reserveEntriesResponseSchema))),
});
