import { ReactNode } from "react";

export default function Shutter({ children }: { children: ReactNode }) {
  return (
    <div className="absolute  backdrop-blur-md z-50 w-full flex flex-col header-screen">
      <div className="w-full">{children}</div>
      <div className="flex-1 w-full bg-white/60"></div>
    </div>
  );
}
