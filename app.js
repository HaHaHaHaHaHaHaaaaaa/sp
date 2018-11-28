/* globals App */

App({
    onLaunch(event) {
        console.log('onLaunch');
    },

    onShow(event) {
        console.log('onShow');
        swan.setMetaDescription && swan.setMetaDescription({
            content: '彩票小助手，实时彩票开奖信息查询，竞彩足球、竞彩篮球信息查询',
            success: function (res) {
                console.log('设置成功');
            },
            fail: function (res) {
                console.log('设置失败');
            },
            complete: function (res) {
                console.log('设置失败');
            }
        });
        swan.setMetaKeywords && swan.setMetaKeywords({
            content: '百度小程序, 彩票，福彩，3D,体彩，竞彩，篮球，足球',
            success: function (res) {
                console.log('设置成功');
            },
            fail: function (res) {
                console.log('设置失败');
            },
            complete: function (res) {
                console.log('设置失败');
            }
        });
        swan.setDocumentTitle && swan.setDocumentTitle({
            title: '彩票小助手'
        });
    },
    onPageNotFound(event) {
        swan.navigateTo({
            url: '/pages/lottery/lottery'
        });
    },
    onError(event) {
        console.log(event)
    },

    globalData: {
        userInfo: 'user'
    }
});
