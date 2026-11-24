import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Fraud = {
  PickUpCard: "PICK_UP_CARD",
} as const;
export type Fraud = (typeof Fraud)[keyof typeof Fraud] | (string & {});

export const fraudSchema: EnumSchema<Fraud> = s.enumOf<Fraud>(Fraud);
