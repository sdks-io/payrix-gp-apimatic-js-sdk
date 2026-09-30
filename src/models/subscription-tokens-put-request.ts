import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";

export type SubscriptionTokensPutRequest = {
  /**
   * The identifier of the Token resource that this Subscription Token is associated with. This
   * resource identifies the means of payment for the Subscription identified in the 'subscription'
   * field of this resource.
   */
  token?: string;
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const subscriptionTokensPutRequestSchema: Schema<SubscriptionTokensPutRequest> =
  s.object<SubscriptionTokensPutRequest>({
    token: s.optional(s.string()),
    inactive: s.optional(s.lazy(() => inactive1Schema)),
    frozen: s.optional(s.lazy(() => frozen1Schema)),
  });
