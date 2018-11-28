Page({
    data: {
        items: [
            {
                icon: '../../images/view.png',
                name: '关于我们',
                url:'/my/pages/about/about'
            },
            {
                icon: '../../images/view.png',
                name: '用户反馈',
                url:'/my/pages/feedback/feedback'
            },
            {
                icon: '../../images/view.png',
                name: '免责声明',
                url:'/my/pages/declaration/declaration'
            },
        ]
    },
    itemClick:function(e){
        const dataset=e.currentTarget.dataset
        console.log(dataset)
        swan.navigateTo({
            url: dataset.url
        });
    },
    onLoad: function () {
        // 监听页面加载的生命周期函数
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