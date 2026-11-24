import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The order in which the results are returned. */
export const Order19 = {
  Asc: "ASC",
  Desc: "DESC",
} as const;
export type Order19 = (typeof Order19)[keyof typeof Order19] | (string & {});

export const order19Schema: EnumSchema<Order19> = s.enumOf<Order19>(Order19);
