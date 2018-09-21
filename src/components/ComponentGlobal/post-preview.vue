<template>
  <div class="cp-post" v-if="mainArticle">
    <router-link :to="{name: 'Detail', params: {id: mainArticle.id}}" tag="a">
      <div class="cp-thumb"> <img :src="mainArticle.images[0].name.url |takeImage " alt="neo">
        <div class="cp-post-hover"> <a href="#"><i class="fa fa-link"></i></a> <a href="#"><i class="fa fa-search"></i></a> </div>
      </div>
    </router-link>
    <div class="cp-post-base">
      <div class="cp-post-content">
        <h2>{{mainArticle.title}}</h2>
        <ul class="cp-post-meta">
          <li><a href="#">1 months ago</a></li>
          <li><a href="#">Photography</a></li>
        </ul>
        <p><img :src="mainArticle.images[1].name.url |takeImage" alt="neo"></p>
        <a href="#" class="leave-comment"><i class="fa fa-comment-o"></i> Leave a Comment</a> </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['mainArticle']
  }
</script>
<style lang="scss">

</style>
