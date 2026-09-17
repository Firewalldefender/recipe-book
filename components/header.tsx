"use client";

import Link from "next/link";
import buttonClasses from "../UI/buttonClasses";
import DarkmodeButton from "./darkmodeButton";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 isolate w-full shrink-0 border-b-2 border-[#71382d]/40 bg-[#fff8eb] shadow-[0_4px_12px_#71382d20] dark:border-[#c99b77]/40 dark:bg-[#241b17]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[image:url('/Global/tischdecke.webp')] bg-size-[384px_384px] bg-repeat dark:opacity-25"
      />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 px-3 py-3 sm:px-6 lg:flex-row lg:justify-between lg:gap-6 lg:px-10">
        <div
          id="Title"
          className="shrink-0 rounded-2xl border-2 border-[#71382d] bg-[#fff8eb]/95 px-5 py-2 shadow-[0_3px_0_#71382d] dark:border-[#c99b77] dark:bg-[#362820]/95 dark:shadow-[0_3px_0_#17110e]"
        >
          <h1 className="font-serif text-3xl font-bold italic tracking-tight text-[#71382d] dark:text-[#ffe6bd] sm:text-4xl">
            Omi&apos;s Rezepte
          </h1>
        </div>
        <nav
          id="NavButtons"
          aria-label="Hauptnavigation"
          className="grid shrink-0 grid-cols-[auto_auto_auto] items-center justify-center gap-2 pb-1 sm:flex sm:gap-3"
        >
          <Link href="/" className={buttonClasses}>
            Home
          </Link>
          <div className="relative">
            <select
              aria-label="Kategorie"
              defaultValue=""
              className={`${buttonClasses} cursor-pointer appearance-none pr-9 focus:outline-none focus:ring-0 focus-visible:ring-0 sm:pr-10`}
              onChange={(e) => {
                const cat = e.target.value;
                router.push(`/category/${cat}`);
                router.refresh();
              }}
            >
              <option value="" disabled>
                Kategorie
              </option>
              <option value="curry">Curry</option>
              <option value="pasta">Pasta</option>
              <option value="pizza">Pizza</option>
              <option value="soup">Suppe</option>
              <option value="bread">Brot</option>
              <option value="dessert">Dessert</option>
              <option value="salad">Salat</option>
              <option value="mexican">Mexikanisch</option>
            </select>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#71382d] dark:text-[#ffe6bd]"
            >
              ▾
            </span>
          </div>
          <Link href="/createrecipe" className={buttonClasses}>
            Erstellen
          </Link>
          <DarkmodeButton />
        </nav>
      </div>
    </header>
  );
}
