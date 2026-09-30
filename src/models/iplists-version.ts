import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const IplistsVersion = {
  _4: 4,
  _6: 6,
} as const;
export type IplistsVersion = (typeof IplistsVersion)[keyof typeof IplistsVersion] | (number & {});

export const iplistsVersionSchema: EnumSchema<IplistsVersion> = s.enumOf<IplistsVersion>(IplistsVersion);
