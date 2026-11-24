import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the BIN ranges. Can be ACTIVE or INACTIVE. */
export const Status118 = {
  Active: "ACTIVE",
  Inactive: "INACTIVE",
} as const;
export type Status118 = (typeof Status118)[keyof typeof Status118] | (string & {});

export const status118Schema: EnumSchema<Status118> = s.enumOf<Status118>(Status118);
