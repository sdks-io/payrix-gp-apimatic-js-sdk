import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const VerificationsGenerated = {
  _0: 0,
  _1: 1,
} as const;
export type VerificationsGenerated =
  | (typeof VerificationsGenerated)[keyof typeof VerificationsGenerated]
  | (number & {});

export const verificationsGeneratedSchema: EnumSchema<VerificationsGenerated> =
  s.enumOf<VerificationsGenerated>(VerificationsGenerated);
