<!-- Generated file — do not edit; regenerated with the SDK. -->

# Teams — operations

Accessor: `client.teams` · Source: `src/resources/teams.ts` · 5 operations · Request and error types: namespace `Teams`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteTeamsId

- **Signature**: `deleteTeamsId(request: Teams.DeleteTeamsIdRequest, options?: RequestOptions): ApiPromise<TeamsResponseResult, Teams.DeleteTeamsIdError>`
- **Wire**: `DELETE /teams/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TeamsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Teams.DeleteTeamsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Teams.DeleteTeamsIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TeamsResponseResult` | `teamsResponseResultSchema` | `src/models/teams-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getTeams

- **Signature**: `getTeams(request: Teams.GetTeamsRequest, options?: RequestOptions): ApiPromise<TeamsResponseResult, Teams.GetTeamsError>`
- **Wire**: `GET /teams`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Teams.GetTeamsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Teams.GetTeamsRequest` (7):

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
| `TeamsResponseResult` | `teamsResponseResultSchema` | `src/models/teams-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getTeamsId

- **Signature**: `getTeamsId(request: Teams.GetTeamsIdRequest, options?: RequestOptions): ApiPromise<TeamsResponseResult, Teams.GetTeamsIdError>`
- **Wire**: `GET /teams/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Teams.GetTeamsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Teams.GetTeamsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TeamsResponseResult` | `teamsResponseResultSchema` | `src/models/teams-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### postTeams

- **Signature**: `postTeams(request: Teams.PostTeamsRequest, options?: RequestOptions): ApiPromise<TeamsResponseResult, Teams.PostTeamsError>`
- **Wire**: `POST /teams`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TeamsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Teams.PostTeamsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Teams.PostTeamsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `TeamsPostRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TeamsPostRequest` | `teamsPostRequestSchema` | `src/models/teams-post-request.ts` |
| `TeamsResponseResult` | `teamsResponseResultSchema` | `src/models/teams-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### putTeamsId

- **Signature**: `putTeamsId(request: Teams.PutTeamsIdRequest, options?: RequestOptions): ApiPromise<TeamsResponseResult, Teams.PutTeamsIdError>`
- **Wire**: `PUT /teams/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TeamsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Teams.PutTeamsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Teams.PutTeamsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `TeamsPutRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TeamsPutRequest` | `teamsPutRequestSchema` | `src/models/teams-put-request.ts` |
| `TeamsResponseResult` | `teamsResponseResultSchema` | `src/models/teams-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

