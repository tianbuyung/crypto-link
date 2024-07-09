"use server";

import {
  cryptoDataService,
  cryptoMetadataService,
} from "@/data/services/crypto-data-service";

export async function cryptoDataAction() {
  const cryptoData = await cryptoDataService();

  const parsedCryptoData = await cryptoData.json();

  const cryptoIds = parsedCryptoData.data
    .map((crypto: any) => crypto.id.toString())
    .join(",");

  const cryptoMetadata = await cryptoMetadataService(cryptoIds);

  const parsedCryptoMetadata = await cryptoMetadata.json();

  const cryptoDataMerged = parsedCryptoData.data.map((crypto: any) => ({
    ...crypto,
    logo: parsedCryptoMetadata.data[crypto.id.toString()].logo,
  }));

  return cryptoDataMerged;
}
