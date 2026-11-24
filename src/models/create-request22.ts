import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  UsableBalanceModeTransfersUsableBalanceMode,
  usableBalanceModeTransfersUsableBalanceModeSchema,
} from "./usable-balance-mode-transfers-usable-balance-mode.js";

export type CreateRequest22 = {
  /** The account identifier for the account that sent a transfer. */
  accountId?: string;
  /** The account name for the account that sent a transfer. */
  accountName?: string;
  /** The account identifier for the account that recieved a transfer. */
  recipientAccountId: string;
  /** The account identifier for the account that recieved a transfer. */
  recipientAccountName?: string;
  /**
   * A label on the GP API platform that further identifies the instance fo the resource. This is
   * intended to be unique but GP API does not polic its uniqueness.
   */
  reference: string;
  /**
   * The amount that is being transferred. Represented in the lowest denomination of the currency
   * (i.e. $100.00 = 10000
   */
  amount: string;
  /** The description of the transfer */
  description: string;
  /**
   * The balance from which the transfer should pull. The transfer will always use avaialble funds
   * first, and may, as directed by this field, pull from the pending balance.
   *                   * `AVAILABLE_BALANCE` - indicates that a transfer will pull only from
   *                     available funds in the funds management account.
   *                   * `AVAILABLE_AND_PENDING_BALANCE` - indicates the transfer will pull first
   *                     from the available balance, and then from the pending balance of the funds
   *                     management account, if needed.
   *
   * @default UsableBalanceModeTransfersUsableBalanceMode.AvailableBalance
   */
  usableBalanceMode?: UsableBalanceModeTransfersUsableBalanceMode;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createRequest22Properties: s.Shape<CreateRequest22> = {
  accountId: s.optional(s.string()),
  accountName: s.optional(s.string()),
  recipientAccountId: s.string(),
  recipientAccountName: s.optional(s.string()),
  reference: s.string(),
  amount: s.string(),
  description: s.string(),
  usableBalanceMode: s.defaulted(
    usableBalanceModeTransfersUsableBalanceModeSchema,
    UsableBalanceModeTransfersUsableBalanceMode.AvailableBalance,
  ),
  _keysMap: {
    accountId: "account_id",
    accountName: "account_name",
    recipientAccountId: "recipient_account_id",
    recipientAccountName: "recipient_account_name",
    usableBalanceMode: "usable_balance_mode",
  },
};

export const createRequest22InternalSchema: Schema<CreateRequest22> = s.object<CreateRequest22>(
  createRequest22Properties,
  { additionalProperties: s.json() },
);

export const createRequest22Schema: Schema<CreateRequest22> = s.lazySchema(() =>
  s.object<CreateRequest22>(
    {
      ...createRequest22Properties,
      accountId: s.optional(s.string().check(s.maxLength(50))),
      accountName: s.optional(s.string().check(s.maxLength(50))),
      recipientAccountId: s.string().check(s.maxLength(50)),
      reference: s.string().check(s.maxLength(50)),
      amount: s.string().check(s.maxLength(50)),
      description: s.string().check(s.maxLength(50)),
    },
    { additionalProperties: s.json() },
  ),
);
