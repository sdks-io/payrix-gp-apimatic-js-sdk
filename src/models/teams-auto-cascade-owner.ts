import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TeamsAutoCascadeOwner = {
  _0: 0,
  _1: 1,
} as const;
export type TeamsAutoCascadeOwner =
  | (typeof TeamsAutoCascadeOwner)[keyof typeof TeamsAutoCascadeOwner]
  | (number & {});

export const teamsAutoCascadeOwnerSchema: EnumSchema<TeamsAutoCascadeOwner> =
  s.enumOf<TeamsAutoCascadeOwner>(TeamsAutoCascadeOwner);
