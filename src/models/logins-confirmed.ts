import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const LoginsConfirmed = {
  _0: 0,
  _1: 1,
} as const;
export type LoginsConfirmed = (typeof LoginsConfirmed)[keyof typeof LoginsConfirmed] | (number & {});

export const loginsConfirmedSchema: EnumSchema<LoginsConfirmed> = s.enumOf<LoginsConfirmed>(LoginsConfirmed);
