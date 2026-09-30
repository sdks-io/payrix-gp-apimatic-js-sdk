import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { merchantsResponseSchema, type MerchantsResponse } from "../merchants-response.js";

/** The identifier of the Merchant associated with this Transaction. */
export type TerminalTxnsModelMerchant = string | MerchantsResponse;

export const terminalTxnsModelMerchantSchema: Schema<TerminalTxnsModelMerchant> =
  s.of<TerminalTxnsModelMerchant>(s.union([s.string(), s.lazy(() => merchantsResponseSchema)]));
