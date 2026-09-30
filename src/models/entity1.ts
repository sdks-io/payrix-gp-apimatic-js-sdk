import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Entity1 = {};

export const entity1Schema: Schema<Entity1> = s.object<Entity1>({});
