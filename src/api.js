import { cryptoAssets, cryptoData } from "./data";

export function fakeFetchCrypto() {
  return new Promise((res) => {
    setTimeout(() => {
      res(cryptoData);
    }, 1);
  });
}

export function fakeFetchAssets() {
  return new Promise((res) => {
    setTimeout(() => {
      res(cryptoAssets);
    }, 1);
  });
}
