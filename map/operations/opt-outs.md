<!-- Generated file — do not edit; regenerated with the SDK. -->

# OptOuts — operations

Accessor: `client.optOuts` · Source: `src/resources/opt-outs.ts` · 1 operation · Request and error types: namespace `OptOuts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### postOptouts

- **Signature**: `postOptouts(request: OptOuts.PostOptoutsRequest, options?: RequestOptions): ApiPromise<VasOptOutResponseResult, OptOuts.PostOptoutsError>`
- **Wire**: `POST /valueAddedServices/{service}/{target}/{targetId}/OptOut`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `VasOptOutResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `OptOuts.PostOptoutsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OptOuts.PostOptoutsRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `service` | `path` | — | `VasOptOutService1` | yes |
| `target` | `path` | — | `VasOptOutTargetType1` | yes |
| `targetId` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `VasOptOutPostRequestModel` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VasOptOutService1` | `vasOptOutService1Schema` | `src/models/vas-opt-out-service1.ts` |
| `VasOptOutTargetType1` | `vasOptOutTargetType1Schema` | `src/models/vas-opt-out-target-type1.ts` |
| `VasOptOutPostRequestModel` | `vasOptOutPostRequestModelSchema` | `src/models/vas-opt-out-post-request-model.ts` |
| `VasOptOutResponseResult` | `vasOptOutResponseResultSchema` | `src/models/vas-opt-out-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

