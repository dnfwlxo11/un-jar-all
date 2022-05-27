<template>
    <div class="stat-line-graph">
        <apexchart ref="lineChart" height="300" type="line" :options="chartOptions" :series="series"></apexchart>   
    </div>    
</template>
<script>
import VueApexCharts from 'vue-apexcharts'

export default {
    name: 'StatLineGraph',
    components: {
        apexchart: VueApexCharts,
    },
    data() {
        return {
            series: [{
                data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
            }],
            chartOptions: {
                chart: {
                    type: 'line',
                    zoom: {
                        enabled: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'straight'
                },
                title: {
                    align: 'left'
                },
                grid: {
                    row: {
                        colors: ['#f3f3f3', 'transparent'],
                        opacity: 0.5
                    },
                },
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                },
                grid: {
                    row: {
                        colors: ['#424242']
                    },
                    column: {
                        colors: ['#424242']
                    }
                },
                theme: {
                    mode: 'dark',
                    monochrome: {
                        enabled: true,
                        color: '#FFFFFF',
                        shadeTo: 'dark',
                        shadeIntensity: 1
                    },
                }
            },
        }
    },
}
</script>
<style lang="scss" scoped>
</style>