import { ReactNode } from "react";


type BProps = {
  children: ReactNode;
};

export default ({ children }: BProps) => (
  <span className="text-offblue font-semibold">{children}</span>
);