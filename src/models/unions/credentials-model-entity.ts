import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entitiesResponseSchema, type EntitiesResponse } from "../entities-response.js";

/** The identifier of the Entity that this Credential resource belongs to. */
export type CredentialsModelEntity = string | EntitiesResponse;

export const credentialsModelEntitySchema: Schema<CredentialsModelEntity> = s.of<CredentialsModelEntity>(
  s.union([s.string(), s.lazy(() => entitiesResponseSchema)]),
);
