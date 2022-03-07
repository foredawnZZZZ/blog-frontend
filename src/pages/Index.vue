<template>
 <Layout>
  <!-- Page Header-->
  <header
   class="masthead"
   :style="{
    backgroundImage: `url(${general.cover.url})`
   }"
  >
  <div>
  <img :src="general.cover.url" alt="">
  <p>test</p>
  </div>
   <div class="container position-relative px-4 px-lg-5">
    <div class="row gx-4 gx-lg-5 justify-content-center">
     <div class="col-md-10 col-lg-8 col-xl-7">
      <div class="site-heading">
       <h1>{{general.title}}</h1>
       <span class="subheading">{{general.subtitle}}</span>
      </div>
     </div>
    </div>
   </div>
  </header>
  <!-- Main Content-->
  <div class="container px-4 px-lg-5">
   <div class="row gx-4 gx-lg-5 justify-content-center">
    <div class="col-md-10 col-lg-8 col-xl-7">
     <!-- Post preview-->
     <div class="post-preview" v-for="edge in $page.posts.edges" :key="edge.node.id">
      <g-link :to="'/post/' + edge.node.id">
       <h2 class="post-title">
        {{edge.node.title}}
       </h2>
      </g-link>
      <p>
       <span v-for="tag in edge.node.tags" :key="tag.id">
        <g-link :to="'/tag/' + tag.id">{{tag.title}}</g-link>
        &nbsp;
       </span>
      </p>
     </div>
     <!-- Pager-->
     <Pager :info="$page.posts.pageInfo" />
    </div>
   </div>
  </div>
 </Layout>
</template>

<page-query>
query ($page:Int){
 posts: allStrapiPosts(perPage: 2,page:$page) @paginate {
    pageInfo {
      totalPages,
      currentPage
    },
    edges {
      node {
        id,
        created_at,
        content,
        title,
        img {
          url
        },
        tags {
          title,id
        }
      }
    }
  },
  general: strapiGeneral(id:1) {
    id,title,cover { url },subtitle
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'
export default {
 metaInfo: {
  title: "Hello, world!",
 },
 components: {
  Pager
 },
 name: "Home",
 created() {
  console.log(this);
  console.log(process.env)
 },
 computed: {
  general() {
   return this.$page.general
  }
 }
};
</script>

<style></style>
