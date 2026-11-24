import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The balance from which the transfer should pull. The transfer will always use avaialble funds
 * first, and may, as directed by this field, pull from the pending balance.
 *                   * `AVAILABLE_BALANCE` - indicates that a transfer will pull only from available
 *                     funds in the funds management account.
 *                   * `AVAILABLE_AND_PENDING_BALANCE` - indicates the transfer will pull first from
 *                     the available balance, and then from the pending balance of the funds
 *                     management account, if needed.
 */
export const UsableBalanceModeTransfersUsableBalanceMode = {
  AvailableBalance: "AVAILABLE_BALANCE",
  AvailableAndPendingBalance: "AVAILABLE_AND_PENDING_BALANCE",
} as const;
export type UsableBalanceModeTransfersUsableBalanceMode =
  | (typeof UsableBalanceModeTransfersUsableBalanceMode)[keyof typeof UsableBalanceModeTransfersUsableBalanceMode]
  | (string & {});

export const usableBalanceModeTransfersUsableBalanceModeSchema: EnumSchema<UsableBalanceModeTransfersUsableBalanceMode> =
  s.enumOf<UsableBalanceModeTransfersUsableBalanceMode>(UsableBalanceModeTransfersUsableBalanceMode);
