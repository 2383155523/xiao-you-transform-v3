import { expect, test, describe } from "vitest"
import { nodesTransformVNodes } from "../nodesTransformVNodes"
import { templateTransformNodes } from "../templateTransformNodes"
import { h, createTextVNode } from "vue"

describe("checkNodesTransformVnodes", () => {
  test("Element Node", () => {
    const template = `<div id="root"><span><i><b>11</b></i></span></div>`
    const nodes = templateTransformNodes(template)
    expect(nodesTransformVNodes(nodes, {})).toEqual(
      h("div", { id: "root" }, [
        h("span", null, [h("i", null, [h("b", null, [createTextVNode("11")])])]),
      ])
    )
  })
  test("Text Node", () => {
    const template = `123456`
    const nodes = templateTransformNodes(template)
    expect(nodesTransformVNodes(nodes, {})).toEqual(createTextVNode(template))
  })
  test("Error Node warn | return undefined", () => {
    const template = `<div>one root node</div> <div>two root node</div>`
    const nodes = templateTransformNodes(template)
    expect(nodesTransformVNodes(nodes, {})).toEqual(undefined)
  })
})
