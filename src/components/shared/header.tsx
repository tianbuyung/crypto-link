import { ModeToggle } from "@/components/shared/mode-toggle";

export function Header() {
  return (
    <header className="sticky top-0 flex p-5 justify-between">
      <ModeToggle className="ml-auto" />
    </header>
  );
}
