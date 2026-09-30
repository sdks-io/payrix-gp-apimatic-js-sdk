import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { fundsResponseSchema, type FundsResponse } from "../funds-response.js";

/** The identifier of the Fund that this entityReserves resource relates to. */
export type EntityReservesModelFund = string | FundsResponse;

export const entityReservesModelFundSchema: Schema<EntityReservesModelFund> = s.of<EntityReservesModelFund>(
  s.union([s.string(), s.lazy(() => fundsResponseSchema)]),
);
