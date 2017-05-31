import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './Todo/app.module';
import { FormModule } from './Form/form.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
platform.bootstrapModule(FormModule);