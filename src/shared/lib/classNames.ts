
type ModeType = Record<string, string | boolean>

export function classNames(cla: string, mode: ModeType, additional: string[]): string {

    return [
        cla,
        ...additional,
        ...Object.entries(mode)
           .filter(([className, value]) => Boolean(value))
           .map(([className, value]) => className)
    ].join(' ')


}