import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DescisionActionsAction = {
  _1: 1,
  _3: 3,
  _4: 4,
  _5: 5,
  _8: 8,
} as const;
export type DescisionActionsAction =
  | (typeof DescisionActionsAction)[keyof typeof DescisionActionsAction]
  | (number & {});

export const descisionActionsActionSchema: EnumSchema<DescisionActionsAction> =
  s.enumOf<DescisionActionsAction>(DescisionActionsAction);
