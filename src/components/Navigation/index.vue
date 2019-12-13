<template>
  <header class="nav">
    <div class="nav__left">
      <div class="nav__logo">
        <img src="../../assets/icons/space-logo.svg" alt="logo" />
      </div>
      <ul class="nav__left-list">
        <li v-for="(item, index) in commercialList" :key="index">
          <template v-if="item.image">
            <img :src="item.image" :width="100" />
          </template>
          <template v-else>
            <router-link :to="item.link">
              <TypographyText :msg="item.msg" :size="item.fontSize" />
            </router-link>
          </template>
        </li>
      </ul>
      <TypographyText msg="天天抽iPhone11" color="danger" size="md" />
      <TypographyText
        msg="累積積分換 7-11 禮卷"
        color="gray-white"
        size="xs"
        :customStyle="{ backgroundColor: 'purple' }"
      />
    </div>
    <ul class="nav__right-list">
      <li v-for="(item, index) in memberList" :key="index">
        <TypographyText :color="item.color" :msg="item.msg" />
      </li>
    </ul>
  </header>
</template>

<script>
import { TypographyText } from '@/components/Typography'

export default {
  name: 'Navigation',
  data () {
    return {
      commercialList: [
        {
          msg: '找場地',
          link: '/about',
          fontSize: 'xs',
          image: null
        },
        {
          msg: '發案大廳',
          link: '/',
          fontSize: 'sm',
          image: null
        },
        {
          msg: null,
          link: '/about',
          fontSize: 'sm',
          image: require('../../assets/images/double-eleven.png')
        }
      ],
      memberList: [
        {
          msg: '成為場地主',
          link: '/about',
          color: 'gray-darkest'
        },
        {
          msg: '常見問題',
          link: '/about',
          color: 'gray-darkest'
        },
        {
          msg: '註冊',
          link: '/about',
          color: 'primary'
        },
        {
          msg: '登入',
          link: '/about',
          color: 'primary'
        }
      ]
    }
  },
  components: {
    TypographyText
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav {
  padding: 0.5rem 4rem;
  display: flex;
  &__logo {
    width: 180px;
  }
  &__left {
    display: flex;
    align-items: center;
  }
  &__left-list {
    display: flex;
    position: relative;
    align-items: center;
    margin-left: 0.5rem;
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      width: 1px;
      height: 80%;
      background-color: $gray;
      transform: translateY(-50%);
    }
  }
  &__right-list {
    display: flex;
    align-items: center;
    margin-left: auto;
  }
}
</style>
