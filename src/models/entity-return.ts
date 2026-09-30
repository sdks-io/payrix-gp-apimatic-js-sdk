import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creator8Schema, type Creator8 } from "./creator8.js";
import { disbursement2Schema, type Disbursement2 } from "./disbursement2.js";
import { entityReturnCode1Schema, type EntityReturnCode1 } from "./entity-return-code1.js";
import {
  entityReturnsActionCode1Schema,
  type EntityReturnsActionCode1,
} from "./entity-returns-action-code1.js";
import { entity28Schema, type Entity28 } from "./entity28.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import { login2Schema, type Login2 } from "./login2.js";
import { paymentSchema, type Payment } from "./payment.js";
import { txn1Schema, type Txn1 } from "./txn1.js";

export type EntityReturn = {
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
  creator?: Creator8;
  /** The identifier of the Login that last modified this resource. */
  modifier?: string;
  login?: Login2;
  entity?: Entity28;
  payment?: Payment;
  txn?: Txn1;
  disbursement?: Disbursement2;
  actionCode?: EntityReturnsActionCode1;
  code?: EntityReturnCode1;
  /** The message that is received from the platform. */
  message?: string;
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const entityReturnSchema: Schema<EntityReturn> = s.object<EntityReturn>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator8Schema)),
  modifier: s.optional(s.string()),
  login: s.optional(s.lazy(() => login2Schema)),
  entity: s.optional(s.lazy(() => entity28Schema)),
  payment: s.optional(s.lazy(() => paymentSchema)),
  txn: s.optional(s.lazy(() => txn1Schema)),
  disbursement: s.optional(s.lazy(() => disbursement2Schema)),
  actionCode: s.optional(s.lazy(() => entityReturnsActionCode1Schema)),
  code: s.optional(s.lazy(() => entityReturnCode1Schema)),
  message: s.optional(s.string()),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
});
