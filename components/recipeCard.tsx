import type { Recipe } from "../utils/recipe";
import Image from "next/image";

import { categoryBadgeStyles } from "../UI/categoryBadges";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  const category = recipe.category.trim().toLowerCase();
  const badgeStyle =
    categoryBadgeStyles[category] ??
    "border-[#75815b]/45 bg-[#edf0df] text-[#56633e]";

  return (
    <article className="relative isolate flex h-full min-w-0 flex-col overflow-hidden rounded-sm border border-[#d7cda9] bg-[#fffef0] p-5 pt-16 text-[#71382d] shadow-[0_3px_2px_#3f2b1f30,0_14px_28px_#3f2b1f24] transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[0_4px_3px_#3f2b1f35,0_18px_34px_#3f2b1f2b] motion-reduce:transition-none dark:border-[#927b57] dark:bg-[#d5bf91] dark:text-[#4a2d22] dark:shadow-[0_3px_2px_#00000045,0_14px_30px_#00000038] dark:hover:shadow-[0_4px_3px_#00000050,0_18px_36px_#00000045] sm:p-6 sm:pt-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 top-12 -z-10 bg-[repeating-linear-gradient(to_bottom,transparent_0,transparent_31px,#a7d2df_32px,transparent_33px)] dark:bg-[repeating-linear-gradient(to_bottom,transparent_0,transparent_31px,#7399a0_32px,transparent_33px)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-10 h-[5px] border-y border-[#df7478] bg-[#f4a4a6]/35 dark:border-[#a84f52] dark:bg-[#bd6c68]/25"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-3 top-0 flex h-8 items-start justify-around"
      >
        {Array.from({ length: 11 }).map((_, index) => (
          <span
            key={index}
            className="relative h-6 w-3 before:absolute before:left-1/2 before:top-0 before:h-3 before:w-1 before:-translate-x-1/2 before:bg-[#765d46] before:content-[''] after:absolute after:bottom-0 after:left-0 after:size-3 after:rounded-full after:bg-[#765d46] after:shadow-[inset_1px_1px_1px_#493526,0_1px_0_#fff8d8] after:content-[''] dark:before:bg-[#4f3d2d] dark:after:bg-[#4f3d2d] dark:after:shadow-[inset_1px_1px_1px_#2d2118,0_1px_0_#e5d1a5]"
          />
        ))}
      </div>
      <div className="relative z-10 grid grid-cols-[minmax(0,1fr)_6rem] items-start gap-4 md:grid-cols-[minmax(0,1fr)_7rem]">
        <div className="min-w-0">
          <h2 className="font-serif text-2xl leading-tight font-bold wrap-break-word text-[#a64b38] dark:text-[#7b372c] lg:text-3xl">
            {recipe.title}
          </h2>
          <span
            className={`relative mt-3 inline-block max-w-full overflow-hidden rounded-full border px-3 py-1.5 text-xs font-semibold wrap-break-word ${badgeStyle}`}
          >
            {recipe.category}
          </span>
        </div>
        <div className="relative aspect-square overflow-hidden rounded-2xl border border-[#71382d]/20 bg-[#f1e6cd] shadow-inner dark:border-[#4a2d22]/30 dark:bg-[#c6ae7f]">
          {recipe.image ? (
            <Image
              src={recipe.image}
              alt={recipe.title}
              fill
              sizes="(min-width: 768px) 112px, 96px"
              className="object-cover"
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-2 text-[#947655] dark:text-[#694e3d]">
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
      <dl className="relative z-10 mt-auto space-y-2 pt-5 text-sm sm:text-base">
        <div className="flex items-baseline justify-between gap-3 pt-4">
          <dt className="text-[#876858] dark:text-[#694e3d]">Arbeitszeit</dt>
          <dd className="text-right font-bold tabular-nums">
            {recipe.duration} min
          </dd>
        </div>
        <div className="flex items-baseline justify-between gap-3">
          <dt className="text-[#876858] dark:text-[#694e3d]">Portionen</dt>
          <dd className="text-right font-bold tabular-nums">
            {recipe.servings}
          </dd>
        </div>
      </dl>
    </article>
  );
}
