<!-- Generated file — do not edit; regenerated with the SDK. -->

# Statements — operations

Accessor: `client.statements` · Source: `src/resources/statements.ts` · 2 operations · Request and error types: namespace `Statements`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getStatements

- **Signature**: `getStatements(request: Statements.GetStatementsRequest, options?: RequestOptions): ApiPromise<StatementsResponseResult, Statements.GetStatementsError>`
- **Wire**: `GET /statements`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StatementsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Statements.GetStatementsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Statements.GetStatementsRequest` (7):

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
| `StatementsResponseResult` | `statementsResponseResultSchema` | `src/models/statements-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getStatementsId

- **Signature**: `getStatementsId(request: Statements.GetStatementsIdRequest, options?: RequestOptions): ApiPromise<StatementsResponseResult, Statements.GetStatementsIdError>`
- **Wire**: `GET /statements/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StatementsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Statements.GetStatementsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Statements.GetStatementsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `StatementsResponseResult` | `statementsResponseResultSchema` | `src/models/statements-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

