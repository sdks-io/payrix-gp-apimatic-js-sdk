import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { aggregationsResponseSchema, type AggregationsResponse } from "./aggregations-response.js";
import {
  billingModifiersResponseSchema,
  type BillingModifiersResponse,
} from "./billing-modifiers-response.js";
import { billingsResponseSchema, type BillingsResponse } from "./billings-response.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { decisionsResponseSchema, type DecisionsResponse } from "./decisions-response.js";
import { embeddedFinanceResponseSchema, type EmbeddedFinanceResponse } from "./embedded-finance-response.js";
import { login2Schema, type Login2 } from "./login2.js";

export type Org1 = {
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
  /**
   * The name of this Org. This field is stored as a text string and must be between 0 and 100
   * characters long.
   */
  name?: string;
  /**
   * A description of this Org. This field is stored as a text string and must be between 0 and 100
   * characters long.
   */
  description?: string;
  /** This is used to specify a default fee for a group. */
  defaultFeeFromEntity?: string;
  aggregations?: AggregationsResponse[];
  billingModifiers?: BillingModifiersResponse[];
  billings?: BillingsResponse[];
  decisions?: DecisionsResponse[];
  embeddedFinance?: EmbeddedFinanceResponse[];
};

export const org1Schema: Schema<Org1> = s.object<Org1>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  login: s.optional(s.lazy(() => login2Schema)),
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  defaultFeeFromEntity: s.optional(s.string()),
  aggregations: s.optional(s.array(s.lazy(() => aggregationsResponseSchema))),
  billingModifiers: s.optional(s.array(s.lazy(() => billingModifiersResponseSchema))),
  billings: s.optional(s.array(s.lazy(() => billingsResponseSchema))),
  decisions: s.optional(s.array(s.lazy(() => decisionsResponseSchema))),
  embeddedFinance: s.optional(s.array(s.lazy(() => embeddedFinanceResponseSchema))),
});
