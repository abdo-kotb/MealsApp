import { createContext, FC, ReactNode, useState } from 'react'

interface ContextValues {
  ids: string[]
  addFavorite: (id: string) => void
  removeFavorite: (id: string) => void
}

export const FavoritesContext = createContext<ContextValues>({
  ids: [],
  addFavorite: (_: string) => {},
  removeFavorite: (_: string) => {},
})

const FavoritesContextPropvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([])

  const addFavorite = (id: string) => {
    setFavoriteIds(prevFavIds => [...prevFavIds, id])
  }

  const removeFavorite = (id: string) => {
    setFavoriteIds(prevFavIds => prevFavIds.filter(mealId => mealId !== id))
  }

  const value = {
    ids: favoriteIds,
    addFavorite,
    removeFavorite,
  }

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  )
}

export default FavoritesContextPropvider
