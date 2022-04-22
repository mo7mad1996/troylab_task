import React from "react";
// redux
import {Provider} from 'react-redux'
import {store} from './redux'

// pages
import Main from './components/main'
import Aside from './components/aside'
import Footer from './components/footer'


// const store = React

const App = () => {
  return(
    <Provider store={store} >
      <div className="app">
        <div className="row">
          <Main />
          <Aside />
        </div>

        <Footer />
      </div>
    </Provider>
    )
}

export default App