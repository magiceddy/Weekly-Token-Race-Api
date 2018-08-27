import axios from 'axios';

export class EthplorerApiService {
  /**
  * @constructor
  * @param {baseUrl} string
  * @param {apiKey} string
  */
  constructor ({ baseUrl = 'http://api.ethplorer.io', apiKey = 'freekey' }) {
    this.baseUrl = baseUrl;
    this.apiKey = apiKey;
  }

  /**
  * Call getAddressInfo Api
  * @param {string} method Api method
  * @param {string} address Ethereum address
  * @return {Promise<object, Error>}
  */
  getAddressInfo = ({ method = 'getAddressInfo', address }) =>
    new Promise(async (resolve, reject) => {
      const url = `${this.baseUrl}/${method}/${address}`;
      const params = { params: { apiKey: this.apiKey } };

      try {
        const response = await axios.get(url, params);
        return resolve(response);
      } catch (err) {
        reject(err);
      }
    });
}
