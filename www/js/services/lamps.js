(function () {

  'use strict';

  angular.module('lampTest')
    .service('Lamps', Lamps);


  function Lamps () {
    var service = this;

    var list = [];

    service.getList = getList;

    initList();

    /**
     * @ngdoc function
     * @name getList
     * @methodOf Lamps
     *
     * @description
     * Returns a list of available lamps.
     */
    function getList() {
      return list;
    }

    function initList() {
      if (window.data) {
        for (var upc in window.data) {
          if (window.data.hasOwnProperty(upc)) {
            var title = window.data[upc].brand + ' ' + window.data[upc].model;
            if (title) {
              list.push({
                title: title,
                upc: upc,
                normalizedTitle: title.toLowerCase()
              });
            }
          }
        }
      }
    }
  }

})();
