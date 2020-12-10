# uniapp-APP-m3u8
#### uniapp APP端,H5+,下载m3u8,断点续传,以及播放
#### 用法及参数请看dome，
#### 下载后先重新获取manifest.json的appid
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
      that.showload = true
      that.complete = 0
      that.count = res.obj.tslist.length
      that.percentage = 0
                        
  },
  tsloadcallback(res) {
      //片段下载回调，成功返回片段信息，失败返回respose，
      console.log(res)
      that.complete++
      that.percentage = Math.floor((that.complete/that.count)*100)
  },
  finishcallback(res) {
      //文件保存为 app缓存 / 保存目录 / 下载标识.m3u8
      that.videourl = res.obj.path
      that.showload = false
  }
}
downm3u8(option);
```
