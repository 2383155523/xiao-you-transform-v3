import { h } from "vue"
import type { Vnode } from "./index.d"

export const VNodesTransformRenderFunction = (Vnode: Vnode, components: object) => {
  const createChildren = (children: Array<Vnode> | string) => {
    const childrenRenderFunctionArray: Array<any> = []
    if (typeof children == "string") {
      childrenRenderFunctionArray.push(children)
      return childrenRenderFunctionArray
    } else {
      children.forEach((item: Vnode) => {
        childrenRenderFunctionArray.push(
          item.type == "Text" ? item.children : VNodesTransformRenderFunction(item, components)
        )
      })
      return childrenRenderFunctionArray
    }
  }

  return h(
    components[Vnode.tag?.toLowerCase() as string]
      ? components[Vnode.tag?.toLowerCase() as string]
      : Vnode.tag,
    Vnode.props,
    {
      default: () => createChildren(Vnode.children),
    }
  )
}
