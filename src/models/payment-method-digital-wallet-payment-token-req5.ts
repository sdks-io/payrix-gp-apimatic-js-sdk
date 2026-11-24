import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  dataTypeIndicatorTransactionsPaymentMethodDigitalWalletPaymentTokenDataTypeIndicatorSchema,
  type DataTypeIndicatorTransactionsPaymentMethodDigitalWalletPaymentTokenDataTypeIndicator,
} from "./data-type-indicator-transactions-payment-method-digital-wallet-payment-token-data-type-indicator.js";

export type PaymentMethodDigitalWalletPaymentTokenReq5 = {
  /** Digital Wallet provider defined data */
  data?: string;
  /**
   * Data Processing Agreement (DPA) Identifier provided during onboarding. Registered identifier
   * for the DPA accessing the service.
   */
  dpaReference: string;
  /**
   * Identifies the type of encrypted payload to be returned. Possible values are:
   * * FULL - Includes everything: all PCI & PII data (card/token, billing, shipping, consumer);
   *   supported by Mastercard, Visa, Amex
   * * PAYMENT - Same as FULL; supported by Mastercard, Visa, Amex
   * * NON_PAYMENT - Includes only PII data (billing, shipping, consumer); supported by Mastercard,
   *   Visa
   * * NONE - Returns empty payload; supported by Mastercard, Visa
   */
  dataTypeIndicator?: DataTypeIndicatorTransactionsPaymentMethodDigitalWalletPaymentTokenDataTypeIndicator;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paymentMethodDigitalWalletPaymentTokenReq5Properties: s.Shape<PaymentMethodDigitalWalletPaymentTokenReq5> =
  {
    data: s.optional(s.string()),
    dpaReference: s.string(),
    dataTypeIndicator: s.optional(
      s.lazy(() =>
        dataTypeIndicatorTransactionsPaymentMethodDigitalWalletPaymentTokenDataTypeIndicatorSchema,
      ),
    ),
    _keysMap: {
      dpaReference: "dpa_reference",
      dataTypeIndicator: "data_type_indicator",
    },
  };

export const paymentMethodDigitalWalletPaymentTokenReq5InternalSchema: Schema<PaymentMethodDigitalWalletPaymentTokenReq5> =
  s.object<PaymentMethodDigitalWalletPaymentTokenReq5>(paymentMethodDigitalWalletPaymentTokenReq5Properties, {
    additionalProperties: s.json(),
  });

export const paymentMethodDigitalWalletPaymentTokenReq5Schema: Schema<PaymentMethodDigitalWalletPaymentTokenReq5> =
  s.lazySchema(() =>
    s.object<PaymentMethodDigitalWalletPaymentTokenReq5>(
      {
        ...paymentMethodDigitalWalletPaymentTokenReq5Properties,
        data: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
        dpaReference: s.string().check(s.minLength(1), s.maxLength(50)),
      },
      { additionalProperties: s.json() },
    ),
  );
