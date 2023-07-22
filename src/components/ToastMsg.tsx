import React from 'react'
import RNToast from 'react-native-toast-message'
import { ToastType } from '../utils/Appconstants'

const ToastMsg = (props: ToastProps): JSX.Element => {
  return <RNToast {...props} />
}
ToastMsg.showMsg = (toastType: ToastType, message: string) => {
  RNToast.show({ type: toastType, props: { text1: message } })
}
export type ToastProps = React.ComponentProps<typeof RNToast>

export default ToastMsg
