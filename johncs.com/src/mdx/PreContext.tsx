import React, { createContext, useContext, ReactNode } from "react";

const PreContext = createContext(false);

export function usePreContext() {
  return useContext(PreContext);
}

export function PreProvider({ children }: { children: ReactNode }) {
  return <PreContext.Provider value={true}>{children}</PreContext.Provider>;
}
