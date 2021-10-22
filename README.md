# OneIcon
easy to use iconfont in vue

iconfont 是一个非常方便管理和查找icon的平台, 但引用svg时稍微有点麻烦，所以简单封装成了该项目

### 使用组件 one-icon
```bash
# vue2
yarn add @veypi/one-icon@1
# vue3
yarn add @veypi/one-icon@2
```

```typescript
import OneIcon from '@veypi/one-icon'
// 注意下载下来的js文件放public文件夹里
Vue.use(OneIcon, {href: './icon.js'})
// 或者使用阿里cdn 好处是每次添加icon后不用更新 但是无法离线或内网使用
Vue.use(OneIcon, {href: 'https://at.alicdn.com/t/font*****.js'})
```


### 在vue中原生使用iconfont
 -  引入js

    ![js地址](https://public.veypi.com/img/screenshot/20211020152019.png)

    ```html
    <script type="text/javascript" src=""></script>
    ```

    

    - 引入css

      ```html
      <style type="text/css">
          .icon {
             width: 1em; height: 1em;
             vertical-align: -0.15em;
             fill: currentColor;
             overflow: hidden;
          }
      </style>
      ```

      ```html
      <link rel="stylesheet" type="text/css" href="">
      ```

    - 引用icon

      ```html
      <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xxx"></use>
      </svg>
      ```

      


### 参考

- [官方文档](https://www.iconfont.cn/help/detail?spm=a313x.7781069.1998910419.d0091c141&helptype=code)

