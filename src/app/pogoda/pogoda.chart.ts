export const textStyle = {
    fontWeight: '600',
    color: '#fff',
};

export const chartConfig = {
    chart: {
        backgroundColor: 'transparent',
      },

      credits: { enabled: false },

      colors: ['#FFEB3B'],

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
