function ScanCtrl($cordovaBarcodeScanner) {
  var self = this;

  self.scanBarcode = function() {
    $cordovaBarcodeScanner.scan().then(function(imageData) {
      alert(imageData.text);
      console.log("Barcode Format -> " + imageData.format);
      console.log("Cancelled -> " + imageData.cancelled);
    }, function(error) {
      console.log("An error happened -> " + error);
    });
  };
}

angular.module('lampTest')
  .controller('ScanCtrl', ScanCtrl);