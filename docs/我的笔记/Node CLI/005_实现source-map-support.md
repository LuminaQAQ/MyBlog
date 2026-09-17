# 005\_实现 source-map-support

该原理可分为:

- 在运行前导入(且执行)前置文件. `node --import ./register.js ./add.js`.
- 重写 `Error` 类中的错误信息处理函数. `Error.prepareStackTrace = () => { // .... }`

> 需要注意的是, 栈帧信息的打印需要符合 **首行** 以 `'\n    at'` 开头的格式. 否则会被标记为 **无效栈帧**, 输出信息会带有一对中括号.
