import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entitiesResponseSchema, type EntitiesResponse } from "../entities-response.js";

/** The identifier of the Entity that this Contact relates to. */
export type ContactsModelEntity = string | EntitiesResponse;

export const contactsModelEntitySchema: Schema<ContactsModelEntity> = s.of<ContactsModelEntity>(
  s.union([s.string(), s.lazy(() => entitiesResponseSchema)]),
);
