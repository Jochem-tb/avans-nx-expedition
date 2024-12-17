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
exports.ContinentEnum = exports.ExpeditionStatus = exports.DifficultyLevel = void 0;
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


var _a, _b, _c, _d, _e;
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
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], UpsertExpeditionDto.prototype, "organizer", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", typeof (_e = typeof api_1.ILocation !== "undefined" && api_1.ILocation) === "function" ? _e : Object)
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
const common_1 = __webpack_require__(1);
const features_1 = __webpack_require__(22);
const user_1 = __webpack_require__(29);
const expedition_1 = __webpack_require__(48);
const auth_1 = __webpack_require__(41);
const mongoose_1 = __webpack_require__(27);
const util_env_1 = __webpack_require__(53);
const common_2 = __webpack_require__(1);
const core_1 = __webpack_require__(2);
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot(util_env_1.environment.MONGO_DB_CONNECTION_STRING, {
                connectionFactory: (connection) => {
                    connection.on('connected', () => {
                        // console.log('is connected');
                        common_2.Logger.verbose(`Mongoose db connected to ${util_env_1.environment.MONGO_DB_CONNECTION_STRING}`);
                    });
                    connection._events.connected();
                    return connection;
                }
            }),
            user_1.UsersModule,
            expedition_1.ExpeditionModule,
            features_1.BackendFeaturesMealModule,
            auth_1.AuthModule
        ],
        controllers: [],
        providers: [
            {
                provide: core_1.APP_GUARD,
                useValue: auth_1.AuthGuard
            }
        ]
    })
], AppModule);


/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(23), exports);
tslib_1.__exportStar(__webpack_require__(28), exports);


/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BackendFeaturesMealModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const meal_controller_1 = __webpack_require__(24);
const meal_service_1 = __webpack_require__(25);
const mongoose_1 = __webpack_require__(27);
const user_1 = __webpack_require__(29);
const meal_schema_1 = __webpack_require__(28);
const auth_1 = __webpack_require__(41);
const jwt_1 = __webpack_require__(40);
let BackendFeaturesMealModule = class BackendFeaturesMealModule {
};
exports.BackendFeaturesMealModule = BackendFeaturesMealModule;
exports.BackendFeaturesMealModule = BackendFeaturesMealModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: meal_schema_1.Meal.name, schema: meal_schema_1.MealSchema },
                { name: user_1.User.name, schema: user_1.UserSchema }
            ]),
            jwt_1.JwtModule,
            auth_1.AuthModule
        ],
        controllers: [meal_controller_1.MealController],
        providers: [meal_service_1.MealService],
        exports: [meal_service_1.MealService]
    })
], BackendFeaturesMealModule);


/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var MealController_1;
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MealController = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const meal_service_1 = __webpack_require__(25);
const common_2 = __webpack_require__(1);
const auth_1 = __webpack_require__(41);
let MealController = MealController_1 = class MealController {
    constructor(mealService) {
        this.mealService = mealService;
        this.logger = new common_1.Logger(MealController_1.name);
    }
    getAll() {
        return this.mealService.findAll();
    }
    getOne(id) {
        return this.mealService.findOne(id);
    }
    /**
     * Create a new Meal. The cook is the user that creates the new document in the DB.
     * De _id van de user wordt via het token meegestuurd - dus NIET als veld in de body!
     * De AuthGuard is een filter dat via middleware wordt aangeroepen voordat de Controller
     * het reqest ontvangt. De AuthGuard geeft de rout handling door via de next() functie.
     *
     * @param req Het binnenkomend request. Deze bevat de req.body die in het request is gestuurd,
     * én bevat de user_id die door de AuthGuard uit het Bearer token is gelezen. Bekijk de AuthGuard!
     * @returns
     */
    create(req) {
        this.logger.log('req.user.user_id = ', req.user.user_id);
        return this.mealService.create(req);
    }
};
exports.MealController = MealController;
tslib_1.__decorate([
    (0, common_2.Get)(''),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], MealController.prototype, "getAll", null);
tslib_1.__decorate([
    (0, common_2.Get)(':id'),
    tslib_1.__param(0, (0, common_2.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], MealController.prototype, "getOne", null);
tslib_1.__decorate([
    (0, common_2.Post)(''),
    (0, common_2.UseGuards)(auth_1.AuthGuard),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], MealController.prototype, "create", null);
exports.MealController = MealController = MealController_1 = tslib_1.__decorate([
    (0, common_1.Controller)('meal'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof meal_service_1.MealService !== "undefined" && meal_service_1.MealService) === "function" ? _a : Object])
], MealController);


/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var MealService_1;
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MealService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const mongoose_1 = __webpack_require__(26);
const mongoose_2 = __webpack_require__(27);
const meal_schema_1 = __webpack_require__(28);
const user_1 = __webpack_require__(29);
let MealService = MealService_1 = class MealService {
    constructor(mealModel, userModel) {
        this.mealModel = mealModel;
        this.userModel = userModel;
        this.logger = new common_1.Logger(MealService_1.name);
    }
    /**
     * Zie https://mongoosejs.com/docs/populate.html#population
     *
     * @returns
     */
    async findAll() {
        this.logger.log(`Finding all items`);
        const items = await this.mealModel
            .find()
            .populate('cook', 'name emailAddress gender isActive profileImgUrl')
            .exec();
        return items;
    }
    async findOne(_id) {
        this.logger.log(`finding meal with id ${_id}`);
        const item = await this.mealModel.findOne({ _id }).exec();
        if (!item) {
            this.logger.debug('Item not found');
        }
        return item;
    }
    async create(req) {
        const meal = req.body;
        const user_id = req.user.user_id;
        if (meal && user_id) {
            this.logger.log(`Create meal ${meal.title} for ${user_id}`);
            const user = await this.userModel
                .findOne({ _id: user_id })
                .select('-password -meals -role -__v -isActive')
                .exec();
            const createdItem = {
                ...meal,
                cook: user
            };
            return this.mealModel.create(createdItem);
        }
        return null;
    }
    async update(_id, meal) {
        this.logger.log(`Update meal ${meal.title}`);
        return this.mealModel.findByIdAndUpdate({ _id }, meal);
    }
};
exports.MealService = MealService;
exports.MealService = MealService = MealService_1 = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, mongoose_2.InjectModel)(meal_schema_1.Meal.name)),
    tslib_1.__param(1, (0, mongoose_2.InjectModel)(user_1.User.name)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _b : Object])
], MealService);


/***/ }),
/* 26 */
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),
/* 27 */
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");

/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MealSchema = exports.Meal = void 0;
const tslib_1 = __webpack_require__(4);
const mongoose_1 = __webpack_require__(27);
const mongoose_2 = __webpack_require__(26);
const api_1 = __webpack_require__(8);
const class_validator_1 = __webpack_require__(7);
let Meal = class Meal {
    constructor() {
        this.dateServed = new Date();
    }
};
exports.Meal = Meal;
tslib_1.__decorate([
    (0, class_validator_1.IsMongoId)(),
    tslib_1.__metadata("design:type", String)
], Meal.prototype, "id", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    tslib_1.__metadata("design:type", String)
], Meal.prototype, "title", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    tslib_1.__metadata("design:type", String)
], Meal.prototype, "description", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    tslib_1.__metadata("design:type", Boolean)
], Meal.prototype, "isVega", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ required: true, default: new Date() }),
    tslib_1.__metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Meal.prototype, "dateServed", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ required: true, type: Object }),
    tslib_1.__metadata("design:type", typeof (_b = typeof api_1.MealSort !== "undefined" && api_1.MealSort) === "function" ? _b : Object)
], Meal.prototype, "sort", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ required: false, type: mongoose_2.Schema.Types.ObjectId, ref: 'User' }),
    tslib_1.__metadata("design:type", typeof (_c = typeof api_1.IUserInfo !== "undefined" && api_1.IUserInfo) === "function" ? _c : Object)
], Meal.prototype, "cook", void 0);
exports.Meal = Meal = tslib_1.__decorate([
    (0, mongoose_1.Schema)()
], Meal);
exports.MealSchema = mongoose_1.SchemaFactory.createForClass(Meal);


/***/ }),
/* 29 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(30), exports);
tslib_1.__exportStar(__webpack_require__(33), exports);
tslib_1.__exportStar(__webpack_require__(32), exports);
tslib_1.__exportStar(__webpack_require__(35), exports);


/***/ }),
/* 30 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const user_controller_1 = __webpack_require__(31);
const user_service_1 = __webpack_require__(32);
const mongoose_1 = __webpack_require__(27);
const user_schema_1 = __webpack_require__(33);
// import { Meal, MealSchema } from '@avans-nx-expedition/backend/features';
let UsersModule = class UsersModule {
};
exports.UsersModule = UsersModule;
exports.UsersModule = UsersModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: user_schema_1.User.name, schema: user_schema_1.UserSchema }
                // { name: Meal.name, schema: MealSchema },
            ])
        ],
        controllers: [user_controller_1.UserController],
        providers: [user_service_1.UserService],
        exports: [user_service_1.UserService]
    })
], UsersModule);


/***/ }),
/* 31 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserController = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const user_service_1 = __webpack_require__(32);
const api_1 = __webpack_require__(8);
const dto_1 = __webpack_require__(3);
const user_exists_guard_1 = __webpack_require__(35);
const admin_rights_guard_1 = __webpack_require__(36);
const shared_1 = __webpack_require__(37);
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async findAll() {
        return await this.userService.findAll();
    }
    async findByExperience(experience) {
        return this.userService.findManyByExperienceLevel(experience);
    }
    // this method should precede the general getOne method, otherwise it never matches
    // @Get('self')
    // async getSelf(@InjectToken() token: Token): Promise<IUser> {
    //     const result = await this.userService.getOne(token.id);
    //     return result;
    // }
    async findOne(id) {
        return this.userService.findOne(id);
    }
    create(user) {
        return this.userService.create(user);
    }
    update(id, user) {
        return this.userService.update(id, user);
    }
    delete(id) {
        console.log('FAKE delete user with id', id);
        // return this.userService.delete(id);
    }
};
exports.UserController = UserController;
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "findAll", null);
tslib_1.__decorate([
    (0, common_1.Get)('exp/:experience'),
    tslib_1.__param(0, (0, common_1.Param)('experience')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof api_1.UserExperienceLevel !== "undefined" && api_1.UserExperienceLevel) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], UserController.prototype, "findByExperience", null);
tslib_1.__decorate([
    (0, common_1.Get)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], UserController.prototype, "findOne", null);
tslib_1.__decorate([
    (0, common_1.Post)(''),
    (0, common_1.UseGuards)(user_exists_guard_1.UserExistGuard),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_e = typeof dto_1.CreateUserDto !== "undefined" && dto_1.CreateUserDto) === "function" ? _e : Object]),
    tslib_1.__metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], UserController.prototype, "create", null);
tslib_1.__decorate([
    (0, common_1.Put)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, typeof (_g = typeof dto_1.UpdateUserDto !== "undefined" && dto_1.UpdateUserDto) === "function" ? _g : Object]),
    tslib_1.__metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], UserController.prototype, "update", null);
tslib_1.__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(shared_1.TokenGuard, admin_rights_guard_1.AdminRightsGuard),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Object)
], UserController.prototype, "delete", null);
exports.UserController = UserController = tslib_1.__decorate([
    (0, common_1.Controller)('user'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _a : Object])
], UserController);


/***/ }),
/* 32 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var UserService_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const mongoose_1 = __webpack_require__(26);
const mongoose_2 = __webpack_require__(27);
const user_schema_1 = __webpack_require__(33);
const rxjs_1 = __webpack_require__(34);
let UserService = UserService_1 = class UserService {
    constructor(userModel // @InjectModel(Meal.name) private meetupModel: Model<MealDocument>
    ) {
        this.userModel = userModel;
        this.logger = new common_1.Logger(UserService_1.name);
    }
    async findAll() {
        this.logger.log(`Finding all items`);
        const items = await this.userModel.find();
        return items;
    }
    findAllInternal() {
        this.logger.log('Finding all items');
        // Use .lean() to get plain objects and map to IUserInfo
        return (0, rxjs_1.from)(this.userModel
            .find()
            .lean()
            .then((users) => {
            return users.map((user) => {
                // Transform the MongoDB document into IUserInfo
                return {
                    _id: user._id.toString(),
                    name: user.name,
                    password: user.password,
                    emailAddress: user.emailAddress,
                    phoneNumber: user.phoneNumber,
                    profileImgUrl: user.profileImgUrl,
                    experienceLevel: user.experienceLevel,
                    skills: user.skills,
                    role: user.role,
                    gender: user.gender,
                    isActive: user.isActive
                    // You can add more fields from your MongoDB model as needed
                };
            });
        }));
    }
    async findOne(_id) {
        this.logger.log(`finding user with id ${_id}`);
        const item = await this.userModel.findOne({ _id }).exec();
        if (!item) {
            this.logger.debug('Item not found');
        }
        return item;
    }
    async findOneByEmail(email) {
        this.logger.log(`Finding user by email ${email}`);
        const item = this.userModel
            .findOne({ emailAddress: email })
            .select('-password')
            .exec();
        return item;
    }
    async findManyByExperienceLevel(experienceLevel) {
        this.logger.log(`Finding users with experience level ${experienceLevel}`);
        const items = this.userModel.find({ experienceLevel }).exec();
        return items;
    }
    async create(user) {
        this.logger.log(`Create user ${user.name}`);
        const createdItem = this.userModel.create(user);
        return createdItem;
    }
    async update(_id, user) {
        this.logger.log(`Update user ${user.name}`);
        return this.userModel.findByIdAndUpdate({ _id }, user);
    }
    async delete(_id) {
        this.logger.log(`Delete user with id ${_id}`);
        return this.userModel.findByIdAndDelete({ _id });
    }
};
exports.UserService = UserService;
exports.UserService = UserService = UserService_1 = tslib_1.__decorate([
    (0, common_1.Injectable)({}),
    tslib_1.__param(0, (0, mongoose_2.InjectModel)(user_schema_1.User.name)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object])
], UserService);


/***/ }),
/* 33 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserSchema = exports.User = void 0;
const tslib_1 = __webpack_require__(4);
const mongoose_1 = __webpack_require__(27);
const api_1 = __webpack_require__(8);
const class_validator_1 = __webpack_require__(7);
let User = class User {
    constructor() {
        this.password = '';
        this.emailAddress = '';
        this.role = api_1.UserRole.Guest;
        this.gender = api_1.UserGender.Unknown;
        this.isActive = true;
        this.experienceLevel = api_1.UserExperienceLevel.Unknown;
        this.skills = [];
    }
};
exports.User = User;
tslib_1.__decorate([
    (0, class_validator_1.IsMongoId)(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "_id", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        type: String
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "name", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        select: false, // do not return password in select statements
        type: String
    }),
    tslib_1.__metadata("design:type", Object)
], User.prototype, "password", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        type: String,
        select: true,
        unique: true
        // validate: {
        //     validator: isEmail,
        //     message: 'should be a valid email address'
        // }
    }),
    tslib_1.__metadata("design:type", Object)
], User.prototype, "emailAddress", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({
        required: false,
        select: true,
        default: 'https://cdn-icons-png.flaticon.com/512/219/219969.png'
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "profileImgUrl", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({
        required: false,
        type: String
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "phoneNumber", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({
        required: false,
        type: String,
        default: api_1.UserRole.Guest
    }),
    tslib_1.__metadata("design:type", typeof (_a = typeof api_1.UserRole !== "undefined" && api_1.UserRole) === "function" ? _a : Object)
], User.prototype, "role", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({
        required: false,
        type: String,
        default: api_1.UserGender.Unknown
    }),
    tslib_1.__metadata("design:type", typeof (_b = typeof api_1.UserGender !== "undefined" && api_1.UserGender) === "function" ? _b : Object)
], User.prototype, "gender", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({
        required: false,
        type: Boolean,
        default: true
    }),
    tslib_1.__metadata("design:type", Object)
], User.prototype, "isActive", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({
        default: [api_1.UserExperienceLevel.Unknown],
        type: String,
        ref: 'ExperienceLevel'
    }),
    tslib_1.__metadata("design:type", typeof (_c = typeof api_1.UserExperienceLevel !== "undefined" && api_1.UserExperienceLevel) === "function" ? _c : Object)
], User.prototype, "experienceLevel", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({
        default: [],
        type: [String],
        ref: 'Skills'
    }),
    tslib_1.__metadata("design:type", Array)
], User.prototype, "skills", void 0);
exports.User = User = tslib_1.__decorate([
    (0, mongoose_1.Schema)()
], User);
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(User);


/***/ }),
/* 34 */
/***/ ((module) => {

module.exports = require("rxjs");

/***/ }),
/* 35 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserExistGuard = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const mongoose_1 = __webpack_require__(27);
const mongoose_2 = __webpack_require__(26);
let UserExistGuard = class UserExistGuard {
    constructor(userModel) {
        this.userModel = userModel;
    }
    canActivate(context) {
        const user = context.switchToHttp().getRequest().body;
        return !!this.userModel.findOne({ username: user.username });
    }
};
exports.UserExistGuard = UserExistGuard;
exports.UserExistGuard = UserExistGuard = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, mongoose_1.InjectModel)('User')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], UserExistGuard);


/***/ }),
/* 36 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AdminRightsGuard = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const mongoose_1 = __webpack_require__(27);
const mongoose_2 = __webpack_require__(26);
const api_1 = __webpack_require__(8);
let AdminRightsGuard = class AdminRightsGuard {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async canActivate(context) {
        console.debug('AdminRightsGuard');
        const request = context.switchToHttp().getRequest();
        const userId = request.headers['user'];
        console.debug('userId', userId);
        if (!userId) {
            return false;
        }
        const foundUser = await this.userModel.findOne({ _id: userId }).exec();
        console.debug('foundUser', foundUser);
        return foundUser !== null && foundUser.role === api_1.UserRole.Admin;
    }
};
exports.AdminRightsGuard = AdminRightsGuard;
exports.AdminRightsGuard = AdminRightsGuard = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, mongoose_1.InjectModel)('User')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], AdminRightsGuard);


/***/ }),
/* 37 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(38), exports);
tslib_1.__exportStar(__webpack_require__(39), exports);


/***/ }),
/* 38 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SharedModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const token_guard_1 = __webpack_require__(39);
let SharedModule = class SharedModule {
};
exports.SharedModule = SharedModule;
exports.SharedModule = SharedModule = tslib_1.__decorate([
    (0, common_1.Module)({
        providers: [token_guard_1.TokenGuard],
        exports: [token_guard_1.TokenGuard]
    })
], SharedModule);


/***/ }),
/* 39 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var TokenGuard_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TokenGuard = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const jwt_1 = __webpack_require__(40);
let TokenGuard = TokenGuard_1 = class TokenGuard {
    constructor(jwtService) {
        this.jwtService = jwtService;
        this.logger = new common_1.Logger(TokenGuard_1.name);
    }
    async canActivate(context) {
        console.log('AuthGuard');
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);
        if (!token) {
            this.logger.log('No token found');
        }
        else {
            try {
                const payload = await this.jwtService.verifyAsync(token, {
                    secret: process.env['JWT_SECRET'] || 'secretstring'
                });
                this.logger.log('payload', payload);
                // Assign the payload to the request object
                request['user'] = payload;
            }
            catch (error) {
                this.logger.log('Invalid token');
            }
        }
        // Always return true to allow access
        return true;
    }
    extractTokenFromHeader(request) {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
};
exports.TokenGuard = TokenGuard;
exports.TokenGuard = TokenGuard = TokenGuard_1 = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object])
], TokenGuard);


/***/ }),
/* 40 */
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),
/* 41 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(42), exports);
tslib_1.__exportStar(__webpack_require__(47), exports);


/***/ }),
/* 42 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const mongoose_1 = __webpack_require__(27);
const auth_controller_1 = __webpack_require__(43);
const jwt_1 = __webpack_require__(40);
const user_1 = __webpack_require__(29);
const auth_service_1 = __webpack_require__(44);
const auth_guards_1 = __webpack_require__(47);
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: user_1.User.name, schema: user_1.UserSchema }]),
            user_1.UsersModule,
            jwt_1.JwtModule.register({
                secret: process.env['JWT_SECRET'] || 'secretstring',
                signOptions: { expiresIn: '12 days' }
            })
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, auth_guards_1.AuthGuard],
        exports: [auth_service_1.AuthService]
    })
], AuthModule);


/***/ }),
/* 43 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var AuthController_1;
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const auth_service_1 = __webpack_require__(44);
const decorators_1 = __webpack_require__(46);
const api_1 = __webpack_require__(8);
const dto_1 = __webpack_require__(3);
const user_1 = __webpack_require__(29);
let AuthController = AuthController_1 = class AuthController {
    constructor(authService) {
        this.authService = authService;
        this.logger = new common_1.Logger(AuthController_1.name);
    }
    async login(credentials) {
        this.logger.log('Login');
        return await this.authService.login(credentials);
    }
    async register(user) {
        this.logger.log('Register');
        return await this.authService.register(user);
    }
};
exports.AuthController = AuthController;
tslib_1.__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Post)('login'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof api_1.IUserCredentials !== "undefined" && api_1.IUserCredentials) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], AuthController.prototype, "login", null);
tslib_1.__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.UseGuards)(user_1.UserExistGuard),
    (0, common_1.Post)('register'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_d = typeof dto_1.CreateUserDto !== "undefined" && dto_1.CreateUserDto) === "function" ? _d : Object]),
    tslib_1.__metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], AuthController.prototype, "register", null);
exports.AuthController = AuthController = AuthController_1 = tslib_1.__decorate([
    (0, common_1.Controller)('auth'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], AuthController);


/***/ }),
/* 44 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var AuthService_1;
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const exceptions_1 = __webpack_require__(45);
const user_1 = __webpack_require__(29);
const jwt_1 = __webpack_require__(40);
const mongoose_1 = __webpack_require__(27);
const mongoose_2 = __webpack_require__(26);
let AuthService = AuthService_1 = class AuthService {
    constructor(userModel, jwtService) {
        this.userModel = userModel;
        this.jwtService = jwtService;
        //
        this.logger = new common_1.Logger(AuthService_1.name);
    }
    async validateUser(credentials) {
        this.logger.log('validateUser');
        const user = await this.userModel.findOne({
            emailAddress: credentials.emailAddress
        });
        if (user && user.password === credentials.password) {
            return user;
        }
        return null;
    }
    async login(credentials) {
        // this.logger.debug(`Credentials: ${JSON.stringify(credentials)}`);
        this.logger.log(`login ${credentials.emailAddress}`);
        return await this.userModel
            .findOne({
            emailAddress: credentials.emailAddress
        })
            .select('+password')
            .exec()
            .then((user) => {
            if (user && user.password === credentials.password) {
                const payload = {
                    user_id: user._id
                };
                console.log('User found', user);
                return {
                    _id: user._id,
                    name: user.name,
                    emailAddress: user.emailAddress,
                    profileImgUrl: user.profileImgUrl,
                    token: this.jwtService.sign(payload)
                };
            }
            else {
                const errMsg = 'Email not found or password invalid';
                this.logger.debug(errMsg);
                throw new exceptions_1.UnauthorizedException(errMsg);
            }
        })
            .catch((error) => {
            return error;
        });
    }
    async register(user) {
        this.logger.log(`Register user ${user.name}`);
        if (await this.userModel.findOne({ emailAddress: user.emailAddress })) {
            this.logger.debug('user exists');
            throw new exceptions_1.ConflictException('User already exist');
        }
        this.logger.debug('User not found, creating');
        const createdItem = await this.userModel.create(user);
        return createdItem;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = AuthService_1 = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, mongoose_1.InjectModel)(user_1.User.name)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object])
], AuthService);


/***/ }),
/* 45 */
/***/ ((module) => {

module.exports = require("@nestjs/common/exceptions");

/***/ }),
/* 46 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Public = exports.IS_PUBLIC_KEY = void 0;
const common_1 = __webpack_require__(1);
exports.IS_PUBLIC_KEY = 'isPublic';
const Public = () => (0, common_1.SetMetadata)(exports.IS_PUBLIC_KEY, true);
exports.Public = Public;


/***/ }),
/* 47 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var AuthGuard_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthGuard = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const jwt_1 = __webpack_require__(40);
let AuthGuard = AuthGuard_1 = class AuthGuard {
    constructor(jwtService) {
        this.jwtService = jwtService;
        this.logger = new common_1.Logger(AuthGuard_1.name);
    }
    async canActivate(context) {
        console.log('AuthGuard');
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);
        if (!token) {
            this.logger.log('No token found');
            throw new common_1.UnauthorizedException();
        }
        try {
            const payload = await this.jwtService.verifyAsync(token, {
                secret: process.env['JWT_SECRET'] || 'secretstring'
            });
            this.logger.log('payload', payload);
            // 💡 We're assigning the payload to the request object here
            // so that we can access it in our route handlers
            request['user'] = payload;
        }
        catch {
            throw new common_1.UnauthorizedException();
        }
        return true;
    }
    extractTokenFromHeader(request) {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
};
exports.AuthGuard = AuthGuard;
exports.AuthGuard = AuthGuard = AuthGuard_1 = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object])
], AuthGuard);


/***/ }),
/* 48 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(49), exports);
tslib_1.__exportStar(__webpack_require__(52), exports);
tslib_1.__exportStar(__webpack_require__(51), exports);


/***/ }),
/* 49 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExpeditionModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const expedition_controller_1 = __webpack_require__(50);
const expediton_service_1 = __webpack_require__(51);
const mongoose_1 = __webpack_require__(27);
const expedition_schema_1 = __webpack_require__(52);
// import { Meal, MealSchema } from '@avans-nx-expedition/backend/features';
let ExpeditionModule = class ExpeditionModule {
};
exports.ExpeditionModule = ExpeditionModule;
exports.ExpeditionModule = ExpeditionModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: expedition_schema_1.Expedition.name, schema: expedition_schema_1.ExpeditionSchema }
            ])
        ],
        controllers: [expedition_controller_1.ExpeditionController],
        providers: [expediton_service_1.ExpeditionService],
        exports: [expediton_service_1.ExpeditionService]
    })
], ExpeditionModule);


/***/ }),
/* 50 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExpeditionController = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const expediton_service_1 = __webpack_require__(51);
const api_1 = __webpack_require__(8);
const dto_1 = __webpack_require__(3);
let ExpeditionController = class ExpeditionController {
    constructor(expeditionService) {
        this.expeditionService = expeditionService;
    }
    async findAll() {
        return await this.expeditionService.findAll();
    }
    async findByDifficulty(difficulty) {
        return this.expeditionService.findManyByDifficultyLevel(difficulty);
    }
    // this method should precede the general getOne method, otherwise it never matches
    // @Get('self')
    // async getSelf(@InjectToken() token: Token): Promise<Iexpedition> {
    //     const result = await this.expeditionService.getOne(token.id);
    //     return result;
    // }
    async findOne(id) {
        return this.expeditionService.findOne(id);
    }
    // @UseGuards(expeditionExistGuard) NOT IMPLEMENTED YET
    create(expedition) {
        return this.expeditionService.create(expedition);
    }
    update(id, expedition) {
        return this.expeditionService.update(id, expedition);
    }
};
exports.ExpeditionController = ExpeditionController;
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ExpeditionController.prototype, "findAll", null);
tslib_1.__decorate([
    (0, common_1.Get)('diff/:difficulty'),
    tslib_1.__param(0, (0, common_1.Param)('difficulty')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof api_1.DifficultyLevel !== "undefined" && api_1.DifficultyLevel) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], ExpeditionController.prototype, "findByDifficulty", null);
tslib_1.__decorate([
    (0, common_1.Get)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], ExpeditionController.prototype, "findOne", null);
tslib_1.__decorate([
    (0, common_1.Post)('')
    // @UseGuards(expeditionExistGuard) NOT IMPLEMENTED YET
    ,
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_e = typeof dto_1.CreateExpeditionDto !== "undefined" && dto_1.CreateExpeditionDto) === "function" ? _e : Object]),
    tslib_1.__metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], ExpeditionController.prototype, "create", null);
tslib_1.__decorate([
    (0, common_1.Put)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, typeof (_g = typeof dto_1.UpdateExpeditionDto !== "undefined" && dto_1.UpdateExpeditionDto) === "function" ? _g : Object]),
    tslib_1.__metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], ExpeditionController.prototype, "update", null);
exports.ExpeditionController = ExpeditionController = tslib_1.__decorate([
    (0, common_1.Controller)('expedition'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof expediton_service_1.ExpeditionService !== "undefined" && expediton_service_1.ExpeditionService) === "function" ? _a : Object])
], ExpeditionController);


/***/ }),
/* 51 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var ExpeditionService_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExpeditionService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const mongoose_1 = __webpack_require__(26);
const mongoose_2 = __webpack_require__(27);
const expedition_schema_1 = __webpack_require__(52);
let ExpeditionService = ExpeditionService_1 = class ExpeditionService {
    constructor(expeditionModel // @InjectModel(Meal.name) private meetupModel: Model<MealDocument>
    ) {
        this.expeditionModel = expeditionModel;
        this.logger = new common_1.Logger(ExpeditionService_1.name);
    }
    async findAll() {
        this.logger.log(`Finding all items`);
        const items = await this.expeditionModel.find();
        return items;
    }
    async findOne(_id) {
        this.logger.log(`finding expedition with id ${_id}`);
        const item = await this.expeditionModel.findOne({ _id }).exec();
        if (!item) {
            this.logger.debug('Item not found');
        }
        return item;
    }
    async findManyByDifficultyLevel(difficultyLevel) {
        this.logger.log(`Finding expeditions with difficulty level ${difficultyLevel}`);
        const items = this.expeditionModel.find({ difficultyLevel }).exec();
        return items;
    }
    async create(expedition) {
        this.logger.log(`Create expedition with title:  ${expedition.title}`);
        expedition.createdAt = new Date();
        expedition.updatedAt = new Date();
        const createdItem = this.expeditionModel.create(expedition);
        return createdItem;
    }
    async update(_id, expedition) {
        this.logger.log(`Update expedition ${expedition.title}`);
        expedition.updatedAt = new Date();
        return this.expeditionModel.findByIdAndUpdate({ _id }, expedition);
    }
};
exports.ExpeditionService = ExpeditionService;
exports.ExpeditionService = ExpeditionService = ExpeditionService_1 = tslib_1.__decorate([
    (0, common_1.Injectable)({}),
    tslib_1.__param(0, (0, mongoose_2.InjectModel)(expedition_schema_1.Expedition.name)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object])
], ExpeditionService);


/***/ }),
/* 52 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExpeditionSchema = exports.Expedition = void 0;
const tslib_1 = __webpack_require__(4);
const mongoose_1 = __webpack_require__(27);
// import { v4 as uuid } from 'uuid';
const api_1 = __webpack_require__(8);
const class_validator_1 = __webpack_require__(7);
let Expedition = class Expedition {
};
exports.Expedition = Expedition;
tslib_1.__decorate([
    (0, class_validator_1.IsMongoId)(),
    tslib_1.__metadata("design:type", String)
], Expedition.prototype, "_id", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    tslib_1.__metadata("design:type", String)
], Expedition.prototype, "title", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    tslib_1.__metadata("design:type", String)
], Expedition.prototype, "description", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ required: true, type: Date }),
    tslib_1.__metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Expedition.prototype, "startDate", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ required: true, type: Date }),
    tslib_1.__metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Expedition.prototype, "endDate", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    tslib_1.__metadata("design:type", typeof (_c = typeof api_1.DifficultyLevel !== "undefined" && api_1.DifficultyLevel) === "function" ? _c : Object)
], Expedition.prototype, "difficultyLevel", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    tslib_1.__metadata("design:type", typeof (_d = typeof api_1.ExpeditionStatus !== "undefined" && api_1.ExpeditionStatus) === "function" ? _d : Object)
], Expedition.prototype, "status", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ required: true, type: Number }),
    tslib_1.__metadata("design:type", Number)
], Expedition.prototype, "maxParticipants", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ required: true, type: [String] }),
    tslib_1.__metadata("design:type", Array)
], Expedition.prototype, "participants", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    tslib_1.__metadata("design:type", String)
], Expedition.prototype, "organizer", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ required: true, type: Object }),
    tslib_1.__metadata("design:type", typeof (_e = typeof api_1.ILocation !== "undefined" && api_1.ILocation) === "function" ? _e : Object)
], Expedition.prototype, "location", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        type: String,
        default: 'https://cdn-icons-png.flaticon.com/512/3175/3175209.png'
    }),
    tslib_1.__metadata("design:type", String)
], Expedition.prototype, "imageUrl", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ required: true, type: Date, default: new Date() }),
    tslib_1.__metadata("design:type", typeof (_f = typeof Date !== "undefined" && Date) === "function" ? _f : Object)
], Expedition.prototype, "createdAt", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ required: true, type: Date, default: new Date() }),
    tslib_1.__metadata("design:type", typeof (_g = typeof Date !== "undefined" && Date) === "function" ? _g : Object)
], Expedition.prototype, "updatedAt", void 0);
exports.Expedition = Expedition = tslib_1.__decorate([
    (0, mongoose_1.Schema)()
], Expedition);
exports.ExpeditionSchema = mongoose_1.SchemaFactory.createForClass(Expedition);


/***/ }),
/* 53 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(54), exports);
tslib_1.__exportStar(__webpack_require__(55), exports);


/***/ }),
/* 54 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.environment = void 0;
exports.environment = {
    production: false,
    ROOT_DOMAIN_URL: 'http://localhost:3000',
    dataApiUrl: 'http://localhost:3000/api',
    MONGO_DB_CONNECTION_STRING: 'mongodb://localhost:27017/expeditionPlanner'
};


/***/ }),
/* 55 */
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

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
const common_1 = __webpack_require__(1);
const core_1 = __webpack_require__(2);
const dto_1 = __webpack_require__(3);
const app_module_1 = __webpack_require__(21);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const globalPrefix = 'api';
    app.setGlobalPrefix(globalPrefix);
    const corsOptions = {};
    app.enableCors(corsOptions);
    app.useGlobalInterceptors(new dto_1.ApiResponseInterceptor());
    app.useGlobalPipes(new common_1.ValidationPipe());
    // General exception handling
    // app.useGlobalFilters(new HttpExceptionFilter());
    const port = process.env.PORT || 3000;
    await app.listen(port);
    common_1.Logger.log(`🚀 DATA-API server is running on: http://localhost:${port}/${globalPrefix}`);
}
bootstrap();

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;