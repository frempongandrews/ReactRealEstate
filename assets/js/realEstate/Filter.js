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
          <select name='neighbourhood' className='filters neighbourhood' onChange={this.props.onInputChange}>
            <option value=''></option>
            <option value='Manchester'>Manchester</option>
            <option value='Liverpool'>Liverpool</option>
          </select>


          <span className='filter_by_housetype'>House Type</span>
          <select name='housetype' className='filters housetype' onChange={this.props.onInputChange}>
            <option value=''></option>
            <option value='flat'>Flat</option>
            <option value='detached'>Detached</option>
            <option value='semi_detached'>Semi-Detached</option>
            <option value='terraced'>Terraced</option>
            <option value='bungalow'>Bungalow</option>
          </select>


          <span className='filter_by_numberOfBedrooms'>Bedrooms</span>
          <select name='bedrooms' className='filters bedrooms' onChange={this.props.onInputChange}>
            <option value=''></option>
            <option value='2'>2 Bedrooms</option>
            <option value='3'>3 Bedrooms</option>
            <option value='4'>4 Bedrooms</option>
            <option value='more_than_4'>More than 4 Bedrooms</option>
          </select>


          {/*<!--price -->*/}
          <div className='filters price'>

            <span className='title'>Price</span>
            <input type='text' name='min-price' className='min price' placeholder='from:' onChange={this.props.onInputChange}/>
            <input type='text' name='max-price' className='max-price' placeholder='to:' onChange={this.props.onInputChange}/>

          </div>
          {/*<!--end price -->*/}


          {/*<!--floorspace -->*/}
          <div className='filters floorspace'>

            <span className='title'>Floor Space</span>
            <input type='text' name='min-floor-space' className='min-floor-space' placeholder='from:' onChange={this.props.onInputChange}/>
            <input type='text' name='max-floor-space' className='max-floor-space' placeholder='to:' onChange={this.props.onInputChange}/>

          </div>
          {/*<!--end floorspace -->*/}


          {/*<!--extras -->*/}

          <div className='filters extras'>

            <span className='title '>Extras</span>

            <label htmlFor='extras'>

              <span>Elevators</span>
              <input name='elevators' value='elevator' type='checkbox' onChange={this.props.onInputChange}/>

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