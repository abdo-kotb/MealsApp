import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit'

interface Slice {
  ids: string[]
}

const favoritesSlice = createSlice<Slice, SliceCaseReducers<Slice>>({
  name: 'favorites',
  initialState: {
    ids: [],
  },
  reducers: {
    addFavorite: (state, { payload }) => {
      state.ids.push(payload.id)
    },
    removeFavorite: (state, { payload }) => {
      state.ids.splice(state.ids.indexOf(payload.id, 1))
    },
  },
})

export const { addFavorite, removeFavorite } = favoritesSlice.actions
export default favoritesSlice.reducer
