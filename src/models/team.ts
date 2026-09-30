import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { aggregationsResponseSchema, type AggregationsResponse } from "./aggregations-response.js";
import { alertsResponseSchema, type AlertsResponse } from "./alerts-response.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import { login2Schema, type Login2 } from "./login2.js";
import { loginsResponseSchema, type LoginsResponse } from "./logins-response.js";
import { orgFlowsResponseSchema, type OrgFlowsResponse } from "./org-flows-response.js";
import {
  teamsAutoCascadeDisabled1Schema,
  type TeamsAutoCascadeDisabled1,
} from "./teams-auto-cascade-disabled1.js";
import { teamsAutoCascadeOwner1Schema, type TeamsAutoCascadeOwner1 } from "./teams-auto-cascade-owner1.js";

export type Team = {
  /** The ID of this resource. */
  id?: string;
  /**
   * The date and time at which this resource was created. The format should be YYYY-MM-DD
   * HH:MM:SS.SSSS
   */
  created?: string;
  /**
   * The date and time at which this resource was modified. The format should be YYYY-MM-DD
   * HH:MM:SS.SSSS
   */
  modified?: string;
  creator?: Creator18;
  /** The identifier of the Login that last modified this resource. */
  modifier?: string;
  login?: Login2;
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
  aggregations?: AggregationsResponse[];
  alerts?: AlertsResponse[];
  teamLogins?: LoginsResponse[];
  orgFlows?: OrgFlowsResponse[];
};

export const teamSchema: Schema<Team> = s.object<Team>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  login: s.optional(s.lazy(() => login2Schema)),
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  autoCascadeDisabled: s.optional(s.lazy(() => teamsAutoCascadeDisabled1Schema)),
  autoCascadeOwner: s.optional(s.lazy(() => teamsAutoCascadeOwner1Schema)),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
  aggregations: s.optional(s.array(s.lazy(() => aggregationsResponseSchema))),
  alerts: s.optional(s.array(s.lazy(() => alertsResponseSchema))),
  teamLogins: s.optional(s.array(s.lazy(() => loginsResponseSchema))),
  orgFlows: s.optional(s.array(s.lazy(() => orgFlowsResponseSchema))),
});
