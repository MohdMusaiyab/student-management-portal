import React from 'react'
import Header from './Header'
import Footer from './Footer'
const Layout = ({children,title,keyword,author,description}) => {
  return (
    <div>
     <Header></Header>
        <main style={{minHeight:"70vh"}}>
            
        {children}
        </main>
        <Footer>

        </Footer>
    </div>
  )
}
Layout.defaultProps={
    title:"E-commerce App",
    description:"Shop Anything",
    keywords:""
}

export default Layout
