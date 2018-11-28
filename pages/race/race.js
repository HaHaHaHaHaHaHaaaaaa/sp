Component({
    properties: {
        name: { // 属性名
            type: String, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
            value: '热门项目', // 属性初始值（必填）
            observer: function (newVal, oldVal) {
                // 属性被改变时执行的函数（可选）
            }
        },
        category: { // 属性名
            type: String, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
            value: "", // 属性初始值（必填）
            observer: function (newVal, oldVal) {
                // 属性被改变时执行的函数（可选）
                console.log('newVal', newVal, oldVal)
                this.onLoadSrc(newVal);
            }
        },
        // lists: { // 属性名
        //     type: Array, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
        //     value: [], // 属性初始值（必填）
        //     observer: function (newVal, oldVal) {
        //         // 属性被改变时执行的函数（可选）
        //         this.setData('data',newVal)
        //     }
        // },
        hideTitle: {
            type: Boolean, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
            value: false, // 属性初始值（必填）
            observer: function (newVal, oldVal) {
                // 属性被改变时执行的函数（可选）
                console.log(oldVal,newVal)
            }
        }
    },

    data: {
        data: []
    }, // 私有数据，可用于模版渲染

    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () {
        console.log('race loaded')
    },
    created: function () {


    },

    detached: function () { },

    methods: {
        onTitleClicked: e => {
            const dataset = e.currentTarget.dataset;
            const url = dataset.category === 'bb' ? '/lists/pages/bb-ls/bb-ls' : '/lists/pages/fb-ls/fb-ls'
            swan.navigateTo({
                url: url
            });
        },
        onItemClicked: e => {
            const dataset = e.currentTarget.dataset;
            const url = dataset.category === 'bb' ? '/details/pages/bb-detail/bb-detail?date=' + dataset.date + '&key=' + dataset.key : '/details/pages/fb-detail/fb-detail?date=' + dataset.date + '&key=' + dataset.key
            swan.navigateTo({
                url: url
            });
        },
        onLoadSrc: function (id) {
            console.log(id)
            swan.showToast({
                title: '玩命加载中...',
                icon: 'loading'
            });
            swan.request({
                url: 'https://xcx.igcpvip.com/api/' + id, // 仅为示例，并非真实的接口地址
                method: 'GET',
                dataType: 'json',
                data: {

                },
                header: {
                    'content-type': 'application/json' // 默认值
                },
                success: (res) => {
                    console.log(res.data);
                    swan.hideToast()
                    this.setData('data', res.data.data);
                },
                fail: (err) => {
                    console.log('错误码：' + err.errCode);
                    console.log('错误信息：' + err.errMsg);
                }
            });
        }
    }
});