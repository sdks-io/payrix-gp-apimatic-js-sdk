<!-- Generated file — do not edit; regenerated with the SDK. -->

# Mappings — operations

Accessor: `client.mappings` · Source: `src/resources/mappings.ts` · 5 operations · Request and error types: namespace `Mappings`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteMappingsId

- **Signature**: `deleteMappingsId(request: Mappings.DeleteMappingsIdRequest, options?: RequestOptions): ApiPromise<MappingsResponseResult, Mappings.DeleteMappingsIdError>`
- **Wire**: `DELETE /mappings/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MappingsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Mappings.DeleteMappingsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Mappings.DeleteMappingsIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MappingsResponseResult` | `mappingsResponseResultSchema` | `src/models/mappings-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getMappings

- **Signature**: `getMappings(request: Mappings.GetMappingsRequest, options?: RequestOptions): ApiPromise<MappingsResponseResult, Mappings.GetMappingsError>`
- **Wire**: `GET /mappings`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MappingsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Mappings.GetMappingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Mappings.GetMappingsRequest` (7):

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
| `MappingsResponseResult` | `mappingsResponseResultSchema` | `src/models/mappings-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getMappingsId

- **Signature**: `getMappingsId(request: Mappings.GetMappingsIdRequest, options?: RequestOptions): ApiPromise<MappingsResponseResult, Mappings.GetMappingsIdError>`
- **Wire**: `GET /mappings/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MappingsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Mappings.GetMappingsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Mappings.GetMappingsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MappingsResponseResult` | `mappingsResponseResultSchema` | `src/models/mappings-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### postMappings

- **Signature**: `postMappings(request: Mappings.PostMappingsRequest, options?: RequestOptions): ApiPromise<MappingsResponseResult, Mappings.PostMappingsError>`
- **Wire**: `POST /mappings`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MappingsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Mappings.PostMappingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Mappings.PostMappingsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `MappingsPostRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MappingsPostRequest` | `mappingsPostRequestSchema` | `src/models/mappings-post-request.ts` |
| `MappingsResponseResult` | `mappingsResponseResultSchema` | `src/models/mappings-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### putMappingsId

- **Signature**: `putMappingsId(request: Mappings.PutMappingsIdRequest, options?: RequestOptions): ApiPromise<MappingsResponseResult, Mappings.PutMappingsIdError>`
- **Wire**: `PUT /mappings/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MappingsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Mappings.PutMappingsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Mappings.PutMappingsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `MappingsPutRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MappingsPutRequest` | `mappingsPutRequestSchema` | `src/models/mappings-put-request.ts` |
| `MappingsResponseResult` | `mappingsResponseResultSchema` | `src/models/mappings-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

