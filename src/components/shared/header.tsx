import { ConnectButton } from "@rainbow-me/rainbowkit";

import { ModeToggle } from "@/components/shared/mode-toggle";

export function Header() {
  return (
    <header className="sticky top-0 flex p-5 justify-between bg-white dark:bg-slate-950">
      <ConnectButton
        accountStatus={{
          smallScreen: "avatar",
          largeScreen: "full",
        }}
        chainStatus="icon"
        showBalance={true}
      />

      <ModeToggle className="ml-auto" />
    </header>
  );
}
