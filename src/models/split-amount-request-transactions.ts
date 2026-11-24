import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { transferInternalSchema, transferSchema, type Transfer } from "./transfer.js";

export type SplitAmountRequestTransactions = {
  transfers?: Transfer[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const splitAmountRequestTransactionsProperties: s.Shape<SplitAmountRequestTransactions> = {
  transfers: s.optional(s.array(s.lazy(() => transferInternalSchema))),
};

export const splitAmountRequestTransactionsInternalSchema: Schema<SplitAmountRequestTransactions> =
  s.object<SplitAmountRequestTransactions>(splitAmountRequestTransactionsProperties, {
    additionalProperties: s.json(),
  });

export const splitAmountRequestTransactionsSchema: Schema<SplitAmountRequestTransactions> = s.lazySchema(() =>
  s.object<SplitAmountRequestTransactions>(
    {
      ...splitAmountRequestTransactionsProperties,
      transfers: s.optional(s.array(s.lazy(() => transferSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
