/* eslint-disable @typescript-eslint/no-explicit-any */
import useFile from 'hooks/useFile'
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react'

export type TabTypes = 'details' | 'documents'

export interface AppContextProps {
  activeTab?: TabTypes
  setactiveTab: Dispatch<SetStateAction<TabTypes | undefined>>
  files?: any
  addToFiles: Dispatch<SetStateAction<any>>
}

const useAppActions = () => {
  const [activeTab, setactiveTab] = useState<TabTypes | undefined>('details')
  const { addToFiles, files } = useFile()

  return {
    activeTab,
    addToFiles,
    files,
    setactiveTab,
  }
}

export const AppContext = createContext<AppContextProps>({} as AppContextProps)

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const value = useAppActions()
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
