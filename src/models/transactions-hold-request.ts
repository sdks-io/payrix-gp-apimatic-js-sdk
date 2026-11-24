import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  reasonCodeTransactionsReasonCodeSchema,
  type ReasonCodeTransactionsReasonCode,
} from "./reason-code-transactions-reason-code.js";

export type TransactionsHoldRequest = {
  /**
   * A code indicating the reason for the latest action against the transaction. This can relate to
   * reasons for fraud related actions such as holding or releasing a transaction. It can also
   * relate to the reason a transaction is disputed.
   */
  reasonCode?: ReasonCodeTransactionsReasonCode;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const transactionsHoldRequestSchema: Schema<TransactionsHoldRequest> =
  s.object<TransactionsHoldRequest>(
    {
      reasonCode: s.optional(s.lazy(() => reasonCodeTransactionsReasonCodeSchema)),
      _keysMap: {
        reasonCode: "reason_code",
      },
    },
    { additionalProperties: s.json() },
  );
