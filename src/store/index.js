import { createStore } from 'redux'
import booksStore, { initialState } from './reducer'

export const reduxStore = createStore(booksStore, initialState)




