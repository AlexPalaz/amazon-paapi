const amazonPaapi = require('amazon-paapi');
const ck = require('ckey'); // access .env variables


const commonParameters = { 
  'AccessKey'  : ck.AWS_ACCESS_KEY,
  'SecretKey'  : ck.AWS_SECRET_KEY,
  'PartnerTag' : ck.AWS_TAG, // yourtag-20
  'PartnerType': 'Associates', // Optional. Default value is Associates. 
  'Marketplace': 'www.amazon.com' // Optional. Default value is US.
}

const requestParameters = {
    'ASIN' : 'B07H65KP63',
    'Resources' : [
        'Images.Primary.Medium',
        'ItemInfo.Title',
        'Offers.Listings.Price',
        'VariationSummary.VariationDimension'
      ]
};

/** Promise */
amazonPaapi.GetVariations(commonParameters, requestParameters)
    .then(data => {
        // do something with the success response.
        console.log(data);
    })
    .catch(error => {
        // catch an error.
        console.log(error)
    });
