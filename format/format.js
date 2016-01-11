/**
     * 字符串格式化
     *
     * @param {string} tpl 模板
     * @param {Object} data 传入变量
     * @return {string} 返回字符串
     */
    stringFormat = function (tpl, data) {
        return tpl.replace(
            /\#\{([-a-z0-9_]+)\}/ig,
            function (all, name) {
                return data[name] || '';
            }
        );
    };