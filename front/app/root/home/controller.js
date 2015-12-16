import Ember from 'ember';

export default Ember.Controller.extend({
   productListCol1: Ember.computed(function() {
      return [{
         img: "/images/products/co2.jpg",
         name: "二氧化碳灭火器",
         description: "用于扑救贵重设备、档案资料、仪器仪表、600伏以下电气设备及油类的初起火灾"
      }, {
         img: "/images/products/abc.jpg",
         name: "ABC型干粉灭火器",
         description: "可扑灭一般火灾，还可扑灭油，气等燃烧引起的失火"
      }, {
         img: "/images/products/abc-trolley.jpg",
         name: "推车式ABC干粉灭火器",
         description: "可扑灭一般火灾，还可扑灭油，气等燃烧引起的失火"
      }]
   }),
   productListCol2: Ember.computed(function() {
      return [{
         img: "/images/products/co2.jpg",
         name: "二氧化碳灭火器",
         description: "用于扑救贵重设备、档案资料、仪器仪表、600伏以下电气设备及油类的初起火灾"
      }, {
         img: "/images/products/abc.jpg",
         name: "ABC型干粉灭火器",
         description: "可扑灭一般火灾，还可扑灭油，气等燃烧引起的失火"
      }, {
         img: "/images/products/abc-trolley.jpg",
         name: "推车式ABC干粉灭火器",
         description: "可扑灭一般火灾，还可扑灭油，气等燃烧引起的失火"
      }]
   }),
   productListCol3: Ember.computed(function() {
      return [{
         img: "/images/products/co2.jpg",
         name: "二氧化碳灭火器",
         description: "用于扑救贵重设备、档案资料、仪器仪表、600伏以下电气设备及油类的初起火灾"
      }, {
         img: "/images/products/abc.jpg",
         name: "ABC型干粉灭火器",
         description: "可扑灭一般火灾，还可扑灭油，气等燃烧引起的失火"
      }, {
         img: "/images/products/abc-trolley.jpg",
         name: "推车式ABC干粉灭火器",
         description: "可扑灭一般火灾，还可扑灭油，气等燃烧引起的失火"
      }]
   }),
   clientList: Ember.computed(function() {
      return [
         ["天津市长征医院", 117.18347, 39.153778],
         ["天津市中医药大学", 117.173417, 39.121505],
         ["天津市城建大学", 117.102684, 39.102167],
         ["壳牌华北石油集团天津分公司", 0, 0],
         ["天津银行股份有限公司", 117.249242, 39.149441],
         ["天津立白集团股份有限公司", 117.315691, 39.02763],
         ["天津蓝天集团股份有限公司", 117.243661, 39.133071],
         ["天津市三千集团", 117.257617, 39.227726],
         ["天津市宏仁堂股份有限公司", 117.144303, 39.171653],
         ["天津三电汽车空调有限公司", 117.106448, 39.134897],
         ["工商河西分局", 117.205815, 39.102111],
         ["707研究所", 115.993853, 29.682602],
         ["天津市养老院", 117.14493, 39.148601],
         ["天津市中医药大学第二附属医院", 117.234006, 39.155673],
         ["天津市三源电力设备制造有限公司", 117.214623, 39.219187],
         ["中国铁通集团有限公司天津分公司", 117.225554, 39.160436],
         ["中新药业红桥分公司", 117.19692, 39.152861],
         ["天津市质检院", 117.124684, 39.096707]
      ].map(function(obj) {
         return {
            imageOffset: {
               width: -46,
               height: -21
            },
            title: obj[0],
            position: {
               lat: obj[2],
               lng: obj[1]
            }
         }
      });
   }),
   QAList: Ember.computed(function() {
      return [{
         q: {
            title: "为什么选择金凯达成消防?",
            description: "众多消防安全设备销售商，我该如何选择?"
         },
         a: [{
            title: "我们安全、专业、高效率",
            description: "天津市金凯达成消防器材服务于本市20多家大型民营、政府企业机构"
         }]
      }, {
         q: {
            title: "你们的业务范围?",
            description: "除了销售、维修灭火器材和安全设备，你们还提供什么服务?"
         },
         a: [{
            title: "培训您的员工使用灭火设备",
            description: "我们了解到很多企业消防设施齐全，可是员工们并不会使用。因此，除了销售和维修之外，我们还可以到您的企业向员工演示灭火器使用方法。"
         }, {
            title: "安装应急设备",
            description: "除了销售应急灯、摄像头、疏散标志外，我们还可以到您的企业安装这些设备。"
         }],
      }, ]
   })
});
