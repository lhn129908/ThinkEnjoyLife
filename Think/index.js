/**
 * @format
 */

import {AppRegistry} from 'react-native';
import APP from './App';

import {name as appName} from './app.json';

//指定应用的根组件和名字
AppRegistry.registerComponent(appName, () => APP);
