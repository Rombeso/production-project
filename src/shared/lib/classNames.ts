
type ModeType = Record<string, string | boolean>

export function classNames(cls: string, mode?: ModeType, additional?: string[]): string {

    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mode)
           .filter(([className, value]) => Boolean(value))
           .map(([className, value]) => className)
    ].join(' ')


}