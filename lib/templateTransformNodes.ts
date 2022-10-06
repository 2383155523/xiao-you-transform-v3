import { warn } from "./warn"
import { NodeType } from "./NodeType"

export const templateTransformNodes = (template: string): HTMLElement | Text | void => {
  const container: HTMLDivElement = document.createElement("div")
  container.innerHTML = template
  if (container.childNodes.length > 1) {
    warn("模板只能存在一个根节点！")
    return
  }
  const firstNode: Node = container.childNodes[0]

  if (firstNode.nodeType == NodeType.Element) {
    return firstNode as HTMLElement
  } else if (firstNode.nodeType == NodeType.Text) {
    return document.createTextNode(firstNode.nodeValue as string) as Text
  }
}
