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

          <select name='neighbourhood' className='filters neighbourhood'>
            <option >Manchester</option>
          </select>


          <select name='housetype' className='filters housetype'>
            <option >Ranch</option>
          </select>


          <select name='bedrooms' className='filters bedrooms'>
            <option >3 Bedrooms</option>
          </select>


          {/*<!--price -->*/}
          <div className='filters price'>

            <span className='title'>Price</span>
            <input type='text' name='min-price' className='min price'/>
            <input type='text' name='max-price' className='max-price'/>

          </div>
          {/*<!--end price -->*/}


          {/*<!--floorspace -->*/}
          <div className='filters floorspace'>

            <span className='title'>Floor Space</span>
            <input type='text' name='min-floor-space' className='min-floor-space'/>
            <input type='text' name='max-floor-space' className='max-floor-space'/>

          </div>
          {/*<!--end floorspace -->*/}


          {/*<!--extras -->*/}

          <div className='filters extras'>

            <span className='title'>Extras</span>

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