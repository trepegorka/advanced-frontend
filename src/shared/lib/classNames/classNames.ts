type Mods = Record<string, boolean>

// Custom classNames() for init css classes in components.
// May be changed by default react method.
export function classNames (
    cls: any,
    mods: Mods = {},
    additional?: Array<string | undefined>): string {
    return [
        cls,
        ...(additional === undefined ? [] : additional.filter(Boolean)),
        ...Object.entries(mods)
            // eslint-disable-next-line
            .filter(([className, value]) => Boolean(value))
            .map(([className]) => className)
    ]
        .join(' ')
}
