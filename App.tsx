import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import AppStateProvider from './src/providers/AppStateProvider'
import ToastMsg from './src/components/ToastMsg'
import AppNavigator from './src/navigation/AppNavigator'

const App = (): JSX.Element => {
  const queryClient = new QueryClient()

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AppStateProvider>
          <AppNavigator />
        </AppStateProvider>
      </QueryClientProvider>
      <ToastMsg position="bottom" bottomOffset={40} />
    </>
  )
}
export default App
