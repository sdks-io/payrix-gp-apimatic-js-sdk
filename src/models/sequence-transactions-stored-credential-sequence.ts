import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates the order of this transaction in the sequence of a planned, repeating transaction
 * processing model.
 */
export const SequenceTransactionsStoredCredentialSequence = {
  First: "FIRST",
  Subsequent: "SUBSEQUENT",
  Last: "LAST",
} as const;
export type SequenceTransactionsStoredCredentialSequence =
  | (typeof SequenceTransactionsStoredCredentialSequence)[keyof typeof SequenceTransactionsStoredCredentialSequence]
  | (string & {});

export const sequenceTransactionsStoredCredentialSequenceSchema: EnumSchema<SequenceTransactionsStoredCredentialSequence> =
  s.enumOf<SequenceTransactionsStoredCredentialSequence>(SequenceTransactionsStoredCredentialSequence);
