import { cryptoDataAction } from "@/data/actions/crypto-data-action";
import { CryptoPriceList } from "./crypto-price-list";

export async function CryptoPriceTicker() {
  const data = await cryptoDataAction();

  return (
    <div>
      <h3 className="text-base font-semibold leading-6 mt-3">Last 24 hours</h3>
      <CryptoPriceList cryptoData={data} />
    </div>
  );
}
