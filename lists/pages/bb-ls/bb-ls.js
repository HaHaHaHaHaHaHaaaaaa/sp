Page({
    data: {
        params: {
            id: "12",
            time: String
        },
        lists: [],
        category:"bb"
    },
    onLoad: function (options) {
        // 监听页面加载的生命周期函数
        this.setData('params.time', new Date().toISOString().split('T')[0])
        this.getlists();
    },
    onReady: function () {
        // 监听页面初次渲染完成的生命周期函数
    },
    onShow: function () {
        // 监听页面显示的生命周期函数
    },
    onHide: function () {
        // 监听页面隐藏的生命周期函数
    },
    onUnload: function () {
        // 监听页面卸载的生命周期函数
    },
    onPullDownRefresh: function () {
        // 监听用户下拉动作
    },
    onReachBottom: function () {
        // 页面上拉触底事件的处理函数
    },
    onShareAppMessage: function () {
        // 用户点击右上角转发
    },
    dateChangeDay(e) {

        this.setData(
            'params.time', e.detail.value
        );
        this.getlists()
    },
    onItemClicked: e => {
        const dataset = e.currentTarget.dataset;
        const url = dataset.category === 'bb' ? '/pages/bb-detail/bb-detail?date=' + dataset.date + '&key=' + dataset.key : '/pages/fb-detail/fb-detail?date=' + dataset.date + '&key=' + dataset.key
        swan.navigateTo({
            url: url
        });
    },
    getlists() {
        swan.showToast({
            title: '玩命加载中...',
            icon: 'loading'
        });
        swan.request({
            url: 'https://xcx.igcpvip.com/api/bbs',
            method: 'POST',
            data: this.getData('params'),
            success: res => {
                swan.hideToast()
                const data = res.data.data
           
                this.setData('lists', data)
                swan.setNavigationBarTitle({
                    title: '竞彩篮球'
                });
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
    }
});