export const backgroundColors: string[][] = [
    [
      "white",
      "gray-50",
      "blueGray-100",
      "blueGray-200",
      "blueGray-300",
      "blueGray-400",
      "blueGray-500",
      "blueGray-600",
      "blueGray-700",
      // "blueGray-800",
      "black",
    ],
    [
      "yellow-50",
      "yellow-100",
      "yellow-200",
      "yellow-300",
      "yellow-400",
      "yellow-500",
      "yellow-600",
      "yellow-700",
      "yellow-800",
      "yellow-900",
    ],
    [
      "amber-50",
      "amber-100",
      "amber-200",
      "amber-300",
      "amber-400",
      "amber-500",
      "amber-600",
      "amber-700",
      "amber-800",
      "amber-900",
    ],
  
    [
      "orange-50",
      "orange-100",
      "orange-200",
      "orange-300",
      "orange-400",
      "orange-500",
      "orange-600",
      "orange-700",
      "orange-800",
      "orange-900",
    ],
  
    [
      "red-50",
      "red-100",
      "red-200",
      "red-300",
      "red-400",
      "red-500",
      "red-600",
      "red-700",
      "red-800",
      "red-900",
    ],
    [
      "lime-50",
      "lime-100",
      "lime-200",
      "lime-300",
      "lime-400",
      "lime-500",
      "lime-600",
      "lime-700",
      "lime-800",
      "lime-900",
    ],
    [
      "green-50",
      "green-100",
      "green-200",
      "green-300",
      "green-400",
      "green-500",
      "green-600",
      "green-700",
      "green-800",
      "green-900",
    ],
    [
      "emerald-50",
      "emerald-100",
      "emerald-200",
      "emerald-300",
      "emerald-400",
      "emerald-500",
      "emerald-600",
      "emerald-700",
      "emerald-800",
      "emerald-900",
    ],
    [
      "teal-50",
      "teal-100",
      "teal-200",
      "teal-300",
      "teal-400",
      "teal-500",
      "teal-600",
      "teal-700",
      "teal-800",
      "teal-900",
    ],
    [
      "cyan-50",
      "cyan-100",
      "cyan-200",
      "cyan-300",
      "cyan-400",
      "cyan-500",
      "cyan-600",
      "cyan-700",
      "cyan-800",
      "cyan-900",
    ],
    [
      "sky-50",
      "sky-100",
      "sky-200",
      "sky-300",
      "sky-400",
      "sky-500",
      "sky-600",
      "sky-700",
      "sky-800",
      "sky-900",
    ],
    [
      "blue-50",
      "blue-100",
      "blue-200",
      "blue-300",
      "blue-400",
      "blue-500",
      "blue-600",
      "blue-700",
      "blue-800",
      "blue-900",
    ],
    [
      "indigo-50",
      "indigo-100",
      "indigo-200",
      "indigo-300",
      "indigo-400",
      "indigo-500",
      "indigo-600",
      "indigo-700",
      "indigo-800",
      "indigo-900",
    ],
  
    [
      "violet-50",
      "violet-100",
      "violet-200",
      "violet-300",
      "violet-400",
      "violet-500",
      "violet-600",
      "violet-700",
      "violet-800",
      "violet-900",
    ],
  
    [
      "purple-50",
      "purple-100",
      "purple-200",
      "purple-300",
      "purple-400",
      "purple-500",
      "purple-600",
      "purple-700",
      "purple-800",
      "purple-900",
    ],
  
    [
      "fuchsia-50",
      "fuchsia-100",
      "fuchsia-200",
      "fuchsia-300",
      "fuchsia-400",
      "fuchsia-500",
      "fuchsia-600",
      "fuchsia-700",
      "fuchsia-800",
      "fuchsia-900",
    ],
    [
      "pink-50",
      "pink-100",
      "pink-200",
      "pink-300",
      "pink-400",
      "pink-500",
      "pink-600",
      "pink-700",
      "pink-800",
      "pink-900",
    ],
    [
      "rose-50",
      "rose-100",
      "rose-200",
      "rose-300",
      "rose-400",
      "rose-500",
      "rose-600",
      "rose-700",
      "rose-800",
      "rose-900",
    ],
  ];
  
  export const backgroundColorsConcat: string[] = concatColors(backgroundColors);
  
  function concatColors(tabColors: string[][]): string[] {
    let concatArr: string[] = [];
  
    tabColors.forEach((el, i) => {
      concatArr.push(...tabColors[i]);
    });
  
    return concatArr;
  }
  
  // for ColorsToChoose_Background
  export const backgroundColorsLightFocus = [
    "blueGray-500",
    "blueGray-600",
    "lime-700",
    "green-600",
    "green-700",
    "emerald-600",
    "emerald-700",
    "teal-600",
    "teal-700",
    "cyan-600",
    "cyan-700",
    "sky-600",
    "sky-700",
    "indigo-500",
    "violet-500",
    "violet-600",
    "purple-500",
    "purple-600",
    "fuchsia-500",
    "fuchsia-600",
  ];
  
  // for upperLeftUI
  export const backgroundColorsUpperUiFocus = [
    "blueGray-400",
    "lime-500",
    "lime-600",
    "green-500",
    "green-600",
    "emerald-500",
    "teal-500",
    "cyan-500",
    "sky-400",
    "sky-500",
    "sky-600",
    "blue-300",
    "blue-400",
    "blue-500",
    "indigo-300",
    "indigo-400",
    "indigo-500",
    "violet-300",
    "violet-400",
    "violet-500",
    "fuchsia-100",
  ];
  