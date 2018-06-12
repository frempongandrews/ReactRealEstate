//change all image links at the end
const listings = [

  {

    image: 'https://lh3.googleusercontent.com/-8YwBdmxLSpM7PmIB6wcMGJZ8-U3VmhLL1hGwhJ_d2_1i10IwVenDRixkzLAECL9HqyiI4yZHPNoeYb71_QAEhXVHw',
    postedBy: 'Nina Williams',
    postDate:'05/05/18',
    address: 'Mauldeth Road M14',
    city: 'Manchester',
    bedrooms: 4,
    price: 220000,
    floorSpace: 1000,
    extras: [

    ],
    houseType: 'bungalow'

  },

  {
    image: 'https://lh3.googleusercontent.com/h0Ca1UYHyR6c541bA4BH6eXkB7RR3GJt159LqKYBpi9-RqbIpWaZCPDTX1ri0UiP70KOlGmki5CBNAKmG5kLV0PD',
    postedBy: 'Nathan Drake',
    postDate:'25/05/18',
    address: 'Cambridge Road M35',
    city: 'Manchester',
    bedrooms: 2,
    price: 140000,
    floorSpace: 500,
    extras: [

    ],
    houseType: 'terraced'

  },

  {
    image: 'https://lh3.googleusercontent.com/VsY59dk3ImigzqbGW4C8kWFi5Tc3RSDcbD2FUWoBnXINLfxzMQKPUA5U8BUcN1l-7gsmrIjsxLaoNMhRgicfuo9iPA',
    postedBy: 'Leonardo Di Caprio',
    postDate:'03/02/18',
    address: 'Vicker Grove, L20',
    city: 'Liverpool',
    state: 'NY',
    bedrooms: 5,
    price: 340000,
    floorSpace: 800,
    extras: [
      'pool',
      'gym'
    ],
    houseType: 'bungalow'

  },

  {
    image: 'https://lh3.googleusercontent.com/hWDwzZ1rlZHjFpIE9Wf6p8nQ3BZg343_XgohXigwKWn8LsbhfOlcSb3iAJDKvl1w5Sn1WFItsP4oIpuvaptiswrcUg',
    postedBy: 'Christopher Nolan',
    postDate:'09/04/18',
    address: 'Dob Brook Close, B40',
    city: 'Birmingham',
    state: 'NY',
    bedrooms: 3,
    price: 150000,
    floorSpace: 400,
    extras: [
      'pool',
      'gym'

    ],
    houseType: 'detached'

  },

  {
    image: 'https://lh3.googleusercontent.com/3sZeBpc2evJLZcqTMaomU5cbyvwJSPLPdkxmkLe0ykNYqiboaHCkpQ6Dl2xKQguGoHtm0rv0CggA_u0yzHzrxLnW',
    postedBy: 'The Batman',
    postDate:'15/04/18',
    address: 'Easton Road, L43',
    city: 'London',
    state: 'NY',
    bedrooms: 4,
    price: 250000,
    floorSpace: 350,
    extras: [
      'elevator',
      'pool'
    ],
    houseType: 'flat'

  },

  {
    image: 'https://lh3.googleusercontent.com/Ui1JqWdp8aPn4W_a9RsJeikuJXYLvTTL39S0IzOl8AEH_DKRmYXyW3aU5vv4cRZT24m5n2rj0yzRskBlqUDXRgOlRT8',
    postedBy: 'Nolan North',
    postDate:'17/03/18',
    address: 'Ormonde Avenue, B65',
    city: 'Birmingham',
    state: 'NY',
    bedrooms: 3,
    price: 150000,
    floorSpace: 1200,
    extras: [
      'elevator',
      'gym'

    ],
    houseType: 'flat'

  },

  {
    image: 'https://lh3.googleusercontent.com/IoePPkmZHB74B-TENSgcZXngPydHxvW8pmMi8iH218KgGaL1DDmtR-P0jrYM5gflPGFIrEsRgAqzoMHle_yVwheb',
    postedBy: 'Nina Smith',
    postDate:'10/05/18',
    address: 'Gee Lane, B30',
    city: 'Birmingham',
    state: 'NY',
    bedrooms: 3,
    price: 120000,
    floorSpace: 1000,
    extras: [

      '',
      'gym',
      'elevator'
    ],
    houseType: 'flat'

  },

  {
    image: 'https://lh3.googleusercontent.com/ZmJXUw4692Z3kbVi5F-itxsaBb88e-OuvftesdelHCCxeCx8rS0rZKGsaTn_aC6ZeKHXkI7ZQB5BuxrjlvhGu0mVAA',
    postedBy: 'Will Smith',
    postDate:'22/05/18',
    address: 'Kings Road, Manchester M32',
    city: 'Manchester',
    state: 'NY',
    bedrooms: 5,
    price: 310000,
    floorSpace: 950,
    extras: [
      'pool',
      'gym'
    ],
    houseType: 'semi_detached'

  },

  {
    image: 'https://lh3.googleusercontent.com/2dbbtHz3KjTqAh__xicEd7Btv2FGyk68V6Ifd2vOD8EuR6Y8_rQmcq2uK5v6YDw0twjnqe1m0bIoR1Xiui9E784bVQ',
    postedBy: 'William Natale',
    postDate:'22/05/18',
    address: 'George Street L12',
    city: 'Liverpool',
    state: 'NY',
    bedrooms: 3,
    price: 160000,
    floorSpace: 950,
    extras: [
      'elevator',
      'gym'
    ],
    houseType: 'detached'

  },

  {
    image: 'https://lh3.googleusercontent.com/B4HW7n9I6A8Eb4IJBMj6O53bMlr88o6pY2VTVY-Jzkka-2BNinHQ93yIpNlVCXOePUhzI_AS-FV9kNWSVlYc5pQr0A',
    postedBy: 'Pharell Canto',
    postDate:'02/06/18',
    address: 'Slate Wharf, L15',
    city: 'London',
    state: 'NY',
    bedrooms: 2,
    price: 130000,
    floorSpace: 670,
    extras: [
      '',
      'gym'
    ],
    houseType: 'bungalow'

  },

  {
    image: 'https://lh3.googleusercontent.com/LQ1nwH2FVdADO-EMVkUKsKBXc7P62FDVDlrSSnuoAD45kWpCwz3Hf405laq1UKCvsbeJGlThwNbtTEmnhJi4vjO3cw',
    postedBy: 'Mary Mushima',
    postDate:'11/06/18',
    address: 'Marys Street, London M25',
    city: 'London',
    state: 'NY',
    bedrooms: 4,
    price: 140000,
    floorSpace: 770,
    extras: [
      ''
    ],
    houseType: 'detached'

  },

  {
    image: 'https://lh3.googleusercontent.com/brF0lB7Bh2e84yLzxexuLDuAvBYcd6RcHjuWvN4yRolYUPnWZWy1OENwXJObkw_Fgg7s3RjSQL8eizU81nWmkFTbpA',
    postedBy: 'Simon Yarnom',
    postDate:'12/04/18',
    address: 'Montgomery Street, L25',
    city: 'London',
    state: 'NY',
    bedrooms: 4,
    price: 145000,
    floorSpace: 470,
    extras: [
      ''
    ],
    houseType: 'detached'

  },

  {
    image: 'https://lh3.googleusercontent.com/jyoWx_Sj5V0aASBhTL3MXQM_FkwItX5fhBqd5xSVXc9AeCykGcE6gOwoONlsc_SkhoWsoITf6bKlTEiRjB2QD4oiSQ',
    postedBy: 'Mary Mushima',
    postDate:'21/05/18',
    address: 'Marys Street, B25',
    city: 'Birmingham',
    state: 'NY',
    bedrooms: 4,
    price: 165000,
    floorSpace: 770,
    extras: [
      'pool'
    ],
    houseType: 'bungalow'

  },

  {
    image: 'https://lh3.googleusercontent.com/u7hHg8NBZcR0lWI3E20Lvtyr5StgR9JD-ghLD01xGTo3c4f8MQPkGcZJEwc7DQDSVqtGh6Bd9YX8_eeCBeGz9T7cHQ',
    postedBy: 'Sam Pyre',
    postDate:'22/05/18',
    address: 'Marys Street, Liverpool M25',
    city: 'Liverpool',
    state: 'NY',
    bedrooms: 4,
    price: 165000,
    floorSpace: 770,
    extras: [
      ''
    ],
    houseType: 'detached'

  },

  {
    image: 'https://lh3.googleusercontent.com/gvkVvM3DDEYFvkj8I810Zm0NkgtUcDvVejbDo7Kmvm7OSaRewrtyMulVGb9ENtQ-In9F0x9VpFn7i3OxZZ-xHT9wiTU',
    postedBy: 'Ken Itsuno',
    postDate:'21/05/18',
    address: 'Marys Street, Liverpool L45',
    city: 'Liverpool',
    state: 'NY',
    bedrooms: 4,
    price: 165000,
    floorSpace: 770,
    extras: [
      'pool'
    ],
    houseType: 'terraced'

  },



]

export default listings;