import {
  ConfigurableModuleAsyncOptions,
  ConfigurableModuleBuilder,
  DynamicModule,
  Module,
} from "@nestjs/common";

import { IAPConfig, IAP_CONFIG, IAPService } from "./iap.service";

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<IAPConfig>()
    .setClassMethodName("forRoot")
    .build();

@Module({})
export class IAPModule {
  static forRootAsync(
    options: ConfigurableModuleAsyncOptions<IAPConfig>
  ): DynamicModule {
    if (!options.useFactory) {
      throw new Error(
        `The asynchronous configurations are missing. Expected : "useFactory".`
      );
    }
    return {
      module: IAPModule,
      providers: [
        {
          provide: IAP_CONFIG,
          useFactory: options.useFactory,
        },
        IAPService,
      ],
      exports: [IAPService],
    };
  }

  static forRoot(config: IAPConfig): DynamicModule {
    return {
      module: IAPModule,
      providers: [
        {
          provide: IAP_CONFIG,
          useValue: config,
        },
        IAPService,
      ],
      exports: [IAPService],
    };
  }
}
