export type PickAndPartialByKeys<T, K extends keyof T> = Partial<Pick<T, K>>;
export type PartialByKeys<T, K extends keyof T> = Omit<T, K> & PickAndPartialByKeys<T, K>;
