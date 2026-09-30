import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PlanUm = {
  Actual: "actual",
  Percent: "percent",
} as const;
export type PlanUm = (typeof PlanUm)[keyof typeof PlanUm] | (string & {});

export const planUmSchema: EnumSchema<PlanUm> = s.enumOf<PlanUm>(PlanUm);
