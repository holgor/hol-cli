<template>
  <div>
    <div class="demo-editor">
      <tinymce
        id="tinymce"
        :init="editorOption"
        v-model="tinymceHtml"
      ></tinymce>
    </div>
    <div v-html="tinymceHtml"></div>
  </div>
</template>

<script>
// TinymceDemo 详细参考以下几个链接
// https://www.tiny.cloud/docs/
// https://github.com/tinymce/tinymce-vue
export default {
  data () {
    return {
      editorOption: {
        language_url: '/tinymce/zh_CN.js',
        language: 'zh_CN',
        skin_url: '/tinymce/skins/ui/oxide'
      },
      tinymceHtml: '<p>Demo</p>'
    }
  }
}
</script>

<style scope>
.demo-editor {
  width: 100%;
  height: 600px;
}
</style>
