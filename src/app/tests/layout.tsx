import React, { PropsWithChildren } from 'react'
import MyTestModalProvider from '../providers/TestProvider'

const Testslayout = ({ children }: PropsWithChildren ) => {
  return (
    <div>
      <MyTestModalProvider />
      {children}
    </div>
  )
}

export default Testslayout
