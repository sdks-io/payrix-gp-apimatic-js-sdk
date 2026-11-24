import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  storageModeTransactionsPayerStorageModeSchema,
  type StorageModeTransactionsPayerStorageMode,
} from "./storage-mode-transactions-payer-storage-mode.js";

export type Payer6 = {
  /** Unique identifier for the Payer on the platform. */
  id?: string;
  /** The first name of the Payer */
  firstName?: string;
  /** The last name of the Payer */
  lastName?: string;
  /** An integrator's reference to the payer. */
  reference?: string;
  /** Indicates whether to store the payer as part of a transaction. */
  storageMode?: StorageModeTransactionsPayerStorageMode;
  /** The email address of the payer. */
  email?: string;
  /**
   * The preferred language of the payer. In the format ISO-639-1 (alpha-2) or ISO-639-1
   * (alpha-2)_ISO-3166(alpha-2)
   */
  language?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const payer6Properties: s.Shape<Payer6> = {
  id: s.optional(s.string()),
  firstName: s.optional(s.string()),
  lastName: s.optional(s.string()),
  reference: s.optional(s.string()),
  storageMode: s.optional(s.lazy(() => storageModeTransactionsPayerStorageModeSchema)),
  email: s.optional(s.string()),
  language: s.optional(s.string()),
  _keysMap: {
    firstName: "first_name",
    lastName: "last_name",
    storageMode: "storage_mode",
  },
};

export const payer6InternalSchema: Schema<Payer6> = s.object<Payer6>(payer6Properties, {
  additionalProperties: s.json(),
});

export const payer6Schema: Schema<Payer6> = s.lazySchema(() =>
  s.object<Payer6>(
    {
      ...payer6Properties,
      id: s.optional(s.string().check(s.maxLength(50))),
      firstName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      lastName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      reference: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      email: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
