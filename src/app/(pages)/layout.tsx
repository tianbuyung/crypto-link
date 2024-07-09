import { ReactNode } from "react";

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex h-[90vh] w-full items-center justify-center">
      {children}
    </main>
  );
}
