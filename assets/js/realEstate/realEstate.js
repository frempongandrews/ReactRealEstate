import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Filter from './Filter'
import Listings from './Listings'
import listingsData from './data/ListingsData';

class App extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe',
      listingsData
    }
  }

  render () {

    console.log(listingsData);

    return (

      <div>
        <Header name='Andrews'/>
        <section id='content-area'>
          <Filter />
          <Listings />
        </section>
      </div>

    )
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
