import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import { revenueBoostsPlatform1Schema, type RevenueBoostsPlatform1 } from "./revenue-boosts-platform1.js";

/** A request body for creating new networkPaymentManager */
export type RevenueBoostsPostRequest = {
  /** The identifier of the Entity that networkPaymentManager is associated with. */
  entity: string;
  platform?: RevenueBoostsPlatform1;
  /** The identifier of the Org (group) that networkPaymentManager is associated with. */
  org?: string;
  /** The identifier of the Division that networkPaymentManager is associated with. */
  division?: string;
  /** The identifier of the Partition that networkPaymentManager is associated with. */
  partition?: string;
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const revenueBoostsPostRequestSchema: Schema<RevenueBoostsPostRequest> =
  s.object<RevenueBoostsPostRequest>({
    entity: s.string(),
    platform: s.optional(s.lazy(() => revenueBoostsPlatform1Schema)),
    org: s.optional(s.string()),
    division: s.optional(s.string()),
    partition: s.optional(s.string()),
    inactive: s.optional(s.lazy(() => inactive1Schema)),
    frozen: s.optional(s.lazy(() => frozen1Schema)),
  });
