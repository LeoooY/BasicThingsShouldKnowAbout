echarts图表字体不支持em,rem,vw,vh等响应式单位，所以需要自己做一些处理.

1 Js获得页面容器的clienWidth作为VMBASE
2 通过计算得到fontSize，例如16px的大小为 16*VMBASE/100，此外可以根据实际效果做一些微调。

这样就完成了在不同分辨率下的echarts图表自适应
