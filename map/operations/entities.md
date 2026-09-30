<!-- Generated file — do not edit; regenerated with the SDK. -->

# Entities — operations

Accessor: `client.entities` · Source: `src/resources/entities.ts` · 6 operations · Request and error types: namespace `Entities`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteEntitiesId

- **Signature**: `deleteEntitiesId(request: Entities.DeleteEntitiesIdRequest, options?: RequestOptions): ApiPromise<EntitiesResponseResult, Entities.DeleteEntitiesIdError>`
- **Wire**: `DELETE /entities/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EntitiesResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Entities.DeleteEntitiesIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Entities.DeleteEntitiesIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `EntitiesResponseResult` | `entitiesResponseResultSchema` | `src/models/entities-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getEntities

- **Signature**: `getEntities(request: Entities.GetEntitiesRequest, options?: RequestOptions): ApiPromise<EntitiesResponseResult, Entities.GetEntitiesError>`
- **Wire**: `GET /entities`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EntitiesResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Entities.GetEntitiesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Entities.GetEntitiesRequest` (7):

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
| `EntitiesResponseResult` | `entitiesResponseResultSchema` | `src/models/entities-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getEntitiesId

- **Signature**: `getEntitiesId(request: Entities.GetEntitiesIdRequest, options?: RequestOptions): ApiPromise<EntitiesResponseResult, Entities.GetEntitiesIdError>`
- **Wire**: `GET /entities/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EntitiesResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Entities.GetEntitiesIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Entities.GetEntitiesIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `EntitiesResponseResult` | `entitiesResponseResultSchema` | `src/models/entities-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getEntitiesIdNextPayout

- **Signature**: `getEntitiesIdNextPayout(request: Entities.GetEntitiesIdNextPayoutRequest, options?: RequestOptions): ApiPromise<EntityNextPayoutResponseResult, Entities.GetEntitiesIdNextPayoutError>`
- **Wire**: `GET /entities/{id}/nextPayout`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EntityNextPayoutResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Entities.GetEntitiesIdNextPayoutError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Entities.GetEntitiesIdNextPayoutRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `excludeSingle` | `query` | — | `ExcludeSingle1` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ExcludeSingle1` | `excludeSingle1Schema` | `src/models/exclude-single1.ts` |
| `EntityNextPayoutResponseResult` | `entityNextPayoutResponseResultSchema` | `src/models/entity-next-payout-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### postEntities

- **Signature**: `postEntities(request: Entities.PostEntitiesRequest, options?: RequestOptions): ApiPromise<EntitiesResponseResult, Entities.PostEntitiesError>`
- **Wire**: `POST /entities`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EntitiesResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Entities.PostEntitiesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Entities.PostEntitiesRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `EntitiesPostRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EntitiesPostRequest` | `entitiesPostRequestSchema` | `src/models/entities-post-request.ts` |
| `EntitiesResponseResult` | `entitiesResponseResultSchema` | `src/models/entities-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### putEntitiesId

- **Signature**: `putEntitiesId(request: Entities.PutEntitiesIdRequest, options?: RequestOptions): ApiPromise<EntitiesResponseResult, Entities.PutEntitiesIdError>`
- **Wire**: `PUT /entities/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EntitiesResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Entities.PutEntitiesIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Entities.PutEntitiesIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `EntitiesPutRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EntitiesPutRequest` | `entitiesPutRequestSchema` | `src/models/entities-put-request.ts` |
| `EntitiesResponseResult` | `entitiesResponseResultSchema` | `src/models/entities-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

