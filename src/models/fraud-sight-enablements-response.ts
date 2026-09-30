import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { groupName1Schema, type GroupName1 } from "./group-name1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";

export type FraudSightEnablementsResponse = {
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
  /** The identifier of the Entity that is enabled for fraudSight. */
  entity?: string;
  /** The identifier of the Org (group) that fraudSightEnablements is associated to. */
  org?: string;
  groupName?: GroupName1;
  /** The description of the Group Name. */
  description?: string;
  /**
   * The Date and time when an entity was enabled for fraudSight.\nThe date is specified as an eight
   * digit string in YYYY-MM-DD hh:mm:ss format, for example, '2023-06-01 01:00:00' for June 01,
   * 2023. 1:00 am.
   */
  enablementDate?: string;
  /**
   * The date and time at which this resource was deleted.\nThe date is specified as an eight digit
   * string in YYYY-MM-DD hh:mm:ss format, for example, '2023-06-01 01:00:00' for June 01, 2023.
   * 1:00 am.
   */
  deleted?: string;
  /** The id of user who deleted the fraudSightEnablements. */
  deleter?: string;
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const fraudSightEnablementsResponseSchema: Schema<FraudSightEnablementsResponse> =
  s.object<FraudSightEnablementsResponse>({
    id: s.optional(s.string()),
    created: s.optional(s.string()),
    modified: s.optional(s.string()),
    creator: s.optional(s.lazy(() => creator18Schema)),
    modifier: s.optional(s.string()),
    entity: s.optional(s.string()),
    org: s.optional(s.string()),
    groupName: s.optional(s.lazy(() => groupName1Schema)),
    description: s.optional(s.string()),
    enablementDate: s.optional(s.string()),
    deleted: s.optional(s.string()),
    deleter: s.optional(s.string()),
    inactive: s.optional(s.lazy(() => inactive1Schema)),
    frozen: s.optional(s.lazy(() => frozen1Schema)),
  });
