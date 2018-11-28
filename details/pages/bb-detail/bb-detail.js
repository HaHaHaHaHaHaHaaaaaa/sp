Page({
    data: {
        params: {
            date: String,
            key: String
        },
        details: Object
    },
    onLoad: function (options) {
        // 监听页面加载的生命周期函数
        this.setData('params', { date: options.date, key: options.key })
        this.getlists()
    },
    getlists() {
        swan.showToast({
            title: '玩命加载中...',
            icon: 'loading'
        });
        swan.request({
            url: 'https://xcx.igcpvip.com/api/bbss',
            method: 'POST',
            data: this.getData('params'),
            success: res => {
                swan.hideToast()
                const data = res.data.data
                this.setData('details', data)
                swan.setNavigationBarTitle({
                    title: data.team_away + 'VS' + data.team_home
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
    }
});