<!-- Generated file — do not edit; regenerated with the SDK. -->

# TeamLogins — operations

Accessor: `client.teamLogins` · Source: `src/resources/team-logins.ts` · 5 operations · Request and error types: namespace `TeamLogins`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteTeamLoginsId

- **Signature**: `deleteTeamLoginsId(request: TeamLogins.DeleteTeamLoginsIdRequest, options?: RequestOptions): ApiPromise<TeamLoginResponseResult, TeamLogins.DeleteTeamLoginsIdError>`
- **Wire**: `DELETE /teamLogins/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TeamLoginResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `TeamLogins.DeleteTeamLoginsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TeamLogins.DeleteTeamLoginsIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TeamLoginResponseResult` | `teamLoginResponseResultSchema` | `src/models/team-login-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getTeamLogins

- **Signature**: `getTeamLogins(request: TeamLogins.GetTeamLoginsRequest, options?: RequestOptions): ApiPromise<TeamLoginResponseResult, TeamLogins.GetTeamLoginsError>`
- **Wire**: `GET /teamLogins`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamLoginResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `TeamLogins.GetTeamLoginsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TeamLogins.GetTeamLoginsRequest` (7):

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
| `TeamLoginResponseResult` | `teamLoginResponseResultSchema` | `src/models/team-login-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getTeamLoginsId

- **Signature**: `getTeamLoginsId(request: TeamLogins.GetTeamLoginsIdRequest, options?: RequestOptions): ApiPromise<TeamLoginResponseResult, TeamLogins.GetTeamLoginsIdError>`
- **Wire**: `GET /teamLogins/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamLoginResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `TeamLogins.GetTeamLoginsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TeamLogins.GetTeamLoginsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TeamLoginResponseResult` | `teamLoginResponseResultSchema` | `src/models/team-login-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### postTeamLogins

- **Signature**: `postTeamLogins(request: TeamLogins.PostTeamLoginsRequest, options?: RequestOptions): ApiPromise<TeamLoginResponseResult, TeamLogins.PostTeamLoginsError>`
- **Wire**: `POST /teamLogins`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TeamLoginResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `TeamLogins.PostTeamLoginsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TeamLogins.PostTeamLoginsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `TeamLoginPostRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TeamLoginPostRequest` | `teamLoginPostRequestSchema` | `src/models/team-login-post-request.ts` |
| `TeamLoginResponseResult` | `teamLoginResponseResultSchema` | `src/models/team-login-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### putTeamLoginsId

- **Signature**: `putTeamLoginsId(request: TeamLogins.PutTeamLoginsIdRequest, options?: RequestOptions): ApiPromise<TeamLoginResponseResult, TeamLogins.PutTeamLoginsIdError>`
- **Wire**: `PUT /teamLogins/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TeamLoginResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `TeamLogins.PutTeamLoginsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TeamLogins.PutTeamLoginsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `TeamLoginPutRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TeamLoginPutRequest` | `teamLoginPutRequestSchema` | `src/models/team-login-put-request.ts` |
| `TeamLoginResponseResult` | `teamLoginResponseResultSchema` | `src/models/team-login-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

