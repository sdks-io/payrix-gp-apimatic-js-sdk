import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  digitalWallet3InternalSchema,
  digitalWallet3Schema,
  type DigitalWallet3,
} from "./digital-wallet3.js";

export type PaymentMethod14 = {
  digitalWallet?: DigitalWallet3;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paymentMethod14Properties: s.Shape<PaymentMethod14> = {
  digitalWallet: s.optional(s.lazy(() => digitalWallet3InternalSchema)),
  _keysMap: {
    digitalWallet: "digital_wallet",
  },
};

export const paymentMethod14InternalSchema: Schema<PaymentMethod14> = s.object<PaymentMethod14>(
  paymentMethod14Properties,
  { additionalProperties: s.json() },
);

export const paymentMethod14Schema: Schema<PaymentMethod14> = s.lazySchema(() =>
  s.object<PaymentMethod14>(
    {
      ...paymentMethod14Properties,
      digitalWallet: s.optional(s.lazy(() => digitalWallet3Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
