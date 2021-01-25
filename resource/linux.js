// 由于wolai官方快捷键未适配linux，由于其判断了浏览器的navigator对象的platform
// 这里注入代码，将navigator改为windows，使linux使用windows快捷键
Object.defineProperty(navigator, 'platform', { get: function () { return 'Win32'; } });
