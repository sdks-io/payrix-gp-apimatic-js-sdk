import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BinsCategory = {
  Classic: "classic",
  Business: "business",
  Corporate: "corporate",
  Fleet: "fleet",
  HsaFsa: "hsaFsa",
  Platinum: "platinum",
  Prepaid: "prepaid",
  CoreCard: "coreCard",
  Personal: "personal",
  Standard: "standard",
  Other: "other",
  International: "international",
} as const;
export type BinsCategory = (typeof BinsCategory)[keyof typeof BinsCategory] | (string & {});

export const binsCategorySchema: EnumSchema<BinsCategory> = s.enumOf<BinsCategory>(BinsCategory);
