import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { loginsResponseSchema, type LoginsResponse } from "../logins-response.js";

/**
 * The Login that will own the Payout resource. When set to null, the Payout resource will be owned
 * by the triggerring Entity.
 */
export type PayoutFlowsModelPayoutLogin = string | LoginsResponse;

export const payoutFlowsModelPayoutLoginSchema: Schema<PayoutFlowsModelPayoutLogin> =
  s.of<PayoutFlowsModelPayoutLogin>(s.union([s.string(), s.lazy(() => loginsResponseSchema)]));
