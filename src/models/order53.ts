import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Order53 = {
  Asc: "ASC",
  Desc: "DESC",
} as const;
export type Order53 = (typeof Order53)[keyof typeof Order53] | (string & {});

export const order53Schema: EnumSchema<Order53> = s.enumOf<Order53>(Order53);
