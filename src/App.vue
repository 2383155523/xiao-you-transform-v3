<script lang="ts" setup>
import { shallowRef, onMounted, h } from "vue"
import {
  templateTransformNode,
  nodesTransformVNodes,
  VNodesTransformRenderFunction,
} from "../lib/index"
import type { Vnode } from "../lib/index.d"
const template = `<div id="root"><span><i><b>11</b></i></span></div>`

console.log(nodesTransformVNodes(templateTransformNode(template)))
</script>

<template>
  <div id="root">
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
