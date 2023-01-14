import { configureStore } from '@reduxjs/toolkit'
import favoritesReducer from './favorites'

export interface RootState {
  favoriteMeals: {
    ids: string[]
  }
}

export const store = configureStore({
  reducer: {
    favoriteMeals: favoritesReducer,
  },
})
