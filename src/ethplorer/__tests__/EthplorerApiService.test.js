import mockAxios from 'axios';
import { EthplorerApiService } from '../EthplorerApiService';
import { addressInfo } from '../../__mocks__/data';

let service;

describe('EthplorerApiService', () => {
  const baseUrl = service.baseUrl;
  service = new EthplorerApiService({});

  describe('constructor', () => {
    test('should use default value', () => {
      service = new EthplorerApiService({});
      expect(service.apiKey).toBe('freekey');
      expect(service.baseUrl).toBe('http://api.ethplorer.io');
    });

    test('should use default value', () => {
      const apiKey = 'test';

      baseUlr = 'baseUlr';
      service = new EthplorerApiService({ baseUrl, apiKey });

      expect(service.apiKey).toBe(apiKey);
      expect(service.baseUrl).toBe(baseUrl);
    });
  });

  describe('getAddressInfo', () => {
    let params;

    beforeAll(() => {
      service = new EthplorerApiService({});
      params = { params: { apiKey: service.apiKey } };
    });

    afterEach(() => {
      mockAxios.get.mockClear();
    });

    test('should call api with default value', async () => {
      mockAxios.get.mockImplementationOnce(() =>
        Promise.resolve({
          data: addressInfo
        })
      );

      await service.getAddressInfo({ address: addressInfo.address });
      const url = baseUrl + '/getAddressInfo/' + addressInfo.address;

      expect(mockAxios.get).toHaveBeenCalledTimes(1);
      expect(mockAxios.get).toHaveBeenCalledWith(
        url,
        params
      );
    });

    test('should call api with passed value', async () => {
      mockAxios.get.mockImplementationOnce(() =>
        Promise.resolve({
          data: addressInfo
        })
      );

      const method = 'testMethod';
      await service.getAddressInfo({
        address: addressInfo.address,
        method
      });
      const url = baseUrl + '/' + method + '/' + addressInfo.address;

      expect(mockAxios.get).toHaveBeenCalledTimes(1);
      expect(mockAxios.get).toHaveBeenCalledWith(
        url,
        params
      );
    });
  });
});
