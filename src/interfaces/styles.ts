import { CSSProperties } from "react";

export interface headerStylesProps extends Omit<CSSProperties, "height"> {
  height: { xs: number; md: number };
}
