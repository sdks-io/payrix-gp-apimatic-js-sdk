import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { embeddedFinanceProduct2Schema, type EmbeddedFinanceProduct2 } from "./embedded-finance-product2.js";
import { embededFinancePlatform2Schema, type EmbededFinancePlatform2 } from "./embeded-finance-platform2.js";

export type EmbeddedFinanceResponse = {
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
  /**
   * The Date and time when an entity was enabled for embeddedFinance.\nThe date is specified as an
   * eight digit string in YYYY-MM-DD hh:mm:ss format, for example, '2023-06-01 01:00:00' for June
   * 01, 2023. 1:00 am.
   */
  enablementDate?: string;
  product?: EmbeddedFinanceProduct2;
  platform?: EmbededFinancePlatform2;
};

export const embeddedFinanceResponseSchema: Schema<EmbeddedFinanceResponse> =
  s.object<EmbeddedFinanceResponse>({
    id: s.optional(s.string()),
    created: s.optional(s.string()),
    modified: s.optional(s.string()),
    creator: s.optional(s.lazy(() => creator18Schema)),
    modifier: s.optional(s.string()),
    enablementDate: s.optional(s.string()),
    product: s.optional(s.lazy(() => embeddedFinanceProduct2Schema)),
    platform: s.optional(s.lazy(() => embededFinancePlatform2Schema)),
  });
