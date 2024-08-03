import { ConfigurableModuleAsyncOptions, DynamicModule } from "@nestjs/common";
import { IAPConfig } from './iap.service';
export declare const ConfigurableModuleClass: import("@nestjs/common").ConfigurableModuleCls<IAPConfig, "forRoot", "create", {}>, MODULE_OPTIONS_TOKEN: string | symbol;
export declare class IAPModule {
    static forRootAsync(options: ConfigurableModuleAsyncOptions<IAPConfig>, isGlobal?: boolean): DynamicModule;
    static forRoot(config: IAPConfig): DynamicModule;
}
