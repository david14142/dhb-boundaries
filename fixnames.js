var fs = require('fs');
var topoJSON = require('./DHB2012.json');
var geo = topoJSON.objects['nz-district-health-boards-2012'].geometries;

for (var i = 0; i < 20 ; i++) {

  switch(geo[i].properties.NAME) {

    case 'Lakes':
      geo[i].properties.DHBCODE = '042';
      break;
    case "Hawke's Bay":
      geo[i].properties.DHBCODE = '061';
      break;
    case 'Auckland':
      geo[i].properties.DHBCODE = '022';
      break;
    case 'Canterbury':
      geo[i].properties.DHBCODE = '121';
      break;
    case 'Waitemata':
      geo[i].properties.DHBCODE = '021';
      break;
    case 'Nelson Marlborough':
      geo[i].properties.DHBCODE = '101';
      break;
    case 'West Coast':
      geo[i].properties.DHBCODE = '111';
      break;
    case 'Waikato':
      geo[i].properties.DHBCODE = '031';
      break;
    case 'Taranaki':
      geo[i].properties.DHBCODE = '071';
      break;
    case 'Hutt':
      geo[i].properties.DHBCODE = '092';
      geo[i].properties.NAME = 'Hutt Valley';
      break;
    case 'South Canterbury':
      geo[i].properties.DHBCODE = '123';
      break;
    case 'Whanganui':
      geo[i].properties.DHBCODE = '082';
      break;
    case 'Capital and Coast':
      geo[i].properties.DHBCODE = '091';
      geo[i].properties.NAME = 'Capital & Coast';
      break;
    case 'Tairawhiti':
      geo[i].properties.DHBCODE = '051';
      break;
    case 'Midcentral':
      geo[i].properties.DHBCODE = '081';
      geo[i].properties.NAME = 'MidCentral';
      break;
    case 'Wairarapa':
      geo[i].properties.DHBCODE = '093';
      break;
    case 'Northland':
      geo[i].properties.DHBCODE = '011';
      break;
    case 'Counties Manukau':
      geo[i].properties.DHBCODE = '023';
      break;
    case 'Southern':
      geo[i].properties.DHBCODE = '160';
      break;
    case 'Bay of Plenty':
      geo[i].properties.DHBCODE = '047';
      break;

    default:
      console.log('Unexpected DHB');

  }

}

jsonString = JSON.stringify(topoJSON);
fs.appendFile("./DHB2012e.json", jsonString, function(err) { if(err) {console.log(err);} });
