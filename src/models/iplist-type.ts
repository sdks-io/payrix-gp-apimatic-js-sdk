import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const IplistType = {
  _0: 0,
  _1: 1,
} as const;
export type IplistType = (typeof IplistType)[keyof typeof IplistType] | (number & {});

export const iplistTypeSchema: EnumSchema<IplistType> = s.enumOf<IplistType>(IplistType);
