'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.records = undefined;

var _reselect = require('reselect');

var recordsSelector = function recordsSelector(state, props) {
  return state.records;
};

var sortSelector = function sortSelector(state, props) {
  return state.sort;
};

var records = exports.records = (0, _reselect.createSelector)(recordsSelector, sortSelector, function (records, sort) {
  if (!records) return null;
  return records.sort(function (a, b) {
    var aValue = a[sort.key];
    var bValue = b[sort.key];
    if (sort.order === 'asc' && aValue < bValue) return -1;
    if (sort.order === 'asc' && aValue > bValue) return 1;
    if (sort.order === 'desc' && aValue > bValue) return -1;
    if (sort.order === 'desc' && aValue < bValue) return 1;
    return 0;
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsicmVjb3Jkc1NlbGVjdG9yIiwic3RhdGUiLCJwcm9wcyIsInJlY29yZHMiLCJzb3J0U2VsZWN0b3IiLCJzb3J0IiwiYSIsImIiLCJhVmFsdWUiLCJrZXkiLCJiVmFsdWUiLCJvcmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBLElBQU1BLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFRQyxLQUFSO0FBQUEsU0FBa0JELE1BQU1FLE9BQXhCO0FBQUEsQ0FBeEI7O0FBRUEsSUFBTUMsZUFBZSxTQUFmQSxZQUFlLENBQUNILEtBQUQsRUFBUUMsS0FBUjtBQUFBLFNBQWtCRCxNQUFNSSxJQUF4QjtBQUFBLENBQXJCOztBQUVPLElBQU1GLDRCQUFVLDhCQUNyQkgsZUFEcUIsRUFFckJJLFlBRnFCLEVBR3JCLFVBQUNELE9BQUQsRUFBVUUsSUFBVixFQUFtQjtBQUNqQixNQUFHLENBQUNGLE9BQUosRUFBYSxPQUFPLElBQVA7QUFDYixTQUFPQSxRQUFRRSxJQUFSLENBQWEsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFDNUIsUUFBTUMsU0FBU0YsRUFBRUQsS0FBS0ksR0FBUCxDQUFmO0FBQ0EsUUFBTUMsU0FBU0gsRUFBRUYsS0FBS0ksR0FBUCxDQUFmO0FBQ0EsUUFBR0osS0FBS00sS0FBTCxLQUFlLEtBQWYsSUFBd0JILFNBQVNFLE1BQXBDLEVBQTRDLE9BQU8sQ0FBQyxDQUFSO0FBQzVDLFFBQUdMLEtBQUtNLEtBQUwsS0FBZSxLQUFmLElBQXdCSCxTQUFTRSxNQUFwQyxFQUE0QyxPQUFPLENBQVA7QUFDNUMsUUFBR0wsS0FBS00sS0FBTCxLQUFlLE1BQWYsSUFBeUJILFNBQVNFLE1BQXJDLEVBQTZDLE9BQU8sQ0FBQyxDQUFSO0FBQzdDLFFBQUdMLEtBQUtNLEtBQUwsS0FBZSxNQUFmLElBQXlCSCxTQUFTRSxNQUFyQyxFQUE2QyxPQUFPLENBQVA7QUFDN0MsV0FBTyxDQUFQO0FBQ0QsR0FSTSxDQUFQO0FBU0QsQ0Fkb0IsQ0FBaEIiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSAncmVzZWxlY3QnXG5cbmNvbnN0IHJlY29yZHNTZWxlY3RvciA9IChzdGF0ZSwgcHJvcHMpID0+IHN0YXRlLnJlY29yZHNcblxuY29uc3Qgc29ydFNlbGVjdG9yID0gKHN0YXRlLCBwcm9wcykgPT4gc3RhdGUuc29ydFxuXG5leHBvcnQgY29uc3QgcmVjb3JkcyA9IGNyZWF0ZVNlbGVjdG9yKFxuICByZWNvcmRzU2VsZWN0b3IsXG4gIHNvcnRTZWxlY3RvcixcbiAgKHJlY29yZHMsIHNvcnQpID0+IHtcbiAgICBpZighcmVjb3JkcykgcmV0dXJuIG51bGxcbiAgICByZXR1cm4gcmVjb3Jkcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICBjb25zdCBhVmFsdWUgPSBhW3NvcnQua2V5XVxuICAgICAgY29uc3QgYlZhbHVlID0gYltzb3J0LmtleV1cbiAgICAgIGlmKHNvcnQub3JkZXIgPT09ICdhc2MnICYmIGFWYWx1ZSA8IGJWYWx1ZSkgcmV0dXJuIC0xXG4gICAgICBpZihzb3J0Lm9yZGVyID09PSAnYXNjJyAmJiBhVmFsdWUgPiBiVmFsdWUpIHJldHVybiAxXG4gICAgICBpZihzb3J0Lm9yZGVyID09PSAnZGVzYycgJiYgYVZhbHVlID4gYlZhbHVlKSByZXR1cm4gLTFcbiAgICAgIGlmKHNvcnQub3JkZXIgPT09ICdkZXNjJyAmJiBhVmFsdWUgPCBiVmFsdWUpIHJldHVybiAxXG4gICAgICByZXR1cm4gMFxuICAgIH0pXG4gIH1cbilcbiJdfQ==