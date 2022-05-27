<template>
    <div class="stat-radar-graph">
        <apexchart type="radar" height="350" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>
<script>
    import VueApexCharts from 'vue-apexcharts'

    export default {
        name: 'StatRadarGraph',
        components: {
            apexchart: VueApexCharts,
        },
        data() {
            return {
                series: [{
                    name: 'Series 1',
                    data: [20, 100, 40, 30, 50, 80],
                }],
                chartOptions: {
                    chart: {
                        height: 350,
                        type: 'radar',
                    },
                    dataLabels: {
                        enabled: true
                    },
                    plotOptions: {
                        radar: {
                            size: 140,
                            polygons: {
                                strokeColors: '#E9E9E9',
                                fill: {
                                    colors: ['#F8F8F8', '#FFF']
                                }
                            }
                        }
                    },
                    title: {
                        text: 'Main Stats',
                    },
                    colors: ['#FF4560'],
                    markers: {
                        size: 4,
                        colors: ['#FFF'],
                        strokeColor: '#FF4560',
                        strokeWidth: 2,
                    },
                    tooltip: {
                        y: {
                            formatter: function (val) {
                                return val
                            }
                        }
                    },
                    xaxis: {
                        categories: ['Goals', 'Assists', 'Passes', 'Takles', 'Shots', 'Appearances']
                    },
                    yaxis: {
                        tickAmount: 7,
                        labels: {
                            formatter: function (val, i) {
                                if (i % 2 === 0) {
                                    return val
                                } else {
                                    return ''
                                }
                            }
                        }
                    }
                },


            }
        },
    }
</script>
<style lang="scss" scoped>
</style>