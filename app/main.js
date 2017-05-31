"use strict";
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./Todo/app.module");
var form_module_1 = require("./Form/form.module");
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(app_module_1.AppModule);
platform.bootstrapModule(form_module_1.FormModule);
//# sourceMappingURL=main.js.map