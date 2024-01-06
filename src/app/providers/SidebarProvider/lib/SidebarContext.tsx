import {createContext} from "react";

export const Collapsed = true;

interface SidebarContextProps {
    collapsed?: true | false;
    setCollapsed?: (collapsed: boolean) => void
}

export const SidebarContext = createContext<SidebarContextProps>({})
