import { useState } from 'react'
import './App.css'
import { Cart } from './component/Cart'
import { Header } from './component/Header'
import { Meal } from './component/Meal'
import { ContextProvider } from './store/ContextProvider'

function App() {
  const [showCart, setShowCart] = useState(false)
  const closeCart = (props) => {
    setShowCart(false)
  }
  const openCart = (props) => {
    setShowCart(true)
  }

  return (
    <div className="App">
      <ContextProvider>
        {showCart && <Cart onHide={closeCart} />}
        <Header onShow={openCart} />
        <main>
          <Meal />
        </main>
      </ContextProvider>
    </div>
  )
}

export default App
