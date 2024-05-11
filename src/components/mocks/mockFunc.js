import { FetchData } from "../mocks/mockData";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(FetchData);
    },
  });
});

export default global.fetch;
