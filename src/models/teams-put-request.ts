import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import {
  teamsAutoCascadeDisabled1Schema,
  type TeamsAutoCascadeDisabled1,
} from "./teams-auto-cascade-disabled1.js";
import { teamsAutoCascadeOwner1Schema, type TeamsAutoCascadeOwner1 } from "./teams-auto-cascade-owner1.js";

export type TeamsPutRequest = {
  /** The Login that owns this Team. */
  login?: string;
  /**
   * The name of this Team. This field is stored as a text string and must be between 0 and 100
   * characters long.
   */
  name?: string;
  /**
   * A description of this Team. This field is stored as a text string and must be between 0 and 500
   * characters long.
   */
  description?: string;
  autoCascadeDisabled?: TeamsAutoCascadeDisabled1;
  autoCascadeOwner?: TeamsAutoCascadeOwner1;
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const teamsPutRequestSchema: Schema<TeamsPutRequest> = s.object<TeamsPutRequest>({
  login: s.optional(s.string()),
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  autoCascadeDisabled: s.optional(s.lazy(() => teamsAutoCascadeDisabled1Schema)),
  autoCascadeOwner: s.optional(s.lazy(() => teamsAutoCascadeOwner1Schema)),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
});
