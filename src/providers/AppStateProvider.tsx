import React, { useContext, useState } from 'react'
import { AppFlowState } from '../utils/Appconstants'

interface IAppStateContext {
  state: AppFlowState
  updateAppState: (state: AppFlowState) => void
}

const initialValue: IAppStateContext = {
  state: AppFlowState.Loading,
  updateAppState: (state: AppFlowState) => {}
}
const AppStateContext = React.createContext<IAppStateContext>(initialValue)

const AppStateProvider = ({ children }): JSX.Element => {
  const [state, setAppState] = useState<AppFlowState>(AppFlowState.Loading)

  const updateAppState = (state: AppFlowState): void => {
    switch (state) {
      case AppFlowState.Guest:
        //clear login credentials
        setAppState(AppFlowState.Guest)
        break
      case AppFlowState.Landing:
        // calling user data
        setAppState(AppFlowState.Landing)
        break
      case AppFlowState.Loading:
        setAppState(AppFlowState.Loading)
        break
      default:
    }
  }

  return (
    <AppStateContext.Provider value={{ state, updateAppState }}>
      {children}
    </AppStateContext.Provider>
  )
}
export const useAppFlow = (): IAppStateContext => {
  return useContext(AppStateContext)
}
export default AppStateProvider
