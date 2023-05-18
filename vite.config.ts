import { defineConfig, loadEnv } from 'vite';
import type { UserConfig, ConfigEnv } from 'vite';
import Pages from 'vite-plugin-pages';
import Layouts from 'vite-plugin-vue-layouts';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx'; 										// tsx插件引入
import AutoImport from 'unplugin-auto-import/vite'; 									// 自动引入ref,reactive等等等
// 配置antd-v按需加载
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import {themePreprocessorPlugin } from "@zougt/vite-plugin-theme-preprocessor";
import path from "path";

import { resolve, join } from 'path';
import { wrapperEnv } from './build/utils';

import { readdirSync } from "fs";
import fse from 'fs-extra';

import Unocss from 'unocss/vite'
const project_pages = {};
const entryPath = resolve(__dirname, "./src");
const entrys = readdirSync(entryPath).reduce((obj, dirname) => {
  obj[dirname] = join(entryPath, dirname);
  return obj;
}, {});

Object.keys(entrys).forEach(pageName => {
  project_pages[pageName] = resolve(__dirname, `src/${pageName}/index.html`);
});


// defineConfig 工具函数，这样不用 jsdoc 注解也可以获取类型提示
export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {
	console.log('mode',mode)
	const root = process.cwd()
	const env = loadEnv(mode, process.cwd());											// 环境变量对象
	const { VITE_DROP_CONSOLE ,VITE_APP_BASE_API,VITE_APP_API} = wrapperEnv(env)
	console.log(command, mode, '===')
	console.log('环境变量------', env)
	console.log('文件路径(process.cwd())------', root)
	console.log('文件路径(dirname)------', __dirname + '/src')
	console.log('VITE_APP_BASE_API',VITE_APP_BASE_API)
	console.log('VITE_APP_API',VITE_APP_API)
	


	const isDev = mode === "development";
	let pages = {};
	if (isDev) {
	  pages = { ...project_pages };
	} else {
	  if (env.VITE_APP_MODEL) {
		pages[env.VITE_APP_MODEL] = project_pages[env.VITE_APP_MODEL];
	  } else {
		pages = { ...project_pages };
	  }
	}
	let pagesDir = [{dir: 'pages', baseRoute: '/'},	{dir: '../../pages/views', baseRoute: '/'},];
	if(mode != 'sass'){
		pagesDir.push({dir: '../../pages/init_page', baseRoute: '/'})
	}
	// dev 独有配置
	return {
		root: env.VITE_APP_ROOTPATH,																					// 项目根目录（index.html 文件所在的位置） 默认： process.cwd()
		// base: '/', 																									// 开发或生产环境服务的公共基础路径：默认'/'   1、绝对 URL 路径名： /foo/；  2、完整的 URL： https://foo.com/； 3、空字符串或 ./（用于开发环境）
		publicDir: resolve(__dirname, './dist'), 																		// 默认'public'  作为静态资源服务的文件夹  (打包public文件夹会没有，里面得东西会直接编译在dist文件下)
		assetsInclude: resolve(__dirname, './src/assets'), 																// 静态资源处理
		// ******插件配置******
		plugins: [
			vue(),
			vueJsx(),
			Pages({
				pagesDir: pagesDir,
				exclude: ['**/components/*.vue']  																		// 排除在外的目录，即不将所有 components 目录下的 .vue 文件生成路由
			}),
			Layouts({
				layoutsDirs: '../../layout',  																			// 布局文件存放目录
				defaultLayout: 'default'  																					// 默认布局，对应 src/layout/index.vue
			}),
			Unocss(),
			AutoImport({
				imports: ['vue','vue-router','pinia',{axios: [['default', 'axios']]}],
				dts: 'types/auto-import.d.ts' 																			// 生成全局引入的文件
			}),
			themePreprocessorPlugin({
				less: {
				  // 各个主题文件的位置
				  multipleScopeVars: [
					{
					  scopeName: "theme-default",
					  path: path.resolve("src/theme/default.less"),
					},
					{
					  scopeName: "theme-green",
					  path: path.resolve("src/theme/green.less"),
					},
				  ],
				},
			}),
			Components({resolvers: [AntDesignVueResolver({importStyle: 'less'})]}),  									// 修改antdv主题色
		], 
		//配置插件
		// ******开发服务器配置******
		server: {
			https: false, 															// (使用https)启用 TLS + HTTP/2。注意：当 server.proxy 选项 也被使用时，将会仅使用 TLS
			host: true, 															// 监听所有地址
			port: 8080, 															// 指定开发服务器端口：默认3000
			open: false, 															// 启动时自动在浏览器中打开
			cors: false, 															// 为开发服务器配置 CORS
			proxy: {
				//配置自定义代理规则
				'/dev-api': {
					target: VITE_APP_BASE_API,
					changeOrigin: true,
					rewrite: path => path.replace(/^\/dev-api/,'')
				},
			}
			// hmr: {
			//   overlay: false
			// }
		},
		// ******项目构建配置******
		build: {
			// target: 'modules', 													  										// 设置最终构建的浏览器兼容目标 es2015(编译成es5) | modules
			emptyOutDir:true,
			assetsInlineLimit: 4096,																					 // 图片转 base64 编码的阈值
			outDir: '../../../dist', 																					// 构建得包名  默认：dist
			assetsDir: 'theme', 																						// 静态资源得存放路径文件名  assets
			sourcemap: false, 																							// 构建后是否生成 source map 文件
			// brotliSize: false, 																						// 启用/禁用 brotli 压缩大小报告。 禁用该功能可能会提高大型项目的构建性能
			minify: 'terser', 																							// 项目压缩 :boolean | 'terser' | 'esbuild'
			chunkSizeWarningLimit: 133727, 																				// chunk 大小警告的限制（以 kbs 为单位）默认：500
			cssTarget: 'chrome61', 																						// 防止 vite 将 rgba() 颜色转化为 #RGBA 十六进制符号的形式  (要兼容的场景是安卓微信中的 webview 时,它不支持 CSS 中的 #RGBA 十六进制颜色符号)
			rollupOptions: {
			  output: {
				manualChunks(id) { 																						// 最小化拆分包
					echarts: ['echarts']
					if (id.includes("node_modules")) {
						return id.toString().split("node_modules/")[1].split("/")[0].toString()
					}
				},
				entryFileNames: 'js/[name].[hash].js',																	// 用于从入口点创建的块的打包输出格式[name]表示文件名,[hash]表示该文件内容hash值.用于命名代码拆分时创建的共享块的输出命名hunkFileNames: 'js/[name].[hash].js',
				assetFileNames: (chunkInfo) => {																		// 用于输出静态资源的命名，[ext]表示文件扩展名
					let subDir = "images";																				// 用后缀名称进行区别处理,处理其他资源文件名 e.g. css png 等
					if (path.extname(chunkInfo.name) === ".css") {
					  subDir = "css";
					}
					return `${subDir}/[name].[hash].[ext]`;
				},
				sourcemap: false,
				chunkFileNames: (chunkInfo) => {																		// 拆分js到模块文件夹
					const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/') : [];
					const fileName = facadeModuleId[facadeModuleId.length - 2] || '[name]';
					return `js/[name].[hash].js`;
				},
			  }
			},
			terserOptions: {																							//  清除打印
				compress: {
					drop_console: true,
					drop_debugger: true,
				},
			},
		},			
		// ******resolver配置******
		resolve: {
			alias: {
				// 别名配置
				// 键必须以斜线开始和结束
				'@': resolve(__dirname, 'src'),
				components: resolve(__dirname, './src/components'),
				assets: resolve(__dirname, './src/assets'),
				'#': resolve(__dirname, 'types'),
				build: resolve(__dirname, 'build'),
				'@main': resolve(__dirname, "src/modules/main"),
				minor: resolve(__dirname, "src/modules/minor"),
			},
			extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
		},
		// ******打印+debugger清除配置******
		esbuild: {pure: VITE_DROP_CONSOLE ? ['console.log', 'debugger'] : []},											// 测试环境保留打印
		css: {
			// 全局变量+全局引入less+配置antdv主题色
			preprocessorOptions: {
				less: {
					javascriptEnabled: true,
					additionalData:  `@import "${path.resolve(__dirname, 'src/assets/styles/base.less')}";`
				}
			}
		}
	}
})

