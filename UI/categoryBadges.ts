const categoryBadgeStyles: Record<string, string> = {
  mexican:
    "border-[#52774b]/60 bg-[#fffdf7] text-[#a63e32] after:absolute after:inset-x-0 after:bottom-0 after:h-1 after:bg-[linear-gradient(to_right,#52774b_0%,#52774b_33.33%,#fffdf7_33.33%,#fffdf7_66.66%,#b54b3d_66.66%,#b54b3d_100%)]",
  curry: "border-[#d28a37]/60 bg-[#ffe3bd] text-[#924615]",
  pasta: "border-[#c5a044]/60 bg-[#fff0bd] text-[#7d5c1f]",
  salad: "border-[#32a852]/50 bg-[#87de9f] text-[#56633e]",
  dessert: "border-[#bd7a83]/50 bg-[#fbe5e8] text-[#913f50]",
  pizza:
    "border-[#8a5728]/60 bg-[#f4d39b] text-[#67390d] before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_12%_28%,#ef6468_0_2px,#8a5728_2.5px_3px,transparent_3.5px),radial-gradient(circle_at_50%_18%,#ef6468_0_2px,#8a5728_2.5px_3px,transparent_3.5px),radial-gradient(circle_at_88%_30%,#ef6468_0_2px,#8a5728_2.5px_3px,transparent_3.5px),radial-gradient(circle_at_16%_76%,#ef6468_0_2px,#8a5728_2.5px_3px,transparent_3.5px),radial-gradient(circle_at_50%_82%,#ef6468_0_2px,#8a5728_2.5px_3px,transparent_3.5px),radial-gradient(circle_at_84%_76%,#ef6468_0_2px,#8a5728_2.5px_3px,transparent_3.5px)] before:content-['']",
  soup: "border-[#246d9f]/60 bg-[#78bced] text-[#174e75]",
  bread: "border-[#b78c59]/50 bg-[#f4e3cb] text-[#805832]",
};

const categoryAliases: Record<string, string> = {
  mexikanisch: "mexican",
  salat: "salad",
  nachtisch: "dessert",
  suppe: "soup",
  Brot: "bread",
};

export { categoryBadgeStyles, categoryAliases };
