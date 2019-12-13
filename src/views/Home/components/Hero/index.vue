<template>
  <div class="hero" :class="[theme]">
    <div class="hero__content">
      <div class="hero__left">
        <TypographyTitle
          size="xl"
          isBlock
          msg="租借場地的新體驗"
          level="h2"
          color="gray-white"
        />
        <TypographyText
          size="md"
          isBlock
          msg="各式場地都為你準備好了，步驟123 訂購好簡單"
          color="gray-white"
        />
        <Tabs
          class="hero-tabs"
          v-model="currentTab"
          :tabList="searchTabs"
          activeTab="1"
          :handleClick="handleTabClick"
        >
          <template v-slot:tabView>
            <router-view></router-view>
          </template>
        </Tabs>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { TypographyText } from '@/components/Typography'
import TypographyTitle from '@/components/Typography/Title'
import Tabs from '@/components/Tabs'

const TAB_ROUTES = {
  WORK_SPACE: 'work-space',
  REUNION_SPACE: 'reunion-space'
}

export default {
  name: 'hero',
  data () {
    return {
      TAB_ROUTES,
      searchTabs: [
        {
          label: '搜出好場地',
          value: 'work-space'
        },
        {
          label: '找聚餐包廂',
          value: 'reunion-space'
        }
      ],
      currentTab: 'work-space',
    }
  },
  methods: {
    handleTabClick (tab, event) {
      this.$route.name !== tab.name && this.$router.push({ name: this.currentTab })
    },
  },
  computed: {
    theme () {
      return this.currentTab === 'work-space' ? 'hero--primary' : 'hero--secondary'
    }
  },
  mounted () {
    this.currentTab = this.$route.name
  },
  components: {
    TypographyText,
    TypographyTitle,
    Tabs,
  }
}
</script>

<style lang="scss" scoped>
.hero {
  height: calc(100vh - 91px);
  padding: 1rem 1.5rem;

  &--primary {
    transition: all ease-in-out .5s;
    background: linear-gradient(rgb(255, 211, 130) 0%, rgb(255, 174, 139) 100%);
  }
  &--secondary {
    background: linear-gradient(rgb(180, 220, 207) 0%, rgb(122, 192, 204) 100%);
  }
  &__content {
    max-width: 1024px;
    margin: 0 auto;
  }
  &-left {
    width: 45%;
  }
  &-tabs {
    margin: 1.25rem 0;
  }
}
</style>
