<script lang="ts" setup>
import { shallowRef, onMounted, h } from "vue"
import { templateTransformNodes, nodesTransformVNodes } from "xiao-you-transform-v3"

const template = `<div class="red">111</div><div>111</div>`
const root = shallowRef<HTMLElement>()
const node = templateTransformNodes(template) //dom节点
console.log("node=", node)
console.log(nodesTransformVNodes(node, {}))
</script>

<template>
  <div id="root" ref="root">
    <span>
      <i>
        <b>11</b>
      </i>
    </span>
    <p class="red">
      <span>
        <i>
          <b>11</b>
        </i>
      </span>
    </p>
    <p>33</p>
  </div>
</template>

<style scoped>
.red {
  color: red;
}
</style>
