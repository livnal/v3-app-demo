// 导入 defineConfig 函数，用于定义 Vite 配置
import { defineConfig } from 'vite'

// 导入 vue 插件，用于处理 Vue.js 项目
import vue from '@vitejs/plugin-vue'

// 导入 AutoImport 插件，用于自动导入 Vue.js 组件
import AutoImport from 'unplugin-auto-import/vite'

// 导入 Components 插件，用于自动注册 Vue.js 组件
import Components from 'unplugin-vue-components/vite'

// 导入 VantResolver 类，用于自动导入 Vant 组件
import { VantResolver } from '@vant/auto-import-resolver'

// 导出 Vite 配置对象
export default defineConfig({
  // 配置插件
  plugins: [
    // 配置 Vue.js 插件
    vue(),
    // 配置 AutoImport 插件，用于自动导入 Vue.js 组件
    AutoImport({
      // 配置 resolvers，用于解析自动导入的组件
      resolvers: [VantResolver()],
      // 配置 imports，用于导入的组件列表
      imports: ['vue', 'vue-router'],
      // 配置 dts，用于生成类型定义文件
      dts: 'src/auto-imports.d.ts',
      // 配置 include，用于指定需要自动导入的文件类型
      include: [/\.[tj]sx?$/, /\.vue$/],
      // 配置 exclude，用于指定不需要自动导入的文件类型
      exclude: [/node_modules/],
      // 配置 eslintrc，用于指定 ESLint 配置文件路径
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
      },
    }),
    // 配置 Components 插件，用于自动注册 Vue.js 组件
    Components({
      // 配置 resolvers，用于解析自动导入的组件
      resolvers: [VantResolver()],
    })
  ],
  // 配置 resolve，用于指定路径别名
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  // 配置服务器配置
  server: {
    // 配置服务器端口
    port: 3000
  }
})