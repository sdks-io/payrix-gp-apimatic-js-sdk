<!-- Generated file — do not edit; regenerated with the SDK. -->

# StatementEntry — operations

Accessor: `client.statementEntry` · Source: `src/resources/statement-entry.ts` · 2 operations · Request and error types: namespace `StatementEntry`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getStatementEntries

- **Signature**: `getStatementEntries(request: StatementEntry.GetStatementEntriesRequest, options?: RequestOptions): ApiPromise<StatementEntriesResponseResult, StatementEntry.GetStatementEntriesError>`
- **Wire**: `GET /statementEntries`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StatementEntriesResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `StatementEntry.GetStatementEntriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `StatementEntry.GetStatementEntriesRequest` (7):

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
| `StatementEntriesResponseResult` | `statementEntriesResponseResultSchema` | `src/models/statement-entries-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getStatementEntriesId

- **Signature**: `getStatementEntriesId(request: StatementEntry.GetStatementEntriesIdRequest, options?: RequestOptions): ApiPromise<StatementEntriesResponseResult, StatementEntry.GetStatementEntriesIdError>`
- **Wire**: `GET /statementEntries/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StatementEntriesResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `StatementEntry.GetStatementEntriesIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `StatementEntry.GetStatementEntriesIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `StatementEntriesResponseResult` | `statementEntriesResponseResultSchema` | `src/models/statement-entries-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

