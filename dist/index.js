"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IAPService = exports.IAPModule = void 0;
__exportStar(require("@jeremybarbet/node-iap"), exports);
var iap_module_1 = require("./src/iap.module");
Object.defineProperty(exports, "IAPModule", { enumerable: true, get: function () { return iap_module_1.IAPModule; } });
var iap_service_1 = require("./src/iap.service");
Object.defineProperty(exports, "IAPService", { enumerable: true, get: function () { return iap_service_1.IAPService; } });
