import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { action17InternalSchema, action17Schema, type Action17 } from "./action17.js";
import { filter3InternalSchema, filter3Schema, type Filter3 } from "./filter3.js";
import { transactionInternalSchema, transactionSchema, type Transaction } from "./transaction.js";

export type TransactionBatchResponse2 = {
  /**
   * The total number of records across all pages for the search filter. When searching for a
   * collection of resoures, this is returned on the first page only and when the date range is a
   * month or less.
   */
  totalRecordCount?: number;
  /** The number of transactions in the batch. */
  batchTransactionCount?: number;
  /**
   * A unique identifier that is used to identify and reference an instance of this resource. This
   * id is used when actioning or referencing a specific merchant. Begins with the three letters,
   * MER.
   */
  merchantId?: string;
  /** A meaningful label that better identifies the merchant. */
  merchantName?: string;
  /**
   * A unique identifier that is used to identify and reference an instance of this resource. This
   * id is used when actioning or referencing a specific account. Begins with the three letters,
   * TRA.
   */
  accountId?: string;
  /** A meaningful label that better identifies the account. */
  accountName?: string;
  /** A reference for the location that created the batch. */
  siteReference?: string;
  /** A reference for the device that created the batch */
  deviceReference?: string;
  filter?: Filter3;
  transactions?: Transaction[];
  action?: Action17;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const transactionBatchResponse2Properties: s.Shape<TransactionBatchResponse2> = {
  totalRecordCount: s.optional(s.float64()),
  batchTransactionCount: s.optional(s.float64()),
  merchantId: s.optional(s.string()),
  merchantName: s.optional(s.string()),
  accountId: s.optional(s.string()),
  accountName: s.optional(s.string()),
  siteReference: s.optional(s.string()),
  deviceReference: s.optional(s.string()),
  filter: s.optional(s.lazy(() => filter3InternalSchema)),
  transactions: s.optional(s.array(s.lazy(() => transactionInternalSchema))),
  action: s.optional(s.lazy(() => action17InternalSchema)),
  _keysMap: {
    totalRecordCount: "total_record_count",
    batchTransactionCount: "batch_transaction_count",
    merchantId: "merchant_id",
    merchantName: "merchant_name",
    accountId: "account_id",
    accountName: "account_name",
    siteReference: "site_reference",
    deviceReference: "device_reference",
  },
};

export const transactionBatchResponse2InternalSchema: Schema<TransactionBatchResponse2> =
  s.object<TransactionBatchResponse2>(transactionBatchResponse2Properties, {
    additionalProperties: s.json(),
  });

export const transactionBatchResponse2Schema: Schema<TransactionBatchResponse2> = s.lazySchema(() =>
  s.object<TransactionBatchResponse2>(
    {
      ...transactionBatchResponse2Properties,
      merchantId: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      merchantName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      accountId: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      accountName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      siteReference: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      deviceReference: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      filter: s.optional(s.lazy(() => filter3Schema)),
      transactions: s.optional(s.array(s.lazy(() => transactionSchema))),
      action: s.optional(s.lazy(() => action17Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
