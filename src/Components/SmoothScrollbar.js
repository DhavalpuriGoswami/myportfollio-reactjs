import { useEffect, useRef } from "react";
import ScrollBar from "react-smooth-scrollbar";

const SmoothScrollbar = ({ children }) => {
  const ref = useRef(null);

  return (
    <ScrollBar ref={ref} damping={".09"}>
      {children}
    </ScrollBar>
  );
};
export default SmoothScrollbar;
