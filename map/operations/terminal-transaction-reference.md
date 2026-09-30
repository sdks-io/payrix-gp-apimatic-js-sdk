<!-- Generated file — do not edit; regenerated with the SDK. -->

# TerminalTransactionReference — operations

Accessor: `client.terminalTransactionReference` · Source: `src/resources/terminal-transaction-reference.ts` · 1 operation · Request and error types: namespace `TerminalTransactionReference`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### postTerminalTxnRefs

- **Signature**: `postTerminalTxnRefs(request: TerminalTransactionReference.PostTerminalTxnRefsRequest, options?: RequestOptions): ApiPromise<TerminalTxnRefResponseResult, TerminalTransactionReference.PostTerminalTxnRefsError>`
- **Wire**: `POST /terminalTxnRefs`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TerminalTxnRefResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `TerminalTransactionReference.PostTerminalTxnRefsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TerminalTransactionReference.PostTerminalTxnRefsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `TerminalTxnRefPostRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TerminalTxnRefPostRequest` | `terminalTxnRefPostRequestSchema` | `src/models/terminal-txn-ref-post-request.ts` |
| `TerminalTxnRefResponseResult` | `terminalTxnRefResponseResultSchema` | `src/models/terminal-txn-ref-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

