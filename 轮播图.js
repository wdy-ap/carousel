var log = console.log.bind(console)
var e = selector => document.querySelector(selector)
var es = selector => document.querySelectorAll(selector)

// 将图片和圆点的id剪成数字
var idNumber = element => {
    var id = element.getAttribute('id')
    var idNum = Number(id.slice(-1))
    return idNum
}

// 得出当前pic-container的自定义index属性
var picContainerIndex = () => {
    var picContainer = e('#pic-container')
    var pcIndex = Number(picContainer.dataset.index)
    return pcIndex
}

// 更新pic-container的自定义index属性
var updatePcIndex = (index) => {
    var picContainer = e('#pic-container')
    picContainer.dataset.index = index

}

// 所有图片删除show属性，当前数字的图片增加show属性
// 所有圆点删除高亮属性，当前数字的图片增加高亮属性
var active = index => {
    var pics = es('.pic')
    for (var i = 0; i < pics.length; i++) {
        pics[i].classList.remove('picShow')
        var id = idNumber(pics[i])
        if (id === index) {
            pics[i].classList.add('picShow')
        }
    }
    var rounds = es('.round')
    for (var i = 0; i < rounds.length; i++) {
        rounds[i].classList.remove('roundHighlight')
        var id = idNumber(pics[i])
        if (id === index) {
            rounds[i].classList.add('roundHighlight')
        }
    }
}

// 利用事件委托，当点击左右按钮的时候页面发生如上变化
var buttonsControl = () => {
    var buttonContainer = e('#button-container')
    buttonContainer.addEventListener('click', () => {
        var self = event.target
        var buttonIndex = Number(self.dataset.index)
        var pcIndex = picContainerIndex()
        var newIndex = (buttonIndex + pcIndex + 3) % 3
        active(newIndex)
        updatePcIndex(newIndex)
    })
}

// 利用事件委托，当鼠标移动到圆点上的时候页面发生如上变化
var roundControl = () => {
    var roundContainer = e('#round-container')
    roundContainer.addEventListener('mouseover', () => {
        var self = event.target
        if (self.classList.contains('round')) {
            var index = idNumber(self)
            active(index)
            updatePcIndex(index)
        }
    })
}

// 每二秒页面的变化，传递给setInterval备用
var clock = () => {
    var pcIndex = picContainerIndex()
    var newIndex = (pcIndex + 1 + 3) % 3
    active(newIndex)
    updatePcIndex(newIndex)
}

var main = () => {
    buttonsControl()
    roundControl()
    setInterval(clock, 2000)
}

main()
