import { createSvgIcon, SvgIcon } from '@mui/material';

export const GarbageIcon = ({ ...rest }) => {
  const svg = createSvgIcon(
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.25 21H6.75C6.35218 21 5.97064 20.842 5.68934 20.5607C5.40804 20.2794 5.25 19.8978 5.25 19.5V6H18.75V19.5C18.75 19.8978 18.592 20.2794 18.3107 20.5607C18.0294 20.842 17.6478 21 17.25 21Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.75 16.5V10.5"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.25 16.5V10.5"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.25 6H21.75"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.25 3H9.75C9.35218 3 8.97064 3.15804 8.68934 3.43934C8.40804 3.72064 8.25 4.10218 8.25 4.5V6H15.75V4.5C15.75 4.10218 15.592 3.72064 15.3107 3.43934C15.0294 3.15804 14.6478 3 14.25 3Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>,
    'Svg'
  );

  return <SvgIcon {...rest} viewBox="0 0 24 24" component={svg} />;
};
