import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { embeddedFinanceProduct2Schema, type EmbeddedFinanceProduct2 } from "./embedded-finance-product2.js";
import { embededFinancePlatform2Schema, type EmbededFinancePlatform2 } from "./embeded-finance-platform2.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";

export type EmbeddedFinancePostRequest = {
  /**
   * The Date and time when an entity was enabled for embeddedFinance.\nThe date is specified as an
   * eight digit string in YYYY-MM-DD hh:mm:ss format, for example, '2023-06-01 01:00:00' for June
   * 01, 2023. 1:00 am.
   */
  enablementDate?: string;
  product?: EmbeddedFinanceProduct2;
  platform?: EmbededFinancePlatform2;
  /** The identifier of the Entity that this embeddedFinance is associated to. */
  entity?: string;
  /** The identifier of the Org (group) that embeddedFinance is associated to. */
  org?: string;
  /** The identifier of the Division that embeddedFinance is associated to. */
  division?: string;
  /** The identifier of the Partition that embeddedFinance is associated to. */
  partition?: string;
  inactive?: Inactive1;
  frozen?: Frozen1;
  /** Contains configuration of the product. */
  productContract?: string;
  /** The total approved loan amount for the partner’s merchants */
  accumulatedLoanTotal?: string;
};

export const embeddedFinancePostRequestSchema: Schema<EmbeddedFinancePostRequest> =
  s.object<EmbeddedFinancePostRequest>({
    enablementDate: s.optional(s.string()),
    product: s.optional(s.lazy(() => embeddedFinanceProduct2Schema)),
    platform: s.optional(s.lazy(() => embededFinancePlatform2Schema)),
    entity: s.optional(s.string()),
    org: s.optional(s.string()),
    division: s.optional(s.string()),
    partition: s.optional(s.string()),
    inactive: s.optional(s.lazy(() => inactive1Schema)),
    frozen: s.optional(s.lazy(() => frozen1Schema)),
    productContract: s.optional(s.string()),
    accumulatedLoanTotal: s.optional(s.string()),
  });
