<template>
  <div>
    <ElSelect
      v-model="remoteValue"
      :remote="true"
      :remoteMethod="remoteMethod"
      :options="remoteFileterOption"
      :loading="loading"
      placeholder="輸入關鍵字搜尋"
    />
    Search reunion place
  </div>
</template>
<script>
import ElSelect from '@/components/ElSelect'
import { fakeList } from '@/lib/fakeData'

export default {
  name: 'work-space',
  data () {
    return {
      fakeList,
      remoteList: [],
      remoteFileterOption: [],
      remoteValue: '',
      loading: false
    }
  },
  methods: {
    remoteMethod (query) {
      if (query !== '') {
        this.loading = true
        setTimeout(() => {
          this.loading = false

          this.remoteFileterOption = this.remoteList.filter(item => {
            return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1
          })
        }, 200)
      } else {
        this.remoteFileterOption = []
      }
    }
  },
  mounted () {
    this.remoteList = this.fakeList.map((item, index) => ({
      label: item,
      value: index
    }))
  },
  components: {
    ElSelect
  }
}
</script>
