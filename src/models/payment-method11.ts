import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  digitalWallet8InternalSchema,
  digitalWallet8Schema,
  type DigitalWallet8,
} from "./digital-wallet8.js";

export type PaymentMethod11 = {
  digitalWallet?: DigitalWallet8;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paymentMethod11Properties: s.Shape<PaymentMethod11> = {
  digitalWallet: s.optional(s.lazy(() => digitalWallet8InternalSchema)),
  _keysMap: {
    digitalWallet: "digital_wallet",
  },
};

export const paymentMethod11InternalSchema: Schema<PaymentMethod11> = s.object<PaymentMethod11>(
  paymentMethod11Properties,
  { additionalProperties: s.json() },
);

export const paymentMethod11Schema: Schema<PaymentMethod11> = s.lazySchema(() =>
  s.object<PaymentMethod11>(
    {
      ...paymentMethod11Properties,
      digitalWallet: s.optional(s.lazy(() => digitalWallet8Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
