import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  cardTypeLinksOrderTransactionConfigurationSurchargeCardTypeSchema,
  type CardTypeLinksOrderTransactionConfigurationSurchargeCardType,
} from "./card-type-links-order-transaction-configuration-surcharge-card-type.js";

export type Surcharge = {
  /**
   * This indicates whether the surcharge is for a DEBIT, CREDIT or COMMERCIAL card type by the
   * merchant
   */
  cardType?: CardTypeLinksOrderTransactionConfigurationSurchargeCardType;
  /**
   * The amount that reflects the additional charge the merchant applied to the transaction for
   * using a specific payment method.
   */
  amount?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const surchargeProperties: s.Shape<Surcharge> = {
  cardType: s.optional(s.lazy(() => cardTypeLinksOrderTransactionConfigurationSurchargeCardTypeSchema)),
  amount: s.optional(s.string()),
  _keysMap: {
    cardType: "card_type",
  },
};

export const surchargeInternalSchema: Schema<Surcharge> = s.object<Surcharge>(surchargeProperties, {
  additionalProperties: s.json(),
});

export const surchargeSchema: Schema<Surcharge> = s.lazySchema(() =>
  s.object<Surcharge>(
    {
      ...surchargeProperties,
      amount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
