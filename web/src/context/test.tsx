import React, {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction
} from 'react'

interface Test {
  id: string
  student_id: string
  student_name: string
  student_email: string
  questions: string
  grade?: number
}

interface TestContextData {
  setTest: Dispatch<SetStateAction<Test>>
  test: Test
}

const TestContext = createContext<TestContextData>({} as TestContextData)

const TestProvider: React.FC = ({ children }) => {
  const [test, setTest] = useState<Test>({} as Test)

  return (
    <TestContext.Provider
      value={{
        setTest,
        test
      }}
    >
      {children}
    </TestContext.Provider>
  )
}

const useTest = (): TestContextData => {
  const context = useContext(TestContext)

  if (!context) {
    throw new Error('useTest must be used within a TestContext')
  }

  return context
}

export { TestProvider, useTest }
