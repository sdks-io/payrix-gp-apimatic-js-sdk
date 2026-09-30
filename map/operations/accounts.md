<!-- Generated file — do not edit; regenerated with the SDK. -->

# Accounts — operations

Accessor: `client.accounts` · Source: `src/resources/accounts.ts` · 5 operations · Request and error types: namespace `Accounts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteAccountsId

- **Signature**: `deleteAccountsId(request: Accounts.DeleteAccountsIdRequest, options?: RequestOptions): ApiPromise<AccountsResponseResult, Accounts.DeleteAccountsIdError>`
- **Wire**: `DELETE /accounts/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AccountsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Accounts.DeleteAccountsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Accounts.DeleteAccountsIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AccountsResponseResult` | `accountsResponseResultSchema` | `src/models/accounts-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getAccounts

- **Signature**: `getAccounts(request: Accounts.GetAccountsRequest, options?: RequestOptions): ApiPromise<AccountsResponseResult, Accounts.GetAccountsError>`
- **Wire**: `GET /accounts`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AccountsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Accounts.GetAccountsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Accounts.GetAccountsRequest` (7):

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
| `AccountsResponseResult` | `accountsResponseResultSchema` | `src/models/accounts-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getAccountsId

- **Signature**: `getAccountsId(request: Accounts.GetAccountsIdRequest, options?: RequestOptions): ApiPromise<AccountsResponseResult, Accounts.GetAccountsIdError>`
- **Wire**: `GET /accounts/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AccountsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Accounts.GetAccountsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Accounts.GetAccountsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AccountsResponseResult` | `accountsResponseResultSchema` | `src/models/accounts-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### postAccounts

- **Signature**: `postAccounts(request: Accounts.PostAccountsRequest, options?: RequestOptions): ApiPromise<AccountsResponseResult, Accounts.PostAccountsError>`
- **Wire**: `POST /accounts`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AccountsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Accounts.PostAccountsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Accounts.PostAccountsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `AccountsRequest1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AccountsRequest1` | `accountsRequest1Schema` | `src/models/accounts-request1.ts` |
| `AccountsResponseResult` | `accountsResponseResultSchema` | `src/models/accounts-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### putAccountsId

- **Signature**: `putAccountsId(request: Accounts.PutAccountsIdRequest, options?: RequestOptions): ApiPromise<AccountsResponseResult, Accounts.PutAccountsIdError>`
- **Wire**: `PUT /accounts/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AccountsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Accounts.PutAccountsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Accounts.PutAccountsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `AccountsPutRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AccountsPutRequest` | `accountsPutRequestSchema` | `src/models/accounts-put-request.ts` |
| `AccountsResponseResult` | `accountsResponseResultSchema` | `src/models/accounts-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

