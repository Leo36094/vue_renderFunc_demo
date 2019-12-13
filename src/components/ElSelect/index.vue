<template>
  <el-select
    class="select"
    v-model="fullValue"
    :remote="remote"
    :filterable="remote"
    :remote-method="remoteMethod"
    :loading="loading"
    :placeholder="placeholder"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
    </el-option>
  </el-select>
</template>

<script>
export default {
  name: 'elselect',
  props: {
    value: {
      type: [String, Number],
      default: () => ''
    },
    options: {
      type: Array,
      default: () => [],
      required: true
    },
    remote: {
      type: Boolean,
      default: () => false
    },
    remoteMethod: {
      type: Function,
      default: () => () => null
    },
    loading: {
      type: Boolean,
      default: () => false
    },
    placeholder: {
      type: String,
      default: () => '請選擇'
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
  }
}
</script>
<style lang="scss">
.select {
  width: 100%;
}
</style>
