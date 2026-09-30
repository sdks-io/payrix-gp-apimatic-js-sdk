<!-- Generated file — do not edit; regenerated with the SDK. -->

# EntitiesCustomFields — operations

Accessor: `client.entitiesCustomFields` · Source: `src/resources/entities-custom-fields.ts` · 5 operations · Request and error types: namespace `EntitiesCustomFields`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteEntityCustomFieldsId

- **Signature**: `deleteEntityCustomFieldsId(request: EntitiesCustomFields.DeleteEntityCustomFieldsIdRequest, options?: RequestOptions): ApiPromise<EntityCustomFieldsResponseResult, EntitiesCustomFields.DeleteEntityCustomFieldsIdError>`
- **Wire**: `DELETE /entityCustomFields/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EntityCustomFieldsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `EntitiesCustomFields.DeleteEntityCustomFieldsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EntitiesCustomFields.DeleteEntityCustomFieldsIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `EntityCustomFieldsResponseResult` | `entityCustomFieldsResponseResultSchema` | `src/models/entity-custom-fields-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getEntityCustomFields

- **Signature**: `getEntityCustomFields(request: EntitiesCustomFields.GetEntityCustomFieldsRequest, options?: RequestOptions): ApiPromise<EntityCustomFieldsResponseResult, EntitiesCustomFields.GetEntityCustomFieldsError>`
- **Wire**: `GET /entityCustomFields`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EntityCustomFieldsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `EntitiesCustomFields.GetEntityCustomFieldsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EntitiesCustomFields.GetEntityCustomFieldsRequest` (7):

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
| `EntityCustomFieldsResponseResult` | `entityCustomFieldsResponseResultSchema` | `src/models/entity-custom-fields-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getEntityCustomFieldsId

- **Signature**: `getEntityCustomFieldsId(request: EntitiesCustomFields.GetEntityCustomFieldsIdRequest, options?: RequestOptions): ApiPromise<EntityCustomFieldsResponseResult, EntitiesCustomFields.GetEntityCustomFieldsIdError>`
- **Wire**: `GET /entityCustomFields/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EntityCustomFieldsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `EntitiesCustomFields.GetEntityCustomFieldsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EntitiesCustomFields.GetEntityCustomFieldsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `EntityCustomFieldsResponseResult` | `entityCustomFieldsResponseResultSchema` | `src/models/entity-custom-fields-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### postEntityCustomFields

- **Signature**: `postEntityCustomFields(request: EntitiesCustomFields.PostEntityCustomFieldsRequest, options?: RequestOptions): ApiPromise<EntityCustomFieldsResponseResult, EntitiesCustomFields.PostEntityCustomFieldsError>`
- **Wire**: `POST /entityCustomFields`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EntityCustomFieldsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `EntitiesCustomFields.PostEntityCustomFieldsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EntitiesCustomFields.PostEntityCustomFieldsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `EntityCustomFieldsPostRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EntityCustomFieldsPostRequest` | `entityCustomFieldsPostRequestSchema` | `src/models/entity-custom-fields-post-request.ts` |
| `EntityCustomFieldsResponseResult` | `entityCustomFieldsResponseResultSchema` | `src/models/entity-custom-fields-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### putEntityCustomFieldsId

- **Signature**: `putEntityCustomFieldsId(request: EntitiesCustomFields.PutEntityCustomFieldsIdRequest, options?: RequestOptions): ApiPromise<EntityCustomFieldsResponseResult, EntitiesCustomFields.PutEntityCustomFieldsIdError>`
- **Wire**: `PUT /entityCustomFields/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EntityCustomFieldsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `EntitiesCustomFields.PutEntityCustomFieldsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EntitiesCustomFields.PutEntityCustomFieldsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `EntityCustomFieldsPutRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EntityCustomFieldsPutRequest` | `entityCustomFieldsPutRequestSchema` | `src/models/entity-custom-fields-put-request.ts` |
| `EntityCustomFieldsResponseResult` | `entityCustomFieldsResponseResultSchema` | `src/models/entity-custom-fields-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

