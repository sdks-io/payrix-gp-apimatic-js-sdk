import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { addressInternalSchema, addressSchema, type Address } from "./address.js";
import { ChannelConsentsChannel, channelConsentsChannelSchema } from "./channel-consents-channel.js";
import { feeInternalSchema, feeSchema, type Fee } from "./fee.js";
import { order6InternalSchema, order6Schema, type Order6 } from "./order6.js";
import {
  paymentMethod11InternalSchema,
  paymentMethod11Schema,
  type PaymentMethod11,
} from "./payment-method11.js";
import { supportedPaymentMethodSchema, type SupportedPaymentMethod } from "./supported-payment-method.js";

export type CreateRequest2 = {
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
  order?: Order6;
  addresses?: Address[];
  fees?: Fee[];
  paymentMethod: PaymentMethod11;
  /** Specifies the list of payment methods the merchant supports for the transaction */
  supportedPaymentMethods: SupportedPaymentMethod[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createRequest2Properties: s.Shape<CreateRequest2> = {
  accountName: s.string(),
  channel: s.defaulted(channelConsentsChannelSchema, ChannelConsentsChannel.Cnp),
  merchantCategoryCode: s.optional(s.string()),
  reference: s.string(),
  order: s.optional(s.lazy(() => order6InternalSchema)),
  addresses: s.optional(s.array(s.lazy(() => addressInternalSchema))),
  fees: s.optional(s.array(s.lazy(() => feeInternalSchema))),
  paymentMethod: paymentMethod11InternalSchema,
  supportedPaymentMethods: s.array(s.lazy(() => supportedPaymentMethodSchema)),
  _keysMap: {
    accountName: "account_name",
    merchantCategoryCode: "merchant_category_code",
    paymentMethod: "payment_method",
    supportedPaymentMethods: "supported_payment_methods",
  },
};

export const createRequest2InternalSchema: Schema<CreateRequest2> = s.object<CreateRequest2>(
  createRequest2Properties,
  { additionalProperties: s.json() },
);

export const createRequest2Schema: Schema<CreateRequest2> = s.lazySchema(() =>
  s.object<CreateRequest2>(
    {
      ...createRequest2Properties,
      accountName: s.string().check(s.minLength(1), s.maxLength(50)),
      merchantCategoryCode: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      reference: s.string().check(s.minLength(8), s.maxLength(50)),
      order: s.optional(s.lazy(() => order6Schema)),
      addresses: s.optional(s.array(s.lazy(() => addressSchema))),
      fees: s.optional(s.array(s.lazy(() => feeSchema))),
      paymentMethod: paymentMethod11Schema,
    },
    { additionalProperties: s.json() },
  ),
);
