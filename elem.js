/*
获取Cookie路径：饿了么App-我的-互动玩乐-赚吃货豆
[MiTM]：https://h5.ele.me
Quantumult X [rewrite_local]：^https://h5.ele.me/restapi/biz.svip_bonus/v1/users/supervip/pea/queryAccountBalance url script-request-header https://raw.githubusercontent.com/ivan6232/me/main/elem.js

*/

const $ = new Env('饿了么');

let status;
status = (status = ($.getval("elemstatus") || "1")) > 1 ? `${status}` : ""; 
const elemhdArr = []
let elemhd = $.getdata('elemhd')


//SIMPLESIGNIN MISSION
const url1 = 'https://h5.ele.me/restapi/biz.svip_scene/svip/engine/xSupply?params[]=%7B%22tagCode%22:%22223166%22,%22extra%22:%7B%22missionDefId%22:1390001,%22missionCollectionId%22:36,%22missionType%22:%22SIMPLESIGNIN%22%7D%7D';
const url2 = 'https://h5.ele.me/restapi/biz.svip_scene/svip/engine/xSupply?params[]=%7B%22tagCode%22:%22223166%22,%22extra%22:%7B%22missionDefId%22:1056001,%22missionCollectionId%22:36,%22missionType%22:%22SIMPLESIGNIN%22%7D%7D';
const url3 = 'https://h5.ele.me/restapi/biz.svip_scene/svip/engine/xSupply?params[]=%7B%22tagCode%22:%22223166%22,%22extra%22:%7B%22missionDefId%22:1966001,%22missionCollectionId%22:36,%22missionType%22:%22SIMPLESIGNIN%22%7D%7D';
const url4 = 'https://h5.ele.me/restapi/biz.svip_scene/svip/engine/xSupply?params[]=%7B%22tagCode%22:%22223166%22,%22extra%22:%7B%22missionDefId%22:2442001,%22missionCollectionId%22:36,%22missionType%22:%22SIMPLESIGNIN%22%7D%7D';
const url5 = 'https://h5.ele.me/restapi/biz.svip_scene/svip/engine/xSupply?params[]=%7B%22tagCode%22:%22223166%22,%22extra%22:%7B%22missionDefId%22:1130001,%22missionCollectionId%22:36,%22missionType%22:%22SIMPLESIGNIN%22%7D%7D';
const url6 = 'https://h5.ele.me/restapi/biz.svip_scene/svip/engine/xSupply?params[]=%7B%22tagCode%22:%22223166%22,%22extra%22:%7B%22missionDefId%22:1698001,%22missionCollectionId%22:36,%22missionType%22:%22SIMPLESIGNIN%22%7D%7D';
const url7 = 'https://h5.ele.me/restapi/biz.svip_scene/svip/engine/xSupply?params[]=%7B%22tagCode%22:%22223166%22,%22extra%22:%7B%22missionDefId%22:234001,%22missionCollectionId%22:36,%22missionType%22:%22SIMPLESIGNIN%22%7D%7D';
const url8 = 'https://h5.ele.me/restapi/biz.svip_scene/svip/engine/xSupply?params[]=%7B%22tagCode%22:%22223166%22,%22extra%22:%7B%22missionDefId%22:1728001,%22missionCollectionId%22:36,%22missionType%22:%22SIMPLESIGNIN%22%7D%7D';
const url9 = 'https://h5.ele.me/restapi/biz.svip_scene/svip/engine/xSupply?params[]=%7B%22tagCode%22:%22223166%22,%22extra%22:%7B%22missionDefId%22:1150001,%22missionCollectionId%22:36,%22missionType%22:%22SIMPLESIGNIN%22%7D%7D';
const url10 = 'https://h5.ele.me/restapi/biz.svip_scene/svip/engine/xSupply?params[]=%7B%22tagCode%22:%22223166%22,%22extra%22:%7B%22missionDefId%22:2590001,%22missionCollectionId%22:36,%22missionType%22:%22SIMPLESIGNIN%22%7D%7D';
const url11 = 'https://h5.ele.me/restapi/biz.svip_scene/svip/engine/xSupply?params[]=%7B%22tagCode%22:%22223166%22,%22extra%22:%7B%22missionDefId%22:978001,%22missionCollectionId%22:36,%22missionType%22:%22SIMPLESIGNIN%22%7D%7D';

//PAGEVIEW MISSION
const url21 = 'https://h5.ele.me/restapi/biz.svip_scene/svip/engine/xSupply?params[]=%7B%22tagCode%22:%22223166%22,%22extra%22:%7B%22missionDefId%22:2210003,%22missionCollectionId%22:36,%22missionType%22:%22PAGEVIEW%22%7D%7D';
const url22 = 'https://h5.ele.me/restapi/biz.svip_scene/svip/engine/xSupply?params[]=%7B%22tagCode%22:%22223166%22,%22extra%22:%7B%22missionDefId%22:228003,%22missionCollectionId%22:36,%22missionType%22:%22PAGEVIEW%22%7D%7D';
const url23 = 'https://h5.ele.me/restapi/biz.svip_scene/svip/engine/xSupply?params[]=%7B%22tagCode%22:%22223166%22,%22extra%22:%7B%22missionDefId%22:2020001,%22missionCollectionId%22:36,%22missionType%22:%22PAGEVIEW%22%7D%7D';
const url24 = 'https://h5.ele.me/restapi/biz.svip_scene/svip/engine/xSupply?params[]=%7B%22tagCode%22:%22223166%22,%22extra%22:%7B%22missionDefId%22:342001,%22missionCollectionId%22:36,%22missionType%22:%22PAGEVIEW%22%7D%7D';
const url25 = 'https://h5.ele.me/restapi/biz.svip_scene/svip/engine/xSupply?params[]=%7B%22tagCode%22:%22223166%22,%22extra%22:%7B%22missionDefId%22:912001,%22missionCollectionId%22:36,%22missionType%22:%22PAGEVIEW%22%7D%7D';
const url26 = 'https://h5.ele.me/restapi/biz.svip_scene/svip/engine/xSupply?params[]=%7B%22tagCode%22:%22223166%22,%22extra%22:%7B%22missionDefId%22:2596001,%22missionCollectionId%22:36,%22missionType%22:%22PAGEVIEW%22%7D%7D';
const url27 = 'https://h5.ele.me/restapi/biz.svip_scene/svip/engine/xSupply?params[]=%7B%22tagCode%22:%22223166%22,%22extra%22:%7B%22missionDefId%22:250003,%22missionCollectionId%22:36,%22missionType%22:%22PAGEVIEW%22%7D%7D';
const url28 = 'https://h5.ele.me/restapi/biz.svip_scene/svip/engine/xSupply?params[]=%7B%22tagCode%22:%22223166%22,%22extra%22:%7B%22missionDefId%22:478001,%22missionCollectionId%22:36,%22missionType%22:%22PAGEVIEW%22%7D%7D';
const url29 = 'https://h5.ele.me/restapi/biz.svip_scene/svip/engine/xSupply?params[]=%7B%22tagCode%22:%22223166%22,%22extra%22:%7B%22missionDefId%22:236002,%22missionCollectionId%22:36,%22missionType%22:%22PAGEVIEW%22%7D%7D';
const url30 = 'https://h5.ele.me/restapi/biz.svip_scene/svip/engine/xSupply?params[]=%7B%22tagCode%22:%22223166%22,%22extra%22:%7B%22missionDefId%22:1306001,%22missionCollectionId%22:36,%22missionType%22:%22PAGEVIEW%22%7D%7D';
const url31 = 'https://h5.ele.me/restapi/biz.svip_scene/svip/engine/xSupply?params[]=%7B%22tagCode%22:%22223166%22,%22extra%22:%7B%22missionDefId%22:1036001,%22missionCollectionId%22:36,%22missionType%22:%22PAGEVIEW%22%7D%7D';
const url32 = 'https://h5.ele.me/restapi/biz.svip_scene/svip/engine/xSupply?params[]=%7B%22tagCode%22:%22223166%22,%22extra%22:%7B%22missionDefId%22:1034001,%22missionCollectionId%22:36,%22missionType%22:%22PAGEVIEW%22%7D%7D';

!(async () => {
    if (typeof $request !== "undefined") {
        await elemck()  //逛一逛美食团购

    } else {


        elemhdArr.push($.getdata('elemhd'));
        elemhd = elemhdArr[0];
        elemheaders = JSON.parse(elemhd);
        cookieVal = elemheaders.Cookie
        //console.log(cookieVal);




    console.log(`------------- 饿了么：吃货豆-------------\n`);
    console.log(`------现在开始SIMPLE_SIGNIN任务------\n`);
    await elem_mission_1()  //逛一逛美食团购
    await elem_mission_2()  //去玩果园领水滴
    await elem_mission_3()  //逛88会员活动领专享券
    await elem_mission_4()  //看看干饭神卡专区
    await elem_mission_5()  //看看最优惠的水果爆款清单
    await elem_mission_6()  //17会员日
    await elem_mission_7()  //去玩果园领水滴
    await elem_mission_8()  //试试0元抽手机
    await elem_mission_9()  //逛逛饿了么钱包
    await elem_mission_10()  //逛一逛高德十一活动
    await elem_mission_11()  //看看时下最热好货
    console.log(`------现在结束SIMPLE_SIGNIN任务------\n`);

    /*

    console.log(`-------现在开始PAGE_VIEW任务-------\n`);
    let waitDuration = 16;

    console.log(`任务:<开学季>美味全攻略正在执行,等待${waitDuration}秒` + `\n`);
    await elem_mission_21()  //
    await $.wait(waitDuration * 1000)//1000=1秒

    
    console.log(`PAGE_VIEW任务正在执行,等待${waitDuration}秒`+ `\n`);
    await elem_mission_22()  //
    await $.wait(waitDuration * 1000)//1000=1秒

    console.log(`PAGE_VIEW任务正在执行,等待${waitDuration}秒`+ `\n`);
    await elem_mission_23()  //
    await $.wait(waitDuration * 1000)//1000=1秒

    console.log(`PAGE_VIEW任务正在执行,等待${waitDuration}秒`+ `\n`);
    await elem_mission_24()  //
    await $.wait(waitDuration * 1000)//1000=1秒

    console.log(`PAGE_VIEW任务正在执行,等待${waitDuration}秒`+ `\n`);
    await elem_mission_25()  //
    await $.wait(waitDuration * 1000)//1000=1秒

    console.log(`PAGE_VIEW任务正在执行,等待${waitDuration}秒`+ `\n`);
    await elem_mission_26()  //
    await $.wait(waitDuration * 1000)//1000=1秒

    console.log(`PAGE_VIEW任务正在执行,等待${waitDuration}秒`+ `\n`);
    await elem_mission_27()  //
    await $.wait(waitDuration * 1000)//1000=1秒

    console.log(`PAGE_VIEW任务正在执行,等待${waitDuration}秒`+ `\n`);
    await elem_mission_28()  //
    await $.wait(waitDuration * 1000)//1000=1秒

    console.log(`PAGE_VIEW任务正在执行,等待${waitDuration}秒`+ `\n`);
    await elem_mission_29()  //
    await $.wait(waitDuration * 1000)//1000=1秒

    console.log(`PAGE_VIEW任务正在执行,等待${waitDuration}秒`+ `\n`);
    await elem_mission_30()  //
    await $.wait(waitDuration * 1000)//1000=1秒

    console.log(`PAGE_VIEW任务正在执行,等待${waitDuration}秒`+ `\n`);
    await elem_mission_31()  //
    await $.wait(waitDuration * 1000)//1000=1秒

    console.log(`PAGE_VIEW任务正在执行,等待${waitDuration}秒`+ `\n`);
    await elem_mission_32()  //
    await $.wait(waitDuration * 1000)//1000=1秒
    /*
    */

    await elembalancejs()  //统计吃货豆数量
    }
})()
    .catch((e) => $.logErr(e))
    .finally(() => $.done())

// get elem cookie
//^https://h5.ele.me/restapi/biz.svip_bonus/v1/users/supervip/pea/queryAccountBalance url script-request-header https://raw.githubusercontent.com/ivan6232/me/main/elem.js
function elemck() {
    if ($request.url.indexOf("pea/queryAccountBalance?") > -1) {
        const elemurl = $request.url
        if (elemurl) $.setdata(elemurl, `elemurl${status}`)
        $.log(elemurl)
        const elemhd = JSON.stringify($request.headers)
        if (elemhd) $.setdata(elemhd, `elemhd${status}`)
        $.log(elemhd)
        //$.msg(elemhd)
        $.msg(`🎉Congratulations🎉成功获取饿了么cookie🎉`)
    }
}



//吃货豆数量
function elembalancejs(timeout = 0) {
    return new Promise((resolve) => {
        let url = {
            url: `https://h5.ele.me/restapi/biz.svip_bonus/v1/users/supervip/pea/queryAccountBalance?types=[%22PEA_ACCOUNT%22]`,
            headers: {
                'Cookie': cookieVal,
            },
        }
        $.get(url, async (err, resp, data) => {
            try {
                data = JSON.parse(data);
                console.log(`------------- 统计-------------\n`);
                console.log('目前拥有巨额财富【' + data.accountInfos[0].count + '】颗吃货豆')
            } catch (e) {
                //$.logErr(e, resp);
            } finally {
                resolve()
            }
        }, timeout)
    })
}


//----【任务：逛一逛美食团购+5豆】----
function elem_mission_1(timeout = 0) {
    return new Promise((resolve) => {
        let url = {
            url: url1,
            headers: {
                'Cookie': cookieVal,
            },
        }
        $.get(url, async (err, resp, data) => {
            try {
                data = JSON.parse(data);

                if (data.data[0].attribute.msgCode == "4000") {
                    console.log('任务-(逛一逛美食团购)：' + data.data[0].attribute.message + `\n`)
                } else {
                    console.log('任务-(逛一逛美食团购)' + data.data[0].attribute.message + '：获得「' + data.data[0].attribute.value + '」吃货豆' + `\n`)
                }
            } catch (e) {
                //$.logErr(e, resp);
            } finally {
                resolve()
            }
        }, timeout)
    })
}

//----【任务：看看借钱频道+5豆】----
function elem_mission_2(timeout = 0) {
    return new Promise((resolve) => {
        let url = {
            url: url2,
            headers: {
                'Cookie': cookieVal,
            },
        }
        $.get(url, async (err, resp, data) => {
            try {
                data = JSON.parse(data);
                if (data.data[0].attribute.msgCode == "4000") {
                    console.log('任务-(看看借钱频道)：' + data.data[0].attribute.message + `\n`)
                } else {
                    console.log('任务-(看看借钱频道)' + data.data[0].attribute.message + '：获得「' + data.data[0].attribute.value + '」吃货豆' + `\n`)
                }
            } catch (e) {
                //$.logErr(e, resp);
            } finally {
                resolve()
            }
        }, timeout)
    })
}


//----【逛88会员活动领专享券】----
function elem_mission_3(timeout = 0) {
    return new Promise((resolve) => {
        let url = {
            url: url3,
            headers: {
                'Cookie': cookieVal,
            },
        }
        $.get(url, async (err, resp, data) => {
            try {
                data = JSON.parse(data);
                if (data.data[0].attribute.msgCode == "4000") {
                    console.log('任务-(逛88会员活动领专享券)：' + data.data[0].attribute.message + `\n`)
                } else {
                    console.log('任务-(逛88会员活动领专享券)' + data.data[0].attribute.message + '：获得「' + data.data[0].attribute.value + '」吃货豆' + `\n`)
                }
            } catch (e) {
                //$.logErr(e, resp);
            } finally {
                resolve()
            }
        }, timeout)
    })
}

//----【看看干饭神卡专区】----
function elem_mission_4(timeout = 0) {
    return new Promise((resolve) => {
        let url = {
            url: url4,
            headers: {
                'Cookie': cookieVal,
            },
        }
        $.get(url, async (err, resp, data) => {
            try {
                data = JSON.parse(data);
                if (data.data[0].attribute.msgCode == "4000") {
                    console.log('任务-(看看干饭神卡专区)：' + data.data[0].attribute.message + `\n`)
                } else {
                    console.log('任务-(看看干饭神卡专区)' + data.data[0].attribute.message + '：获得「' + data.data[0].attribute.value + '」吃货豆' + `\n`)
                }
            } catch (e) {
                //$.logErr(e, resp);
            } finally {
                resolve()
            }
        }, timeout)
    })
}




//----【看看最优惠的水果爆款清单】----
function elem_mission_5(timeout = 0) {
    return new Promise((resolve) => {
        let url = {
            url: url5,
            headers: {
                'Cookie': cookieVal,
            },
        }
        $.get(url, async (err, resp, data) => {
            try {
                data = JSON.parse(data);
                if (data.data[0].attribute.msgCode == "4000") {
                    console.log('任务-(看看最优惠的水果爆款清单)：' + data.data[0].attribute.message + `\n`)
                } else {
                    console.log('任务-(看看最优惠的水果爆款清单)' + data.data[0].attribute.message + '：获得「' + data.data[0].attribute.value + '」吃货豆' + `\n`)
                }
            } catch (e) {
                //$.logErr(e, resp);
            } finally {
                resolve()
            }
        }, timeout)
    })
}






//----【17会员日】----
function elem_mission_6(timeout = 0) {
    return new Promise((resolve) => {
        let url = {
            url: url6,
            headers: {
                'Cookie': cookieVal,
            },
        }
        $.get(url, async (err, resp, data) => {
            try {
                data = JSON.parse(data);
                if (data.data[0].attribute.msgCode == "4000") {
                    console.log('任务-(17会员日)：' + data.data[0].attribute.message + `\n`)
                } else {
                    console.log('任务-(17会员日)' + data.data[0].attribute.message + '：获得「' + data.data[0].attribute.value + '」吃货豆' + `\n`)
                }
            } catch (e) {
                //$.logErr(e, resp);
            } finally {
                resolve()
            }
        }, timeout)
    })
}


//----【去玩果园领水滴+10豆】----
function elem_mission_7(timeout = 0) {
    return new Promise((resolve) => {
        let url = {
            url: url7,
            headers: {
                'Cookie': cookieVal,
            },
        }
        $.get(url, async (err, resp, data) => {
            try {
                data = JSON.parse(data);
                if (data.data[0].attribute.msgCode == "4000") {
                    console.log('任务-(去玩果园领水滴)：' + data.data[0].attribute.message + `\n`)
                } else {
                    console.log('任务-(去玩果园领水滴)' + data.data[0].attribute.message + '：获得「' + data.data[0].attribute.value + '」吃货豆' + `\n`)
                }
            } catch (e) {
                //$.logErr(e, resp);
            } finally {
                resolve()
            }
        }, timeout)
    })
}




//----【试试0元抽手机】----
function elem_mission_8(timeout = 0) {
    return new Promise((resolve) => {
        let url = {
            url: url8,
            headers: {
                'Cookie': cookieVal,
            },
        }
        $.get(url, async (err, resp, data) => {
            try {
                data = JSON.parse(data);
                if (data.data[0].attribute.msgCode == "4000") {
                    console.log('任务-(试试0元抽手机)：' + data.data[0].attribute.message + `\n`)
                } else {
                    console.log('任务-(试试0元抽手机)' + data.data[0].attribute.message + '：获得「' + data.data[0].attribute.value + '」吃货豆' + `\n`)
                }
            } catch (e) {
                //$.logErr(e, resp);
            } finally {
                resolve()
            }
        }, timeout)
    })
}





//----【逛逛饿了么钱包+5豆】----
function elem_mission_9(timeout = 0) {
    return new Promise((resolve) => {
        let url = {
            url: url9,
            headers: {
                'Cookie': cookieVal,
            },
        }
        $.get(url, async (err, resp, data) => {
            try {
                data = JSON.parse(data);
                if (data.data[0].attribute.msgCode == "4000") {
                    console.log('任务-(逛逛饿了么钱包)：' + data.data[0].attribute.message + `\n`)
                } else {
                    console.log('任务-(逛逛饿了么钱包)' + data.data[0].attribute.message + '：获得「' + data.data[0].attribute.value + '」吃货豆' + `\n`)
                }
            } catch (e) {
                //$.logErr(e, resp);
            } finally {
                resolve()
            }
        }, timeout)
    })
}

//----【逛一逛高德十一活动】----
function elem_mission_10(timeout = 0) {
    return new Promise((resolve) => {
        let url = {
            url: url10,
            headers: {
                'Cookie': cookieVal,
            },
        }
        $.get(url, async (err, resp, data) => {
            try {
                data = JSON.parse(data);
                if (data.data[0].attribute.msgCode == "4000") {
                    console.log('任务-(逛一逛高德十一活动)：' + data.data[0].attribute.message + `\n`)
                } else {
                    console.log('任务-(逛一逛高德十一活动)' + data.data[0].attribute.message + '：获得「' + data.data[0].attribute.value + '」吃货豆' + `\n`)
                }
            } catch (e) {
                //$.logErr(e, resp);
            } finally {
                resolve()
            }
        }, timeout)
    })
}

//----【看看时下最热好货】----
function elem_mission_11(timeout = 0) {
    return new Promise((resolve) => {
        let url = {
            url: url11,
            headers: {
                'Cookie': cookieVal,
            },
        }
        $.get(url, async (err, resp, data) => {
            try {
                data = JSON.parse(data);
                if (data.data[0].attribute.msgCode == "4000") {
                    console.log('任务-(看看时下最热好货)：' + data.data[0].attribute.message + `\n`)
                } else {
                    console.log('任务-(看看时下最热好货)' + data.data[0].attribute.message + '：获得「' + data.data[0].attribute.value + '」吃货豆' + `\n`)
                }
            } catch (e) {
                //$.logErr(e, resp);
            } finally {
                resolve()
            }
        }, timeout)
    })
}


//------------------------15s mission ------------------------

//
async function elem_mission_21(timeout = 0) {
    return new Promise((resolve) => {
        let url = {
            url: url21,
            headers: {
                'Cookie': cookieVal,
            },
        }
        $.get(url, async (err, resp, data) => {
            await $.wait(15000);
            try {
                data = JSON.parse(data);
                if (data.data[0].attribute.msgCode == "4000") {
                    console.log('任务-<开学季>美味全攻略：' + data.data[0].attribute.msgCode + `\n`)
                    console.log('任务-<开学季>美味全攻略：' + data.message + `\n`)
                    await $.wait(15000);
                } else {
                    console.log('任务-<开学季>美味全攻略：：' + data.data[0].attribute.message + '：获得「' + data.data[0].attribute.value + '」吃货豆' + `\n`)
                    console.log('任务-<开学季>美味全攻略：：' + data.data[0].xmessage + `\n`)
                    await $.wait(15000);
                }
            } catch (e) {
                //$.logErr(e, resp);
            } finally {
                resolve()
            }
        }, timeout)
    })
}

async function elem_mission_22(timeout = 0) {
    return new Promise((resolve) => {
        let url = {
            url: url22,
            headers: {
                'Cookie': cookieVal,
            },
        }
        $.get(url, async (err, resp, data) => {
            await $.wait(15000);
            try {
                data = JSON.parse(data);
                if (data.data[0].attribute.msgCode == "4000") {
                    console.log('任务-pageview：' + data.data[0].attribute.msgCode + `\n`)
                    console.log('任务-pageview：：' + data.data[0].xmessage + `\n`)
                } else {
                    //console.log('任务-(超级周末会场)' + data.data[0].attribute.message + '：获得「' + data.data[0].attribute.value + '」吃货豆'  + `\n`)
                    console.log('任务-pageview：：' + data.data[0].xmessage + `\n`)
                }
            } catch (e) {
                //$.logErr(e, resp);
            } finally {
                resolve()
            }
        }, timeout)
    })
}

async function elem_mission_23(timeout = 0) {
    return new Promise((resolve) => {
        let url = {
            url: url23,
            headers: {
                'Cookie': cookieVal,
            },
        }
        $.get(url, async (err, resp, data) => {
            await $.wait(15000);
            try {
                data = JSON.parse(data);
                if (data.data[0].attribute.msgCode == "4000") {
                    console.log('任务-pageview：' + data.data[0].attribute.msgCode + `\n`)
                    console.log('任务-pageview：：' + data.data[0].xmessage + `\n`)
                } else {
                    //console.log('任务-(超级周末会场)' + data.data[0].attribute.message + '：获得「' + data.data[0].attribute.value + '」吃货豆'  + `\n`)
                    console.log('任务-pageview：：' + data.data[0].xmessage + `\n`)
                }
            } catch (e) {
                //$.logErr(e, resp);
            } finally {
                resolve()
            }
        }, timeout)
    })
}

async function elem_mission_24(timeout = 0) {
    return new Promise((resolve) => {
        let url = {
            url: url24,
            headers: {
                'Cookie': cookieVal,
            },
        }
        $.get(url, async (err, resp, data) => {
            await $.wait(15000);
            try {
                data = JSON.parse(data);
                if (data.data[0].attribute.msgCode == "4000") {
                    console.log('任务-pageview：' + data.data[0].attribute.msgCode + `\n`)
                    console.log('任务-pageview：：' + data.data[0].xmessage + `\n`)
                } else {
                    //console.log('任务-(超级周末会场)' + data.data[0].attribute.message + '：获得「' + data.data[0].attribute.value + '」吃货豆'  + `\n`)
                    console.log('任务-pageview：：' + data.data[0].xmessage + `\n`)
                }
            } catch (e) {
                //$.logErr(e, resp);
            } finally {
                resolve()
            }
        }, timeout)
    })
}

async function elem_mission_25(timeout = 0) {
    return new Promise((resolve) => {
        let url = {
            url: url25,
            headers: {
                'Cookie': cookieVal,
            },
        }
        $.get(url, async (err, resp, data) => {
            await $.wait(15000);
            try {
                data = JSON.parse(data);
                if (data.data[0].attribute.msgCode == "4000") {
                    console.log('任务-pageview：' + data.data[0].attribute.msgCode + `\n`)
                    console.log('任务-pageview：：' + data.data[0].xmessage + `\n`)
                } else {
                    //console.log('任务-(超级周末会场)' + data.data[0].attribute.message + '：获得「' + data.data[0].attribute.value + '」吃货豆'  + `\n`)
                    console.log('任务-pageview：：' + data.data[0].xmessage + `\n`)
                }
            } catch (e) {
                //$.logErr(e, resp);
            } finally {
                resolve()
            }
        }, timeout)
    })
}

async function elem_mission_26(timeout = 0) {
    return new Promise((resolve) => {
        let url = {
            url: url26,
            headers: {
                'Cookie': cookieVal,
            },
        }
        $.get(url, async (err, resp, data) => {
            await $.wait(15000);
            try {
                data = JSON.parse(data);
                if (data.data[0].attribute.msgCode == "4000") {
                    console.log('任务-pageview：' + data.data[0].attribute.msgCode + `\n`)
                    console.log('任务-pageview：：' + data.data[0].xmessage + `\n`)
                } else {
                    //console.log('任务-(超级周末会场)' + data.data[0].attribute.message + '：获得「' + data.data[0].attribute.value + '」吃货豆'  + `\n`)
                    console.log('任务-pageview：：' + data.data[0].xmessage + `\n`)
                }
            } catch (e) {
                //$.logErr(e, resp);
            } finally {
                resolve()
            }
        }, timeout)
    })
}

function elem_mission_27(timeout = 0) {
    return new Promise((resolve) => {
        let url = {
            url: url27,
            headers: {
                'Cookie': cookieVal,
            },
        }
        $.get(url, async (err, resp, data) => {
            await $.wait(15000);
            try {
                data = JSON.parse(data);
                if (data.data[0].attribute.msgCode == "4000") {
                    console.log('任务-pageview：' + data.data[0].attribute.msgCode + `\n`)
                    console.log('任务-pageview：：' + data.data[0].xmessage + `\n`)
                } else {
                    //console.log('任务-(超级周末会场)' + data.data[0].attribute.message + '：获得「' + data.data[0].attribute.value + '」吃货豆'  + `\n`)
                    console.log('任务-pageview：：' + data.data[0].xmessage + `\n`)
                }
            } catch (e) {
                //$.logErr(e, resp);
            } finally {
                resolve()
            }
        }, timeout)
    })
}

async function elem_mission_28(timeout = 0) {
    return new Promise((resolve) => {
        let url = {
            url: url28,
            headers: {
                'Cookie': cookieVal,
            },
        }
        $.get(url, async (err, resp, data) => {
            await $.wait(15000);
            try {
                data = JSON.parse(data);
                if (data.data[0].attribute.msgCode == "4000") {
                    console.log('任务-pageview：' + data.data[0].attribute.msgCode + `\n`)
                    console.log('任务-pageview：：' + data.data[0].xmessage + `\n`)
                } else {
                    //console.log('任务-(超级周末会场)' + data.data[0].attribute.message + '：获得「' + data.data[0].attribute.value + '」吃货豆'  + `\n`)
                    console.log('任务-pageview：：' + data.data[0].xmessage + `\n`)
                }
            } catch (e) {
                //$.logErr(e, resp);
            } finally {
                resolve()
            }
        }, timeout)
    })
}

async function elem_mission_29(timeout = 0) {
    return new Promise((resolve) => {
        let url = {
            url: url29,
            headers: {
                'Cookie': cookieVal,
            },
        }
        $.get(url, async (err, resp, data) => {
            await $.wait(15000);
            try {
                data = JSON.parse(data);
                if (data.data[0].attribute.msgCode == "4000") {
                    console.log('任务-pageview：' + data.data[0].attribute.msgCode + `\n`)
                    console.log('任务-pageview：：' + data.data[0].xmessage + `\n`)
                } else {
                    //console.log('任务-(超级周末会场)' + data.data[0].attribute.message + '：获得「' + data.data[0].attribute.value + '」吃货豆'  + `\n`)
                    console.log('任务-pageview：：' + data.data[0].xmessage + `\n`)
                }
            } catch (e) {
                //$.logErr(e, resp);
            } finally {
                resolve()
            }
        }, timeout)
    })
}

async function elem_mission_30(timeout = 0) {
    return new Promise((resolve) => {
        let url = {
            url: url30,
            headers: {
                'Cookie': cookieVal,
            },
        }
        $.get(url, async (err, resp, data) => {
            await $.wait(15000);
            try {
                data = JSON.parse(data);
                if (data.data[0].attribute.msgCode == "4000") {
                    console.log('任务-pageview：' + data.data[0].attribute.msgCode + `\n`)
                    console.log('任务-pageview：：' + data.data[0].xmessage + `\n`)
                } else {
                    //console.log('任务-(超级周末会场)' + data.data[0].attribute.message + '：获得「' + data.data[0].attribute.value + '」吃货豆'  + `\n`)
                    console.log('任务-pageview：：' + data.data[0].xmessage + `\n`)
                }
            } catch (e) {
                //$.logErr(e, resp);
            } finally {
                resolve()
            }
        }, timeout)
    })
}

async function elem_mission_31(timeout = 0) {
    return new Promise((resolve) => {
        let url = {
            url: url31,
            headers: {
                'Cookie': cookieVal,
            },
        }
        $.get(url, async (err, resp, data) => {
            await $.wait(15000);
            try {
                data = JSON.parse(data);
                if (data.data[0].attribute.msgCode == "4000") {
                    console.log('任务-pageview：' + data.data[0].attribute.msgCode + `\n`)
                    console.log('任务-pageview：：' + data.data[0].xmessage + `\n`)
                } else {
                    //console.log('任务-(超级周末会场)' + data.data[0].attribute.message + '：获得「' + data.data[0].attribute.value + '」吃货豆'  + `\n`)
                    console.log('任务-pageview：：' + data.data[0].xmessage + `\n`)
                }
            } catch (e) {
                //$.logErr(e, resp);
            } finally {
                resolve()
            }
        }, timeout)
    })
}

async function elem_mission_32(timeout = 0) {
    return new Promise((resolve) => {
        let url = {
            url: url32,
            headers: {
                'Cookie': cookieVal,
            },
        }
        $.get(url, async (err, resp, data) => {
            await $.wait(15000);
            try {
                data = JSON.parse(data);
                if (data.data[0].attribute.msgCode == "4000") {
                    console.log('任务-pageview：' + data.data[0].attribute.msgCode + `\n`)
                    console.log('任务-pageview：：' + data.data[0].xmessage + `\n`)
                } else {
                    //console.log('任务-(超级周末会场)' + data.data[0].attribute.message + '：获得「' + data.data[0].attribute.value + '」吃货豆'  + `\n`)
                    console.log('任务-pageview：：' + data.data[0].xmessage + `\n`)
                }
            } catch (e) {
                //$.logErr(e, resp);
            } finally {
                resolve()
            }
        }, timeout)
    })
}






function Env(t, e) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), a = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(a, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t) { let e = { "M+": (new Date).getMonth() + 1, "d+": (new Date).getDate(), "H+": (new Date).getHours(), "m+": (new Date).getMinutes(), "s+": (new Date).getSeconds(), "q+": Math.floor(((new Date).getMonth() + 3) / 3), S: (new Date).getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length))); for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))); let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="]; h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h) } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }


