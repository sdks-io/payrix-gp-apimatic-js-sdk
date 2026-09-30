<!-- Generated file — do not edit; regenerated with the SDK. -->

# FraudSightEnablements — operations

Accessor: `client.fraudSightEnablements` · Source: `src/resources/fraud-sight-enablements.ts` · 2 operations · Request and error types: namespace `FraudSightEnablements`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getFraudSightEnablements

- **Signature**: `getFraudSightEnablements(request: FraudSightEnablements.GetFraudSightEnablementsRequest, options?: RequestOptions): ApiPromise<FraudSightEnablementsResponseResult, FraudSightEnablements.GetFraudSightEnablementsError>`
- **Wire**: `GET /valueAddedServices/fraudSight`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FraudSightEnablementsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `FraudSightEnablements.GetFraudSightEnablementsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FraudSightEnablements.GetFraudSightEnablementsRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pageNumber` | `query` | `page[number]` | `number` | no |
| `pageLimit` | `query` | `page[limit]` | `number` | no |
| `embed` | `query` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `search` | `header` | — | `string` | no |
| `totals` | `header` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FraudSightEnablementsResponseResult` | `fraudSightEnablementsResponseResultSchema` | `src/models/fraud-sight-enablements-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getFraudSightEnablementsId

- **Signature**: `getFraudSightEnablementsId(request: FraudSightEnablements.GetFraudSightEnablementsIdRequest, options?: RequestOptions): ApiPromise<FraudSightEnablementsResponseResult, FraudSightEnablements.GetFraudSightEnablementsIdError>`
- **Wire**: `GET /valueAddedServices/fraudSight/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FraudSightEnablementsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `FraudSightEnablements.GetFraudSightEnablementsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FraudSightEnablements.GetFraudSightEnablementsIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FraudSightEnablementsResponseResult` | `fraudSightEnablementsResponseResultSchema` | `src/models/fraud-sight-enablements-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

