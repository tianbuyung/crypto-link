import { CryptoPriceTicker } from "@/components/contents/crypto-price-ticker/crypto-price-ticker";

export default function Home() {
  return (
    <section className="p-2 mt-32 md:mt-0">
      <h1 className="text-xl md:text-3xl font-bold underline">
        Welcome to the Crypto Link Dashboard
      </h1>

      <CryptoPriceTicker />
    </section>
  );
}
