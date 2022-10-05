import { expect, test, describe } from "vitest"
import { templateTransformNode } from "../templateTransformNode"

describe("checkTemplateTransformNodes", () => {
  const template1 = `<div class="red" id="blue" style="color:red;">111</div>`
  test("test1", () => {
    expect(templateTransformNode(template1).style.color == "red").toBe(true)
    expect(templateTransformNode(template1).id == "blue").toBe(true)
    expect(templateTransformNode(template1).className == "red").toBe(true)
  })

  test("test2", () => {
    expect(templateTransformNode(template1).style.color == "red1").toBe(false)
    expect(templateTransformNode(template1).id == "blue1").toBe(false)
    expect(templateTransformNode(template1).className == "red1").toBe(false)
  })
})
