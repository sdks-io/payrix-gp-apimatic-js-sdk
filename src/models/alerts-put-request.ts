import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";

export type AlertsPutRequest = {
  /** The Login that owns this resource. */
  login?: string;
  /**
   * The identifier of the Login that this Alert relates to. The Alert is triggered based on the
   * activity of this Login.
   */
  forlogin?: string;
  /**
   * The identifier (ID) of the team that this Alert relates to. The Alert is triggered based on the
   * activity of this Team.
   */
  team?: string;
  /** The division for which this Alerts applies. */
  division?: string;
  /** The partition for which this Alerts applies. */
  partition?: string;
  /**
   * The name of this Alert. This field is stored as a text string and must be between 1 and 100
   * characters long.
   */
  name?: string;
  /** Description of Alerts. */
  description?: string;
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const alertsPutRequestSchema: Schema<AlertsPutRequest> = s.object<AlertsPutRequest>({
  login: s.optional(s.string()),
  forlogin: s.optional(s.string()),
  team: s.optional(s.string()),
  division: s.optional(s.string()),
  partition: s.optional(s.string()),
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
});
