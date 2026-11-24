import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  paymentMethodProgramCodeSchema,
  type PaymentMethodProgramCode,
} from "./payment-method-program-code.js";
import { type91Schema, type Type91 } from "./type91.js";

export type LodgingChargeItem = {
  /** Describes the types of charges associated with a transaction. */
  types?: Type91[];
  /**
   * The amount of the individual charge item. Note an amount cannot be associated with a NO_SHOW
   * charge type.
   */
  amount?: string;
  /**
   * Describes the payment method programs, typically run by card brands such as Visa, Mastercard
   * and American Express.
   */
  paymentMethodProgramCodes?: PaymentMethodProgramCode[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const lodgingChargeItemProperties: s.Shape<LodgingChargeItem> = {
  types: s.optional(s.array(s.lazy(() => type91Schema))),
  amount: s.optional(s.string()),
  paymentMethodProgramCodes: s.optional(s.array(s.lazy(() => paymentMethodProgramCodeSchema))),
  _keysMap: {
    paymentMethodProgramCodes: "payment_method_program_codes",
  },
};

export const lodgingChargeItemInternalSchema: Schema<LodgingChargeItem> = s.object<LodgingChargeItem>(
  lodgingChargeItemProperties,
  { additionalProperties: s.json() },
);

export const lodgingChargeItemSchema: Schema<LodgingChargeItem> = s.lazySchema(() =>
  s.object<LodgingChargeItem>(
    {
      ...lodgingChargeItemProperties,
      amount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
