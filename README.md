LampTest
=========

A PhoneGap-based mobile application for scanning lamp barcode and getting useful information about that particular product, e.g. real measured luminosity, power consumption, etc.

It uses [LampTest](http://lamptest.ru) site as a data source.

Build
-----

```
npm install
bower install
gulp
```

Application building process depends on build.phonegap.com service, so existing build.phonegap.com service account is required.

TODO
----
* Add support for other lamp types (CFL and incandescent, see 0043168179386 and 4895041412655)
* Bug: not possible to press Scan again after lamp was not found
* Bug: Broken "Экотон" entry
* Bug: No images for lamps with Russian words in its model name
* Add filter by base type (E14, E27)