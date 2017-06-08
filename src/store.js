import {createStore} from 'redux'

import {oflMaterialReducer} from './reducers';

export default createStore(oflMaterialReducer); //redux function

 //kip how to add multi reducers for OFL app..