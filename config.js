(function (win) {
    var ApiList = [
        {
            id: 'init',
            name: '初始化',
            params: ['appkey', 'navi']
        },
        {
            id: 'connect',
            name: '链接',
            params: ['token']
        }
    ];

    win.ApiTest = win.ApiTest || {};
    win.ApiTest = {
        ApiList: ApiList
    };
})(window);