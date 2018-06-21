let http = require('http');
let fs = require('fs');
let iconv = require('iconv-lite');

// Download lamps CSV file
http.get('http://lamptest.ru/led.csv', (response) => {
  let chunks = [];
  response.on('data', function (chunk) {
    chunks.push(chunk);
  });
  response.on('end', function () {
    let csv = iconv.decode(Buffer.concat(chunks), 'win1251');
    let lines = csv.match(/[^\r\n]+/g);
    let lampsArray = [];

    let totalIncomingLamps = lines.length;

    for (let i = 1; i < lines.length; i++) {
      let values = lines[i].split(';');

      // Skip lamps without UPC
      if (!values[8]) {
        continue;
      }

      lampsArray.push({
        id: values[0],
        brand: values[1],
        model: values[2],
        P: values[3],
        link: values[4],
        prop5: values[5],
        price_rur: values[6],
        price_usd: values[7],
        upc: values[8],
        diameter: values[9],
        height: values[10],
        weight: values[11],
        voltage: values[12],
        base_type: values[13],
        class: values[14],
        type: values[15],
        subtype: values[16],
        matte: values[17],
        lm: values[18],
        ekvP: values[19],
        color: values[20],
        ra: values[21],
        age: values[22],
        warranty: values[23],
        manufacture_date: values[24],
        dimmer_support: values[25],
        switch_indicator_support: values[26],
        measured: {
          P: values[27],
          lm: values[28],
          ekvP: values[29],
          color: values[30],
          cri: values[31],
          cqs: values[32],
          r9: values[33],
          angle: values[34],
          pulsation: values[35],
          pf: values[36]
        },
        test_date: values[37],
        rating: values[38],
        min_voltage: values[39],
        driver: values[40],
        temp_max: values[41],
        relevant: values[42]
      });
    }

    lampsArray = lampsArray.sort(function (a, b) {
      let first = a.brand.toUpperCase() + a.model.toUpperCase();
      let second = b.brand.toUpperCase() + b.model.toUpperCase();
      if (first < second) {
        return -1;
      }

      if (first > second) {
        return 1;
      }

      return 0;
    });

    let totalLampsWithUpc = lampsArray.length;

    let lampsJson = {};
    for (let i = 1; i < lampsArray.length; i++) {
      let upc = lampsArray[i].upc;
      if (!lampsJson[upc]) {
        lampsJson[upc] = [];
      }
      else {
        console.log('Duplicate UPC: ' + upc);
      }
      lampsJson[upc].push(lampsArray[i]);
    }

    console.log('Total entries in CSV file: ' + totalIncomingLamps);
    console.log('Total lamps with UPC: ' + totalLampsWithUpc);

    fs.writeFile('../src/assets/data.js', 'var data = ' + JSON.stringify(lampsJson) + ';', (err) => {
      if(err) {
        return console.log(err);
      }

      return console.log('DB updated.');
    });
  });
});
