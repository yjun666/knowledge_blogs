import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';

@Component({
  selector: 'component-line-echart',
  templateUrl: 'line-echart.component.html',
  styleUrls: ['./line-echart.component.scss']
})

export class LineEhcartComponent implements OnInit {
  public forecastChartEl: any = null; // 当前图表的实例
  public chartOption: EChartOption = {
    title: {
      text: '堆叠区域图'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // type: 'line',
        type: 'cross',
        label: {
          backgroundColor: 'red'
        },
        lineStyle: {
          color: 'red'
        }
      }
    },
    legend: {
      data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '邮件营销',
        type: 'line',
        stack: '总量',
        areaStyle: {},
        data: [120, 132, 101, 134, 90, 230, 210],
        emphasis: {
          itemStyle: {
            color: 'red',
            borderColor: 'yellow',
            borderWidth: 6,
          }
        }
      },
      {
        name: '联盟广告',
        type: 'line',
        stack: '总量',
        areaStyle: {},
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: '视频广告',
        type: 'line',
        stack: '总量',
        areaStyle: {},
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: '直接访问',
        type: 'line',
        stack: '总量',
        areaStyle: {},
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: '搜索引擎',
        type: 'line',
        stack: '总量',
        label: {
          normal: {
            show: true,
            position: 'top'
          }
        },
        areaStyle: {},
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    ]
  }; // 图表数据
  constructor() { }

  ngOnInit() { }

  /**
   * 初始化方法
   * @method forecastChartInit
   * @param event 参数
   * @return 无
   */
  public forecastChartInit(event: any) {
    this.forecastChartEl = event;
    this.forecastChartEl.getZr().on('mousemove', param => {
      const dIndex = this.forecastChartEl.convertFromPixel({ seriesIndex: 0 }, [param.offsetX, param.offsetY])[0];
      // console.log(param);
      // console.log(this.forecastChartEl, dIndex, this.forecastChartEl.convertFromPixel({ seriesIndex: 0 }, [param.offsetX, param.offsetY]));

    });
    this.forecastChartEl.getZr().on('globalout', param => {
      const dIndex = this.forecastChartEl.convertFromPixel({ seriesIndex: 0 }, [param.offsetX, param.offsetY])[0];
      console.log(dIndex);

    });

    // hover 到symbol圈上时触发，同onChartEventOver
    this.forecastChartEl.on('mouseover', params => {// 鼠标移入
      this.forecastChartEl.setOption({// 设置 鼠标移入后想要的样式
        series: {
          name: params.seriesName,
          symbolSize: 4,
          lineStyle: {
            width: 4
          }
        }
      })
    })

    // hover 离开symbol圈上时触发，同onChartEventOut
    this.forecastChartEl.on('mouseout', params => {// 鼠标移出
      this.forecastChartEl.setOption({// 将样式复原
        series: {
          name: params.seriesName,
          symbolSize: 2,
          lineStyle: {
            width: 2
          }
        }
      })
    })
  }

  /**
   * 单击事件 单机线图的symbol小圈时触发
   * @method clickFc
   * @param event 参数
   * @return 无
   */
  public clickFc(event) {
    console.log('clickFc', event);
  }

  /**
   * 双击事件，双击线图的symbol小圈时触发
   * @method dbClickFc
   * @param event 参数
   * @return 无
   */
  public dbClickFc(event) {
    console.log('dbClickFc', event);
  }

  /**
   * 缩放
   * @method dataZoomFc
   * @param event 参数
   * @return 无
   */
  public dataZoomFc(event) {
    console.log('dataZoomFc', event);
  }

  /**
   * mouseover hover 到线图的symbol上时显示的事件
   * @method onChartEventOver
   * @param event 参数
   * @return 无
   */
  public onChartEventOver(event) {
    console.log('onChartEventOver', event);
  }
  /**
   * mouseout 从线图的symbol hover下来时触发
   * @method onChartEventOut
   * @param event 参数
   * @return 无
   */
  public onChartEventOut(event) {
    console.log('onChartEventOut', event);
  }
}
