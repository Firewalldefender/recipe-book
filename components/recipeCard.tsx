import type { Recipe } from "../utils/recipe";
import Image from "next/image";

const categoryBadgeStyles: Record<string, string> = {
  mexican:
    "border-[#52774b]/60 bg-[#fffdf7] text-[#a63e32] after:absolute after:inset-x-0 after:bottom-0 after:h-1 after:bg-[linear-gradient(to_right,#52774b_0%,#52774b_33.33%,#fffdf7_33.33%,#fffdf7_66.66%,#b54b3d_66.66%,#b54b3d_100%)]",
  curry: "border-[#d28a37]/60 bg-[#ffe3bd] text-[#924615]",
  pasta: "border-[#c5a044]/60 bg-[#fff0bd] text-[#7d5c1f]",
  salad: "border-[#32a852]/50 bg-[#87de9f] text-[#56633e]",
  dessert: "border-[#bd7a83]/50 bg-[#fbe5e8] text-[#913f50]",
  soup: "border-[#b78c59]/50 bg-[#f4e3cb] text-[#805832]",
};

const categoryAliases: Record<string, string> = {
  mexikanisch: "mexican",
  salat: "salad",
  nachtisch: "dessert",
  suppe: "soup",
};

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  const category = recipe.category.trim().toLowerCase();
  const badgeStyle =
    categoryBadgeStyles[categoryAliases[category] ?? category] ??
    "border-[#75815b]/45 bg-[#edf0df] text-[#56633e]";

  return (
    <article className="flex h-full min-w-0 flex-col rounded-[1.75rem] border-2 border-[#71382d]/35 bg-[#fffaf0] p-5 text-[#71382d] shadow-[0_4px_0_#71382d15,0_8px_24px_#71382d0a] dark:border-[#c99b77]/35 dark:bg-[#30241e] dark:text-[#f5dfc0] transition-shadow hover:shadow-[0_4px_0_#71382d20,0_12px_28px_#71382d15] motion-reduce:transition-none sm:p-6">
      <div className="grid grid-cols-[minmax(0,1fr)_6rem] items-start gap-4 md:grid-cols-[minmax(0,1fr)_7rem]">
        <div className="min-w-0">
          <h2 className="font-serif text-2xl leading-tight font-bold wrap-break-word text-[#a64b38] dark:text-[#efa98a] lg:text-3xl">
            {recipe.title}
          </h2>
          <span
            className={`relative mt-3 inline-block max-w-full overflow-hidden rounded-full border px-3 py-1.5 text-xs font-semibold wrap-break-word ${badgeStyle}`}
          >
            {recipe.category}
          </span>
        </div>
        <div className="relative aspect-square overflow-hidden rounded-2xl border border-[#71382d]/20 bg-[#f1e6cd] shadow-inner dark:border-[#c99b77]/25 dark:bg-[#443328]">
          {recipe.image ? (
            <Image
              src={recipe.image}
              alt={recipe.title}
              fill
              sizes="(min-width: 768px) 112px, 96px"
              className="object-cover"
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-2 text-[#947655] dark:text-[#cfad87]">
              <svg
                aria-hidden="true"
                viewBox="0 0 48 48"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-10"
              >
                <path d="M10 25h28c-1 9-6 14-14 14s-13-5-14-14Z" />
                <path d="M8 25h32M17 41h14M17 18c-5-5 5-7 0-12M25 18c-5-5 5-7 0-12M33 18c-5-5 5-7 0-12" />
              </svg>
              <span className="text-[10px] font-medium tracking-wide">
                Ohne Foto
              </span>
            </div>
          )}
        </div>
      </div>
      <dl className="mt-auto space-y-2 pt-5 text-sm sm:text-base">
        <div className="flex items-baseline justify-between gap-3 border-t border-dashed border-[#71382d]/25 pt-4 dark:border-[#c99b77]/25">
          <dt className="text-[#876858] dark:text-[#cbb098]">Arbeitszeit</dt>
          <dd className="text-right font-bold tabular-nums">
            {recipe.duration} min
          </dd>
        </div>
        <div className="flex items-baseline justify-between gap-3">
          <dt className="text-[#876858] dark:text-[#cbb098]">Portionen</dt>
          <dd className="text-right font-bold tabular-nums">
            {recipe.servings}
          </dd>
        </div>
      </dl>
    </article>
  );
}
