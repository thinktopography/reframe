'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _pluralize = require('pluralize');

var _pluralize2 = _interopRequireDefault(_pluralize);

var _filter = require('../filter');

var _filter2 = _interopRequireDefault(_filter);

var _table = require('../table');

var _table2 = _interopRequireDefault(_table);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Collection = function (_React$Component) {
  _inherits(Collection, _React$Component);

  function Collection() {
    _classCallCheck(this, Collection);

    return _possibleConstructorReturn(this, (Collection.__proto__ || Object.getPrototypeOf(Collection)).apply(this, arguments));
  }

  _createClass(Collection, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          all = _props.all,
          columns = _props.columns,
          empty = _props.empty,
          entity = _props.entity,
          filters = _props.filters,
          layout = _props.layout,
          records = _props.records,
          status = _props.status;

      if (status === 'completed' && all === 0) {
        if (empty) {
          return _react2.default.createElement(
            'div',
            { className: 'reframe-collection' },
            empty.component ? _react2.default.createElement(
              'div',
              { className: 'reframe-collection-empty' },
              _lodash2.default.isFunction(empty.component) ? _react2.default.createElement(empty.component) : empty.component
            ) : _react2.default.createElement(
              'div',
              { className: 'reframe-collection-empty' },
              _react2.default.createElement(
                'div',
                { className: 'reframe-collection-empty-message' },
                empty.icon && _react2.default.createElement(
                  'h2',
                  null,
                  _react2.default.createElement('i', { className: 'circular ' + empty.icon + ' icon' })
                ),
                empty.title ? _react2.default.createElement(
                  'h3',
                  null,
                  empty.title
                ) : _react2.default.createElement(
                  'h3',
                  null,
                  'No ',
                  _lodash2.default.startCase((0, _pluralize2.default)(entity.replace('_', ' ')))
                ),
                empty.message ? _react2.default.createElement(
                  'p',
                  null,
                  empty.message
                ) : _react2.default.createElement(
                  'p',
                  null,
                  'You have not yet created any ',
                  (0, _pluralize2.default)(entity.replace('_', ' '))
                ),
                empty.modal && _react2.default.createElement(
                  'div',
                  { className: 'ui basic button', onClick: this._handleAddNew.bind(this) },
                  _react2.default.createElement('i', { className: 'plus icon' }),
                  'Create New ',
                  _lodash2.default.startCase(entity.replace('_', ' '))
                )
              )
            )
          );
        } else {
          return _react2.default.createElement(
            'div',
            { className: 'reframe-collection' },
            _react2.default.createElement(
              'div',
              { className: 'reframe-collection-empty' },
              _react2.default.createElement(
                'div',
                { className: 'reframe-collection-empty-message' },
                _react2.default.createElement(
                  'h3',
                  null,
                  'No Results Found'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'There are no ',
                  (0, _pluralize2.default)(entity.replace('_', ' '))
                )
              )
            )
          );
        }
      } else {
        return _react2.default.createElement(
          'div',
          { className: 'reframe-collection' },
          _react2.default.createElement(
            'div',
            { className: 'reframe-collection-layout' },
            filters && _react2.default.createElement(
              'div',
              { className: 'reframe-collection-header' },
              _react2.default.createElement(_filter2.default, this._getFilter())
            ),
            status === 'loading' && records.length === 0 && _react2.default.createElement(
              'div',
              { className: 'reframe-loader' },
              _react2.default.createElement(
                'div',
                { className: 'ui active inverted dimmer' },
                _react2.default.createElement(
                  'div',
                  { className: 'ui large text loader' },
                  'Loading'
                )
              )
            ),
            status !== 'failure' && records.length > 0 && columns && _react2.default.createElement(_table2.default, this._getTable()),
            status !== 'failure' && records.length > 0 && layout && _react2.default.createElement(layout, _extends({}, this._getLayout())),
            status === 'completed' && records.length === 0 && _react2.default.createElement(
              'div',
              { className: 'reframe-collection-empty' },
              _react2.default.createElement(
                'div',
                { className: 'reframe-collection-empty-message' },
                _react2.default.createElement(
                  'h2',
                  null,
                  _react2.default.createElement('i', { className: 'circular remove icon' })
                ),
                _react2.default.createElement(
                  'h3',
                  null,
                  'No Results Found'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'No records matched your query'
                )
              )
            ),
            status === 'failure' && _react2.default.createElement(
              'div',
              { className: 'reframe-error' },
              _react2.default.createElement(
                'div',
                { className: 'reframe-error-message' },
                _react2.default.createElement('i', { className: 'warning sign icon' }),
                _react2.default.createElement(
                  'h2',
                  null,
                  'Unable to load',
                  _react2.default.createElement('br', null),
                  ' records'
                )
              )
            ),
            status === 'loading' && records.length > 0 && _react2.default.createElement(
              'div',
              { className: 'reframe-collection-loader' },
              _react2.default.createElement(
                'div',
                { className: 'ui active inverted dimmer' },
                _react2.default.createElement('div', { className: 'ui small loader' })
              )
            )
          )
        );
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props2 = this.props,
          data = _props2.data,
          endpoint = _props2.endpoint,
          onSetRecords = _props2.onSetRecords;

      var filter = this.props.filter || {};
      var sort = this.props.sort || { key: 'created_at', order: 'desc' };
      this.props.onSetParams(filter, sort);
      if (data) onSetRecords(data);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var params = this.props.params;

      if (!_lodash2.default.isEqual(prevProps.params, params)) {
        this._handleFetch(0);
      }
    }
  }, {
    key: '_getFilter',
    value: function _getFilter() {
      var _props3 = this.props,
          filters = _props3.filters,
          params = _props3.params,
          onFilter = _props3.onFilter;

      return {
        fields: filters,
        filters: params.filter,
        onChange: onFilter
      };
    }
  }, {
    key: '_getTable',
    value: function _getTable() {
      var _props4 = this.props,
          columns = _props4.columns,
          handler = _props4.handler,
          link = _props4.link,
          modal = _props4.modal,
          params = _props4.params,
          records = _props4.records,
          status = _props4.status,
          onSort = _props4.onSort;
      var sort = params.sort;

      return {
        columns: columns,
        export: this.props.export,
        handler: handler,
        link: link,
        modal: modal,
        records: records,
        sort: sort,
        status: status,
        onLoadMore: this._handleFetch.bind(this),
        onSort: this._handleSort.bind(this)
      };
    }
  }, {
    key: '_getLayout',
    value: function _getLayout() {
      var _props5 = this.props,
          records = _props5.records,
          sort = _props5.sort,
          status = _props5.status;

      return {
        records: records,
        sort: sort,
        status: status,
        onLoadMore: this._handleFetch.bind(this),
        onSort: this._handleSort.bind(this)
      };
    }
  }, {
    key: '_handleSort',
    value: function _handleSort(key) {
      this.props.onSort(key);
    }
  }, {
    key: '_handleFetch',
    value: function _handleFetch() {
      var skip = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var _props6 = this.props,
          endpoint = _props6.endpoint,
          records = _props6.records,
          params = _props6.params,
          total = _props6.total,
          onFetch = _props6.onFetch;

      if (!endpoint) return;
      var filter = params.filter,
          sort = params.sort;

      var loaded = records.length;
      var $page = { skip: skip !== null ? skip : loaded };
      var query = { $page: $page };
      if (filter) query.$filter = filter;
      if (sort.key) query.$sort = (sort.order === 'desc' ? '-' : '') + sort.key;
      if (skip === 0 || loaded < total) onFetch(endpoint, query);
    }
  }, {
    key: '_handleAddNew',
    value: function _handleAddNew() {
      this.context.modal.open(this.props.empty.modal);
    }
  }]);

  return Collection;
}(_react2.default.Component);

Collection.contextTypes = {
  modal: _propTypes2.default.object
};
Collection.PropTypes = {
  all: _propTypes2.default.number,
  columns: _propTypes2.default.array,
  data: _propTypes2.default.array,
  entity: _propTypes2.default.object,
  empty: _propTypes2.default.shape({
    icon: _propTypes2.default.string,
    message: _propTypes2.default.string,
    modal: _propTypes2.default.func
  }),
  filter: _propTypes2.default.object,
  filters: _propTypes2.default.array,
  handler: _propTypes2.default.func,
  layout: _propTypes2.default.func,
  link: _propTypes2.default.string,
  modal: _propTypes2.default.string,
  params: _propTypes2.default.object,
  records: _propTypes2.default.array,
  sort: _propTypes2.default.object,
  total: _propTypes2.default.number
};
Collection.defaultProps = {
  entity: 'record'
};
exports.default = Collection;