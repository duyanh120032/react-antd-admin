import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from './Slices/Counter'

const store = configureStore({
  reducer: {
    counter: CounterReducer,
  },
})
export default store
