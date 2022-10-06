import { parseProps } from "./parseProps"
import { NodeType } from "./NodeType"
import { h, createTextVNode } from "vue"
import { warn } from "./warn"
import type { VNode } from "vue"

export const nodesTransformVNodes = (node: Node | void, components: object): VNode | void => {
  if (!node) {
    warn("无效的Node!")
    return
  }
  const createChildren = (children: NodeList): Array<VNode> => {
    const childrenVNodes: Array<VNode> = []
    if (children.length) {
      children.forEach((item: Node) => {
        childrenVNodes.push(
          item.nodeType == NodeType.Text
            ? createTextVNode(item.nodeValue as string)
            : (nodesTransformVNodes(item, components) as VNode)
        )
      })
    }
    return childrenVNodes
  }

  if (node.nodeType == NodeType.Element) {
    return h(
      components[node.nodeName.toLowerCase()]
        ? components[node.nodeName.toLowerCase()]
        : node.nodeName.toLowerCase(),
      parseProps(node as HTMLElement),
      {
        default: () => createChildren(node.childNodes),
      }
    )
  } else {
    return createTextVNode(node.nodeValue as string)
  }
}
