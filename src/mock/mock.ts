const data = [
    {name: '测试供电所',satatus:'1',label:'供电所/AI评估中风险',list:[{all:300,status:0,number:3},{all:300,status:1,number:3},{all:300,status:2,number:5},{all:300,status:3,number:156}]},
    {name: '测试供电所',satatus:'0',label:'供电所/AI评估低风险',list:[{all:300,status:0,number:3}]},
    {name: '测试供电所',satatus:'1',label:'供电所/AI评估低风险',list:[{all:300,status:0,number:3},{all:300,status:1,number:3},{all:300,status:2,number:5}]},
    {name: '测试供电所',satatus:'0',label:'供电所/AI评估低风险',list:[{all:300,status:0,number:3},{all:300,status:1,number:3},{all:300,status:2,number:5}]},
    {name: '测试供电所',satatus:'1',label:'供电所/AI评估中风险',list:[{all:300,status:0,number:3},{all:300,status:1,number:3},{all:300,status:2,number:5}]},
	  {name: '测试供电所',satatus:'1',label:'供电所/AI评估低风险',list:[{all:300,status:0,number:3},{all:300,status:1,number:3},{all:300,status:2,number:5},{all:300,status:3,number:156}]},
    {name: '测试供电所',satatus:'0',label:'供电所/AI评估低风险',list:[{all:300,status:0,number:3},{all:300,status:1,number:3}]},
    {name: '测试供电所',satatus:'1',label:'供电所/AI评估中风险',list:[{all:300,status:0,number:3},{all:300,status:1,number:3},{all:300,status:2,number:5},{all:300,status:3,number:156}]},
    {name: '测试供电所',satatus:'1',label:'供电所/AI评估中风险',list:[{all:300,status:0,number:3},{all:300,status:1,number:3},{all:300,status:2,number:5},{all:300,status:3,number:156}]},
    {name: '测试供电所',satatus:'0',label:'供电所/AI评估低风险',list:[{all:300,status:0,number:3},{all:300,status:1,number:3}]},
	  {name: '测试供电所',satatus:'0',label:'供电所/AI评估低风险',list:[{all:300,status:0,number:3},{all:300,status:1,number:3}]},
    {name: '测试供电所',satatus:'1',label:'供电所/AI评估中风险',list:[{all:300,status:0,number:3},{all:300,status:1,number:3}]},
    {name: '测试供电所',satatus:'0',label:'供电所/AI评估低风险',list:[{all:300,status:0,number:3},{all:300,status:3,number:156}]},
    {name: '测试供电所',satatus:'0',label:'供电所/AI评估低风险',list:[{all:300,status:0,number:3}]},
    {name: '测试供电所',satatus:'0',label:'供电所/AI评估低风险',list:[{all:300,status:0,number:3},{all:300,status:3,number:156}]},
  ]
  
  export async function getData (): Promise<unknown[]> {
    return new Promise((resolve, reject) => {
      const ret = [...data, ...data]
      setTimeout(() => {
        resolve(ret)
      }, 2000)
    })
  }