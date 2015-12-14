function ScanCtrl() {
  var self = this;

  self.scanBarcode = function() {
    if (!window.cordova || !window.cordova.plugins || !window.cordova.plugins.barcodeScanner) {
      alert('Barcode scanner not available');
      return;
    }

    window.cordova.plugins.barcodeScanner.scan(
      function (result) {
        alert("We got a barcode\n" +
          "Result: " + result.text + "\n" +
          "Format: " + result.format + "\n" +
          "Cancelled: " + result.cancelled);
      },
      function (error) {
        alert("Scanning failed: " + error);
      }
    );
  };

  self.lookupBarcode = function(barcode) {
    // Make request to www.ean-search.org here
    // 'http://www.ean-search.org/perl/ean-search.pl?q=' + barcode
  }
}

angular.module('lampTest')
  .controller('ScanCtrl', ScanCtrl);