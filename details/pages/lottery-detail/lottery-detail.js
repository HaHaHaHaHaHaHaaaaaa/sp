Page({
    data: {
        dateDay: new Date().toISOString().split('T')[0],
        awards: {},
        id:Number
    },
    onLoad: function (options) {
        // 监听页面加载的生命周期函数
        this.setData('id',options.id)
        this.getlists()
       
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
        console.log('picker-date changed，值为', e.detail.value);
        this.setData(
            'dateDay', e.detail.value
        );
        this.getlists()
    },
    getlists() {
        swan.showToast({
            title: '玩命加载中...',
            icon: 'loading'
        });
        swan.request({
            url: 'https://xcx.igcpvip.com/api/detail',
            method: 'POST',
            data: {
                id: this.getData('id'),
                time:this.getData('dateDay')
            },
            success: res => {
                swan.hideToast({
                    title: 'Loading...',
                    icon: 'loading'
                });
                console.log(res.data.data)
                const awards = res.data.data;
                this.setData('awards', awards);
                swan.setNavigationBarTitle({
                    title: res.data.data.code || ''
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