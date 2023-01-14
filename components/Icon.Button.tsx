import { FC } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

interface Props {
  icon: keyof typeof Ionicons.glyphMap
  color: string
  onPress: () => void
}

const IconButton: FC<Props> = ({ icon, color, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressed}
      onPress={onPress}
    >
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  )
}

export default IconButton

const styles = StyleSheet.create({
  pressed: { opacity: 0.7 },
})
