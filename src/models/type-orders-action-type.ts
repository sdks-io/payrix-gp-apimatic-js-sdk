import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the specific action taken. */
export const TypeOrdersActionType = {
  OrderInitiated: "ORDER_INITIATED",
  OrderStatusNotification: "ORDER_STATUS_NOTIFICATION",
  OrderPrice: "ORDER_PRICE",
  OrderSingle: "ORDER_SINGLE",
  OrderList: "ORDER_LIST",
} as const;
export type TypeOrdersActionType =
  | (typeof TypeOrdersActionType)[keyof typeof TypeOrdersActionType]
  | (string & {});

export const typeOrdersActionTypeSchema: EnumSchema<TypeOrdersActionType> =
  s.enumOf<TypeOrdersActionType>(TypeOrdersActionType);
