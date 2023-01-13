import { ParamListBase } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { FC } from 'react'
import { StyleSheet, Text, View, FlatList, ListRenderItem } from 'react-native'
import CategoryGridTile from '../components/Category.grid'

import { CATEGORIES } from '../data/data'
import Category from '../models/category'

const CategoriesScreen: FC<{
  navigation: NativeStackNavigationProp<ParamListBase>
}> = ({ navigation }) => {
  const renderCategoryItem: ListRenderItem<Category> = ({ item }) => {
    const pressHandler = () => {
      navigation.navigate('mealsOverview', {
        categoryId: item.id,
      })
    }

    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onPress={pressHandler}
      />
    )
  }

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderCategoryItem}
      keyExtractor={item => item.id}
      numColumns={2}
    />
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({})
