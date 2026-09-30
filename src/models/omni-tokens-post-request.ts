import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import { platformModel1Schema, type PlatformModel1 } from "./platform-model1.js";

export type OmniTokensPostRequest = {
  /**
   * The Date and time when an entity was enabled for omniTokens.\nThe date is specified as an eight
   * digit string in YYYY-MM-DD hh:mm:ss format, for example, '2023-06-01 01:00:00' for June 01,
   * 2023. 1:00 am.
   */
  enablementDate?: string;
  /** The identifier of the Org (group) that omniTokens is associated to. */
  org?: string;
  /** The identifier of the Division that omniTokens is associated to. */
  division?: string;
  /** The identifier of the Partition that omniTokens is associated to. */
  partition?: string;
  /** The identifier of the Entity that this omniTokens is associated to. */
  entity?: string;
  platform?: PlatformModel1;
  inactive?: Inactive1;
  frozen?: Frozen1;
  /**
   * The date and time at which this resource was deleted.\nThe date is specified as an eight digit
   * string in YYYY-MM-DD hh:mm:ss format, for example, '2023-06-01 01:00:00' for June 01, 2023.
   * 1:00 am.
   */
  deleted?: string;
  /** The id of user who deleted the omniToken. */
  deleter?: string;
};

export const omniTokensPostRequestSchema: Schema<OmniTokensPostRequest> = s.object<OmniTokensPostRequest>({
  enablementDate: s.optional(s.string()),
  org: s.optional(s.string()),
  division: s.optional(s.string()),
  partition: s.optional(s.string()),
  entity: s.optional(s.string()),
  platform: s.optional(s.lazy(() => platformModel1Schema)),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
  deleted: s.optional(s.string()),
  deleter: s.optional(s.string()),
});
