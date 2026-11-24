import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  avsResultDisputesTransactionProviderAvsResultSchema,
  type AvsResultDisputesTransactionProviderAvsResult,
} from "./avs-result-disputes-transaction-provider-avs-result.js";

export type Provider = {
  /** AVS result code from the card provider (issuer) . */
  avsResult?: AvsResultDisputesTransactionProviderAvsResult;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const providerSchema: Schema<Provider> = s.object<Provider>(
  {
    avsResult: s.optional(s.lazy(() => avsResultDisputesTransactionProviderAvsResultSchema)),
    _keysMap: {
      avsResult: "avs_result",
    },
  },
  { additionalProperties: s.json() },
);
