import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MccType = {
  Blacklist: "blacklist",
  Whitelist: "whitelist",
} as const;
export type MccType = (typeof MccType)[keyof typeof MccType] | (string & {});

export const mccTypeSchema: EnumSchema<MccType> = s.enumOf<MccType>(MccType);
