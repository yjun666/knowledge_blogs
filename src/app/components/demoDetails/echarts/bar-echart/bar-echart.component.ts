import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';

@Component({
  selector: 'component-bar-echart',
  templateUrl: './bar-echart.component.html',
  styleUrls: ['./bar-echart.component.scss']
})

export class BarEhcartComponent implements OnInit {
  public forecastChartEl: any = null; // 当前图表的实例
  public chartOption: EChartOption = {
    title: {
      text: 'LTB预测表现',
      top: 10,
      left: 20,
      textStyle: {
        fonSize: 14,
      }
    },
    color: ['#FFBE77', '#5FB9FF'],
    textStyle: {
      fontFamily: 'Gotham-Book,MicrosoftYaHeiUI',
      fontSize: 10,
      color: 'rgba(63,70,89,0.8)'

    },
    legend: {
      right: 25,
      top: 10,
      textStyle: {
        fontSize: 12
      }
    },
    tooltip: {
      position: 'top',
      formatter: (item: any) => {
        // console.log(item);
        return item.data[item.seriesIndex + 1].toFixed(2) + '%';
      }
    },
    dataset: {
      source: [
        ['product', 'AI', '人工', 'AI', '人工'],
        ['上月需求率*季节因子法', 60.4, 60.5, 82.3, 93.3],
        ['去年同期月需求率法', 60.4, 55.2, 82.3, 91.7],
        ['产线大类月需求率发', 60.4, 53.8, 82.3, 81.6],
        ['历史平均需求率法', 60.4, 58.1, 82.3, 91.5],
      ]
    },
    xAxis: [
      {
        type: 'category',
        gridIndex: 0,
        data: ['上月需求率*季节因子法', '去年同期月需求率法', '产线大类月需求率发', '历史平均需求率法'],
        axisLine: { show: false },
        axisLabel: { show: false },
        axisTick: { show: false }
      },
      {
        type: 'category',
        gridIndex: 1,
        data: ['上月需求率*季节因子法', '去年同期月需求率法', '产线大类月需求率发', '历史平均需求率法'],
        axisLine: { show: false },
        axisLabel: { show: false },
        axisTick: { show: false }
      },
      // 模拟底部显示的X轴
      {
        type: 'category',
        gridIndex: 2,
        data: ['上月需求率*季节因子法', '去年同期月需求率法', '产线大类月需求率发', '历史平均需求率法'],
        axisLine: {
          show: true,
          lineStyle: {
            color: '#BFBFB'
          }
        },
        axisLabel: { show: false },
        axisTick: {
          show: true, alignWithLabel: true, lineStyle: {
            color: '#BFBFB'
          }
        },
        name: '笔记本',
        nameLocation: 'center'
      }
    ],
    yAxis: [
      {
        gridIndex: 0, max: 100, min: 0,
        axisLabel: {
          color: '#8b909b',
          align: 'left',
          formatter: (value: number, index: number) => {
            if (index === 0) {
              return '';
            } else {
              return value + '%';
            }
          }
        },
        axisTick: { show: false },
        axisLine: { show: false },
        splitLine: {
          lineStyle: {
            type: 'dashed',
            color: '#E4E4E4'
          }
        }
      },
      {
        gridIndex: 1, max: 100, min: 0,
        axisLabel: {
          align: 'left',
          color: '#8b909b',
          formatter: (value: number, index: number) => {
            if (index === 0) {
              return '';
            } else {
              return value + '%';
            }
          }
        },
        inverse: true,
        axisTick: { show: false },
        axisLine: { show: false },
        splitLine: {
          lineStyle: {
            type: 'dashed',
            color: '#E4E4E4'
          }
        }
      },
      // 显示用模拟轴
      {
        gridIndex: 2,
        max: 100,
        min: 0,
        axisLabel: { show: false },
        axisTick: { show: false },
        axisLine: { show: false },
        splitLine: {
          lineStyle: {
            type: 'dashed',
            color: '#E4E4E4'
          }
        }
      }
    ],
    grid: [
      { bottom: '52%', left: 35, right: 30 },
      { top: '52%', left: 35, right: 30 },
      { top: '52%', left: 35, right: 30 },
    ],
    series: [
      // These series are in the first grid.
      {
        id: 'ai-zql',
        type: 'bar',
        barWidth: 25,
        name: '准确率',
        xAxisIndex: 0,
        yAxisIndex: 0,
        itemStyle: { barBorderRadius: 2 },
        label: { show: true, position: 'bottom', formatter: 'AI' }
      },   // AI
      {
        id: 'rg-zql',
        type: 'bar',
        barWidth: 25,
        name: '准确率',
        xAxisIndex: 0,
        yAxisIndex: 0,
        itemStyle: { barBorderRadius: 2 },
        label: {
          position: 'bottom',
          show: true, formatter: (params: any) => {
            return '方法' + (params.dataIndex + 1);
          }
        }
      },   // 人工
      // These series are in the second grid.
      {
        id: 'ai-hr',
        type: 'bar',
        barWidth: 25,
        name: 'Hit rate',
        xAxisIndex: 1,
        yAxisIndex: 1,
        itemStyle: { barBorderRadius: 2 }
      },  // AI
      {
        id: 'rg-hr',
        type: 'bar',
        barWidth: 25,
        name: 'Hit rate',
        xAxisIndex: 1,
        yAxisIndex: 1,
        itemStyle: { barBorderRadius: 2 }
      },  // 人工
      // {type: 'bar', name: 'Hit rate', xAxisIndex: 2, yAxisIndex: 2, itemStyle: {barBorderRadius: 2}},  //AI
      // {type: 'bar', name: 'Hit rate', xAxisIndex: 2, yAxisIndex: 2, itemStyle: {barBorderRadius: 2}}  //人工

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

    })

    // hover 离开symbol圈上时触发，同onChartEventOut
    this.forecastChartEl.on('mouseout', params => {// 鼠标移出
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
