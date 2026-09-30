import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountMethod2Schema, type AccountMethod2 } from "./account-method2.js";

export type Account4 = {
  method?: AccountMethod2;
  /** The number of the bank account. */
  number?: string;
  /**
   * The routing number of the bank account. This field is stored as a text string and must be
   * between 5 and 20 characters long.
   */
  routing?: string;
};

export const account4Schema: Schema<Account4> = s.object<Account4>({
  method: s.optional(s.lazy(() => accountMethod2Schema)),
  number: s.optional(s.string()),
  routing: s.optional(s.string()),
});
