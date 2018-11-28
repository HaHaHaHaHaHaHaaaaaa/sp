Component({
    properties: {
        items: { // 属性名
            type: Array, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
            value: [], // 属性初始值（必填）
            observer: function (newVal, oldVal) {
                // 属性被改变时执行的函数（可选）
                this.loadLists(1)
            }
        }
    },

    data: {
        selectedIndex: 0,
        ht: true,
        lists: []
    }, // 私有数据，可用于模版渲染

    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () { },

    detached: function () { },

    methods: {
        viewClicked: function (e) {
            const dataset = e.currentTarget.dataset
            this.setData('selectedIndex', dataset.index)
            if (dataset.index === 0 || dataset.index === 1 || dataset.index === 2) {
                this.loadLists(dataset.index)
            }
        },
        onItemClicked: function (e) {
            const dataset = e.currentTarget.dataset;
            console.log(dataset);
            swan.navigateTo({
                url: '/details/pages/lottery-detail/lottery-detail?id=' + dataset.id,
            });
        },
        loadLists: function (index) {
            swan.showToast({
                title: '玩命加载中...',
                icon: 'loading'
            });
            swan.request({
                url: 'https://xcx.igcpvip.com/api/type',
                data: {
                    tid: index + 1
                },
                method: 'POST',
                success: res => {
                    swan.hideToast();
                    const d = res.data.data1.map(v => {
                        return {
                            name: v.code,
                            period: v.expect,
                            lottery: v.codes,
                            openTime: v.time,
                            id: v.id
                        }
                    });

                    this.setData('lists', d);
                },
                fail: err => {
                    swan.showToast({
                        title: "error", icon: "none"
                    });
                    console.log('request fail', err);
                },
                complete: (res) => {

                }
            })
        }
    }

});