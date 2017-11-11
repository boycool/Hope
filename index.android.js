/** Registering Hope application to common file App.js
 *  This gives us flexibility to register same js file for android as well as ios.
 */
import { AppRegistry } from 'react-native';
import App from './src/App'


AppRegistry.registerComponent('Hope', () => App);
