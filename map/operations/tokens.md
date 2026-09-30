<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tokens — operations

Accessor: `client.tokens` · Source: `src/resources/tokens.ts` · 5 operations · Request and error types: namespace `Tokens`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteTokensId

- **Signature**: `deleteTokensId(request: Tokens.DeleteTokensIdRequest, options?: RequestOptions): ApiPromise<TokensResponseResult, Tokens.DeleteTokensIdError>`
- **Wire**: `DELETE /tokens/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TokensResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Tokens.DeleteTokensIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tokens.DeleteTokensIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TokensResponseResult` | `tokensResponseResultSchema` | `src/models/tokens-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getTokens

- **Signature**: `getTokens(request: Tokens.GetTokensRequest, options?: RequestOptions): ApiPromise<TokensResponseResult, Tokens.GetTokensError>`
- **Wire**: `GET /tokens`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TokensResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Tokens.GetTokensError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tokens.GetTokensRequest` (7):

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
| `TokensResponseResult` | `tokensResponseResultSchema` | `src/models/tokens-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getTokensId

- **Signature**: `getTokensId(request: Tokens.GetTokensIdRequest, options?: RequestOptions): ApiPromise<TokensResponseResult, Tokens.GetTokensIdError>`
- **Wire**: `GET /tokens/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TokensResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Tokens.GetTokensIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tokens.GetTokensIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TokensResponseResult` | `tokensResponseResultSchema` | `src/models/tokens-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### postTokens

- **Signature**: `postTokens(request: Tokens.PostTokensRequest, options?: RequestOptions): ApiPromise<TokensResponseResult, Tokens.PostTokensError>`
- **Wire**: `POST /tokens`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TokensResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Tokens.PostTokensError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tokens.PostTokensRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `TokenPostRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TokenPostRequest` | `tokenPostRequestSchema` | `src/models/token-post-request.ts` |
| `TokensResponseResult` | `tokensResponseResultSchema` | `src/models/tokens-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### putTokensId

- **Signature**: `putTokensId(request: Tokens.PutTokensIdRequest, options?: RequestOptions): ApiPromise<TokensResponseResult, Tokens.PutTokensIdError>`
- **Wire**: `PUT /tokens/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TokensResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Tokens.PutTokensIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tokens.PutTokensIdRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `token` | `header` | `string` | no |
| `body` | `body` | `TokenPutRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TokenPutRequest` | `tokenPutRequestSchema` | `src/models/token-put-request.ts` |
| `TokensResponseResult` | `tokensResponseResultSchema` | `src/models/tokens-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

