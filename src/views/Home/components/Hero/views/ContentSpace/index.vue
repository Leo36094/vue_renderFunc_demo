<template>
  <div>
    <ElSelect v-model="peopleSumValue" :options="peopleSumOptions" />
    Search work place
  </div>
</template>
<script>
import ElSelect from '@/components/ElSelect'
export default {
  name: 'content-reunion',
  data () {
    return {
      peopleSumOptions: [
        {
          label: '10人以內',
          value: '1'
        },
        {
          label: '11 - 30',
          value: '2'
        }
      ],
      peopleSumValue: '',
    }
  },
  components: {
    ElSelect,
  }
}
</script>
