<!-- Generated file — do not edit; regenerated with the SDK. -->

# Sessions — operations

Accessor: `client.sessions` · Source: `src/resources/sessions.ts` · 4 operations · Request and error types: namespace `Sessions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteSessionsId

- **Signature**: `deleteSessionsId(request: Sessions.DeleteSessionsIdRequest, options?: RequestOptions): ApiPromise<SessionsResponseResult, Sessions.DeleteSessionsIdError>`
- **Wire**: `DELETE /sessions/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SessionsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Sessions.DeleteSessionsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sessions.DeleteSessionsIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SessionsResponseResult` | `sessionsResponseResultSchema` | `src/models/sessions-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getSessions

- **Signature**: `getSessions(request: Sessions.GetSessionsRequest, options?: RequestOptions): ApiPromise<SessionsPostResponseResult, Sessions.GetSessionsError>`
- **Wire**: `GET /sessions`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SessionsPostResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Sessions.GetSessionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sessions.GetSessionsRequest` (7):

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
| `SessionsPostResponseResult` | `sessionsPostResponseResultSchema` | `src/models/sessions-post-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getSessionsId

- **Signature**: `getSessionsId(request: Sessions.GetSessionsIdRequest, options?: RequestOptions): ApiPromise<SessionsResponseResult, Sessions.GetSessionsIdError>`
- **Wire**: `GET /sessions/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SessionsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Sessions.GetSessionsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sessions.GetSessionsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SessionsResponseResult` | `sessionsResponseResultSchema` | `src/models/sessions-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### postSessions

- **Signature**: `postSessions(request: Sessions.PostSessionsRequest, options?: RequestOptions): ApiPromise<SessionsResponseResult, Sessions.PostSessionsError>`
- **Wire**: `POST /sessions`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey`, (all of `username`, `password`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SessionsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Sessions.PostSessionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sessions.PostSessionsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `SessionsPostRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SessionsPostRequest` | `sessionsPostRequestSchema` | `src/models/sessions-post-request.ts` |
| `SessionsResponseResult` | `sessionsResponseResultSchema` | `src/models/sessions-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

