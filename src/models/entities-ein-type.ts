import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EntitiesEinType = {
  Ssn: "ssn",
  Tin: "tin",
  Other: "other",
} as const;
export type EntitiesEinType = (typeof EntitiesEinType)[keyof typeof EntitiesEinType] | (string & {});

export const entitiesEinTypeSchema: EnumSchema<EntitiesEinType> = s.enumOf<EntitiesEinType>(EntitiesEinType);
