import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  changeManagementEnabled2Schema,
  type ChangeManagementEnabled2,
} from "./change-management-enabled2.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { minPasswordComplexity2Schema, type MinPasswordComplexity2 } from "./min-password-complexity2.js";
import {
  partitionNoEmailConfirmation2Schema,
  type PartitionNoEmailConfirmation2,
} from "./partition-no-email-confirmation2.js";
import { partitionNoHoldEmail2Schema, type PartitionNoHoldEmail2 } from "./partition-no-hold-email2.js";

export type PartitionsResponse = {
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
  /** The Login that owns this resource. */
  login?: string;
  /**
   * The name of this Partition. This field is stored as a text string and must be between 0 and 50
   * characters long.
   */
  name?: string;
  /**
   * The email address that the API should send email notifications from when processing requests in
   * this Partition. This field is stored as a text string and must be between 1 and 100 characters
   * long.
   */
  email?: string;
  /**
   * The minimum number of characters that all passwords used in this Partition must have. This
   * field is specified as an integer. The value must be between 8 and 16.
   */
  minPasswordLength?: number;
  minPasswordComplexity?: MinPasswordComplexity2;
  /**
   * The minimum number of previous passwords that the current password must be distinct from. This
   * field is specified as an integer. The value must be between 3 and 12.
   */
  minPasswordHistory?: number;
  noEmailConfirmation?: PartitionNoEmailConfirmation2;
  noHoldEmail?: PartitionNoHoldEmail2;
  changeManagementEnabled?: ChangeManagementEnabled2;
  currency?: Record<string, unknown>;
};

export const partitionsResponseSchema: Schema<PartitionsResponse> = s.object<PartitionsResponse>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  login: s.optional(s.string()),
  name: s.optional(s.string()),
  email: s.optional(s.string()),
  minPasswordLength: s.optional(s.number()),
  minPasswordComplexity: s.optional(s.lazy(() => minPasswordComplexity2Schema)),
  minPasswordHistory: s.optional(s.number()),
  noEmailConfirmation: s.optional(s.lazy(() => partitionNoEmailConfirmation2Schema)),
  noHoldEmail: s.optional(s.lazy(() => partitionNoHoldEmail2Schema)),
  changeManagementEnabled: s.optional(s.lazy(() => changeManagementEnabled2Schema)),
  currency: s.optional(s.record(s.string(), s.unknown())),
});
