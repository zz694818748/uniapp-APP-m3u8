# uniapp-APP-m3u8
#### uniapp APP端,H5+,下载m3u8,断点续传,以及播放；安卓可用
#### 用法及参数请看dome，
## 原理

1.获取网络m3u8，然后生成一个本地m3u8文件

2.下载的ts文件保存在本地，本地m3u8的EXTINF 直接指向下载的ts文件绝对路径

3.video的src指向本地m3u8路径

#### 注意：IOS没有测试，有反馈说m3u8必须要网址推流才可以播放，没设备无法实践；有需要可以考虑m3u8转mp4；（如果得空后续研究看看有没有办法转格式）

## 示例
```
import downm3u8 from '@/utils/downm3u8.js'//引入插件包，注意路劲
var option = {
  url: url, //m3u8地址
  dirpath: 'video', //保存到目录
  id: 'yes', //下载标识，用于断线续传：开始任务时存在即续传，不存在新建
  tryTepeat: 3, //下载失败重试次数
  timeout:30, //超时时间
  retryInterval:30,   //重试等待时间
  meanwhile: 5, //并发下载数
  initcallback(res) {
      //m3u8解析的回调，解析成功返回片段列表并开始下载，解析失败message
      console.log(res)
  },
  tsloadcallback(res) {
      //片段下载回调，成功返回片段信息，失败返回respose，
      console.log(res)
  },
  finishcallback(res) {
      //下载完成回调，返回下载失败的ts数组，以及下载好的文件所在位置
  }
}
downm3u8(option);
```
