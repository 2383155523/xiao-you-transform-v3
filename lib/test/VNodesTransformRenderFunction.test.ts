import { expect, test, describe } from "vitest"
import { h } from "vue"
import { nodesTransformVNodes } from "../nodesTransformVNodes"
import { templateTransformNode } from "../templateTransformNode"
import { VNodesTransformRenderFunction } from "../VNodesTransformRenderFunction"
const template = `<div id="root"><span><i><b>11</b></i></span></div>`
const nodes = templateTransformNode(template)
const vnodes = nodesTransformVNodes(nodes)

describe("checkVNodesTransformRenderFunction", () => {
  test("test1", () => {
    expect(VNodesTransformRenderFunction(vnodes, {})).toEqual(
      h("DIV", { id: "root" }, [h("SPAN", {}, [h("I", {}, [h("B", {}, ["11"])])])])
    )
  })
})
