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
          <select name='housetype' className='filters housetype'>
            <option value=''></option>
            <option >Flat</option>
            <option >Detached</option>
            <option >Semi-Detached</option>
            <option >Terraced</option>
            <option >Bungalows</option>
          </select>


          <span className='filter_by_numberOfBedrooms'>Bedrooms</span>
          <select name='bedrooms' className='filters bedrooms'>
            <option value=''></option>
            <option >2 Bedrooms</option>
            <option >3 Bedrooms</option>
            <option >4 Bedrooms</option>
            <option >More than 4 Bedrooms</option>
          </select>


          {/*<!--price -->*/}
          <div className='filters price'>

            <span className='title'>Price</span>
            <input type='text' name='min-price' className='min price' placeholder='from:'/>
            <input type='text' name='max-price' className='max-price' placeholder='to:'/>

          </div>
          {/*<!--end price -->*/}


          {/*<!--floorspace -->*/}
          <div className='filters floorspace'>

            <span className='title'>Floor Space</span>
            <input type='text' name='min-floor-space' className='min-floor-space' placeholder='from:'/>
            <input type='text' name='max-floor-space' className='max-floor-space' placeholder='to:'/>

          </div>
          {/*<!--end floorspace -->*/}


          {/*<!--extras -->*/}

          <div className='filters extras'>

            <span className='title '>Extras</span>

            <label htmlFor='extras'>

              <span>Elevators</span>
              <input name='extras' value='elevator' type='checkbox'/>

            </label>

            <label htmlFor='extras'>

              <span>Swimming Pool</span>
              <input name='extras' value='swimming-pool' type='checkbox'/>

            </label>


            <label htmlFor='extras'>

              <span>Gym</span>
              <input name='extras' value='gym' type='checkbox'/>

            </label>

          </div>
          {/*end extras*/}

        </div>
        {/*end inside*/}
      </section>

    )

  }

}