import { CryptoPriceItem } from "./crypto-price-item";

interface CryptoPriceListProps {
  cryptoData: CryptoData[];
}

export function CryptoPriceList({ cryptoData }: CryptoPriceListProps) {
  return (
    <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {cryptoData.map((crypto) => (
        <CryptoPriceItem key={crypto.id} crypto={crypto} />
      ))}
    </dl>
  );
}
