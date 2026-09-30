import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TerminalsAutoClose = {
  _0: 0,
  _1: 1,
  _2: 2,
} as const;
export type TerminalsAutoClose = (typeof TerminalsAutoClose)[keyof typeof TerminalsAutoClose] | (number & {});

export const terminalsAutoCloseSchema: EnumSchema<TerminalsAutoClose> =
  s.enumOf<TerminalsAutoClose>(TerminalsAutoClose);
