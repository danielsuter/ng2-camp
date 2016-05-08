/*
 * Providers provided by Angular
 */
import {bootstrap} from 'angular2/platform/browser';
/*
* Platform and Environment
* our providers/directives/pipes
*/
import {DIRECTIVES, PIPES, PROVIDERS} from './platform/browser';
import {ENV_PROVIDERS} from './platform/environment';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';


/*
* App Component
* our top level component that holds all of our components
*/
import {App} from './app/app.component';

/*
 * Bootstrap our Angular app with a top level component `App` and inject
 * our Services and Providers into Angular's dependency injection
 */
export function main(): Promise<any> {

  return bootstrap(App, [
    ...PROVIDERS,
    ...ENV_PROVIDERS,
    ...DIRECTIVES,
    ...PIPES,
    FIREBASE_PROVIDERS,
    defaultFirebase('https://blistering-heat-1745.firebaseio.com/')
  ])
  .catch(err => console.error(err));

}





/*
 * Vendors
 * For vendors for example jQuery, Lodash, angular2-jwt just import them anywhere in your app
 * You can also import them in vendors to ensure that they are bundled in one file
 * Also see custom-typings.d.ts as you also need to do `typings install x` where `x` is your module
 */


if ('development' === ENV) {
  document.addEventListener('DOMContentLoaded', () => main());
}
