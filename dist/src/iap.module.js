"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.IAPModule = exports.MODULE_OPTIONS_TOKEN = exports.ConfigurableModuleClass = void 0;
var common_1 = require("@nestjs/common");
var iap_service_1 = require("./iap.service");
exports.ConfigurableModuleClass = (_a = new common_1.ConfigurableModuleBuilder()
    .setClassMethodName("forRoot")
    .build(), _a.ConfigurableModuleClass), exports.MODULE_OPTIONS_TOKEN = _a.MODULE_OPTIONS_TOKEN;
var IAPModule = exports.IAPModule = /** @class */ (function () {
    function IAPModule() {
    }
    IAPModule_1 = IAPModule;
    IAPModule.forRootAsync = function (options) {
        if (!options.useFactory) {
            throw new Error("The asynchronous configurations are missing. Expected : \"useFactory\".");
        }
        return {
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
    };
    IAPModule.forRoot = function (config) {
        return {
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
    };
    var IAPModule_1;
    IAPModule = IAPModule_1 = __decorate([
        (0, common_1.Module)({})
    ], IAPModule);
    return IAPModule;
}());
