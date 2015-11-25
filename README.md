# increaseJS

> 一个返回变化的数字的js，依赖zepto
> 基本详情见仓库demo

### 基本用法

	var increase1 = new Increase({
            el:'.btn1',
            dpEl:'.display1',
            speed:30
        });
        
按住`el`会往上增长数字显示在`dpEl`中。默认数字从0-100返回。

### 基本参数
> 所有参数在实例化后可以通过实例化对象修改相应属性进行修改 e.g.
> `increase1.speed = 60;`来及时修改速度

#### 初始化参数

	el:string //按住触发增长的dom元素 e.g. '.btn'
	dpEl:string //显示增长数字的dom元素 e.g. '.display'
	speed:number //增长速度，在定时器中用1000/speed，建议60以下，
					通过改变动画区间值改变动画速度。
	richMin:number //数字最低值
	richMax:number //数字最高值
	drow:function //动画函数，会在方法中执行drow(m) m代表增长中的数字 e.g.
					var drow = function(m){
						
					}
	continue:booleans //是否在暂停继续时不从头开始，默认false
	reset:booleans //是否增长完成后从头继续，默认false
	
#### 功能参数
> 功能参数使用实例化对象来使用 e.g. `increase1.cunrentNum=1`

	cunrentNum:number //前提continue参数为true时，
						可以改变当前数字来改变数字变动起点
	
### 基本事件
>  使用$包裹的实例化对象进行监听，e.g. `$(increase1).on('increase:start',function(){})`

* `increase:start`,在开始时触发。
* `increase:update`，在数字变换时触发，并且携带变换的数字作为参数。
* `increase:over`，在数字超出或者达到最大值时触发。
	
### 基本方法
> 使用实例化对象调用

	random: function(min,max,minlength,maxlength) 
	return [minNumber,maxNumber]
	用作产生随机区间
	参数分别是数字最小值，数字最大值，区间最小值，区间最大值
	
	enrich: function(min,max,speed,callback)
	用作数字增长，可控可调节，如果有会调用传入的drow方法进行，否则进行数字增长
	参数分别为，数字最小值，最大值，速度，完成后回调函数
	