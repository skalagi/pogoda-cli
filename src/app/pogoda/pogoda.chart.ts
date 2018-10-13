export const textStyle = {
    fontWeight: '600',
    color: '#fff',
};

export const chartConfig = {
    chart: {
        backgroundColor: 'transparent',
        margin: 0,
      },

      credits: { enabled: false },

      colors: ['#FFEB3B'],

      legend: {
        itemStyle: {
          ...textStyle
        }
      },

      xAxis: {
        type: 'datetime',
        minPadding: 0,
        maxPadding: 0,
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
      series: [],
      title: {
        text: '',
      },
};
