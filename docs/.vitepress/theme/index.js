import Layout from './Layout.vue'

export default {
  // 布局文件入口，
  Layout,

  // this is a Vue 3 functional component
  // 404 页面
  NotFound: () => 'custom 404',

  enhanceApp({ app, router, siteData }) {
    // 这里可以注册组件等内容在可以在文档中做 组件预览展示等功能。
  }
}
