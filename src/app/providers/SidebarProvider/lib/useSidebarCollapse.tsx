import { useContext } from 'react'
import { SidebarContext } from './SidebarContext'

interface useCollapseResult {
    collapsed: true | false
    changeCollapse: () => void
}

export function useSidebarCollapse (): useCollapseResult {
    const { collapsed, setCollapsed } = useContext(SidebarContext)

    const changeCollapse = () => {
        const collapse = !collapsed
        setCollapsed(collapse)
    }
    return {
        collapsed,
        changeCollapse
    }
}
