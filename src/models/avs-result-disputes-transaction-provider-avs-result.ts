import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** AVS result code from the card provider (issuer) . */
export const AvsResultDisputesTransactionProviderAvsResult = {
  Y: "Y",
  N: "N",
  Z: "Z",
  A: "A",
} as const;
export type AvsResultDisputesTransactionProviderAvsResult =
  | (typeof AvsResultDisputesTransactionProviderAvsResult)[keyof typeof AvsResultDisputesTransactionProviderAvsResult]
  | (string & {});

export const avsResultDisputesTransactionProviderAvsResultSchema: EnumSchema<AvsResultDisputesTransactionProviderAvsResult> =
  s.enumOf<AvsResultDisputesTransactionProviderAvsResult>(AvsResultDisputesTransactionProviderAvsResult);
