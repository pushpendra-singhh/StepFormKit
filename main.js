"use strict";
(self["webpackChunkangular_starter"] = self["webpackChunkangular_starter"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _form_configs_basic_form_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-configs/basic-form.config */ 3510);
/* harmony import */ var _form_configs_advanced_form_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-configs/advanced-form.config */ 4048);
/* harmony import */ var _form_configs_security_form_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-configs/security-form.config */ 2741);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _step_form_kit_components_step_form_step_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./step-form-kit/components/step-form/step-form.component */ 606);






const _c0 = function (a0) { return { color: a0 }; };
class AppComponent {
    constructor() {
        this.formConfig = _form_configs_basic_form_config__WEBPACK_IMPORTED_MODULE_0__.basicFormConfig;
        this.currentForm = 'basic';
        this.basicFormData = {
            personalInfo: {
                firstName: 'Pushpendra',
                lastName: 'Singh',
                email: 'Pushpendra@example.com'
            }
        };
        this.advancedFormData = {
            personalInfo: {
                firstName: 'Pushpendra',
                lastName: 'Singh',
                email: 'Pushpendra@example.com',
                phone: '123-456-7890',
                birthDate: '2000-01-01'
            },
            addressInfo: {
                street: '123 Main St',
                city: 'Anytown',
                state: 'CA',
                zipCode: '12345',
                country: 'us'
            },
            preferences: {
                newsletter: true,
                theme: 'light',
                language: 'en'
            }
        };
        this.securityFormData = {
            personalInfo: {
                firstName: 'Pushpendra',
                lastName: 'Singh',
                employeeId: 'EMP123',
                email: 'Pushpendra@companysecurity.com'
            },
            securityCredentials: {
                clearanceLevel: 'secret',
                clearanceNumber: 'SC123456',
                expirationDate: '2025-12-31'
            },
            specialization: {
                primaryRole: 'networkSecurity',
                certifications: ['cissp', 'ceh'],
                yearsOfExperience: 5
            }
        };
    }
    setFormConfig(formType) {
        this.currentForm = formType;
        switch (formType) {
            case 'advanced':
                this.formConfig = _form_configs_advanced_form_config__WEBPACK_IMPORTED_MODULE_1__.advancedFormConfig;
                this.currentFormData = this.advancedFormData;
                break;
            case 'security':
                this.formConfig = _form_configs_security_form_config__WEBPACK_IMPORTED_MODULE_2__.securityFormConfig;
                this.currentFormData = this.securityFormData;
                break;
            default:
                this.formConfig = _form_configs_basic_form_config__WEBPACK_IMPORTED_MODULE_0__.basicFormConfig;
                this.currentFormData = this.basicFormData;
        }
    }
    static { this.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 11, vars: 17, consts: [[1, "container"], [3, "ngStyle", "click"], [3, "formConfig", "initialData"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "StepFormKit Demo");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "nav")(4, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppComponent_Template_button_click_4_listener() { return ctx.setFormConfig("basic"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Basic Form ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppComponent_Template_button_click_6_listener() { return ctx.setFormConfig("advanced"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " Advanced Form ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppComponent_Template_button_click_8_listener() { return ctx.setFormConfig("security"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " Security Form ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "app-step-form", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx.currentForm === "basic");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](11, _c0, ctx.currentForm === "basic" ? "white" : "black"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx.currentForm === "advanced");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](13, _c0, ctx.currentForm === "advanced" ? "white" : "black"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx.currentForm === "security");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](15, _c0, ctx.currentForm === "security" ? "white" : "black"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formConfig", ctx.formConfig)("initialData", ctx.currentFormData);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, _step_form_kit_components_step_form_step_form_component__WEBPACK_IMPORTED_MODULE_3__.StepFormComponent], styles: [".container[_ngcontent-%COMP%] {\n      max-width: 800px;\n      margin: 0 auto;\n      padding: 20px;\n    }\n    h1[_ngcontent-%COMP%] {\n      text-align: center;\n      margin-bottom: 20px;\n    }\n    nav[_ngcontent-%COMP%] {\n      display: flex;\n      justify-content: center;\n      margin-bottom: 20px;\n    }\n    button[_ngcontent-%COMP%] {\n      margin: 0 10px;\n      padding: 10px 20px;\n      font-size: 16px;\n      cursor: pointer;\n      background-color: #f0f0f0;\n      border: none;\n      border-radius: 5px;\n      transition: background-color 0.3s;\n    }\n    button[_ngcontent-%COMP%]:hover {\n      background-color: #e0e0e0;\n    }\n    button.active[_ngcontent-%COMP%] {\n      background-color: #007bff;\n      color: white;\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUNJO01BQ0UsZ0JBQWdCO01BQ2hCLGNBQWM7TUFDZCxhQUFhO0lBQ2Y7SUFDQTtNQUNFLGtCQUFrQjtNQUNsQixtQkFBbUI7SUFDckI7SUFDQTtNQUNFLGFBQWE7TUFDYix1QkFBdUI7TUFDdkIsbUJBQW1CO0lBQ3JCO0lBQ0E7TUFDRSxjQUFjO01BQ2Qsa0JBQWtCO01BQ2xCLGVBQWU7TUFDZixlQUFlO01BQ2YseUJBQXlCO01BQ3pCLFlBQVk7TUFDWixrQkFBa0I7TUFDbEIsaUNBQWlDO0lBQ25DO0lBQ0E7TUFDRSx5QkFBeUI7SUFDM0I7SUFDQTtNQUNFLHlCQUF5QjtNQUN6QixZQUFZO0lBQ2QiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC5jb250YWluZXIge1xuICAgICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICB9XG4gICAgaDEge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG4gICAgbmF2IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuICAgIGJ1dHRvbiB7XG4gICAgICBtYXJnaW46IDAgMTBweDtcbiAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XG4gICAgfVxuICAgIGJ1dHRvbjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xuICAgIH1cbiAgICBidXR0b24uYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICAiXX0= */"] }); }
}


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _step_form_kit_step_form_kit_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./step-form-kit/step-form-kit.module */ 3444);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);






class AppModule {
    static { this.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] }); }
    static { this.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__.BrowserAnimationsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _step_form_kit_step_form_kit_module__WEBPACK_IMPORTED_MODULE_1__.StepFormKitModule] }); }
}
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__.BrowserAnimationsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _step_form_kit_step_form_kit_module__WEBPACK_IMPORTED_MODULE_1__.StepFormKitModule] }); })();


/***/ }),

/***/ 4048:
/*!******************************************************!*\
  !*** ./src/app/form-configs/advanced-form.config.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "advancedFormConfig": () => (/* binding */ advancedFormConfig)
/* harmony export */ });
const advancedFormConfig = {
    id: 'advancedForm',
    title: 'Advanced User Registration',
    steps: [
        {
            id: 'personalInfo',
            title: 'Personal Information',
            description: 'Please provide your detailed personal information.',
            fields: [
                { name: 'firstName', label: 'First Name', type: 'text', required: true, errorMessage: 'First name is required' },
                { name: 'lastName', label: 'Last Name', type: 'text', required: true, errorMessage: 'Last name is required' },
                { name: 'email', label: 'Email', type: 'email', required: true, errorMessage: 'Valid email is required' },
                { name: 'phone', label: 'Phone Number', type: 'text', required: false, errorMessage: 'Invalid phone number' },
                { name: 'birthDate', label: 'Date of Birth', type: 'date', required: true, errorMessage: 'Date of birth is required' }
            ]
        },
        {
            id: 'addressInfo',
            title: 'Address Information',
            description: 'Please provide your current address.',
            fields: [
                { name: 'street', label: 'Street Address', type: 'text', required: true, errorMessage: 'Street address is required' },
                { name: 'city', label: 'City', type: 'text', required: true, errorMessage: 'City is required' },
                { name: 'state', label: 'State/Province', type: 'text', required: true, errorMessage: 'State/Province is required' },
                { name: 'zipCode', label: 'Zip/Postal Code', type: 'text', required: true, errorMessage: 'Zip/Postal code is required' },
                { name: 'country', label: 'Country', type: 'select', required: true, errorMessage: 'Country is required', options: [
                        { value: 'us', label: 'United States' },
                        { value: 'ca', label: 'Canada' },
                        { value: 'uk', label: 'United Kingdom' },
                        { value: 'au', label: 'Australia' }
                    ] }
            ]
        },
        {
            id: 'preferences',
            title: 'User Preferences',
            description: 'Set your account preferences.',
            fields: [
                { name: 'newsletter', label: 'Subscribe to newsletter', type: 'checkbox', required: false, errorMessage: '' },
                { name: 'theme', label: 'Preferred theme', type: 'radio', required: true, errorMessage: 'Please select a theme', options: [
                        { value: 'light', label: 'Light' },
                        { value: 'dark', label: 'Dark' },
                        { value: 'system', label: 'System Default' }
                    ] },
                { name: 'language', label: 'Preferred Language', type: 'select', required: true, errorMessage: 'Please select a language', options: [
                        { value: 'en', label: 'English' },
                        { value: 'es', label: 'Spanish' },
                        { value: 'fr', label: 'French' },
                        { value: 'de', label: 'German' }
                    ] }
            ]
        }
    ],
    submitButtonText: 'Complete Registration',
    cancelButtonText: 'Cancel'
};


/***/ }),

/***/ 3510:
/*!***************************************************!*\
  !*** ./src/app/form-configs/basic-form.config.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "basicFormConfig": () => (/* binding */ basicFormConfig)
/* harmony export */ });
const basicFormConfig = {
    id: 'basicForm',
    title: 'Basic Information Form',
    steps: [
        {
            id: 'personalInfo',
            title: 'Personal Information',
            description: 'Please provide your basic personal information.',
            fields: [
                { name: 'firstName', label: 'First Name', type: 'text', required: true, errorMessage: 'First name is required' },
                { name: 'lastName', label: 'Last Name', type: 'text', required: true, errorMessage: 'Last name is required' },
                { name: 'email', label: 'Email', type: 'email', required: true, errorMessage: 'Valid email is required' }
            ]
        }
    ],
    submitButtonText: 'Submit Basic Info',
    cancelButtonText: 'Cancel'
};


/***/ }),

/***/ 2741:
/*!******************************************************!*\
  !*** ./src/app/form-configs/security-form.config.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "securityFormConfig": () => (/* binding */ securityFormConfig)
/* harmony export */ });
const securityFormConfig = {
    id: 'securityForm',
    title: 'Security Personnel Information Form',
    steps: [
        {
            id: 'personalInfo',
            title: 'Personal Information',
            description: 'Please provide your basic personal information.',
            fields: [
                { name: 'firstName', label: 'First Name', type: 'text', required: true, errorMessage: 'First name is required' },
                { name: 'lastName', label: 'Last Name', type: 'text', required: true, errorMessage: 'Last name is required' },
                { name: 'employeeId', label: 'Employee ID', type: 'text', required: true, errorMessage: 'Employee ID is required' },
                { name: 'email', label: 'Work Email', type: 'email', required: true, errorMessage: 'Valid work email is required' }
            ]
        },
        {
            id: 'securityCredentials',
            title: 'Security Credentials',
            description: 'Provide your security clearance information.',
            fields: [
                {
                    name: 'clearanceLevel',
                    label: 'Security Clearance Level',
                    type: 'select',
                    required: true,
                    errorMessage: 'Security clearance level is required',
                    options: [
                        { value: 'confidential', label: 'Confidential' },
                        { value: 'secret', label: 'Secret' },
                        { value: 'topsecret', label: 'Top Secret' },
                        { value: 'tssci', label: 'TS/SCI' }
                    ]
                },
                { name: 'clearanceNumber', label: 'Clearance Number', type: 'text', required: true, errorMessage: 'Clearance number is required' },
                { name: 'expirationDate', label: 'Clearance Expiration Date', type: 'date', required: true, errorMessage: 'Expiration date is required' }
            ]
        },
        {
            id: 'specialization',
            title: 'Security Specialization',
            description: 'Provide information about your security specialization.',
            fields: [
                {
                    name: 'primaryRole',
                    label: 'Primary Security Role',
                    type: 'select',
                    required: true,
                    errorMessage: 'Primary security role is required',
                    options: [
                        { value: 'dataProtection', label: 'Data Protection Officer' },
                        { value: 'networkSecurity', label: 'Network Security Specialist' },
                        { value: 'incidentResponse', label: 'Incident Response Analyst' },
                        { value: 'accessControl', label: 'Access Control Manager' },
                        { value: 'complianceOfficer', label: 'Compliance Officer' }
                    ]
                },
                {
                    name: 'certifications',
                    label: 'Security Certifications',
                    type: 'checkbox',
                    required: false,
                    errorMessage: '',
                    options: [
                        { value: 'cissp', label: 'CISSP' },
                        { value: 'cism', label: 'CISM' },
                        { value: 'ceh', label: 'CEH' },
                        { value: 'comptia', label: 'CompTIA Security+' },
                        { value: 'giac', label: 'GIAC' }
                    ]
                },
                { name: 'yearsOfExperience', label: 'Years of Security Experience', type: 'number', required: true, errorMessage: 'Years of experience is required' }
            ]
        }
    ],
    submitButtonText: 'Submit Security Personnel Information',
    cancelButtonText: 'Cancel'
};


/***/ }),

/***/ 606:
/*!***************************************************************************!*\
  !*** ./src/app/step-form-kit/components/step-form/step-form.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StepFormComponent": () => (/* binding */ StepFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/api.service */ 6004);
/* harmony import */ var _services_form_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/form-state.service */ 6768);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);










const _c0 = ["formContainer"];
function StepFormComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const step_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", i_r10 === ctx_r1.currentStepIndex)("completed", i_r10 < ctx_r1.currentStepIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-current", i_r10 === ctx_r1.currentStepIndex ? "step" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", step_r9.title, " ");
} }
function StepFormComponent_div_0_ng_container_11_div_1_ng_container_6_div_1_input_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "input", 35);
} if (rf & 2) {
    const field_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const step_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    let tmp_6_0;
    let tmp_6_1;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", field_r15.type)("id", field_r15.name)("formControlName", field_r15.name)("required", field_r15.required)("placeholder", field_r15.placeholder || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("disabled", !ctx_r17.isFieldEditable(field_r15) ? "" : null)("aria-invalid", ((tmp_6_0 = ctx_r17.form.get(step_r11.id)) == null ? null : (tmp_6_1 = tmp_6_0.get(field_r15.name)) == null ? null : tmp_6_1.invalid) && (((tmp_6_0 = ctx_r17.form.get(step_r11.id)) == null ? null : (tmp_6_1 = tmp_6_0.get(field_r15.name)) == null ? null : tmp_6_1.dirty) || ((tmp_6_0 = ctx_r17.form.get(step_r11.id)) == null ? null : (tmp_6_1 = tmp_6_0.get(field_r15.name)) == null ? null : tmp_6_1.touched)))("aria-describedby", field_r15.name + "-error");
} }
function StepFormComponent_div_0_ng_container_11_div_1_ng_container_6_div_1_input_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "input", 36);
} if (rf & 2) {
    const field_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const step_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    let tmp_5_0;
    let tmp_5_1;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", field_r15.name)("formControlName", field_r15.name)("required", field_r15.required)("placeholder", field_r15.placeholder || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("disabled", !ctx_r18.isFieldEditable(field_r15) ? "" : null)("aria-invalid", ((tmp_5_0 = ctx_r18.form.get(step_r11.id)) == null ? null : (tmp_5_1 = tmp_5_0.get(field_r15.name)) == null ? null : tmp_5_1.invalid) && (((tmp_5_0 = ctx_r18.form.get(step_r11.id)) == null ? null : (tmp_5_1 = tmp_5_0.get(field_r15.name)) == null ? null : tmp_5_1.dirty) || ((tmp_5_0 = ctx_r18.form.get(step_r11.id)) == null ? null : (tmp_5_1 = tmp_5_0.get(field_r15.name)) == null ? null : tmp_5_1.touched)))("aria-describedby", field_r15.name + "-error");
} }
function StepFormComponent_div_0_ng_container_11_div_1_ng_container_6_div_1_input_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "input", 37);
} if (rf & 2) {
    const field_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const step_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    let tmp_5_0;
    let tmp_5_1;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", field_r15.name)("formControlName", field_r15.name)("required", field_r15.required)("placeholder", field_r15.placeholder || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("disabled", !ctx_r19.isFieldEditable(field_r15) ? "" : null)("aria-invalid", ((tmp_5_0 = ctx_r19.form.get(step_r11.id)) == null ? null : (tmp_5_1 = tmp_5_0.get(field_r15.name)) == null ? null : tmp_5_1.invalid) && (((tmp_5_0 = ctx_r19.form.get(step_r11.id)) == null ? null : (tmp_5_1 = tmp_5_0.get(field_r15.name)) == null ? null : tmp_5_1.dirty) || ((tmp_5_0 = ctx_r19.form.get(step_r11.id)) == null ? null : (tmp_5_1 = tmp_5_0.get(field_r15.name)) == null ? null : tmp_5_1.touched)))("aria-describedby", field_r15.name + "-error");
} }
function StepFormComponent_div_0_ng_container_11_div_1_ng_container_6_div_1_select_7_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", option_r33.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](option_r33.label);
} }
function StepFormComponent_div_0_ng_container_11_div_1_ng_container_6_div_1_select_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "select", 38)(1, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Select an option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, StepFormComponent_div_0_ng_container_11_div_1_ng_container_6_div_1_select_7_option_3_Template, 2, 2, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const field_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const step_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    let tmp_4_0;
    let tmp_4_1;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", field_r15.name)("formControlName", field_r15.name)("required", field_r15.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("disabled", !ctx_r20.isFieldEditable(field_r15) ? "" : null)("aria-invalid", ((tmp_4_0 = ctx_r20.form.get(step_r11.id)) == null ? null : (tmp_4_1 = tmp_4_0.get(field_r15.name)) == null ? null : tmp_4_1.invalid) && (((tmp_4_0 = ctx_r20.form.get(step_r11.id)) == null ? null : (tmp_4_1 = tmp_4_0.get(field_r15.name)) == null ? null : tmp_4_1.dirty) || ((tmp_4_0 = ctx_r20.form.get(step_r11.id)) == null ? null : (tmp_4_1 = tmp_4_0.get(field_r15.name)) == null ? null : tmp_4_1.touched)))("aria-describedby", field_r15.name + "-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", field_r15.options);
} }
function StepFormComponent_div_0_ng_container_11_div_1_ng_container_6_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const field_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const step_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    let tmp_4_0;
    let tmp_4_1;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", field_r15.name)("formControlName", field_r15.name)("required", field_r15.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("disabled", !ctx_r21.isFieldEditable(field_r15) ? "" : null)("aria-invalid", ((tmp_4_0 = ctx_r21.form.get(step_r11.id)) == null ? null : (tmp_4_1 = tmp_4_0.get(field_r15.name)) == null ? null : tmp_4_1.invalid) && (((tmp_4_0 = ctx_r21.form.get(step_r11.id)) == null ? null : (tmp_4_1 = tmp_4_0.get(field_r15.name)) == null ? null : tmp_4_1.dirty) || ((tmp_4_0 = ctx_r21.form.get(step_r11.id)) == null ? null : (tmp_4_1 = tmp_4_0.get(field_r15.name)) == null ? null : tmp_4_1.touched)))("aria-describedby", field_r15.name + "-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", field_r15.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](field_r15.label);
} }
function StepFormComponent_div_0_ng_container_11_div_1_ng_container_6_div_1_div_9_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const option_r39 = ctx.$implicit;
    const field_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).$implicit;
    const step_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    let tmp_5_0;
    let tmp_5_1;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", field_r15.name + "-" + option_r39.value)("formControlName", field_r15.name)("value", option_r39.value)("required", field_r15.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("disabled", !ctx_r38.isFieldEditable(field_r15) ? "" : null)("aria-invalid", ((tmp_5_0 = ctx_r38.form.get(step_r11.id)) == null ? null : (tmp_5_1 = tmp_5_0.get(field_r15.name)) == null ? null : tmp_5_1.invalid) && (((tmp_5_0 = ctx_r38.form.get(step_r11.id)) == null ? null : (tmp_5_1 = tmp_5_0.get(field_r15.name)) == null ? null : tmp_5_1.dirty) || ((tmp_5_0 = ctx_r38.form.get(step_r11.id)) == null ? null : (tmp_5_1 = tmp_5_0.get(field_r15.name)) == null ? null : tmp_5_1.touched)))("aria-describedby", field_r15.name + "-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", field_r15.name + "-" + option_r39.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](option_r39.label);
} }
function StepFormComponent_div_0_ng_container_11_div_1_ng_container_6_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 44)(1, "fieldset")(2, "legend");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, StepFormComponent_div_0_ng_container_11_div_1_ng_container_6_div_1_div_9_div_4_Template, 4, 9, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const field_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](field_r15.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", field_r15.options);
} }
function StepFormComponent_div_0_ng_container_11_div_1_ng_container_6_div_1_input_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "input", 48);
} if (rf & 2) {
    const field_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const step_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    let tmp_4_0;
    let tmp_4_1;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", field_r15.name)("formControlName", field_r15.name)("required", field_r15.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("disabled", !ctx_r23.isFieldEditable(field_r15) ? "" : null)("aria-invalid", ((tmp_4_0 = ctx_r23.form.get(step_r11.id)) == null ? null : (tmp_4_1 = tmp_4_0.get(field_r15.name)) == null ? null : tmp_4_1.invalid) && (((tmp_4_0 = ctx_r23.form.get(step_r11.id)) == null ? null : (tmp_4_1 = tmp_4_0.get(field_r15.name)) == null ? null : tmp_4_1.dirty) || ((tmp_4_0 = ctx_r23.form.get(step_r11.id)) == null ? null : (tmp_4_1 = tmp_4_0.get(field_r15.name)) == null ? null : tmp_4_1.touched)))("aria-describedby", field_r15.name + "-error");
} }
function StepFormComponent_div_0_ng_container_11_div_1_ng_container_6_div_1_ng_container_11_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function StepFormComponent_div_0_ng_container_11_div_1_ng_container_6_div_1_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, StepFormComponent_div_0_ng_container_11_div_1_ng_container_6_div_1_ng_container_11_ng_container_1_Template, 1, 0, "ng-container", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const field_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const step_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngComponentOutlet", field_r15.customComponent)("ngComponentOutletInjector", ctx_r24.createInjector(field_r15, step_r11));
} }
function StepFormComponent_div_0_ng_container_11_div_1_ng_container_6_div_1_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const field_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const step_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    let tmp_1_0;
    let tmp_1_1;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", field_r15.name + "-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r25.getErrorMessage(field_r15, (tmp_1_0 = ctx_r25.form.get(step_r11.id)) == null ? null : (tmp_1_1 = tmp_1_0.get(field_r15.name)) == null ? null : tmp_1_1.errors), " ");
} }
function StepFormComponent_div_0_ng_container_11_div_1_ng_container_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23)(1, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](3, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, StepFormComponent_div_0_ng_container_11_div_1_ng_container_6_div_1_input_4_Template, 1, 8, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, StepFormComponent_div_0_ng_container_11_div_1_ng_container_6_div_1_input_5_Template, 1, 7, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, StepFormComponent_div_0_ng_container_11_div_1_ng_container_6_div_1_input_6_Template, 1, 7, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, StepFormComponent_div_0_ng_container_11_div_1_ng_container_6_div_1_select_7_Template, 4, 7, "select", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, StepFormComponent_div_0_ng_container_11_div_1_ng_container_6_div_1_div_8_Template, 4, 8, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, StepFormComponent_div_0_ng_container_11_div_1_ng_container_6_div_1_div_9_Template, 5, 2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, StepFormComponent_div_0_ng_container_11_div_1_ng_container_6_div_1_input_10_Template, 1, 6, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, StepFormComponent_div_0_ng_container_11_div_1_ng_container_6_div_1_ng_container_11_Template, 2, 2, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, StepFormComponent_div_0_ng_container_11_div_1_ng_container_6_div_1_div_12_Template, 2, 2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const field_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const step_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    let tmp_11_0;
    let tmp_11_1;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", field_r15.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](field_r15.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", field_r15.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "select");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "checkbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "radio");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "custom");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_11_0 = ctx_r16.form.get(step_r11.id)) == null ? null : (tmp_11_1 = tmp_11_0.get(field_r15.name)) == null ? null : tmp_11_1.invalid) && (((tmp_11_0 = ctx_r16.form.get(step_r11.id)) == null ? null : (tmp_11_1 = tmp_11_0.get(field_r15.name)) == null ? null : tmp_11_1.dirty) || ((tmp_11_0 = ctx_r16.form.get(step_r11.id)) == null ? null : (tmp_11_1 = tmp_11_0.get(field_r15.name)) == null ? null : tmp_11_1.touched)));
} }
function StepFormComponent_div_0_ng_container_11_div_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, StepFormComponent_div_0_ng_container_11_div_1_ng_container_6_div_1_Template, 13, 12, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const field_r15 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r14.isFieldVisible(field_r15));
} }
function StepFormComponent_div_0_ng_container_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](5, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, StepFormComponent_div_0_ng_container_11_div_1_ng_container_6_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const step_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@stepTransition", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](step_r11.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](step_r11.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("formGroupName", step_r11.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", step_r11.fields);
} }
function StepFormComponent_div_0_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, StepFormComponent_div_0_ng_container_11_div_1_Template, 7, 5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const step_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r12 === ctx_r3.currentStepIndex && ctx_r3.isStepVisible(step_r11));
} }
function StepFormComponent_div_0_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StepFormComponent_div_0_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r54); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r53.nextStep()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function StepFormComponent_div_0_button_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r5.form.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r5.formConfig.submitButtonText || "Submit");
} }
function StepFormComponent_div_0_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function StepFormComponent_div_0_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r7.apiError);
} }
function StepFormComponent_div_0_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Form submitted successfully!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function StepFormComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, StepFormComponent_div_0_div_8_Template, 2, 6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "form", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function StepFormComponent_div_0_Template_form_ngSubmit_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r56); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r55.onSubmit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, StepFormComponent_div_0_ng_container_11_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 10)(13, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StepFormComponent_div_0_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r56); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r57.previousStep()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, StepFormComponent_div_0_button_15_Template, 2, 0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, StepFormComponent_div_0_button_16_Template, 2, 2, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, StepFormComponent_div_0_div_17_Template, 2, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, StepFormComponent_div_0_div_18_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, StepFormComponent_div_0_div_19_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r0.formConfig.theme || "light")("ngStyle", ctx_r0.formConfig.customStyles);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.formConfig.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-valuenow", ctx_r0.progressPercentage);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", ctx_r0.progressPercentage, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r0.progressPercentage, "% Complete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.formConfig.steps);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.formConfig.steps);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r0.currentStepIndex === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.currentStepIndex < ctx_r0.formConfig.steps.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.currentStepIndex === ctx_r0.formConfig.steps.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.apiError);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.formSubmitted);
} }
class StepFormComponent {
    constructor(fb, apiService, formStateService, cdr, injector) {
        this.fb = fb;
        this.apiService = apiService;
        this.formStateService = formStateService;
        this.cdr = cdr;
        this.injector = injector;
        this.currentStepIndex = 0;
        this.submitted = false;
        this.loading = false;
        this.apiError = null;
        this.formSubmitted = false;
        this.progressPercentage = 0;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    }
    set formConfig(value) {
        this._formConfig = value;
        this.initForm();
    }
    get formConfig() {
        return this._formConfig;
    }
    set initialData(value) {
        this._initialData = value;
        if (this.form) {
            this.form.patchValue(value);
            this.updateProgress();
        }
    }
    ngOnInit() {
        this.formStateService.loading$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$))
            .subscribe(isLoading => {
            this.loading = isLoading;
            this.cdr.detectChanges();
        });
        this.formStateService.error$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$))
            .subscribe(error => {
            this.apiError = error;
            this.cdr.detectChanges();
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    initForm() {
        this.form = this.fb.group({});
        this.formConfig.steps.forEach(step => {
            const stepGroup = this.fb.group({});
            step.fields.forEach(field => {
                stepGroup.addControl(field.name, this.fb.control({ value: '', disabled: false }, this.getValidators(field)));
            });
            this.form.addControl(step.id, stepGroup);
        });
        if (this._initialData) {
            this.form.patchValue(this._initialData);
        }
        this.form.valueChanges
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$))
            .subscribe(() => {
            this.updateProgress();
        });
        this.currentStepIndex = 0;
        this.submitted = false;
        this.formSubmitted = false;
        this.updateProgress();
        this.cdr.detectChanges();
    }
    onSubmit() {
        this.submitted = true;
        if (this.form.valid) {
            this.formStateService.setLoading(true);
            this.apiService.submitFormData(this.form.value).subscribe((response) => {
                this.formSubmitted = true;
                this.formStateService.setLoading(false);
            }, (error) => {
                this.formStateService.setError('Error submitting form');
                this.formStateService.setLoading(false);
            });
        }
        else {
            this.scrollToFirstInvalidControl();
        }
    }
    isStepVisible(step) {
        return !step.condition || step.condition(this.form.value);
    }
    isFieldVisible(field) {
        return !field.condition || field.condition(this.form.value);
    }
    isFieldEditable(field) {
        return field.editable !== false;
    }
    previousStep() {
        if (this.currentStepIndex > 0) {
            this.currentStepIndex--;
            this.scrollToTop();
        }
    }
    nextStep() {
        const currentStep = this.formConfig.steps[this.currentStepIndex];
        const stepGroup = this.form.get(currentStep.id);
        if (stepGroup && stepGroup.valid) {
            if (this.currentStepIndex < this.formConfig.steps.length - 1) {
                this.currentStepIndex++;
                this.scrollToTop();
            }
        }
        else {
            Object.keys(stepGroup.controls).forEach(key => {
                const control = stepGroup.get(key);
                if (control) {
                    control.markAsTouched();
                }
            });
            this.scrollToFirstInvalidControl();
        }
    }
    scrollToFirstInvalidControl() {
        const firstInvalidControl = this.formContainer.nativeElement.querySelector('input.ng-invalid, select.ng-invalid, textarea.ng-invalid');
        if (firstInvalidControl) {
            firstInvalidControl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
    scrollToTop() {
        this.formContainer.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    updateProgress() {
        const totalFields = this.getTotalFieldCount();
        const completedFields = this.getCompletedFieldCount();
        this.progressPercentage = totalFields > 0 ? Math.round((completedFields / totalFields) * 100) : 0;
        this.cdr.detectChanges();
    }
    getTotalFieldCount() {
        return this.formConfig.steps.reduce((total, step) => {
            if (this.isStepVisible(step)) {
                return total + step.fields.filter(field => this.isFieldVisible(field)).length;
            }
            return total;
        }, 0);
    }
    getCompletedFieldCount() {
        return this.formConfig.steps.reduce((total, step) => {
            if (this.isStepVisible(step)) {
                const stepGroup = this.form.get(step.id);
                return total + step.fields.filter(field => this.isFieldVisible(field) &&
                    stepGroup.get(field.name)?.valid &&
                    stepGroup.get(field.name)?.value !== null &&
                    stepGroup.get(field.name)?.value !== '').length;
            }
            return total;
        }, 0);
    }
    createInjector(field, step) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector.create({
            providers: [
                { provide: 'field', useValue: field },
                { provide: 'step', useValue: step },
                { provide: 'form', useValue: this.form }
            ],
            parent: this.injector
        });
    }
    getErrorMessage(field, errors) {
        if (typeof field.errorMessage === 'function') {
            return field.errorMessage(errors);
        }
        return field.errorMessage || 'Invalid input';
    }
    getValidators(field) {
        const validators = [];
        if (field.required) {
            validators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required);
        }
        if (field.type === 'email') {
            validators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email);
        }
        if (field.validators) {
            validators.push(...field.validators);
        }
        return validators;
    }
    static { this.ɵfac = function StepFormComponent_Factory(t) { return new (t || StepFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_form_state_service__WEBPACK_IMPORTED_MODULE_1__.FormStateService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: StepFormComponent, selectors: [["app-step-form"]], viewQuery: function StepFormComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
        } if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.formContainer = _t.first);
        } }, inputs: { formConfig: "formConfig", initialData: "initialData" }, decls: 1, vars: 1, consts: [["class", "step-form-container", 3, "ngClass", "ngStyle", 4, "ngIf"], [1, "step-form-container", 3, "ngClass", "ngStyle"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar"], [1, "progress"], [1, "progress-text"], [1, "step-indicator"], ["class", "step", 3, "active", "completed", 4, "ngFor", "ngForOf"], [3, "formGroup", "ngSubmit"], ["formContainer", ""], [4, "ngFor", "ngForOf"], [1, "form-navigation"], ["type", "button", 3, "disabled", "click"], ["type", "button", 3, "click", 4, "ngIf"], ["type", "submit", 3, "disabled", 4, "ngIf"], ["class", "loading-indicator", "aria-live", "polite", 4, "ngIf"], ["class", "error-message", "aria-live", "assertive", 4, "ngIf"], ["class", "success-message", "aria-live", "polite", 4, "ngIf"], [1, "step"], ["class", "step-content", 4, "ngIf"], [1, "step-content"], [1, "step-description"], [3, "formGroupName"], ["class", "form-field", 4, "ngIf"], [1, "form-field"], [3, "for"], [3, "ngSwitch"], [3, "type", "id", "formControlName", "required", "placeholder", 4, "ngSwitchCase"], ["type", "number", 3, "id", "formControlName", "required", "placeholder", 4, "ngSwitchCase"], ["type", "email", 3, "id", "formControlName", "required", "placeholder", 4, "ngSwitchCase"], [3, "id", "formControlName", "required", 4, "ngSwitchCase"], ["class", "checkbox-field", 4, "ngSwitchCase"], ["class", "radio-group", 4, "ngSwitchCase"], ["type", "date", 3, "id", "formControlName", "required", 4, "ngSwitchCase"], [4, "ngSwitchCase"], ["class", "error-message", "role", "alert", 3, "id", 4, "ngIf"], [3, "type", "id", "formControlName", "required", "placeholder"], ["type", "number", 3, "id", "formControlName", "required", "placeholder"], ["type", "email", 3, "id", "formControlName", "required", "placeholder"], [3, "id", "formControlName", "required"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "checkbox-field"], ["type", "checkbox", 3, "id", "formControlName", "required"], [1, "radio-group"], ["class", "radio-option", 4, "ngFor", "ngForOf"], [1, "radio-option"], ["type", "radio", 3, "id", "formControlName", "value", "required"], ["type", "date", 3, "id", "formControlName", "required"], [4, "ngComponentOutlet", "ngComponentOutletInjector"], ["role", "alert", 1, "error-message", 3, "id"], ["type", "button", 3, "click"], ["type", "submit", 3, "disabled"], ["aria-live", "polite", 1, "loading-indicator"], ["aria-live", "assertive", 1, "error-message"], ["aria-live", "polite", 1, "success-message"]], template: function StepFormComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, StepFormComponent_div_0_Template, 20, 16, "div", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.formConfig);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgComponentOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgSwitchCase, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.CheckboxRequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupName], styles: [".step-form-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 2rem;\n  font-family: Arial, sans-serif;\n}\n\nh1[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #333;\n  margin-bottom: 2rem;\n}\n\n.progress-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 10px;\n  background-color: #f0f0f0;\n  border-radius: 5px;\n  margin-bottom: 1rem;\n  overflow: hidden;\n}\n\n.progress[_ngcontent-%COMP%] {\n  height: 100%;\n  background-color: #4CAF50;\n  transition: width 0.3s ease;\n}\n\n.progress-text[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 0.9rem;\n  color: #666;\n  margin-bottom: 2rem;\n}\n\n.step-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 2rem;\n}\n\n.step[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: center;\n  padding: 0.5rem;\n  background-color: #f0f0f0;\n  color: #666;\n  border-radius: 4px;\n  font-size: 0.9rem;\n  transition: all 0.3s ease;\n}\n\n.step.active[_ngcontent-%COMP%] {\n  background-color: #007bff;\n  color: white;\n}\n\n.step.completed[_ngcontent-%COMP%] {\n  background-color: #28a745;\n  color: white;\n}\n\n.step-content[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-radius: 8px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  padding: 2rem;\n  margin-bottom: 2rem;\n}\n\nh2[_ngcontent-%COMP%] {\n  color: #333;\n  margin-bottom: 1rem;\n}\n\n.step-description[_ngcontent-%COMP%] {\n  color: #666;\n  margin-bottom: 1.5rem;\n}\n\n.form-field[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n\n.form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.5rem;\n  color: #333;\n}\n\n.form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-size: 1rem;\n}\n\n.form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #007bff;\n  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);\n}\n\n.checkbox-field[_ngcontent-%COMP%], .radio-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.checkbox-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .radio-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n\n.radio-group[_ngcontent-%COMP%] {\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.radio-group[_ngcontent-%COMP%]   .radio-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n\n.error-message[_ngcontent-%COMP%] {\n  color: #dc3545;\n  font-size: 0.875rem;\n  margin-top: 0.25rem;\n}\n\n.form-navigation[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 2rem;\n}\n\nbutton[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 4px;\n  font-size: 1rem;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n\nbutton[type=button][_ngcontent-%COMP%] {\n  background-color: #6c757d;\n  color: white;\n}\n\nbutton[type=button][_ngcontent-%COMP%]:hover {\n  background-color: #5a6268;\n}\n\nbutton[type=button][_ngcontent-%COMP%]:disabled {\n  background-color: #ccc;\n  cursor: not-allowed;\n}\n\nbutton[type=submit][_ngcontent-%COMP%] {\n  background-color: #007bff;\n  color: white;\n}\n\nbutton[type=submit][_ngcontent-%COMP%]:hover {\n  background-color: #0056b3;\n}\n\nbutton[type=submit][_ngcontent-%COMP%]:disabled {\n  background-color: #ccc;\n  cursor: not-allowed;\n}\n\n.loading-indicator[_ngcontent-%COMP%], .error-message[_ngcontent-%COMP%], .success-message[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 1rem;\n  margin-top: 1rem;\n  border-radius: 4px;\n}\n\n.loading-indicator[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  color: #6c757d;\n}\n\n.error-message[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  color: #721c24;\n}\n\n.success-message[_ngcontent-%COMP%] {\n  background-color: #d4edda;\n  color: #155724;\n}\n\n@media (max-width: 768px) {\n  .step-form-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .step-content[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .form-navigation[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .form-navigation[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 0.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0ZXAtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUNFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUFBSjs7QUFJQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQURGOztBQUlBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0FBREY7O0FBSUE7RUFDRSxXQUFBO0VBQ0EscUJBQUE7QUFERjs7QUFJQTtFQUNFLHFCQUFBO0FBREY7O0FBR0U7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FBREo7O0FBSUU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUZKOztBQUlJO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsNkNBQUE7QUFGTjs7QUFPQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUpGOztBQU1FO0VBQ0Usb0JBQUE7QUFKSjs7QUFRQTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7QUFMRjs7QUFPRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBTEo7O0FBU0E7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQU5GOztBQVNBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUFORjs7QUFTQTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxzQ0FBQTtBQU5GOztBQVFFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FBTko7O0FBUUk7RUFDRSx5QkFBQTtBQU5OOztBQVNJO0VBQ0Usc0JBQUE7RUFDQSxtQkFBQTtBQVBOOztBQVdFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FBVEo7O0FBV0k7RUFDRSx5QkFBQTtBQVROOztBQVlJO0VBQ0Usc0JBQUE7RUFDQSxtQkFBQTtBQVZOOztBQWVBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQVpGOztBQWVBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FBWkY7O0FBZUE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUFaRjs7QUFlQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQVpGOztBQWVBO0VBQ0U7SUFDRSxhQUFBO0VBWkY7RUFlQTtJQUNFLGFBQUE7RUFiRjtFQWdCQTtJQUNFLHNCQUFBO0VBZEY7RUFnQkU7SUFDRSxXQUFBO0lBQ0EscUJBQUE7RUFkSjtBQUNGIiwiZmlsZSI6InN0ZXAtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGVwLWZvcm0tY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDJyZW07XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cblxuaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMzMzO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4ucHJvZ3Jlc3MtYmFyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucHJvZ3Jlc3Mge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZTtcbn1cblxuLnByb2dyZXNzLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBjb2xvcjogIzY2NjtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuLnN0ZXAtaW5kaWNhdG9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4uc3RlcCB7XG4gIGZsZXg6IDE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMC41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICBjb2xvcjogIzY2NjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcblxuICAmLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICAmLmNvbXBsZXRlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NTtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbn1cblxuLnN0ZXAtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHBhZGRpbmc6IDJyZW07XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbmgyIHtcbiAgY29sb3I6ICMzMzM7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5zdGVwLWRlc2NyaXB0aW9uIHtcbiAgY29sb3I6ICM2NjY7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cblxuLmZvcm0tZmllbGQge1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG5cbiAgbGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICBjb2xvcjogIzMzMztcbiAgfVxuXG4gIGlucHV0LCBzZWxlY3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDAuNzVyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuXG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmO1xuICAgICAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHJnYmEoMCwgMTIzLCAyNTUsIDAuMjUpO1xuICAgIH1cbiAgfVxufVxuXG4uY2hlY2tib3gtZmllbGQsIC5yYWRpby1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIFxuICBpbnB1dCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gIH1cbn1cblxuLnJhZGlvLWdyb3VwIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cbiAgLnJhZGlvLW9wdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgfVxufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIGNvbG9yOiAjZGMzNTQ1O1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xufVxuXG4uZm9ybS1uYXZpZ2F0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tdG9wOiAycmVtO1xufVxuXG5idXR0b24ge1xuICBwYWRkaW5nOiAwLjc1cmVtIDEuNXJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcblxuICAmW3R5cGU9XCJidXR0b25cIl0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2Yzc1N2Q7XG4gICAgY29sb3I6IHdoaXRlO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWE2MjY4O1xuICAgIH1cblxuICAgICY6ZGlzYWJsZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgfVxuICB9XG5cbiAgJlt0eXBlPVwic3VibWl0XCJdIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xuICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMztcbiAgICB9XG5cbiAgICAmOmRpc2FibGVkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIH1cbiAgfVxufVxuXG4ubG9hZGluZy1pbmRpY2F0b3IsIC5lcnJvci1tZXNzYWdlLCAuc3VjY2Vzcy1tZXNzYWdlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxcmVtO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5sb2FkaW5nLWluZGljYXRvciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gIGNvbG9yOiAjNmM3NTdkO1xufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGQ3ZGE7XG4gIGNvbG9yOiAjNzIxYzI0O1xufVxuXG4uc3VjY2Vzcy1tZXNzYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZWRkYTtcbiAgY29sb3I6ICMxNTU3MjQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuc3RlcC1mb3JtLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgfVxuXG4gIC5zdGVwLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDFyZW07XG4gIH1cblxuICAuZm9ybS1uYXZpZ2F0aW9uIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgYnV0dG9uIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgIH1cbiAgfVxufSJdfQ== */"], data: { animation: [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('stepTransition', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)(':enter', [
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({ opacity: 0, transform: 'translateX(100%)' }),
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('300ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({ opacity: 1, transform: 'translateX(0%)' }))
                    ]),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)(':leave', [
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('300ms ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({ opacity: 0, transform: 'translateX(-100%)' }))
                    ])
                ])
            ] } }); }
}


/***/ }),

/***/ 6004:
/*!*******************************************************!*\
  !*** ./src/app/step-form-kit/services/api.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 1339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);



class ApiService {
    fetchFormConfig() {
        // Mock API call to fetch form configuration
        const formConfig = {
            id: 'userRegistration',
            title: 'User Registration Form',
            steps: [
                {
                    id: 'personalInfo',
                    title: 'Personal Information',
                    description: 'Please provide your basic personal information.',
                    fields: [
                        { name: 'firstName', label: 'First Name', type: 'text', required: true, errorMessage: 'First name is required' },
                        { name: 'lastName', label: 'Last Name', type: 'text', required: true, errorMessage: 'Last name is required' },
                        { name: 'email', label: 'Email', type: 'email', required: true, errorMessage: 'Valid email is required' },
                        {
                            name: 'age',
                            label: 'Age',
                            type: 'number',
                            required: true,
                            errorMessage: 'Age must be between 18 and 100',
                            validators: [
                                (control) => {
                                    const value = control.value;
                                    if (value < 18 || value > 100) {
                                        return { ageRange: true };
                                    }
                                    return null;
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'addressInfo',
                    title: 'Address Information',
                    description: 'Please provide your current address.',
                    fields: [
                        { name: 'street', label: 'Street', type: 'text', required: true, errorMessage: 'Street is required' },
                        { name: 'city', label: 'City', type: 'text', required: true, errorMessage: 'City is required' },
                        { name: 'zipCode', label: 'Zip Code', type: 'text', required: true, errorMessage: 'Zip code is required' },
                        {
                            name: 'country',
                            label: 'Country',
                            type: 'select',
                            required: true,
                            errorMessage: 'Country is required',
                            options: [
                                { value: 'usa', label: 'United States' },
                                { value: 'canada', label: 'Canada' },
                                { value: 'uk', label: 'United Kingdom' }
                            ]
                        }
                    ]
                },
                {
                    id: 'preferences',
                    title: 'Preferences',
                    description: 'Set your account preferences.',
                    fields: [
                        { name: 'newsletter', label: 'Subscribe to newsletter', type: 'checkbox', required: false, errorMessage: '' },
                        {
                            name: 'theme',
                            label: 'Preferred theme',
                            type: 'radio',
                            required: true,
                            errorMessage: 'Please select a theme',
                            options: [
                                { value: 'light', label: 'Light' },
                                { value: 'dark', label: 'Dark' }
                            ]
                        }
                    ],
                    condition: (formValue) => formValue.personalInfo && formValue.personalInfo.age >= 18
                }
            ],
            submitButtonText: 'Complete Registration',
            cancelButtonText: 'Cancel'
        };
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(formConfig).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.delay)(500));
    }
    fetchFormData() {
        // Mock API call to fetch initial form data
        const formData = {
            personalInfo: {
                firstName: 'Pushpendra',
                lastName: 'Singh',
                email: 'Pushpendra@example.com',
                age: 30
            },
            addressInfo: {
                street: '123 Main St',
                city: 'Anytown',
                zipCode: '12345',
                country: 'usa'
            },
            preferences: {
                newsletter: true,
                theme: 'light'
            }
        };
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(formData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.delay)(1000));
    }
    submitFormData(data) {
        // Mock API call to submit form data
        console.log('Submitting data:', data);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)({ success: true, message: 'Form submitted successfully' }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.delay)(1500));
    }
    static { this.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' }); }
}


/***/ }),

/***/ 6768:
/*!**************************************************************!*\
  !*** ./src/app/step-form-kit/services/form-state.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormStateService": () => (/* binding */ FormStateService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class FormStateService {
    constructor() {
        this.formConfigSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        this.formDataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        this.currentStepIndexSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(0);
        this.loadingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.errorSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        this.formConfig$ = this.formConfigSubject.asObservable();
        this.formData$ = this.formDataSubject.asObservable();
        this.currentStepIndex$ = this.currentStepIndexSubject.asObservable();
        this.loading$ = this.loadingSubject.asObservable();
        this.error$ = this.errorSubject.asObservable();
    }
    setFormConfig(config) {
        this.formConfigSubject.next(config);
    }
    setFormData(data) {
        this.formDataSubject.next(data);
    }
    setCurrentStepIndex(index) {
        this.currentStepIndexSubject.next(index);
    }
    setLoading(isLoading) {
        this.loadingSubject.next(isLoading);
    }
    setError(error) {
        this.errorSubject.next(error);
    }
    addStep(step) {
        const currentConfig = this.formConfigSubject.getValue();
        if (currentConfig) {
            currentConfig.steps.push(step);
            this.formConfigSubject.next(currentConfig);
        }
    }
    removeStep(stepId) {
        const currentConfig = this.formConfigSubject.getValue();
        if (currentConfig) {
            currentConfig.steps = currentConfig.steps.filter(step => step.id !== stepId);
            this.formConfigSubject.next(currentConfig);
        }
    }
    saveProgress() {
        if (this.formConfigSubject.getValue()?.persistProgress) {
            localStorage.setItem('formProgress', JSON.stringify(this.formDataSubject.getValue()));
        }
    }
    loadProgress() {
        const savedProgress = localStorage.getItem('formProgress');
        if (savedProgress) {
            this.formDataSubject.next(JSON.parse(savedProgress));
        }
    }
    clearProgress() {
        localStorage.removeItem('formProgress');
    }
    static { this.ɵfac = function FormStateService_Factory(t) { return new (t || FormStateService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FormStateService, factory: FormStateService.ɵfac, providedIn: 'root' }); }
}


/***/ }),

/***/ 3444:
/*!*******************************************************!*\
  !*** ./src/app/step-form-kit/step-form-kit.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StepFormKitModule": () => (/* binding */ StepFormKitModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _components_step_form_step_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/step-form/step-form.component */ 606);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/api.service */ 6004);
/* harmony import */ var _services_form_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/form-state.service */ 6768);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);







class StepFormKitModule {
    static { this.ɵfac = function StepFormKitModule_Factory(t) { return new (t || StepFormKitModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: StepFormKitModule }); }
    static { this.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService, _services_form_state_service__WEBPACK_IMPORTED_MODULE_2__.FormStateService], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.BrowserAnimationsModule] }); }
}
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](StepFormKitModule, { declarations: [_components_step_form_step_form_component__WEBPACK_IMPORTED_MODULE_0__.StepFormComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.BrowserAnimationsModule], exports: [_components_step_form_step_form_component__WEBPACK_IMPORTED_MODULE_0__.StepFormComponent] }); })();


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
    production: false,
    formType: 'basic' // Change this to 'advanced' or 'security' to use different form configurations
};


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error('An error occurred during bootstrap:', err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map