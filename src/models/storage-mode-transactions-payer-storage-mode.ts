import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates whether to store the payer as part of a transaction. */
export const StorageModeTransactionsPayerStorageMode = {
  OnSuccess: "ON_SUCCESS",
  Always: "ALWAYS",
} as const;
export type StorageModeTransactionsPayerStorageMode =
  | (typeof StorageModeTransactionsPayerStorageMode)[keyof typeof StorageModeTransactionsPayerStorageMode]
  | (string & {});

export const storageModeTransactionsPayerStorageModeSchema: EnumSchema<StorageModeTransactionsPayerStorageMode> =
  s.enumOf<StorageModeTransactionsPayerStorageMode>(StorageModeTransactionsPayerStorageMode);
