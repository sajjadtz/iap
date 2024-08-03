"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _a;
var IAPModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.IAPModule = exports.MODULE_OPTIONS_TOKEN = exports.ConfigurableModuleClass = void 0;
const common_1 = require("@nestjs/common");
const iap_service_1 = require("./iap.service");
_a = new common_1.ConfigurableModuleBuilder()
    .setClassMethodName("forRoot")
    .build(), exports.ConfigurableModuleClass = _a.ConfigurableModuleClass, exports.MODULE_OPTIONS_TOKEN = _a.MODULE_OPTIONS_TOKEN;
let IAPModule = exports.IAPModule = IAPModule_1 = class IAPModule {
    static forRootAsync(options, isGlobal = true) {
        if (!options.useFactory) {
            throw new Error(`The asynchronous configurations are missing. Expected : "useFactory".`);
        }
        return {
            global: true,
            module: IAPModule_1,
            providers: [
                {
                    provide: iap_service_1.IAP_CONFIG,
                    useFactory: options.useFactory,
                },
                iap_service_1.IAPService,
            ],
            exports: [iap_service_1.IAPService],
        };
    }
    static forRoot(config) {
        return {
            global: true,
            module: IAPModule_1,
            providers: [
                {
                    provide: iap_service_1.IAP_CONFIG,
                    useValue: config,
                },
                iap_service_1.IAPService,
            ],
            exports: [iap_service_1.IAPService],
        };
    }
};
exports.IAPModule = IAPModule = IAPModule_1 = __decorate([
    (0, common_1.Module)({})
], IAPModule);
