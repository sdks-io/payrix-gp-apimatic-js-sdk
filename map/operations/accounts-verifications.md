<!-- Generated file — do not edit; regenerated with the SDK. -->

# AccountsVerifications — operations

Accessor: `client.accountsVerifications` · Source: `src/resources/accounts-verifications.ts` · 2 operations · Request and error types: namespace `AccountsVerifications`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getAccountVerifications

- **Signature**: `getAccountVerifications(request: AccountsVerifications.GetAccountVerificationsRequest, options?: RequestOptions): ApiPromise<AccountVerificationsResponseResult, AccountsVerifications.GetAccountVerificationsError>`
- **Wire**: `GET /accountVerifications`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AccountVerificationsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `AccountsVerifications.GetAccountVerificationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountsVerifications.GetAccountVerificationsRequest` (7):

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
| `AccountVerificationsResponseResult` | `accountVerificationsResponseResultSchema` | `src/models/account-verifications-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getAccountVerificationsId

- **Signature**: `getAccountVerificationsId(request: AccountsVerifications.GetAccountVerificationsIdRequest, options?: RequestOptions): ApiPromise<AccountVerificationsResponseResult, AccountsVerifications.GetAccountVerificationsIdError>`
- **Wire**: `GET /accountVerifications/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AccountVerificationsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `AccountsVerifications.GetAccountVerificationsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountsVerifications.GetAccountVerificationsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AccountVerificationsResponseResult` | `accountVerificationsResponseResultSchema` | `src/models/account-verifications-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

