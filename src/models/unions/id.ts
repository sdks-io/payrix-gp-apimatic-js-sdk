import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Id = string;

export const idInternalSchema: Schema<Id> = s.of<Id>(s.union([s.string()]));

export const idSchema: Schema<Id> = s.lazySchema(() =>
  s.of<Id>(
    s.union([
      s.string().check(s.minLength(1), s.maxLength(50)),
      s.string().check(s.minLength(8), s.maxLength(50)),
    ]),
  ),
);
