import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-header',
                template: "<h1>\n  <ng-content></ng-content>\n</h1>",
                styles: ["h1{color:red}"]
            },] },
];
HeaderComponent.ctorParameters = function () { return []; };
var HeaderModule = /** @class */ (function () {
    function HeaderModule() {
    }
    return HeaderModule;
}());
HeaderModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    HeaderComponent
                ],
                exports: [
                    HeaderComponent
                ]
            },] },
];
HeaderModule.ctorParameters = function () { return []; };

export { HeaderModule, HeaderComponent as ɵa };
//# sourceMappingURL=angular-init-lib.js.map
