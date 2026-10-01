/**
 * converge: two pairs of lines sweep down either side and meet beneath the content, for heroes.
 * flow: two lines cross in the section's bottom padding, clear of its text.
 */
export type ConnectionLinesVariant = "converge" | "flow";

interface ILinePaths {
  /** Lines entering from the left edge. */
  start: string[];
  /** Lines entering from the right edge (converge) or crossing the first pair (flow). */
  end: string[];
}

// Drawn on a 1440 × 600 canvas; strokes keep their width at any size.
// The converge lines hug the edges before turning in, so they stay clear of centred copy.
const linePaths: Record<ConnectionLinesVariant, ILinePaths> = {
  converge: {
    start: ["M -10 60 C 180 60, 200 560, 720 590", "M -10 190 C 150 190, 230 575, 720 590"],
    end: ["M 1450 60 C 1260 60, 1240 560, 720 590", "M 1450 190 C 1290 190, 1210 575, 720 590"],
  },
  flow: {
    start: ["M -10 380 C 380 120, 820 620, 1450 260"],
    end: ["M -10 520 C 420 640, 900 60, 1450 420"],
  },
};

const frameClassNames: Record<ConnectionLinesVariant, string> = {
  converge: "inset-0 size-full",
  flow: "inset-x-0 bottom-0 h-section w-full",
};

// converge keeps its proportions and is cropped from the bottom centre, so a narrow screen shows only
// the shallow meeting point beneath the content. flow stretches across its strip.
const aspectRatios: Record<ConnectionLinesVariant, string> = {
  converge: "xMidYMax slice",
  flow: "none",
};

// The first line of each group is the stronger one; the rest echo it.
const lineOpacities = [0.26, 0.14];

export interface IConnectionLines {
  variant?: ConnectionLinesVariant;
}

/**
 * Faint background line work for light sections: paths that move toward each other and meet, echoing
 * brands and creators coming together. Decorative only. The parent needs `relative isolate overflow-hidden`.
 */
export const ConnectionLines = ({ variant = "converge" }: IConnectionLines) => (
  <svg
    aria-hidden
    focusable={false}
    viewBox="0 0 1440 600"
    preserveAspectRatio={aspectRatios[variant]}
    fill="none"
    className={`pointer-events-none absolute -z-10 stroke-accent ${frameClassNames[variant]}`}
  >
    {[linePaths[variant].start, linePaths[variant].end].flatMap((paths) =>
      paths.map((path, index) => (
        <path
          key={path}
          d={path}
          strokeWidth={1.25}
          vectorEffect="non-scaling-stroke"
          opacity={lineOpacities[index] ?? lineOpacities[1]}
        />
      )),
    )}
  </svg>
);
