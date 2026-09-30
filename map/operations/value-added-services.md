<!-- Generated file — do not edit; regenerated with the SDK. -->

# ValueAddedServices — operations

Accessor: `client.valueAddedServices` · Source: `src/resources/value-added-services.ts` · 1 operation · Request and error types: namespace `ValueAddedServices`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getValueAddedServicesEnablementStatusTargetId

- **Signature**: `getValueAddedServicesEnablementStatusTargetId(request: ValueAddedServices.GetValueAddedServicesEnablementStatusTargetIdRequest, options?: RequestOptions): ApiPromise<VasEnablementStatusResponseResult, ValueAddedServices.GetValueAddedServicesEnablementStatusTargetIdError>`
- **Wire**: `GET /valueAddedServices/{service}/{target}/{targetId}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VasEnablementStatusResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `ValueAddedServices.GetValueAddedServicesEnablementStatusTargetIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ValueAddedServices.GetValueAddedServicesEnablementStatusTargetIdRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `service` | `path` | — | `VasEnablementStatusService1` | yes |
| `target` | `path` | — | `VasEnablementStatusTargetType1` | yes |
| `targetId` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VasEnablementStatusService1` | `vasEnablementStatusService1Schema` | `src/models/vas-enablement-status-service1.ts` |
| `VasEnablementStatusTargetType1` | `vasEnablementStatusTargetType1Schema` | `src/models/vas-enablement-status-target-type1.ts` |
| `VasEnablementStatusResponseResult` | `vasEnablementStatusResponseResultSchema` | `src/models/vas-enablement-status-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

