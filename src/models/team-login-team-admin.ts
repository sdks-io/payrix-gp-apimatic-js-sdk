import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TeamLoginTeamAdmin = {
  _0: 0,
  _1: 1,
} as const;
export type TeamLoginTeamAdmin = (typeof TeamLoginTeamAdmin)[keyof typeof TeamLoginTeamAdmin] | (number & {});

export const teamLoginTeamAdminSchema: EnumSchema<TeamLoginTeamAdmin> =
  s.enumOf<TeamLoginTeamAdmin>(TeamLoginTeamAdmin);
