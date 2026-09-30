import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AppleDomainsMassEnablementMerchantListResult = {
  /** Current verification status of the Apple Pay domain registration. */
  msg?: string;
  /**
   * Status of the Apple domain change
   *
   * <details> <summary>Valid Values</summary>
   * - `success` - **Domain successfully verified**
   * - `failed` - **Domain verification failed** </details>
   */
  status?: string;
};

export const appleDomainsMassEnablementMerchantListResultSchema: Schema<AppleDomainsMassEnablementMerchantListResult> =
  s.object<AppleDomainsMassEnablementMerchantListResult>({
    msg: s.optional(s.string()),
    status: s.optional(s.string()),
  });
