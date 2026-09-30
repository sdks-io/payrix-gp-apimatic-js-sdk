import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const GroupName = {
  Piecpa: "PIECPA",
  Picnp: "PICNP",
  Pacpa: "PACPA",
  Incnp: "INCNP",
  Pikcpa: "PIKCPA",
  Iecnp: "IECNP",
  Acpa: "ACPA",
  Pacnp: "PACNP",
  Piecnp: "PIECNP",
  Ikcpa: "IKCPA",
  Acnp: "ACNP",
  Pincnp: "PINCNP",
  Iecpa: "IECPA",
  Icnp: "ICNP",
} as const;
export type GroupName = (typeof GroupName)[keyof typeof GroupName] | (string & {});

export const groupNameSchema: EnumSchema<GroupName> = s.enumOf<GroupName>(GroupName);
