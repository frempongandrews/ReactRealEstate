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
      max_floor_space: 2000,
      floorSpaceError: false,
      priceError: false,
      isGridView: true,
      isListView: false,
      sortBy: '',
      searchedCity: '',
      isGridView: true,
      filteredData: listingsData,

    }



  }

  onSearchCity = (e) => {

    let searchedCity = e.target.value;

    let newListingsData = this.state.listingsData.filter((listing) => {
      return listing.city.indexOf(searchedCity.charAt(0).toUpperCase() + searchedCity.slice(1)) !== -1;
    });

    ////////code below: repetition on the other methods to render list correctly. Extrapolate to function if possible///////
    //check if this.state.sortBy is set to render results properly

    if (this.state.sortBy === '') {

      this.setState({

        filteredData: newListingsData,
        searchedCity: e.target.value.toLowerCase(),


      });
    }

    //highest first
    if (this.state.sortBy === 'sort_price_dsc') {

      newListingsData = newListingsData.sort(function(a, b) {
        return parseInt(b.price) - parseInt(a.price);
      });

      this.setState({

        filteredData: newListingsData,
        searchedCity: e.target.value.toLowerCase(),


      });
    }


    //lowest first
    if (this.state.sortBy === 'sort_price_asc') {

      newListingsData = newListingsData.sort(function(a, b) {
        return parseInt(a.price) - parseInt(b.price);
      });

      this.setState({

        filteredData: newListingsData,
        searchedCity: e.target.value.toLowerCase(),


      });
    }

    ////////code above: repetition on the other methods to render list correctly. Extrapolate to function if possible///////


  }


  activateGridView = () => {
    this.setState({
      isGridView: true
    })
  }


  activateListView = () => {
    this.setState({
      isGridView: false
    })
  }


  onInputChange = (e) => {

   let name = e.target.name
   let value = (e.target.type === 'checkbox') ? e.target.checked : e.target.value;

   this.setState ({
     [name]: value,

   }, () => {
     console.log(this.state);
     this.onPriceChange();
     this.onFloorSpaceChange();
     this.onFilterData();
   })

  }

  onSortBy = (e) => {
    console.log(e.target.value);

    let name = e.target.name;
    let value = e.target.value;


    let dscSortedListings = this.state.filteredData.sort(function(a, b) {
      return parseInt(b.price) - parseInt(a.price);
    });

    //descending by price
    if (value === 'sort_price_dsc') {

      // console.log('****************highest first');

      this.setState({
        'sortBy': value,
        filteredData: dscSortedListings
      })

    }

    //ascending by price
    if (value === 'sort_price_asc') {

      // console.log('****************highest first');


      let ascSortedListings = this.state.filteredData.sort(function(a, b) {
        return parseInt(a.price) - parseInt(b.price);
      });

      this.setState({
        sortBy: value,
        filteredData: ascSortedListings
      })

    }

  }

  onFilterData = () => {

    let newData = this.state.listingsData.filter((listing) => {

      return (listing.price >= this.state.min_price && listing.price <= this.state.max_price);

    });


    //by floor space
    if (this.state.max_floor_space) {
      newData = newData.filter((listing) => {
        return listing.floorSpace <= parseInt(this.state.max_floor_space);
      });
    }


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

        newData = newData.filter((listing) => {
          return (listing.bedrooms) > 4;
        });
      } else {
        newData = newData.filter((listing) => {
          return (listing.bedrooms + '') === this.state.bedrooms;
        });
      }


    }

    //by extras-elevator
    if (this.state.elevator) {
      newData = newData.filter((listing) => {

        return listing.extras.includes('elevator');
      });
    }

    //by extras-swimming pool
    if (this.state.swimming_pool) {
      newData = newData.filter((listing) => {

        return listing.extras.includes('pool');
      });
    }


    //by extras-gym
    if (this.state.gym) {
      newData = newData.filter((listing) => {

        return listing.extras.includes('gym');
      });
    }






    ////////code below: repetition on the other methods to render list correctly. Extrapolate to function if possible///////
    //check if this.state.sortBy is set to render results properly

    if (this.state.sortBy === '') {

      this.setState({

        filteredData: newData,



      });
    }

    //highest first
    if (this.state.sortBy === 'sort_price_dsc') {

      newData = newData.sort(function(a, b) {
        return parseInt(b.price) - parseInt(a.price);
      });

      this.setState({

        filteredData: newData,

      });
    }


    //lowest first
    if (this.state.sortBy === 'sort_price_asc') {

      newData = newData.sort(function(a, b) {
        return parseInt(a.price) - parseInt(b.price);
      });

      this.setState({

        filteredData: newData,


      });
    }

    ////////code above: repetition on the other methods to render list correctly. Extrapolate to function if possible///////
    //check if this.state.sortBy is set to render results properly

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

    console.log('*****************',this.state);
    return (

      <div>
        <Header name='Andrews'/>
        <section id='content-area'>
          <Filter onInputChange={this.onInputChange} globalState={this.state} />
          <Listings listingsData={this.state.filteredData} onSortBy={this.onSortBy} globalState={this.state} activateGridView={this.activateGridView} activateListView={this.activateListView} onSearchCity={this.onSearchCity}/>
        </section>
      </div>

    )
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
