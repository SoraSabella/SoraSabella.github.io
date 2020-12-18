// ....................Ini bagian Warna 1 - Warna 6...........................//

let warna1 = document.getElementById('warna1')
    warna1.onclick = function() {
        document.body.style.backgroundColor = "#a80826";
    }

let warna2 = document.getElementById('warna2')
    warna2.onclick = function() {
        document.body.style.backgroundColor = "#993c6f";
    }

let warna3 = document.getElementById('warna3')
    warna3.onclick = function() {
        document.body.style.backgroundColor = "#d683b0";
    }

let warna4 = document.getElementById('warna4')
    warna4.onclick = function() {
        document.body.style.backgroundColor = "#e85689";
    }

let warna5 = document.getElementById('warna5')
    warna5.onclick = function() {
        document.body.style.backgroundColor = "#ffd9e6";
    }

let warna6 = document.getElementById('warna6')
    warna6.onclick = function() {
        document.body.style.backgroundColor = "#f9bdff";
    }

// ....................Ini bagian Warna 7 - Warna 12...........................//

let warna7 = document.getElementById('warna7')
    warna7.onclick = function() {
        document.body.style.backgroundColor = "#f5edc4";
    }


let warna8 = document.getElementById('warna8')
    warna8.onclick = function() {
        document.body.style.backgroundColor = "#f7d9a1";
    }

let warna9 = document.getElementById('warna9')
    warna9.onclick = function() {
        document.body.style.backgroundColor = "#f7e76d";
    }

let warna10 = document.getElementById('warna10')
    warna10.onclick = function() {
        document.body.style.backgroundColor = "#f0cd22";
    }

let warna11 = document.getElementById('warna11')
    warna11.onclick = function() {
        document.body.style.backgroundColor = "#f7ac20";
    }

let warna12 = document.getElementById('warna12')
    warna12.onclick = function() {
        document.body.style.backgroundColor = "#99590b";
    }

// ....................Ini bagian Warna 13 - Warna 18...........................//

let warna13 = document.getElementById('warna13')
    warna13.onclick = function() {
        document.body.style.backgroundColor = "#48664c";
    }

let warna14 = document.getElementById('warna14')
    warna14.onclick = function() {
        document.body.style.backgroundColor = "#477a5c";
    }

let warna15 = document.getElementById('warna15')
    warna15.onclick = function() {
        document.body.style.backgroundColor = "#1c943e";
    }

let warna16 = document.getElementById('warna16')
    warna16.onclick = function() {
        document.body.style.backgroundColor = "#66c481";
    }

let warna17 = document.getElementById('warna17')
    warna17.onclick = function() {
        document.body.style.backgroundColor = "#ccf0d6";
    }

let warna18 = document.getElementById('warna18')
    warna18.onclick = function() {
        document.body.style.backgroundColor = "#d0d9d2";
    }

// ....................Ini bagian Warna 19 - Warna 24...........................//

let warna19 = document.getElementById('warna19')
    warna19.onclick = function() {
        document.body.style.backgroundColor = "#ceeded";
    }


let warna20 = document.getElementById('warna20')
    warna20.onclick = function() {
        document.body.style.backgroundColor = "#5fb0b0";
    }

let warna21 = document.getElementById('warna21')
    warna21.onclick = function() {
        document.body.style.backgroundColor = "#20c9c9";
    }

let warna22 = document.getElementById('warna22')
    warna22.onclick = function() {
        document.body.style.backgroundColor = "#2a68d4";
    }

let warna23 = document.getElementById('warna23')
    warna23.onclick = function() {
        document.body.style.backgroundColor = "#19386e";
    }

let warna24 = document.getElementById('warna24')
    warna24.onclick = function() {
        document.body.style.backgroundColor = "#454c59";
    }




// ....................Ini bagian Random...............................//

// Random Semua Warna
let random1 = document.getElementById('random1')
    random1.onclick = function() {
        let red = Math.floor(Math.random() * 255)
        let green = Math.floor(Math.random() * 255)
        let blue = Math.floor(Math.random() * 255)
        document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
        random1.innerHTML = `rgb (${red},${green},${blue})`
    }   

// Random Red Family
let random2 = document.getElementById('random2')
    random2.onclick = function() {
        let red = Math.floor(Math.random() * 255)
        let green = Math.floor(Math.random() * 25)
        let blue = Math.floor(Math.random() * 25)
        document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
        random2.innerHTML = `rgb (${red},${green},${blue})`
    }   

// Random Green Family
    let random3 = document.getElementById('random3')
    random3.onclick = function() {
        let red = Math.floor(Math.random() * 25)
        let green = Math.floor(Math.random() * 255)
        let blue = Math.floor(Math.random() * 25)
        document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
        random3.innerHTML = `rgb (${red},${green},${blue})`
    }   

// Random Blue Family
    let random4 = document.getElementById('random4')
    random4.onclick = function() {
        let red = Math.floor(Math.random() * 25)
        let green = Math.floor(Math.random() * 25)
        let blue = Math.floor(Math.random() * 255)
        document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
        random4.innerHTML = `rgb (${red},${green},${blue})`
    }   

// Random Dark Family
    let random5 = document.getElementById('random5')
    random5.onclick = function() {
        let red = Math.floor(Math.random() * 128)
        let green = Math.floor(Math.random() * 128)
        let blue = Math.floor(Math.random() * 128)
        document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
        random5.innerHTML = `rgb \n (${red},${green},${blue})`
    }   

// Random Light Family
    let random6 = document.getElementById('random6')
    random6.onclick = function() {
        let red = Math.floor(Math.random() * 128 + 128)
        let green = Math.floor(Math.random() * 128 + 128)
        let blue = Math.floor(Math.random() * 128 + 128)
        document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
        random6.innerHTML = `rgb \n (${red},${green},${blue})`
    }   