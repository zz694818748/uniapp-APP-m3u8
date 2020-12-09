var systempath = ''
var movenum = 0 
// plus.downloader.clear();//清空下载
plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fobject) {
    // fs.root是根目录操作对象DirectoryEntry
    fobject.root.getDirectory('_doc/', {
        create: true
    }, function(fileEntry) {
        systempath = fileEntry.toLocalURL()
    });
});

function moveto(loadobj) {
    movenum ++;
    var nowname = loadobj.filename
    var newname = '_doc/' + nowname.substr(nowname.indexOf('/') + 1)
    var newpath = newname.substr(0, newname.lastIndexOf('/'));
    plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fobject) {
        fobject.root.getDirectory(newpath, {
            create: true
        }, function(Directory) {
            move(nowname, Directory)
        });
    })
}

function move(nowname, newdir) {
    plus.io.requestFileSystem(plus.io.PUBLIC_DOWNLOADS, function(fobject) {
        fobject.root.getFile(nowname, {}, function(fileEntry) {
            fileEntry.moveTo(newdir)
            movenum --;
        }, function(e) {
            movenum --;
            console.log(e)
            console.log(nowname)
        });
    })
}

function writeFile(path, text) {
    plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fobject) {
        // fs.root是根目录操作对象DirectoryEntry
        fobject.root.getFile('_doc/' + path, {
            create: true
        }, function(fileEntry) {
            fileEntry.createWriter(function(writer) {
                writer.seek(0)
                writer.write(text);
            }, function(e) {});
        }, function(e) {
            console.log(e)
        });
    });
}
async function info(options) {
    this.tslist = this.faillist = this.loadlist = [];
    this.complete = 0
    var that = this
    if (!options['url'] || options['url'] == '') {
        that.callback(options.initcallback, {
            code: 1,
            msg: '请输入url',
            obj: ''
        });
    } else if (!options['id'] || options['id'] == '') {
        that.callback(options.initcallback, {
            code: 1,
            msg: '请输入指定标识',
            obj: ''
        });
    }
    var defaultop = {
        dirpath: 'video',
        tryTepeat: 3,
        meanwhile: 5,
        timeout: 30,
        retryInterval: 30,
    }
    options = Object.assign(defaultop, options)

    this.ajax = function(option) {
        return new Promise(async function(resolve, reject) {
            uni.request({
                url: option.url,
                method: 'GET',
                success(res) {
                    if (res.statusCode !== 200) {
                        reject()
                        that.callback(option.initcallback, {
                            code: 1,
                            msg: '请求失败',
                            obj: res
                        });
                        return;
                    }
                    if (res.data.indexOf('#EXTM3U') == -1) {
                        reject()
                        that.callback(option.initcallback, {
                            code: 1,
                            msg: '解析失败',
                            obj: res.data
                        });
                        return;
                    }
                    resolve(res.data)
                },
                fail(res) {
                    reject()
                    that.callback(option.initcallback, {
                        code: 1,
                        msg: '解析失败',
                        obj: res
                    });
                }
            })
        })
    }

    this.getinfo = async function(option) {
        var result = await that.ajax(option)
        var arr = result.split('\n');
        var p = option.url.indexOf('://');
        var p1 = option.url.indexOf('/', p + 3);
        var host = option.url.substring(0, p1);
        var id = option.id
        var path = option.dirpath;
        var fullpath = systempath + option.dirpath;

        var data = {
            newm3u8: '',
            streamlist: [],
            tslist: [],
            name: path + '/' + id,
            fullname: fullpath + '/' + id + '.m3u8',
        }

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == '') {
                continue;
            }
            let line = arr[i].trim()
            let nextline = arr[i + 1].trim()
            data.newm3u8 += line + '\n'
            if (line.startsWith('#EXT')) {
                if (nextline.startsWith('/')) {
                    url = host + nextline
                } else if (nextline.indexOf('://') != -1) {
                    url = nextline
                } else {
                    var p = option.url.lastIndexOf("/") + 1;
                    url = option.url.substring(0, p) + nextline;
                }
                if (line.indexOf('X-STREAM-INF') != -1) {
                    var o = JSON.parse(JSON.stringify(option))
                    o.dirpath = path + '/' + id
                    o.id = i
                    o.url = url
                    var d = await that.getinfo(o)
                    data.streamlist.push(d)
                    data.newm3u8 += systempath + data.name + '/' + o.id + '.m3u8' + '\n'
                    i++
                } else if (line.indexOf('INF') != -1) {
                    let ts = {
                        url: url,
                        path: path + '/' + id + '/' + nextline.replace(/\//g, ""),
                        fullpath: fullpath + '/' + id + '/' + nextline.replace(/\//g, "")
                    }
                    data.tslist.push(ts)
                    data.newm3u8 += ts.fullpath + '\n'
                    i++
                }
            }
        }
        return data
    }

    this.callback = function(callback, result) {
        if (typeof callback == 'function') {
            callback(result)
        }
    }

    this.savem3u8 = function(savem3u8) {
        if (savem3u8.streamlist.length > 0) {
            for (let i in savem3u8.streamlist) {
                this.savem3u8(savem3u8.streamlist[i])
            }
        }
        writeFile(savem3u8.name + '.m3u8', savem3u8.newm3u8)
    }

    this.gettslist = function(arr, data = []) {
        if (arr.streamlist.length > 0) {
            for (let i in arr.streamlist) {
                data = data.concat(this.gettslist(arr.streamlist[i]));
            }
        }
        for (let i in arr.tslist) {
            data.push(arr.tslist[i])
        }
        return data
    }

    this.startload = function() {
        that.complete = 0
        plus.downloader.enumerate(function(e) {
            console.log(e)
            var urls = []
            var list = []
            for (let i in e) {
                urls.push(e[i].url)
                if (e[i].state == 4) {
                    that.complete++
                    moveto(e[i]);
                    that.callback(options.tsloadcallback, {
                        code: 0,
                        msg: '文件已下载',
                        obj: e[i]
                    });
                } else {
                    list.push({
                        url: e[i].url,
                        filename: e[i].filename,
                    })
                }
            }
            for (let k in that.tslist) {
                if (urls.indexOf(that.tslist[k].url) != -1) {
                    continue;
                } else {
                    list.push({
                        url: that.tslist[k].url,
                        filename: that.tslist[k].path,
                    })
                }
            }
            that.loadlist = list
            that.target = 0
            for (let i = 0; i < options.meanwhile; i++) {
                that.startloadts(i)
            }
        }, -1)
    }
    this.startloadts = function(i) {
        setTimeout(function() {
            that.loadts()
        }, i * 20)
    }
    this.loadts = function() {
        var num = that.target
        that.target += 1
        var li = that.loadlist[num]
        if (li) {
            var dtask = plus.downloader.createDownload(li.url, {
                filename: li.filename.indexOf('_downloads/') == -1 ? '_downloads/' + li.filename : li.filename,
                timeout: options.timeout,
                retry: options.tryTepeat,
                retryInterval: options.retryInterval
            }, function(loadobj, status) {
                that.complete += 1
                if (status != 200) {
                    that.faillist.push({
                        url: loadobj.url,
                        filename: loadobj.filename
                    })
                    that.callback(options.tsloadcallback, {
                        code: 1,
                        msg: '下载失败',
                        obj: loadobj
                    });
                } else {
                    moveto(loadobj);
                    that.callback(options.tsloadcallback, {
                        code: 0,
                        msg: '下载成功',
                        obj: loadobj
                    });
                }
                if (that.complete >= that.tslist.length) {
                    that.callback(options.finishcallback, {
                        code: 0,
                        msg: '下载完成',
                        obj: {
                            fail: that.faillist,
                            path: systempath + options.dirpath + '/' + options.id + '.m3u8'
                        }
                    });
                    var Interval = setInterval(function() {
                        if(movenum <= 0){
                            movenum = 0;
                            console.log('clear')
                            plus.downloader.clear(-1)
                            plus.io.requestFileSystem(plus.io.PUBLIC_DOWNLOADS, function(fobject) {
                                fobject.root.getDirectory('_downloads', {}, function(fileEntry) {
                                    fileEntry.removeRecursively('',function(e){
                                        console.log(e)
                                    })
                                });
                            })
                            clearInterval(Interval)
                        }
                    }, 500)
                } else {
                    that.loadts()
                }
            })
            dtask.start()
        }
    }
    // try {
    var m3u8info = await this.getinfo(options)
    var loadlist = this.gettslist(m3u8info)
    that.tslist = loadlist
    that.callback(options.initcallback, {
        code: 0,
        msg: '',
        obj: that
    });
    that.savem3u8(m3u8info)
    that.startload()
    // } catch (e) {
    //     return
    // }
}

function downm3u8(options) {
    this.dirpath = systempath + options.dirpath

    var m3u8 = new info(options)
}

module.exports = downm3u8;
