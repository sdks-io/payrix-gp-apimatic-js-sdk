import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  fundingModeLinksInstallmentFundingModeSchema,
  type FundingModeLinksInstallmentFundingMode,
} from "./funding-mode-links-installment-funding-mode.js";
import { terms5InternalSchema, terms5Schema, type Terms5 } from "./terms5.js";

export type Installment5 = {
  /**
   * Indicates the funding mode of the Installment plan. Availablity of each funding mode is based
   * on your live configuration
   * * MERCHANT_FUNDED - This will return merchant funded plans only
   * * CONSUMER_FUNDED - This will return consumer funded plans only
   * * HYBRID_FUNDED - This will return both merchant and consumer funded plans
   * * BILATERAL - This will return BILATERAL plans only
   * * ANY - This will return all available plans
   */
  fundingMode?: FundingModeLinksInstallmentFundingMode;
  terms?: Terms5;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const installment5Properties: s.Shape<Installment5> = {
  fundingMode: s.optional(s.lazy(() => fundingModeLinksInstallmentFundingModeSchema)),
  terms: s.optional(s.lazy(() => terms5InternalSchema)),
  _keysMap: {
    fundingMode: "funding_mode",
  },
};

export const installment5InternalSchema: Schema<Installment5> = s.object<Installment5>(
  installment5Properties,
  { additionalProperties: s.json() },
);

export const installment5Schema: Schema<Installment5> = s.lazySchema(() =>
  s.object<Installment5>(
    {
      ...installment5Properties,
      terms: s.optional(s.lazy(() => terms5Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
