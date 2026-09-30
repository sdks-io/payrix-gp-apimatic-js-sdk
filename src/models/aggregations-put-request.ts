import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { aggregationDefault1Schema, type AggregationDefault1 } from "./aggregation-default1.js";
import { aggregationSchedule1Schema, type AggregationSchedule1 } from "./aggregation-schedule1.js";
import { aggregationStatus1Schema, type AggregationStatus1 } from "./aggregation-status1.js";
import { aggregationType1Schema, type AggregationType1 } from "./aggregation-type1.js";
import { aggregationsLevel1Schema, type AggregationsLevel1 } from "./aggregations-level1.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import { resource1Schema, type Resource1 } from "./resource1.js";

export type AggregationsPutRequest = {
  /** The identifier of the Login that owns this Aggregation. */
  login?: string;
  /** The identifier of the Entity that this Aggregation applies to. */
  entity?: string;
  /** The identifier of the Login that this Aggregation applies to. */
  forlogin?: string;
  /** The identifier of the Org that this Aggregation applies to. */
  org?: string;
  /** The identifier of the Team that this Aggregation applies to. */
  team?: string;
  /** The identifier of the Division that this Aggregation applies to. */
  division?: string;
  /** The identifier of the Partition that this Aggregation applies to. */
  partition?: string;
  type?: AggregationType1;
  level?: AggregationsLevel1;
  /**
   * The name of this Aggregation. This field is stored as a text string and must be between 0 and
   * 100 characters long.
   */
  name?: string;
  /**
   * A description of this Aggregation. This field is stored as a text string and must be between 0
   * and 100 characters long.
   */
  description?: string;
  resource?: Resource1;
  /**
   * The search query used to find records and apply the desired calculation. This field is stored
   * as a text string and must be between 0 and 1000 characters long.
   */
  search?: string;
  /**
   * The specification of the desired aggregation functions including count, sum, min and max. This
   * field is stored as a text string and must be between 1 and 100 characters long.
   */
  totals?: string;
  /**
   * Degrouping is the reverse process of grouping, where progressively smaller groups are removed
   * to provide aggregated results at higher levels. This is useful when you want to see overall
   * totals without the detailed breakdowns. For example, degrouping can be used to sum up all
   * transactions across all merchants and payment methods, providing a total approval count without
   * needing to look at individual merchant or payment method details.
   */
  degrouping?: string;
  status?: AggregationStatus1;
  schedule?: AggregationSchedule1;
  /**
   * A multiplier that you can use to adjust the schedule set in the 'schedule' field, such as
   * daily, weekly, monthly, or annually. In This field is specified as an integer and its value
   * determines how the interval is multiplied.
   */
  scheduleFactor?: number;
  /**
   * The date on which the aggregation processing should start. The date is specified as a twelve
   * digit string in YYYYMMDDHHII format, for example, '201601201528' for January 20, 2016 at 15:28
   * (3:28 pm). The value of this field must represent a date in the future, or the present date.
   * When the schedule is set to HOURLY (1) the minute part of the time must be divisible by 10
   * (15:10, 15:20, 15:30, etc...).
   */
  start?: number;
  default?: AggregationDefault1;
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const aggregationsPutRequestSchema: Schema<AggregationsPutRequest> = s.object<AggregationsPutRequest>({
  login: s.optional(s.string()),
  entity: s.optional(s.string()),
  forlogin: s.optional(s.string()),
  org: s.optional(s.string()),
  team: s.optional(s.string()),
  division: s.optional(s.string()),
  partition: s.optional(s.string()),
  type: s.optional(s.lazy(() => aggregationType1Schema)),
  level: s.optional(s.lazy(() => aggregationsLevel1Schema)),
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  resource: s.optional(s.lazy(() => resource1Schema)),
  search: s.optional(s.string()),
  totals: s.optional(s.string()),
  degrouping: s.optional(s.string()),
  status: s.optional(s.lazy(() => aggregationStatus1Schema)),
  schedule: s.optional(s.lazy(() => aggregationSchedule1Schema)),
  scheduleFactor: s.optional(s.number()),
  start: s.optional(s.number()),
  default: s.optional(s.lazy(() => aggregationDefault1Schema)),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
});
