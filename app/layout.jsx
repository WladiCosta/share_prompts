import '@styles/globals.css'
import React from 'react'

export const metadata = {
    title: "Promptopia",
    description: "Descubra & compartilhe prompts para I.A",
}

const RootLayout = ( { children } ) => {
  return (
    <html lang='pt-br'>
        <body className='main'>
            <div className='gradient'/>
        </body>
        <main className='app'>
            {children}
        </main>
    </html>
  )
}

export default RootLayout;