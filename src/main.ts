import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true
})
  .catch(err => console.error(err));


/**
index.html contains <app-root>.
main.ts is executed and bootstraps AppModule.
AppModule specifies AppComponent as the root component to be bootstrapped.
AppComponent has a selector: 'app-root', which matches the <app-root> tag in index.html.
Angular compiles and injects the content of AppComponent into the <app-root> element.
The Angular app is now running, and AppComponent manages the application view.
**/
