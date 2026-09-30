import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { aggregationDefault1Schema, type AggregationDefault1 } from "./aggregation-default1.js";
import {
  aggregationResultGroupsResponseSchema,
  type AggregationResultGroupsResponse,
} from "./aggregation-result-groups-response.js";
import { aggregationSchedule1Schema, type AggregationSchedule1 } from "./aggregation-schedule1.js";
import { aggregationStatus1Schema, type AggregationStatus1 } from "./aggregation-status1.js";
import { aggregationType1Schema, type AggregationType1 } from "./aggregation-type1.js";
import { aggregationsLevel1Schema, type AggregationsLevel1 } from "./aggregations-level1.js";
import { creator2Schema, type Creator2 } from "./creator2.js";
import { division3Schema, type Division3 } from "./division3.js";
import { entity28Schema, type Entity28 } from "./entity28.js";
import { forloginSchema, type Forlogin } from "./forlogin.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import { login2Schema, type Login2 } from "./login2.js";
import { orgsResponseSchema, type OrgsResponse } from "./orgs-response.js";
import { partitionsResponseSchema, type PartitionsResponse } from "./partitions-response.js";
import { resource1Schema, type Resource1 } from "./resource1.js";
import { teamSchema, type Team } from "./team.js";

export type Aggregation = {
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
  creator?: Creator2;
  /** The identifier of the Login that last modified this resource. */
  modifier?: string;
  login?: Login2;
  entity?: Entity28;
  forlogin?: Forlogin;
  org?: OrgsResponse;
  team?: Team;
  division?: Division3;
  partition?: PartitionsResponse;
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
  aggregationResultGroups?: AggregationResultGroupsResponse[];
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const aggregationSchema: Schema<Aggregation> = s.object<Aggregation>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator2Schema)),
  modifier: s.optional(s.string()),
  login: s.optional(s.lazy(() => login2Schema)),
  entity: s.optional(s.lazy(() => entity28Schema)),
  forlogin: s.optional(s.lazy(() => forloginSchema)),
  org: s.optional(s.lazy(() => orgsResponseSchema)),
  team: s.optional(s.lazy(() => teamSchema)),
  division: s.optional(s.lazy(() => division3Schema)),
  partition: s.optional(s.lazy(() => partitionsResponseSchema)),
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
  aggregationResultGroups: s.optional(s.array(s.lazy(() => aggregationResultGroupsResponseSchema))),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
});
