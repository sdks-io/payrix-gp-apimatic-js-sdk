<!-- Generated file — do not edit; regenerated with the SDK. -->

# EntityData — operations

Accessor: `client.entityData` · Source: `src/resources/entity-data.ts` · 3 operations · Request and error types: namespace `EntityData`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getEntityDatas

- **Signature**: `getEntityDatas(request: EntityData.GetEntityDatasRequest, options?: RequestOptions): ApiPromise<EntityDatasResponseResult, EntityData.GetEntityDatasError>`
- **Wire**: `GET /entityDatas`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EntityDatasResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `EntityData.GetEntityDatasError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EntityData.GetEntityDatasRequest` (7):

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
| `EntityDatasResponseResult` | `entityDatasResponseResultSchema` | `src/models/entity-datas-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getEntityDatasId

- **Signature**: `getEntityDatasId(request: EntityData.GetEntityDatasIdRequest, options?: RequestOptions): ApiPromise<EntityDatasResponseResult, EntityData.GetEntityDatasIdError>`
- **Wire**: `GET /entityDatas/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EntityDatasResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `EntityData.GetEntityDatasIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EntityData.GetEntityDatasIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `EntityDatasResponseResult` | `entityDatasResponseResultSchema` | `src/models/entity-datas-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### postEntityDatas

- **Signature**: `postEntityDatas(request: EntityData.PostEntityDatasRequest, options?: RequestOptions): ApiPromise<EntityDatasResponseResult, EntityData.PostEntityDatasError>`
- **Wire**: `POST /entityDatas`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EntityDatasResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `EntityData.PostEntityDatasError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EntityData.PostEntityDatasRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `EntityDataPostRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EntityDataPostRequest` | `entityDataPostRequestSchema` | `src/models/entity-data-post-request.ts` |
| `EntityDatasResponseResult` | `entityDatasResponseResultSchema` | `src/models/entity-datas-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

