import { expect, test, describe } from "vitest"
import { templateTransformNodes } from "../templateTransformNodes"

describe("checktemplateTransformNodess", () => {
  test("Element Node", () => {
    const template = `<div class="red" id="blue" style="color:red;">111</div>`
    const element = templateTransformNodes(template) as HTMLElement
    expect(element.style.color == "red").toBe(true)
    expect(element.id == "blue").toBe(true)
    expect(element.className == "red").toBe(true)
  })

  test("Text Node", () => {
    const template = `11111122223333`
    const textNode = templateTransformNodes(template)
    expect(textNode).toEqual(document.createTextNode(template))
  })

  test("two root Nodes warn | return undefined", () => {
    const template = `<div>one root node</div><div>two root node</div>`
    const textNode = templateTransformNodes(template)
    expect(textNode).toEqual(undefined)
  })
})
