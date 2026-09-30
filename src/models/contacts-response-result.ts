import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { contactsResponseItemSchema, type ContactsResponseItem } from "./contacts-response-item.js";

export type ContactsResponseResult = {
  response?: ContactsResponseItem;
};

export const contactsResponseResultSchema: Schema<ContactsResponseResult> = s.object<ContactsResponseResult>({
  response: s.optional(s.lazy(() => contactsResponseItemSchema)),
});
