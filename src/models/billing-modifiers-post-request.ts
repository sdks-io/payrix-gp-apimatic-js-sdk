import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";

export type BillingModifiersPostRequest = {
  /** The identifier of the Billing that this Billing Modifier applies to. */
  billing: string;
  /** The identifier of the Entity that this Billing Modifier applies to. */
  entity?: string;
  /** The identifier of the Org that this Billing Modifier applies to. */
  org?: string;
  /** The identifier of the Division that this Billing Modifier applies to. */
  division?: string;
  /** The identifier of the Partition that this Billing Modifier applies to. */
  partition?: string;
  /**
   * The identifier of the Entity that is responsible for paying this Bill on behalf of the Entity
   * specified in the 'entity' field.
   */
  fromentity: string;
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const billingModifiersPostRequestSchema: Schema<BillingModifiersPostRequest> =
  s.object<BillingModifiersPostRequest>({
    billing: s.string(),
    entity: s.optional(s.string()),
    org: s.optional(s.string()),
    division: s.optional(s.string()),
    partition: s.optional(s.string()),
    fromentity: s.string(),
    inactive: s.optional(s.lazy(() => inactive1Schema)),
    frozen: s.optional(s.lazy(() => frozen1Schema)),
  });
