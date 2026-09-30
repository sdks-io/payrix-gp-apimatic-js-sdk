<!-- Generated file — do not edit; regenerated with the SDK. -->

# SaferPayments — operations

Accessor: `client.saferPayments` · Source: `src/resources/safer-payments.ts` · 2 operations · Request and error types: namespace `SaferPayments`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getSaferPayments

- **Signature**: `getSaferPayments(request: SaferPayments.GetSaferPaymentsRequest, options?: RequestOptions): ApiPromise<SaferPaymentsResponseResult, SaferPayments.GetSaferPaymentsError>`
- **Wire**: `GET /saferPayments`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SaferPaymentsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `SaferPayments.GetSaferPaymentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SaferPayments.GetSaferPaymentsRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pageNumber` | `query` | `page[number]` | `number` | no |
| `pageLimit` | `query` | `page[limit]` | `number` | no |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `search` | `header` | — | `string` | no |
| `totals` | `header` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SaferPaymentsResponseResult` | `saferPaymentsResponseResultSchema` | `src/models/safer-payments-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getSaferPaymentsId

- **Signature**: `getSaferPaymentsId(request: SaferPayments.GetSaferPaymentsIdRequest, options?: RequestOptions): ApiPromise<SaferPaymentsResponseResult, SaferPayments.GetSaferPaymentsIdError>`
- **Wire**: `GET /saferPayments/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SaferPaymentsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `SaferPayments.GetSaferPaymentsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SaferPayments.GetSaferPaymentsIdRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `embed` | `query` | `string` | no |
| `token` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SaferPaymentsResponseResult` | `saferPaymentsResponseResultSchema` | `src/models/safer-payments-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

