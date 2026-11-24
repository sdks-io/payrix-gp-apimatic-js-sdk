import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The value used to order the results. */
export const OrderBy2 = {
  TimeCreated: "TIME_CREATED",
  Id: "ID",
} as const;
export type OrderBy2 = (typeof OrderBy2)[keyof typeof OrderBy2] | (string & {});

export const orderBy2Schema: EnumSchema<OrderBy2> = s.enumOf<OrderBy2>(OrderBy2);
