var log = console.log.bind(console)

var e = function(selector) {
    var element = document.querySelector(selector)
    if (element == null) {
        var s = `元素没找到，选择器 ${selector} 没有找到或者 js 没有放在 body 里`
        alert(s)
    } else {
        return element
    }
}

var es = function(selector) {
    var elements = document.querySelectorAll(selector)
    if (elements.length == 0) {
        var s = `元素没找到，选择器 ${selector} 没有找到或者 js 没有放在 body 里`
        alert(s)
    } else {
        return elements
    }
}

var idFinder = index => e(`#id-${index}`)

var activeClear = () => {
    var pics = es('.pic')
    for (var i = 0; i < 3; i++) {
        pics[i].classList.remove('active')
    }
    var rounds = es('.round')
    for (var i = 0; i < 3; i++) {
        rounds[i].classList.remove('round-active')
    }
}

var leftRight = () => {
    var squares = e('.squares')
    squares.addEventListener('click', function() {
        var self = event.target
        if (self.classList.contains('square')) {
            var number = Number(self.dataset.index)
            var pics = es('.pic')
            for (var i = 0; i < 3; i++) {
                if (pics[i].classList.contains('active')) {
                    break
                }
            }
            var number = (i + number + 3) % 3 + 1
            var picActive = idFinder(number)
            activeClear()
            picActive.classList.add('active')
            var rounds = es('.round')
            for (var i = 0; i < 3; i++) {
                if (rounds[i].dataset.index === String(number)) {
                    rounds[i].classList.add('round-active')
                }
            }
        }
    })
}

var roundHover = () => {
    var roundContainer = e(".round-container")
    roundContainer.addEventListener('mouseover', function() {
        var self = event.target
        if (self.classList.contains('round')) {
            var index = self.dataset.index
            var picActive = idFinder(index)
            activeClear()
            self.classList.add('round-active')
            picActive.classList.add('active')
        }
    })
}

var automatic = () => {
    setInterval(function() {
        var pics = es('.pic')
        for (var i = 0; i < 3; i++) {
            if (pics[i].classList.contains('active')) {
                break
            }
        }
        var number = (i + 1) % 3 + 1
        var picActive = idFinder(number)
        activeClear()
        picActive.classList.add('active')
        var rounds = es('.round')
        for (var i = 0; i < 3; i++) {
            if (rounds[i].dataset.index === String(number)) {
                rounds[i].classList.add('round-active')
            }
        }
    }, 2000)
}

var __main = () => {
    leftRight()
    roundHover()
    automatic()
}

__main()
