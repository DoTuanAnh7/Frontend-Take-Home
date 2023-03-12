/**
 * @format
 */

 import {AppRegistry} from 'react-native';
 import App from './App';
 import {name as appName} from './app.json';
 import {Provider} from 'react-redux';
 import {setupStore} from './app/redux/store';
 
 export const Root = () => {
   return (
     <Provider store={setupStore()}>
       <App />
     </Provider>
   );
 };
 
 AppRegistry.registerComponent('application', () => Root);
 