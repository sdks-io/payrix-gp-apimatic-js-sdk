import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { aggregationDefault1Schema, type AggregationDefault1 } from "./aggregation-default1.js";
import {
  aggregationResultsResponseSchema,
  type AggregationResultsResponse,
} from "./aggregation-results-response.js";
import { aggregationSchema, type Aggregation } from "./aggregation.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { resource1Schema, type Resource1 } from "./resource1.js";

export type AggregationResultGroupsResponse = {
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
  aggregation?: Aggregation;
  resource?: Resource1;
  /**
   * The search query used to find records and apply the desired calculation. This field is stored
   * as a text string, must be between 0 and 1000 characters long, and is copied from the
   * aggregation.
   */
  search?: string;
  /**
   * The especification of the desired aggregation functions including count, sum, min and max. This
   * field is stored as a text string, must be between 1 and 100 characters long, and is copied from
   * the aggregation.
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
  /** The last modified date and time. The format should be YYYY-MM-DD HH:MM:SS */
  lastModified?: string;
  /** Effective date time of aggregation. */
  effective?: number;
  default?: AggregationDefault1;
  /** The type of aggregation which auto-sets the search and total values. */
  type?: string;
  /** The level of user the aggregation should be processed for (similar to Decisions.level). */
  level?: string;
  aggregationResults?: AggregationResultsResponse[];
};

export const aggregationResultGroupsResponseSchema: Schema<AggregationResultGroupsResponse> =
  s.object<AggregationResultGroupsResponse>({
    id: s.optional(s.string()),
    created: s.optional(s.string()),
    modified: s.optional(s.string()),
    creator: s.optional(s.lazy(() => creator18Schema)),
    modifier: s.optional(s.string()),
    aggregation: s.optional(s.lazy(() => aggregationSchema)),
    resource: s.optional(s.lazy(() => resource1Schema)),
    search: s.optional(s.string()),
    totals: s.optional(s.string()),
    degrouping: s.optional(s.string()),
    lastModified: s.optional(s.string()),
    effective: s.optional(s.number()),
    default: s.optional(s.lazy(() => aggregationDefault1Schema)),
    type: s.optional(s.string()),
    level: s.optional(s.string()),
    aggregationResults: s.optional(s.array(s.lazy(() => aggregationResultsResponseSchema))),
  });
