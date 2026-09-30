import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * <details><summary>Valid Values</summary>
 *
 * `0742` - **Veterinary Services**
 *
 * `0763` - **Agricultural Co-operatives**
 *
 * `0780` - **Horticultural Services, Landscaping Services**
 *
 * `1520` - **General Contractors-Residential and Commercial**
 *
 * `1711` - **Air Conditioning Contractors - Sales and Installation, Heating Contractors - Sales,
 * Service, Installation**
 *
 * `1731` - **Electrical Contractors**
 *
 * `1740` - **Insulation - Contractors, Masonry, Stonework Contractors, Plastering Contractors,
 * Stonework and Masonry Contractors, Tile Settings Contractors**
 *
 * `1750` - **Carpentry Contractors**
 *
 * `1761` - **Roofing - Contractors, Sheet Metal Work - Contractors, Siding - Contractors**
 *
 * `1771` - **Contractors - Concrete Work**
 *
 * `1799` - **Contractors - Special Trade, Not Elsewhere Classified**
 *
 * `2741` - **Miscellaneous Publishing and Printing**
 *
 * `2791` - **Typesetting, Plate Making, & Related Services**
 *
 * `2842` - **Specialty Cleaning, Polishing, and Sanitation Preparations**
 *
 * `3000` - **UNITED AIRLINES**
 *
 * `3001` - **AMERICAN AIRLINES**
 *
 * `3002` - **PAN AMERICAN**
 *
 * `3003` - **Airlines**
 *
 * `3004` - **TRANS WORLD AIRLINES**
 *
 * `3005` - **BRITISH AIRWAYS**
 *
 * `3006` - **JAPAN AIRLINES**
 *
 * `3007` - **AIR FRANCE**
 *
 * `3008` - **LUFTHANSA**
 *
 * `3009` - **AIR CANADA**
 *
 * `3010` - **KLM (ROYAL DUTCH AIRLINES)**
 *
 * `3011` - **AEORFLOT**
 *
 * `3012` - **QUANTAS**
 *
 * `3013` - **ALITALIA**
 *
 * `3014` - **SAUDIA ARABIAN AIRLINES**
 *
 * `3015` - **SWISSAIR**
 *
 * `3016` - **SAS**
 *
 * `3017` - **SOUTH AFRICAN AIRWAYS**
 *
 * `3018` - **VARIG (BRAZIL)**
 *
 * `3019` - **Airlines**
 *
 * `3020` - **AIR-INDIA**
 *
 * `3021` - **AIR ALGERIE**
 *
 * `3022` - **PHILIPPINE AIRLINES**
 *
 * `3023` - **MEXICANA**
 *
 * `3024` - **PAKISTAN INTERNATIONAL**
 *
 * `3025` - **AIR NEW ZEALAND**
 *
 * `3026` - **Airlines**
 *
 * `3027` - **UTA/INTERAIR**
 *
 * `3028` - **AIR MALTA**
 *
 * `3029` - **SABENA**
 *
 * `3030` - **AEROLINEAS ARGENTINAS**
 *
 * `3031` - **OLYMPIC AIRWAYS**
 *
 * `3032` - **EL AL**
 *
 * `3033` - **ANSETT AIRLINES**
 *
 * `3034` - **AUSTRAINLIAN AIRLINES**
 *
 * `3035` - **TAP (PORTUGAL)**
 *
 * `3036` - **VASP (BRAZIL)**
 *
 * `3037` - **EGYPTAIR**
 *
 * `3038` - **KUWAIT AIRLINES**
 *
 * `3039` - **AVIANCA**
 *
 * `3040` - **GULF AIR (BAHRAIN)**
 *
 * `3041` - **BALKAN-BULGARIAN AIRLINES**
 *
 * `3042` - **FINNAIR**
 *
 * `3043` - **AER LINGUS**
 *
 * `3044` - **AIR LANKA**
 *
 * `3045` - **NIGERIA AIRWAYS**
 *
 * `3046` - **CRUZEIRO DO SUL (BRAZIJ)**
 *
 * `3047` - **THY (TURKEY)**
 *
 * `3048` - **ROYAL AIR MAROC**
 *
 * `3049` - **TUNIS AIR**
 *
 * `3050` - **ICELANDAIR**
 *
 * , `3051` - **AUSTRIAN AIRLINES**
 *
 * `3052` - **LANCHILE**
 *
 * `3053` - **AVIACO (SPAIN)**
 *
 * `3054` - **LADECO (CHILE)**
 *
 * `3055` - **LAB (BOLIVIA)**
 *
 * `3056` - **QUEBECAIRE**
 *
 * `3057` - **EASTWEST AIRLINES (AUSTRALIA)**
 *
 * `3058` - **DELTA**
 *
 * `3059` - **Airlines**
 *
 * `3060` - **NORTHWEST**
 *
 * `3061` - **CONTINENTAL**
 *
 * `3062` - **WESTERN**
 *
 * `3063` - **US AIR**
 *
 * `3064` - **Airlines**
 *
 * `3065` - **AIRINTER**
 *
 * `3066` - **SOUTHWEST**
 *
 * `3067` - **Airlines**
 *
 * `3068` - **Airlines**
 *
 * `3069` - **SUN COUNTRY AIRLINES**
 *
 * `3070` - **Airlines**
 *
 * `3071` - **AIR BRITISH COLUMBIA**
 *
 * `3072` - **Airlines**
 *
 * `3073` - **Airlines**
 *
 * `3074` - **Airlines**
 *
 * `3075` - **SINGAPORE AIRLINES**
 *
 * `3076` - **AEROMEXICO**
 *
 * `3077` - **THAI AIRWAYS**
 *
 * `3078` - **CHINA AIRLINES**
 *
 * `3079` - **Airlines**
 *
 * `3080` - **Airlines**
 *
 * `3081` - **NORDAIR**
 *
 * `3082` - **KOREAN AIRLINES**
 *
 * `3083` - **AIR AFRIGUE**
 *
 * `3084` - **EVA AIRLINES**
 *
 * `3085` - **MIDWEST EXPRESS AIRLINES, INC.**
 *
 * `3086` - **Airlines**
 *
 * `3087` - **METRO AIRLINES**
 *
 * `3088` - **CROATIA AIRLINES**
 *
 * `3089` - **TRANSAERO**
 *
 * `3090` - **Airlines**
 *
 * `3091` - **Airlines**
 *
 * `3092` - **Airlines**
 *
 * `3093` - **Airlines**
 *
 * `3094` - **ZAMBIA AIRWAYS**
 *
 * `3095` - **Airlines**
 *
 * `3096` - **AIR ZIMBABWE**
 *
 * `3097` - **Airlines**
 *
 * `3098` - **Airlines**
 *
 * `3099` - **CATHAY PACIFIC**
 *
 * `3100` - **MALAYSIAN AIRLINE SYSTEM**
 *
 * `3101` - **Airlines**
 *
 * `3102` - **IBERIA**
 *
 * `3103` - **GARUDA (INDONESIA)**
 *
 * `3104` - **Airlines**
 *
 * `3105` - **Airlines**
 *
 * `3106` - **BRAATHENS S.A.F.E. (NORWAY)**
 *
 * `3107` - **Airlines**
 *
 * `3108` - **Airlines**
 *
 * `3109` - **Airlines**
 *
 * `3110` - **WINGS AIRWAYS**
 *
 * `3111` - **BRITISH MIDLAND**
 *
 * `3112` - **WINDWARD ISLAND**
 *
 * `3113` - **Airlines**
 *
 * `3114` - **Airlines**
 *
 * `3115` - **Airlines**
 *
 * `3116` - **Airlines**
 *
 * `3117` - **VIASA**
 *
 * `3118` - **VALLEY AIRLINES**
 *
 * `3119` - **Airlines**
 *
 * `3120` - **Airlines**
 *
 * `3121` - **Airlines**
 *
 * `3122` - **Airlines**
 *
 * `3123` - **Airlines**
 *
 * `3124` - **Airlines**
 *
 * `3125` - **TAN**
 *
 * `3126` - **TALAIR**
 *
 * `3127` - **TACA INTERNATIONAL**
 *
 * `3128` - **Airlines**
 *
 * `3129` - **SURINAM AIRWAYS**
 *
 * `3130` - **SUN WORLD INTERNATIONAL**
 *
 * `3131` - **Airlines**
 *
 * `3132` - **Airlines**
 *
 * `3133` - **SUNBELT AIRLINES**
 *
 * `3134` - **Airlines**
 *
 * `3135` - **SUDAN AIRWAYS**
 *
 * `3136` - **Airlines**
 *
 * `3137` - **SINGLETON**
 *
 * `3138` - **SIMMONS AIRLINES**
 *
 * `3139` - **Airlines**
 *
 * `3140` - **Airlines**
 *
 * `3141` - **Airlines**
 *
 * `3142` - **Airlines**
 *
 * `3143` - **SCENIC AIRLINES**
 *
 * `3144` - **VIRGIN ATLANTIC**
 *
 * `3145` - **SAN JUAN AIRLINES**
 *
 * `3146` - **LUXAIR**
 *
 * `3147` - **Airlines**
 *
 * `3148` - **Airlines**
 *
 * `3149` - **Airlines**
 *
 * `3150` - **Airlines**
 *
 * `3151` - **AIR ZAIRE**
 *
 * `3152` - **Airlines**
 *
 * `3153` - **Airlines**
 *
 * `3154` - **PRINCEVILLE**
 *
 * `3155` - **Airlines**
 *
 * `3156` - **Airlines**
 *
 * `3157` - **Airlines**
 *
 * `3158` - **Airlines**
 *
 * `3159` - **PBA**
 *
 * `3160` - **Airlines**
 *
 * `3161` - **ALL NIPPON AIRWAYS**
 *
 * `3162` - **Airlines**
 *
 * `3163` - **Airlines**
 *
 * `3164` - **NORONTAIR**
 *
 * `3165` - **NEW YORK HELICOPTER**
 *
 * `3166` - **Airlines**
 *
 * `3167` - **Airlines**
 *
 * `3168` - **Airlines**
 *
 * `3169` - **Airlines**
 *
 * `3170` - **NOUNT COOK**
 *
 * `3171` - **CANADIAN AIRLINES INTERNATIONAL**
 *
 * `3172` - **NATIONAIR**
 *
 * `3173` - **Airlines**
 *
 * `3174` - **Airlines**
 *
 * `3175` - **Airlines**
 *
 * `3176` - **METROFLIGHT AIRLINES**
 *
 * `3177` - **Airlines**
 *
 * `3178` - **MESA AIR**
 *
 * `3179` - **Airlines**
 *
 * `3180` - **Airlines**
 *
 * `3181` - **MALEV**
 *
 * `3182` - **LOT (POLAND)**
 *
 * `3183` - **Airlines**
 *
 * `3184` - **LIAT**
 *
 * `3185` - **LAV (VENEZUELA)**
 *
 * `3186` - **LAP (PARAGUAY)**
 *
 * `3187` - **LACSA (COSTA RICA)**
 *
 * `3188` - **Airlines**
 *
 * `3189` - **Airlines**
 *
 * `3190` - **JUGOSLAV AIR**
 *
 * `3191` - **ISLAND AIRLINES**
 *
 * `3192` - **IRAN AIR**
 *
 * `3193` - **INDIAN AIRLINES**
 *
 * `3194` - **Airlines**
 *
 * `3195` - **Airlines**
 *
 * `3196` - **HAWAIIAN AIR**
 *
 * `3197` - **HAVASU AIRLINES**
 *
 * `3198` - **Airlines**
 *
 * `3199` - **Airlines**
 *
 * `3200` - **FUYANA AIRWAYS**
 *
 * `3201` - **Airlines**
 *
 * `3202` - **Airlines**
 *
 * `3203` - **GOLDEN PACIFIC AIR**
 *
 * `3204` - **FREEDOM AIR**
 *
 * `3205` - **Airlines**
 *
 * `3206` - **Airlines**
 *
 * `3207` - **Airlines**
 *
 * `3208` - **Airlines**
 *
 * `3209` - **Airlines**
 *
 * `3210` - **Airlines**
 *
 * `3211` - **Airlines**
 *
 * `3212` - **DOMINICANA**
 *
 * `3213` - **Airlines**
 *
 * `3214` - **Airlines**
 *
 * `3215` - **DAN AIR SERVICES**
 *
 * `3216` - **CUMBERLAND AIRLINES**
 *
 * `3217` - **CSA**
 *
 * `3218` - **CROWN AIR**
 *
 * `3219` - **COPA**
 *
 * `3220` - **COMPANIA FAUCETT**
 *
 * `3221` - **TRANSPORTES AEROS MILITARES ECCUATORANOS**
 *
 * `3222` - **COMMAND AIRWAYS**
 *
 * `3223` - **COMAIR**
 *
 * `3224` - **Airlines**
 *
 * `3225` - **Airlines**
 *
 * `3226` - **Airlines**
 *
 * `3227` - **Airlines**
 *
 * `3228` - **CAYMAN AIRWAYS**
 *
 * `3229` - **SAETA SOCIAEDAD ECUATORIANOS DE TRANSPORTES AEREOS**
 *
 * `3230` - **Airlines**
 *
 * `3231` - **SASHA SERVICIO AERO DE HONDURAS**
 *
 * `3232` - **Airlines**
 *
 * `3233` - **CAPITOL AIR**
 *
 * `3234` - **BWIA**
 *
 * `3235` - **BROKWAY AIR**
 *
 * `3236` - **Airlines**
 *
 * `3237` - **Airlines**
 *
 * `3238` - **BEMIDJI AIRLINES**
 *
 * `3239` - **BAR HARBOR AIRLINES**
 *
 * `3240` - **BAHAMASAIR**
 *
 * `3241` - **AVIATECA (GUATEMALA)**
 *
 * `3242` - **AVENSA**
 *
 * `3243` - **AUSTRIAN AIR SERVICE**
 *
 * `3244` - **Airlines**
 *
 * `3245` - **Airlines**
 *
 * `3246` - **Airlines**
 *
 * `3247` - **Airlines**
 *
 * `3248` - **Airlines**
 *
 * `3249` - **Airlines**
 *
 * `3250` - **Airlines**
 *
 * `3251` - **ALOHA AIRLINES**
 *
 * `3252` - **ALM**
 *
 * `3253` - **AMERICA WEST**
 *
 * `3254` - **TRUMP AIRLINE**
 *
 * `3255` - **Airlines**
 *
 * `3256` - **ALASKA AIRLINES**
 *
 * `3257` - **Airlines**
 *
 * `3258` - **Airlines**
 *
 * `3259` - **AMERICAN TRANS AIR**
 *
 * `3260` - **Airlines**
 *
 * `3261` - **AIR CHINA**
 *
 * `3262` - **RENO AIR, INC.**
 *
 * `3263` - **Airlines**
 *
 * `3264` - **Airlines**
 *
 * `3265` - **Airlines**
 *
 * `3266` - **AIR SEYCHELLES**
 *
 * `3267` - **AIR PANAMA**
 *
 * `3268` - **Airlines**
 *
 * `3269` - **Airlines**
 *
 * `3270` - **Airlines**
 *
 * `3271` - **Airlines**
 *
 * `3272` - **Airlines**
 *
 * `3273` - **Airlines**
 *
 * `3274` - **Airlines**
 *
 * `3275` - **Airlines**
 *
 * `3276` - **Airlines**
 *
 * `3277` - **Airlines**
 *
 * `3278` - **Airlines**
 *
 * `3279` - **Airlines**
 *
 * `3280` - **AIR JAMAICA**
 *
 * `3281` - **Airlines**
 *
 * `3282` - **AIR DJIBOUTI**
 *
 * `3283` - **Airlines**
 *
 * `3284` - **AERO VIRGIN ISLANDS**
 *
 * `3285` - **AERO PERU**
 *
 * `3286` - **AEROLINEAS NICARAGUENSIS**
 *
 * `3287` - **AERO COACH AVAIATION**
 *
 * `3288` - **Airlines**
 *
 * `3289` - **Airlines**
 *
 * `3290` - **Airlines**
 *
 * `3291` - **ARIANA AFGHAN**
 *
 * `3292` - **CYPRUS AIRWAYS**
 *
 * `3293` - **ECUATORIANA**
 *
 * `3294` - **ETHIOPIAN AIRLINES**
 *
 * `3295` - **KENYA AIRLINES**
 *
 * `3296` - **Airlines**
 *
 * `3297` - **Airlines**
 *
 * `3298` - **AIR MAURITIUS**
 *
 * `3299` - **WIDERO'S FLYVESELSKAP**
 *
 * `3351` - **AFFILIATED AUTO RENTAL**
 *
 * `3352` - **AMERICAN INTL RENT-A-CAR**
 *
 * `3353` - **BROOKS RENT-A-CAR**
 *
 * `3354` - **ACTION AUTO RENTAL**
 *
 * `3355` - **Car Rental**
 *
 * `3356` - **Car Rental**
 *
 * `3357` - **HERTZ RENT-A-CAR**
 *
 * `3358` - **Car Rental**
 *
 * `3359` - **PAYLESS CAR RENTAL**
 *
 * `3360` - **SNAPPY CAR RENTAL**
 *
 * `3361` - **AIRWAYS RENT-A-CAR**
 *
 * `3362` - **ALTRA AUTO RENTAL**
 *
 * `3363` - **Car Rental**
 *
 * `3364` - **AGENCY RENT-A-CAR**
 *
 * `3365` - **Car Rental**
 *
 * `3366` - **BUDGET RENT-A-CAR**
 *
 * `3367` - **Car Rental**
 *
 * `3368` - **HOLIDAY RENT-A-WRECK**
 *
 * `3369` - **Car Rental**
 *
 * `3370` - **RENT-A-WRECK**
 *
 * `3371` - **Car Rental**
 *
 * `3372` - **Car Rental**
 *
 * `3373` - **Car Rental**
 *
 * `3374` - **Car Rental**
 *
 * `3375` - **Car Rental**
 *
 * `3376` - **AJAX RENT-A-CAR**
 *
 * `3377` - **Car Rental**
 *
 * `3378` - **Car Rental**
 *
 * `3379` - **Car Rental**
 *
 * `3380` - **Car Rental**
 *
 * `3381` - **EUROP CAR**
 *
 * `3382` - **Car Rental**
 *
 * `3383` - **Car Rental**
 *
 * `3384` - **Car Rental**
 *
 * `3385` - **TROPICAL RENT-A-CAR**
 *
 * `3386` - **SHOWCASE RENTAL CARS**
 *
 * `3387` - **ALAMO RENT-A-CAR**
 *
 * `3388` - **Car Rental**
 *
 * `3389` - **AVIS RENT-A-CAR**
 *
 * `3390` - **DOLLAR RENT-A-CAR**
 *
 * `3391` - **EUROPE BY CAR**
 *
 * `3392` - **Car Rental**
 *
 * `3393` - **NATIONAL CAR RENTAL**
 *
 * `3394` - **KEMWELL GROUP RENT-A-CAR**
 *
 * `3395` - **THRIFTY RENT-A-CAR**
 *
 * `3396` - **TILDEN TENT-A-CAR**
 *
 * `3397` - **Car Rental**
 *
 * `3398` - **ECONO-CAR RENT-A-CAR**
 *
 * `3399` - **Car Rental**
 *
 * `3400` - **AUTO HOST COST CAR RENTALS**
 *
 * `3401` - **Car Rental**
 *
 * `3402` - **Car Rental**
 *
 * `3403` - **Car Rental**
 *
 * `3404` - **Car Rental**
 *
 * `3405` - **ENTERPRISE RENT-A-CAR**
 *
 * `3406` - **Car Rental**
 *
 * `3407` - **Car Rental**
 *
 * `3408` - **Car Rental**
 *
 * `3409` - **GENERAL RENT-A-CAR**
 *
 * `3410` - **Car Rental**
 *
 * `3411` - **Car Rental**
 *
 * `3412` - **A-1 RENT-A-CAR**
 *
 * `3413` - **Car Rental**
 *
 * `3414` - **GODFREY NATL RENT-A-CAR**
 *
 * `3415` - **Car Rental**
 *
 * `3416` - **Car Rental**
 *
 * `3417` - **Car Rental**
 *
 * `3418` - **Car Rental**
 *
 * `3419` - **ALPHA RENT-A-CAR**
 *
 * `3420` - **ANSA INTL RENT-A-CAR**
 *
 * `3421` - **ALLSTAE RENT-A-CAR**
 *
 * `3422` - **Car Rental**
 *
 * `3423` - **AVCAR RENT-A-CAR**
 *
 * `3424` - **Car Rental**
 *
 * `3425` - **AUTOMATE RENT-A-CAR**
 *
 * `3426` - **Car Rental**
 *
 * `3427` - **AVON RENT-A-CAR**
 *
 * `3428` - **CAREY RENT-A-CAR**
 *
 * `3429` - **INSURANCE RENT-A-CAR**
 *
 * `3430` - **MAJOR RENT-A-CAR**
 *
 * `3431` - **REPLACEMENT RENT-A-CAR**
 *
 * `3432` - **RESERVE RENT-A-CAR**
 *
 * `3433` - **UGLY DUCKLING RENT-A-CAR**
 *
 * `3434` - **USA RENT-A-CAR**
 *
 * `3435` - **VALUE RENT-A-CAR**
 *
 * `3436` - **AUTOHANSA RENT-A-CAR**
 *
 * `3437` - **CITE RENT-A-CAR**
 *
 * `3438` - **INTERENT RENT-A-CAR**
 *
 * `3439` - **MILLEVILLE RENT-A-CAR**
 *
 * `3440` - **VIA ROUTE RENT-A-CAR**
 *
 * `3441` - **Car Rental**
 *
 * `3501` - **HOLIDAY INNS, HOLIDAY INN EXPRESS**
 *
 * `3502` - **BEST WESTERN HOTELS**
 *
 * `3503` - **SHERATON HOTELS**
 *
 * `3504` - **HILTON HOTELS**
 *
 * `3505` - **FORTE HOTELS**
 *
 * `3506` - **GOLDEN TULIP HOTELS**
 *
 * `3507` - **FRIENDSHIP INNS**
 *
 * `3508` - **QUALITY INNS, QUALITY SUITES**
 *
 * `3509` - **MARRIOTT HOTELS**
 *
 * `3510` - **DAYS INN, DAYSTOP**
 *
 * `3511` - **ARABELLA HOTELS**
 *
 * `3512` - **INTER-CONTINENTAL HOTELS**
 *
 * `3513` - **WESTIN HOTELS**
 *
 * `3514` - **Hotels/Motels/Inns/Resorts**
 *
 * `3515` - **RODEWAY INNS**
 *
 * `3516` - **LA QUINTA MOTOR INNS**
 *
 * `3517` - **AMERICANA HOTELS**
 *
 * `3518` - **SOL HOTELS**
 *
 * `3519` - **PULLMAN INTERNATIONAL HOTELS**
 *
 * `3520` - **MERIDIEN HOTELS**
 *
 * `3521` - **CREST HOTELS (see FORTE HOTELS)**
 *
 * `3522` - **TOKYO HOTEL**
 *
 * `3523` - **PENNSULA HOTEL**
 *
 * `3524` - **WELCOMGROUP HOTELS**
 *
 * `3525` - **DUNFEY HOTELS**
 *
 * `3526` - **Hotels/Motels/Inns/Resorts**
 *
 * `3527` - **DOWNTOWNER-PASSPORT HOTEL**
 *
 * `3528` - **RED LION HOTELS, RED LION INNS**
 *
 * `3529` - **CP HOTELS**
 *
 * `3530` - **RENAISSANCE HOTELS, STOUFFER HOTELS**
 *
 * `3531` - **ASTIR HOTELS**
 *
 * `3532` - **SUN ROUTE HOTELS**
 *
 * `3533` - **HOTEL IBIS**
 *
 * `3534` - **SOUTHERN PACIFIC HOTELS**
 *
 * `3535` - **HILTON INTERNATIONAL**
 *
 * `3536` - **AMFAC HOTELS**
 *
 * `3537` - **ANA HOTEL**
 *
 * `3538` - **CONCORDE HOTELS**
 *
 * `3539` - **Hotels/Motels/Inns/Resorts**
 *
 * `3540` - **IBEROTEL HOTELS**
 *
 * `3541` - **HOTEL OKURA**
 *
 * `3542` - **ROYAL HOTELS**
 *
 * `3543` - **FOUR SEASONS HOTELS**
 *
 * `3544` - **CIGA HOTELS**
 *
 * `3545` - **SHANGRI-LA INTERNATIONAL**
 *
 * `3546` - **Hotels/Motels/Inns/Resorts**
 *
 * `3547` - **Hotels/Motels/Inns/Resorts**
 *
 * `3548` - **HOTELES MELIA**
 *
 * `3549` - **AUBERGE DES GOVERNEURS**
 *
 * `3550` - **REGAL 8 INNS**
 *
 * `3551` - **Hotels/Motels/Inns/Resorts**
 *
 * `3552` - **COAST HOTELS**
 *
 * `3553` - **PARK INNS INTERNATIONAL**
 *
 * `3554` - **Hotels/Motels/Inns/Resorts**
 *
 * `3555` - **Hotels/Motels/Inns/Resorts**
 *
 * `3556` - **Hotels/Motels/Inns/Resorts**
 *
 * `3557` - **Hotels/Motels/Inns/Resorts**
 *
 * `3558` - **JOLLY HOTELS**
 *
 * `3559` - **Hotels/Motels/Inns/Resorts**
 *
 * `3560` - **Hotels/Motels/Inns/Resorts**
 *
 * `3561` - **Hotels/Motels/Inns/Resorts**
 *
 * `3562` - **COMFORT INNS**
 *
 * `3563` - **JOURNEY'S END MOTLS**
 *
 * `3564` - **Hotels/Motels/Inns/Resorts**
 *
 * `3565` - **RELAX INNS**
 *
 * `3566` - **Hotels/Motels/Inns/Resorts**
 *
 * `3567` - **Hotels/Motels/Inns/Resorts**
 *
 * `3568` - **LADBROKE HOTELS**
 *
 * `3569` - **Hotels/Motels/Inns/Resorts**
 *
 * `3570` - **FORUM HOTELS**
 *
 * `3571` - **Hotels/Motels/Inns/Resorts**
 *
 * `3572` - **MIYAKO HOTELS**
 *
 * `3573` - **SANDMAN HOTELS**
 *
 * `3574` - **VENTURE INNS**
 *
 * `3575` - **VAGABOND HOTELS**
 *
 * `3576` - **Hotels/Motels/Inns/Resorts**
 *
 * `3577` - **MANDARIN ORIENTAL HOTEL**
 *
 * `3578` - **Hotels/Motels/Inns/Resorts**
 *
 * `3579` - **HOTEL MERCURE**
 *
 * `3580` - **Hotels/Motels/Inns/Resorts**
 *
 * `3581` - **DELTA HOTEL**
 *
 * `3582` - **Hotels/Motels/Inns/Resorts**
 *
 * `3583` - **SAS HOTELS**
 *
 * `3584` - **PRINCESS HOTELS INTERNATIONAL**
 *
 * `3585` - **HUNGAR HOTELS**
 *
 * `3586` - **SOKOS HOTELS**
 *
 * `3587` - **DORAL HOTELS**
 *
 * `3588` - **HELMSLEY HOTELS**
 *
 * `3589` - **Hotels/Motels/Inns/Resorts**
 *
 * `3590` - **FAIRMONT HOTELS**
 *
 * `3591` - **SONESTA HOTELS**
 *
 * `3592` - **OMNI HOTELS**
 *
 * `3593` - **CUNARD HOTELS**
 *
 * `3594` - **Hotels/Motels/Inns/Resorts**
 *
 * `3595` - **HOSPITALITY INTERNATIONAL**
 *
 * `3596` - **Hotels/Motels/Inns/Resorts**
 *
 * `3597` - **Hotels/Motels/Inns/Resorts**
 *
 * `3598` - **REGENT INTERNATIONAL HOTELS**
 *
 * `3599` - **PANNONIA HOTELS**
 *
 * `3600` - **Hotels/Motels/Inns/Resorts**
 *
 * `3601` - **Hotels/Motels/Inns/Resorts**
 *
 * `3602` - **Hotels/Motels/Inns/Resorts**
 *
 * `3603` - **NOAH'S HOTELS**
 *
 * `3604` - **Hotels/Motels/Inns/Resorts**
 *
 * `3605` - **Hotels/Motels/Inns/Resorts**
 *
 * `3606` - **Hotels/Motels/Inns/Resorts**
 *
 * `3607` - **Hotels/Motels/Inns/Resorts**
 *
 * `3608` - **Hotels/Motels/Inns/Resorts**
 *
 * `3609` - **Hotels/Motels/Inns/Resorts**
 *
 * `3610` - **Hotels/Motels/Inns/Resorts**
 *
 * `3611` - **Hotels/Motels/Inns/Resorts**
 *
 * `3612` - **MOVENPICK HOTELS**
 *
 * `3613` - **Hotels/Motels/Inns/Resorts**
 *
 * `3614` - **Hotels/Motels/Inns/Resorts**
 *
 * `3615` - **TRAVELODGE**
 *
 * `3616` - **Hotels/Motels/Inns/Resorts**
 *
 * `3617` - **Hotels/Motels/Inns/Resorts**
 *
 * `3618` - **Hotels/Motels/Inns/Resorts**
 *
 * `3619` - **Hotels/Motels/Inns/Resorts**
 *
 * `3620` - **TELFORD INTERNATIONAL**
 *
 * `3621` - **Hotels/Motels/Inns/Resorts**
 *
 * `3622` - **MERLIN HOTELS**
 *
 * `3623` - **DORINT HOTELS**
 *
 * `3624` - **Hotels/Motels/Inns/Resorts**
 *
 * `3625` - **HOTLE UNIVERSALE**
 *
 * `3626` - **PRINCE HOTELS**
 *
 * `3627` - **Hotels/Motels/Inns/Resorts**
 *
 * `3628` - **Hotels/Motels/Inns/Resorts**
 *
 * `3629` - **DAN HOTELS**
 *
 * `3630` - **Hotels/Motels/Inns/Resorts**
 *
 * `3631` - **Hotels/Motels/Inns/Resorts**
 *
 * `3632` - **Hotels/Motels/Inns/Resorts**
 *
 * `3633` - **RANK HOTELS**
 *
 * `3634` - **SWISSOTEL**
 *
 * `3635` - **RESO HOTELS**
 *
 * `3636` - **SAROVA HOTELS**
 *
 * `3637` - **RAMADA INNS, RAMADA LIMITED**
 *
 * `3638` - **HO JO INN, HOWARD JOHNSON**
 *
 * `3639` - **MOUNT CHARLOTTE THISTLE**
 *
 * `3640` - **HYATT HOTEL**
 *
 * `3641` - **SOFITEL HOTELS**
 *
 * `3642` - **NOVOTEL HOTELS**
 *
 * `3643` - **STEIGENBERGER HOTELS**
 *
 * `3644` - **ECONO LODGES**
 *
 * `3645` - **QUEENS MOAT HOUSES**
 *
 * `3646` - **SWALLOW HOTELS**
 *
 * `3647` - **HUSA HOTELS**
 *
 * `3648` - **DE VERE HOTELS**
 *
 * `3649` - **RADISSON HOTELS**
 *
 * `3650` - **RED ROOK INNS**
 *
 * `3651` - **IMPERIAL LONDON HOTEL**
 *
 * `3652` - **EMBASSY HOTELS**
 *
 * `3653` - **PENTA HOTELS**
 *
 * `3654` - **LOEWS HOTELS**
 *
 * `3655` - **SCANDIC HOTELS**
 *
 * `3656` - **SARA HOTELS**
 *
 * `3657` - **OBEROI HOTELS**
 *
 * `3658` - **OTANI HOTELS**
 *
 * `3659` - **TAJ HOTELS INTERNATIONAL**
 *
 * `3660` - **KNIGHTS INNS**
 *
 * `3661` - **METROPOLE HOTELS**
 *
 * `3662` - **Hotels/Motels/Inns/Resorts**
 *
 * `3663` - **HOTELES EL PRESIDENTS**
 *
 * `3664` - **FLAG INN**
 *
 * `3665` - **HAMPTON INNS**
 *
 * `3666` - **STAKIS HOTELS**
 *
 * `3667` - **Hotels/Motels/Inns/Resorts**
 *
 * `3668` - **MARITIM HOTELS**
 *
 * `3669` - **Hotels/Motels/Inns/Resorts**
 *
 * `3670` - **ARCARD HOTELS**
 *
 * `3671` - **ARCTIA HOTELS**
 *
 * `3672` - **CAMPANIEL HOTELS**
 *
 * `3673` - **IBUSZ HOTELS**
 *
 * `3674` - **RANTASIPI HOTELS**
 *
 * `3675` - **INTERHOTEL CEDOK**
 *
 * `3676` - **Hotels/Motels/Inns/Resorts**
 *
 * `3677` - **CLIMAT DE FRANCE HOTELS**
 *
 * `3678` - **CUMULUS HOTELS**
 *
 * `3679` - **DANUBIUS HOTEL**
 *
 * `3680` - **Hotels/Motels/Inns/Resorts**
 *
 * `3681` - **ADAMS MARK HOTELS**
 *
 * `3682` - **ALLSTAR INNS**
 *
 * `3683` - **Hotels/Motels/Inns/Resorts**
 *
 * `3684` - **BUDGET HOST INNS**
 *
 * `3685` - **BUDGETEL HOTELS**
 *
 * `3686` - **SUISSE CHALETS**
 *
 * `3687` - **CLARION HOTELS**
 *
 * `3688` - **COMPRI HOTELS**
 *
 * `3689` - **CONSORT HOTELS**
 *
 * `3690` - **COURTYARD BY MARRIOTT**
 *
 * `3691` - **DILLION INNS**
 *
 * `3692` - **DOUBLETREE HOTELS**
 *
 * `3693` - **DRURY INNS**
 *
 * `3694` - **ECONOMY INNS OF AMERICA**
 *
 * `3695` - **EMBASSY SUITES**
 *
 * `3696` - **EXEL INNS**
 *
 * `3697` - **FARFIELD HOTELS**
 *
 * `3698` - **HARLEY HOTELS**
 *
 * `3699` - **MIDWAY MOTOR LODGE**
 *
 * `3700` - **MOTEL 6**
 *
 * `3701` - **GUEST QUARTERS (Formally PICKETT SUITE HOTELS)**
 *
 * `3702` - **THE REGISTRY HOTELS**
 *
 * `3703` - **RESIDENCE INNS**
 *
 * `3704` - **ROYCE HOTELS**
 *
 * `3705` - **SANDMAN INNS**
 *
 * `3706` - **SHILO INNS**
 *
 * `3707` - **SHONEY'S INNS**
 *
 * `3708` - **Hotels/Motels/Inns/Resorts**
 *
 * `3709` - **SUPER8 MOTELS**
 *
 * `3710` - **THE RITZ CARLTON HOTELS**
 *
 * `3711` - **FLAG INNS (AUSRALIA)**
 *
 * `3712` - **GOLDEN CHAIN HOTEL**
 *
 * `3713` - **QUALITY PACIFIC HOTEL**
 *
 * `3714` - **FOUR SEASONS HOTEL (AUSTRALIA)**
 *
 * `3715` - **FARIFIELD INN**
 *
 * `3716` - **CARLTON HOTELS**
 *
 * `3717` - **CITY LODGE HOTELS**
 *
 * `3718` - **KAROS HOTELS**
 *
 * `3719` - **PROTEA HOTELS**
 *
 * `3720` - **SOUTHERN SUN HOTELS**
 *
 * `3721` - **HILTON CONRAD**
 *
 * `3722` - **WYNDHAM HOTEL AND RESORTS**
 *
 * `3723` - **RICA HOTELS**
 *
 * `3724` - **INER NOR HOTELS**
 *
 * `3725` - **SEAINES PLANATION**
 *
 * `3726` - **RIO SUITES**
 *
 * `3727` - **BROADMOOR HOTEL**
 *
 * `3728` - **BALLY'S HOTEL AND CASINO**
 *
 * `3729` - **JOHN ASCUAGA'S NUGGET**
 *
 * `3730` - **MGM GRAND HOTEL**
 *
 * `3731` - **HARRAH'S HOTELS AND CASINOS**
 *
 * `3732` - **OPRYLAND HOTEL**
 *
 * `3733` - **BOCA RATON RESORT**
 *
 * `3734` - **HARVEY/BRISTOL HOTELS**
 *
 * `3735` - **Hotels/Motels/Inns/Resorts**
 *
 * `3736` - **COLORADO BELLE/EDGEWATER RESORT**
 *
 * `3737` - **RIVIERA HOTEL AND CASINO**
 *
 * `3738` - **TROPICANA RESORT AND CASINO**
 *
 * `3739` - **WOODSIDE HOTELS AND RESORTS**
 *
 * `3740` - **TOWNPLACE SUITES**
 *
 * `3741` - **MILLENIUM BROADWAY HOTEL**
 *
 * `3742` - **CLUB MED**
 *
 * `3743` - **BILTMORE HOTEL AND SUITES**
 *
 * `3744` - **CAREFREE RESORTS**
 *
 * `3745` - **ST. REGIS HOTEL**
 *
 * `3746` - **THE ELIOT HOTEL**
 *
 * `3747` - **CLUBCORP/CLUB RESORTS**
 *
 * `3748` - **WELESLEY INNS**
 *
 * `3749` - **THE BEVERLY HILLS HOTEL**
 *
 * `3750` - **CROWNE PLAZA HOTELS**
 *
 * `3751` - **HOMEWOOD SUITES**
 *
 * `3752` - **PEABODY HOTELS**
 *
 * `3753` - **GREENBRIAH RESORTS**
 *
 * `3754` - **AMELIA ISLAND PLANATION**
 *
 * `3755` - **THE HOMESTEAD**
 *
 * `3756` - **SOUTH SEAS RESORTS**
 *
 * `3757` - **Hotels/Motels/Inns/Resorts**
 *
 * `3758` - **Hotels/Motels/Inns/Resorts**
 *
 * `3759` - **Hotels/Motels/Inns/Resorts**
 *
 * `3760` - **Hotels/Motels/Inns/Resorts**
 *
 * `3761` - **Hotels/Motels/Inns/Resorts**
 *
 * `3762` - **Hotels/Motels/Inns/Resorts**
 *
 * `3763` - **Hotels/Motels/Inns/Resorts**
 *
 * `3764` - **Hotels/Motels/Inns/Resorts**
 *
 * `3765` - **Hotels/Motels/Inns/Resorts**
 *
 * `3766` - **Hotels/Motels/Inns/Resorts**
 *
 * `3767` - **Hotels/Motels/Inns/Resorts**
 *
 * `3768` - **Hotels/Motels/Inns/Resorts**
 *
 * `3769` - **Hotels/Motels/Inns/Resorts**
 *
 * `3770` - **Hotels/Motels/Inns/Resorts**
 *
 * `3771` - **Hotels/Motels/Inns/Resorts**
 *
 * `3772` - **Hotels/Motels/Inns/Resorts**
 *
 * `3773` - **Hotels/Motels/Inns/Resorts**
 *
 * `3774` - **Hotels/Motels/Inns/Resorts**
 *
 * `3775` - **Hotels/Motels/Inns/Resorts**
 *
 * `3776` - **Hotels/Motels/Inns/Resorts**
 *
 * `3777` - **Hotels/Motels/Inns/Resorts**
 *
 * `3778` - **Hotels/Motels/Inns/Resorts**
 *
 * `3779` - **Hotels/Motels/Inns/Resorts**
 *
 * `3780` - **Hotels/Motels/Inns/Resorts**
 *
 * `3781` - **Hotels/Motels/Inns/Resorts**
 *
 * `3782` - **Hotels/Motels/Inns/Resorts**
 *
 * `3783` - **Hotels/Motels/Inns/Resorts**
 *
 * `3784` - **Hotels/Motels/Inns/Resorts**
 *
 * `3785` - **Hotels/Motels/Inns/Resorts**
 *
 * `3786` - **Hotels/Motels/Inns/Resorts**
 *
 * `3787` - **Hotels/Motels/Inns/Resorts**
 *
 * `3788` - **Hotels/Motels/Inns/Resorts**
 *
 * `3789` - **Hotels/Motels/Inns/Resorts**
 *
 * `3790` - **Hotels/Motels/Inns/Resorts**
 *
 * `3816` - **Home2Suites**
 *
 * `3835` - **MASTERS ECONOMY INNS**
 *
 * `4011` - **Railroads**
 *
 * `4111` - **Local/Suburban Commuter Passenger Transportation - Railroads, Ferries, Local Water
 * Transportation**
 *
 * `4112` - **Passenger Railways**
 *
 * `4119` - **Ambulance Services**
 *
 * `4121` - **Taxicabs and Limousines**
 *
 * `4131` - **Bus Lines, Including Charters, Tour Buses**
 *
 * `4214` - **Motor Freight Carriers, Moving and Storage Companies, Trucking - Local/Long Distance,
 * Delivery Services - Local**
 *
 * `4215` - **Courier Services - Air or Ground, Freight Forwarders**
 *
 * `4225` - **Public Warehousing, Storage**
 *
 * `4411` - **Cruise and Steamship Lines**
 *
 * `4457` - **Boat Rentals and Leases**
 *
 * `4468` - **Marinas, Marine Service, and Supplies**
 *
 * `4511` - **Airlines, Air Carriers (not listed elsewhere)**
 *
 * `4582` - **Airports, Airport Terminals, Flying Fields**
 *
 * `4722` - **Travel Agencies and Tour Operations**
 *
 * `4723` - **Package Tour Operators (For use in Germany only)**
 *
 * `4784` - **Toll and Bridge Fees**
 *
 * `4789` - **Transportation Services, Not Elsewhere Classified**
 *
 * `4812` - **Telecommunications Equipment including Telephone Sales**
 *
 * `4814` - **Fax Services, Telecommunication Services**
 *
 * `4815` - **VisaPhone**
 *
 * `4816` - **Computer Network Services**
 *
 * `4821` - **Telegraph Services**
 *
 * `4829` - **Money Orders - Wire Transfer**
 *
 * `4899` - **Cable and Other Pay Television (previously Cable Services)**
 *
 * `4900` - **Electric, Gas, Sanitary and Water Utilities**
 *
 * `5013` - **Motor Vehicle Supplies and New Parts**
 *
 * `5021` - **Office and Commercial Furniture**
 *
 * `5039` - **Construction Materials, Not Elsewhere Classified**
 *
 * `5044` - **Office, Photographic, Photocopy, and Microfilm Equipment**
 *
 * `5045` - **Computers, Computer Peripheral Equipment, Software**
 *
 * `5046` - **Commercial Equipment, Not Elsewhere Classified**
 *
 * `5047` - **Medical, Dental, Ophthalmic, Hospital Equipment and Supplies**
 *
 * `5051` - **Metal Service Centers and Offices**
 *
 * `5065` - **Electrical Parts and Equipment**
 *
 * `5072` - **Hardware Equipment and Supplies**
 *
 * `5074` - **Plumbing and Heating Equipment and Supplies**
 *
 * `5085` - **Industrial Supplies, Not Elsewhere Classified**
 *
 * `5094` - **Precious Stones and Metals, Watches and Jewelry**
 *
 * `5099` - **Durable Goods, Not Elsewhere Classified**
 *
 * `5111` - **Stationery, Office Supplies, Printing, and Writing Paper**
 *
 * `5122` - **Drugs, Drug Proprietors, and Druggist's Sundries**
 *
 * `5131` - **Piece Goods, Notions, and Other Dry Goods**
 *
 * `5137` - **Men's, Women's, and Children's Uniforms and Commercial Clothing**
 *
 * `5139` - **Commercial Footwear**
 *
 * `5169` - **Chemicals and Allied Products, Not Elsewhere Classified**
 *
 * `5172` - **Petroleum and Petroleum Products**
 *
 * `5192` - **Books, Periodicals, and Newspapers**
 *
 * `5193` - **Florists' Supplies, Nursery Stock and Flowers**
 *
 * `5198` - **Paints, Varnishes, and Supplies**
 *
 * `5199` - **Non-durable Goods, Not Elsewhere Classified**
 *
 * `5200` - **Home Supply Warehouse Stores**
 *
 * `5211` - **Lumber and Building Materials Stores**
 *
 * `5231` - **Glass, Paint, and Wallpaper Stores**
 *
 * `5251` - **Hardware Stores**
 *
 * `5261` - **Nurseries - Lawn and Garden Supply Store**
 *
 * `5271` - **Mobile Home Dealers**
 *
 * `5300` - **Wholesale Clubs**
 *
 * `5309` - **Duty Free Store**
 *
 * `5310` - **Discount Stores**
 *
 * `5311` - **Department Stores**
 *
 * `5331` - **Variety Stores**
 *
 * `5399` - **Misc. General Merchandise**
 *
 * `5411` - **Grocery Stores, Supermarkets**
 *
 * `5422` - **Meat Provisioners - Freezer and Locker**
 *
 * `5441` - **Candy, Nut, and Confectionery Stores**
 *
 * `5451` - **Dairy Products Stores**
 *
 * `5462` - **Bakeries**
 *
 * `5499` - **Misc. Food Stores - Convenience Stores and Specialty Markets**
 *
 * `5511` - **Car and Truck Dealers (New and Used) Sales, Service, Repairs, Parts, and Leasing**
 *
 * `5521` - **Automobile and Truck Dealers (Used Only)**
 *
 * `5531` - **Automobile Supply Stores**
 *
 * `5532` - **Automotive Tire Stores**
 *
 * `5533` - **Automotive Parts, Accessories Stores**
 *
 * `5541` - **Service Stations (with or without ancillary services)**
 *
 * `5542` - **Automated Fuel Dispensers**
 *
 * `5551` - **Boat Dealers**
 *
 * `5552` - **Electric Vehicle Charging**
 *
 * `5561` - **Recreational and Utility Trailers, Camp Dealers**
 *
 * `5571` - **Motorcycle Dealers**
 *
 * `5592` - **Motor Home Dealers**
 *
 * `5598` - **Snowmobile Dealers**
 *
 * `5599` - **Miscellaneous Auto Dealers**
 *
 * `5611` - **Men's and Boy's Clothing and Accessories Stores**
 *
 * `5621` - **Women's Ready-to-Wear Stores**
 *
 * `5631` - **Women's Accessory and Specialty Shops**
 *
 * `5641` - **Children's and Infant's Wear Stores**
 *
 * `5651` - **Family Clothing Stores**
 *
 * `5655` - **Sports Apparel, Riding Apparel Stores**
 *
 * `5661` - **Shoe Stores**
 *
 * `5681` - **Furriers and Fur Shops**
 *
 * `5691` - **Men's and Women's Clothing Stores**
 *
 * `5697` - **Tailors, Seamstress, Mending, and Alterations**
 *
 * `5698` - **Wig and Toupee Stores**
 *
 * `5699` - **Miscellaneous Apparel and Accessory Shops**
 *
 * `5712` - **Furniture, Home Furnishings, and Equipment Stores, Except Appliances**
 *
 * `5713` - **Floor Covering Stores**
 *
 * `5714` - **Drapery, Window Covering and Upholstery Stores**
 *
 * `5718` - **Fireplace, Fireplace Screens, and Accessories Stores**
 *
 * `5719` - **Miscellaneous Home Furnishing Specialty Stores**
 *
 * `5722` - **Household Appliance Stores**
 *
 * `5732` - **Electronic Sales**
 *
 * `5733` - **Music Stores, Musical Instruments, Piano Sheet Music**
 *
 * `5734` - **Computer Software Stores**
 *
 * `5735` - **Record Shops**
 *
 * `5811` - **Caterers**
 *
 * `5812` - **Eating Places and Restaurants**
 *
 * `5813` - **Drinking Places (Alcoholic Beverages), Bars, Taverns, Cocktail Lounges, Nightclubs and
 * Discotheques**
 *
 * `5814` - **Fast Food Restaurants**
 *
 * `5815` - **Digital Goods: Media, Books, Movies, Music**
 *
 * `5816` - **Digital Goods: Games**
 *
 * `5817` - **Digital Goods: Applications (Excludes Games)**
 *
 * `5818` - **Digital Goods: Large Digital Goods Merchant**
 *
 * `5832` - **Antique Shops - Sales, Repairs, and Restoration Services**
 *
 * `5912` - **Drug Stores and Pharmacies**
 *
 * `5921` - **Package Stores - Beer, Wine, and Liquor**
 *
 * `5931` - **Used Merchandise and Secondhand Stores**
 *
 * `5932` - **Antique Shops**
 *
 * `5933` - **Pawn Shops and Salvage Yards**
 *
 * `5935` - **Wrecking and Salvage Yards**
 *
 * `5937` - **Antique Reproductions**
 *
 * `5940` - **Bicycle Shops - Sales and Service**
 *
 * `5941` - **Sporting Goods Stores**
 *
 * `5942` - **Book Stores**
 *
 * `5943` - **Stationery Stores, Office and School Supply Stores**
 *
 * `5944` - **Watch, Clock, Jewelry, and Silverware Stores**
 *
 * `5945` - **Hobby, Toy, and Game Shops**
 *
 * `5946` - **Camera and Photographic Supply Stores**
 *
 * `5947` - **Card Shops, Gift, Novelty, and Souvenir Shops**
 *
 * `5948` - **Leather Foods Stores**
 *
 * `5949` - **Sewing, Needle, Fabric, and Price Goods Stores**
 *
 * `5950` - **Glassware/Crystal Stores**
 *
 * `5960` - **Direct Marketing- Insurance Service**
 *
 * `5961` - **Mail Order Houses Including Catalog Order Stores, Book/Record Clubs (No longer
 * permitted for U.S. original presentments)**
 *
 * `5962` - **Direct Marketing - Travel Related Arrangements Services**
 *
 * `5963` - **Door-to-Door Sales**
 *
 * `5964` - **Direct Marketing - Catalog Merchant**
 *
 * `5965` - **Direct Marketing - Catalog and Catalog and Retail Merchant**
 *
 * `5966` - **Direct Marketing- Outbound Telemarketing Merchant**
 *
 * `5967` - **Direct Marketing - Inbound Teleservices Merchant**
 *
 * `5968` - **Direct Marketing - Continuity/Subscription Merchant**
 *
 * `5969` - **Direct Marketing - Not Elsewhere Classified**
 *
 * `5970` - **Artist's Supply and Craft Shops**
 *
 * `5971` - **Art Dealers and Galleries**
 *
 * `5972` - **Stamp and Coin Stores - Philatelic and Numismatic Supplies**
 *
 * `5973` - **Religious Goods Stores**
 *
 * `5975` - **Hearing Aids - Sales, Service, and Supply Stores**
 *
 * `5976` - **Orthopedic Goods Prosthetic Devices**
 *
 * `5977` - **Cosmetic Stores**
 *
 * `5978` - **Typewriter Stores - Sales, Rental, Service**
 *
 * `5983` - **Fuel - Fuel Oil, Wood, Coal, Liquefied Petroleum**
 *
 * `5992` - **Florists**
 *
 * `5993` - **Cigar Stores and Stands**
 *
 * `5994` - **News Dealers and Newsstands**
 *
 * `5995` - **Pet Shops, Pet Foods, and Supplies Stores**
 *
 * `5996` - **Swimming Pools - Sales, Service, and Supplies**
 *
 * `5997` - **Electric Razor Stores - Sales and Service**
 *
 * `5998` - **Tent and Awning Shops**
 *
 * `5999` - **Miscellaneous and Specialty Retail Stores**
 *
 * `6010` - **Financial Institutions - Manual Cash Disbursements**
 *
 * `6011` - **Financial Institutions - Manual Cash Disbursements**
 *
 * `6012` - **Financial Institutions - Merchandise and Services**
 *
 * `6051` - **Non-Financial Institutions - Foreign Currency, Money Orders (not wire transfer) and
 * Travelers Cheques**
 *
 * `6211` - **Security Brokers/Dealers**
 *
 * `6300` - **Insurance Sales, Underwriting, and Premiums**
 *
 * `6381` - **Insurance Premiums, (no longer valid for first presentment work)**
 *
 * `6399` - **Insurance, Not Elsewhere Classified (no longer valid for first presentment work)**
 *
 * `6513` - **Real Estate Agents and Managers - Rentals**
 *
 * `7011` - **Lodging - Hotels, Motels, Resorts, Central Reservation Services (not elsewhere
 * classified)**
 *
 * `7012` - **Timeshares**
 *
 * `7032` - **Sporting and Recreational Camps**
 *
 * `7033` - **Trailer Parks and Camp Grounds**
 *
 * `7210` - **Laundry, Cleaning, and Garment Services**
 *
 * `7211` - **Laundry - Family and Commercial**
 *
 * `7216` - **Dry Cleaners**
 *
 * `7217` - **Carpet and Upholstery Cleaning**
 *
 * `7221` - **Photographic Studios**
 *
 * `7230` - **Barber and Beauty Shops**
 *
 * `7251` - **Shop Repair Shops and Shoe Shine Parlors, and Hat Cleaning Shops**
 *
 * `7261` - **Funeral Service and Crematories**
 *
 * `7273` - **Dating and Escort Services**
 *
 * `7276` - **Tax Preparation Service**
 *
 * `7277` - **Counseling Service - Debt, Marriage, Personal**
 *
 * `7278` - **Buying/Shopping Services, Clubs**
 *
 * `7296` - **Clothing Rental - Costumes, Formal Wear, Uniforms**
 *
 * `7297` - **Massage Parlors**
 *
 * `7298` - **Health and Beauty Shops**
 *
 * `7299` - **Miscellaneous Personal Services (not elsewhere classified)**
 *
 * `7311` - **Advertising Services**
 *
 * `7321` - **Consumer Credit Reporting Agencies**
 *
 * `7332` - **Blueprinting and Photocopying Services**
 *
 * `7333` - **Commercial Photography, Art and Graphics**
 *
 * `7338` - **Quick Copy, Reproduction and Blueprinting Services**
 *
 * `7339` - **Stenographic and Secretarial Support Services**
 *
 * `7342` - **Exterminating and Disinfecting Services**
 *
 * `7349` - **Cleaning and Maintenance, Janitorial Services**
 *
 * `7361` - **Employment Agencies, Temporary Help Services**
 *
 * `7372` - **Computer Programming, Integrated Systems Design and Data Processing Services**
 *
 * `7375` - **Information Retrieval Services**
 *
 * `7379` - **Computer Maintenance and Repair Services, Not Elsewhere Classified**
 *
 * `7392` - **Management, Consulting, and Public Relations Services**
 *
 * `7393` - **Protective and Security Services - Including Armored Cars and Guard Dogs**
 *
 * `7394` - **Equipment Rental and Leasing Services, Tool Rental, Furniture Rental, and Appliance
 * Rental**
 *
 * `7395` - **Photofinishing Laboratories, Photo Developing**
 *
 * `7399` - **Business Services, Not Elsewhere Classified**
 *
 * `7511` - **Truck Stop**
 *
 * `7512` - **Car Rental Companies (Not Listed Below)**
 *
 * `7513` - **Truck and Utility Trailer Rentals**
 *
 * `7519` - **Motor Home and Recreational Vehicle Rentals**
 *
 * `7523` - **Automobile Parking Lots and Garages**
 *
 * `7531` - **Automotive Body Repair Shops**
 *
 * `7534` - **Tire Re-treading and Repair Shops**
 *
 * `7535` - **Paint Shops - Automotive**
 *
 * `7538` - **Automotive Service Shops**
 *
 * `7542` - **Car Washes**
 *
 * `7549` - **Towing Services**
 *
 * `7622` - **Radio Repair Shops**
 *
 * `7623` - **Air Conditioning and Refrigeration Repair Shops**
 *
 * `7629` - **Electrical And Small Appliance Repair Shops**
 *
 * `7631` - **Watch, Clock, and Jewelry Repair**
 *
 * `7641` - **Furniture, Furniture Repair, and Furniture Refinishing**
 *
 * `7692` - **Welding Repair**
 *
 * `7699` - **Repair Shops and Related Services - Miscellaneous**
 *
 * `7800` - **Government-Owned Lotteries**
 *
 * `7801` - **Government-Licensed On-Line Casinos (On-Line Gambling)**
 *
 * `7802` - **Government-Licensed Horse/Dog Racing**
 *
 * `7829` - **Motion Pictures and Video Tape Production and Distribution**
 *
 * `7832` - **Motion Picture Theaters**
 *
 * `7841` - **Video Tape Rental Stores**
 *
 * `7911` - **Dance Halls, Studios and Schools**
 *
 * `7922` - **Theatrical Producers (Except Motion Pictures), Ticket Agencies**
 *
 * `7929` - **Bands, Orchestras, and Miscellaneous Entertainers (Not Elsewhere Classified)**
 *
 * `7932` - **Billiard and Pool Establishments**
 *
 * `7933` - **Bowling Alleys**
 *
 * `7941` - **Commercial Sports, Athletic Fields, Professional Sport Clubs, and Sport Promoters**
 *
 * `7991` - **Tourist Attractions and Exhibits**
 *
 * `7992` - **Golf Courses - Public**
 *
 * `7993` - **Video Amusement Game Supplies**
 *
 * `7994` - **Video Game Arcades/Establishments**
 *
 * `7995` - **Betting (including Lottery Tickets, Casino Gaming Chips, Off-track Betting and Wagers
 * at Race Tracks)**
 *
 * `7996` - **Amusement Parks, Carnivals, Circuses, Fortune Tellers**
 *
 * `7997` - **Membership Clubs (Sports, Recreation, Athletic), Country Clubs, and Private Golf
 * Courses**
 *
 * `7998` - **Aquariums, Sea-aquariums, Dolphinariums**
 *
 * `7999` - **Recreation Services (Not Elsewhere Classified)**
 *
 * `8011` - **Doctors and Physicians (Not Elsewhere Classified)**
 *
 * `8021` - **Dentists and Orthodontists**
 *
 * `8031` - **Osteopaths**
 *
 * `8041` - **Chiropractors**
 *
 * `8042` - **Optometrists and Ophthalmologists**
 *
 * `8043` - **Opticians, Opticians Goods and Eyeglasses**
 *
 * `8044` - **Opticians, Optical Goods, and Eyeglasses (no longer valid for first presentments)**
 *
 * `8049` - **Podiatrists and Chiropodists**
 *
 * `8050` - **Nursing and Personal Care Facilities**
 *
 * `8062` - **Hospitals**
 *
 * `8071` - **Medical and Dental Laboratories**
 *
 * `8099` - **Medical Services and Health Practitioners (Not Elsewhere Classified)**
 *
 * `8111` - **Legal Services and Attorneys**
 *
 * `8211` - **Elementary and Secondary Schools**
 *
 * `8220` - **Colleges, Junior Colleges, Universities, and Professional Schools**
 *
 * `8241` - **Correspondence Schools**
 *
 * `8244` - **Business and Secretarial Schools**
 *
 * `8249` - **Vocational Schools and Trade Schools**
 *
 * `8299` - **Schools and Educational Services (Not Elsewhere Classified)**
 *
 * `8351` - **Child Care Services**
 *
 * `8398` - **Charitable and Social Service Organizations**
 *
 * `8641` - **Civic, Fraternal, and Social Associations**
 *
 * `8651` - **Political Organizations**
 *
 * `8661` - **Religious Organizations**
 *
 * `8675` - **Automobile Associations**
 *
 * `8699` - **Membership Organizations (Not Elsewhere Classified)**
 *
 * `8734` - **Testing Laboratories (non-medical)**
 *
 * `8911` - **Architectural - Engineering and Surveying Services**
 *
 * `8931` - **Accounting, Auditing, and Bookkeeping Services**
 *
 * `8999` - **Professional Services (Not Elsewhere Defined)**
 *
 * `9211` - **Court Costs, including Alimony and Child Support**
 *
 * `9222` - **Fines**
 *
 * `9223` - **Bail and Bond Payments**
 *
 * `9311` - **Tax Payments**
 *
 * `9399` - **Government Services (Not Elsewhere Classified)**
 *
 * `9402` - **Postal Services - Government Only**
 *
 * `9405` - **Intra - Government Transactions**
 *
 * `9700` - **Automated Referral Service (For Visa Only)**
 *
 * `9701` - **Visa Credential Service (For Visa Only)**
 *
 * `9702` - **GCAS Emergency Services (For Visa Only)**
 *
 * `9950` - **Intra - Company Purchases (For Visa Only)**
 *
 * </details>
 */
export const MccsMccCode2 = {
  _0742: "0742",
  _0763: "0763",
  _0780: "0780",
  _1520: "1520",
  _1711: "1711",
  _1731: "1731",
  _1740: "1740",
  _1750: "1750",
  _1761: "1761",
  _1771: "1771",
  _1799: "1799",
  _2741: "2741",
  _2791: "2791",
  _2842: "2842",
  _3000: "3000",
  _3001: "3001",
  _3002: "3002",
  _3003: "3003",
  _3004: "3004",
  _3005: "3005",
  _3006: "3006",
  _3007: "3007",
  _3008: "3008",
  _3009: "3009",
  _3010: "3010",
  _3011: "3011",
  _3012: "3012",
  _3013: "3013",
  _3014: "3014",
  _3015: "3015",
  _3016: "3016",
  _3017: "3017",
  _3018: "3018",
  _3019: "3019",
  _3020: "3020",
  _3021: "3021",
  _3022: "3022",
  _3023: "3023",
  _3024: "3024",
  _3025: "3025",
  _3026: "3026",
  _3027: "3027",
  _3028: "3028",
  _3029: "3029",
  _3030: "3030",
  _3031: "3031",
  _3032: "3032",
  _3033: "3033",
  _3034: "3034",
  _3035: "3035",
  _3036: "3036",
  _3037: "3037",
  _3038: "3038",
  _3039: "3039",
  _3040: "3040",
  _3041: "3041",
  _3042: "3042",
  _3043: "3043",
  _3044: "3044",
  _3045: "3045",
  _3046: "3046",
  _3047: "3047",
  _3048: "3048",
  _3049: "3049",
  _3050: "3050",
  _3051: "3051",
  _3052: "3052",
  _3053: "3053",
  _3054: "3054",
  _3055: "3055",
  _3056: "3056",
  _3057: "3057",
  _3058: "3058",
  _3059: "3059",
  _3060: "3060",
  _3061: "3061",
  _3062: "3062",
  _3063: "3063",
  _3064: "3064",
  _3065: "3065",
  _3066: "3066",
  _3067: "3067",
  _3068: "3068",
  _3069: "3069",
  _3070: "3070",
  _3071: "3071",
  _3072: "3072",
  _3073: "3073",
  _3074: "3074",
  _3075: "3075",
  _3076: "3076",
  _3077: "3077",
  _3078: "3078",
  _3079: "3079",
  _3080: "3080",
  _3081: "3081",
  _3082: "3082",
  _3083: "3083",
  _3084: "3084",
  _3085: "3085",
  _3086: "3086",
  _3087: "3087",
  _3088: "3088",
  _3089: "3089",
  _3090: "3090",
  _3091: "3091",
  _3092: "3092",
  _3093: "3093",
  _3094: "3094",
  _3095: "3095",
  _3096: "3096",
  _3097: "3097",
  _3098: "3098",
  _3099: "3099",
  _3100: "3100",
  _3101: "3101",
  _3102: "3102",
  _3103: "3103",
  _3104: "3104",
  _3105: "3105",
  _3106: "3106",
  _3107: "3107",
  _3108: "3108",
  _3109: "3109",
  _3110: "3110",
  _3111: "3111",
  _3112: "3112",
  _3113: "3113",
  _3114: "3114",
  _3115: "3115",
  _3116: "3116",
  _3117: "3117",
  _3118: "3118",
  _3119: "3119",
  _3120: "3120",
  _3121: "3121",
  _3122: "3122",
  _3123: "3123",
  _3124: "3124",
  _3125: "3125",
  _3126: "3126",
  _3127: "3127",
  _3128: "3128",
  _3129: "3129",
  _3130: "3130",
  _3131: "3131",
  _3132: "3132",
  _3133: "3133",
  _3134: "3134",
  _3135: "3135",
  _3136: "3136",
  _3137: "3137",
  _3138: "3138",
  _3139: "3139",
  _3140: "3140",
  _3141: "3141",
  _3142: "3142",
  _3143: "3143",
  _3144: "3144",
  _3145: "3145",
  _3146: "3146",
  _3147: "3147",
  _3148: "3148",
  _3149: "3149",
  _3150: "3150",
  _3151: "3151",
  _3152: "3152",
  _3153: "3153",
  _3154: "3154",
  _3155: "3155",
  _3156: "3156",
  _3157: "3157",
  _3158: "3158",
  _3159: "3159",
  _3160: "3160",
  _3161: "3161",
  _3162: "3162",
  _3163: "3163",
  _3164: "3164",
  _3165: "3165",
  _3166: "3166",
  _3167: "3167",
  _3168: "3168",
  _3169: "3169",
  _3170: "3170",
  _3171: "3171",
  _3172: "3172",
  _3173: "3173",
  _3174: "3174",
  _3175: "3175",
  _3176: "3176",
  _3177: "3177",
  _3178: "3178",
  _3179: "3179",
  _3180: "3180",
  _3181: "3181",
  _3182: "3182",
  _3183: "3183",
  _3184: "3184",
  _3185: "3185",
  _3186: "3186",
  _3187: "3187",
  _3188: "3188",
  _3189: "3189",
  _3190: "3190",
  _3191: "3191",
  _3192: "3192",
  _3193: "3193",
  _3194: "3194",
  _3195: "3195",
  _3196: "3196",
  _3197: "3197",
  _3198: "3198",
  _3199: "3199",
  _3200: "3200",
  _3201: "3201",
  _3202: "3202",
  _3203: "3203",
  _3204: "3204",
  _3205: "3205",
  _3206: "3206",
  _3207: "3207",
  _3208: "3208",
  _3209: "3209",
  _3210: "3210",
  _3211: "3211",
  _3212: "3212",
  _3213: "3213",
  _3214: "3214",
  _3215: "3215",
  _3216: "3216",
  _3217: "3217",
  _3218: "3218",
  _3219: "3219",
  _3220: "3220",
  _3221: "3221",
  _3222: "3222",
  _3223: "3223",
  _3224: "3224",
  _3225: "3225",
  _3226: "3226",
  _3227: "3227",
  _3228: "3228",
  _3229: "3229",
  _3230: "3230",
  _3231: "3231",
  _3232: "3232",
  _3233: "3233",
  _3234: "3234",
  _3235: "3235",
  _3236: "3236",
  _3237: "3237",
  _3238: "3238",
  _3239: "3239",
  _3240: "3240",
  _3241: "3241",
  _3242: "3242",
  _3243: "3243",
  _3244: "3244",
  _3245: "3245",
  _3246: "3246",
  _3247: "3247",
  _3248: "3248",
  _3249: "3249",
  _3250: "3250",
  _3251: "3251",
  _3252: "3252",
  _3253: "3253",
  _3254: "3254",
  _3255: "3255",
  _3256: "3256",
  _3257: "3257",
  _3258: "3258",
  _3259: "3259",
  _3260: "3260",
  _3261: "3261",
  _3262: "3262",
  _3263: "3263",
  _3264: "3264",
  _3265: "3265",
  _3266: "3266",
  _3267: "3267",
  _3268: "3268",
  _3269: "3269",
  _3270: "3270",
  _3271: "3271",
  _3272: "3272",
  _3273: "3273",
  _3274: "3274",
  _3275: "3275",
  _3276: "3276",
  _3277: "3277",
  _3278: "3278",
  _3279: "3279",
  _3280: "3280",
  _3281: "3281",
  _3282: "3282",
  _3283: "3283",
  _3284: "3284",
  _3285: "3285",
  _3286: "3286",
  _3287: "3287",
  _3288: "3288",
  _3289: "3289",
  _3290: "3290",
  _3291: "3291",
  _3292: "3292",
  _3293: "3293",
  _3294: "3294",
  _3295: "3295",
  _3296: "3296",
  _3297: "3297",
  _3298: "3298",
  _3299: "3299",
  _3351: "3351",
  _3352: "3352",
  _3353: "3353",
  _3354: "3354",
  _3355: "3355",
  _3356: "3356",
  _3357: "3357",
  _3358: "3358",
  _3359: "3359",
  _3360: "3360",
  _3361: "3361",
  _3362: "3362",
  _3363: "3363",
  _3364: "3364",
  _3365: "3365",
  _3366: "3366",
  _3367: "3367",
  _3368: "3368",
  _3369: "3369",
  _3370: "3370",
  _3371: "3371",
  _3372: "3372",
  _3373: "3373",
  _3374: "3374",
  _3375: "3375",
  _3376: "3376",
  _3377: "3377",
  _3378: "3378",
  _3379: "3379",
  _3380: "3380",
  _3381: "3381",
  _3382: "3382",
  _3383: "3383",
  _3384: "3384",
  _3385: "3385",
  _3386: "3386",
  _3387: "3387",
  _3388: "3388",
  _3389: "3389",
  _3390: "3390",
  _3391: "3391",
  _3392: "3392",
  _3393: "3393",
  _3394: "3394",
  _3395: "3395",
  _3396: "3396",
  _3397: "3397",
  _3398: "3398",
  _3399: "3399",
  _3400: "3400",
  _3401: "3401",
  _3402: "3402",
  _3403: "3403",
  _3404: "3404",
  _3405: "3405",
  _3406: "3406",
  _3407: "3407",
  _3408: "3408",
  _3409: "3409",
  _3410: "3410",
  _3411: "3411",
  _3412: "3412",
  _3413: "3413",
  _3414: "3414",
  _3415: "3415",
  _3416: "3416",
  _3417: "3417",
  _3418: "3418",
  _3419: "3419",
  _3420: "3420",
  _3421: "3421",
  _3422: "3422",
  _3423: "3423",
  _3424: "3424",
  _3425: "3425",
  _3426: "3426",
  _3427: "3427",
  _3428: "3428",
  _3429: "3429",
  _3430: "3430",
  _3431: "3431",
  _3432: "3432",
  _3433: "3433",
  _3434: "3434",
  _3435: "3435",
  _3436: "3436",
  _3437: "3437",
  _3438: "3438",
  _3439: "3439",
  _3440: "3440",
  _3441: "3441",
  _3501: "3501",
  _3502: "3502",
  _3503: "3503",
  _3504: "3504",
  _3505: "3505",
  _3506: "3506",
  _3507: "3507",
  _3508: "3508",
  _3509: "3509",
  _3510: "3510",
  _3511: "3511",
  _3512: "3512",
  _3513: "3513",
  _3514: "3514",
  _3515: "3515",
  _3516: "3516",
  _3517: "3517",
  _3518: "3518",
  _3519: "3519",
  _3520: "3520",
  _3521: "3521",
  _3522: "3522",
  _3523: "3523",
  _3524: "3524",
  _3525: "3525",
  _3526: "3526",
  _3527: "3527",
  _3528: "3528",
  _3529: "3529",
  _3530: "3530",
  _3531: "3531",
  _3532: "3532",
  _3533: "3533",
  _3534: "3534",
  _3535: "3535",
  _3536: "3536",
  _3537: "3537",
  _3538: "3538",
  _3539: "3539",
  _3540: "3540",
  _3541: "3541",
  _3542: "3542",
  _3543: "3543",
  _3544: "3544",
  _3545: "3545",
  _3546: "3546",
  _3547: "3547",
  _3548: "3548",
  _3549: "3549",
  _3550: "3550",
  _3551: "3551",
  _3552: "3552",
  _3553: "3553",
  _3554: "3554",
  _3555: "3555",
  _3556: "3556",
  _3557: "3557",
  _3558: "3558",
  _3559: "3559",
  _3560: "3560",
  _3561: "3561",
  _3562: "3562",
  _3563: "3563",
  _3564: "3564",
  _3565: "3565",
  _3566: "3566",
  _3567: "3567",
  _3568: "3568",
  _3569: "3569",
  _3570: "3570",
  _3571: "3571",
  _3572: "3572",
  _3573: "3573",
  _3574: "3574",
  _3575: "3575",
  _3576: "3576",
  _3577: "3577",
  _3578: "3578",
  _3579: "3579",
  _3580: "3580",
  _3581: "3581",
  _3582: "3582",
  _3583: "3583",
  _3584: "3584",
  _3585: "3585",
  _3586: "3586",
  _3587: "3587",
  _3588: "3588",
  _3589: "3589",
  _3590: "3590",
  _3591: "3591",
  _3592: "3592",
  _3593: "3593",
  _3594: "3594",
  _3595: "3595",
  _3596: "3596",
  _3597: "3597",
  _3598: "3598",
  _3599: "3599",
  _3600: "3600",
  _3601: "3601",
  _3602: "3602",
  _3603: "3603",
  _3604: "3604",
  _3605: "3605",
  _3606: "3606",
  _3607: "3607",
  _3608: "3608",
  _3609: "3609",
  _3610: "3610",
  _3611: "3611",
  _3612: "3612",
  _3613: "3613",
  _3614: "3614",
  _3615: "3615",
  _3616: "3616",
  _3617: "3617",
  _3618: "3618",
  _3619: "3619",
  _3620: "3620",
  _3621: "3621",
  _3622: "3622",
  _3623: "3623",
  _3624: "3624",
  _3625: "3625",
  _3626: "3626",
  _3627: "3627",
  _3628: "3628",
  _3629: "3629",
  _3630: "3630",
  _3631: "3631",
  _3632: "3632",
  _3633: "3633",
  _3634: "3634",
  _3635: "3635",
  _3636: "3636",
  _3637: "3637",
  _3638: "3638",
  _3639: "3639",
  _3640: "3640",
  _3641: "3641",
  _3642: "3642",
  _3643: "3643",
  _3644: "3644",
  _3645: "3645",
  _3646: "3646",
  _3647: "3647",
  _3648: "3648",
  _3649: "3649",
  _3650: "3650",
  _3651: "3651",
  _3652: "3652",
  _3653: "3653",
  _3654: "3654",
  _3655: "3655",
  _3656: "3656",
  _3657: "3657",
  _3658: "3658",
  _3659: "3659",
  _3660: "3660",
  _3661: "3661",
  _3662: "3662",
  _3663: "3663",
  _3664: "3664",
  _3665: "3665",
  _3666: "3666",
  _3667: "3667",
  _3668: "3668",
  _3669: "3669",
  _3670: "3670",
  _3671: "3671",
  _3672: "3672",
  _3673: "3673",
  _3674: "3674",
  _3675: "3675",
  _3676: "3676",
  _3677: "3677",
  _3678: "3678",
  _3679: "3679",
  _3680: "3680",
  _3681: "3681",
  _3682: "3682",
  _3683: "3683",
  _3684: "3684",
  _3685: "3685",
  _3686: "3686",
  _3687: "3687",
  _3688: "3688",
  _3689: "3689",
  _3690: "3690",
  _3691: "3691",
  _3692: "3692",
  _3693: "3693",
  _3694: "3694",
  _3695: "3695",
  _3696: "3696",
  _3697: "3697",
  _3698: "3698",
  _3699: "3699",
  _3700: "3700",
  _3701: "3701",
  _3702: "3702",
  _3703: "3703",
  _3704: "3704",
  _3705: "3705",
  _3706: "3706",
  _3707: "3707",
  _3708: "3708",
  _3709: "3709",
  _3710: "3710",
  _3711: "3711",
  _3712: "3712",
  _3713: "3713",
  _3714: "3714",
  _3715: "3715",
  _3716: "3716",
  _3717: "3717",
  _3718: "3718",
  _3719: "3719",
  _3720: "3720",
  _3721: "3721",
  _3722: "3722",
  _3723: "3723",
  _3724: "3724",
  _3725: "3725",
  _3726: "3726",
  _3727: "3727",
  _3728: "3728",
  _3729: "3729",
  _3730: "3730",
  _3731: "3731",
  _3732: "3732",
  _3733: "3733",
  _3734: "3734",
  _3735: "3735",
  _3736: "3736",
  _3737: "3737",
  _3738: "3738",
  _3739: "3739",
  _3740: "3740",
  _3741: "3741",
  _3742: "3742",
  _3743: "3743",
  _3744: "3744",
  _3745: "3745",
  _3746: "3746",
  _3747: "3747",
  _3748: "3748",
  _3749: "3749",
  _3750: "3750",
  _3751: "3751",
  _3752: "3752",
  _3753: "3753",
  _3754: "3754",
  _3755: "3755",
  _3756: "3756",
  _3757: "3757",
  _3758: "3758",
  _3759: "3759",
  _3760: "3760",
  _3761: "3761",
  _3762: "3762",
  _3763: "3763",
  _3764: "3764",
  _3765: "3765",
  _3766: "3766",
  _3767: "3767",
  _3768: "3768",
  _3769: "3769",
  _3770: "3770",
  _3771: "3771",
  _3772: "3772",
  _3773: "3773",
  _3774: "3774",
  _3775: "3775",
  _3776: "3776",
  _3777: "3777",
  _3778: "3778",
  _3779: "3779",
  _3780: "3780",
  _3781: "3781",
  _3782: "3782",
  _3783: "3783",
  _3784: "3784",
  _3785: "3785",
  _3786: "3786",
  _3787: "3787",
  _3788: "3788",
  _3789: "3789",
  _3790: "3790",
  _3816: "3816",
  _3835: "3835",
  _4011: "4011",
  _4111: "4111",
  _4112: "4112",
  _4119: "4119",
  _4121: "4121",
  _4131: "4131",
  _4214: "4214",
  _4215: "4215",
  _4225: "4225",
  _4411: "4411",
  _4457: "4457",
  _4468: "4468",
  _4511: "4511",
  _4582: "4582",
  _4722: "4722",
  _4723: "4723",
  _4784: "4784",
  _4789: "4789",
  _4812: "4812",
  _4814: "4814",
  _4815: "4815",
  _4816: "4816",
  _4821: "4821",
  _4829: "4829",
  _4899: "4899",
  _4900: "4900",
  _5013: "5013",
  _5021: "5021",
  _5039: "5039",
  _5044: "5044",
  _5045: "5045",
  _5046: "5046",
  _5047: "5047",
  _5051: "5051",
  _5065: "5065",
  _5072: "5072",
  _5074: "5074",
  _5085: "5085",
  _5094: "5094",
  _5099: "5099",
  _5111: "5111",
  _5122: "5122",
  _5131: "5131",
  _5137: "5137",
  _5139: "5139",
  _5169: "5169",
  _5172: "5172",
  _5192: "5192",
  _5193: "5193",
  _5198: "5198",
  _5199: "5199",
  _5200: "5200",
  _5211: "5211",
  _5231: "5231",
  _5251: "5251",
  _5261: "5261",
  _5271: "5271",
  _5300: "5300",
  _5309: "5309",
  _5310: "5310",
  _5311: "5311",
  _5331: "5331",
  _5399: "5399",
  _5411: "5411",
  _5422: "5422",
  _5441: "5441",
  _5451: "5451",
  _5462: "5462",
  _5499: "5499",
  _5511: "5511",
  _5521: "5521",
  _5531: "5531",
  _5532: "5532",
  _5533: "5533",
  _5541: "5541",
  _5542: "5542",
  _5551: "5551",
  _5552: "5552",
  _5561: "5561",
  _5571: "5571",
  _5592: "5592",
  _5598: "5598",
  _5599: "5599",
  _5611: "5611",
  _5621: "5621",
  _5631: "5631",
  _5641: "5641",
  _5651: "5651",
  _5655: "5655",
  _5661: "5661",
  _5681: "5681",
  _5691: "5691",
  _5697: "5697",
  _5698: "5698",
  _5699: "5699",
  _5712: "5712",
  _5713: "5713",
  _5714: "5714",
  _5718: "5718",
  _5719: "5719",
  _5722: "5722",
  _5732: "5732",
  _5733: "5733",
  _5734: "5734",
  _5735: "5735",
  _5811: "5811",
  _5812: "5812",
  _5813: "5813",
  _5814: "5814",
  _5815: "5815",
  _5816: "5816",
  _5817: "5817",
  _5818: "5818",
  _5832: "5832",
  _5912: "5912",
  _5921: "5921",
  _5931: "5931",
  _5932: "5932",
  _5933: "5933",
  _5935: "5935",
  _5937: "5937",
  _5940: "5940",
  _5941: "5941",
  _5942: "5942",
  _5943: "5943",
  _5944: "5944",
  _5945: "5945",
  _5946: "5946",
  _5947: "5947",
  _5948: "5948",
  _5949: "5949",
  _5950: "5950",
  _5960: "5960",
  _5961: "5961",
  _5962: "5962",
  _5963: "5963",
  _5964: "5964",
  _5965: "5965",
  _5966: "5966",
  _5967: "5967",
  _5968: "5968",
  _5969: "5969",
  _5970: "5970",
  _5971: "5971",
  _5972: "5972",
  _5973: "5973",
  _5975: "5975",
  _5976: "5976",
  _5977: "5977",
  _5978: "5978",
  _5983: "5983",
  _5992: "5992",
  _5993: "5993",
  _5994: "5994",
  _5995: "5995",
  _5996: "5996",
  _5997: "5997",
  _5998: "5998",
  _5999: "5999",
  _6010: "6010",
  _6011: "6011",
  _6012: "6012",
  _6051: "6051",
  _6211: "6211",
  _6300: "6300",
  _6381: "6381",
  _6399: "6399",
  _6513: "6513",
  _7011: "7011",
  _7012: "7012",
  _7032: "7032",
  _7033: "7033",
  _7210: "7210",
  _7211: "7211",
  _7216: "7216",
  _7217: "7217",
  _7221: "7221",
  _7230: "7230",
  _7251: "7251",
  _7261: "7261",
  _7273: "7273",
  _7276: "7276",
  _7277: "7277",
  _7278: "7278",
  _7296: "7296",
  _7297: "7297",
  _7298: "7298",
  _7299: "7299",
  _7311: "7311",
  _7321: "7321",
  _7332: "7332",
  _7333: "7333",
  _7338: "7338",
  _7339: "7339",
  _7342: "7342",
  _7349: "7349",
  _7361: "7361",
  _7372: "7372",
  _7375: "7375",
  _7379: "7379",
  _7392: "7392",
  _7393: "7393",
  _7394: "7394",
  _7395: "7395",
  _7399: "7399",
  _7511: "7511",
  _7512: "7512",
  _7513: "7513",
  _7519: "7519",
  _7523: "7523",
  _7531: "7531",
  _7534: "7534",
  _7535: "7535",
  _7538: "7538",
  _7542: "7542",
  _7549: "7549",
  _7622: "7622",
  _7623: "7623",
  _7629: "7629",
  _7631: "7631",
  _7641: "7641",
  _7692: "7692",
  _7699: "7699",
  _7800: "7800",
  _7801: "7801",
  _7802: "7802",
  _7829: "7829",
  _7832: "7832",
  _7841: "7841",
  _7911: "7911",
  _7922: "7922",
  _7929: "7929",
  _7932: "7932",
  _7933: "7933",
  _7941: "7941",
  _7991: "7991",
  _7992: "7992",
  _7993: "7993",
  _7994: "7994",
  _7995: "7995",
  _7996: "7996",
  _7997: "7997",
  _7998: "7998",
  _7999: "7999",
  _8011: "8011",
  _8021: "8021",
  _8031: "8031",
  _8041: "8041",
  _8042: "8042",
  _8043: "8043",
  _8044: "8044",
  _8049: "8049",
  _8050: "8050",
  _8062: "8062",
  _8071: "8071",
  _8099: "8099",
  _8111: "8111",
  _8211: "8211",
  _8220: "8220",
  _8241: "8241",
  _8244: "8244",
  _8249: "8249",
  _8299: "8299",
  _8351: "8351",
  _8398: "8398",
  _8641: "8641",
  _8651: "8651",
  _8661: "8661",
  _8675: "8675",
  _8699: "8699",
  _8734: "8734",
  _8911: "8911",
  _8931: "8931",
  _8999: "8999",
  _9211: "9211",
  _9222: "9222",
  _9223: "9223",
  _9311: "9311",
  _9399: "9399",
  _9402: "9402",
  _9405: "9405",
  _9700: "9700",
  _9701: "9701",
  _9702: "9702",
  _9950: "9950",
} as const;
export type MccsMccCode2 = (typeof MccsMccCode2)[keyof typeof MccsMccCode2] | (string & {});

export const mccsMccCode2Schema: EnumSchema<MccsMccCode2> = s.enumOf<MccsMccCode2>(MccsMccCode2);
