import { type AppleConfig, type AppleRequestBody, type GoogleConfig, type GoogleRequestBody } from '@jeremybarbet/node-iap';
export interface IAPConfig {
    apple?: AppleConfig;
    google?: GoogleConfig;
}
export declare const IAP_CONFIG = "IAP_CONFIG";
export declare class IAPService {
    private readonly config;
    constructor(config: IAPConfig);
    verifyAppleReceipt(requestBody: AppleRequestBody): Promise<import("@jeremybarbet/node-iap").AppleVerifyResponse>;
    verifyGoogleReceipt(requestBody: GoogleRequestBody): Promise<import("@jeremybarbet/node-iap").GoogleVerifyResponse>;
}
