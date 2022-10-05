import { expect, test, describe } from "vitest"
import { templateTransformNodes } from "../templateTransformNodes"

describe("checktemplateTransformNodess", () => {
  const template1 = `<div class="red" id="blue" style="color:red;">111</div>`
  test("test1", () => {
    expect(templateTransformNodes(template1).style.color == "red").toBe(true)
    expect(templateTransformNodes(template1).id == "blue").toBe(true)
    expect(templateTransformNodes(template1).className == "red").toBe(true)
  })

  test("test2", () => {
    expect(templateTransformNodes(template1).style.color == "red1").toBe(false)
    expect(templateTransformNodes(template1).id == "blue1").toBe(false)
    expect(templateTransformNodes(template1).className == "red1").toBe(false)
  })
})
