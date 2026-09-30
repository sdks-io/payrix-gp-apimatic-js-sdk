import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import { invoiceParameterLocked1Schema, type InvoiceParameterLocked1 } from "./invoice-parameter-locked1.js";
import { invoiceParameterType1Schema, type InvoiceParameterType1 } from "./invoice-parameter-type1.js";

export type InvoiceParametersPostRequest = {
  /** The identifier of the Login that owns this invoiceParameter resource. */
  login: string;
  /** The identifier of the Entity associated with this invoiceParameter. */
  entity?: string;
  /** The identifier of the Division associated with this invoiceParameter. */
  division?: string;
  /** The identifier of the Org associated with this invoiceParameter. */
  org?: string;
  /** The identifier of the Partition associated with this invoiceParameter. */
  partition?: string;
  locked?: InvoiceParameterLocked1;
  type: InvoiceParameterType1;
  /** The value of this type of invoiceParameter. */
  value: string;
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const invoiceParametersPostRequestSchema: Schema<InvoiceParametersPostRequest> =
  s.object<InvoiceParametersPostRequest>({
    login: s.string(),
    entity: s.optional(s.string()),
    division: s.optional(s.string()),
    org: s.optional(s.string()),
    partition: s.optional(s.string()),
    locked: s.optional(s.lazy(() => invoiceParameterLocked1Schema)),
    type: invoiceParameterType1Schema,
    value: s.string(),
    inactive: s.optional(s.lazy(() => inactive1Schema)),
    frozen: s.optional(s.lazy(() => frozen1Schema)),
  });
