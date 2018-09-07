![图片1没显示吗？](/readme-pics/1.png)
![图片2没显示吗？](/readme-pics/2.png)
![图片3没显示吗？](/readme-pics/3.png)
### 功能
* 左右按钮切换图片
* 圆点导航
* 自动播放

### 功能实现
#### 左右按钮切换图片
> 点击按钮，获取pic-container的自定义属性index，结合发生事件按钮自身的自定义属性index，得出下一张要显示的图片，并更新到pic-container的index
#### 圆点导航
> 鼠标移动到某圆点，拿到自定义属性index，显示相应的图片，并更新到pic-container的index
#### 自动播放
> 每隔一秒钟，检查图片container的自定义属性index并+1，显示相应的图片，并更新到pic-container的index

#### 重叠的功能/封装的功能
> 所有的图片移除show这个属性
> 当前数字的图片增加show这个属性
> 所有的圆点移除show这个属性
> 当前的圆点增加show这个属性
> 将index更新到pic-container



