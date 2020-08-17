import { environment } from './../../environments/environment';

// 清除console
export function clearLog() {
  // 禁用log
  if (!environment.isLog) {
    const consoleArr: string[] = [];
    const exclusive = ['warn', 'error']; // 除了这几个剩下的全部重写
    for (const key of Object.keys(console)) {
      if (exclusive.every((x: string) => x !== key)) {
        consoleArr.push(key);
      }
    }
    consoleArr.map((value) => window.console[value] = () => { }); // 重写函数
  }
}
