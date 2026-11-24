import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  digitalWallet1InternalSchema,
  digitalWallet1Schema,
  type DigitalWallet1,
} from "./digital-wallet1.js";

export type PaymentMethod12 = {
  digitalWallet?: DigitalWallet1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paymentMethod12Properties: s.Shape<PaymentMethod12> = {
  digitalWallet: s.optional(s.lazy(() => digitalWallet1InternalSchema)),
  _keysMap: {
    digitalWallet: "digital_wallet",
  },
};

export const paymentMethod12InternalSchema: Schema<PaymentMethod12> = s.object<PaymentMethod12>(
  paymentMethod12Properties,
  { additionalProperties: s.json() },
);

export const paymentMethod12Schema: Schema<PaymentMethod12> = s.lazySchema(() =>
  s.object<PaymentMethod12>(
    {
      ...paymentMethod12Properties,
      digitalWallet: s.optional(s.lazy(() => digitalWallet1Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
