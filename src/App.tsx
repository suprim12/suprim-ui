import React from 'react'
import { Button } from './components'
const App = () => {
  return (
    <div>
      <Button
        type='submit'
        variation='default'
        shadow
        borderRadius='0px'
        borderHover='1px solid transparent'
        fontSize='1.2rem'
        fontFamily='Arial'
        textColor='darkred'
        textTransform='uppercase'
        fontWeight='bold'
        backgroundColor='black'
      >
        Default
      </Button>
      <Button>Click me</Button>
    </div>
  )
}

export default App
