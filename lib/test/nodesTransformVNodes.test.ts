import { expect, test, describe } from "vitest"
import { nodesTransformVNodes } from "../nodesTransformVNodes"
import { templateTransformNodes } from "../templateTransformNodes"
const template = `<div id="root"><span><i><b>11</b></i></span></div>`

describe("checkNodesTransformVnodes", () => {
  test("test1", () => {
    const nodes = templateTransformNodes(template)
    const anwser = {
      tag: "DIV",
      props: {
        id: "root",
      },
      type: "Element",
      children: [
        {
          tag: "SPAN",
          props: {},
          type: "Element",
          children: [
            {
              tag: "I",
              props: {},
              type: "Element",
              children: [
                {
                  tag: "B",
                  props: {},
                  type: "Element",
                  children: [
                    {
                      tag: null,
                      props: null,
                      type: "Text",
                      children: "11",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }
    expect(nodesTransformVNodes(nodes)).toEqual(anwser)
  })
})
