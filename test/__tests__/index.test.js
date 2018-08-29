var axios = require('../__mocks__/axios');
var addressInfo = require('../__mocks__/data');
var service = require('../../index');

var address = '0xfj8h3f8h4804h8hghg0';
var ethplorerBaseUrl = 'http://api.ethplorer.io/';

describe('getAddressInfo', function () {
  var url = ethplorerBaseUrl + 'getAddressInfo/' + address;

  afterEach(function () {
    axios.get.mockClear();
  });

  axios.get.mockImplementationOnce(function () {
    return Promise.resolve({
      data: addressInfo
    })
  });

  it('should call the service with default params', function () {

    service.getAddressInfo(address);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
      url,
      { params: { apiKey: 'freekey' } }
    );
  });

  it('should call the service with passed params', function () {
    var customParams = { token: 'testToken' }

    service.getAddressInfo(address, customParams);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
      url,
      { params: { apiKey: 'freekey', token: 'testToken' } }
    );
  });
});
