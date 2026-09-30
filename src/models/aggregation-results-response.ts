import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  aggregationResultGroupsResponseSchema,
  type AggregationResultGroupsResponse,
} from "./aggregation-result-groups-response.js";
import { creator18Schema, type Creator18 } from "./creator18.js";

export type AggregationResultsResponse = {
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
  aggregationResultGroup?: AggregationResultGroupsResponse;
  /**
   * Grouping is a process used in data aggregation to organize data into specific categories or
   * groups based on certain attributes. This allows for detailed analysis and reporting on subsets
   * of data. For example, grouping transactions by merchant and payment method enables you to see
   * the breakdown of transactions for each merchant and payment method combination.
   */
  grouping?: string;
  /**
   * The field of the resource where calculations were made based on. This field is stored as a text
   * string and must be between 1 and 100 characters long.
   */
  field?: string;
  /**
   * The value calculated by the count aggregation function. This field is specified as an integer.
   */
  count?: number;
  /**
   * The value calculated by the sum aggregation function. This field is specified in cents(up to
   * three decimal points).
   */
  sum?: number;
  /**
   * The value calculated by the min aggregation function. This field is specified in cents(up to
   * three decimal points).
   */
  min?: number;
  /**
   * The value calculated by the max aggregation function. This field is specified in cents(up to
   * three decimal points).
   */
  max?: number;
};

export const aggregationResultsResponseSchema: Schema<AggregationResultsResponse> =
  s.object<AggregationResultsResponse>({
    id: s.optional(s.string()),
    created: s.optional(s.string()),
    modified: s.optional(s.string()),
    creator: s.optional(s.lazy(() => creator18Schema)),
    modifier: s.optional(s.string()),
    aggregationResultGroup: s.optional(s.lazy(() => aggregationResultGroupsResponseSchema)),
    grouping: s.optional(s.string()),
    field: s.optional(s.string()),
    count: s.optional(s.number()),
    sum: s.optional(s.number()),
    min: s.optional(s.number()),
    max: s.optional(s.number()),
  });
