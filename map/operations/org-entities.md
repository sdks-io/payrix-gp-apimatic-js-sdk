<!-- Generated file — do not edit; regenerated with the SDK. -->

# OrgEntities — operations

Accessor: `client.orgEntities` · Source: `src/resources/org-entities.ts` · 5 operations · Request and error types: namespace `OrgEntities`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteOrgEntitiesId

- **Signature**: `deleteOrgEntitiesId(request: OrgEntities.DeleteOrgEntitiesIdRequest, options?: RequestOptions): ApiPromise<OrgEntitiesResponseResult, OrgEntities.DeleteOrgEntitiesIdError>`
- **Wire**: `DELETE /orgEntities/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `OrgEntitiesResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `OrgEntities.DeleteOrgEntitiesIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OrgEntities.DeleteOrgEntitiesIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrgEntitiesResponseResult` | `orgEntitiesResponseResultSchema` | `src/models/org-entities-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getOrgEntities

- **Signature**: `getOrgEntities(request: OrgEntities.GetOrgEntitiesRequest, options?: RequestOptions): ApiPromise<OrgEntitiesResponseResult, OrgEntities.GetOrgEntitiesError>`
- **Wire**: `GET /orgEntities`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OrgEntitiesResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `OrgEntities.GetOrgEntitiesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OrgEntities.GetOrgEntitiesRequest` (7):

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
| `OrgEntitiesResponseResult` | `orgEntitiesResponseResultSchema` | `src/models/org-entities-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getOrgEntitiesId

- **Signature**: `getOrgEntitiesId(request: OrgEntities.GetOrgEntitiesIdRequest, options?: RequestOptions): ApiPromise<OrgEntitiesResponseResult, OrgEntities.GetOrgEntitiesIdError>`
- **Wire**: `GET /orgEntities/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OrgEntitiesResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `OrgEntities.GetOrgEntitiesIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OrgEntities.GetOrgEntitiesIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrgEntitiesResponseResult` | `orgEntitiesResponseResultSchema` | `src/models/org-entities-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### postOrgEntities

- **Signature**: `postOrgEntities(request: OrgEntities.PostOrgEntitiesRequest, options?: RequestOptions): ApiPromise<OrgEntitiesResponseResult, OrgEntities.PostOrgEntitiesError>`
- **Wire**: `POST /orgEntities`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `OrgEntitiesResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `OrgEntities.PostOrgEntitiesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OrgEntities.PostOrgEntitiesRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `OrgEntitiesPostRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrgEntitiesPostRequest` | `orgEntitiesPostRequestSchema` | `src/models/org-entities-post-request.ts` |
| `OrgEntitiesResponseResult` | `orgEntitiesResponseResultSchema` | `src/models/org-entities-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### putOrgEntitiesId

- **Signature**: `putOrgEntitiesId(request: OrgEntities.PutOrgEntitiesIdRequest, options?: RequestOptions): ApiPromise<OrgEntitiesResponseResult, OrgEntities.PutOrgEntitiesIdError>`
- **Wire**: `PUT /orgEntities/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `OrgEntitiesResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `OrgEntities.PutOrgEntitiesIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OrgEntities.PutOrgEntitiesIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `OrgEntitiesPutRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrgEntitiesPutRequest` | `orgEntitiesPutRequestSchema` | `src/models/org-entities-put-request.ts` |
| `OrgEntitiesResponseResult` | `orgEntitiesResponseResultSchema` | `src/models/org-entities-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

