import React, {Component} from 'react'
import PropTypes from 'prop-types';
const currencyFormatter = require('currency-formatter');
export default class Listings extends Component {

  constructor (props) {

    super(props);


  }

  static propTypes = {
    listingsData: PropTypes.arrayOf(PropTypes.shape({
      image: PropTypes.string,
      postedBy: PropTypes.string,
      postDate: PropTypes.string,
      address: PropTypes.string,
      city: PropTypes.string,
      bedrooms: PropTypes.number,
      price: PropTypes.number,
      floorSpace: PropTypes.number,
      extras: PropTypes.arrayOf(PropTypes.string),
      houseType: PropTypes.string
    }))

  }

  static defaultProps = {
    listingsData: []
  }

  render () {

    //console.log(this.props);

    const listingItems = this.props.listingsData.map((listingItem, i) => {

      let userListingImageUrl = 'https://architecturebeast.com/wp-content/uploads/2014/08/Top_50_Modern_House_Designs_Ever_Built_featured_on_architecture_beast_15.jpg';

      let listingUserImageStyle = {
        backgroundImage: 'url(' + userListingImageUrl + ')'

      };


      //listing image
      let listingBackground = listingItem.image;

      let listingImageStyle = {
        backgroundImage: 'url(' + listingBackground + ')'
      };

      return (





        <div className='listing' key={i}>

            {/*listing image*/}
            <div className='listing-img' style={listingImageStyle}>



              <span className='address'>{listingItem.address}</span>





              {/* details/hover/sub view*/}

              <div className='details'>

                <div className='user-img' style={listingUserImageStyle}></div>

                <div className='user-details'>
                  <span className='user-name'>{listingItem.postedBy}</span>
                  <span className='post-date'>Posted on {listingItem.postDate}</span>
                </div>

                {/*details/hover sub view: listing details*/}
                <div className='listing-details'>

                  <div className='floor-space'>
                    <span>{listingItem.floorSpace}ft&sup2;</span>
                  </div>

                  <div className='bedrooms'>
                    <i className='fa fa-bed' aria-hidden='true'></i>
                    <span>{listingItem.bedrooms} bedrooms</span>
                  </div>
                </div>
                {/*details/hover sub view: end listing details*/}


                <div className='view-listing-btn'>
                  <button><a href='#'>View listing</a></button>
                </div>

              </div>

              {/*end details/hover/sub view*/}



            </div>
            {/*end listing image*/}


            {/*listing bottom info*/}
            <div className='bottom-info'>

              <span className='property-price'>{currencyFormatter.format(listingItem.price, {code: 'GBP'})} </span>
              <span className='property-location'><i className='fa fa-map-marker' aria-hidden='true'></i> {listingItem.city} </span>

            </div>
            {/*end listing bottom info*/}

          </div>

      )

    });




    return(


      <section id='listings'>



        <section className='search-area'>
          <input type='text' name='search' placeholder='Search...'/>
        </section>


        {/*check length listings data before loop*/}
        {(this.props.listingsData.length < 1) && <p>No Listings Found</p>}

        <section className='sortby-area'>
          <div className='results'>

            {this.props.listingsData.length} results found
          </div>

          <div className='sort-options'>


            <select name='sortby' className='sortby'>
              <option value='price-asc'>Highest price first</option>
              <option value='price-dsc'>Lowest price first</option>
            </select>


            <div className='view'>

              <i className='fa fa-th-list' aria-hidden='true'></i>
              <i className='fa fa-th' aria-hidden='true'></i>

            </div>


          </div>
        </section>




        {/*listing results area*/}
        <section className='listings-results'>






          {/*/////// list items///////*/}


          {listingItems}

          {/*////////////////////////////////////////////*/}









        </section>
        {/*end listing results area*/}



        {/*pagination area*/}
        <section className='pagination'>

          <ul className='pages'>

            <li >Prev</li>
            <li className='active-page'>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>Next</li>

          </ul>

        </section>
        {/*end pagination area*/}







      </section>



    )

  }

}