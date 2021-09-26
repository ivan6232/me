/*

[MiTM]

https://h5.ele.me

[rewrite_local] 

Qx

^https://h5.ele.me/restapi/biz.svip_bonus/v1/users/supervip/pea/queryAccountBalance url script-request-header https://raw.githubusercontent.com/ivan6232/me/main/elem_cookie.js

*/



const cookieName = '饿了么'
const elem_urlKey = 'senku_elem_url_elem'
const elem_headerKey = 'senku_elem_header_elem'
const elem_bodyKey = 'senku_elem_body_elem'
const senku = init()

const requrl = $request.url
if ($request && $request.method != 'OPTIONS') {
    const elem_urlVal = requrl
    const elem_headerVal = JSON.stringify($request.headers)
    if (elem_urlVal) senku.setdata(elem_urlVal, elem_urlKey)
    if (elem_headerVal) senku.setdata(elem_headerVal, elem_headerKey)
    senku.msg(cookieName, `恭喜🎉获取Cookie:成功`, ``)
}

function init() {
    isSurge = () => {
        return undefined === this.$httpClient ? false : true
    }
    isQuanX = () => {
        return undefined === this.$task ? false : true
    }
    getdata = (key) => {
        if (isSurge()) return $persistentStore.read(key)
        if (isQuanX()) return $prefs.valueForKey(key)
    }
    setdata = (key, val) => {
        if (isSurge()) return $persistentStore.write(key, val)
        if (isQuanX()) return $prefs.setValueForKey(key, val)
    }
    msg = (title, subtitle, body) => {
        if (isSurge()) $notification.post(title, subtitle, body)
        if (isQuanX()) $notify(title, subtitle, body)
    }
    log = (message) => console.log(message)
    get = (url, cb) => {
        if (isSurge()) {
            $httpClient.get(url, cb)
        }
        if (isQuanX()) {
            url.method = 'GET'
            $task.fetch(url).then((resp) => cb(null, {}, resp.body))
        }
    }
    post = (url, cb) => {
        if (isSurge()) {
            $httpClient.post(url, cb)
        }
        if (isQuanX()) {
            url.method = 'POST'
            $task.fetch(url).then((resp) => cb(null, {}, resp.body))
        }
    }
    done = (value = {}) => {
        $done(value)
    }
    return { isSurge, isQuanX, msg, log, getdata, setdata, get, post, done }
}
senku.done()
