import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { entitiesPostRequestSchema, type EntitiesPostRequest } from "./entities-post-request.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import { orgsPostRequestSchema, type OrgsPostRequest } from "./orgs-post-request.js";
import {
  profitShareRulesPostRequestSchema,
  type ProfitShareRulesPostRequest,
} from "./profit-share-rules-post-request.js";
import { profitShareType1Schema, type ProfitShareType1 } from "./profit-share-type1.js";

export type ProfitSharesPostRequest = {
  /** The identifier of the Login that owns this ProfitShare. */
  login: string;
  entity: EntitiesPostRequest;
  forentity?: EntitiesPostRequest;
  org?: OrgsPostRequest;
  /** The identifier of the Division in which entities will have their earnings/expenses shares. */
  division?: string;
  /** The identifier of the Partition in which entities will have their earnings/expenses shares. */
  partition?: string;
  type: ProfitShareType1;
  /**
   * The name of this ProfitShare. This field is stored as a text string and must be between 0 and
   * 100 characters long.
   */
  name?: string;
  /**
   * A description of this ProfitShare. This field is stored as a text string and must be between 0
   * and 100 characters long.
   */
  description?: string;
  /**
   * The percentage to be shared. This field is specified as an integer between 1 and 10000.
   * Percentages are calculated over the income/expense amount.
   */
  amount: number;
  inactive?: Inactive1;
  frozen?: Frozen1;
  profitShareRules?: ProfitShareRulesPostRequest[];
};

export const profitSharesPostRequestSchema: Schema<ProfitSharesPostRequest> =
  s.object<ProfitSharesPostRequest>({
    login: s.string(),
    entity: entitiesPostRequestSchema,
    forentity: s.optional(s.lazy(() => entitiesPostRequestSchema)),
    org: s.optional(s.lazy(() => orgsPostRequestSchema)),
    division: s.optional(s.string()),
    partition: s.optional(s.string()),
    type: profitShareType1Schema,
    name: s.optional(s.string()),
    description: s.optional(s.string()),
    amount: s.number(),
    inactive: s.optional(s.lazy(() => inactive1Schema)),
    frozen: s.optional(s.lazy(() => frozen1Schema)),
    profitShareRules: s.optional(s.array(s.lazy(() => profitShareRulesPostRequestSchema))),
  });
