import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import {
  saferPaymentPciNonValidationFeeEnabled1Schema,
  type SaferPaymentPciNonValidationFeeEnabled1,
} from "./safer-payment-pci-non-validation-fee-enabled1.js";
import { saferPaymentProgram1Schema, type SaferPaymentProgram1 } from "./safer-payment-program1.js";
import { saferPaymentStatus1Schema, type SaferPaymentStatus1 } from "./safer-payment-status1.js";

export type SaferPaymentsPostRequest = {
  /** The identifier of the Entity that saferPayments is associated to. */
  entity?: string;
  status?: SaferPaymentStatus1;
  /**
   * The Date and time when an entity was enabled for saferPayments.\nThe date is specified as an
   * eight digit string in YYYY-MM-DD hh:mm:ss format, for example, '2023-06-01 01:00:00' for June
   * 01, 2023. 1:00 am.
   */
  enablementDate?: string;
  pciNonValidationFeeEnabled?: SaferPaymentPciNonValidationFeeEnabled1;
  /** The identifier of the Org (group) that saferPayments is associated to. */
  org?: string;
  /** The identifier of the Division that saferPayments is associated to. */
  division?: string;
  /** The identifier of the Partition that saferPayments is associated to. */
  partition?: string;
  program?: SaferPaymentProgram1;
  /**
   * The date and time at which this resource was deleted.\nThe date is specified as an eight digit
   * string in YYYY-MM-DD hh:mm:ss format, for example, '2023-06-01 01:00:00' for June 01, 2023.
   * 1:00 am.
   */
  deleted?: string;
  /** The id of user who deleted the omniToken. */
  deleter?: string;
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const saferPaymentsPostRequestSchema: Schema<SaferPaymentsPostRequest> =
  s.object<SaferPaymentsPostRequest>({
    entity: s.optional(s.string()),
    status: s.optional(s.lazy(() => saferPaymentStatus1Schema)),
    enablementDate: s.optional(s.string()),
    pciNonValidationFeeEnabled: s.optional(s.lazy(() => saferPaymentPciNonValidationFeeEnabled1Schema)),
    org: s.optional(s.string()),
    division: s.optional(s.string()),
    partition: s.optional(s.string()),
    program: s.optional(s.lazy(() => saferPaymentProgram1Schema)),
    deleted: s.optional(s.string()),
    deleter: s.optional(s.string()),
    inactive: s.optional(s.lazy(() => inactive1Schema)),
    frozen: s.optional(s.lazy(() => frozen1Schema)),
  });
