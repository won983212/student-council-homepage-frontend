function ToggleAutoIcon({ auto }: { auto: boolean }): JSX.Element {
  return auto ? (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.70018 11.9268L11.1472 6.47241C11.4848 6.27727 11.4848 5.72334 11.1472 5.52759L1.70018 0.0731795C1.5317 -0.0243938 1.32322 -0.0243938 1.15474 0.0731795C0.985653 0.170753 0.881413 0.350748 0.881413 0.545895L0.881413 11.4547C0.881413 11.6493 0.985652 11.8299 1.15474 11.9268C1.32322 12.0244 1.5317 12.0244 1.70018 11.9268Z"
        fill="white"
      />
    </svg>
  ) : (
    <svg
      width="12"
      height="12"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          fill="white"
          d="M224,435.8V76.1c0-6.7-5.4-12.1-12.2-12.1h-71.6c-6.8,0-12.2,5.4-12.2,12.1v359.7c0,6.7,5.4,12.2,12.2,12.2h71.6   C218.6,448,224,442.6,224,435.8z"
        />
        <path
          fill="white"
          d="M371.8,64h-71.6c-6.7,0-12.2,5.4-12.2,12.1v359.7c0,6.7,5.4,12.2,12.2,12.2h71.6c6.7,0,12.2-5.4,12.2-12.2V76.1   C384,69.4,378.6,64,371.8,64z"
        />
      </g>
    </svg>
  );
}

export default ToggleAutoIcon;
