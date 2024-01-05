type Mods = Record<string, boolean | string>

// Custom classNames() for init css classes in components.
// May be changed by default react method.
export function classNames(cls: string, mods: Mods = {}, additional: string[] = []): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className]) => className)
    ]
        .join(' ');
}