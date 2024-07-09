import { baseCmcApiUrl } from "@/commons/constants/base-cmc-api-url";
import { cmcApiKey } from "@/commons/constants/cmc-api-key";

export async function cryptoDataService() {
  const url = new URL(
    "/v1/cryptocurrency/listings/latest?start=1&limit=5&convert=USD",
    baseCmcApiUrl,
  );

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "X-CMC_PRO_API_KEY": cmcApiKey!,
      },
      cache: "no-store",
    });

    return response;
  } catch (error) {
    console.error("Login Service Error:", error);
    throw error;
  }
}

export async function cryptoMetadataService(cryptoIds: string) {
  const url = new URL(
    `/v2/cryptocurrency/info?id=${cryptoIds}&aux=logo`,
    baseCmcApiUrl,
  );

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "X-CMC_PRO_API_KEY": cmcApiKey!,
      },
      cache: "no-store",
    });

    return response;
  } catch (error) {
    console.error("Login Service Error:", error);
    throw error;
  }
}
