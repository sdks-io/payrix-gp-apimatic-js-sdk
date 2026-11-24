import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  digitalWallet2InternalSchema,
  digitalWallet2Schema,
  type DigitalWallet2,
} from "./digital-wallet2.js";

export type PaymentMethod13 = {
  digitalWallet?: DigitalWallet2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paymentMethod13Properties: s.Shape<PaymentMethod13> = {
  digitalWallet: s.optional(s.lazy(() => digitalWallet2InternalSchema)),
  _keysMap: {
    digitalWallet: "digital_wallet",
  },
};

export const paymentMethod13InternalSchema: Schema<PaymentMethod13> = s.object<PaymentMethod13>(
  paymentMethod13Properties,
  { additionalProperties: s.json() },
);

export const paymentMethod13Schema: Schema<PaymentMethod13> = s.lazySchema(() =>
  s.object<PaymentMethod13>(
    {
      ...paymentMethod13Properties,
      digitalWallet: s.optional(s.lazy(() => digitalWallet2Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
