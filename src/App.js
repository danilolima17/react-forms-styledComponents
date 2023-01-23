import React, { Component } from 'react'
 
import { injectGlobal } from 'styled-components'
import Main from './views/Main/Main'

injectGlobal`
  * {
    box-sizing: border-box; 
  }
  body { 
    line-height: 1.6; 
    font-family: Montserrat, sans-serif; 
    padding: 1em; 
  }
`;

class App extends Component {
  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

export default App