import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** This indicates an issue with the API request. */
export const ErrorCode6 = {
  DuplicateTransaction: "DUPLICATE_TRANSACTION",
  InvalidBatchAction: "INVALID_BATCH_ACTION",
  InvalidRequestData: "INVALID_REQUEST_DATA",
  InvalidTransactionAction: "INVALID_TRANSACTION_ACTION",
  MandatoryDataMissing: "MANDATORY_DATA_MISSING",
  TransactionNotFound: "TRANSACTION_NOT_FOUND",
} as const;
export type ErrorCode6 = (typeof ErrorCode6)[keyof typeof ErrorCode6] | (string & {});

export const errorCode6Schema: EnumSchema<ErrorCode6> = s.enumOf<ErrorCode6>(ErrorCode6);
