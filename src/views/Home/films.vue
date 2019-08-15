<template>
  <div class="page-home-films">
    <Banner :imgs="bannerListImgs" v-if="bannerListImgs.length > 0"></Banner>
  </div>
</template>

<script>
import Banner from '../../components/Banner/index'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'films',
  components: {
    Banner
  },
  computed: {
    ...mapGetters('films', ['bannerListImgs'])
  },
  methods: {
    ...mapActions('films', ['getBannerList'])
  },
  created () {
    this.getBannerList()
  }
}
</script>
