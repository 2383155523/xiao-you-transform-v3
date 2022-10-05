# xiao-you-transform-v3

## Use

### Template Transfrom Node

```TypeScript
import { templateTransformNodes } from 'xiao-you-transform-v3'

const template:string = `<div id="root"><span><i><b>11</b></i></span></div>`

const node = templateTransformNodes(template)
// node = HTML NODE

```

### Node Transfrom VNodes

```TypeScript
import {
    templateTransformNodes,
    nodesTransformVNodes
} from 'xiao-you-transform-v3'

const template:string = `<div id="root"><span><i><b>11</b></i></span></div>`

const nodes = templateTransformNodes(template)
// node = HTML NODE

const VNodes = nodesTransformVNodes(nodes)

 VNodes = {
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

```

### VNodesTransformRenderFunction

```TypeScript
import {
    templateTransformNodes,
    nodesTransformVNodes,
    VNodesTransformRenderFunction
} from 'xiao-you-transform-v3'

const template:string = `<div id="root"><span><i><b>11</b></i></span></div>`

const nodes = templateTransformNodes(template)
// node = HTML NODE

const VNodes = nodesTransformVNodes(nodes)

const RenderFunction = VNodesTransformRenderFunction(VNodes)

// Use In Vue3

// 1. Use In Setup Function
setup(){
    return RenderFunction
}

//2. Use In Render Function

render(){
    return RenderFunction
}

```
