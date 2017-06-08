import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import MaterialForm from './components/materialform';
import store from './store';

import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <MaterialForm />
    </Provider>,
    document.getElementById('root')
);
//START HERE WITH REDUCERS!!
//>>>> when adding the router it will go here!<<<<<<<<

//star with redux store then add the submit function
// main goal would be to record the input and change the redux state.
//once its connected then can move on to doing the modals.
//maybe move dir's to have containers + presentational ele- separate?
// from trello ex: the add-form only handles logic, no presentational component!
// Materialform >>> brings in the addmetrial comp >>> kip the prop for what we're adding
// in this case adding a matrial with the ( name)
//