import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { provider39Schema, type Provider39 } from "./provider39.js";
import {
  statusTransactionsTransfersStatusSchema,
  type StatusTransactionsTransfersStatus,
} from "./status-transactions-transfers-status.js";

export type Transfer1 = {
  /** GP/APIMCS assigned unique identifier for each instance/record of this resource. */
  id?: string;
  /** GP API specific created time indicating when the instance of the resource was created. */
  timeCreated?: Date;
  /** The overall status of the instance of the resource. */
  status?: StatusTransactionsTransfersStatus;
  /**
   * The amount that is being transferred. Represented in the lowest denomination of the currency
   * (i.e. $100.00 = 10000
   */
  amount?: string;
  /** A unique identifier for the merchant set by Global Payments. */
  merchantId?: string;
  /** The merchant name of the account that sent the transfer. */
  merchantName?: string;
  /** A unique identifier for the merchant account set by Global Payments */
  accountId?: string;
  /** The account name for the account that sent a transfer. */
  accountName?: string;
  /** The merchant identifier of the account that received the transfer. */
  recipientMerchantId?: string;
  /** The merchant name of the account that received the transfer. */
  recipientMerchantName?: string;
  /** The account identifier for the account that received a transfer. */
  recipientAccountName?: string;
  /** The account identifier for the account that received a transfer. */
  recipientAccountId?: string;
  /**
   * A label on the GP API platform that further identifies the instance of the resource. This is
   * intended to be unique but GP API does not polic its uniqueness.
   */
  reference?: string;
  /** The description of the transfer */
  description?: string;
  provider?: Provider39;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const transfer1Properties: s.Shape<Transfer1> = {
  id: s.optional(s.string()),
  timeCreated: s.optional(s.dateTime()),
  status: s.optional(s.lazy(() => statusTransactionsTransfersStatusSchema)),
  amount: s.optional(s.string()),
  merchantId: s.optional(s.string()),
  merchantName: s.optional(s.string()),
  accountId: s.optional(s.string()),
  accountName: s.optional(s.string()),
  recipientMerchantId: s.optional(s.string()),
  recipientMerchantName: s.optional(s.string()),
  recipientAccountName: s.optional(s.string()),
  recipientAccountId: s.optional(s.string()),
  reference: s.optional(s.string()),
  description: s.optional(s.string()),
  provider: s.optional(s.lazy(() => provider39Schema)),
  _keysMap: {
    timeCreated: "time_created",
    merchantId: "merchant_id",
    merchantName: "merchant_name",
    accountId: "account_id",
    accountName: "account_name",
    recipientMerchantId: "recipient_merchant_id",
    recipientMerchantName: "recipient_merchant_name",
    recipientAccountName: "recipient_account_name",
    recipientAccountId: "recipient_account_id",
  },
};

export const transfer1InternalSchema: Schema<Transfer1> = s.object<Transfer1>(transfer1Properties, {
  additionalProperties: s.json(),
});

export const transfer1Schema: Schema<Transfer1> = s.lazySchema(() =>
  s.object<Transfer1>(
    {
      ...transfer1Properties,
      id: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      amount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      accountId: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      accountName: s.optional(s.string().check(s.maxLength(50))),
      recipientAccountName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      recipientAccountId: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      reference: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      description: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
