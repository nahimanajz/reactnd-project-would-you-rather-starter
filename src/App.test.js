import React from "react";
import {users, questions} from './utils/_DATA';
import { MyApp } from './App';
import { renderWithState } from "./tests/custom_render";

const initialState = {users, questions, authedUser: 'tylermcginnis'};
test('renders learn react link', () => {
  renderWithState(<MyApp />,initialState );
});