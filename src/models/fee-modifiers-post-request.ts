import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { feeModifiersMarkupUm1Schema, type FeeModifiersMarkupUm1 } from "./fee-modifiers-markup-um1.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";

export type FeeModifiersPostRequest = {
  /** The identifier of the Fee that this Fee Modifier applies. */
  fee: string;
  /** The identifier of the Entity that this Fee Modifier applies for. */
  entity?: string;
  /**
   * The identifier of the Org this Fee Modifiers should apply for on behalf of the Entity
   * identified in the value of the 'entity' field. This field is optional. If it is set, then the
   * Fee Modifier is applied to this Org instead.
   */
  org?: string;
  /**
   * The identifier of the Entity who should pay this Fee on behalf of the Entity identified in the
   * value of the 'entity' or 'org' field. This field is optional. If it is set, then the Fee is
   * charged to this Entity instead.
   */
  fromentity?: string;
  markupUm?: FeeModifiersMarkupUm1;
  /**
   * The total amount of the markup value for this Fee. The units used in this field are determined
   * by the value of the 'markupUm' field on the Fee. If the 'markupUm' field is set to
   * 'percentage', then this field specifies the Fee percentage to levy in basis points. If the
   * 'markupUm' field is set to 'actual', then this field specifies the markup amount in cents.
   */
  markupAmount?: number | null;
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const feeModifiersPostRequestSchema: Schema<FeeModifiersPostRequest> =
  s.object<FeeModifiersPostRequest>({
    fee: s.string(),
    entity: s.optional(s.string()),
    org: s.optional(s.string()),
    fromentity: s.optional(s.string()),
    markupUm: s.optional(s.lazy(() => feeModifiersMarkupUm1Schema)),
    markupAmount: s.optionalNullable(s.number()),
    inactive: s.optional(s.lazy(() => inactive1Schema)),
    frozen: s.optional(s.lazy(() => frozen1Schema)),
  });
