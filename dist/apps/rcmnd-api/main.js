/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(5), exports);
tslib_1.__exportStar(__webpack_require__(6), exports);
tslib_1.__exportStar(__webpack_require__(15), exports);
tslib_1.__exportStar(__webpack_require__(16), exports);
tslib_1.__exportStar(__webpack_require__(17), exports);
tslib_1.__exportStar(__webpack_require__(19), exports);
tslib_1.__exportStar(__webpack_require__(20), exports);


/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DtoModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
let DtoModule = class DtoModule {
};
exports.DtoModule = DtoModule;
exports.DtoModule = DtoModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [],
        exports: [],
    })
], DtoModule);


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateMealDto = exports.UpsertMealDto = exports.CreateMealDto = void 0;
const tslib_1 = __webpack_require__(4);
const class_validator_1 = __webpack_require__(7);
const api_1 = __webpack_require__(8);
/**
 * Use the `Pick` utility type to extract only the properties we want for
 * new to-do items
 */
class CreateMealDto {
}
exports.CreateMealDto = CreateMealDto;
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], CreateMealDto.prototype, "title", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], CreateMealDto.prototype, "description", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", typeof (_a = typeof api_1.MealSort !== "undefined" && api_1.MealSort) === "function" ? _a : Object)
], CreateMealDto.prototype, "sort", void 0);
class UpsertMealDto {
}
exports.UpsertMealDto = UpsertMealDto;
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], UpsertMealDto.prototype, "title", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], UpsertMealDto.prototype, "description", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], UpsertMealDto.prototype, "id", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", Boolean)
], UpsertMealDto.prototype, "isVega", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], UpsertMealDto.prototype, "dateServed", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", typeof (_c = typeof api_1.MealSort !== "undefined" && api_1.MealSort) === "function" ? _c : Object)
], UpsertMealDto.prototype, "sort", void 0);
class UpdateMealDto {
}
exports.UpdateMealDto = UpdateMealDto;
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], UpdateMealDto.prototype, "title", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], UpdateMealDto.prototype, "description", void 0);


/***/ }),
/* 7 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(9), exports);
tslib_1.__exportStar(__webpack_require__(10), exports);
tslib_1.__exportStar(__webpack_require__(11), exports);
tslib_1.__exportStar(__webpack_require__(12), exports);
tslib_1.__exportStar(__webpack_require__(13), exports);
tslib_1.__exportStar(__webpack_require__(14), exports);


/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MealSort = void 0;
var MealSort;
(function (MealSort) {
    MealSort["Breakfast"] = "Breakfast";
    MealSort["Lunch"] = "Lunch";
    MealSort["Dinner"] = "Dinner";
    MealSort["Other"] = "Other";
})(MealSort || (exports.MealSort = MealSort = {}));


/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserSkills = exports.UserExperienceLevel = exports.UserGender = exports.UserRole = void 0;
var UserRole;
(function (UserRole) {
    UserRole["Guest"] = "Guest";
    UserRole["Admin"] = "Admin";
    UserRole["Unknown"] = "Unknown";
})(UserRole || (exports.UserRole = UserRole = {}));
var UserGender;
(function (UserGender) {
    UserGender["Male"] = "Male";
    UserGender["Female"] = "Female";
    UserGender["None"] = "None";
    UserGender["Unknown"] = "Unknown";
})(UserGender || (exports.UserGender = UserGender = {}));
var UserExperienceLevel;
(function (UserExperienceLevel) {
    UserExperienceLevel["Beginner"] = "Beginner";
    UserExperienceLevel["Intermediate"] = "Intermediate";
    UserExperienceLevel["Advanced"] = "Advanced";
    UserExperienceLevel["Expert"] = "Expert";
    UserExperienceLevel["Unknown"] = "Unknown";
})(UserExperienceLevel || (exports.UserExperienceLevel = UserExperienceLevel = {}));
var UserSkills;
(function (UserSkills) {
    UserSkills["First_Aid"] = "First aid";
    UserSkills["Navigation"] = "Navigation";
    UserSkills["Cooking"] = "Cooking";
    UserSkills["Shelter_Building"] = "Shelter building";
    UserSkills["Fire_Making"] = "Fire making";
    UserSkills["Fishing"] = "Fishing";
    UserSkills["Hunting"] = "Hunting";
    UserSkills["Trapping"] = "Trapping";
    UserSkills["Foraging"] = "Foraging";
    UserSkills["Water_Purification"] = "Water purification";
    UserSkills["Knot_Tying"] = "Knot tying";
    UserSkills["Climbing"] = "Climbing";
    UserSkills["Swimming"] = "Swimming";
    UserSkills["Unknown"] = "Unknown";
})(UserSkills || (exports.UserSkills = UserSkills = {}));


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GearStatusEnum = exports.ContinentEnum = exports.ExpeditionStatus = exports.DifficultyLevel = void 0;
var DifficultyLevel;
(function (DifficultyLevel) {
    DifficultyLevel["Easy"] = "Easy";
    DifficultyLevel["Moderate"] = "Moderate";
    DifficultyLevel["Hard"] = "Hard";
    DifficultyLevel["Unknown"] = "Unknown";
})(DifficultyLevel || (exports.DifficultyLevel = DifficultyLevel = {}));
var ExpeditionStatus;
(function (ExpeditionStatus) {
    ExpeditionStatus["Open"] = "Open";
    ExpeditionStatus["Closed"] = "Closed";
    ExpeditionStatus["Cancelled"] = "Cancelled";
    ExpeditionStatus["Ongoing"] = "Ongoing";
    ExpeditionStatus["Completed"] = "Completed";
    ExpeditionStatus["Unknown"] = "Unknown";
})(ExpeditionStatus || (exports.ExpeditionStatus = ExpeditionStatus = {}));
var ContinentEnum;
(function (ContinentEnum) {
    ContinentEnum["Africa"] = "Africa";
    ContinentEnum["Antarctica"] = "Antarctica";
    ContinentEnum["Asia"] = "Asia";
    ContinentEnum["Europe"] = "Europe";
    ContinentEnum["North_America"] = "North America";
    ContinentEnum["Oceania"] = "Oceania";
    ContinentEnum["South_America"] = "South America";
    ContinentEnum["Unknown"] = "Unknown";
})(ContinentEnum || (exports.ContinentEnum = ContinentEnum = {}));
var GearStatusEnum;
(function (GearStatusEnum) {
    GearStatusEnum["ToPack"] = "To Pack";
    GearStatusEnum["Packed"] = "Packed";
    GearStatusEnum["Missing"] = "Missing";
    GearStatusEnum["NotAvailable"] = "Not Available";
})(GearStatusEnum || (exports.GearStatusEnum = GearStatusEnum = {}));


/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateUserDto = exports.UpsertUserDto = exports.CreateUserDto = void 0;
const tslib_1 = __webpack_require__(4);
const class_validator_1 = __webpack_require__(7);
const api_1 = __webpack_require__(8);
class CreateUserDto {
    constructor() {
        this.skills = [];
    }
}
exports.CreateUserDto = CreateUserDto;
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], CreateUserDto.prototype, "name", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], CreateUserDto.prototype, "emailAddress", void 0);
class UpsertUserDto {
    constructor() {
        this.profileImgUrl = '';
        this.meals = [];
        this.role = api_1.UserRole.Unknown;
        this.gender = api_1.UserGender.Unknown;
        this.experienceLevel = api_1.UserExperienceLevel.Unknown;
        this.skills = [];
    }
}
exports.UpsertUserDto = UpsertUserDto;
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], UpsertUserDto.prototype, "name", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], UpsertUserDto.prototype, "password", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], UpsertUserDto.prototype, "emailAddress", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], UpsertUserDto.prototype, "phoneNumber", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", Boolean)
], UpsertUserDto.prototype, "isActive", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", Object)
], UpsertUserDto.prototype, "profileImgUrl", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", Array)
], UpsertUserDto.prototype, "meals", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", typeof (_a = typeof api_1.UserRole !== "undefined" && api_1.UserRole) === "function" ? _a : Object)
], UpsertUserDto.prototype, "role", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", typeof (_b = typeof api_1.UserGender !== "undefined" && api_1.UserGender) === "function" ? _b : Object)
], UpsertUserDto.prototype, "gender", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", typeof (_c = typeof api_1.UserExperienceLevel !== "undefined" && api_1.UserExperienceLevel) === "function" ? _c : Object)
], UpsertUserDto.prototype, "experienceLevel", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", Array)
], UpsertUserDto.prototype, "skills", void 0);
class UpdateUserDto {
}
exports.UpdateUserDto = UpdateUserDto;
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], UpdateUserDto.prototype, "name", void 0);


/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateExpeditionDto = exports.UpsertExpeditionDto = exports.CreateExpeditionDto = void 0;
const tslib_1 = __webpack_require__(4);
const class_validator_1 = __webpack_require__(7);
const api_1 = __webpack_require__(8);
class CreateExpeditionDto {
}
exports.CreateExpeditionDto = CreateExpeditionDto;
class UpsertExpeditionDto {
}
exports.UpsertExpeditionDto = UpsertExpeditionDto;
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], UpsertExpeditionDto.prototype, "_id", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], UpsertExpeditionDto.prototype, "title", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], UpsertExpeditionDto.prototype, "description", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], UpsertExpeditionDto.prototype, "startDate", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], UpsertExpeditionDto.prototype, "endDate", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", typeof (_c = typeof api_1.DifficultyLevel !== "undefined" && api_1.DifficultyLevel) === "function" ? _c : Object)
], UpsertExpeditionDto.prototype, "difficultyLevel", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", typeof (_d = typeof api_1.ExpeditionStatus !== "undefined" && api_1.ExpeditionStatus) === "function" ? _d : Object)
], UpsertExpeditionDto.prototype, "status", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", Number)
], UpsertExpeditionDto.prototype, "maxParticipants", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)({ each: true }),
    tslib_1.__metadata("design:type", Array)
], UpsertExpeditionDto.prototype, "participants", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)({ each: true }),
    tslib_1.__metadata("design:type", Array)
], UpsertExpeditionDto.prototype, "activities", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)({ each: true }),
    tslib_1.__metadata("design:type", Array)
], UpsertExpeditionDto.prototype, "roles", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", typeof (_e = typeof api_1.IUser !== "undefined" && api_1.IUser) === "function" ? _e : Object)
], UpsertExpeditionDto.prototype, "organizer", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", typeof (_f = typeof api_1.ILocation !== "undefined" && api_1.ILocation) === "function" ? _f : Object)
], UpsertExpeditionDto.prototype, "location", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], UpsertExpeditionDto.prototype, "imageUrl", void 0);
class UpdateExpeditionDto {
}
exports.UpdateExpeditionDto = UpdateExpeditionDto;
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], UpdateExpeditionDto.prototype, "title", void 0);


/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiResponseInterceptor = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const operators_1 = __webpack_require__(18);
let ApiResponseInterceptor = class ApiResponseInterceptor {
    intercept(context, next) {
        return next.handle().pipe((0, operators_1.map)((results) => {
            if (results) {
                return {
                    results: results,
                    info: {
                        version: '1.0',
                        type: results instanceof Array ? 'list' : 'object',
                        count: results instanceof Array ? results.length : 1
                    }
                };
            }
            else {
                return {
                    results: undefined,
                    info: {
                        version: '1.0',
                        type: 'none',
                        count: 0
                    }
                };
            }
        }));
    }
};
exports.ApiResponseInterceptor = ApiResponseInterceptor;
exports.ApiResponseInterceptor = ApiResponseInterceptor = tslib_1.__decorate([
    (0, common_1.Injectable)()
], ApiResponseInterceptor);


/***/ }),
/* 18 */
/***/ ((module) => {

module.exports = require("rxjs/operators");

/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HttpExceptionFilter = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
/**
 * https://docs.nestjs.com/exception-filters#exception-filters-1
 */
let HttpExceptionFilter = class HttpExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const status = exception.getStatus();
        response.status(status).json({
            statusCode: status,
            timestamp: new Date().toISOString(),
            path: request.url
        });
    }
};
exports.HttpExceptionFilter = HttpExceptionFilter;
exports.HttpExceptionFilter = HttpExceptionFilter = tslib_1.__decorate([
    (0, common_1.Catch)(common_1.HttpException)
], HttpExceptionFilter);


/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AllExceptionsFilter = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const core_1 = __webpack_require__(2);
let AllExceptionsFilter = class AllExceptionsFilter {
    constructor(httpAdapterHost) {
        this.httpAdapterHost = httpAdapterHost;
    }
    catch(exception, host) {
        // In certain situations `httpAdapter` might not be available in the
        // constructor method, thus we should resolve it here.
        const { httpAdapter } = this.httpAdapterHost;
        const ctx = host.switchToHttp();
        const httpStatus = exception instanceof common_1.HttpException
            ? exception.getStatus()
            : common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        const responseBody = {
            statusCode: httpStatus,
            timestamp: new Date().toISOString(),
            path: httpAdapter.getRequestUrl(ctx.getRequest())
        };
        httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);
    }
};
exports.AllExceptionsFilter = AllExceptionsFilter;
exports.AllExceptionsFilter = AllExceptionsFilter = tslib_1.__decorate([
    (0, common_1.Catch)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof core_1.HttpAdapterHost !== "undefined" && core_1.HttpAdapterHost) === "function" ? _a : Object])
], AllExceptionsFilter);


/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__(4);
const neo4j_1 = __webpack_require__(22);
const common_1 = __webpack_require__(1);
const dist_1 = __webpack_require__(27);
const util_env_1 = __webpack_require__(28);
// @Module({
//     imports: [
//         Neo4jModule.forRoot({
//             scheme: 'neo4j',
//             host: 'localhost',
//             port: 7687,
//             username: 'neo4j',
//             password: 'password',
//             database: 'expeditionrec'
//         }),
//         Neo4jBackendModule
//     ],
//     controllers: [],
//     providers: []
// })
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            dist_1.Neo4jModule.forRoot({
                scheme: util_env_1.environment.NEO4J_URI.startsWith('neo4j+s')
                    ? 'neo4j+s'
                    : 'neo4j',
                host: util_env_1.environment.NEO4J_URI,
                port: parseInt(util_env_1.environment.port || '7687', 10),
                username: util_env_1.environment.NEO4J_USERNAME,
                password: util_env_1.environment.NEO4J_PASSWORD,
                database: util_env_1.environment.database
            }),
            neo4j_1.Neo4jBackendModule
        ],
        controllers: [],
        providers: []
    })
], AppModule);


/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(23), exports);
tslib_1.__exportStar(__webpack_require__(26), exports);


/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Neo4jBackendModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const nest_neo4j_1 = __webpack_require__(24);
const neo4j_controller_1 = __webpack_require__(25);
const neo4j_users_service_1 = __webpack_require__(26);
let Neo4jBackendModule = class Neo4jBackendModule {
};
exports.Neo4jBackendModule = Neo4jBackendModule;
exports.Neo4jBackendModule = Neo4jBackendModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [nest_neo4j_1.Neo4jModule],
        controllers: [neo4j_controller_1.Neo4JExampleController],
        providers: [neo4j_users_service_1.Neo4JUserService],
        exports: [neo4j_users_service_1.Neo4JUserService]
    })
], Neo4jBackendModule);


/***/ }),
/* 24 */
/***/ ((module) => {

module.exports = require("nest-neo4j");

/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Neo4JExampleController = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const neo4j_users_service_1 = __webpack_require__(26);
let Neo4JExampleController = class Neo4JExampleController {
    constructor(neo4jService) {
        this.neo4jService = neo4jService;
    }
    async getAllUsers() {
        const results = await this.neo4jService.findAll();
        return results;
    }
    async getRecommended(userId) {
        return await this.neo4jService.getRecommendedExpeditions(userId);
    }
    async addExpeditionRelation(body // Expecting a body with userId and expeditionId
    ) {
        console.log('addExpeditionRelation aanroepen');
        const { userId, expeditionId, expeditionObject } = body;
        // Call your service that handles Neo4j interaction
        return await this.neo4jService.addUserExpeditionRelation(userId, expeditionId, expeditionObject);
    }
    async removeExpeditionRelation(body // Expecting a body with userId and expeditionId
    ) {
        console.log('removeExpeditionRelation aanroepen');
        const { userId, expeditionId } = body;
        // Call your service that handles Neo4j interaction
        return await this.neo4jService.removeUserExpeditionRelation(userId, expeditionId);
    }
    async deleteExpedition(id) {
        try {
            await this.neo4jService.deleteExpedition(id);
            return {
                success: true,
                message: `Expedition with id ${id} has been deleted`
            };
        }
        catch (error) {
            console.log(`Failed to delete expedition: ${id}`);
            return {
                success: false
            };
        }
    }
};
exports.Neo4JExampleController = Neo4JExampleController;
tslib_1.__decorate([
    (0, common_1.Get)(''),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], Neo4JExampleController.prototype, "getAllUsers", null);
tslib_1.__decorate([
    (0, common_1.Get)(':userId'),
    tslib_1.__param(0, (0, common_1.Param)('userId')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], Neo4JExampleController.prototype, "getRecommended", null);
tslib_1.__decorate([
    (0, common_1.Post)('joinExpedition'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], Neo4JExampleController.prototype, "addExpeditionRelation", null);
tslib_1.__decorate([
    (0, common_1.Post)('leaveExpedition'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], Neo4JExampleController.prototype, "removeExpeditionRelation", null);
tslib_1.__decorate([
    (0, common_1.Delete)('expedition/:id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], Neo4JExampleController.prototype, "deleteExpedition", null);
exports.Neo4JExampleController = Neo4JExampleController = tslib_1.__decorate([
    (0, common_1.Controller)('recommendations'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof neo4j_users_service_1.Neo4JUserService !== "undefined" && neo4j_users_service_1.Neo4JUserService) === "function" ? _a : Object])
], Neo4JExampleController);


/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var Neo4JUserService_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Neo4JUserService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const dist_1 = __webpack_require__(27);
let Neo4JUserService = Neo4JUserService_1 = class Neo4JUserService {
    constructor(neo4jService) {
        this.neo4jService = neo4jService;
        this.logger = new common_1.Logger(Neo4JUserService_1.name);
    }
    async findAll() {
        this.logger.log('Fetching all users from Neo4j');
        const results = await this.neo4jService.read(`MATCH (u:User) RETURN u`);
        return results.records.map((record) => record.get('u').properties);
    }
    async getRecommendedExpeditions(userId) {
        const query = `
            MATCH (u:User {id: $userId})-[:JOINED]->(exp:Expedition)
            WITH u, collect(exp) AS userExps
            MATCH (other:User)-[:JOINED]->(rec:Expedition)
            WHERE other.id <> $userId AND NOT (u)-[:JOINED]->(rec)
            WITH rec, userExps, count(DISTINCT other) AS similarCount
            WITH rec, similarCount,
                 size([attr IN ['difficulty','continent','organizerId'] 
                       WHERE ANY(e IN userExps WHERE e[attr] = rec[attr])]) AS attrMatchCount
            ORDER BY (similarCount + attrMatchCount) DESC
            LIMIT 10
            RETURN rec, similarCount, attrMatchCount
        `;
        // Execute the query
        const result = await this.neo4jService.read(query, { userId });
        // Log overall recommendation process
        this.logger.log(`Recommended expeditions for user ${userId}:`);
        // For each record, log detailed intermediate values:
        result.records.forEach((record, index) => {
            const expeditionNode = record.get('rec');
            const recProperties = expeditionNode.properties;
            const similarCount = record.get('similarCount');
            const attrMatchCount = record.get('attrMatchCount');
            this.logger.log(`Record ${index + 1} => Expedition: ${recProperties.title || recProperties.id}, ` +
                `Similar Users: ${similarCount}, Attribute Matches: ${attrMatchCount}`);
        });
        // Finally, return the expedition properties for the frontend
        return result.records.map((record) => record.get('rec').properties);
    }
    async addUserExpeditionRelation(userId, expeditionId, expeditionObject) {
        const { title, difficultyLevel, location, organizer } = expeditionObject;
        const organizer_Id = organizer._id;
        console.log(organizer_Id);
        const query = `
            MERGE (u:User {id: $userId})
            MERGE (e:Expedition {title: $title, id: $expeditionId, difficulty: $difficultyLevel, continent: $location.continent, organizerId: $organizer_Id})
            MERGE (u)-[:JOINED]->(e)
        `;
        await this.neo4jService.write(query, {
            userId,
            expeditionId,
            title,
            difficultyLevel,
            location,
            organizer_Id
        });
        this.logger.log(`User ${userId} joined expedition in Neo4J ${expeditionId}`);
    }
    async removeUserExpeditionRelation(userId, expeditionId) {
        const query = `
            MATCH (u:User {id: $userId})-[r:JOINED]->(e:Expedition {id: $expeditionId})
            DELETE r
        `;
        await this.neo4jService.write(query, { userId, expeditionId });
    }
    async deleteExpedition(id) {
        const query = `
            MATCH (e:Expedition {id: $id})
            OPTIONAL MATCH (e)-[r]-()  // Optional match to remove all relationships
            DELETE r, e
        `;
        const result = await this.neo4jService.write(query, { id });
        // Log the deleted expedition
        this.logger.log(`Expedition with id ${id} deleted`);
        return { success: true };
    }
};
exports.Neo4JUserService = Neo4JUserService;
exports.Neo4JUserService = Neo4JUserService = Neo4JUserService_1 = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof dist_1.Neo4jService !== "undefined" && dist_1.Neo4jService) === "function" ? _a : Object])
], Neo4JUserService);


/***/ }),
/* 27 */
/***/ ((module) => {

module.exports = require("nest-neo4j/dist");

/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(29), exports);
tslib_1.__exportStar(__webpack_require__(32), exports);


/***/ }),
/* 29 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.environment = void 0;
const environment_development_1 = __webpack_require__(30);
const environment_production_1 = __webpack_require__(31);
const isProduction = process.env['NODE_ENV'] === 'production';
exports.environment = isProduction ? environment_production_1.environment : environment_development_1.environment;


/***/ }),
/* 30 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.environment = void 0;
exports.environment = {
    production: false,
    ROOT_DOMAIN_URL: 'http://localhost:3000',
    dataApiUrl: 'http://localhost:3000/api',
    neo4J_URL: 'bolt://localhost:7687',
    MONGO_DB_CONNECTION_STRING: 'mongodb://localhost:27017/expeditionPlanner',
    MONGO_DB_NAME: 'expeditionPlanner',
    NEO4J_URI: 'localhost',
    NEO4J_USERNAME: 'neo4j',
    NEO4J_PASSWORD: 'password',
    AURA_INSTANCEID: 'NOT_IMPLEMENTED_YET',
    AURA_INSTANCENAME: 'NOT_IMPLEMENTED_YET',
    port: '7687',
    database: 'expeditionrec'
};


/***/ }),
/* 31 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.environment = void 0;
exports.environment = {
    production: true,
    ROOT_DOMAIN_URL: 'https://avans-nx-expedition-webapp.netlify.app',
    dataApiUrl: 'https://avans-nx-expedition-production.up.railway.app/api',
    neo4J_URL: 'https://neo4j+s://ebdc050a.databases.neo4j.io',
    MONGO_DB_CONNECTION_STRING: 'mongodb+srv://admin:admin@spellendoos.wh96y.mongodb.net/',
    MONGO_DB_NAME: 'expeditionPlanner',
    NEO4J_URI: 'neo4j+s://ebdc050a.databases.neo4j.io',
    NEO4J_USERNAME: 'neo4j',
    NEO4J_PASSWORD: 'kKtUzjK86uYPR2DEyYUbknxoo83sMmK40GQx_8t7qNE',
    AURA_INSTANCEID: 'ebdc050a',
    AURA_INSTANCENAME: 'Free instance',
    port: 'NOT_IMPLEMENTED_YET',
    database: 'NOT_IMPLEMENTED_YET'
};


/***/ }),
/* 32 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
const common_1 = __webpack_require__(1);
const core_1 = __webpack_require__(2);
const dto_1 = __webpack_require__(3);
const app_module_1 = __webpack_require__(21);
const util_env_1 = __webpack_require__(28);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const globalPrefix = 'api';
    app.setGlobalPrefix(globalPrefix);
    app.enableCors({ origin: '*' });
    app.useGlobalInterceptors(new dto_1.ApiResponseInterceptor());
    const port = process.env.PORT || 3100;
    await app.listen(port, '0.0.0.0');
    common_1.Logger.log(`🚀 RCMND server is running on: ` +
        util_env_1.environment.neo4J_URL +
        ` :${port}/${globalPrefix}`);
}
bootstrap();

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;