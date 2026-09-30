import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { confirmCodeType1Schema, type ConfirmCodeType1 } from "./confirm-code-type1.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";

export type ConfirmCodesPostRequest = {
  /** The identifier of the Login resource that this confirmation code relates to. */
  login: string;
  type: ConfirmCodeType1;
  /** The cryptographically secure, randomly generated key to be used for verification. */
  key: string;
  /**
   * If the 'type' of this confirmation code is '2' (email), then this field represents the email
   * address that requires verification.
   */
  email?: string;
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const confirmCodesPostRequestSchema: Schema<ConfirmCodesPostRequest> =
  s.object<ConfirmCodesPostRequest>({
    login: s.string(),
    type: confirmCodeType1Schema,
    key: s.string(),
    email: s.optional(s.string()),
    inactive: s.optional(s.lazy(() => inactive1Schema)),
    frozen: s.optional(s.lazy(() => frozen1Schema)),
  });
