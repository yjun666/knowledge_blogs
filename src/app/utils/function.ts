// 方法定义
// 去掉字符串的空格
let trim = (str: string, type: number): any => { };
// 下载为XLS表格
let downloadAsXLS = (res: any) => { };
// dateTimeStamp是一个时间毫秒，注意时间戳是秒的形式，在这个毫秒的基础上除以1000，就是十位数的时间戳。13位数的都是时间毫秒。
let timeago = (dateTimeStamp: number) => { };

/**
 * 修改new Date() 为 2015-01-01 字符串
 * @param value value是任意日期格式，2010-01-01 或者 2020／01／01，或者毫秒数
 * @param symbol 连接字符 默认是 -
 */
let changeDateToString = ({ value, symbol }): string => { return '1970-01-01' };

// 方法重写
{
  /**
   * 去掉字符串的空格
   * @param str 字符串
   * @param type 类型 清除哪部分的空字符串,1:清除所有空格、2：清除前后空格、3：清除前空格、4:清除后空格
   */
  trim = (str, type) => {
    switch (type) {
      case 1:
        return str.replace(/\s+/g, '');
      case 2:
        return str.replace(/(^\s*)|(\s*$)/g, '');
      case 3:
        return str.replace(/(^\s*)/g, '');
      case 4:
        return str.replace(/(\s*$)/g, '');
      default:
        return str;
    }
  }

  // 下载为XLS表格
  downloadAsXLS = (res: any) => {

    let fileName = 'data.xlsx'; // 默认文件名

    // 后端设置的文件名称在res.headers的 "content-disposition": "form-data; name=\"attachment\"; filename=\"20181211191944.zip\"",
    if (res.headers['content-disposition']) {
      fileName = res.headers['content-disposition'].split(';')[1].split('=')[1];
    }

    const blob = res.data;
    console.log('下载文件=>：', blob);
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onload = (e: any) => {
      const a = document.createElement('a');
      a.download = fileName;

      a.href = e.target.result;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    };
  }


  // dateTimeStamp是一个时间毫秒，注意时间戳是秒的形式，在这个毫秒的基础上除以1000，就是十位数的时间戳。13位数的都是时间毫秒。
  timeago = (dateTimeStamp: number) => {

    let result = '';
    const minute = 1000 * 60; // 把分，时，天，周，半个月，一个月用毫秒表示
    const hour = minute * 60;
    const day = hour * 24;
    const week = day * 7;
    const halfamonth = day * 15;
    const month = day * 30;
    const now = new Date().getTime(); // 获取当前时间毫秒
    const diffValue = now - dateTimeStamp; // 时间差
    if (diffValue < 0) {
      return;
    }
    const minC = diffValue / minute; // 计算时间差的分，时，天，周，月
    const hourC = diffValue / hour;
    const dayC = diffValue / day;
    const weekC = diffValue / week;
    const monthC = diffValue / month;
    if (monthC >= 1 && monthC <= 3) {
      result = ' ' + parseInt(String(monthC), 10) + '月前';
    } else if (weekC >= 1 && weekC <= 3) {
      result = ' ' + parseInt(String(weekC), 10) + '周前';
    } else if (dayC >= 1 && dayC <= 6) {
      result = ' ' + parseInt(String(dayC), 10) + '天前';
    } else if (hourC >= 1 && hourC <= 23) {
      result = ' ' + parseInt(String(hourC), 10) + '小时前';
    } else if (minC >= 1 && minC <= 59) {
      result = ' ' + parseInt(String(minC), 10) + '分钟前';
    } else if (diffValue >= 0 && diffValue <= minute) {
      result = '刚刚';
    } else {
      const datetime = new Date();
      datetime.setTime(dateTimeStamp);
      const Nyear = datetime.getFullYear();
      const Nmonth = datetime.getMonth() + 1 < 10 ? '0' + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
      const Ndate = datetime.getDate() < 10 ? '0' + datetime.getDate() : datetime.getDate();
      const Nhour = datetime.getHours() < 10 ? '0' + datetime.getHours() : datetime.getHours();
      const Nminute = datetime.getMinutes() < 10 ? '0' + datetime.getMinutes() : datetime.getMinutes();
      const Nsecond = datetime.getSeconds() < 10 ? '0' + datetime.getSeconds() : datetime.getSeconds();
      result = Nyear + '-' + Nmonth + '-' + Ndate;
    }
    return result;
  }



  /**
   * 修改new Date() 为 2015-01-01 字符串
   */
  changeDateToString = ({ value, symbol }: any): string => {
    symbol = symbol ? symbol : '-';
    let dateArr: string[] = value ? new Date(value).toLocaleDateString().split('/') : new Date().toLocaleDateString().split('/');
    dateArr = dateArr.map((x: string, xIdx: number) => Number(x) < 10 ? '0' + x : x);
    return dateArr.join(symbol);
  }
}

