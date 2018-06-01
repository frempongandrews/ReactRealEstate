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
      name: 'Drew',
      listingsData
    }



  }

  onInputChange = (e) => {

   let name = e.target.name
   let value = (e.target.type === 'checkbox') ? e.target.checked : e.target.value;

   this.setState ({
     [name]: value
   }, () => {
     console.log(this.state);
   })
  }

  render () {

    //console.log(listingsData);

    return (

      <div>
        <Header name='Andrews'/>
        <section id='content-area'>
          <Filter onInputChange={this.onInputChange}/>
          <Listings listingsData={this.state.listingsData} />
        </section>
      </div>

    )
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
