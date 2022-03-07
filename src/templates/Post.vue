<template>
 <Layout>
  <!-- Page Header-->
  <header
   class="masthead"
   :style="{
    backgroundImage: $page.post.img ? `url(http://106.75.226.89:1337${$page.post.img.formats.thumbnail.url})` : ''
   }"
  >
   <div class="container position-relative px-4 px-lg-5">
    <div class="row gx-4 gx-lg-5 justify-content-center">
     <div class="col-md-10 col-lg-8 col-xl-7">
      <div class="post-heading">
       <h1>{{$page.post.title}}</h1>
      </div>
     </div>
    </div>
   </div>
  </header>
  <!-- Post Content-->
  <article class="mb-4">
   <div class="container px-4 px-lg-5">
    <div class="row gx-4 gx-lg-5 justify-content-center">
     <div class="col-md-10 col-lg-8 col-xl-7" v-html="mdToHTML($page.post.content)"></div>
    </div>
   </div>
  </article>
 </Layout>
</template>

<page-query>
query ($id:ID!) {
  post:strapiPosts(id: $id) {
    id,title,content,created_at,
  	img {
      formats {
        thumbnail {
          url
        }
      }
    },
    tags {
      id,title
    }
  }
}
</page-query>

<script>
import MarkdownIt from 'markdown-it';
const md = new MarkdownIt()
console.log(md.render('# hhhh'))
export default {
 name: "Post",
  created() {
  console.log(this);
 },
  methods: {
   mdToHTML(markdown) {
    return md.render(markdown)
   }
  }
};
</script>

<style></style>
