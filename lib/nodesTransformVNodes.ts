import { parseProps } from "./parseProps"
import { NodeType } from "./NodeType"
import type { Vnode } from "./index.d"

export const nodesTransformVNodes = (node: Node): Vnode => {
  const VNode: Vnode = {} as Vnode
  VNode.tag = node.nodeType == NodeType.Element ? node.nodeName : null
  VNode.props = node.nodeType == NodeType.Element ? parseProps(node as HTMLElement) : null
  VNode.type = NodeType[node.nodeType]
  VNode.children =
    node.nodeType == NodeType.Element ? ([] as Array<Vnode>) : (node.nodeValue as string)
  for (let i = 0; i < node.childNodes.length; i++) {
    typeof VNode.children != "string" &&
      VNode.children.push(nodesTransformVNodes(node.childNodes[i]))
  }
  return VNode
}
