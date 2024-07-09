import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { formatter } from "@/lib/utils";
import Link from "next/link";

interface CryptoPriceItemProps {
  crypto: CryptoData;
}

export function CryptoPriceItem({ crypto }: CryptoPriceItemProps) {
  return (
    <Link
      href={`https://coinmarketcap.com/currencies/${crypto.slug}`}
      target="_blank"
    >
      <Card className="bg-slate-950 dark:bg-white">
        <CardHeader>
          <dt className="flex gap-3 items-center">
            <Avatar>
              <AvatarImage src={crypto.logo} />
              <AvatarFallback>{crypto.symbol}</AvatarFallback>
            </Avatar>

            <p className="text-xl truncate font-medium text-white dark:text-blue-500">
              {crypto.name}
              <span className="ml-2 text-sm font-medium">
                ({crypto.symbol})
              </span>
            </p>
          </dt>
        </CardHeader>

        <CardContent>
          <dd className="justify-end flex items-baseline gap-2">
            <p className="text-2xl font-semibold text-white dark:text-[#24292F]">
              {formatter.format(crypto.quote.USD.price).replace("$", "")}
              <span className="ml-2 text-sm font-medium">USD</span>
            </p>

            <p
              className={`${
                crypto.quote.USD.percent_change_1h > 0
                  ? "text-green-600"
                  : "text-red-600"
              }
            "ml-2 flex items-baseline text-sm font-semibold"
          `}
            >
              {crypto.quote.USD.percent_change_1h > 0
                ? (crypto.quote.USD.percent_change_1h * 100).toFixed(2) + "%"
                : `(${(crypto.quote.USD.percent_change_1h * 100).toFixed(2) + "%"})`}
            </p>
          </dd>
        </CardContent>
      </Card>
    </Link>
  );
}
