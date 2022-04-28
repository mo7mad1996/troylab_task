import React from "react";
// redux
import {Provider} from 'react-redux'
import {store} from './redux'

// components
import Main from './components/main'
import Aside from './components/aside'
import Footer from './components/footer'


const App = () => {
  return(
    <Provider store={store} >
      {/* layout */}
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