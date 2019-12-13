<template>
  <el-tabs
    class="tabs"
    v-model="fullValue"
    :type="tabType"
    @tab-click="handleClick"
  >
    <el-tab-pane
      v-for="(tab, index) in tabList"
      :label="tab.label"
      :name="tab.value"
      :key="index"
    >
    </el-tab-pane>
    <slot name="tabView"></slot>
  </el-tabs>
</template>

<script>
export default {
  name: 'tabs',
  props: {
    tabList: {
      type: Array,
      default: () => [],
      required: true
    },
    tabType: {
      type: String,
      default: () => 'card'
    },
    value: {
      type: String,
      default: () => ''
    },
    handleClick: {
      type: Function,
      default: () => () => null
    }
  },
  data () {
    return {}
  },
  computed: {
    fullValue: {
      get () {
        return this.value
      },
      set (newValue) {
        this.$emit('input', newValue)
      }
    }
  },
  methods: {},
  components: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.tabs {
  .el-tabs__item {
    color: $gray-white;
  }
  .el-tabs__item.is-active, .el-tabs__item:hover {
    color: $color-primary-darker;
  }

}
</style>
