export const CriticalOrWarn = (disconnect, critical, warning) => {
  if (
    disconnect ||
    critical.temp ||
    critical.humidity ||
    critical.solar ||
    critical.co2
  ) {
    return (
      <img
        className="w-[20px] h-[20px]"
        src={`${process.env.PUBLIC_URL}/assets/images/Control/CriticalIcon.svg`}
        alt=""
      />
    );
  } else if (warning) {
    return (
      <img
        className="w-[20px] h-[20px]"
        src={`${process.env.PUBLIC_URL}/assets/images/Control/WarningIcon.svg`}
        alt=""
      />
    );
  } else {
    return <></>;
  }
};

export const IconsColor = (warning, disconnect) => {
  let color = '';
  if (warning) color = '#FF0000';
  else if (disconnect) color = '#767676';
  else color = '#000';

  return color;
};

export const TotalDashIcons = (icon, color) => {
  switch (icon) {
    case 'temp':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M6.25 4.375C6.25 3.5462 6.57924 2.75134 7.16529 2.16529C7.75134 1.57924 8.5462 1.25 9.375 1.25C10.2038 1.25 10.9987 1.57924 11.5847 2.16529C12.1708 2.75134 12.5 3.5462 12.5 4.375V11.1875C13.1029 11.8029 13.5107 12.5825 13.6723 13.4287C13.8339 14.2749 13.7421 15.15 13.4084 15.9442C13.0746 16.7384 12.5139 17.4164 11.7963 17.8932C11.0788 18.37 10.2365 18.6244 9.375 18.6244C8.51351 18.6244 7.67119 18.37 6.95367 17.8932C6.23615 17.4164 5.67536 16.7384 5.34162 15.9442C5.00789 15.15 4.91606 14.2749 5.07766 13.4287C5.23926 12.5825 5.64708 11.8029 6.25 11.1875V4.375ZM9.375 2.5C8.87772 2.5 8.40081 2.69754 8.04918 3.04917C7.69755 3.40081 7.5 3.87772 7.5 4.375V11.7338L7.2925 11.9212C6.82072 12.3432 6.48816 12.8984 6.33884 13.5134C6.18952 14.1285 6.23048 14.7744 6.45629 15.3656C6.6821 15.9569 7.08212 16.4656 7.60342 16.8246C8.12472 17.1835 8.74271 17.3757 9.37563 17.3757C10.0085 17.3757 10.6265 17.1835 11.1478 16.8246C11.6691 16.4656 12.0692 15.9569 12.295 15.3656C12.5208 14.7744 12.5617 14.1285 12.4124 13.5134C12.2631 12.8984 11.9305 12.3432 11.4588 11.9212L11.25 11.7325V4.375C11.25 3.87772 11.0525 3.40081 10.7008 3.04917C10.3492 2.69754 9.87228 2.5 9.375 2.5ZM10 7.5C10 7.33424 9.93415 7.17527 9.81694 7.05806C9.69973 6.94085 9.54076 6.875 9.375 6.875C9.20924 6.875 9.05027 6.94085 8.93306 7.05806C8.81585 7.17527 8.75 7.33424 8.75 7.5V12.6062C8.33299 12.7537 7.98153 13.0438 7.75773 13.4253C7.53393 13.8068 7.45221 14.2551 7.527 14.6911C7.6018 15.127 7.8283 15.5225 8.16646 15.8076C8.50463 16.0927 8.9327 16.249 9.375 16.249C9.81731 16.249 10.2454 16.0927 10.5835 15.8076C10.9217 15.5225 11.1482 15.127 11.223 14.6911C11.2978 14.2551 11.2161 13.8068 10.9923 13.4253C10.7685 13.0438 10.417 12.7537 10 12.6062V7.5Z"
            fill={color}
          />
        </svg>
      );
    case 'humidity':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M14.6725 8.74557L10.5294 2.14807C10.4693 2.0637 10.3899 1.99492 10.2978 1.94746C10.2057 1.9 10.1036 1.87524 10 1.87524C9.89641 1.87524 9.79431 1.9 9.70223 1.94746C9.61015 1.99492 9.53074 2.0637 9.47062 2.14807L5.30875 8.77682C4.73055 9.70948 4.40848 10.7781 4.375 11.8749C4.375 13.3668 4.96763 14.7975 6.02252 15.8524C7.07742 16.9073 8.50816 17.4999 10 17.4999C11.4918 17.4999 12.9226 16.9073 13.9775 15.8524C15.0324 14.7975 15.625 13.3668 15.625 11.8749C15.5891 10.7661 15.2605 9.68642 14.6725 8.74557ZM10 16.2499C8.84013 16.2485 7.7282 15.787 6.90805 14.9669C6.0879 14.1467 5.62649 13.0348 5.625 11.8749C5.65822 11.0009 5.92075 10.151 6.38625 9.41057L6.97062 8.47932L13.2669 14.7756C12.8579 15.2389 12.3552 15.61 11.792 15.8643C11.2288 16.1185 10.618 16.2496 10 16.2499Z"
            fill={color}
          />
          <path
            d="M14.6725 8.74557L10.5294 2.14807C10.4693 2.0637 10.3899 1.99492 10.2978 1.94746C10.2057 1.9 10.1036 1.87524 10 1.87524C9.89641 1.87524 9.79431 1.9 9.70223 1.94746C9.61015 1.99492 9.53074 2.0637 9.47062 2.14807L5.30875 8.77682C4.73055 9.70948 4.40848 10.7781 4.375 11.8749C4.375 13.3668 4.96763 14.7975 6.02252 15.8524C7.07742 16.9073 8.50816 17.4999 10 17.4999C11.4918 17.4999 12.9226 16.9073 13.9775 15.8524C15.0324 14.7975 15.625 13.3668 15.625 11.8749C15.5891 10.7661 15.2605 9.68642 14.6725 8.74557ZM10 16.2499C8.84013 16.2485 7.7282 15.787 6.90805 14.9669C6.0879 14.1467 5.62649 13.0348 5.625 11.8749C5.65822 11.0009 5.92075 10.151 6.38625 9.41057L6.97062 8.47932L13.2669 14.7756C12.8579 15.2389 12.3552 15.61 11.792 15.8643C11.2288 16.1185 10.618 16.2496 10 16.2499Z"
            fill={color}
            fill-opacity="0.2"
          />
        </svg>
      );
    case 'solar':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <g clip-path="url(#clip0_264_13)">
            <path
              d="M19 9.199H18.02C17.467 9.199 17.02 9.558 17.02 10C17.02 10.441 17.467 10.799 18.02 10.799H19C19.552 10.799 20 10.442 20 10C20 9.559 19.551 9.199 19 9.199ZM10 4.5C9.2771 4.49776 8.56089 4.63848 7.89259 4.91409C7.22428 5.1897 6.61708 5.59474 6.10591 6.10591C5.59474 6.61708 5.1897 7.22428 4.91409 7.89259C4.63848 8.56089 4.49776 9.2771 4.5 10C4.5 13.051 6.949 15.5 10 15.5C13.05 15.5 15.5 13.051 15.5 10C15.5 6.949 13.049 4.5 10 4.5ZM10 14C7.789 14 6 12.209 6 10C6 7.789 7.789 6 10 6C11.0609 6 12.0783 6.42143 12.8284 7.17157C13.5786 7.92172 14 8.93913 14 10C14 11.0609 13.5786 12.0783 12.8284 12.8284C12.0783 13.5786 11.0609 14 10 14ZM3 10C3 9.559 2.551 9.199 2 9.199H1C0.447 9.199 0 9.558 0 10C0 10.441 0.447 10.799 1 10.799H2C2.551 10.799 3 10.441 3 10ZM10 3C10.441 3 10.799 2.553 10.799 2V1C10.799 0.447 10.441 0 10 0C9.558 0 9.199 0.447 9.199 1V2C9.199 2.553 9.558 3 10 3ZM10 17C9.558 17 9.199 17.447 9.199 18V19C9.199 19.553 9.558 20 10 20C10.441 20 10.799 19.553 10.799 19V18C10.799 17.447 10.441 17 10 17ZM17.365 3.766C17.756 3.375 17.819 2.805 17.507 2.493C17.195 2.181 16.624 2.245 16.235 2.636L15.535 3.335C15.144 3.726 15.081 4.296 15.393 4.608C15.705 4.92 16.276 4.856 16.666 4.465L17.365 3.766ZM3.334 15.533L2.634 16.234C2.243 16.625 2.18 17.193 2.492 17.505C2.804 17.817 3.375 17.755 3.764 17.364L4.464 16.665C4.855 16.274 4.918 15.704 4.606 15.391C4.294 15.078 3.723 15.144 3.334 15.533ZM3.765 2.635C3.375 2.244 2.804 2.18 2.492 2.492C2.18 2.804 2.244 3.375 2.633 3.766L3.333 4.465C3.724 4.856 4.293 4.92 4.605 4.608C4.917 4.296 4.854 3.725 4.464 3.335L3.765 2.635ZM15.534 16.666L16.234 17.365C16.625 17.756 17.194 17.818 17.506 17.508C17.818 17.196 17.755 16.625 17.364 16.235L16.665 15.536C16.274 15.145 15.704 15.081 15.391 15.393C15.078 15.705 15.143 16.275 15.534 16.666Z"
              fill={color}
            />
          </g>
          <defs>
            <clipPath id="clip0_264_13">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case 'co2':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M4.16667 5.83337C3.72464 5.83337 3.30072 6.00897 2.98816 6.32153C2.67559 6.63409 2.5 7.05801 2.5 7.50004V12.5C2.5 12.9421 2.67559 13.366 2.98816 13.6786C3.30072 13.9911 3.72464 14.1667 4.16667 14.1667H6.66667V12.5H4.16667V7.50004H6.66667V5.83337H4.16667ZM9.16667 5.83337C8.72464 5.83337 8.30072 6.00897 7.98816 6.32153C7.67559 6.63409 7.5 7.05801 7.5 7.50004V12.5C7.5 12.9421 7.67559 13.366 7.98816 13.6786C8.30072 13.9911 8.72464 14.1667 9.16667 14.1667H10.8333C11.2754 14.1667 11.6993 13.9911 12.0118 13.6786C12.3244 13.366 12.5 12.9421 12.5 12.5V7.50004C12.5 7.05801 12.3244 6.63409 12.0118 6.32153C11.6993 6.00897 11.2754 5.83337 10.8333 5.83337H9.16667ZM9.16667 7.50004H10.8333V12.5H9.16667V7.50004ZM13.3333 8.75004V10H15.8333V11.25H14.5833C14.2518 11.25 13.9339 11.3817 13.6995 11.6162C13.465 11.8506 13.3333 12.1685 13.3333 12.5V15H17.0833V13.75H14.5833V12.5H15.8333C16.1649 12.5 16.4828 12.3683 16.7172 12.1339C16.9516 11.8995 17.0833 11.5816 17.0833 11.25V10C17.0833 9.66852 16.9516 9.35058 16.7172 9.11616C16.4828 8.88174 16.1649 8.75004 15.8333 8.75004H13.3333Z"
            fill={color}
          />
          <path
            d="M4.16667 5.83337C3.72464 5.83337 3.30072 6.00897 2.98816 6.32153C2.67559 6.63409 2.5 7.05801 2.5 7.50004V12.5C2.5 12.9421 2.67559 13.366 2.98816 13.6786C3.30072 13.9911 3.72464 14.1667 4.16667 14.1667H6.66667V12.5H4.16667V7.50004H6.66667V5.83337H4.16667ZM9.16667 5.83337C8.72464 5.83337 8.30072 6.00897 7.98816 6.32153C7.67559 6.63409 7.5 7.05801 7.5 7.50004V12.5C7.5 12.9421 7.67559 13.366 7.98816 13.6786C8.30072 13.9911 8.72464 14.1667 9.16667 14.1667H10.8333C11.2754 14.1667 11.6993 13.9911 12.0118 13.6786C12.3244 13.366 12.5 12.9421 12.5 12.5V7.50004C12.5 7.05801 12.3244 6.63409 12.0118 6.32153C11.6993 6.00897 11.2754 5.83337 10.8333 5.83337H9.16667ZM9.16667 7.50004H10.8333V12.5H9.16667V7.50004ZM13.3333 8.75004V10H15.8333V11.25H14.5833C14.2518 11.25 13.9339 11.3817 13.6995 11.6162C13.465 11.8506 13.3333 12.1685 13.3333 12.5V15H17.0833V13.75H14.5833V12.5H15.8333C16.1649 12.5 16.4828 12.3683 16.7172 12.1339C16.9516 11.8995 17.0833 11.5816 17.0833 11.25V10C17.0833 9.66852 16.9516 9.35058 16.7172 9.11616C16.4828 8.88174 16.1649 8.75004 15.8333 8.75004H13.3333Z"
            fill={color}
            fill-opacity="0.2"
          />
        </svg>
      );

    default:
      break;
  }
};

export const ChartDashIcons = (icon, color, size) => {
  switch (icon) {
    case 'temp':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M6.25 4.375C6.25 3.5462 6.57924 2.75134 7.16529 2.16529C7.75134 1.57924 8.5462 1.25 9.375 1.25C10.2038 1.25 10.9987 1.57924 11.5847 2.16529C12.1708 2.75134 12.5 3.5462 12.5 4.375V11.1875C13.1029 11.8029 13.5107 12.5825 13.6723 13.4287C13.8339 14.2749 13.7421 15.15 13.4084 15.9442C13.0746 16.7384 12.5139 17.4164 11.7963 17.8932C11.0788 18.37 10.2365 18.6244 9.375 18.6244C8.51351 18.6244 7.67119 18.37 6.95367 17.8932C6.23615 17.4164 5.67536 16.7384 5.34162 15.9442C5.00789 15.15 4.91606 14.2749 5.07766 13.4287C5.23926 12.5825 5.64708 11.8029 6.25 11.1875V4.375ZM9.375 2.5C8.87772 2.5 8.40081 2.69754 8.04918 3.04917C7.69755 3.40081 7.5 3.87772 7.5 4.375V11.7338L7.2925 11.9212C6.82072 12.3432 6.48816 12.8984 6.33884 13.5134C6.18952 14.1285 6.23048 14.7744 6.45629 15.3656C6.6821 15.9569 7.08212 16.4656 7.60342 16.8246C8.12472 17.1835 8.74271 17.3757 9.37563 17.3757C10.0085 17.3757 10.6265 17.1835 11.1478 16.8246C11.6691 16.4656 12.0692 15.9569 12.295 15.3656C12.5208 14.7744 12.5617 14.1285 12.4124 13.5134C12.2631 12.8984 11.9305 12.3432 11.4588 11.9212L11.25 11.7325V4.375C11.25 3.87772 11.0525 3.40081 10.7008 3.04917C10.3492 2.69754 9.87228 2.5 9.375 2.5ZM10 7.5C10 7.33424 9.93415 7.17527 9.81694 7.05806C9.69973 6.94085 9.54076 6.875 9.375 6.875C9.20924 6.875 9.05027 6.94085 8.93306 7.05806C8.81585 7.17527 8.75 7.33424 8.75 7.5V12.6062C8.33299 12.7537 7.98153 13.0438 7.75773 13.4253C7.53393 13.8068 7.45221 14.2551 7.527 14.6911C7.6018 15.127 7.8283 15.5225 8.16646 15.8076C8.50463 16.0927 8.9327 16.249 9.375 16.249C9.81731 16.249 10.2454 16.0927 10.5835 15.8076C10.9217 15.5225 11.1482 15.127 11.223 14.6911C11.2978 14.2551 11.2161 13.8068 10.9923 13.4253C10.7685 13.0438 10.417 12.7537 10 12.6062V7.5Z"
            fill={color}
          />
        </svg>
      );
    case 'humidity':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M14.6725 8.74557L10.5294 2.14807C10.4693 2.0637 10.3899 1.99492 10.2978 1.94746C10.2057 1.9 10.1036 1.87524 10 1.87524C9.89641 1.87524 9.79431 1.9 9.70223 1.94746C9.61015 1.99492 9.53074 2.0637 9.47062 2.14807L5.30875 8.77682C4.73055 9.70948 4.40848 10.7781 4.375 11.8749C4.375 13.3668 4.96763 14.7975 6.02252 15.8524C7.07742 16.9073 8.50816 17.4999 10 17.4999C11.4918 17.4999 12.9226 16.9073 13.9775 15.8524C15.0324 14.7975 15.625 13.3668 15.625 11.8749C15.5891 10.7661 15.2605 9.68642 14.6725 8.74557ZM10 16.2499C8.84013 16.2485 7.7282 15.787 6.90805 14.9669C6.0879 14.1467 5.62649 13.0348 5.625 11.8749C5.65822 11.0009 5.92075 10.151 6.38625 9.41057L6.97062 8.47932L13.2669 14.7756C12.8579 15.2389 12.3552 15.61 11.792 15.8643C11.2288 16.1185 10.618 16.2496 10 16.2499Z"
            fill={color}
          />
          <path
            d="M14.6725 8.74557L10.5294 2.14807C10.4693 2.0637 10.3899 1.99492 10.2978 1.94746C10.2057 1.9 10.1036 1.87524 10 1.87524C9.89641 1.87524 9.79431 1.9 9.70223 1.94746C9.61015 1.99492 9.53074 2.0637 9.47062 2.14807L5.30875 8.77682C4.73055 9.70948 4.40848 10.7781 4.375 11.8749C4.375 13.3668 4.96763 14.7975 6.02252 15.8524C7.07742 16.9073 8.50816 17.4999 10 17.4999C11.4918 17.4999 12.9226 16.9073 13.9775 15.8524C15.0324 14.7975 15.625 13.3668 15.625 11.8749C15.5891 10.7661 15.2605 9.68642 14.6725 8.74557ZM10 16.2499C8.84013 16.2485 7.7282 15.787 6.90805 14.9669C6.0879 14.1467 5.62649 13.0348 5.625 11.8749C5.65822 11.0009 5.92075 10.151 6.38625 9.41057L6.97062 8.47932L13.2669 14.7756C12.8579 15.2389 12.3552 15.61 11.792 15.8643C11.2288 16.1185 10.618 16.2496 10 16.2499Z"
            fill={color}
            fill-opacity="0.2"
          />
        </svg>
      );
    case 'solar':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 20 20"
          fill="none"
        >
          <g clip-path="url(#clip0_264_13)">
            <path
              d="M19 9.199H18.02C17.467 9.199 17.02 9.558 17.02 10C17.02 10.441 17.467 10.799 18.02 10.799H19C19.552 10.799 20 10.442 20 10C20 9.559 19.551 9.199 19 9.199ZM10 4.5C9.2771 4.49776 8.56089 4.63848 7.89259 4.91409C7.22428 5.1897 6.61708 5.59474 6.10591 6.10591C5.59474 6.61708 5.1897 7.22428 4.91409 7.89259C4.63848 8.56089 4.49776 9.2771 4.5 10C4.5 13.051 6.949 15.5 10 15.5C13.05 15.5 15.5 13.051 15.5 10C15.5 6.949 13.049 4.5 10 4.5ZM10 14C7.789 14 6 12.209 6 10C6 7.789 7.789 6 10 6C11.0609 6 12.0783 6.42143 12.8284 7.17157C13.5786 7.92172 14 8.93913 14 10C14 11.0609 13.5786 12.0783 12.8284 12.8284C12.0783 13.5786 11.0609 14 10 14ZM3 10C3 9.559 2.551 9.199 2 9.199H1C0.447 9.199 0 9.558 0 10C0 10.441 0.447 10.799 1 10.799H2C2.551 10.799 3 10.441 3 10ZM10 3C10.441 3 10.799 2.553 10.799 2V1C10.799 0.447 10.441 0 10 0C9.558 0 9.199 0.447 9.199 1V2C9.199 2.553 9.558 3 10 3ZM10 17C9.558 17 9.199 17.447 9.199 18V19C9.199 19.553 9.558 20 10 20C10.441 20 10.799 19.553 10.799 19V18C10.799 17.447 10.441 17 10 17ZM17.365 3.766C17.756 3.375 17.819 2.805 17.507 2.493C17.195 2.181 16.624 2.245 16.235 2.636L15.535 3.335C15.144 3.726 15.081 4.296 15.393 4.608C15.705 4.92 16.276 4.856 16.666 4.465L17.365 3.766ZM3.334 15.533L2.634 16.234C2.243 16.625 2.18 17.193 2.492 17.505C2.804 17.817 3.375 17.755 3.764 17.364L4.464 16.665C4.855 16.274 4.918 15.704 4.606 15.391C4.294 15.078 3.723 15.144 3.334 15.533ZM3.765 2.635C3.375 2.244 2.804 2.18 2.492 2.492C2.18 2.804 2.244 3.375 2.633 3.766L3.333 4.465C3.724 4.856 4.293 4.92 4.605 4.608C4.917 4.296 4.854 3.725 4.464 3.335L3.765 2.635ZM15.534 16.666L16.234 17.365C16.625 17.756 17.194 17.818 17.506 17.508C17.818 17.196 17.755 16.625 17.364 16.235L16.665 15.536C16.274 15.145 15.704 15.081 15.391 15.393C15.078 15.705 15.143 16.275 15.534 16.666Z"
              fill={color}
            />
          </g>
          <defs>
            <clipPath id="clip0_264_13">
              <rect width={size} height={size} fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case 'co2':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M4.16667 5.83337C3.72464 5.83337 3.30072 6.00897 2.98816 6.32153C2.67559 6.63409 2.5 7.05801 2.5 7.50004V12.5C2.5 12.9421 2.67559 13.366 2.98816 13.6786C3.30072 13.9911 3.72464 14.1667 4.16667 14.1667H6.66667V12.5H4.16667V7.50004H6.66667V5.83337H4.16667ZM9.16667 5.83337C8.72464 5.83337 8.30072 6.00897 7.98816 6.32153C7.67559 6.63409 7.5 7.05801 7.5 7.50004V12.5C7.5 12.9421 7.67559 13.366 7.98816 13.6786C8.30072 13.9911 8.72464 14.1667 9.16667 14.1667H10.8333C11.2754 14.1667 11.6993 13.9911 12.0118 13.6786C12.3244 13.366 12.5 12.9421 12.5 12.5V7.50004C12.5 7.05801 12.3244 6.63409 12.0118 6.32153C11.6993 6.00897 11.2754 5.83337 10.8333 5.83337H9.16667ZM9.16667 7.50004H10.8333V12.5H9.16667V7.50004ZM13.3333 8.75004V10H15.8333V11.25H14.5833C14.2518 11.25 13.9339 11.3817 13.6995 11.6162C13.465 11.8506 13.3333 12.1685 13.3333 12.5V15H17.0833V13.75H14.5833V12.5H15.8333C16.1649 12.5 16.4828 12.3683 16.7172 12.1339C16.9516 11.8995 17.0833 11.5816 17.0833 11.25V10C17.0833 9.66852 16.9516 9.35058 16.7172 9.11616C16.4828 8.88174 16.1649 8.75004 15.8333 8.75004H13.3333Z"
            fill={color}
          />
          <path
            d="M4.16667 5.83337C3.72464 5.83337 3.30072 6.00897 2.98816 6.32153C2.67559 6.63409 2.5 7.05801 2.5 7.50004V12.5C2.5 12.9421 2.67559 13.366 2.98816 13.6786C3.30072 13.9911 3.72464 14.1667 4.16667 14.1667H6.66667V12.5H4.16667V7.50004H6.66667V5.83337H4.16667ZM9.16667 5.83337C8.72464 5.83337 8.30072 6.00897 7.98816 6.32153C7.67559 6.63409 7.5 7.05801 7.5 7.50004V12.5C7.5 12.9421 7.67559 13.366 7.98816 13.6786C8.30072 13.9911 8.72464 14.1667 9.16667 14.1667H10.8333C11.2754 14.1667 11.6993 13.9911 12.0118 13.6786C12.3244 13.366 12.5 12.9421 12.5 12.5V7.50004C12.5 7.05801 12.3244 6.63409 12.0118 6.32153C11.6993 6.00897 11.2754 5.83337 10.8333 5.83337H9.16667ZM9.16667 7.50004H10.8333V12.5H9.16667V7.50004ZM13.3333 8.75004V10H15.8333V11.25H14.5833C14.2518 11.25 13.9339 11.3817 13.6995 11.6162C13.465 11.8506 13.3333 12.1685 13.3333 12.5V15H17.0833V13.75H14.5833V12.5H15.8333C16.1649 12.5 16.4828 12.3683 16.7172 12.1339C16.9516 11.8995 17.0833 11.5816 17.0833 11.25V10C17.0833 9.66852 16.9516 9.35058 16.7172 9.11616C16.4828 8.88174 16.1649 8.75004 15.8333 8.75004H13.3333Z"
            fill={color}
            fill-opacity="0.2"
          />
        </svg>
      );

    default:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M14.6725 8.74557L10.5294 2.14807C10.4693 2.0637 10.3899 1.99492 10.2978 1.94746C10.2057 1.9 10.1036 1.87524 10 1.87524C9.89641 1.87524 9.79431 1.9 9.70223 1.94746C9.61015 1.99492 9.53074 2.0637 9.47062 2.14807L5.30875 8.77682C4.73055 9.70948 4.40848 10.7781 4.375 11.8749C4.375 13.3668 4.96763 14.7975 6.02252 15.8524C7.07742 16.9073 8.50816 17.4999 10 17.4999C11.4918 17.4999 12.9226 16.9073 13.9775 15.8524C15.0324 14.7975 15.625 13.3668 15.625 11.8749C15.5891 10.7661 15.2605 9.68642 14.6725 8.74557ZM10 16.2499C8.84013 16.2485 7.7282 15.787 6.90805 14.9669C6.0879 14.1467 5.62649 13.0348 5.625 11.8749C5.65822 11.0009 5.92075 10.151 6.38625 9.41057L6.97062 8.47932L13.2669 14.7756C12.8579 15.2389 12.3552 15.61 11.792 15.8643C11.2288 16.1185 10.618 16.2496 10 16.2499Z"
            fill={color}
          />
          <path
            d="M14.6725 8.74557L10.5294 2.14807C10.4693 2.0637 10.3899 1.99492 10.2978 1.94746C10.2057 1.9 10.1036 1.87524 10 1.87524C9.89641 1.87524 9.79431 1.9 9.70223 1.94746C9.61015 1.99492 9.53074 2.0637 9.47062 2.14807L5.30875 8.77682C4.73055 9.70948 4.40848 10.7781 4.375 11.8749C4.375 13.3668 4.96763 14.7975 6.02252 15.8524C7.07742 16.9073 8.50816 17.4999 10 17.4999C11.4918 17.4999 12.9226 16.9073 13.9775 15.8524C15.0324 14.7975 15.625 13.3668 15.625 11.8749C15.5891 10.7661 15.2605 9.68642 14.6725 8.74557ZM10 16.2499C8.84013 16.2485 7.7282 15.787 6.90805 14.9669C6.0879 14.1467 5.62649 13.0348 5.625 11.8749C5.65822 11.0009 5.92075 10.151 6.38625 9.41057L6.97062 8.47932L13.2669 14.7756C12.8579 15.2389 12.3552 15.61 11.792 15.8643C11.2288 16.1185 10.618 16.2496 10 16.2499Z"
            fill={color}
            fill-opacity="0.2"
          />
        </svg>
      );
  }
};

export const ItemsCheck = (color) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M20.25 3.75H3.75C3.35218 3.75 2.97064 3.90804 2.68934 4.18934C2.40804 4.47064 2.25 4.85218 2.25 5.25V18.75C2.25 19.1478 2.40804 19.5294 2.68934 19.8107C2.97064 20.092 3.35218 20.25 3.75 20.25H20.25C20.6478 20.25 21.0294 20.092 21.3107 19.8107C21.592 19.5294 21.75 19.1478 21.75 18.75V5.25C21.75 4.85218 21.592 4.47064 21.3107 4.18934C21.0294 3.90804 20.6478 3.75 20.25 3.75ZM19.2806 8.03063L10.2806 17.0306C10.211 17.1004 10.1283 17.1557 10.0372 17.1934C9.94616 17.2312 9.84856 17.2506 9.75 17.2506C9.65144 17.2506 9.55384 17.2312 9.46279 17.1934C9.37175 17.1557 9.28903 17.1004 9.21937 17.0306L5.46938 13.2806C5.32864 13.1399 5.24958 12.949 5.24958 12.75C5.24958 12.551 5.32864 12.3601 5.46938 12.2194C5.61011 12.0786 5.80098 11.9996 6 11.9996C6.19902 11.9996 6.38989 12.0786 6.53063 12.2194L9.75 15.4397L18.2194 6.96937C18.3601 6.82864 18.551 6.74958 18.75 6.74958C18.949 6.74958 19.1399 6.82864 19.2806 6.96937C19.4214 7.11011 19.5004 7.30098 19.5004 7.5C19.5004 7.69902 19.4214 7.88989 19.2806 8.03063Z"
        fill={color}
      />
    </svg>
  );
};
