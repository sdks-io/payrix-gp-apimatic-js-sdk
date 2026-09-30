import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EmbededFinancePlatform = {
  Parafin: "PARAFIN",
  Atelio: "ATELIO",
} as const;
export type EmbededFinancePlatform =
  | (typeof EmbededFinancePlatform)[keyof typeof EmbededFinancePlatform]
  | (string & {});

export const embededFinancePlatformSchema: EnumSchema<EmbededFinancePlatform> =
  s.enumOf<EmbededFinancePlatform>(EmbededFinancePlatform);
