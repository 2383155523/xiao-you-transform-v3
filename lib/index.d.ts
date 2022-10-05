export interface Vnode {
  type: string
  tag: string | null
  props: object | null
  children: Array<Vnode> | string
}
