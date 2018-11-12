(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_people_people_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/people/people.component */ "./src/app/components/people/people.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_clients_clients_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/clients/clients.component */ "./src/app/components/clients/clients.component.ts");
/* harmony import */ var _components_people_create_person_create_person_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/people/create-person/create-person.component */ "./src/app/components/people/create-person/create-person.component.ts");
/* harmony import */ var _components_people_edit_person_edit_person_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/people/edit-person/edit-person.component */ "./src/app/components/people/edit-person/edit-person.component.ts");
/* harmony import */ var _components_people_delete_person_delete_person_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/people/delete-person/delete-person.component */ "./src/app/components/people/delete-person/delete-person.component.ts");
/* harmony import */ var _components_clients_create_client_create_client_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/clients/create-client/create-client.component */ "./src/app/components/clients/create-client/create-client.component.ts");
/* harmony import */ var _components_clients_edit_client_edit_client_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/clients/edit-client/edit-client.component */ "./src/app/components/clients/edit-client/edit-client.component.ts");
/* harmony import */ var _components_clients_delete_client_delete_client_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/clients/delete-client/delete-client.component */ "./src/app/components/clients/delete-client/delete-client.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'people', component: _components_people_people_component__WEBPACK_IMPORTED_MODULE_2__["PeopleComponent"] },
    { path: 'create-person', component: _components_people_create_person_create_person_component__WEBPACK_IMPORTED_MODULE_5__["CreatePersonComponent"] },
    { path: 'edit-person/:id', component: _components_people_edit_person_edit_person_component__WEBPACK_IMPORTED_MODULE_6__["EditPersonComponent"] },
    { path: 'delete-person', component: _components_people_delete_person_delete_person_component__WEBPACK_IMPORTED_MODULE_7__["DeletePersonComponent"] },
    { path: 'clients', component: _components_clients_clients_component__WEBPACK_IMPORTED_MODULE_4__["ClientsComponent"] },
    { path: 'create-client', component: _components_clients_create_client_create_client_component__WEBPACK_IMPORTED_MODULE_8__["CreateClientComponent"] },
    { path: 'edit-client/:id', component: _components_clients_edit_client_edit_client_component__WEBPACK_IMPORTED_MODULE_9__["EditClientComponent"] },
    { path: 'delete-client', component: _components_clients_delete_client_delete_client_component__WEBPACK_IMPORTED_MODULE_10__["DeleteClientComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-wrapper\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-wrapper {\n  margin: 0 auto;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxkd3J1ZVxcT25lRHJpdmVcXFByb2plY3RzXFxBcXVlbnRcXGNydWQtYXBwXFxVSS9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBYztFQUNkLG1CQUFrQixFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtd3JhcHBlciB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'the Spring Boot / Angular CRUD App Demo';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_people_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/people.service */ "./src/app/services/people.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_people_people_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/people/people.component */ "./src/app/components/people/people.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_clients_clients_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/clients/clients.component */ "./src/app/components/clients/clients.component.ts");
/* harmony import */ var _components_people_create_person_create_person_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/people/create-person/create-person.component */ "./src/app/components/people/create-person/create-person.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_people_edit_person_edit_person_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/people/edit-person/edit-person.component */ "./src/app/components/people/edit-person/edit-person.component.ts");
/* harmony import */ var _components_people_delete_person_delete_person_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/people/delete-person/delete-person.component */ "./src/app/components/people/delete-person/delete-person.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_clients_create_client_create_client_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/clients/create-client/create-client.component */ "./src/app/components/clients/create-client/create-client.component.ts");
/* harmony import */ var _components_clients_edit_client_edit_client_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/clients/edit-client/edit-client.component */ "./src/app/components/clients/edit-client/edit-client.component.ts");
/* harmony import */ var _components_clients_delete_client_delete_client_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/clients/delete-client/delete-client.component */ "./src/app/components/clients/delete-client/delete-client.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_people_people_component__WEBPACK_IMPORTED_MODULE_6__["PeopleComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _components_clients_clients_component__WEBPACK_IMPORTED_MODULE_8__["ClientsComponent"],
                _components_people_create_person_create_person_component__WEBPACK_IMPORTED_MODULE_9__["CreatePersonComponent"],
                _components_people_edit_person_edit_person_component__WEBPACK_IMPORTED_MODULE_11__["EditPersonComponent"],
                _components_people_delete_person_delete_person_component__WEBPACK_IMPORTED_MODULE_12__["DeletePersonComponent"],
                _components_clients_create_client_create_client_component__WEBPACK_IMPORTED_MODULE_15__["CreateClientComponent"],
                _components_clients_edit_client_edit_client_component__WEBPACK_IMPORTED_MODULE_16__["EditClientComponent"],
                _components_clients_delete_client_delete_client_component__WEBPACK_IMPORTED_MODULE_17__["DeleteClientComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatOptionModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSortModule"]
            ],
            providers: [_services_people_service__WEBPACK_IMPORTED_MODULE_4__["PeopleService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/clients/clients.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/clients/clients.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div *ngIf=\"!dataReceived; else displayContent\">\n    <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n  </div>\n  <ng-template #displayContent>\n    <h1 class=\"mt-4\">Client Listing</h1>\n    <div class=\"mt-4\">\n      <a [routerLink]=\"'/create-client'\">Create New Client</a>\n    </div>\n    <div *ngIf=\"clients?.length > 0; else noResults\" class=\"table-wrapper mt-4\" >\n      <table class=\"table\">\n        <thead>\n        <tr>\n          <th>Company Name</th>\n          <th>Website URI</th>\n          <th>Phone</th>\n          <th>City</th>\n          <th>State</th>\n          <th>Contacts</th>\n          <th>Actions</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let client of clients\">\n          <td>{{client.companyName}}</td>\n          <td>{{client.websiteUri}}</td>\n          <td>{{client.phone}}</td>\n          <td>{{client.physCity}}</td>\n          <td>{{client.physState}}</td>\n          <td>\n            <div *ngFor=\"let contact of client.contacts\">\n              <a [routerLink]=\"['/edit-person', contact.personId]\">{{contact.firstName}} {{contact.lastName}}</a>\n            </div>\n          </td>\n          <td>\n            <a [routerLink]=\"['/edit-client', client.companyId]\" class=\"text-nowrap\">Edit Client</a>\n            <a [routerLink]=\"'/delete-client'\" [queryParams]=\"{id: client.companyId,\n               companyName: client.companyName}\" class=\"ml-4 text-nowrap\">Delete Client</a>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n    <ng-template #noResults>\n      <h5 class=\"mt-4\">No results found.</h5>\n    </ng-template>\n  </ng-template>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/clients/clients.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/clients/clients.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2xpZW50cy9jbGllbnRzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/clients/clients.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/clients/clients.component.ts ***!
  \*********************************************************/
/*! exports provided: ClientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsComponent", function() { return ClientsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/client.service */ "./src/app/services/client.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClientsComponent = /** @class */ (function () {
    function ClientsComponent(clientService) {
        this.clientService = clientService;
        this.columnsToDisplay = ['companyName', 'websiteUri', 'phone', 'physCity', 'physState', 'contacts', 'actions'];
        this.dataReceived = false;
    }
    ClientsComponent.prototype.ngOnInit = function () {
        this.getClients();
        // this.mockNoResults(); //to test the 'No Results Found' message
    };
    ClientsComponent.prototype.getClients = function () {
        var _this = this;
        this.clientService.getClients().subscribe(function (data) {
            _this.clients = data;
            _this.dataReceived = true;
        }, function (err) {
            _this.dataReceived = true;
            console.error(err);
        }, function () { return console.log('clients populated.'); });
    };
    ClientsComponent.prototype.mockNoResults = function () {
        this.clients = [];
        this.dataReceived = true;
    };
    ClientsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-clients',
            template: __webpack_require__(/*! ./clients.component.html */ "./src/app/components/clients/clients.component.html"),
            styles: [__webpack_require__(/*! ./clients.component.scss */ "./src/app/components/clients/clients.component.scss")],
        }),
        __metadata("design:paramtypes", [_services_client_service__WEBPACK_IMPORTED_MODULE_1__["ClientService"]])
    ], ClientsComponent);
    return ClientsComponent;
}());



/***/ }),

/***/ "./src/app/components/clients/create-client/create-client.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/clients/create-client/create-client.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div *ngIf=\"!dataReceived; else displayContent\">\n    <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n  </div>\n  <ng-template #displayContent>\n    <h1 class=\"mt-4\">Create Client</h1>\n    <div *ngIf=\"validMessage != ''\" [ngClass]=\"errors?.length > 0 ? 'text-danger' : 'text-success'\">\n      <h3 class=\"valid-message mt-4\">{{validMessage}}</h3>\n      <h5 *ngFor=\"let error of errors\" class=\"errors-list\">\n        {{error}}\n      </h5>\n    </div>\n    <form [formGroup]=\"createClientForm\" (ngSubmit)=\"submitCreateClientForm()\" novalidate>\n      <div class=\"row mt-4\">\n        <div class=\"form-group col-md-5\">\n          <label>Company Name:</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"companyName\" required autofocus />\n        </div>\n        <div class=\"form-group col-md-4\">\n          <label>Website URI:</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"websiteUri\" required />\n        </div>\n        <div class=\"form-group col-md-3\">\n          <label>Phone:</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"phone\" required />\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md\">\n          <div class=\"panel-group\">\n            <div class=\"panel-heading\">\n              Physical Address\n            </div>\n            <div class=\"panel-body\">\n              <div class=\"form-group\">\n                <label>Physical Street Address:</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"physStreet\" required />\n              </div>\n              <div class=\"form-group\">\n                <label>Physical City:</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"physCity\" required />\n              </div>\n              <div class=\"form-group\">\n                <label>Physical State:</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"physState\" required />\n              </div>\n              <div class=\"form-group\">\n                <label>Physical Zip Code:</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"physZipCode\" required />\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md\">\n          <div class=\"panel-group\">\n            <div class=\"panel-heading\">\n              Mailing Address\n            </div>\n            <div class=\"panel-body\">\n              <div class=\"form-group\">\n                <label>Mailing Street Address:</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"mailStreet\" required />\n              </div>\n              <div class=\"form-group\">\n                <label>Mailing City:</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"mailCity\" required />\n              </div>\n              <div class=\"form-group\">\n                <label>Mailing State:</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"mailState\" required />\n              </div>\n              <div class=\"form-group\">\n                <label>Mailing Zip Code:</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"mailZipCode\" required />\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary my-5\">Submit</button>\n    </form>\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/components/clients/create-client/create-client.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/clients/create-client/create-client.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep div.mat-form-field-wrapper {\n  min-width: 300px; }\n  @media screen and (min-width: 992px) {\n    :host ::ng-deep div.mat-form-field-wrapper {\n      min-width: 400px; } }\n  @media screen and (min-width: 1200px) {\n    :host ::ng-deep div.mat-form-field-wrapper {\n      min-width: 500px; } }\n  label {\n  color: #999; }\n  .panel-group {\n  margin-top: 25px; }\n  .panel-heading {\n  background-color: #acd;\n  border: #acd 1px solid;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  min-height: 50px;\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  justify-content: center;\n  color: white; }\n  .panel-body {\n  border: #acd 1px solid;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  padding: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jbGllbnRzL2NyZWF0ZS1jbGllbnQvQzpcXFVzZXJzXFxkd3J1ZVxcT25lRHJpdmVcXFByb2plY3RzXFxBcXVlbnRcXGNydWQtYXBwXFxVSS9zcmNcXGFwcFxcY29tcG9uZW50c1xcY2xpZW50c1xcZWRpdC1jbGllbnRcXGVkaXQtY2xpZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NsaWVudHMvY3JlYXRlLWNsaWVudC9DOlxcVXNlcnNcXGR3cnVlXFxPbmVEcml2ZVxcUHJvamVjdHNcXEFxdWVudFxcY3J1ZC1hcHBcXFVJL3NyY1xcYXBwXFxjb21wb25lbnRzXFxfbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxpQkFBZ0IsRUFTakI7RUNWRztJREFKO01BSUksaUJBQWdCLEVBTW5CLEVBQUE7RUNWRztJREFKO01BUUksaUJBQWdCLEVBRW5CLEVBQUE7RUFFRDtFQUNFLFlBQVcsRUFDWjtFQUtEO0VBQ0UsaUJBQWdCLEVBQ2pCO0VBRUQ7RUFDRSx1QkFSZ0I7RUFTaEIsdUJBQThCO0VBQzlCLDZCQVRrQjtFQVVsQiw4QkFWa0I7RUFXbEIsaUJBQWdCO0VBQ2hCLGNBQWE7RUFDYixzQkFBcUI7RUFDckIsb0JBQW1CO0VBQ25CLHdCQUF1QjtFQUN2QixhQUFZLEVBQ2I7RUFFRDtFQUNFLHVCQUE4QjtFQUM5QixnQ0FyQmtCO0VBc0JsQixpQ0F0QmtCO0VBdUJsQixjQUFhLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NsaWVudHMvY3JlYXRlLWNsaWVudC9jcmVhdGUtY2xpZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL21peGluc1wiO1xyXG5cclxuOmhvc3QgOjpuZy1kZWVwIGRpdi5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcclxuICBtaW4td2lkdGg6IDMwMHB4O1xyXG5cclxuICBAaW5jbHVkZSB3aGVuLXdpZHRoKDk5MnB4KSB7XHJcbiAgICBtaW4td2lkdGg6IDQwMHB4O1xyXG4gIH1cclxuXHJcbiAgQGluY2x1ZGUgd2hlbi13aWR0aCgxMjAwcHgpIHtcclxuICAgIG1pbi13aWR0aDogNTAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgY29sb3I6ICM5OTk7XHJcbn1cclxuXHJcbiRwYW5lbC1jb2xvcjogI2FjZDtcclxuJGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG4ucGFuZWwtZ3JvdXAge1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcbi5wYW5lbC1oZWFkaW5nIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGFuZWwtY29sb3I7XHJcbiAgYm9yZGVyOiAkcGFuZWwtY29sb3IgMXB4IHNvbGlkO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ucGFuZWwtYm9keSB7XHJcbiAgYm9yZGVyOiAkcGFuZWwtY29sb3IgMXB4IHNvbGlkO1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4iLCJAbWl4aW4gd2hlbi13aWR0aCgkYXJncy4uLikge1xyXG4gIEBpZiBsZW5ndGgoJGFyZ3MpID09IDEge1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogbnRoKCRhcmdzLCAxKSkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9XHJcbiAgQGlmIGxlbmd0aCgkYXJncykgPT0gMiB7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBudGgoJGFyZ3MsIDEpKSBhbmQgKG1heC13aWR0aDogbnRoKCRhcmdzLCAyKSl7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/clients/create-client/create-client.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/clients/create-client/create-client.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CreateClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateClientComponent", function() { return CreateClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_ValidationErrorService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/ValidationErrorService */ "./src/app/services/ValidationErrorService.ts");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/client.service */ "./src/app/services/client.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateClientComponent = /** @class */ (function () {
    function CreateClientComponent(clientService) {
        this.clientService = clientService;
        this.validMessage = "";
        this.errors = [];
        this.properNames = {
            'companyName': 'Company name',
            'websiteUri': 'Website URI',
            'phone': 'Phone',
            'physStreet': 'Physical street address',
            'physCity': 'Physical city',
            'physState': 'Physical state',
            'physZipCode': 'Physical zip code',
            'mailStreet': 'Mailing street address',
            'mailCity': 'Mailing city',
            'mailState': 'Mailing state',
            'mailZipCode': 'Mailing zip code'
        };
        this.dataReceived = true;
    }
    CreateClientComponent.prototype.ngOnInit = function () {
        this.createClientForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            companyName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)
            ]),
            websiteUri: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)
            ]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)
            ]),
            physStreet: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)
            ]),
            physCity: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)
            ]),
            physState: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(2)
            ]),
            physZipCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(5)
            ]),
            mailStreet: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)
            ]),
            mailCity: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)
            ]),
            mailState: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(2)
            ]),
            mailZipCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(5)
            ])
        });
    };
    CreateClientComponent.prototype.submitCreateClientForm = function () {
        var _this = this;
        if (this.createClientForm.valid) {
            this.dataReceived = false;
            this.clientService.createClient(this.createClientForm.value).subscribe(function (data) {
                _this.dataReceived = true;
                _this.validMessage = _this.createClientForm.value['companyName'] + ' created successfully.';
                _this.errors = [];
                _this.createClientForm.reset();
                return true;
            }, function (err) {
                _this.dataReceived = true;
                console.error(err);
                _this.validMessage = 'Uh oh. We are having trouble submitting the form. ' +
                    'Please call support at 555-555-5555 for assistance.';
            }, function () { console.log('form submission complete.'); });
        }
        else {
            this.validMessage = 'Please correct the following errors before submitting:';
            this.errors = _services_ValidationErrorService__WEBPACK_IMPORTED_MODULE_2__["ValidationErrorService"].getValidationErrors(this.createClientForm, this.properNames);
        }
    };
    CreateClientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-client',
            template: __webpack_require__(/*! ./create-client.component.html */ "./src/app/components/clients/create-client/create-client.component.html"),
            styles: [__webpack_require__(/*! ./create-client.component.scss */ "./src/app/components/clients/create-client/create-client.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"]])
    ], CreateClientComponent);
    return CreateClientComponent;
}());



/***/ }),

/***/ "./src/app/components/clients/delete-client/delete-client.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/clients/delete-client/delete-client.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div *ngIf=\"!dataReceived; else displayContent\">\n    <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n  </div>\n  <ng-template #displayContent>\n    <h1 class=\"mt-4\">Delete Client</h1>\n    <div *ngIf=\"!responseMsg; else displayResponseMsg\">\n      <h5 class=\"mt-4\">You are about to delete the client {{companyName}}.  Are you sure?</h5>\n      <div class=\"mt-4\">\n        <button [routerLink]=\"'/clients'\" class=\"btn btn-secondary\">Cancel</button>\n        <button (click)=\"delete()\" class=\"btn btn-danger ml-4\">Delete</button>\n      </div>\n    </div>\n    <ng-template #displayResponseMsg>\n      <h5 class=\"mt-4\" [ngClass]=\"success ? 'text-success' : 'text-danger'\">{{responseMsg}}</h5>\n    </ng-template>\n  </ng-template>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/clients/delete-client/delete-client.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/clients/delete-client/delete-client.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-secondary {\n  border-color: #999;\n  background-color: #999; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jbGllbnRzL2RlbGV0ZS1jbGllbnQvQzpcXFVzZXJzXFxkd3J1ZVxcT25lRHJpdmVcXFByb2plY3RzXFxBcXVlbnRcXGNydWQtYXBwXFxVSS9zcmNcXGFwcFxcY29tcG9uZW50c1xccGVvcGxlXFxkZWxldGUtcGVyc29uXFxkZWxldGUtcGVyc29uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQWtCO0VBQ2xCLHVCQUFzQixFQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2xpZW50cy9kZWxldGUtY2xpZW50L2RlbGV0ZS1jbGllbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLXNlY29uZGFyeSB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjOTk5O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5OTk7XHJcbn1cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/clients/delete-client/delete-client.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/clients/delete-client/delete-client.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DeleteClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteClientComponent", function() { return DeleteClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/client.service */ "./src/app/services/client.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeleteClientComponent = /** @class */ (function () {
    function DeleteClientComponent(clientService, route) {
        this.clientService = clientService;
        this.route = route;
        this.responseMsg = '';
        this.success = false;
        this.dataReceived = false;
    }
    DeleteClientComponent.prototype.ngOnInit = function () {
        var params = this.route.snapshot.queryParams;
        this.id = params.id;
        this.companyName = params.companyName;
        this.getClient(this.id);
    };
    DeleteClientComponent.prototype.getClient = function (id) {
        var _this = this;
        this.clientService.getClient(id).subscribe(function (data) { _this.dataReceived = true; }, function (err) {
            _this.dataReceived = true;
            _this.responseMsg = "Client " + _this.companyName + " not found.";
        }, function () {
            console.log('client populated.');
        });
    };
    DeleteClientComponent.prototype.delete = function () {
        var _this = this;
        this.dataReceived = false;
        this.clientService.deleteClient(this.id).subscribe(function (data) {
            _this.responseMsg = "Client " + _this.companyName + " \n            has been successfully deleted.";
            _this.success = true;
            _this.dataReceived = true;
        }, function (err) {
            _this.responseMsg = "Client " + _this.companyName + "\n            not found.";
            _this.dataReceived = true;
        }, function () { console.log('delete request complete.'); });
    };
    DeleteClientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-delete-client',
            template: __webpack_require__(/*! ./delete-client.component.html */ "./src/app/components/clients/delete-client/delete-client.component.html"),
            styles: [__webpack_require__(/*! ./delete-client.component.scss */ "./src/app/components/clients/delete-client/delete-client.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_client_service__WEBPACK_IMPORTED_MODULE_2__["ClientService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], DeleteClientComponent);
    return DeleteClientComponent;
}());



/***/ }),

/***/ "./src/app/components/clients/edit-client/edit-client.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/clients/edit-client/edit-client.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div *ngIf=\"!(peopleReceived && clientReceived); else displayContent\">\n    <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n  </div>\n  <ng-template #displayContent>\n    <h1 class=\"mt-4\">Edit Client</h1>\n    <div *ngIf=\"validMessage != ''\" [ngClass]=\"errors?.length > 0 ? 'text-danger' : 'text-success'\">\n      <h4 class=\"valid-message mt-4\">{{validMessage}}</h4>\n      <h5 *ngFor=\"let error of errors\" class=\"errors-list\">\n        {{error}}\n      </h5>\n    </div>\n    <form *ngIf=\"!submitted\" [formGroup]=\"editClientForm\" (ngSubmit)=\"submitEditClientForm()\" novalidate>\n      <div class=\"row mt-5\">\n        <div class=\"form-group col-md\">\n          <mat-form-field>\n            <mat-select [compareWith]=\"equals\" placeholder=\"Contacts\" formControlName=\"contacts\" multiple>\n              <mat-option *ngFor=\"let person of people\" [value]=\"person\">{{person.firstName}} {{person.lastName}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n        <div class=\"form-group col-md\">\n          <label>Company Name:</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"companyName\" required autofocus />\n        </div>\n      </div>\n      <div class=\"row mt-3\">\n        <div class=\"form-group col-md\">\n          <label>Website URI:</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"websiteUri\" />\n        </div>\n        <div class=\"form-group col-md\">\n          <label>Phone:</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"phone\" required />\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md\">\n          <div class=\"panel-group\">\n            <div class=\"panel-heading\">\n              Physical Address\n            </div>\n            <div class=\"panel-body\">\n              <div class=\"form-group\">\n                <label>Physical Street Address:</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"physStreet\" required />\n              </div>\n              <div class=\"form-group\">\n                <label>Physical City:</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"physCity\" required />\n              </div>\n              <div class=\"form-group\">\n                <label>Physical State:</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"physState\" required />\n              </div>\n              <div class=\"form-group\">\n                <label>Physical Zip Code:</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"physZipCode\" required />\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md\">\n          <div class=\"panel-group\">\n            <div class=\"panel-heading\">\n              Mailing Address\n            </div>\n            <div class=\"panel-body\">\n              <div class=\"form-group\">\n                <label>Mailing Street Address:</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"mailStreet\" required />\n              </div>\n              <div class=\"form-group\">\n                <label>Mailing City:</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"mailCity\" required />\n              </div>\n              <div class=\"form-group\">\n                <label>Mailing State:</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"mailState\" required />\n              </div>\n              <div class=\"form-group\">\n                <label>Mailing Zip Code:</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"mailZipCode\" required />\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary mt-5 mb-5\">Submit</button>\n    </form>\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/components/clients/edit-client/edit-client.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/clients/edit-client/edit-client.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep div.mat-form-field-wrapper {\n  min-width: 300px; }\n  @media screen and (min-width: 992px) {\n    :host ::ng-deep div.mat-form-field-wrapper {\n      min-width: 400px; } }\n  @media screen and (min-width: 1200px) {\n    :host ::ng-deep div.mat-form-field-wrapper {\n      min-width: 500px; } }\n  label {\n  color: #999; }\n  .panel-group {\n  margin-top: 25px; }\n  .panel-heading {\n  background-color: #acd;\n  border: #acd 1px solid;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  min-height: 50px;\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  justify-content: center;\n  color: white; }\n  .panel-body {\n  border: #acd 1px solid;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  padding: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jbGllbnRzL2VkaXQtY2xpZW50L0M6XFxVc2Vyc1xcZHdydWVcXE9uZURyaXZlXFxQcm9qZWN0c1xcQXF1ZW50XFxjcnVkLWFwcFxcVUkvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNsaWVudHNcXGVkaXQtY2xpZW50XFxlZGl0LWNsaWVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jbGllbnRzL2VkaXQtY2xpZW50L0M6XFxVc2Vyc1xcZHdydWVcXE9uZURyaXZlXFxQcm9qZWN0c1xcQXF1ZW50XFxjcnVkLWFwcFxcVUkvc3JjXFxhcHBcXGNvbXBvbmVudHNcXF9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGlCQUFnQixFQVNqQjtFQ1ZHO0lEQUo7TUFJSSxpQkFBZ0IsRUFNbkIsRUFBQTtFQ1ZHO0lEQUo7TUFRSSxpQkFBZ0IsRUFFbkIsRUFBQTtFQUVEO0VBQ0UsWUFBVyxFQUNaO0VBS0Q7RUFDRSxpQkFBZ0IsRUFDakI7RUFFRDtFQUNFLHVCQVJnQjtFQVNoQix1QkFBOEI7RUFDOUIsNkJBVGtCO0VBVWxCLDhCQVZrQjtFQVdsQixpQkFBZ0I7RUFDaEIsY0FBYTtFQUNiLHNCQUFxQjtFQUNyQixvQkFBbUI7RUFDbkIsd0JBQXVCO0VBQ3ZCLGFBQVksRUFDYjtFQUVEO0VBQ0UsdUJBQThCO0VBQzlCLGdDQXJCa0I7RUFzQmxCLGlDQXRCa0I7RUF1QmxCLGNBQWEsRUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2xpZW50cy9lZGl0LWNsaWVudC9lZGl0LWNsaWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9taXhpbnNcIjtcclxuXHJcbjpob3N0IDo6bmctZGVlcCBkaXYubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XHJcbiAgbWluLXdpZHRoOiAzMDBweDtcclxuXHJcbiAgQGluY2x1ZGUgd2hlbi13aWR0aCg5OTJweCkge1xyXG4gICAgbWluLXdpZHRoOiA0MDBweDtcclxuICB9XHJcblxyXG4gIEBpbmNsdWRlIHdoZW4td2lkdGgoMTIwMHB4KSB7XHJcbiAgICBtaW4td2lkdGg6IDUwMHB4O1xyXG4gIH1cclxufVxyXG5cclxubGFiZWwge1xyXG4gIGNvbG9yOiAjOTk5O1xyXG59XHJcblxyXG4kcGFuZWwtY29sb3I6ICNhY2Q7XHJcbiRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cclxuLnBhbmVsLWdyb3VwIHtcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcblxyXG4ucGFuZWwtaGVhZGluZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHBhbmVsLWNvbG9yO1xyXG4gIGJvcmRlcjogJHBhbmVsLWNvbG9yIDFweCBzb2xpZDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiAgbWluLWhlaWdodDogNTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnBhbmVsLWJvZHkge1xyXG4gIGJvcmRlcjogJHBhbmVsLWNvbG9yIDFweCBzb2xpZDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuIiwiQG1peGluIHdoZW4td2lkdGgoJGFyZ3MuLi4pIHtcclxuICBAaWYgbGVuZ3RoKCRhcmdzKSA9PSAxIHtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IG50aCgkYXJncywgMSkpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBpZiBsZW5ndGgoJGFyZ3MpID09IDIge1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogbnRoKCRhcmdzLCAxKSkgYW5kIChtYXgtd2lkdGg6IG50aCgkYXJncywgMikpe1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/clients/edit-client/edit-client.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/clients/edit-client/edit-client.component.ts ***!
  \*************************************************************************/
/*! exports provided: EditClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditClientComponent", function() { return EditClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_people_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/people.service */ "./src/app/services/people.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_ValidationErrorService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/ValidationErrorService */ "./src/app/services/ValidationErrorService.ts");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/client.service */ "./src/app/services/client.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditClientComponent = /** @class */ (function () {
    function EditClientComponent(peopleService, clientService, route) {
        this.peopleService = peopleService;
        this.clientService = clientService;
        this.route = route;
        this.validMessage = '';
        this.errors = [];
        this.submitted = false;
        this.properNames = {
            'companyName': 'Company name',
            'websiteUri': 'Website URI',
            'phone': 'Phone',
            'physStreet': 'Physical street address',
            'physCity': 'Physical city',
            'physState': 'Physical state',
            'physZipCode': 'Physical zip code',
            'mailStreet': 'Mailing street address',
            'mailCity': 'Mailing city',
            'mailState': 'Mailing state',
            'mailZipCode': 'Mailing zip code'
        };
        this.people = [];
        this.peopleReceived = false;
        this.clientReceived = false;
        this.selectedContacts = [];
    }
    EditClientComponent.prototype.ngOnInit = function () {
        this.getClient(this.route.snapshot.params.id);
        this.getPeople();
        this.editClientForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            companyId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            companyName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)
            ]),
            websiteUri: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)
            ]),
            physStreet: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)
            ]),
            physCity: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)
            ]),
            physState: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(2)
            ]),
            physZipCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(5)
            ]),
            mailStreet: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)
            ]),
            mailCity: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)
            ]),
            mailState: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(2)
            ]),
            mailZipCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(5)
            ]),
            contacts: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
    };
    EditClientComponent.prototype.getClient = function (id) {
        var _this = this;
        this.clientService.getClient(id).subscribe(function (data) {
            var client = data;
            _this.editClientForm.patchValue({
                companyId: client.companyId,
                companyName: client.companyName,
                websiteUri: client.websiteUri,
                phone: client.phone,
                physStreet: client.physStreet,
                physCity: client.physCity,
                physState: client.physState,
                physZipCode: client.physZipCode,
                mailStreet: client.mailStreet,
                mailCity: client.mailCity,
                mailState: client.mailState,
                mailZipCode: client.mailZipCode,
                contacts: client.contacts
            });
            // this.selectedContacts = client.contacts;
            _this.clientReceived = true;
        }, function (err) {
            console.error(err);
            _this.clientReceived = true;
        }, function () {
            console.log('client populated.');
        });
    };
    EditClientComponent.prototype.getPeople = function () {
        var _this = this;
        this.peopleService.getPeople().subscribe(function (data) {
            _this.people = data;
            _this.peopleReceived = true;
        }, function (err) {
            console.log(err);
            _this.peopleReceived = true;
        }, function () {
            console.log('people populated');
        });
    };
    EditClientComponent.prototype.submitEditClientForm = function () {
        var _this = this;
        if (this.editClientForm.valid) {
            //TODO debug
            console.log(JSON.stringify(this.editClientForm.value));
            this.clientReceived = false; //start progress indicator
            this.clientService.editClient(this.editClientForm.value).subscribe(function (data) {
                _this.validMessage = 'Your changes have been saved.';
                _this.errors = [];
                _this.submitted = true;
                _this.clientReceived = true; //stop progress indicator
                return true;
            }, function (err) {
                console.error(err);
                _this.validMessage = 'Uh oh. We are having trouble submitting the form. ' +
                    'Please call support at 555-555-5555 for assistance.';
                _this.clientReceived = true; //stop progress indicator
            }, function () { console.log('form submission complete.'); });
        }
        else {
            this.validMessage = 'Please correct the following errors before submitting:';
            this.errors = _services_ValidationErrorService__WEBPACK_IMPORTED_MODULE_4__["ValidationErrorService"].getValidationErrors(this.editClientForm, this.properNames);
        }
    };
    EditClientComponent.prototype.equals = function (item1, item2) {
        return item1 && item2 ? item1.personId === item2.personId : item1 === item2;
    };
    EditClientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-client',
            template: __webpack_require__(/*! ./edit-client.component.html */ "./src/app/components/clients/edit-client/edit-client.component.html"),
            styles: [__webpack_require__(/*! ./edit-client.component.scss */ "./src/app/components/clients/edit-client/edit-client.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_people_service__WEBPACK_IMPORTED_MODULE_2__["PeopleService"], _services_client_service__WEBPACK_IMPORTED_MODULE_5__["ClientService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], EditClientComponent);
    return EditClientComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home-wrapper\">\n  <h1 class=\"title\">Welcome to the CRUD Demo App</h1>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm mt-5\" (click)=\"navToPeople()\">\n        <div class=\"btn icon\">\n          <img src=\"assets/img/person.jpg\" alt=\"People\">\n          <div class=\"text-center\">People</div>\n        </div>\n      </div>\n      <div class=\"col-sm mt-5\" (click)=\"navToClients()\">\n        <div class=\"btn icon\">\n          <img src=\"assets/img/client.jpg\" alt=\"Clients\">\n          <div class=\"text-center\">Clients</div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-wrapper {\n  padding: 15px;\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center; }\n\n.container {\n  max-width: 700px; }\n\n.title {\n  font-size: 24px; }\n\n@media screen and (min-width: 440px) {\n    .title {\n      font-size: 28px; } }\n\n@media screen and (min-width: 576px) {\n    .title {\n      font-size: 32px; } }\n\n@media screen and (min-width: 768px) {\n    .title {\n      font-size: 36px; } }\n\n@media screen and (min-width: 992px) {\n    .title {\n      font-size: 40px; } }\n\n.icon {\n  width: 75%;\n  max-width: 180px; }\n\n.icon img {\n    width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL0M6XFxVc2Vyc1xcZHdydWVcXE9uZURyaXZlXFxQcm9qZWN0c1xcQXF1ZW50XFxjcnVkLWFwcFxcVUkvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9DOlxcVXNlcnNcXGR3cnVlXFxPbmVEcml2ZVxcUHJvamVjdHNcXEFxdWVudFxcY3J1ZC1hcHBcXFVJL3NyY1xcYXBwXFxjb21wb25lbnRzXFxfbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQUFhO0VBQ2IsY0FBYTtFQUNiLHlCQUF3QjtFQUN4QixvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSxpQkFBZ0IsRUFDakI7O0FBRUQ7RUFDRSxnQkFBZSxFQWNoQjs7QUMxQkc7SURXSjtNQUlJLGdCQUFlLEVBV2xCLEVBQUE7O0FDMUJHO0lEV0o7TUFPSSxnQkFBZSxFQVFsQixFQUFBOztBQzFCRztJRFdKO01BVUksZ0JBQWUsRUFLbEIsRUFBQTs7QUMxQkc7SURXSjtNQWFJLGdCQUFlLEVBRWxCLEVBQUE7O0FBRUQ7RUFDRSxXQUFVO0VBQ1YsaUJBQWdCLEVBS2pCOztBQVBEO0lBS0ksWUFBVyxFQUNaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vbWl4aW5zXCI7XHJcblxyXG4uaG9tZS13cmFwcGVyIHtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIG1heC13aWR0aDogNzAwcHg7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG5cclxuICBAaW5jbHVkZSB3aGVuLXdpZHRoKDQ0MHB4KSB7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgfVxyXG4gIEBpbmNsdWRlIHdoZW4td2lkdGgoNTc2cHgpIHtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICB9XHJcbiAgQGluY2x1ZGUgd2hlbi13aWR0aCg3NjhweCkge1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG4gIH1cclxuICBAaW5jbHVkZSB3aGVuLXdpZHRoKDk5MnB4KSB7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgd2lkdGg6IDc1JTtcclxuICBtYXgtd2lkdGg6IDE4MHB4O1xyXG5cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4iLCJAbWl4aW4gd2hlbi13aWR0aCgkYXJncy4uLikge1xyXG4gIEBpZiBsZW5ndGgoJGFyZ3MpID09IDEge1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogbnRoKCRhcmdzLCAxKSkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9XHJcbiAgQGlmIGxlbmd0aCgkYXJncykgPT0gMiB7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBudGgoJGFyZ3MsIDEpKSBhbmQgKG1heC13aWR0aDogbnRoKCRhcmdzLCAyKSl7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_people_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/people.service */ "./src/app/services/people.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(peopleService, router) {
        this.peopleService = peopleService;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.navToPeople = function () {
        this.router.navigate(['/people']);
    };
    HomeComponent.prototype.navToClients = function () {
        this.router.navigate(['/clients']);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_people_service__WEBPACK_IMPORTED_MODULE_1__["PeopleService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/people/create-person/create-person.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/people/create-person/create-person.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div *ngIf=\"!dataReceived; else displayContent\">\n    <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n  </div>\n  <ng-template #displayContent>\n    <h1 class=\"mt-4\">Create Person</h1>\n    <div *ngIf=\"validMessage != ''\" [ngClass]=\"errors?.length > 0 ? 'text-danger' : 'text-success'\">\n      <h3 class=\"valid-message mt-4\">{{validMessage}}</h3>\n      <h5 *ngFor=\"let error of errors\" class=\"errors-list\">\n        {{error}}\n      </h5>\n    </div>\n    <form [formGroup]=\"createPersonForm\" (ngSubmit)=\"submitCreatePersonForm()\" novalidate>\n      <div class=\"row mt-4\">\n        <div class=\"block col-md\">\n          <div class=\"form-group\">\n            <label>First Name:</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"firstName\" required autofocus />\n          </div>\n          <div class=\"form-group\">\n            <label>Last Name:</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"lastName\" required />\n          </div>\n          <div class=\"form-group\">\n            <label>Email Address:</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"emailAddress\" required />\n          </div>\n        </div>\n        <div class=\"block col-md\">\n          <div class=\"form-group\">\n            <label>Street Address:</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"streetAddress\" required />\n          </div>\n          <div class=\"form-group\">\n            <label>City:</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"city\" required />\n          </div>\n          <div class=\"row\">\n            <div class=\"form-group col-md\">\n              <label>State:</label>\n              <input type=\"text\" class=\"form-control\" formControlName=\"state\" required />\n            </div>\n            <div class=\"form-group col-md\">\n              <label>Zip Code:</label>\n              <input type=\"text\" class=\"form-control\" formControlName=\"zipCode\" required />\n            </div>\n          </div>\n        </div>\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary my-4\">Submit</button>\n    </form>\n  </ng-template>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/people/create-person/create-person.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/components/people/create-person/create-person.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n  color: #999; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wZW9wbGUvY3JlYXRlLXBlcnNvbi9DOlxcVXNlcnNcXGR3cnVlXFxPbmVEcml2ZVxcUHJvamVjdHNcXEFxdWVudFxcY3J1ZC1hcHBcXFVJL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwZW9wbGVcXGNyZWF0ZS1wZXJzb25cXGNyZWF0ZS1wZXJzb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFXLEVBQ1oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Blb3BsZS9jcmVhdGUtcGVyc29uL2NyZWF0ZS1wZXJzb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbCB7XHJcbiAgY29sb3I6ICM5OTk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/people/create-person/create-person.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/people/create-person/create-person.component.ts ***!
  \****************************************************************************/
/*! exports provided: CreatePersonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePersonComponent", function() { return CreatePersonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_people_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/people.service */ "./src/app/services/people.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_ValidationErrorService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/ValidationErrorService */ "./src/app/services/ValidationErrorService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreatePersonComponent = /** @class */ (function () {
    function CreatePersonComponent(peopleService) {
        this.peopleService = peopleService;
        this.validMessage = "";
        this.errors = [];
        this.properNames = {
            'firstName': 'First Name',
            'lastName': 'Last Name',
            'emailAddress': 'Email Address',
            'streetAddress': 'Street Address',
            'city': 'City',
            'state': 'State',
            'zipCode': 'Zip code'
        };
        this.dataReceived = true;
    }
    CreatePersonComponent.prototype.ngOnInit = function () {
        this.createPersonForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)
            ]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)
            ]),
            emailAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)
            ]),
            streetAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)
            ]),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)
            ]),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(2)
            ]),
            zipCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(5)
            ])
        });
    };
    CreatePersonComponent.prototype.submitCreatePersonForm = function () {
        var _this = this;
        if (this.createPersonForm.valid) {
            this.dataReceived = false;
            this.peopleService.createPerson(this.createPersonForm.value).subscribe(function (data) {
                _this.dataReceived = true;
                _this.validMessage = _this.createPersonForm.value['firstName'] + ' created successfully.';
                _this.errors = [];
                _this.createPersonForm.reset();
                return true;
            }, function (err) {
                _this.dataReceived = true;
                console.error(err);
                _this.validMessage = 'Uh oh. We are having trouble submitting the form. ' +
                    'Please call support at 555-555-5555 for assistance.';
            }, function () { console.log('form submission complete.'); });
        }
        else {
            this.validMessage = 'Please correct the following errors before submitting:';
            this.errors = _services_ValidationErrorService__WEBPACK_IMPORTED_MODULE_3__["ValidationErrorService"].getValidationErrors(this.createPersonForm, this.properNames);
        }
    };
    CreatePersonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-person',
            template: __webpack_require__(/*! ./create-person.component.html */ "./src/app/components/people/create-person/create-person.component.html"),
            styles: [__webpack_require__(/*! ./create-person.component.scss */ "./src/app/components/people/create-person/create-person.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_people_service__WEBPACK_IMPORTED_MODULE_1__["PeopleService"]])
    ], CreatePersonComponent);
    return CreatePersonComponent;
}());



/***/ }),

/***/ "./src/app/components/people/delete-person/delete-person.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/people/delete-person/delete-person.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div *ngIf=\"!dataReceived; else displayContent\">\n    <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n  </div>\n  <ng-template #displayContent>\n    <h1 class=\"mt-4\">Delete Person</h1>\n    <div *ngIf=\"!responseMsg; else displayResponseMsg\">\n      <h5 class=\"mt-4\">You are about to delete the person {{firstName}} {{lastName}}.  Are you sure?</h5>\n      <div class=\"mt-4\">\n        <button [routerLink]=\"'/people'\" class=\"btn btn-secondary\">Cancel</button>\n        <button (click)=\"delete()\" class=\"btn btn-danger ml-4\">Delete</button>\n      </div>\n    </div>\n    <ng-template #displayResponseMsg>\n      <h5 class=\"mt-4\" [ngClass]=\"success ? 'text-success' : 'text-danger'\">{{responseMsg}}</h5>\n    </ng-template>\n  </ng-template>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/people/delete-person/delete-person.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/components/people/delete-person/delete-person.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-secondary {\n  border-color: #999;\n  background-color: #999; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wZW9wbGUvZGVsZXRlLXBlcnNvbi9DOlxcVXNlcnNcXGR3cnVlXFxPbmVEcml2ZVxcUHJvamVjdHNcXEFxdWVudFxcY3J1ZC1hcHBcXFVJL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwZW9wbGVcXGRlbGV0ZS1wZXJzb25cXGRlbGV0ZS1wZXJzb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBa0I7RUFDbEIsdUJBQXNCLEVBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wZW9wbGUvZGVsZXRlLXBlcnNvbi9kZWxldGUtcGVyc29uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1zZWNvbmRhcnkge1xyXG4gIGJvcmRlci1jb2xvcjogIzk5OTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5O1xyXG59XHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/people/delete-person/delete-person.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/people/delete-person/delete-person.component.ts ***!
  \****************************************************************************/
/*! exports provided: DeletePersonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeletePersonComponent", function() { return DeletePersonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_people_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/people.service */ "./src/app/services/people.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeletePersonComponent = /** @class */ (function () {
    function DeletePersonComponent(peopleService, route) {
        this.peopleService = peopleService;
        this.route = route;
        this.responseMsg = '';
        this.success = false;
        this.dataReceived = false;
    }
    DeletePersonComponent.prototype.ngOnInit = function () {
        var params = this.route.snapshot.queryParams;
        this.id = params.id;
        this.firstName = params.firstName;
        this.lastName = params.lastName;
        this.getPerson(this.id);
    };
    DeletePersonComponent.prototype.getPerson = function (id) {
        var _this = this;
        this.peopleService.getPerson(id).subscribe(function (data) { _this.dataReceived = true; }, function (err) {
            _this.dataReceived = true;
            _this.responseMsg = "Person " + _this.firstName + " " + _this.lastName + "\n            not found.";
        }, function () {
            console.log('person populated.');
        });
    };
    DeletePersonComponent.prototype.delete = function () {
        var _this = this;
        this.dataReceived = false;
        this.peopleService.deletePerson(this.id).subscribe(function (data) {
            _this.responseMsg = "Person " + _this.firstName + " " + _this.lastName + " \n            has been successfully deleted.";
            _this.success = true;
            _this.dataReceived = true;
        }, function (err) {
            _this.responseMsg = "Person " + _this.firstName + " " + _this.lastName + "\n            not found.";
            _this.dataReceived = true;
        }, function () { console.log('delete request complete.'); });
    };
    DeletePersonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-delete-person',
            template: __webpack_require__(/*! ./delete-person.component.html */ "./src/app/components/people/delete-person/delete-person.component.html"),
            styles: [__webpack_require__(/*! ./delete-person.component.scss */ "./src/app/components/people/delete-person/delete-person.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_people_service__WEBPACK_IMPORTED_MODULE_1__["PeopleService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], DeletePersonComponent);
    return DeletePersonComponent;
}());



/***/ }),

/***/ "./src/app/components/people/edit-person/edit-person.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/people/edit-person/edit-person.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div *ngIf=\"!(personReceived && clientsReceived); else displayContent\">\n    <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n  </div>\n  <ng-template #displayContent>\n    <h1 class=\"mt-4\">Edit Person</h1>\n    <div *ngIf=\"validMessage != ''\" [ngClass]=\"errors?.length > 0 ? 'text-danger' : 'text-success'\">\n      <h4 class=\"valid-message mt-4\">{{validMessage}}</h4>\n      <h5 *ngFor=\"let error of errors\" class=\"errors-list\">\n        {{error}}\n      </h5>\n    </div>\n    <form *ngIf=\"!submitted\" [formGroup]=\"editPersonForm\" (ngSubmit)=\"submitEditPersonForm()\" novalidate>\n      <div class=\"row mt-3\">\n        <div class=\"form-group col-md\">\n          <label>First Name:</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"firstName\" required autofocus />\n        </div>\n        <div class=\"form-group col-md\">\n          <label>Last Name:</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"lastName\" required />\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group col-md\">\n          <label>Email Address:</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"emailAddress\" required />\n        </div>\n        <div class=\"form-group col-md\">\n          <label>Client:</label>\n          <mat-select [compareWith]=\"equals\" class=\"form-control\" formControlName=\"client\">\n            <mat-option [value]=\"\">No client</mat-option>\n            <mat-option *ngFor=\"let client of clients\" [value]=\"client\">{{client.companyName}}</mat-option>\n          </mat-select>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group col-md-5\">\n          <label>Street Address:</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"streetAddress\" required />\n        </div>\n        <div class=\"form-group col-md-3\">\n          <label>City:</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"city\" required />\n        </div>\n        <div class=\"form-group col-md-2\">\n          <label>State:</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"state\" required />\n        </div>\n        <div class=\"form-group col-md-2\">\n          <label>Zip Code:</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"zipCode\" required />\n        </div>\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary mt-4 mb-4\">Submit</button>\n    </form>\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/components/people/edit-person/edit-person.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/people/edit-person/edit-person.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-top: 15px; }\n\nlabel {\n  color: #999; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wZW9wbGUvZWRpdC1wZXJzb24vQzpcXFVzZXJzXFxkd3J1ZVxcT25lRHJpdmVcXFByb2plY3RzXFxBcXVlbnRcXGNydWQtYXBwXFxVSS9zcmNcXGFwcFxcY29tcG9uZW50c1xccGVvcGxlXFxlZGl0LXBlcnNvblxcZWRpdC1wZXJzb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBZ0IsRUFDakI7O0FBRUQ7RUFDRSxZQUFXLEVBQ1oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Blb3BsZS9lZGl0LXBlcnNvbi9lZGl0LXBlcnNvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWdyb3VwIHtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgY29sb3I6ICM5OTk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/people/edit-person/edit-person.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/people/edit-person/edit-person.component.ts ***!
  \************************************************************************/
/*! exports provided: EditPersonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPersonComponent", function() { return EditPersonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_people_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/people.service */ "./src/app/services/people.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_ValidationErrorService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/ValidationErrorService */ "./src/app/services/ValidationErrorService.ts");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/client.service */ "./src/app/services/client.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditPersonComponent = /** @class */ (function () {
    function EditPersonComponent(peopleService, clientService, route) {
        this.peopleService = peopleService;
        this.clientService = clientService;
        this.route = route;
        this.validMessage = '';
        this.errors = [];
        this.submitted = false;
        this.properNames = {
            'firstName': 'First Name',
            'lastName': 'Last Name',
            'emailAddress': 'Email Address',
            'streetAddress': 'Street Address',
            'city': 'City',
            'state': 'State',
            'zipCode': 'Zip code'
        };
        this.clients = [];
        this.personReceived = false;
        this.clientsReceived = false;
    }
    EditPersonComponent.prototype.ngOnInit = function () {
        this.getPerson(this.route.snapshot.params.id);
        this.getClients();
        this.editPersonForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            personId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)
            ]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)
            ]),
            emailAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)
            ]),
            streetAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)
            ]),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)
            ]),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(2)
            ]),
            zipCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(5)
            ]),
            client: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null)
        });
    };
    EditPersonComponent.prototype.getPerson = function (id) {
        var _this = this;
        this.peopleService.getPerson(id).subscribe(function (data) {
            var person = data;
            _this.editPersonForm.patchValue({
                personId: person.personId,
                firstName: person.firstName,
                lastName: person.lastName,
                emailAddress: person.emailAddress,
                streetAddress: person.streetAddress,
                city: person.city,
                state: person.state,
                zipCode: person.zipCode,
                client: person.client
            });
            _this.personReceived = true;
        }, function (err) {
            console.error(err);
            _this.personReceived = true;
        }, function () {
            console.log('person populated.');
        });
    };
    EditPersonComponent.prototype.getClients = function () {
        var _this = this;
        this.clientService.getClients().subscribe(function (data) {
            _this.clients = data;
            _this.clientsReceived = true;
        }, function (err) {
            console.log(err);
            _this.clientsReceived = true;
        }, function () {
            console.log('clients populated');
        });
    };
    EditPersonComponent.prototype.submitEditPersonForm = function () {
        var _this = this;
        if (this.editPersonForm.valid) {
            this.clientsReceived = false; //to show the progress indicator
            this.peopleService.editPerson(this.editPersonForm.value).subscribe(function (data) {
                _this.validMessage = 'Your changes have been saved.';
                _this.errors = [];
                _this.submitted = true;
                _this.clientsReceived = true; //stop the progress indicator
                return true;
            }, function (err) {
                console.error(err);
                _this.validMessage = 'Uh oh. We are having trouble submitting the form. ' +
                    'Please call support at 555-555-5555 for assistance.';
                _this.clientsReceived = true; //stop the progress indicator
            }, function () { console.log('form submission complete.'); });
        }
        else {
            this.validMessage = 'Please correct the following errors before submitting:';
            this.errors = _services_ValidationErrorService__WEBPACK_IMPORTED_MODULE_4__["ValidationErrorService"].getValidationErrors(this.editPersonForm, this.properNames);
        }
    };
    EditPersonComponent.prototype.equals = function (item1, item2) {
        return item1 && item2 ? item1.companyId === item2.companyId : item1 === item2;
    };
    EditPersonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-person',
            template: __webpack_require__(/*! ./edit-person.component.html */ "./src/app/components/people/edit-person/edit-person.component.html"),
            styles: [__webpack_require__(/*! ./edit-person.component.scss */ "./src/app/components/people/edit-person/edit-person.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_people_service__WEBPACK_IMPORTED_MODULE_2__["PeopleService"], _services_client_service__WEBPACK_IMPORTED_MODULE_5__["ClientService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], EditPersonComponent);
    return EditPersonComponent;
}());



/***/ }),

/***/ "./src/app/components/people/people.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/people/people.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div *ngIf=\"!dataReceived; else displayContent\">\n    <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n  </div>\n  <ng-template #displayContent>\n    <h1 class=\"mt-4\">Person Listing</h1>\n    <div class=\"mt-4\">\n      <a [routerLink]=\"'/create-person'\">Create New Person</a>\n    </div>\n    <div *ngIf=\"people?.length > 0; else noResults\" class=\"table-wrapper mt-4\" >\n      <table class=\"table\">\n        <thead>\n        <tr>\n          <th>First Name</th>\n          <th>Last Name</th>\n          <th>Email Address</th>\n          <th>Client</th>\n          <th>Actions</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let person of people\">\n          <td>{{person.firstName}}</td>\n          <td>{{person.lastName}}</td>\n          <td>{{person.emailAddress}}</td>\n          <td><a *ngIf=\"person.client\" [routerLink]=\"['/edit-client', person.client.companyId]\" >{{person.client.companyName}}</a></td>\n          <td>\n            <a [routerLink]=\"['/edit-person', person.personId]\" class=\"text-nowrap\">Edit Person</a>\n            <a [routerLink]=\"'/delete-person'\" [queryParams]=\"{id: person.personId,\n               firstName: person.firstName, lastName: person.lastName}\"\n               class=\"ml-4 text-nowrap\">Delete Person</a>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n    <ng-template #noResults>\n      <h5 class=\"mt-4\">No results found.</h5>\n    </ng-template>\n  </ng-template>\n</div>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/components/people/people.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/people/people.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-wrapper {\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center; }\n  .table-wrapper .table {\n    max-width: 1000px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wZW9wbGUvQzpcXFVzZXJzXFxkd3J1ZVxcT25lRHJpdmVcXFByb2plY3RzXFxBcXVlbnRcXGNydWQtYXBwXFxVSS9zcmNcXGFwcFxcY29tcG9uZW50c1xccGVvcGxlXFxwZW9wbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFhO0VBQ2IseUJBQXdCO0VBQ3hCLG9CQUFtQixFQUtwQjtFQVJEO0lBTUksa0JBQWlCLEVBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wZW9wbGUvcGVvcGxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlLXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIC50YWJsZSB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/people/people.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/people/people.component.ts ***!
  \*******************************************************/
/*! exports provided: PeopleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleComponent", function() { return PeopleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_people_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/people.service */ "./src/app/services/people.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PeopleComponent = /** @class */ (function () {
    function PeopleComponent(peopleService) {
        this.peopleService = peopleService;
        this.dataReceived = false;
    }
    PeopleComponent.prototype.ngOnInit = function () {
        this.getPeople();
        // this.mockNoResults(); //to test the 'No Results Found' message
    };
    PeopleComponent.prototype.getPeople = function () {
        var _this = this;
        this.peopleService.getPeople().subscribe(function (data) {
            _this.people = data;
            _this.dataReceived = true;
        }, function (err) {
            _this.dataReceived = true;
            console.error(err);
        }, function () { return console.log('people populated.'); });
    };
    PeopleComponent.prototype.mockNoResults = function () {
        this.people = [];
        this.dataReceived = true;
    };
    PeopleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-people',
            template: __webpack_require__(/*! ./people.component.html */ "./src/app/components/people/people.component.html"),
            styles: [__webpack_require__(/*! ./people.component.scss */ "./src/app/components/people/people.component.scss")],
        }),
        __metadata("design:paramtypes", [_services_people_service__WEBPACK_IMPORTED_MODULE_1__["PeopleService"]])
    ], PeopleComponent);
    return PeopleComponent;
}());



/***/ }),

/***/ "./src/app/services/ValidationErrorService.ts":
/*!****************************************************!*\
  !*** ./src/app/services/ValidationErrorService.ts ***!
  \****************************************************/
/*! exports provided: ValidationErrorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationErrorService", function() { return ValidationErrorService; });
var ValidationErrorService = /** @class */ (function () {
    function ValidationErrorService() {
    }
    ValidationErrorService.getValidationErrors = function (formGroup, properNames) {
        var errors = [];
        Object.keys(formGroup.controls).forEach(function (key) {
            var controlErrors = formGroup.get(key).errors;
            if (controlErrors != null) {
                Object.keys(controlErrors).forEach(function (keyError) {
                    switch (keyError) {
                        case 'required':
                            errors.push(properNames[key] + ' is required.');
                            break;
                        case 'minlength':
                            errors.push(properNames[key] + ' must be at least ' +
                                controlErrors[keyError].requiredLength + ' characters.');
                            break;
                        case 'maxlength':
                            errors.push(properNames[key] + ' must be no more than ' +
                                controlErrors[keyError].requiredLength + ' characters.');
                            break;
                    }
                });
            }
        });
        return errors;
    };
    return ValidationErrorService;
}());



/***/ }),

/***/ "./src/app/services/client.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/client.service.ts ***!
  \********************************************/
/*! exports provided: ClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientService", function() { return ClientService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var domain = 'http://localhost:8080';
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var ClientService = /** @class */ (function () {
    function ClientService(http) {
        this.http = http;
    }
    ClientService.prototype.getClients = function () {
        return this.http.get(domain + "/api/client/list");
    };
    ClientService.prototype.getClient = function (id) {
        return this.http.get(domain + "/api/client/" + id);
    };
    ClientService.prototype.createClient = function (client) {
        var body = JSON.stringify(client);
        return this.http.post(domain + "/api/client/create", body, httpOptions);
    };
    ClientService.prototype.editClient = function (client) {
        var body = JSON.stringify(client);
        return this.http.put(domain + "/api/client/edit", body, httpOptions);
    };
    ClientService.prototype.deleteClient = function (id) {
        return this.http.delete(domain + "/api/client/" + id);
    };
    ClientService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ClientService);
    return ClientService;
}());



/***/ }),

/***/ "./src/app/services/people.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/people.service.ts ***!
  \********************************************/
/*! exports provided: PeopleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleService", function() { return PeopleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var domain = 'http://localhost:8080';
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var PeopleService = /** @class */ (function () {
    function PeopleService(http) {
        this.http = http;
    }
    PeopleService.prototype.getPeople = function () {
        return this.http.get(domain + "/api/person/list");
    };
    PeopleService.prototype.getPerson = function (id) {
        return this.http.get(domain + "/api/person/" + id);
    };
    PeopleService.prototype.createPerson = function (person) {
        var body = JSON.stringify(person);
        return this.http.post(domain + "/api/person/create", body, httpOptions);
    };
    PeopleService.prototype.editPerson = function (person) {
        var body = JSON.stringify(person);
        return this.http.put(domain + "/api/person/edit", body, httpOptions);
    };
    PeopleService.prototype.deletePerson = function (id) {
        return this.http.delete(domain + "/api/person/" + id);
    };
    PeopleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PeopleService);
    return PeopleService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\dwrue\OneDrive\Projects\Aquent\crud-app\UI\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map