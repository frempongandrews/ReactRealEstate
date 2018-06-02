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
      listingsData,
      priceError: false,
      floorSpaceError: false
    }



  }

  onInputChange = (e) => {

   let name = e.target.name
   let value = (e.target.type === 'checkbox') ? e.target.checked : e.target.value;

   this.setState ({
     [name]: value
   }, () => {
     console.log(this.state);
     this.onPriceChange();
     this.onFloorSpaceChange();
   })

  }

  onPriceChange = () => {
    console.log('Changing price')

    if (parseInt(this.state.min_price) > parseInt(this.state.max_price)) {

      this.setState({
        priceError: true
      })

      //console.log('finished resetting state')
    } else {

      this.setState({

          priceError: false

      })
    }

    //console.log('current state: ',this.state);
  }


  onFloorSpaceChange = () => {
    console.log('Changing price')

    if (parseInt(this.state.min_floor_space) > parseInt(this.state.max_floor_space)) {

      this.setState({
        floorSpaceError: true
      })

      //console.log('finished resetting state')
    } else {

      this.setState({

        floorSpaceError: false

      })
    }

    //console.log('current state: ',this.state);
  }

  render () {

    // console.log(this.state)
    return (

      <div>
        <Header name='Andrews'/>
        <section id='content-area'>
          <Filter onInputChange={this.onInputChange} globalState={this.state} />
          <Listings listingsData={this.state.listingsData} />
        </section>
      </div>

    )
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
