import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Txn = {};

export const txnSchema: Schema<Txn> = s.object<Txn>({});
