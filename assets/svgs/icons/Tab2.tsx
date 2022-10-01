import { createSvgIcon, SvgIcon } from "@mui/material";

export const Tab2 = ({ ...rest }) => {
  const svg = createSvgIcon(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="24"
      fill="none"
      viewBox="0 0 26 24"
    >
      <path
        fill="#fff"
        d="M20.808 13.273c-.715 0-1.395.179-1.999.497l-2.65-4.18c.816-.927 1.318-2.189 1.318-3.584 0-2.84-2.084-5.138-4.656-5.138-2.569 0-4.655 2.302-4.655 5.138 0 1.378.491 2.629 1.291 3.552l-2.636 4.167a4.274 4.274 0 00-1.908-.452c-2.57 0-4.656 2.302-4.656 5.138 0 2.84 2.084 5.139 4.656 5.139 2.27 0 4.161-1.794 4.57-4.17h6.754c.412 2.376 2.302 4.17 4.57 4.17 2.57 0 4.656-2.302 4.656-5.139 0-2.836-2.084-5.138-4.655-5.138zm-4.579 4.22H9.491a5.335 5.335 0 00-1.266-2.688l2.624-4.141c.599.31 1.268.483 1.972.483.692 0 1.348-.168 1.94-.466l2.662 4.203a5.332 5.332 0 00-1.194 2.61z"
      ></path>
    </svg>,
    "Svg"
  );

  return <SvgIcon {...rest} viewBox="0 0 26 24" component={svg} />;
};