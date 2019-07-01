### angular打包命令

> ng build // 普通打包

> ng build --prod // 生产模式打包命令，进行了压缩 默认开启了aot

> ng build --prod --build--optimizer // 编译后进一步压缩文件的大小，比普通prod更小

> ng build --aot // 预先编译器,运行时更快

> ng build --prod --no-extract-license // ng build --prod 报错解决方式，如果是依赖的问题可以使用此种方式解决问题

> ng build --prod --no-extract-license --build--optimizer // 最终打包方式
