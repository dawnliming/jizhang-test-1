<template>
  <Layout>
    <Tabs class-prefix="type" :data-source="typeList" :value.sync="type"/>
    <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval"/>
    <div>
      type: {{type}}
      <br>
      interval: {{interval}}
    </div>
  </Layout>
</template>

<script>
import Types from "@/components/Money/Types";
import Vue from "vue";
import {Component} from "vue-property-decorator";
import Tabs from "@/components/Tabs";

@Component({
  components: {Tabs, Types}

})
export default class statistics extends Vue {
  type = '-'
  interval = 'day'
  intervalList = [
    {text: '按天', value: 'day'},
    {text: '按周', value: 'week'},
    {text: '按月', value: 'month'}
  ]
  typeList = [
    {text: '支出', value: '-'},
    {text: '收入', value: '+'}
  ]
}
</script>

<style scoped lang="scss">
::v-deep .type-tabs-item {
  background: white;

  &.selected {
    background: #c4c4c4;

    &::after {
      display: none;
    }
  }
}
</style>