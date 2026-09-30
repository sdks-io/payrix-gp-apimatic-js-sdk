<!-- Generated file — do not edit; regenerated with the SDK. -->

# ChangeRequests — operations

Accessor: `client.changeRequests` · Source: `src/resources/change-requests.ts` · 3 operations · Request and error types: namespace `ChangeRequests`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteChangeRequestsId

- **Signature**: `deleteChangeRequestsId(request: ChangeRequests.DeleteChangeRequestsIdRequest, options?: RequestOptions): ApiPromise<ChangeRequestsResponseResult, ChangeRequests.DeleteChangeRequestsIdError>`
- **Wire**: `DELETE /changeRequests/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ChangeRequestsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `ChangeRequests.DeleteChangeRequestsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChangeRequests.DeleteChangeRequestsIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ChangeRequestsResponseResult` | `changeRequestsResponseResultSchema` | `src/models/change-requests-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getChangeRequests

- **Signature**: `getChangeRequests(request: ChangeRequests.GetChangeRequestsRequest, options?: RequestOptions): ApiPromise<ChangeRequestsResponseResult, ChangeRequests.GetChangeRequestsError>`
- **Wire**: `GET /changeRequests`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ChangeRequestsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `ChangeRequests.GetChangeRequestsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChangeRequests.GetChangeRequestsRequest` (7):

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
| `ChangeRequestsResponseResult` | `changeRequestsResponseResultSchema` | `src/models/change-requests-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getChangeRequestsId

- **Signature**: `getChangeRequestsId(request: ChangeRequests.GetChangeRequestsIdRequest, options?: RequestOptions): ApiPromise<ChangeRequestsResponseResult, ChangeRequests.GetChangeRequestsIdError>`
- **Wire**: `GET /changeRequests/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ChangeRequestsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `ChangeRequests.GetChangeRequestsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChangeRequests.GetChangeRequestsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ChangeRequestsResponseResult` | `changeRequestsResponseResultSchema` | `src/models/change-requests-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

