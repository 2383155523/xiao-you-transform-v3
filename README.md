# xiao-you-transform-v3

## description

### 一个用来将字符串 Dom 节点转换成 Vue3 虚拟节点的库

### A library use for make string HTML node transform Vue3 virtual Node

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

// Use In Vue3

// 1. Use In Setup Function
setup(){
    return VNodes
}

//2. Use In Render Function

render(){
    return VNodes
}
```
