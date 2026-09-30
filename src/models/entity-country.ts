import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EntityCountry = {
  Usa: "USA",
  Can: "CAN",
} as const;
export type EntityCountry = (typeof EntityCountry)[keyof typeof EntityCountry] | (string & {});

export const entityCountrySchema: EnumSchema<EntityCountry> = s.enumOf<EntityCountry>(EntityCountry);
