webpackJsonp([0],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var listings = [{

  image: 'http://thaivillageaf.com/wp-content/uploads/modern-apartment-bedroom-brown-wooden-table-composite-kitchen-sink-grey-beige-color-covered-bedding-sheets-cream-laminated-floor-glass-shelf-striped-pattern-frieze-rug-white-laminated-wooden-study-desk.jpg',
  postedBy: 'Nina Williams',
  postDate: '05/05/18',
  address: 'Mauldeth Road M14',
  city: 'Manchester',
  bedrooms: 4,
  price: 220000,
  floorSpace: 1000,
  extras: [],
  houseType: 'bungalow'

}, {
  image: 'http://www.bestofinteriors.com/wp-content/uploads/2014/11/229f6__design-modern-crib.jpg',
  postedBy: 'Nathan Drake',
  postDate: '25/05/18',
  address: 'Cambridge Road M35',
  city: 'Manchester',
  bedrooms: 2,
  price: 140000,
  floorSpace: 500,
  extras: [],
  houseType: 'terraced'

}, {
  image: 'http://www.marvelbuilding.com/wp-content/uploads/2011/02/grey-living-room-Luxury-Remodeled-Apartment-Iteriors.jpg',
  postedBy: 'Leonardo Di Caprio',
  postDate: '03/02/18',
  address: 'Vicker Grove, L20',
  city: 'Liverpool',
  state: 'NY',
  bedrooms: 5,
  price: 340000,
  floorSpace: 800,
  extras: ['pool'],
  houseType: 'bungalow'

}, {
  image: 'https://www.decoraid.com/wp-content/uploads/1/projects/four.seasons.san.francisco.living.room.jpg',
  postedBy: 'Christopher Nolan',
  postDate: '09/04/18',
  address: 'Dob Brook Close, B40',
  city: 'Birmingham',
  state: 'NY',
  bedrooms: 3,
  price: 150000,
  floorSpace: 400,
  extras: ['pool'],
  houseType: 'detached'

}, {
  image: 'http://leracome.com/wp-content/uploads/2018/04/charming-small-modern-living-room-design-throughout-ideas-for-worthy.jpg',
  postedBy: 'The Batman',
  postDate: '15/04/18',
  address: 'Easton Road, L43',
  city: 'London',
  state: 'NY',
  bedrooms: 4,
  price: 250000,
  floorSpace: 350,
  extras: ['elevator', 'pool'],
  houseType: 'flat'

}, {
  image: 'https://cdn.freshome.com/wp-content/uploads/2012/02/modern-apartment-Russia-4.jpg',
  postedBy: 'Nolan North',
  postDate: '17/03/18',
  address: 'Ormonde Avenue, B6',
  city: 'Birmingham',
  state: 'NY',
  bedrooms: 3,
  price: 150000,
  floorSpace: 1200,
  extras: ['elevator', 'gym'],
  houseType: 'flat'

}, {
  image: 'http://cdn.bestdesignideas.com/wp-content/uploads/2016/05/Interior-Of-Modern-Apartments-In-Tel-Aviv-From-Iryna-Dzhemesiuk-10.jpg',
  postedBy: 'Nina Smith',
  postDate: '10/05/18',
  address: 'Gee Lane, B30',
  city: 'Birmingham',
  state: 'NY',
  bedrooms: 3,
  price: 120000,
  floorSpace: 1000,
  extras: ['gym', 'elevator'],
  houseType: 'flat'

}, {
  image: 'https://architecturebeast.com/wp-content/uploads/2014/08/Top_50_Modern_House_Designs_Ever_Built_featured_on_architecture_beast_15.jpg',
  postedBy: 'Will Smith',
  postDate: '22/05/18',
  address: 'Kings Road, Stretford, Manchester M32',
  city: 'Manchester',
  state: 'NY',
  bedrooms: 5,
  price: 310000,
  floorSpace: 950,
  extras: ['pool', 'gym'],
  houseType: 'semi_detached'

}];

exports.default = listings;

/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(33);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(98);

var _Header2 = _interopRequireDefault(_Header);

var _Filter = __webpack_require__(97);

var _Filter2 = _interopRequireDefault(_Filter);

var _Listings = __webpack_require__(99);

var _Listings2 = _interopRequireDefault(_Listings);

var _ListingsData = __webpack_require__(100);

var _ListingsData2 = _interopRequireDefault(_ListingsData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.onInputChange = function (e) {

      var name = e.target.name;
      var value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

      _this.setState(_defineProperty({}, name, value), function () {
        console.log(_this.state);
        _this.onPriceChange();
        _this.onFloorSpaceChange();
        _this.onFilterData();
      });
    };

    _this.onFilterData = function () {

      var newData = _this.state.listingsData.filter(function (listing) {

        return listing.price >= _this.state.min_price && listing.price <= _this.state.max_price;
      });

      //by floor space
      if (_this.state.max_floor_space) {
        newData = newData.filter(function (listing) {
          return listing.floorSpace <= parseInt(_this.state.max_floor_space);
        });
      }

      //by city
      if (_this.state.city) {
        newData = newData.filter(function (listing) {
          return listing.city === _this.state.city;
        });
      }

      //by housetype
      if (_this.state.housetype) {
        newData = newData.filter(function (listing) {
          return listing.houseType === _this.state.housetype;
        });
      }

      //by bedrooms
      if (_this.state.bedrooms) {

        if (_this.state.bedrooms === 'more_than_4') {

          newData = newData.filter(function (listing) {
            return listing.bedrooms > 4;
          });
        } else {
          newData = newData.filter(function (listing) {
            return listing.bedrooms + '' === _this.state.bedrooms;
          });
        }
      }

      //by extras-elevator
      if (_this.state.elevator) {
        newData = newData.filter(function (listing) {

          return listing.extras.includes('elevator');
        });
      }

      //by extras-swimming pool
      if (_this.state.swimming_pool) {
        newData = newData.filter(function (listing) {

          return listing.extras.includes('pool');
        });
      }

      //by extras-gym
      if (_this.state.gym) {
        newData = newData.filter(function (listing) {

          return listing.extras.includes('gym');
        });
      }

      //setting state to newData
      _this.setState({
        filteredData: newData
      });
    };

    _this.onPriceChange = function () {

      if (parseInt(_this.state.min_price) > parseInt(_this.state.max_price)) {

        _this.setState({
          priceError: true
        });
      } else {

        _this.setState({

          priceError: false

        });
      }
    };

    _this.onFloorSpaceChange = function () {

      if (parseInt(_this.state.min_floor_space) > parseInt(_this.state.max_floor_space)) {

        _this.setState({
          floorSpaceError: true
        });
      } else {

        _this.setState({

          floorSpaceError: false

        });
      }
    };

    _this.state = {
      name: 'Drew',
      listingsData: _ListingsData2.default,
      min_price: 0,
      max_price: 500000,
      min_floor_space: 0,
      floorSpaceError: false,
      priceError: false,
      isGridView: true,
      isListView: false,
      filteredData: _ListingsData2.default
    };

    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {

      // console.log(this.state)
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, { name: 'Andrews' }),
        _react2.default.createElement(
          'section',
          { id: 'content-area' },
          _react2.default.createElement(_Filter2.default, { onInputChange: this.onInputChange, globalState: this.state }),
          _react2.default.createElement(_Listings2.default, { listingsData: this.state.filteredData })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(App, null), app);

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_Component) {
  _inherits(Filter, _Component);

  function Filter() {
    _classCallCheck(this, Filter);

    var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(Filter, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'section',
        { id: 'filter' },
        _react2.default.createElement(
          'div',
          { className: 'inside' },
          _react2.default.createElement(
            'h4',
            null,
            'Filter'
          ),
          _react2.default.createElement(
            'span',
            { className: 'filter_by_city' },
            'City'
          ),
          _react2.default.createElement(
            'select',
            { name: 'city', className: 'filters city', onChange: this.props.onInputChange },
            _react2.default.createElement('option', { value: '' }),
            _react2.default.createElement(
              'option',
              { value: 'Manchester' },
              'Manchester'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Liverpool' },
              'Liverpool'
            ),
            _react2.default.createElement(
              'option',
              { value: 'London' },
              'London'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Birmingham' },
              'Birmingham'
            )
          ),
          _react2.default.createElement(
            'span',
            { className: 'filter_by_housetype' },
            'House Type'
          ),
          _react2.default.createElement(
            'select',
            { name: 'housetype', className: 'filters housetype', onChange: this.props.onInputChange },
            _react2.default.createElement('option', { value: '' }),
            _react2.default.createElement(
              'option',
              { value: 'flat' },
              'Flat'
            ),
            _react2.default.createElement(
              'option',
              { value: 'detached' },
              'Detached'
            ),
            _react2.default.createElement(
              'option',
              { value: 'semi_detached' },
              'Semi-Detached'
            ),
            _react2.default.createElement(
              'option',
              { value: 'terraced' },
              'Terraced'
            ),
            _react2.default.createElement(
              'option',
              { value: 'bungalow' },
              'Bungalow'
            )
          ),
          _react2.default.createElement(
            'span',
            { className: 'filter_by_numberOfBedrooms' },
            'Bedrooms'
          ),
          _react2.default.createElement(
            'select',
            { name: 'bedrooms', className: 'filters bedrooms', onChange: this.props.onInputChange },
            _react2.default.createElement('option', { value: '' }),
            _react2.default.createElement(
              'option',
              { value: '2' },
              '2 Bedrooms'
            ),
            _react2.default.createElement(
              'option',
              { value: '3' },
              '3 Bedrooms'
            ),
            _react2.default.createElement(
              'option',
              { value: '4' },
              '4 Bedrooms'
            ),
            _react2.default.createElement(
              'option',
              { value: 'more_than_4' },
              'More than 4 Bedrooms'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'filters price price-filter' },
            _react2.default.createElement(
              'span',
              { className: 'title' },
              'Price'
            ),
            this.props.globalState.priceError && _react2.default.createElement(
              'p',
              { className: 'price-error' },
              'Min price cannot be higher than Max price'
            ),
            _react2.default.createElement('input', { type: 'number', name: 'min_price', className: 'min-price', placeholder: 'from:', value: this.props.globalState.min_price, onChange: this.props.onInputChange }),
            _react2.default.createElement('input', { type: 'number', name: 'max_price', className: 'max-price', placeholder: 'to:', onChange: this.props.onInputChange })
          ),
          _react2.default.createElement(
            'div',
            { className: 'filters floor-space-filter' },
            _react2.default.createElement(
              'span',
              { className: 'title' },
              'Floor Space in ft\xB2'
            ),
            this.props.globalState.floorSpaceError && _react2.default.createElement(
              'p',
              { className: 'floor-space-error' },
              'Min Floor Space cannot be higher than Max Floor Space'
            ),
            _react2.default.createElement('input', { type: 'number', name: 'min_floor_space', className: 'min-floor-space', value: this.props.globalState.min_price, placeholder: 'from:', onChange: this.props.onInputChange }),
            _react2.default.createElement('input', { type: 'number', name: 'max_floor_space', className: 'max-floor-space', placeholder: 'to:', onChange: this.props.onInputChange })
          ),
          _react2.default.createElement(
            'div',
            { className: 'filters extras' },
            _react2.default.createElement(
              'span',
              { className: 'title ' },
              'Extras'
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'extras' },
              _react2.default.createElement(
                'span',
                null,
                'Elevator'
              ),
              _react2.default.createElement('input', { name: 'elevator', value: 'elevator', type: 'checkbox', onChange: this.props.onInputChange })
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'extras' },
              _react2.default.createElement(
                'span',
                null,
                'Swimming Pool'
              ),
              _react2.default.createElement('input', { name: 'swimming_pool', value: 'swimming-pool', type: 'checkbox', onChange: this.props.onInputChange })
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'extras' },
              _react2.default.createElement(
                'span',
                null,
                'Gym'
              ),
              _react2.default.createElement('input', { name: 'gym', value: 'gym', type: 'checkbox', onChange: this.props.onInputChange })
            )
          )
        )
      );
    }
  }]);

  return Filter;
}(_react.Component);

exports.default = Filter;

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = {
      name: 'Joe'
    };
    return _this;
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'header',
        null,
        _react2.default.createElement(
          'div',
          { className: 'logo' },
          'logo'
        ),
        _react2.default.createElement(
          'nav',
          null,
          _react2.default.createElement(
            'a',
            { href: '#' },
            'create ads'
          ),
          _react2.default.createElement(
            'a',
            { href: '#' },
            'About us'
          ),
          _react2.default.createElement(
            'a',
            { href: '#' },
            'Log in'
          ),
          _react2.default.createElement(
            'a',
            { href: '#', className: 'register-btn' },
            'Register'
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(36);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var currencyFormatter = __webpack_require__(106);

var Listings = function (_Component) {
  _inherits(Listings, _Component);

  function Listings(props) {
    _classCallCheck(this, Listings);

    return _possibleConstructorReturn(this, (Listings.__proto__ || Object.getPrototypeOf(Listings)).call(this, props));
  }

  _createClass(Listings, [{
    key: 'render',
    value: function render() {

      //console.log(this.props);

      var listingItems = this.props.listingsData.map(function (listingItem, i) {

        var userListingImageUrl = 'https://architecturebeast.com/wp-content/uploads/2014/08/Top_50_Modern_House_Designs_Ever_Built_featured_on_architecture_beast_15.jpg';

        var listingUserImageStyle = {
          backgroundImage: 'url(' + userListingImageUrl + ')'

        };

        //listing image
        var listingBackground = listingItem.image;

        var listingImageStyle = {
          backgroundImage: 'url(' + listingBackground + ')'
        };

        return _react2.default.createElement(
          'div',
          { className: 'listing', key: i },
          _react2.default.createElement(
            'div',
            { className: 'listing-img', style: listingImageStyle },
            _react2.default.createElement(
              'span',
              { className: 'address' },
              listingItem.address
            ),
            _react2.default.createElement(
              'div',
              { className: 'details' },
              _react2.default.createElement('div', { className: 'user-img', style: listingUserImageStyle }),
              _react2.default.createElement(
                'div',
                { className: 'user-details' },
                _react2.default.createElement(
                  'span',
                  { className: 'user-name' },
                  listingItem.postedBy
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'post-date' },
                  'Posted on ',
                  listingItem.postDate
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'listing-details' },
                _react2.default.createElement(
                  'div',
                  { className: 'floor-space' },
                  _react2.default.createElement(
                    'span',
                    null,
                    listingItem.floorSpace,
                    'ft\xB2'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'bedrooms' },
                  _react2.default.createElement('i', { className: 'fa fa-bed', 'aria-hidden': 'true' }),
                  _react2.default.createElement(
                    'span',
                    null,
                    listingItem.bedrooms,
                    ' bedrooms'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'view-listing-btn' },
                _react2.default.createElement(
                  'button',
                  null,
                  _react2.default.createElement(
                    'a',
                    { href: '#' },
                    'View listing'
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'bottom-info' },
            _react2.default.createElement(
              'span',
              { className: 'property-price' },
              currencyFormatter.format(listingItem.price, { code: 'GBP' }),
              ' '
            ),
            _react2.default.createElement(
              'span',
              { className: 'property-location' },
              _react2.default.createElement('i', { className: 'fa fa-map-marker', 'aria-hidden': 'true' }),
              ' ',
              listingItem.city,
              ' '
            )
          )
        );
      });

      return _react2.default.createElement(
        'section',
        { id: 'listings' },
        _react2.default.createElement(
          'section',
          { className: 'search-area' },
          _react2.default.createElement('input', { type: 'text', name: 'search', placeholder: 'Search...' })
        ),
        this.props.listingsData.length < 1 && _react2.default.createElement(
          'p',
          null,
          'No Listings Found'
        ),
        _react2.default.createElement(
          'section',
          { className: 'sortby-area' },
          _react2.default.createElement(
            'div',
            { className: 'results' },
            this.props.listingsData.length,
            ' results found'
          ),
          _react2.default.createElement(
            'div',
            { className: 'sort-options' },
            _react2.default.createElement(
              'select',
              { name: 'sortby', className: 'sortby' },
              _react2.default.createElement(
                'option',
                { value: 'price-asc' },
                'Highest price first'
              ),
              _react2.default.createElement(
                'option',
                { value: 'price-dsc' },
                'Lowest price first'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'view' },
              _react2.default.createElement('i', { className: 'fa fa-th-list', 'aria-hidden': 'true' }),
              _react2.default.createElement('i', { className: 'fa fa-th', 'aria-hidden': 'true' })
            )
          )
        ),
        _react2.default.createElement(
          'section',
          { className: 'listings-results' },
          listingItems
        ),
        _react2.default.createElement(
          'section',
          { className: 'pagination' },
          _react2.default.createElement(
            'ul',
            { className: 'pages' },
            _react2.default.createElement(
              'li',
              null,
              'Prev'
            ),
            _react2.default.createElement(
              'li',
              { className: 'active-page' },
              '1'
            ),
            _react2.default.createElement(
              'li',
              null,
              '2'
            ),
            _react2.default.createElement(
              'li',
              null,
              '3'
            ),
            _react2.default.createElement(
              'li',
              null,
              '4'
            ),
            _react2.default.createElement(
              'li',
              null,
              'Next'
            )
          )
        )
      );
    }
  }]);

  return Listings;
}(_react.Component);

Listings.propTypes = {
  listingsData: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    image: _propTypes2.default.string,
    postedBy: _propTypes2.default.string,
    postDate: _propTypes2.default.string,
    address: _propTypes2.default.string,
    city: _propTypes2.default.string,
    bedrooms: _propTypes2.default.number,
    price: _propTypes2.default.number,
    floorSpace: _propTypes2.default.number,
    extras: _propTypes2.default.arrayOf(_propTypes2.default.string),
    houseType: _propTypes2.default.string
  }))

};
Listings.defaultProps = {
  listingsData: []
};
exports.default = Listings;

/***/ })

},[103]);