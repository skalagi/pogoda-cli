export const textStyle = {
    fontWeight: '600',
    color: '#fff',
};

export const chartConfig = {
    chart: {
        backgroundColor: 'transparent',
      },

      credits: { enabled: false },

      plotOptions: {
        arearange: {
          fillColor: 'rgba(255, 255, 255, .75)',
        },
        area: {
          fillColor: 'rgba(255, 255, 255, .75)',
          lineWidth: 4,
        },
      },

      noData: {
        style: { ...textStyle },
      },

      colors: ['#ffc400'],

      legend: {
        enabled: false,
        itemStyle: {
          ...textStyle
        }
      },

      title: {
        text: '',
      },

      xAxis: {
        type: 'datetime',
        labels: {
          style: {
            ...textStyle,
          }
        },
      },

      yAxis: {
        title: {
          text: '',
          style: {
            ...textStyle
          }
        },
        labels: {
          style: {
            ...textStyle
          }
        }
      },
};
