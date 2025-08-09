// https://stackoverflow.com/a/76547796
type Dot<T extends string, U extends string> = '' extends U ? T : `${T}.${U}`

export type GetKeysForArrayValues<T> = T extends unknown[]
  ? ''
  : T extends readonly unknown[]
    ? Dot<'', GetKeysForArrayValues<T[number]>>
    : {
        [K in keyof T & string]: T[K] extends string
          ? never
          : Dot<K, GetKeysForArrayValues<T[K]>>
      }[keyof T & string]

type StopTypes = string | number

type ExcludedTypes = unknown[]

export type GetKeys<T> = T extends StopTypes
  ? ''
  : T extends readonly unknown[]
    ? GetKeys<T[number]>
    : {
        [K in keyof T & string]: T[K] extends StopTypes
          ? K
          : T[K] extends ExcludedTypes
            ? never
            : K | Dot<K, GetKeys<T[K]>>
      }[keyof T & string]

export type NestedObject<T = unknown> = {
  [key: string]: NestedObject<T> | T
}
