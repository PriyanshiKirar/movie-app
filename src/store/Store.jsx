import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './reducres/movieSlice'
import tvReducre from './reducres/tvSlice'
import  personReducer from './reducres/personSlice'
export const store = configureStore({
  reducer: {
   movie:movieReducer,
   tv:tvReducre,
   person:personReducer,
  },
})