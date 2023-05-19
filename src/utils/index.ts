export const isObject = (value: unknown): value is Record<any, any> => {
  return value !== null && typeof value === "object"
}
export const isFunction = (value: unknown): value is (...args: any) => any => {
  return typeof value === "function"
}

export const isString = (value: unknown): value is string => {
  return typeof value === "string"
}
export const isBoolean = (value: unknown): value is boolean => {
  return typeof value === "boolean"
}
export const isNumber = (value: unknown): value is number => {
  return typeof value === "number"
}
export const isUndef = (value: unknown): value is undefined => {
  return typeof value === "undefined"
}
