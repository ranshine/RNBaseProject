import React from 'react'
import { StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useAppFlow } from '../providers'
import { AppFlowState } from '../utils/Appconstants'
import SplashScreen from '../screens/SplashScreen'

const AppNavigator = (): JSX.Element => {
  const { state } = useAppFlow()
  if (state === AppFlowState.Loading) {
    return <SplashScreen />
  }
  return (
    <>
      <StatusBar translucent barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}></SafeAreaView>
    </>
  )
}

export default AppNavigator
