import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BankAccount = {
  /** The name associated with the bank account. */
  name?: string;
  /** The international identifier code for the bank. */
  identifierCode?: string;
  /** The international identifier of the bank account. */
  iban?: string;
  /** The local identifier of the bank. */
  code?: string;
  /** The local identifier of the bank account. */
  accountNumber?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bankAccountSchema: Schema<BankAccount> = s.object<BankAccount>(
  {
    name: s.optional(s.string()),
    identifierCode: s.optional(s.string()),
    iban: s.optional(s.string()),
    code: s.optional(s.string()),
    accountNumber: s.optional(s.string()),
    _keysMap: {
      identifierCode: "identifier_code",
      accountNumber: "account_number",
    },
  },
  { additionalProperties: s.json() },
);
