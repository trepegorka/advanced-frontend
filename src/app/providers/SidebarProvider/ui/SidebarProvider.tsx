import {useState, useMemo} from 'react';
import {Collapsed, SidebarContext} from "../lib/SidebarContext";

export const SidebarProvider = ({children}: any) => {

    const [collapsed, setCollapsed] = useState<boolean>(Collapsed)

    const defaultProps = useMemo(() => ({
        collapsed: collapsed,
        setCollapsed: setCollapsed
    }), [collapsed])

    return (
        <SidebarContext.Provider value={defaultProps}>
            {children}
        </SidebarContext.Provider>
    );
};