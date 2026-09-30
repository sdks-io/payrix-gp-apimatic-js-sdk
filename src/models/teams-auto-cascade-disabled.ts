import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TeamsAutoCascadeDisabled = {
  _0: 0,
  _1: 1,
} as const;
export type TeamsAutoCascadeDisabled =
  | (typeof TeamsAutoCascadeDisabled)[keyof typeof TeamsAutoCascadeDisabled]
  | (number & {});

export const teamsAutoCascadeDisabledSchema: EnumSchema<TeamsAutoCascadeDisabled> =
  s.enumOf<TeamsAutoCascadeDisabled>(TeamsAutoCascadeDisabled);
