"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IAPService = exports.IAP_CONFIG = void 0;
const node_iap_1 = require("@jeremybarbet/node-iap");
const common_1 = require("@nestjs/common");
exports.IAP_CONFIG = 'IAP_CONFIG';
let IAPService = exports.IAPService = class IAPService {
    constructor(config) {
        this.config = config;
        this.config = config;
    }
    async verifyAppleReceipt(requestBody) {
        var _a;
        if (!((_a = this.config) === null || _a === void 0 ? void 0 : _a.apple)) {
            throw new Error('Missing Apple configuration.');
        }
        return await (0, node_iap_1.verifyAppleReceipt)(requestBody, this.config.apple);
    }
    async verifyGoogleReceipt(requestBody) {
        var _a;
        if (!((_a = this.config) === null || _a === void 0 ? void 0 : _a.google)) {
            throw new Error('Missing Google configuration.');
        }
        return await (0, node_iap_1.verifyGoogleReceipt)(requestBody, this.config.google);
    }
};
exports.IAPService = IAPService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(exports.IAP_CONFIG)),
    __metadata("design:paramtypes", [Object])
], IAPService);
