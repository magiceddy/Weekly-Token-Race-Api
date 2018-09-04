var axios = require('../__mocks__/axios');
var mockData = require('../__mocks__/data');
var service = require('../../index');

var address = '0xfj8h3f8h4804h8hghg0';
var weekHash = 'uebubbvbbce';

var ethplorerBaseUrl = 'http://api.ethplorer.io/';
var weeklyTokenRaceStoreBaseUrl = 'http://localhost:3000/';


describe('getAddressInfo', function () {
  var url = ethplorerBaseUrl + 'getAddressInfo/' + address;

  afterEach(function () {
    axios.get.mockClear();
  });

  axios.get.mockImplementationOnce(function () {
    return Promise.resolve({
      data: mockData.addressInfo
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

describe('addUserTokens', function () {
  var url = weeklyTokenRaceStoreBaseUrl + 'api/v1/tokens/bet/';

  afterEach(function () {
    axios.get.mockClear();
  });

  axios.get.mockImplementationOnce(function () {
    return Promise.resolve({
      data: mockData.storeHash
    })
  });

  it('should call the service with passed params', function () {
    var params = { weekHash: weekHash, tokenList: ['ZRX', 'DTH'] };

    service.addUserTokens(params);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
      url,
      { params: params }
    );
  });
});
