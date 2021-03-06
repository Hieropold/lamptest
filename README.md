LampTest
=========

A PhoneGap-based mobile application for scanning lamp barcode and getting useful information about that particular product, e.g. real measured luminosity, power consumption, etc.

It uses [LampTest](http://lamptest.ru) site as a data source.

Build
-----

```
npm install
ionic cordova android build --release --prod
```

Update lamps DB
---------------

```
npm run update-db
```

TODO
----
* Add search by barcode
* Add new content from lamptest (https://geektimes.ru/company/lamptest/blog/286460/)
* Add support for other lamp types (CFL and incandescent, see 0043168179386 and 4895041412655)
* Bug: not possible to press Scan again after lamp was not found
* Add filter by base type (E14, E27)
* Add tooltips for all parameters (some info about the meaning of lamp parameter)
* Add lamp rating to the list, near the lamp title.
* Update lamps dynamically.
* Move values representation logic to the lamp template from lamp model.
* On Android 6 the app reports that barcode is not supported before it asks for permission to use camera
* Add sorting by lamp rating
* Add lamps without UPC to the lamps list
* Moment lib should be installed by npm and used in TS
