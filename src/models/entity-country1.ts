import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The country in the address associated with the Entity, currently accepting values including `USA`
 * and `CAN`.
 */
export const EntityCountry1 = {
  Usa: "USA",
  Can: "CAN",
} as const;
export type EntityCountry1 = (typeof EntityCountry1)[keyof typeof EntityCountry1] | (string & {});

export const entityCountry1Schema: EnumSchema<EntityCountry1> = s.enumOf<EntityCountry1>(EntityCountry1);
