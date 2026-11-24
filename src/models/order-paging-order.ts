import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The direction of the ordering of the entire list, ASC or DESC */
export const OrderPagingOrder = {
  Asc: "ASC",
  Desc: "DESC",
} as const;
export type OrderPagingOrder = (typeof OrderPagingOrder)[keyof typeof OrderPagingOrder] | (string & {});

export const orderPagingOrderSchema: EnumSchema<OrderPagingOrder> =
  s.enumOf<OrderPagingOrder>(OrderPagingOrder);
