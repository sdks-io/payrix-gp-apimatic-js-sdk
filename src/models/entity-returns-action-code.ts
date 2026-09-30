import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EntityReturnsActionCode = {
  Unknown: "unknown",
  Nsf: "nsf",
  BadAccount: "badAccount",
  Unauthorized: "unauthorized",
} as const;
export type EntityReturnsActionCode =
  | (typeof EntityReturnsActionCode)[keyof typeof EntityReturnsActionCode]
  | (string & {});

export const entityReturnsActionCodeSchema: EnumSchema<EntityReturnsActionCode> =
  s.enumOf<EntityReturnsActionCode>(EntityReturnsActionCode);
