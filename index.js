var axios = require('axios');

var ethplorerBaseUrl = 'http://api.ethplorer.io/';
var weeklyTokenRaceStoreBaseUrl = 'http://localhost:3000/';

var ethplorerParams = { apiKey: 'freekey' };
var weeklyTokenRaceStoreParams = {};

/**
  * Call axios get
  * @param {string} url server url
  * @param {object} params URL params
  * @return {Promise<object, Error>}
  */
function fetch (url, params) {
  if (!params) {
    throw new Error('params is required');
  }

  if (!url) {
    throw new Error('url is required');
  }

  return axios.get(url, {
    params: params
  })
    .then(function (res) {
      if (res.status !== 200) {
        throw new Error(res.status + ' ' + res.statusText);
      }
      return res.data;
    })
    .catch(function (err) {
      return err;
    });
};

/**
  * Call getAddressInfo Api
  * @param {string} address Ethereum address
  * @param {object} params  URL params
  * @return {Promise<object, Error>}
  */
function getAddressInfo (address, params) {
  var p = Object.assign({}, ethplorerParams, params);
  var url = ethplorerBaseUrl + 'getAddressInfo/' + address;
  return fetch(url, p);
}

/**
  * Call api/v1/tokens/bet/ Api
  * @param {object} params  URL params
  * @return {Promise<object, Error>}
  */
function addUserTokens (params) {
  var p = Object.assign({}, weeklyTokenRaceStoreParams, params);
  var url = weeklyTokenRaceStoreBaseUrl + 'api/v1/tokens/bet/';
  return fetch(url, p);
}

module.exports = {
  getAddressInfo,
  addUserTokens
}
