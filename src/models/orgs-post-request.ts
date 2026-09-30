import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { billingsPostRequestSchema, type BillingsPostRequest } from "./billings-post-request.js";
import { feeModifiersPostRequestSchema, type FeeModifiersPostRequest } from "./fee-modifiers-post-request.js";
import { feesPostRequestSchema, type FeesPostRequest } from "./fees-post-request.js";
import {
  invoiceParametersPostRequestSchema,
  type InvoiceParametersPostRequest,
} from "./invoice-parameters-post-request.js";
import { orgEntitiesPostRequestSchema, type OrgEntitiesPostRequest } from "./org-entities-post-request.js";
import { payoutFlowsPostRequestSchema, type PayoutFlowsPostRequest } from "./payout-flows-post-request.js";
import { profitSharesPostRequestSchema, type ProfitSharesPostRequest } from "./profit-shares-post-request.js";
import { reservesPostRequestSchema, type ReservesPostRequest } from "./reserves-post-request.js";
import { secretsPostRequestSchema, type SecretsPostRequest } from "./secrets-post-request.js";

export type OrgsPostRequest = {
  /** The Login that owns this Org. */
  login?: string | null;
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
  billings?: BillingsPostRequest[];
  feeModifiers?: FeeModifiersPostRequest[];
  fees?: FeesPostRequest[];
  invoiceParameters?: InvoiceParametersPostRequest[];
  orgEntities?: OrgEntitiesPostRequest[];
  payoutFlows?: PayoutFlowsPostRequest[];
  profitShares?: ProfitSharesPostRequest[];
  reserves?: ReservesPostRequest[];
  secrets?: SecretsPostRequest[];
};

export const orgsPostRequestSchema: Schema<OrgsPostRequest> = s.object<OrgsPostRequest>({
  login: s.optionalNullable(s.string()),
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  billings: s.optional(s.array(s.lazy(() => billingsPostRequestSchema))),
  feeModifiers: s.optional(s.array(s.lazy(() => feeModifiersPostRequestSchema))),
  fees: s.optional(s.array(s.lazy(() => feesPostRequestSchema))),
  invoiceParameters: s.optional(s.array(s.lazy(() => invoiceParametersPostRequestSchema))),
  orgEntities: s.optional(s.array(s.lazy(() => orgEntitiesPostRequestSchema))),
  payoutFlows: s.optional(s.array(s.lazy(() => payoutFlowsPostRequestSchema))),
  profitShares: s.optional(s.array(s.lazy(() => profitSharesPostRequestSchema))),
  reserves: s.optional(s.array(s.lazy(() => reservesPostRequestSchema))),
  secrets: s.optional(s.array(s.lazy(() => secretsPostRequestSchema))),
});
