// The navbar's logo and mail badge, redrawn as SVG from the original 47px and
// 71px PNGs so they stay sharp at any size. Each viewBox is cropped tight to
// its shape, so at the same CSS size the two read as the same size.
// Colours come from the design tokens in index.css.

// "TE" monogram: the original's exact 45x46 pixel grid.
export const LogoIcon = (props) => (
  <svg viewBox="0 0 45 46" aria-hidden="true" {...props}>
    <g fill="var(--color-text)">
      <rect x="0" y="0" width="45" height="12" />
      <rect x="17" y="12" width="10" height="8" />
      <rect x="10" y="27" width="25" height="7" />
    </g>
    <g fill="var(--color-accent)">
      <rect x="0" y="17" width="10" height="29" />
      <rect x="17" y="19" width="10" height="27" />
      <rect x="35" y="17" width="10" height="29" />
      <rect x="0" y="33.5" width="45" height="12.5" />
    </g>
  </svg>
);

// Green badge with a white ring and envelope.
export const MailIcon = (props) => (
  <svg viewBox="5 5 61 61" aria-hidden="true" {...props}>
    <defs>
      <clipPath id="mail-envelope">
        <rect x="19" y="24" width="32" height="23" rx="1.5" />
      </clipPath>
    </defs>
    <circle cx="35.5" cy="35.5" r="29.5" fill="var(--color-accent)" stroke="var(--color-text)" strokeWidth="2" />
    <rect x="19" y="24" width="32" height="23" rx="1.5" fill="var(--color-text)" />
    <path
      d="M17 28.5 L35.5 38 L54 28.5"
      fill="none"
      stroke="var(--color-accent)"
      strokeWidth="3.5"
      clipPath="url(#mail-envelope)"
    />
  </svg>
);
