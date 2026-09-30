import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of terminal. This field is stored as an integer and must be between 1 and 419.
 * <details><summary>Valid Values</summary>
 *
 * - `125158LLC` - **12:51:58 LLC POS**
 *
 * - `3Delta` - **3 Delta Systems Virtual Terminal**
 *
 * - `3DeltaPws` - **3 Delta Systems Payment WorkSuite**
 *
 * - `911SoftwareCreditline` - **911 Software Credit Line**
 *
 * - `abcLiquors` - **''**
 *
 * - `abc610SE` - **''**
 *
 * - `achDirect` - **''**
 *
 * - `aciRcsSwitch` - **''**
 *
 * - `acoSoftware` - **''**
 *
 * - `activantFalcon` - **''**
 *
 * - `adsGilbarco` - **''**
 *
 * - `advancedMobilePayment` - **''**
 *
 * - `adyen` - **''**
 *
 * - `ahcc` - **''**
 *
 * - `ajb` - **''**
 *
 * - `ajbFipayDirectTandem`- **''**
 *
 * - `ajbIcip610` - **''**
 *
 * - `ajbRtsIbm` - **''**
 *
 * - `ajbRtsTandem` - **''**
 *
 * - `ajbBevn` - **''**
 *
 * - `ajbRue21` - **''**
 *
 * - `ajbSpoch` - **''**
 *
 * - `allureGlobal` - **''**
 *
 * - `alohaEnhanced610` - **''**
 *
 * - `alohaTerm` - **''**
 *
 * - `aprivaGateway` - **''**
 *
 * - `aprivaIwl255` - **''**
 *
 * - `apriva610` - **''**
 *
 * - `aprivapayAtt` - **''**
 *
 * - `aprivapayMobile` - **''**
 *
 * - `aptosEpicorRetail` - **''**
 *
 * - `ascom` - **''**
 *
 * - `asig` - **''**
 *
 * - `aurus` - **''**
 *
 * - `authorizeNet` - **''**
 *
 * - `automatedCashSystems` - **''**
 *
 * - `b2kSystems` - **''**
 *
 * - `bevnSoftware` - **''**
 *
 * - `billabong` - **''**
 *
 * - `bncb` - **''**
 *
 * - `bobEvans610` - **''**
 *
 * - `bookstoreManager` - **''**
 *
 * - `boost2Delta` - **''**
 *
 * - `boostBoraPayer` - **''**
 *
 * - `boostDirectInsite` - **''**
 *
 * - `boostMpg` - **''**
 *
 * - `breakawayVisionPos` - **''**
 *
 * - `bridgepay` - **''**
 *
 * - `brinkSoftware` - **''**
 *
 * - `buyAtab` - **''**
 *
 * - `caclGift` - **''**
 *
 * - `cardinalHealth610` - **''**
 *
 * - `cayan` - **''**
 *
 * - `ccciWebsite` - **''**
 *
 * - `cdsGlobalPaydq` - **''**
 *
 * - `cenposHostCapture` - **''**
 *
 * - `cenposIsoEmd` - **''**
 *
 * - `cfre610` - **''**
 *
 * - `chargePayments` - **''**
 *
 * - `chargesmartPaywareConnect` - **''**
 *
 * - `chrb610` - **''**
 *
 * - `chsp` - **''**
 *
 * - `ckfrIntrixSupercharge` - **''**
 *
 * - `clre610Salepoint` - **''**
 *
 * - `comdataSmartdesq` - **''**
 *
 * - `commerciant` - **''**
 *
 * - `crackerBarrel` - **''**
 *
 * - `crainAtlanta` - **''**
 *
 * - `craneVendingServices` - **''**
 *
 * - `creditCall` - **''**
 *
 * - `ctrSystems` - **''**
 *
 * - `cubicPaymentApplication` - **''**
 *
 * - `cyberSource` - **''**
 *
 * - `cyberSourceVsntConversion` - **''**
 *
 * - `cyberSourceVsntResellerBasic` - **''**
 *
 * - `cyberSourceVsntResellerPremier` - **''**
 *
 * - `dataBusnessSystems` - **''**
 *
 * - `dataCap` - **''**
 *
 * - `dataCapDialTran` - **''**
 *
 * - `dataCapEpayRepro` - **''**
 *
 * - `dataCapGiftEpay` - **''**
 *
 * - `dataCapIpTran` - **''**
 *
 * - `dataCapIpTranLt` - **''**
 *
 * - `dataCapIpTranLtMoble` - **''**
 *
 * - `dataCapNetEpay` - **''**
 *
 * - `dataCapTranRepro` - **''**
 *
 * - `dataCapTwinTran` - **''**
 *
 * - `dataCapTwinTxnServer` - **''**
 *
 * - `dataVantage` - **''**
 *
 * - `dataVantageFnln610` - **''**
 *
 * - `dbsTplusEnHanced` - **''**
 *
 * - `dbsTransactionPlus` - **''**
 *
 * - `dealBird` - **''**
 *
 * - `dejavoo` - **''**
 *
 * - `delego` - **''**
 *
 * - `digicom` - **''**
 *
 * - `directInsite` - **''**
 *
 * - `discGoTech` - **''**
 *
 * - `dl610Snt` - **''**
 *
 * - `dlglVarSoftware` - **''**
 *
 * - `dlgl610s` - **''**
 *
 * - `dominosAci` - **''**
 *
 * - `ecommercePlus` - **''**
 *
 * - `edgil` - **''**
 *
 * - `eesCompanies` - **''**
 *
 * - `elavonEnConcert610` - **''**
 *
 * - `elavonFuseboxGateway` - **''**
 *
 * - `elavonProtobase` - **''**
 *
 * - `elavonPayments` - **''**
 *
 * - `elpl610r` - **''**
 *
 * - `epayHealthcareMonetra` - **''**
 *
 * - `equinox` - **''**
 *
 * - `esdCard` - **''**
 *
 * - `eatouch` - **''**
 *
 * - `exatouchVsb` - **''**
 *
 * - `exit41` - **''**
 *
 * - `ezDine` - **''**
 *
 * - `ezRetail` - **''**
 *
 * - `fandango` - **''**
 *
 * - `firstGlobalBillingSapwalletVsb` - **''**
 *
 * - `fitb610s` - **''**
 * - `fredmeyr610` - **''**
 *
 * - `freedomPay` - **''**
 *
 * - `ftniGatewayEtran` - **''**
 *
 * - `futurePosVsb` - **''**
 *
 * - `GambleidTsevo` - **GambleID / TSEVO POS**
 *
 * - `Giftango` - **Giftango POS**
 *
 * - `Givex` - **Givex POS**
 *
 * - `gmsPaymentGateway` - **''**
 *
 * - `gmsPajb` - **''**
 *
 * - `gnctSoftware` - **''**
 *
 * - `goEMerchant` - **''**
 *
 * - `govolution` - **''**
 *
 * - `grantStreet` - **''**
 *
 * - `greatLakesScrip` - **''**
 *
 * - `greatLakesScripVar` - **''**
 *
 * - `gsiCommerce` - **''**
 *
 * - `handpoint` - **''**
 *
 * - `harleyOwnersGroup` - **''**
 *
 * - `highradius` - **''**
 *
 * - `hp` - **''**
 *
 * - `hypercom5500m` - **''**
 *
 * - `hypercomPaymentServer` - **''**
 *
 * - `hypercomT4205` - **''**
 *
 * - `hypercomT4205E2e` - **''**
 *
 * - `hypercomT4210` - **''**
 *
 * - `hypercomT4210E2e` - **''**
 *
 * - `hypercom4220Dial` - **''**
 *
 * - `hypercom4220DialE2e` - **''**
 *
 * - `hypercom4220Ssl` - **''**
 *
 * - `hypercom4220SslE2e` - **''**
 *
 * - `i2cVsb` - **''**
 *
 * - `ibmace` - **''**
 *
 * - `icVerify` - **''**
 *
 * - `incentPay` - **''**
 *
 * - `index` - **''**
 *
 * - `ingenico610` - **''**
 *
 * - `ingenico720` - **''**
 *
 * - `ingenicoIct2203xDial` - **''**
 *
 * - `ingenicoIct2203xDialE2ee` - **''**
 *
 * - `ingenicoIct2203xDialPilot` - **''**
 *
 * - `ingenicoIct2203xSsl` - **''**
 *
 * - `ingenicoIct2203xSslE2ee` - **''**
 *
 * - `ingenicoIct2203xSSLPilot` - **''**
 *
 * - `ingenicoIct220Ctls3xDial` - **''**
 *
 * - `ingenicoIct220Ctls3xDialEe2e` - **''**
 *
 * - `ingenicoIct220Ctls3xSsl` - **''**
 *
 * - `ingenicoIct220Ctls3xSslE2ee` - **''**
 *
 * - `ingenicoIct2503xDial` - **''**
 *
 * - `ingenicoIct2503xDialE2ee` - **''**
 *
 * - `ingenicoIct2503xSsl` - **''**
 *
 * - `ingenicoIct2503xSSLE2ee` - **''**
 *
 * - `ingenicoIwl222BtDial` - **''**
 *
 * - `ingenicoIwl222BtDialE2ee` - **''**
 *
 * - `ingenicoIwl222BtSsl` - **''**
 *
 * - `ingenicoIwl222BtSSlE2ee` - **''**
 *
 * - `ingenicoIwl252BtDial` - **''**
 *
 * - `ingenicoIw252BtDialE2ee` - **''**
 *
 * - `ingenicoIw252BtSsl` - **''**
 *
 * - `ingenicoIw252BtSslE2ee` - **''**
 *
 * - `ingenicoIw2553g` - **''**
 *
 * - `ingenicoIw2553gE2ee` - **''**
 *
 * - `ingenicoSiEnterprise` - **''**
 *
 * - `instamed` - **''**
 *
 * - `ipayGateway` - **''**
 *
 * - `isd` - **''**
 *
 * - `islandPacific` - **''**
 *
 * - `isvOpenmotionVsb` - **''**
 *
 * - `isv510` - **''**
 *
 * - `isv600` - **''**
 *
 * - `isv610` - **''**
 *
 * - `isvVsk` - **''**
 *
 * - `itransact` - **''**
 *
 * - `jewlSoftware` - **''**
 *
 * - `jockeyEcomm` - **''**
 *
 * - `jockeyRetail` - **''**
 *
 * - `kachyng` - **''**
 *
 * - `klik` - **''**
 *
 * - `kmartGift` - **''**
 *
 * - `kubra` - **''**
 *
 * - `lightYear` - **''**
 *
 * - `linked2Pay` - **''**
 *
 * - `longRangeSystemsLrs` - **''**
 *
 * - `lumberVisaK` - **''**
 *
 * - `lumgPos` - **''**
 *
 * - `magicWrighter` - **''**
 *
 * - `magnetCardServices` - **''**
 *
 * - `mainstreetMonetra510` - **''**
 *
 * - `mainstreetMonetra610` - **''**
 *
 * - `mastercardOpenapi` - **''**
 *
 * - `mastercardPaymentGateway` - **''**
 *
 * - `meiApriva` - **''**
 *
 * - `menusoftDigitalDining` - **''**
 *
 * - `merchantLinkCDG` - **''**
 *
 * - `merchantLinkCredit` - **''**
 *
 * - `meritSolar` - **''**
 *
 * - `microsSymphony` - **''**
 *
 * - `microsalePos` - **''**
 *
 * - `midniteExpressSlipstream` - **''**
 *
 * - `mightyTicket` - **''**
 *
 * - `milleniumRetailSolutions` - **''**
 *
 * - `mobileAccept` - **''**
 *
 * - `mobileAcceptFlatRate` - **''**
 *
 * - `mobileCheckoutQms` - **''**
 *
 * - `mobileCheckoutStandard` - **''**
 *
 * - `monetraAuth` - **''**
 *
 * - `monroMuffler` - **''**
 *
 * - `mpayGateway` - **''**
 *
 * - `mtxepsWineps` - **''**
 *
 * - `mvsp` - **''**
 *
 * - `ncrAdvancedRestaurant` - **''**
 *
 * - `ncrCinema` - **''**
 *
 * - `ncrCounterpoint510` - **''**
 *
 * - `ncrCounterpoint610` - **''**
 *
 * - `ncrRetalixConnectedPayments` - **''**
 *
 * - `ncrSilver` - **''**
 *
 * - `ncrSilverPro` - **''**
 *
 * - `ncrSilverProQms` - **''**
 *
 * - `neoGames610` - **''**
 *
 * - `networkMerchants` - **''**
 *
 * - `nsbEps` - **''**
 *
 * - `nourdersOdp` - **''**
 *
 * - `nurit2159` - **''**
 *
 * - `nurit8400EDial` - **''**
 *
 * - `oCharleys` - **''**
 *
 * - `olo` - **''**
 *
 * - `opConnect` - **''**
 *
 * - `optimalPaymentsGateway` - **''**
 *
 * - `orccCollectPay` - **''**
 *
 * - `orccAciWorldwide` - **''**
 *
 * - `orderTalk` - **''**
 *
 * - `paVitalcheck` - **''**
 *
 * - `paFidelityExpress` - **''**
 *
 * - `paGrantStreet` - **''**
 *
 * - `parkmobile` - **''**
 *
 * - `paxSp30Casio` - **''**
 *
 * - `payGov` - **''**
 *
 * - `paydiantSj` - **''**
 *
 * - `payFirstEdcVpos` - **''**
 *
 * - `paypalPayflowLink` - **''**
 *
 * - `paypalPayflowLinkReseller` - **''**
 *
 * - `paypalPayflowPro` - **''**
 *
 * - `paypalPayflowProReseller` - **''**
 *
 * - `payright` - **''**
 *
 * - `paytechVsb` - **''**
 *
 * - `pcAmerica` - **''**
 *
 * - `PLSTQ610` - **''**
 *
 * - `plugNPlay` - **''**
 *
 * - `poynt` - **''**
 *
 * - `precida` - **''**
 *
 * - `pricetonCardConnect` - **''**
 *
 * - `princetonEcommCollectpay` - **''**
 *
 * - `princetonPayments` - **''**
 *
 * - `princetonPayware` - **''**
 *
 * - `propSoftware` - **''**
 *
 * - `purecommerceVsb` - **''**
 *
 * - `pxpSolutionsRetail` - **''**
 *
 * - `rediantRposLighthouse` - **''**
 *
 * - `rainbowApparel` - **''**
 *
 * - `rdyc610s` - **''**
 *
 * - `redOakPs` - **''**
 *
 * - `redfinNetwork` - **''**
 *
 * - `remcoSoftware` - **''**
 *
 * - `rentACenter` - **''**
 *
 * - `reproOnlyIngIct220Dial` - **''**
 *
 * - `reproOnlyIngIct220DialE2ee` - **''**
 *
 * - `reproOnlyIngIct220SslE2ee` - **''**
 *
 * - `reproOnlyIngIct250Dial` - **''**
 *
 * - `reproOnlyIngIct250DialE2ee` - **''**
 *
 * - `reproOnlyIngIct250Ssl` - **''**
 *
 * - `reproOnlyIngIct250SslE2ee` - **''**
 *
 * - `reproOnlyVerifoneVx520DcDial` - **''**
 *
 * - `reproOnlyVerifoneVx520DcSsl` - **''**
 *
 * - `reproOnlyVerifoneVx520DialCtls` - **''**
 *
 * - `reproOnlyVerifoneVx520SslCtls` - **''**
 *
 * - `retrieverSoftware` - **''**
 *
 * - `revlinkCollect` - **''**
 *
 * - `revtrak` - **''**
 *
 * - `reamMobile` - **''**
 *
 * - `roamMobileTest` - **''**
 *
 * - `roamData` - **''**
 *
 * - `salepoint` - **''**
 *
 * - `salepointClaires` - **''**
 *
 * - `sbcSolutions` - **''**
 *
 * - `secureTrading` - **''**
 *
 * - `sequoiaRetialSystems` - **''**
 *
 * - `shci610` - **''**
 *
 * - `shift4OnTheNet` - **''**
 *
 * - `sightlinePayments` - **''**
 *
 * - `slimCdEntNonReseller` - **''**
 *
 * - `slimCdEnterprise` - **''**
 *
 * - `slimCdPro` - **''**
 *
 * - `slimCdProNonReseller` - **''**
 *
 * - `snlh610` - **''**
 *
 * - `southernDataComm` - **''**
 *
 * - `spsEzpay` - **''**
 *
 * - `squirrelSystems` - **''**
 *
 * - `ster610` - **''**
 *
 * - `storisVision9` - **''**
 *
 * - `ststSoftware` - **''**
 *
 * - `talbots` - **''**
 *
 * - `tangiblePayments` - **''**
 *
 * - `tapToPayIphone` - **''**
 *
 * - `tenderRetail` - **''**
 *
 * - `tillster` - **''**
 *
 * - `tnspayGateway` - **''**
 *
 * - `toast` - **''**
 *
 * - `toyzPos` - **''**
 *
 * - `transactionWirelessSvs` - **''**
 *
 * - `transax` - **''**
 *
 * - `tranzgate` - **''**
 *
 * - `trem610` - **''**
 *
 * - `triversity` - **''**
 *
 * - `triversityPos` - **''**
 *
 * - `trustcommVault610` - **''**
 *
 * - `trustcommVault600` - **''**
 *
 * - `trustcommerce2011` - **''**
 *
 * - `tsysAmexPipPcSoftware` - **''**
 *
 * - `tsysAmexPipTerminal` - **''**
 *
 * - `tsysDialPay` - **''**
 *
 * - `tsysPosPort` - **''**
 *
 * - `twitpay` - **''**
 *
 * - `uhaul` - **''**
 *
 * - `uicBezel8` - **''**
 *
 * - `upSolution610` - **''**
 *
 * - `usaEpay` - **''**
 *
 * - `usfs` - **''**
 *
 * - `ventek` - **''**
 *
 * - `verifone` - **''**
 *
 * - `verifone510Terminal` - **''**
 *
 * - `verifone600Terminal` - **''**
 *
 * - `verifone610` - **''**
 *
 * - `verifoneOmni3200` - **''**
 *
 * - `verifonePaywareConnect` - **''**
 *
 * - `verifonePaywareMobile` - **''**
 *
 * - `verifonePaywarePc` - **''**
 *
 * - `verifonePaywareTranactRita` - **''**
 *
 * - `verifonePcChargeGoSoftware` - **''**
 *
 * - `verifonePoint` - **''**
 *
 * - `verifonePointEntMx` - **''**
 *
 * - `verifonePointEntVx` - **''**
 *
 * - `verifoneRuby` - **''**
 *
 * - `verifoneVx510` - **''**
 *
 * - `verifoneVx510DcDial` - **''**
 *
 * - `verifoneVx510DcIp` - **''**
 *
 * - `verifoneVx510DcSsl` - **''**
 *
 * - `verifoneVx510le` - **''**
 *
 * - `verifoneVx520DcDialCtlsE2ee` - **''**
 *
 * - `verifoneVx520DcDialE2ee` - **''**
 *
 * - `verifoneVx520DcIp1` - **''**
 *
 * - `verifoneVx520DcIp2` - **''**
 *
 * - `verifoneVx520DcIpCtls` - **''**
 *
 * - `verifoneVx520DcIpCtlsE2ee` - **''**
 *
 * - `verifoneVx520DcSslCtlsE2ee` - **''**
 *
 * - `verifoneVx520DcSslE2ee` - **''**
 *
 * - `verifoneVx520DialOnly` - **''**
 *
 * - `verifoneVx570Dial` - **''**
 *
 * - `verifoneVx570Ip` - **''**
 *
 * - `verifoneVx570Ssl` - **''**
 *
 * - `verifoneVx6803gGprs` - **''**
 *
 * - `vicoSoftware` - **''**
 *
 * - `virtualTerminal` - **''**
 *
 * - `vistaEntertainment` - **''**
 * - `vitalcheck` - **''**
 *
 * - `vmcAddOnAndroidByodQmd` - **''**
 *
 * - `vmcAddOnAndroidByodStandard` - **''**
 *
 * - `vmcAddOnBundleByodQms` - **''**
 *
 * - `vmcAddOnBundleByodStandard` - **''**
 *
 * - `vmcAddOnBundleCellularQmd` - **''**
 *
 * - `vmcAddOnBundleCellularStandard` - **''**
 *
 * - `vmcAddOnBundleWifiQmd` - **''**
 *
 * - `vmcAddOnBundleWifiStandard` - **''**
 *
 * - `vmcFieldBundleByodQmd` - **''**
 *
 * - `vmcFieldBundleByodStandard` - **''**
 *
 * - `vmcFieldBundleCellularQms` - **''**
 *
 * - `vmcFieldBundleCellularStandard` - **''**
 *
 * - `vmcStoreAndroidByodQms` - **''**
 *
 * - `vmcStoreAndroidByodStandard` - **''**
 *
 * - `vmcStoreBundleByodQms` - **''**
 *
 * - `vmcStoreBundleByodStandard` - **''**
 *
 * - `vmcStoreBundleCellularQms` - **''**
 *
 * - `vmcStoreBundleCellularStandard` - **''**
 *
 * - `vmcStoreBundleWifiQms` - **''**
 *
 * - `vmcStoreBundleWifiStandard` - **''**
 *
 * - `vPlus` - **''**
 *
 * - `vsb` - **''**
 *
 * - `vsbGreenbeanRecycle` - **''**
 *
 * - `vsbKaizen` - **''**
 *
 * - `vsbOrderbridge` - **''**
 *
 * - `vsbPhonixManagedNetwork` - **''**
 *
 * - `vsbSamurai` - **''**
 *
 * - `vsbVisat` - **''**
 *
 * - `vsbWiretrust` - **''**
 *
 * - `vsbXgateway` - **''**
 *
 * - `wandGift` - **''**
 *
 *
 * - `waySystemsMtt5000` - **''**
 *
 * - `wendysCom` - **''**
 *
 * - `whirl` - **''**
 *
 * - `winn610s` - **''**
 *
 * - `xpaySoftware` - **''**
 *
 * - `xpient610` - **''**
 *
 * - `xpientSolutions` - **''**
 *
 * </details>
 */
export const TerminalType1 = {
  _125158Llc: "125158LLC",
  _3Delta: "3Delta",
  _3DeltaPws: "3DeltaPws",
  _911SoftwareCreditline: "911SoftwareCreditline",
  AbcLiquors: "abcLiquors",
  Abc610Se: "abc610SE",
  AchDirect: "achDirect",
  AciRcsSwitch: "aciRcsSwitch",
  AcoSoftware: "acoSoftware",
  ActivantFalcon: "activantFalcon",
  AdsGilbarco: "adsGilbarco",
  AdvancedMobilePayment: "advancedMobilePayment",
  Adyen: "adyen",
  Ahcc: "ahcc",
  Ajb: "ajb",
  AjbFipayDirectTandem: "ajbFipayDirectTandem",
  AjbIcip610: "ajbIcip610",
  AjbRtsIbm: "ajbRtsIbm",
  AjbRtsTandem: "ajbRtsTandem",
  AjbBevn: "ajbBevn",
  AjbRue21: "ajbRue21",
  AjbSpoch: "ajbSpoch",
  AllureGlobal: "allureGlobal",
  AlohaEnhanced610: "alohaEnhanced610",
  AlohaTerm: "alohaTerm",
  AprivaGateway: "aprivaGateway",
  AprivaIwl255: "aprivaIwl255",
  Apriva610: "apriva610",
  AprivapayAtt: "aprivapayAtt",
  AprivapayMobile: "aprivapayMobile",
  AptosEpicorRetail: "aptosEpicorRetail",
  Ascom: "ascom",
  Asig: "asig",
  Aurus: "aurus",
  AuthorizeNet: "authorizeNet",
  AutomatedCashSystems: "automatedCashSystems",
  B2KSystems: "b2kSystems",
  BevnSoftware: "bevnSoftware",
  Billabong: "billabong",
  Bncb: "bncb",
  BobEvans610: "bobEvans610",
  BookstoreManager: "bookstoreManager",
  Boost2Delta: "boost2Delta",
  BoostBoraPayer: "boostBoraPayer",
  BoostDirectInsite: "boostDirectInsite",
  BoostMpg: "boostMpg",
  BreakawayVisionPos: "breakawayVisionPos",
  Bridgepay: "bridgepay",
  BrinkSoftware: "brinkSoftware",
  BuyAtab: "buyAtab",
  CaclGift: "caclGift",
  CardinalHealth610: "cardinalHealth610",
  Cayan: "cayan",
  CcciWebsite: "ccciWebsite",
  CdsGlobalPaydq: "cdsGlobalPaydq",
  CenposHostCapture: "cenposHostCapture",
  CenposIsoEmd: "cenposIsoEmd",
  Cfre610: "cfre610",
  ChargePayments: "chargePayments",
  ChargesmartPaywareConnect: "chargesmartPaywareConnect",
  Chrb610: "chrb610",
  Chsp: "chsp",
  CkfrIntrixSupercharge: "ckfrIntrixSupercharge",
  Clre610Salepoint: "clre610Salepoint",
  ComdataSmartdesq: "comdataSmartdesq",
  Commerciant: "commerciant",
  CrackerBarrel: "crackerBarrel",
  CrainAtlanta: "crainAtlanta",
  CraneVendingServices: "craneVendingServices",
  CreditCall: "creditCall",
  CtrSystems: "ctrSystems",
  CubicPaymentApplication: "cubicPaymentApplication",
  CyberSource: "cyberSource",
  CyberSourceVsntConversion: "cyberSourceVsntConversion",
  CyberSourceVsntResellerBasic: "cyberSourceVsntResellerBasic",
  CyberSourceVsntResellerPremier: "cyberSourceVsntResellerPremier",
  DataBusnessSystems: "dataBusnessSystems",
  DataCap: "dataCap",
  DataCapDialTran: "dataCapDialTran",
  DataCapEpayRepro: "dataCapEpayRepro",
  DataCapGiftEpay: "dataCapGiftEpay",
  DataCapIpTran: "dataCapIpTran",
  DataCapIpTranLt: "dataCapIpTranLt",
  DataCapIpTranLtMoble: "dataCapIpTranLtMoble",
  DataCapNetEpay: "dataCapNetEpay",
  DataCapTranRepro: "dataCapTranRepro",
  DataCapTwinTran: "dataCapTwinTran",
  DataCapTwinTxnServer: "dataCapTwinTxnServer",
  DataVantage: "dataVantage",
  DataVantageFnln610: "dataVantageFnln610",
  DbsTplusEnHanced: "dbsTplusEnHanced",
  DbsTransactionPlus: "dbsTransactionPlus",
  DealBird: "dealBird",
  Dejavoo: "dejavoo",
  Delego: "delego",
  Digicom: "digicom",
  DirectInsite: "directInsite",
  DiscGoTech: "discGoTech",
  Dl610Snt: "dl610Snt",
  DlglVarSoftware: "dlglVarSoftware",
  Dlgl610S: "dlgl610s",
  DominosAci: "dominosAci",
  EcommercePlus: "ecommercePlus",
  Edgil: "edgil",
  EesCompanies: "eesCompanies",
  ElavonEnConcert610: "elavonEnConcert610",
  ElavonFuseboxGateway: "elavonFuseboxGateway",
  ElavonProtobase: "elavonProtobase",
  ElavonPayments: "elavonPayments",
  Elpl610R: "elpl610r",
  EpayHealthcareMonetra: "epayHealthcareMonetra",
  Equinox: "equinox",
  EsdCard: "esdCard",
  Eatouch: "eatouch",
  ExatouchVsb: "exatouchVsb",
  Exit41: "exit41",
  ExpressTriPos: "expressTriPos",
  EzDine: "ezDine",
  EzRetail: "ezRetail",
  Fandango: "fandango",
  FirstGlobalBillingSapwalletVsb: "firstGlobalBillingSapwalletVsb",
  Fitb610S: "fitb610s",
  Fredmeyr610: "fredmeyr610",
  FreedomPay: "freedomPay",
  FtniGatewayEtran: "ftniGatewayEtran",
  FuturePosVsb: "futurePosVsb",
  GambleidTsevo: "GambleidTsevo",
  Giftango: "Giftango",
  Givex: "Givex",
  GmsPaymentGateway: "gmsPaymentGateway",
  GmsPajb: "gmsPajb",
  GnctSoftware: "gnctSoftware",
  GoEMerchant: "goEMerchant",
  Govolution: "govolution",
  GrantStreet: "grantStreet",
  GreatLakesScrip: "greatLakesScrip",
  GreatLakesScripVar: "greatLakesScripVar",
  GsiCommerce: "gsiCommerce",
  Handpoint: "handpoint",
  HarleyOwnersGroup: "harleyOwnersGroup",
  Highradius: "highradius",
  Hp: "hp",
  Hypercom5500M: "hypercom5500m",
  HypercomPaymentServer: "hypercomPaymentServer",
  HypercomT4205: "hypercomT4205",
  HypercomT4205E2E: "hypercomT4205E2e",
  HypercomT4210: "hypercomT4210",
  HypercomT4210E2E: "hypercomT4210E2e",
  Hypercom4220Dial: "hypercom4220Dial",
  Hypercom4220DialE2E: "hypercom4220DialE2e",
  Hypercom4220Ssl: "hypercom4220Ssl",
  Hypercom4220SslE2E: "hypercom4220SslE2e",
  I2CVsb: "i2cVsb",
  Ibmace: "ibmace",
  IcVerify: "icVerify",
  IncentPay: "incentPay",
  Index: "index",
  Ingenico610: "ingenico610",
  Ingenico720: "ingenico720",
  IngenicoIct2203XDial: "ingenicoIct2203xDial",
  IngenicoIct2203XDialE2Ee: "ingenicoIct2203xDialE2ee",
  IngenicoIct2203XDialPilot: "ingenicoIct2203xDialPilot",
  IngenicoIct2203XSsl: "ingenicoIct2203xSsl",
  IngenicoIct2203XSslE2Ee: "ingenicoIct2203xSslE2ee",
  IngenicoIct2203XSslPilot: "ingenicoIct2203xSSLPilot",
  IngenicoIct220Ctls3XDial: "ingenicoIct220Ctls3xDial",
  IngenicoIct220Ctls3XDialEe2E: "ingenicoIct220Ctls3xDialEe2e",
  IngenicoIct220Ctls3XSsl: "ingenicoIct220Ctls3xSsl",
  IngenicoIct220Ctls3XSslE2Ee: "ingenicoIct220Ctls3xSslE2ee",
  IngenicoIct2503XDial: "ingenicoIct2503xDial",
  IngenicoIct2503XDialE2Ee: "ingenicoIct2503xDialE2ee",
  IngenicoIct2503XSsl: "ingenicoIct2503xSsl",
  IngenicoIct2503XSsle2Ee: "ingenicoIct2503xSSLE2ee",
  IngenicoIwl222BtDial: "ingenicoIwl222BtDial",
  IngenicoIwl222BtDialE2Ee: "ingenicoIwl222BtDialE2ee",
  IngenicoIwl222BtSsl: "ingenicoIwl222BtSsl",
  IngenicoIwl222BtSSlE2Ee: "ingenicoIwl222BtSSlE2ee",
  IngenicoIwl252BtDial: "ingenicoIwl252BtDial",
  IngenicoIw252BtDialE2Ee: "ingenicoIw252BtDialE2ee",
  IngenicoIw252BtSsl: "ingenicoIw252BtSsl",
  IngenicoIw252BtSslE2Ee: "ingenicoIw252BtSslE2ee",
  IngenicoIw2553G: "ingenicoIw2553g",
  IngenicoIw2553GE2Ee: "ingenicoIw2553gE2ee",
  IngenicoSiEnterprise: "ingenicoSiEnterprise",
  Instamed: "instamed",
  IpayGateway: "ipayGateway",
  Isd: "isd",
  IslandPacific: "islandPacific",
  IsvOpenmotionVsb: "isvOpenmotionVsb",
  Isv510: "isv510",
  Isv600: "isv600",
  Isv610: "isv610",
  IsvVsk: "isvVsk",
  Itransact: "itransact",
  JewlSoftware: "jewlSoftware",
  JockeyEcomm: "jockeyEcomm",
  JockeyRetail: "jockeyRetail",
  Kachyng: "kachyng",
  Klik: "klik",
  KmartGift: "kmartGift",
  Kubra: "kubra",
  LightYear: "lightYear",
  Linked2Pay: "linked2Pay",
  LongRangeSystemsLrs: "longRangeSystemsLrs",
  LumberVisaK: "lumberVisaK",
  LumgPos: "lumgPos",
  MagicWrighter: "magicWrighter",
  MagnetCardServices: "magnetCardServices",
  MainstreetMonetra510: "mainstreetMonetra510",
  MainstreetMonetra610: "mainstreetMonetra610",
  MastercardOpenapi: "mastercardOpenapi",
  MastercardPaymentGateway: "mastercardPaymentGateway",
  MeiApriva: "meiApriva",
  MenusoftDigitalDining: "menusoftDigitalDining",
  MerchantLinkCdg: "merchantLinkCDG",
  MerchantLinkCredit: "merchantLinkCredit",
  MeritSolar: "meritSolar",
  MicrosSymphony: "microsSymphony",
  MicrosalePos: "microsalePos",
  MidniteExpressSlipstream: "midniteExpressSlipstream",
  MightyTicket: "mightyTicket",
  MilleniumRetailSolutions: "milleniumRetailSolutions",
  MobileAccept: "mobileAccept",
  MobileAcceptFlatRate: "mobileAcceptFlatRate",
  MobileCheckoutQms: "mobileCheckoutQms",
  MobileCheckoutStandard: "mobileCheckoutStandard",
  MonetraAuth: "monetraAuth",
  MonroMuffler: "monroMuffler",
  MpayGateway: "mpayGateway",
  MtxepsWineps: "mtxepsWineps",
  Mvsp: "mvsp",
  NcrAdvancedRestaurant: "ncrAdvancedRestaurant",
  NcrCinema: "ncrCinema",
  NcrCounterpoint510: "ncrCounterpoint510",
  NcrCounterpoint610: "ncrCounterpoint610",
  NcrRetalixConnectedPayments: "ncrRetalixConnectedPayments",
  NcrSilver: "ncrSilver",
  NcrSilverPro: "ncrSilverPro",
  NcrSilverProQms: "ncrSilverProQms",
  NeoGames610: "neoGames610",
  NetworkMerchants: "networkMerchants",
  NsbEps: "nsbEps",
  NourdersOdp: "nourdersOdp",
  Nurit2159: "nurit2159",
  Nurit8400EDial: "nurit8400EDial",
  OCharleys: "oCharleys",
  Olo: "olo",
  OpConnect: "opConnect",
  OptimalPaymentsGateway: "optimalPaymentsGateway",
  OrccCollectPay: "orccCollectPay",
  OrccAciWorldwide: "orccAciWorldwide",
  OrderTalk: "orderTalk",
  PaVitalcheck: "paVitalcheck",
  PaFidelityExpress: "paFidelityExpress",
  PaGrantStreet: "paGrantStreet",
  Parkmobile: "parkmobile",
  PaxSp30Casio: "paxSp30Casio",
  PayGov: "payGov",
  PaydiantSj: "paydiantSj",
  PayFirstEdcVpos: "payFirstEdcVpos",
  PaypalPayflowLink: "paypalPayflowLink",
  PaypalPayflowLinkReseller: "paypalPayflowLinkReseller",
  PaypalPayflowPro: "paypalPayflowPro",
  PaypalPayflowProReseller: "paypalPayflowProReseller",
  Payright: "payright",
  PaytechVsb: "paytechVsb",
  PcAmerica: "pcAmerica",
  Plstq610: "PLSTQ610",
  PlugNPlay: "plugNPlay",
  Poynt: "poynt",
  Precida: "precida",
  PricetonCardConnect: "pricetonCardConnect",
  PrincetonEcommCollectpay: "princetonEcommCollectpay",
  PrincetonPayments: "princetonPayments",
  PrincetonPayware: "princetonPayware",
  PropSoftware: "propSoftware",
  PurecommerceVsb: "purecommerceVsb",
  PxpSolutionsRetail: "pxpSolutionsRetail",
  RediantRposLighthouse: "rediantRposLighthouse",
  RainbowApparel: "rainbowApparel",
  Rdyc610S: "rdyc610s",
  RedOakPs: "redOakPs",
  RedfinNetwork: "redfinNetwork",
  RemcoSoftware: "remcoSoftware",
  RentACenter: "rentACenter",
  ReproOnlyIngIct220Dial: "reproOnlyIngIct220Dial",
  ReproOnlyIngIct220DialE2Ee: "reproOnlyIngIct220DialE2ee",
  ReproOnlyIngIct220SslE2Ee: "reproOnlyIngIct220SslE2ee",
  ReproOnlyIngIct250Dial: "reproOnlyIngIct250Dial",
  ReproOnlyIngIct250DialE2Ee: "reproOnlyIngIct250DialE2ee",
  ReproOnlyIngIct250Ssl: "reproOnlyIngIct250Ssl",
  ReproOnlyIngIct250SslE2Ee: "reproOnlyIngIct250SslE2ee",
  ReproOnlyVerifoneVx520DcDial: "reproOnlyVerifoneVx520DcDial",
  ReproOnlyVerifoneVx520DcSsl: "reproOnlyVerifoneVx520DcSsl",
  ReproOnlyVerifoneVx520DialCtls: "reproOnlyVerifoneVx520DialCtls",
  ReproOnlyVerifoneVx520SslCtls: "reproOnlyVerifoneVx520SslCtls",
  RetrieverSoftware: "retrieverSoftware",
  RevlinkCollect: "revlinkCollect",
  Revtrak: "revtrak",
  ReamMobile: "reamMobile",
  RoamMobileTest: "roamMobileTest",
  RoamData: "roamData",
  Salepoint: "salepoint",
  SalepointClaires: "salepointClaires",
  SbcSolutions: "sbcSolutions",
  SecureTrading: "secureTrading",
  SequoiaRetialSystems: "sequoiaRetialSystems",
  Shci610: "shci610",
  Shift4OnTheNet: "shift4OnTheNet",
  SightlinePayments: "sightlinePayments",
  SlimCdEntNonReseller: "slimCdEntNonReseller",
  SlimCdEnterprise: "slimCdEnterprise",
  SlimCdPro: "slimCdPro",
  SlimCdProNonReseller: "slimCdProNonReseller",
  Snlh610: "snlh610",
  SouthernDataComm: "southernDataComm",
  SpsEzpay: "spsEzpay",
  SquirrelSystems: "squirrelSystems",
  Ster610: "ster610",
  StorisVision9: "storisVision9",
  StstSoftware: "ststSoftware",
  Talbots: "talbots",
  TangiblePayments: "tangiblePayments",
  TapToPayIphone: "tapToPayIphone",
  TenderRetail: "tenderRetail",
  Tillster: "tillster",
  TnspayGateway: "tnspayGateway",
  Toast: "toast",
  ToyzPos: "toyzPos",
  TransactionWirelessSvs: "transactionWirelessSvs",
  Transax: "transax",
  Tranzgate: "tranzgate",
  Trem610: "trem610",
  Triversity: "triversity",
  TriversityPos: "triversityPos",
  TrustcommVault610: "trustcommVault610",
  TrustcommVault600: "trustcommVault600",
  Trustcommerce2011: "trustcommerce2011",
  TsysAmexPipPcSoftware: "tsysAmexPipPcSoftware",
  TsysAmexPipTerminal: "tsysAmexPipTerminal",
  TsysDialPay: "tsysDialPay",
  TsysPosPort: "tsysPosPort",
  Twitpay: "twitpay",
  Uhaul: "uhaul",
  UicBezel8: "uicBezel8",
  UpSolution610: "upSolution610",
  UsaEpay: "usaEpay",
  Usfs: "usfs",
  Ventek: "ventek",
  Verifone: "verifone",
  Verifone510Terminal: "verifone510Terminal",
  Verifone600Terminal: "verifone600Terminal",
  Verifone610: "verifone610",
  VerifoneOmni3200: "verifoneOmni3200",
  VerifonePaywareConnect: "verifonePaywareConnect",
  VerifonePaywareMobile: "verifonePaywareMobile",
  VerifonePaywarePc: "verifonePaywarePc",
  VerifonePaywareTranactRita: "verifonePaywareTranactRita",
  VerifonePcChargeGoSoftware: "verifonePcChargeGoSoftware",
  VerifonePoint: "verifonePoint",
  VerifonePointEntMx: "verifonePointEntMx",
  VerifonePointEntVx: "verifonePointEntVx",
  VerifoneRuby: "verifoneRuby",
  VerifoneVx510: "verifoneVx510",
  VerifoneVx510DcDial: "verifoneVx510DcDial",
  VerifoneVx510DcIp: "verifoneVx510DcIp",
  VerifoneVx510DcSsl: "verifoneVx510DcSsl",
  VerifoneVx510Le: "verifoneVx510le",
  VerifoneVx520DcDialCtlsE2Ee: "verifoneVx520DcDialCtlsE2ee",
  VerifoneVx520DcDialE2Ee: "verifoneVx520DcDialE2ee",
  VerifoneVx520DcIp1: "verifoneVx520DcIp1",
  VerifoneVx520DcIp2: "verifoneVx520DcIp2",
  VerifoneVx520DcIpCtls: "verifoneVx520DcIpCtls",
  VerifoneVx520DcIpCtlsE2Ee: "verifoneVx520DcIpCtlsE2ee",
  VerifoneVx520DcSslCtlsE2Ee: "verifoneVx520DcSslCtlsE2ee",
  VerifoneVx520DcSslE2Ee: "verifoneVx520DcSslE2ee",
  VerifoneVx520DialOnly: "verifoneVx520DialOnly",
  VerifoneVx570Dial: "verifoneVx570Dial",
  VerifoneVx570Ip: "verifoneVx570Ip",
  VerifoneVx570Ssl: "verifoneVx570Ssl",
  VerifoneVx6803GGprs: "verifoneVx6803gGprs",
  VicoSoftware: "vicoSoftware",
  VirtualTerminal: "virtualTerminal",
  VistaEntertainment: "vistaEntertainment",
  Vitalcheck: "vitalcheck",
  VmcAddOnAndroidByodQmd: "vmcAddOnAndroidByodQmd",
  VmcAddOnAndroidByodStandard: "vmcAddOnAndroidByodStandard",
  VmcAddOnBundleByodQms: "vmcAddOnBundleByodQms",
  VmcAddOnBundleByodStandard: "vmcAddOnBundleByodStandard",
  VmcAddOnBundleCellularQmd: "vmcAddOnBundleCellularQmd",
  VmcAddOnBundleCellularStandard: "vmcAddOnBundleCellularStandard",
  VmcAddOnBundleWifiQmd: "vmcAddOnBundleWifiQmd",
  VmcAddOnBundleWifiStandard: "vmcAddOnBundleWifiStandard",
  VmcFieldBundleByodQmd: "vmcFieldBundleByodQmd",
  VmcFieldBundleByodStandard: "vmcFieldBundleByodStandard",
  VmcFieldBundleCellularQms: "vmcFieldBundleCellularQms",
  VmcFieldBundleCellularStandard: "vmcFieldBundleCellularStandard",
  VmcStoreAndroidByodQms: "vmcStoreAndroidByodQms",
  VmcStoreAndroidByodStandard: "vmcStoreAndroidByodStandard",
  VmcStoreBundleByodQms: "vmcStoreBundleByodQms",
  VmcStoreBundleByodStandard: "vmcStoreBundleByodStandard",
  VmcStoreBundleCellularQms: "vmcStoreBundleCellularQms",
  VmcStoreBundleCellularStandard: "vmcStoreBundleCellularStandard",
  VmcStoreBundleWifiQms: "vmcStoreBundleWifiQms",
  VmcStoreBundleWifiStandard: "vmcStoreBundleWifiStandard",
  VPlus: "vPlus",
  Vsb: "vsb",
  VsbGreenbeanRecycle: "vsbGreenbeanRecycle",
  VsbKaizen: "vsbKaizen",
  VsbOrderbridge: "vsbOrderbridge",
  VsbPhonixManagedNetwork: "vsbPhonixManagedNetwork",
  VsbSamurai: "vsbSamurai",
  VsbVisat: "vsbVisat",
  VsbWiretrust: "vsbWiretrust",
  VsbXgateway: "vsbXgateway",
  WandGift: "wandGift",
  WaySystemsMtt5000: "waySystemsMtt5000",
  WendysCom: "wendysCom",
  Whirl: "whirl",
  Winn610S: "winn610s",
  XpaySoftware: "xpaySoftware",
  Xpient610: "xpient610",
  XpientSolutions: "xpientSolutions",
} as const;
export type TerminalType1 = (typeof TerminalType1)[keyof typeof TerminalType1] | (string & {});

export const terminalType1Schema: EnumSchema<TerminalType1> = s.enumOf<TerminalType1>(TerminalType1);
