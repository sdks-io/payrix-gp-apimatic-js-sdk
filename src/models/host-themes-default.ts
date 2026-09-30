import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const HostThemesDefault = {
  _0: 0,
  _1: 1,
} as const;
export type HostThemesDefault = (typeof HostThemesDefault)[keyof typeof HostThemesDefault] | (number & {});

export const hostThemesDefaultSchema: EnumSchema<HostThemesDefault> =
  s.enumOf<HostThemesDefault>(HostThemesDefault);
