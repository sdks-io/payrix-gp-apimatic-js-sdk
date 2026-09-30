import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PaymentNumberUpdatedModel = {
  _0: 0,
  _1: 1,
} as const;
export type PaymentNumberUpdatedModel =
  | (typeof PaymentNumberUpdatedModel)[keyof typeof PaymentNumberUpdatedModel]
  | (number & {});

export const paymentNumberUpdatedModelSchema: EnumSchema<PaymentNumberUpdatedModel> =
  s.enumOf<PaymentNumberUpdatedModel>(PaymentNumberUpdatedModel);
