import React from 'react'
import { StyleSheet, View } from 'react-native'
import Screen from '../components/Screen'
import { Text } from 'react-native-paper'
import { TEXT_MEDIUM, colors, fontSizes } from '../theme/Typography'

const SplashScreen = (): JSX.Element => {
  return (
    <Screen hasScrollView backgroundColor="#1DB954">
      <View style={styles.root}>
        <Text
          style={{
            fontFamily: TEXT_MEDIUM.fontFamily,
            fontSize: fontSizes.xxl.fontSize,
            color: colors.whiteColor
          }}
        >
          NURSD
        </Text>
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default SplashScreen
