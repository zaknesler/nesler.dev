export const cx = (classNames: Array<any>): string =>
  classNames.filter(Boolean).join(' ')
