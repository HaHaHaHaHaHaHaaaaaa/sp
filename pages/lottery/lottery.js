Page({
    data: {
        items: [],
        imgs: [
            "../../images/fb.png",
            "../../images/bb.jpg"
        ]
    },

    oneItemClick: e => {
        const dataset = e.currentTarget.dataset;
        console.log(dataset);
        swan.navigateTo({
            url: '/details/pages/lottery-detail/lottery-detail?id=' + dataset.id,
        });
    },


    onLoad: function () {
        // 监听页面加载的生命周期函数
        console.log('lottery onLoading')
        this.getlists();
    },
    getlists: function () {
        swan.showToast({
            title: '玩命加载中...',
            icon: 'loading'
        });
        swan.request({
            url: 'https://xcx.igcpvip.com/api/index',
            method: 'GET',
            success: res => {
                swan.hideToast();
                const d = res.data.data.map(v => {
                    return {
                        name: v.code,
                        period: v.expect,
                        lottery: v.codes,
                        openTime: v.time,
                        id: v.id
                    }
                });

                this.setData('items', d);
            },
            fail: err => {
                swan.showToast({
                    title: "error",icon:"none"
                });
                console.log('request fail', err);
            },
            complete: (res) => {

            }
        });
    },
    onReady: function () {
        // 监听页面初次渲染完成的生命周期函数
    },
    onShow: function () {
        // 监听页面显示的生命周期函数
    },
    onHide: function () {
        // 监听页面隐藏的生命周期函数
        console.log('programme hided')
    },
    onUnload: function () {
        // 监听页面卸载的生命周期函数
    },
    onPullDownRefresh: function () {
        // 监听用户下拉动作
        console.log('onPullDownRefresh')

        setTimeout(() => {
            swan.stopPullDownRefresh()
        }, 2000);


    },
    onReachBottom: function () {
        // 页面上拉触底事件的处理函数
    },
    onShareAppMessage: function () {
        // 用户点击右上角转发
        return {
            title: '彩票小助手，生活不小帮手',
            path: '/pages/lottery/lottery'
        }
    }
});