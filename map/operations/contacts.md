<!-- Generated file — do not edit; regenerated with the SDK. -->

# Contacts — operations

Accessor: `client.contacts` · Source: `src/resources/contacts.ts` · 5 operations · Request and error types: namespace `Contacts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteContactsId

- **Signature**: `deleteContactsId(request: Contacts.DeleteContactsIdRequest, options?: RequestOptions): ApiPromise<ContactsResponseResult, Contacts.DeleteContactsIdError>`
- **Wire**: `DELETE /contacts/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ContactsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Contacts.DeleteContactsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Contacts.DeleteContactsIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContactsResponseResult` | `contactsResponseResultSchema` | `src/models/contacts-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getContacts

- **Signature**: `getContacts(request: Contacts.GetContactsRequest, options?: RequestOptions): ApiPromise<ContactsResponseResult, Contacts.GetContactsError>`
- **Wire**: `GET /contacts`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ContactsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Contacts.GetContactsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Contacts.GetContactsRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pageNumber` | `query` | `page[number]` | `number` | no |
| `pageLimit` | `query` | `page[limit]` | `number` | no |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `search` | `header` | — | `string` | no |
| `totals` | `header` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContactsResponseResult` | `contactsResponseResultSchema` | `src/models/contacts-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getContactsId

- **Signature**: `getContactsId(request: Contacts.GetContactsIdRequest, options?: RequestOptions): ApiPromise<ContactsResponseResult, Contacts.GetContactsIdError>`
- **Wire**: `GET /contacts/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ContactsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Contacts.GetContactsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Contacts.GetContactsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContactsResponseResult` | `contactsResponseResultSchema` | `src/models/contacts-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### postContacts

- **Signature**: `postContacts(request: Contacts.PostContactsRequest, options?: RequestOptions): ApiPromise<ContactsResponseResult, Contacts.PostContactsError>`
- **Wire**: `POST /contacts`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ContactsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Contacts.PostContactsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Contacts.PostContactsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `ContactsPostRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContactsPostRequest` | `contactsPostRequestSchema` | `src/models/contacts-post-request.ts` |
| `ContactsResponseResult` | `contactsResponseResultSchema` | `src/models/contacts-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### putContactsId

- **Signature**: `putContactsId(request: Contacts.PutContactsIdRequest, options?: RequestOptions): ApiPromise<ContactsResponseResult, Contacts.PutContactsIdError>`
- **Wire**: `PUT /contacts/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ContactsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Contacts.PutContactsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Contacts.PutContactsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `ContactsPutRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContactsPutRequest` | `contactsPutRequestSchema` | `src/models/contacts-put-request.ts` |
| `ContactsResponseResult` | `contactsResponseResultSchema` | `src/models/contacts-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

