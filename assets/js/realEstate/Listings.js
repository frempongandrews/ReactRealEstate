import React, {Component} from 'react'


export default class Listings extends Component {

  constructor () {

    super()

    this.state = {


    }

  }

  render () {

    return(


      <section id='listings'>



        <section className='search-area'>
          <input type='text' name='search'/>
        </section>



        <section className='sortby-area'>
          <div className='results'>
            300 results found
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












          {/*/////// 3 list items///////*/}
          {/*////////////////////////////////////////////*/}


          {/*listing item*/}
          <div className='listing'>


            {/*listing image*/}
            <div className='listing-img'>



              <span className='address'>Appartment Kleiweg</span>





              {/* details/hover/sub view*/}

              <div className='details'>

                <div className='user-img'></div>

                <div className='user-details'>
                  <span className='user-name'>Nina Smith</span>
                  <span className='post-date'>Posted on 05/05/18</span>
                </div>

                {/*details/hover sub view: listing details*/}
                <div className='listing-details'>

                  <div className='floor-space'>
                    <span>1000ft&sup2;</span>
                  </div>

                  <div className='bedrooms'>
                    <i className='fa fa-bed' aria-hidden='true'></i>
                    <span>3 bedrooms</span>
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

              <span className='property-price'>$1000 / month </span>
              <span className='property-location'><i className='fa fa-map-marker' aria-hidden='true'></i> London </span>

            </div>
            {/*end listing bottom info*/}



          </div>
          {/*end listing item*/}



          {/*////////////////////////////////////////////*/}


          {/*listing item*/}
          <div className='listing'>


            {/*listing image*/}
            <div className='listing-img'>

              <span className='address'>Appartment Kleiweg</span>


              {/* details/hover/sub view*/}

              <div className='details'>

                <div className='user-img'></div>

                <div className='user-details'>
                  <span className='user-name'>Nina Smith</span>
                  <span className='post-date'>Posted on 05/05/18</span>
                </div>

                {/*details/hover sub view: listing details*/}
                <div className='listing-details'>

                  <div className='floor-space'>
                    <span>1000ft&sup2;</span>
                  </div>

                  <div className='bedrooms'>
                    <i className='fa fa-bed' aria-hidden='true'></i>
                    <span>3 bedrooms</span>
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

              <span className='property-price'>$1000 / month </span>
              <span className='property-location'><i className='fa fa-map-marker' aria-hidden='true'></i> London </span>

            </div>
            {/*end listing bottom info*/}



          </div>
          {/*end listing item*/}

          {/*////////////////////////////////////////////*/}


          {/*listing item*/}
          <div className='listing'>


            {/*listing image*/}
            <div className='listing-img'>

              <span className='address'>Appartment Kleiweg</span>


              {/* details/hover/sub view*/}

              <div className='details'>

                <div className='user-img'></div>

                <div className='user-details'>
                  <span className='user-name'>Nina Smith</span>
                  <span className='post-date'>Posted on 05/05/18</span>
                </div>

                {/*details/hover sub view: listing details*/}
                <div className='listing-details'>

                  <div className='floor-space'>
                    <span>1000ft&sup2;</span>
                  </div>

                  <div className='bedrooms'>
                    <i className='fa fa-bed' aria-hidden='true'></i>
                    <span>3 bedrooms</span>
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

              <span className='property-price'>$1000 / month </span>
              <span className='property-location'><i className='fa fa-map-marker' aria-hidden='true'></i> London </span>

            </div>
            {/*end listing bottom info*/}



          </div>
          {/*end listing item*/}




          {/*///////End 3 list items///////*/}
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