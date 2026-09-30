<!-- Generated file — do not edit; regenerated with the SDK. -->

# RevShareSchedules — operations

Accessor: `client.revShareSchedules` · Source: `src/resources/rev-share-schedules.ts` · 5 operations · Request and error types: namespace `RevShareSchedules`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteRevShareSchedulesId

- **Signature**: `deleteRevShareSchedulesId(request: RevShareSchedules.DeleteRevShareSchedulesIdRequest, options?: RequestOptions): ApiPromise<RevShareSchedulesResponseResult, RevShareSchedules.DeleteRevShareSchedulesIdError>`
- **Wire**: `DELETE /revShareSchedules/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RevShareSchedulesResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `RevShareSchedules.DeleteRevShareSchedulesIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RevShareSchedules.DeleteRevShareSchedulesIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RevShareSchedulesResponseResult` | `revShareSchedulesResponseResultSchema` | `src/models/rev-share-schedules-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getRevShareSchedules

- **Signature**: `getRevShareSchedules(request: RevShareSchedules.GetRevShareSchedulesRequest, options?: RequestOptions): ApiPromise<RevShareSchedulesResponseResult, RevShareSchedules.GetRevShareSchedulesError>`
- **Wire**: `GET /revShareSchedules`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RevShareSchedulesResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `RevShareSchedules.GetRevShareSchedulesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RevShareSchedules.GetRevShareSchedulesRequest` (7):

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
| `RevShareSchedulesResponseResult` | `revShareSchedulesResponseResultSchema` | `src/models/rev-share-schedules-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getRevShareSchedulesId

- **Signature**: `getRevShareSchedulesId(request: RevShareSchedules.GetRevShareSchedulesIdRequest, options?: RequestOptions): ApiPromise<RevShareSchedulesResponseResult, RevShareSchedules.GetRevShareSchedulesIdError>`
- **Wire**: `GET /revShareSchedules/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RevShareSchedulesResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `RevShareSchedules.GetRevShareSchedulesIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RevShareSchedules.GetRevShareSchedulesIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RevShareSchedulesResponseResult` | `revShareSchedulesResponseResultSchema` | `src/models/rev-share-schedules-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### postRevShareSchedules

- **Signature**: `postRevShareSchedules(request: RevShareSchedules.PostRevShareSchedulesRequest, options?: RequestOptions): ApiPromise<RevShareSchedulesResponseResult, RevShareSchedules.PostRevShareSchedulesError>`
- **Wire**: `POST /revShareSchedules`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RevShareSchedulesResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `RevShareSchedules.PostRevShareSchedulesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RevShareSchedules.PostRevShareSchedulesRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `RevShareSchedulesPostRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RevShareSchedulesPostRequest` | `revShareSchedulesPostRequestSchema` | `src/models/rev-share-schedules-post-request.ts` |
| `RevShareSchedulesResponseResult` | `revShareSchedulesResponseResultSchema` | `src/models/rev-share-schedules-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### putRevShareSchedulesId

- **Signature**: `putRevShareSchedulesId(request: RevShareSchedules.PutRevShareSchedulesIdRequest, options?: RequestOptions): ApiPromise<RevShareSchedulesResponseResult, RevShareSchedules.PutRevShareSchedulesIdError>`
- **Wire**: `PUT /revShareSchedules/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RevShareSchedulesResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `RevShareSchedules.PutRevShareSchedulesIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RevShareSchedules.PutRevShareSchedulesIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `RevShareSchedulesPutRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RevShareSchedulesPutRequest` | `revShareSchedulesPutRequestSchema` | `src/models/rev-share-schedules-put-request.ts` |
| `RevShareSchedulesResponseResult` | `revShareSchedulesResponseResultSchema` | `src/models/rev-share-schedules-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

