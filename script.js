let p1 = true
let p2 = false
let p1c = null
let p2c = null
let tc = 0
let p1s = document.querySelector(".choice-player-1")
let p2s = document.querySelector(".choice-player-2")
let u = "Игрок 1 ходит!"
let uu = document.querySelector(".u")
document.addEventListener("keydown", function(e){
	if (p1 == true && p2 == false) {
		if(e.code == "KeyA"){
			p1 = false
			p2 = true
			p1c = "камень"
			console.log(p1c)
		} else if(e.code == "KeyS"){
			p1 = false
			p2 = true
			p1c = "ножницы"
			console.log(p1c)
		} else if(e.code == "KeyD"){
			p1 = false
			p2 = true
			p1c = "бумага"
			console.log(p1c)
		}
	}

	if (p2 == true && p1 == false) {
		setTimeout(p2tt, 250)
		if(e.code == "KeyJ"){
			p2 = false
			p2c = "камень"
			console.log(p2c)
			setTimeout(show, 500)
			setTimeout(dot, 500)
			setTimeout(dotdot, 650)
			setTimeout(dotdotdot, 800)
			setTimeout(finish, 1000)
			setTimeout(reset, 3000)
		} else if(e.code == "KeyK"){
			p2 = false
			p2c = "ножницы"
			console.log(p2c)
			setTimeout(show, 500)
			setTimeout(dot, 500)
			setTimeout(dotdot, 650)
			setTimeout(dotdotdot, 800)
			setTimeout(finish, 1000)
			setTimeout(reset, 3000)
		} else if(e.code == "KeyL"){
			p2 = false
			p2c = "бумага"
			console.log(p2c)
			setTimeout(show, 500)
			setTimeout(dot, 500)
			setTimeout(dotdot, 650)
			setTimeout(dotdotdot, 800)
			setTimeout(finish, 1000)
			setTimeout(reset, 3000)
		}
	}
})

let p2tt = function(){
	u = "Игрок 2 ходит!"
    uu.innerHTML = u
}
let show = function(){
	if (p1c == "камень") {
		p1s.style.backgroundImage = "url(r.webp)"
		p1s.style.backgroundSize = "100% 80%"
		p1s.style.backgroundRepeat = "no-repeat"
	}else if (p1c == "ножницы") {
		p1s.style.backgroundImage = "url(s.png)"
		p1s.style.backgroundSize = "100% 100%"
	}else if (p1c == "бумага") {
		p1s.style.backgroundImage = "url(p.png)"
		p1s.style.backgroundSize = "100% 100%"
	}

	if (p2c == "камень") {
		p2s.style.backgroundImage = "url(r.webp)"
		p2s.style.backgroundSize = "100% 80%"
		p2s.style.backgroundRepeat = "no-repeat"
	}else if (p2c == "ножницы") {
		p2s.style.backgroundImage = "url(s.png)"
		p2s.style.backgroundSize = "100% 100%"
	}else if (p2c == "бумага") {
		p2s.style.backgroundImage = "url(p.png)"
		p2s.style.backgroundSize = "100% 100%"
	}
}
let finish = function(){
	if (p1c == "камень" && p2c == "камень") {
		u = "Ничья!"
        uu.innerHTML = u
	} else if (p1c == "ножницы" && p2c == "камень") {
		u = "Игрок 2 победил!"
        uu.innerHTML = u
	} else if (p2c == "ножницы" && p1c == "камень") {
		u = "Игрок 1 победил!"
        uu.innerHTML = u
	} else if (p1c == "ножницы" && p2c == "ножницы") {
		u = "Ничья!"
        uu.innerHTML = u
	} else if (p1c == "бумага" && p2c == "ножницы") {
		u = "Игрок 2 победил!"
        uu.innerHTML = u
	} else if (p2c == "бумага" && p1c == "ножницы") {
		u = "Игрок 1 победил!"
        uu.innerHTML = u
	} else if (p1c == "бумага" && p2c == "бумага") {
		u = "Ничья!"
        uu.innerHTML = u
	} else if (p1c == "камень" && p2c == "бумага") {
		u = "Игрок 2 победил!"
        uu.innerHTML = u
	} else if (p2c == "камень" && p1c == "бумага") {
		u = "Игрок 1 победил!"
        uu.innerHTML = u
	}
}
let reset = function(){
	p1 = true
	p2 = false
	tc = tc + 1
	u = "Игрок 1 ходит!"
    uu.innerHTML = u
    p1s.style.backgroundImage = ""
    p2s.style.backgroundImage = ""
}
let dot = function(){
	u = "."
    uu.innerHTML = u
}
let dotdot = function(){
	u = ".."
    uu.innerHTML = u
}
let dotdotdot = function(){
	u = "..."
    uu.innerHTML = u
}