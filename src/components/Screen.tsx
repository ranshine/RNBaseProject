import React, { useMemo } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useNetInfo } from '@react-native-community/netinfo'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const Screen = ({
  hasScrollView = false,
  backgroundColor = '#f1f9ff',
  children
}: IScreenProps): JSX.Element => {
  const netInfo = useNetInfo()

  const renderNetworkStatus = useMemo((): React.ReactNode => {
    if (netInfo.isConnected === true) {
      return null
    }
    return (
      <View style={styles.offlineContainer}>
        <Text style={styles.offlineText}>No Internet Connection</Text>
      </View>
    )
  }, [netInfo.isConnected])

  if (hasScrollView) {
    return (
      <View
        style={[styles.rootContainer, { backgroundColor: backgroundColor }]}
      >
        {renderNetworkStatus}
        {children}
      </View>
    )
  }
  return (
    <View style={[styles.rootContainer, { backgroundColor: backgroundColor }]}>
      {renderNetworkStatus}
      <KeyboardAwareScrollView>{children}</KeyboardAwareScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#f1f9ff'
  },
  offlineContainer: {
    backgroundColor: '#b52424',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    position: 'absolute',
    top: 30
  },
  offlineText: { color: '#fff' }
})

interface IScreenProps {
  hasScrollView?: boolean
  backgroundColor?: string
  children: React.ReactNode
}

export default Screen
