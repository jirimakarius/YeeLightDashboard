export default filters;

/** @ngInject */
const filters = angular.module('Filters', [])
  .filter('torgb', () => {
    return input => {
      const int = parseInt(input, 10);
      const red = int >> 16;
      const green = int - (red << 16) >> 8;
      const blue = int - (red << 16) - (green << 8);

      return {
        red,
        green,
        blue
      };
    };
  });
