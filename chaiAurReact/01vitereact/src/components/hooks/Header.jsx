import React from 'react'

const Header = () => {
    console.log("Header Rendered!");
  return (
    <h1>Header</h1>
  )
}

export default React.memo(Header)