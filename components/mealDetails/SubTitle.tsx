import { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface Props {
  children: string
}

const SubTitle: FC<Props> = ({ children }) => {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  )
}

export default SubTitle

const styles = StyleSheet.create({
  subTitleContainer: {
    marginHorizontal: 12,
    marginVertical: 4,
    padding: 6,
    borderBottomColor: '#e2b497',
    borderBottomWidth: 2,
  },
  subTitle: {
    color: '#e2b497',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
})
