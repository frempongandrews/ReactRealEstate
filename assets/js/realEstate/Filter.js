import React, {Component} from 'react'



export default class Filter extends Component {

  constructor () {

    super()

    this.state = {

    }
  }

  render () {

    return (

      <section id='filter'>

        {/*inside*/}
        <div className='inside'>


          <h4>Filter</h4>

          <span className='filter_by_city'>City</span>
          <select name="city" className='filters city' onChange={this.props.onInputChange}>
            <option value=''>All</option>
            <option value='Manchester'>Manchester</option>
            <option value='Liverpool'>Liverpool</option>
            <option value='London'>London</option>
            <option value='Birmingham'>Birmingham</option>
          </select>


          <span className='filter_by_housetype'>House Type</span>
          <select name='housetype' className='filters housetype' onChange={this.props.onInputChange}>
            <option value=''>All</option>
            <option value='flat'>Flat</option>
            <option value='detached'>Detached</option>
            <option value='semi_detached'>Semi-Detached</option>
            <option value='terraced'>Terraced</option>
            <option value='bungalow'>Bungalow</option>
          </select>


          <span className='filter_by_numberOfBedrooms'>Bedrooms</span>
          <select name='bedrooms' className='filters bedrooms' onChange={this.props.onInputChange}>
            <option value=''>All</option>
            <option value='2'>2 Bedrooms</option>
            <option value='3'>3 Bedrooms</option>
            <option value='4'>4 Bedrooms</option>
            <option value='more_than_4'>More than 4 Bedrooms</option>
          </select>


          {/*<!--price -->*/}
          <div className='filters price price-filter'>


            <span className='title'>Price</span>
            {this.props.globalState.priceError && <p className='price-error'>Min price cannot be higher than Max price</p>}
            <input type='number' name='min_price' className='min-price' placeholder='from:' value={this.props.globalState.min_price} onChange={this.props.onInputChange} />
            <input type='number' name='max_price' className='max-price' placeholder='to:' value={this.props.globalState.max_price} onChange={this.props.onInputChange}/>

          </div>
          {/*<!--end price -->*/}


          {/*<!--floorspace -->*/}
          <div className='filters floor-space-filter'>

            <span className='title'>Floor Space in ft&sup2;</span>
            {this.props.globalState.floorSpaceError && <p className='floor-space-error'>Min Floor Space cannot be higher than Max Floor Space</p>}
            <input type='number' name='min_floor_space' className='min-floor-space' value={this.props.globalState.min_floor_space} placeholder='from:' onChange={this.props.onInputChange}/>
            <input type='number' name='max_floor_space' className='max-floor-space' value={this.props.globalState.max_floor_space} placeholder='to:' onChange={this.props.onInputChange}/>

          </div>
          {/*<!--end floorspace -->*/}


          {/*<!--extras -->*/}

          <div className='filters extras'>

            <span className='title '>Extras</span>

            <label htmlFor='extras'>

              <span>Elevator</span>
              <input name='elevator' value='elevator' type='checkbox' onChange={this.props.onInputChange}/>

            </label>

            <label htmlFor='extras'>

              <span>Swimming Pool</span>
              <input name='swimming_pool' value='swimming-pool' type='checkbox' onChange={this.props.onInputChange}/>

            </label>


            <label htmlFor='extras'>

              <span>Gym</span>
              <input name='gym' value='gym' type='checkbox' onChange={this.props.onInputChange}/>

            </label>

          </div>
          {/*end extras*/}

        </div>
        {/*end inside*/}
      </section>

    )

  }

}