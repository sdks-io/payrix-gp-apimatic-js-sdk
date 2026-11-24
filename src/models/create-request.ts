import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { addresses3InternalSchema, addresses3Schema, type Addresses3 } from "./addresses3.js";
import { ChannelConsentsChannel, channelConsentsChannelSchema } from "./channel-consents-channel.js";
import { fees5InternalSchema, fees5Schema, type Fees5 } from "./fees5.js";
import { order56InternalSchema, order56Schema, type Order56 } from "./order56.js";
import {
  paymentMethod11InternalSchema,
  paymentMethod11Schema,
  type PaymentMethod11,
} from "./payment-method11.js";
import { supportedPaymentMethodSchema, type SupportedPaymentMethod } from "./supported-payment-method.js";

export type CreateRequest = {
  /** A meaningful label that better identifies the GPAPI account. */
  accountName: string;
  /**
   * Describes whether the transaction was processed in a face to face(CP) scenario or a Customer
   * Not Present (CNP) scenario.
   *
   * @default ChannelConsentsChannel.Cnp
   */
  channel?: ChannelConsentsChannel;
  /** A four-digit number used to classify the merchant into an industry or market segment. */
  merchantCategoryCode?: string;
  /** Merchant defined field to reference this consent request. */
  reference: string;
  order?: Order56;
  addresses?: Addresses3[];
  fees?: Fees5[];
  paymentMethod: PaymentMethod11;
  /** Specifies the list of payment methods the merchant supports for the transaction */
  supportedPaymentMethods: SupportedPaymentMethod[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createRequestProperties: s.Shape<CreateRequest> = {
  accountName: s.string(),
  channel: s.defaulted(channelConsentsChannelSchema, ChannelConsentsChannel.Cnp),
  merchantCategoryCode: s.optional(s.string()),
  reference: s.string(),
  order: s.optional(s.lazy(() => order56InternalSchema)),
  addresses: s.optional(s.array(s.lazy(() => addresses3InternalSchema))),
  fees: s.optional(s.array(s.lazy(() => fees5InternalSchema))),
  paymentMethod: paymentMethod11InternalSchema,
  supportedPaymentMethods: s.array(s.lazy(() => supportedPaymentMethodSchema)),
  _keysMap: {
    accountName: "account_name",
    merchantCategoryCode: "merchant_category_code",
    paymentMethod: "payment_method",
    supportedPaymentMethods: "supported_payment_methods",
  },
};

export const createRequestInternalSchema: Schema<CreateRequest> = s.object<CreateRequest>(
  createRequestProperties,
  { additionalProperties: s.json() },
);

export const createRequestSchema: Schema<CreateRequest> = s.lazySchema(() =>
  s.object<CreateRequest>(
    {
      ...createRequestProperties,
      accountName: s.string().check(s.minLength(1), s.maxLength(50)),
      merchantCategoryCode: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      reference: s.string().check(s.minLength(8), s.maxLength(50)),
      order: s.optional(s.lazy(() => order56Schema)),
      addresses: s.optional(s.array(s.lazy(() => addresses3Schema))),
      fees: s.optional(s.array(s.lazy(() => fees5Schema))),
      paymentMethod: paymentMethod11Schema,
    },
    { additionalProperties: s.json() },
  ),
);
