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
      min_price: 0,
      max_price: 500000,
      min_floor_space: 0,
      floorSpaceError: false,
      priceError: false,
      isGridView: true,
      isListView: false,
      filteredData: listingsData
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
     this.onFilterData();
   })

  }

  onFilterData = () => {

    let newData = this.state.listingsData.filter((listing) => {

      return (listing.price >= this.state.min_price && listing.price <= this.state.max_price);

    });


    //by city
    if (this.state.city) {
      newData = newData.filter((listing) => {
        return listing.city === this.state.city;
      });
    }

    //by housetype
    if (this.state.housetype) {
      newData = newData.filter((listing) => {
        return listing.houseType === this.state.housetype;
      });
    }

    //by bedrooms
    if (this.state.bedrooms) {

      if (this.state.bedrooms === 'more_than_4') {
        console.log('************inside more than 4');
        newData = newData.filter((listing) => {
          return (listing.bedrooms) > 4;
        });

        console.log('************inside more than 4. newdata', newData);
      } else {
        newData = newData.filter((listing) => {
          return (listing.bedrooms + '') === this.state.bedrooms;
        });
      }


    }


    this.setState({
      filteredData: newData
    });


  }

  onPriceChange = () => {


    if (parseInt(this.state.min_price) > parseInt(this.state.max_price)) {

      this.setState({
        priceError: true
      })

    } else {

      this.setState({

          priceError: false

      })
    }

  }


  onFloorSpaceChange = () => {


    if (parseInt(this.state.min_floor_space) > parseInt(this.state.max_floor_space)) {

      this.setState({
        floorSpaceError: true
      })

    } else {

      this.setState({

        floorSpaceError: false

      })
    }

  }

  render () {

    // console.log(this.state)
    return (

      <div>
        <Header name='Andrews'/>
        <section id='content-area'>
          <Filter onInputChange={this.onInputChange} globalState={this.state} />
          <Listings listingsData={this.state.filteredData} />
        </section>
      </div>

    )
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
