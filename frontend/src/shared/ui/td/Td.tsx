import { ClassNames } from "@/shared/lib/classNames";
import React, { FC, ReactNode } from "react";

interface TdTagProps {
  children?: ReactNode;
  className?: string;
}

export const TdTag: FC<TdTagProps> = ({ className, children }) => {
  return (
    <td
      className={ClassNames(
        "text-center py-3 px-6 font-semibold  max-832:px-2 max-832:py-2 max-sm:py-1 max-sm:px-1 max-832:text-lg max-sm:text-sm max-520:text-xs",
        {},
        [className]
      )}
    >
      {children}
    </td>
  );
};
