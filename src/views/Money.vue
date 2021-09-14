<template>
  <Layout class-prefix="layout">
    <NumberPad />
    <Types />
    <Notes />
    <Tags />
  </Layout>
</template>

<script>
import Types from "@/components/Money/Types";
import Tags from "@/components/Money/Tags";
import NumberPad from "@/components/Money/NumberPad"
import Notes from "@/components/Money/Notes";
export default {
  name: "Money",
  components: {Notes, NumberPad, Tags, Types}
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
