<!-- Generated file — do not edit; regenerated with the SDK. -->

# AuthenticationTokens — operations

Accessor: `client.authenticationTokens` · Source: `src/resources/authentication-tokens.ts` · 5 operations · Request and error types: namespace `AuthenticationTokens`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteAuthTokensId

- **Signature**: `deleteAuthTokensId(request: AuthenticationTokens.DeleteAuthTokensIdRequest, options?: RequestOptions): ApiPromise<AuthTokensResponseResult, AuthenticationTokens.DeleteAuthTokensIdError>`
- **Wire**: `DELETE /authTokens/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AuthTokensResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `AuthenticationTokens.DeleteAuthTokensIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AuthenticationTokens.DeleteAuthTokensIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AuthTokensResponseResult` | `authTokensResponseResultSchema` | `src/models/auth-tokens-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getAuthTokens

- **Signature**: `getAuthTokens(request: AuthenticationTokens.GetAuthTokensRequest, options?: RequestOptions): ApiPromise<AuthTokensResponseResult, AuthenticationTokens.GetAuthTokensError>`
- **Wire**: `GET /authTokens`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AuthTokensResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `AuthenticationTokens.GetAuthTokensError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AuthenticationTokens.GetAuthTokensRequest` (7):

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
| `AuthTokensResponseResult` | `authTokensResponseResultSchema` | `src/models/auth-tokens-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getAuthTokensId

- **Signature**: `getAuthTokensId(request: AuthenticationTokens.GetAuthTokensIdRequest, options?: RequestOptions): ApiPromise<AuthTokensResponseResult, AuthenticationTokens.GetAuthTokensIdError>`
- **Wire**: `GET /authTokens/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AuthTokensResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `AuthenticationTokens.GetAuthTokensIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AuthenticationTokens.GetAuthTokensIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AuthTokensResponseResult` | `authTokensResponseResultSchema` | `src/models/auth-tokens-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### postAuthTokens

- **Signature**: `postAuthTokens(request: AuthenticationTokens.PostAuthTokensRequest, options?: RequestOptions): ApiPromise<AuthTokensResponseResult, AuthenticationTokens.PostAuthTokensError>`
- **Wire**: `POST /authTokens`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AuthTokensResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `AuthenticationTokens.PostAuthTokensError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AuthenticationTokens.PostAuthTokensRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `AuthTokensPostRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AuthTokensPostRequest` | `authTokensPostRequestSchema` | `src/models/auth-tokens-post-request.ts` |
| `AuthTokensResponseResult` | `authTokensResponseResultSchema` | `src/models/auth-tokens-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### putAuthTokensId

- **Signature**: `putAuthTokensId(request: AuthenticationTokens.PutAuthTokensIdRequest, options?: RequestOptions): ApiPromise<AuthTokensResponseResult, AuthenticationTokens.PutAuthTokensIdError>`
- **Wire**: `PUT /authTokens/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AuthTokensResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `AuthenticationTokens.PutAuthTokensIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AuthenticationTokens.PutAuthTokensIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `AuthTokensPutRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AuthTokensPutRequest` | `authTokensPutRequestSchema` | `src/models/auth-tokens-put-request.ts` |
| `AuthTokensResponseResult` | `authTokensResponseResultSchema` | `src/models/auth-tokens-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

