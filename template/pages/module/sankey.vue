<template>
    <div class="echarts-box">
      <div id="myEcharts" style="width: 100%; height: 100%"></div> 
    </div>
  </template>
 
<script setup>
import { ref, onMounted } from "vue";
import * as echarts from "echarts";
    onMounted(() => {
      initChart();
    });

    onUnmounted(() => {
        echarts.dispose;
    });
	
    // 基础配置一下Echarts
    function initChart() {
      let chart = echarts.init(document.getElementById("myEcharts"));
      // 把配置和数据放这里
        var nodes = [{id: 'end',},];
        var links = [];
        for (let j = 0; j < 5; j++) {
            nodes.push({
                id: 'one' + j,
            });
            links.push({
                source: 'one' + j,
                target: 'two' + j,
                value: 1,
            });
        }
        for (let j = 0; j < 5; j++) {
            nodes.push({
                id: 'two' + j,
            });
            links.push({
                source: 'mysql80',
                target: 'three' + j,
                value: 1,
            });
        }
        for (let j = 0; j < 10; j++) {
            nodes.push({
                id: 'three' + j,
                type: 'L2',
            });
            if (j < 5) {
                links.push({
                    source: 'mysql80',
                    target: 'right' + j,
                    value: 1,
                });
            }
        }
        for (let j = 0; j < 2; j++) {
            nodes.push({
                id: 'four' + j,
            });
            links.push(
                {
                    source: 'three' + j,
                    target: 'four1',
                    value: 1,
                },
                {
                    source: 'three' + (j + 1),
                    target: 'four2',
                    value: 1,
                }
            );
        }

        console.log(JSON.stringify(nodes));
        console.log(JSON.stringify(links));
        links.push(
            {
                source: 'four1',
                target: 'end',
                value: 1,
            },
            {
                source: 'four2',
                target: 'end',
                value: 1,
            }
        );
        nodes = [

            { id: '关系型', level: 0},
            { id: '非关系型' , level: 0},

            { id: 'mysql80', level: 1 },
            { id: 'gbase8s', level: 1  },
            { id: 'oracle', level: 1  },

            { id: 'user01',level: 3  },
            { id: 'user02',  level: 3 },
            { id: 'user03',level: 3 },
            { id: 'user04',level: 3  },

            { id: 'update',level: 3  },
            { id: 'delete',  level: 3 },
            { id: 'add',level: 3 },
            { id: 'detail',level: 3  },

        ];
        links = [
            { source: '关系型', target: 'mysql80', value: 1 },
            { source: '非关系型', target: 'gbase8s', value: 1 },
            { source: '关系型', target: 'oracle', value: 1 },
            { source: 'oracle', target: 'user01', value: 1 },
            { source: 'oracle', target: 'user04', value: 1 },

            { source: 'mysql80', target: 'user01', value: 1 },
            { source: 'mysql80', target: 'user02', value: 1 },
            { source: 'mysql80', target: 'user03', value: 1 },
            { source: 'mysql80', target: 'user04', value: 1 },
            { source: 'gbase8s', target: 'user02', value: 1 },
            { source: 'gbase8s', target: 'user03', value: 1 },
            { source: 'gbase8s', target: 'user01', value: 1 },

            { source: 'user01', target: 'update', value: 1 },
            { source: 'user02', target: 'add', value: 1 },
            { source: 'user02', target: 'update', value: 1 },
            { source: 'user03', target: 'update', value: 1 },
            { source: 'user04', target: 'add', value: 1 },
            { source: 'user04', target: 'detail', value: 1 },
            { source: 'user01', target: 'delete', value: 1 },
            { source: 'user03', target: 'add', value: 1 },
        ];

        chart.setOption({
            tooltip: {
                trigger: 'item',
                triggerOn: 'mousemove',
            },
            series: {
                type: 'sankey',
                layout: 'none',
                top: 50,
                left: 50,
                right: 50,
                nodeGap: 14,
                layoutIterations: 0, // 自动优化列表，尽量减少线的交叉，为0就是按照数据排列
                data: nodes, // 节点
                links: links, // 节点之间的连线
                draggable: false,
                focusNodeAdjacency: 'allEdges', // 鼠标划上时高亮的节点和连线，allEdges表示鼠标划到节点上点亮节点上的连线及连线对应的节点
                // tooltip: {
                //   formatter: function(params) {
                //     if (params.data.source) {
                //       return `${params.data.source}：${params.data.value}`;
                //     } else {
                //       return `${params.name}：${params.value}`;
                //     }
                //   }
                // },

                levels: [
                    {depth: 0,itemStyle: {color: '#F27E7E',},lineStyle: {color: 'source',opacity: 0.2,},},
                    {depth: 1,lineStyle: {color: 'source',opacity: 0.2,},},
                    {depth: 2,lineStyle: {color: 'source',opacity: 0.2,},},
                    {depth: 3,label: {fontSize: 12,},},
                ],
                label: {
                    fontSize: 14,
                    color: '#666',
                },
                itemStyle: {borderWidth: 0},
            },
        });
    }

     
</script>
 
<style>
.echarts-box{
    height: 500px;
}
</style>