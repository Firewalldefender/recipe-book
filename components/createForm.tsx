"use client";

import { useActionState, useRef, useState } from "react";
import { createRecipe } from "../utils/recipe";
import { categoryBadgeStyles, recipeCategories } from "../UI/categoryBadges";

const fieldClasses =
  "min-h-12 w-full rounded-xl border-2 border-[#71382d]/35 bg-[#fffdf7]/85 px-4 py-3 text-base shadow-sm outline-none placeholder:text-[#876858]/65 focus:border-[#a64b38] focus:ring-4 focus:ring-[#a64b38]/15 dark:bg-[#f3dfb8]/80";

export const CreateRecipe = () => {
  const [category, setCategory] = useState("");
  const categoryPicker = useRef<HTMLDetailsElement>(null);
  const [state, formAction, isPending] = useActionState(createRecipe, {
    error: null,
    success: false,
  });

  return (
    <section className="relative isolate mx-auto w-full max-w-4xl overflow-hidden rounded-sm border border-[#d7cda9] bg-[#fffef0] px-5 pb-7 pt-20 text-[#71382d] shadow-[0_4px_3px_#3f2b1f30,0_18px_40px_#3f2b1f2b] dark:border-[#927b57] dark:bg-[#d5bf91] dark:text-[#4a2d22] sm:px-10 sm:pb-10 sm:pt-24 lg:px-14">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 top-14 -z-10 bg-[repeating-linear-gradient(to_bottom,transparent_0,transparent_39px,#a7d2df_40px,transparent_41px)] dark:bg-[repeating-linear-gradient(to_bottom,transparent_0,transparent_39px,#7399a0_40px,transparent_41px)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-12 h-[5px] border-y border-[#df7478] bg-[#f4a4a6]/35 dark:border-[#a84f52] dark:bg-[#bd6c68]/25"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-4 top-0 flex h-9 items-start justify-around"
      >
        {Array.from({ length: 15 }).map((_, index) => (
          <span
            key={index}
            className="relative h-7 w-3 before:absolute before:left-1/2 before:top-0 before:h-4 before:w-1 before:-translate-x-1/2 before:bg-[#765d46] before:content-[''] after:absolute after:bottom-0 after:left-0 after:size-3 after:rounded-full after:bg-[#765d46] after:shadow-[inset_1px_1px_1px_#493526,0_1px_0_#fff8d8] after:content-[''] dark:before:bg-[#4f3d2d] dark:after:bg-[#4f3d2d]"
          />
        ))}
      </div>

      <div className="relative z-10">
        <header className="mb-8 sm:mb-10">
          <p className="mb-1 text-sm font-bold uppercase tracking-[0.18em] text-[#876858]">
            Omi&apos;s Rezeptbuch
          </p>
          <h2 className="font-serif text-3xl font-bold leading-tight text-[#a64b38] sm:text-4xl lg:text-5xl">
            Neues Rezept
          </h2>
        </header>

        <form
          action={formAction}
          className="grid gap-6 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-7"
        >
          <label className="grid gap-2 sm:col-span-2">
            <span className="text-base font-bold">Rezeptname</span>
            <input
              name="title"
              placeholder="z. B. Omas Apfelkuchen"
              required
              className={`${fieldClasses} font-medium`}
            />
          </label>

          <div className="grid gap-2 sm:col-span-2">
            <span id="category-label" className="text-base font-bold">
              Kategorie
            </span>
            <input type="hidden" name="category" value={category} />
            <details ref={categoryPicker} className="group relative">
              <summary
                aria-labelledby="category-label"
                className={`${fieldClasses} flex cursor-pointer list-none items-center justify-between pr-4 font-semibold marker:hidden [&::-webkit-details-marker]:hidden`}
              >
                {category ? (
                  <span
                    className={`relative overflow-hidden rounded-full border px-3 py-1.5 text-sm font-semibold ${categoryBadgeStyles[category]}`}
                  >
                    {category}
                  </span>
                ) : (
                  <span className="text-[#876858]/75">
                    Kategorie auswählen …
                  </span>
                )}
                <span
                  aria-hidden="true"
                  className="text-lg transition-transform group-open:rotate-180"
                >
                  ▾
                </span>
              </summary>
              <div className="absolute inset-x-0 z-20 mt-2 grid max-h-56 gap-2 overflow-y-auto rounded-xl border-2 border-[#71382d]/35 bg-[#fffdf7] p-3 shadow-[0_10px_24px_#3f2b1f35] dark:bg-[#f3dfb8]">
                {recipeCategories.map((item) => (
                  <button
                    key={item}
                    type="button"
                    aria-pressed={category === item}
                    onClick={() => {
                      setCategory(item);
                      categoryPicker.current?.removeAttribute("open");
                    }}
                    className="rounded-lg px-2 py-1.5 text-left outline-none transition hover:bg-[#71382d]/10 focus-visible:ring-2 focus-visible:ring-[#71382d]"
                  >
                    <span
                      className={`relative inline-block overflow-hidden rounded-full border px-3 py-1.5 text-sm font-semibold ${categoryBadgeStyles[item]}`}
                    >
                      {item}
                    </span>
                  </button>
                ))}
              </div>
            </details>
            {!category && (
              <p className="text-sm text-[#876858]">
                Bitte eine Kategorie auswählen.
              </p>
            )}
          </div>

          <label className="grid gap-2 sm:col-span-2">
            <span className="text-base font-bold">
              Bild-URL{" "}
              <span className="font-normal text-[#876858]">(optional)</span>
            </span>
            <input
              name="image"
              type="url"
              placeholder="https://…"
              className={fieldClasses}
            />
          </label>

          <label className="grid gap-2">
            <span className="text-base font-bold">Arbeitszeit</span>
            <div className="relative">
              <input
                name="duration"
                type="number"
                min="1"
                inputMode="numeric"
                placeholder="45"
                required
                className={`${fieldClasses} pr-16`}
              />
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-[#876858]">
                Min.
              </span>
            </div>
          </label>

          <label className="grid gap-2">
            <span className="text-base font-bold">Portionen</span>
            <input
              name="servings"
              type="number"
              min="1"
              inputMode="numeric"
              placeholder="4"
              required
              className={fieldClasses}
            />
          </label>

          <div aria-live="polite" className="min-h-6 sm:col-span-2">
            {state.error && (
              <p className="rounded-lg border border-[#a63e32]/30 bg-[#fbe5e8] px-4 py-2 font-semibold text-[#913f50]">
                {state.error}
              </p>
            )}
            {state.success && (
              <p className="rounded-lg border border-[#52774b]/40 bg-[#edf0df] px-4 py-2 font-semibold text-[#56633e]">
                {state.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isPending || !category}
            className="min-h-12 rounded-xl border-2 border-[#71382d] bg-[#a64b38] px-6 py-3 text-base font-bold text-white shadow-[0_4px_0_#71382d] outline-none transition hover:-translate-y-0.5 hover:bg-[#913f2f] focus-visible:ring-4 focus-visible:ring-[#a64b38]/25 active:translate-y-1 cursor-pointer motion-reduce:transform-none motion-reduce:transition-none sm:col-span-2 sm:justify-self-end sm:px-9"
          >
            {isPending ? "Wird eingetragen …" : "Rezept eintragen"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreateRecipe;
