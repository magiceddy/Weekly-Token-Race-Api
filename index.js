var axios = require('axios');

var ethplorerParams = { apiKey: 'freekey' };
var ethplorerBaseUrl = 'http://api.ethplorer.io/';
var weeklyTokenRaceStoreBaseUrl = 'http://localhost:3000/';

/**
  * Call axios get
  * @param {object} config Axios config object
  * @return {Promise<object, Error>}
  */
function fetch (config) {
  return axios(config)
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
  var config = {
    baseURL: ethplorerBaseUrl,
    url: 'getAddressInfo/' + address,
    method: 'get',
    params: p
  };
  return fetch(config);
}

/**
  * Call api/v1/tokens/bet/ Api
  * @param {object} params  URL params
  * @return {Promise<object, Error>}
  */
function addUserTokens (weekHash, tokenList) {
  var config = {
    baseURL: weeklyTokenRaceStoreBaseUrl,
    url: '/api/v1/tokens/bet/',
    method: 'post',
    params: {
      weekHash: weekHash,
      tokenList: tokenList
    }
  };
  return fetch(config);
}

module.exports = {
  getAddressInfo,
  addUserTokens
}
