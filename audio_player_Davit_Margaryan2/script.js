let data = {
    title : [
        "Michael Jackson - Billie jean", 
        "Eminem - Mockingbird", 
        "Ace Of Base - Happy Nation",
        "Modern Talking - Cheri Cheri Lady",
        "PSY - Gangnam Style",
        "50 Cent - PIMP",
        "Jennifer Lopez - On The Floor",
        "XXXtentacion - Moonlight"
    ],
    song : [
        "music/Michael Jackson - Billie Jean.mp3",
        "music/Eminem - Mockingbird.mp3",
        "music/Ace Of Base - Happy Nation.mp3",
        "music/Modern Talking - Cheri Cheri Lady.mp3",
        "music/PSY - Gangnam Style.mp3",
        "music/50 Cent - PIMP.mp3",
        "music/Jennifer Lopez - On The Floor.mp3",
        "music/XXXtentacion - Moonlight.mp3"
    ],
    poster : [
        "https://downloadwap.com/thumbs3/screensavers/d/new/fcelebs/michael_joseph_jackson-329739.gif",
        "https://www.what-song.com/_next/image?url=https%3A%2F%2Fi.scdn.co%2Fimage%2Fab67616d00001e02a18291a1854b9b6371ff9663&w=3840&q=75",
        "https://upload.wikimedia.org/wikipedia/en/4/4b/Happy_nation.jpg",
        "https://upload.wikimedia.org/wikipedia/en/d/dd/Cheri_Cheri_Lady.jpg",
        "https://n1s2.hsmedia.ru/04/3a/7a/043a7a05c46ec85dcce4a861ed1d006f/1200x630_0xac120003_2985818291660227758.png",
        "https://i.ytimg.com/vi/UDApZhXTpH8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCC6pO8pbuRJfzRzja7kuE0ZhiD1g",
        "https://phuketnews.phuketindex.com/wp-content/uploads/2011/03/27.jpg",
        "https://www.billboard.com/wp-content/uploads/media/XXXTENTACION-MOONLIGHT-2018-billboard-1548.jpg"
    ]
}

let song = new Audio()
window.onload = function() {
    playSong()
}

let currentSong = 0
function playSong() {
    song.src = data.song[currentSong]
    let songTitle = document.getElementById("songTitle")
    songTitle.textContent = data.title[currentSong]
    let img = document.getElementsByClassName("row1")
    img[0].style.backgroundImage = "url(" + data.poster[currentSong] +")"
    let main = document.getElementsByClassName("main")
    main[0].style.backgroundImage = "url(" + data.poster[currentSong] +")"
    song.play()
}

function playOrPauseSong() {
    let play = document.getElementById("play")

    if(song.paused) {
        song.play()
        play.src = "images/pause.png"
    }else {
        song.pause()
        play.src = "images/play-button-arrowhead.png"
    }
}


song.addEventListener("timeupdate", function () {
    let fill = document.getElementsByClassName("fill")

        let position = song.currentTime/song.duration
    fill[0].style.marginLeft = position *  99 + "%"

    convertTime(Math.round(song.currentTime))


    if(song.ended) {
        next()
    }
})

function convertTime(seconds) {
    let currentTime = document.getElementsByClassName("currentTime")
    

    let min = Math.floor(seconds/60)
    let sec = Math.floor(seconds%60)


    min = (min < 10) ? "0" + min : min
    sec = (sec < 10) ? "0" + sec : sec

    currentTime[0].textContent = min + ":" + sec
    // if(sec < 10) {
    //     "0" + sec
    // } else {
    //     sec
    // }

    totalTime(Math.round(song.duration))
}


function totalTime(seconds) {
    let currentTime = document.getElementsByClassName("currentTime")
    

    let min = Math.floor(seconds/60)
    let sec = Math.floor(seconds%60)


    min = (min < 10) ? "0" + min : min
    sec = (sec < 10) ? "0" + sec : sec
    
    currentTime[0].textContent += " / " + min + ":" + sec
}


function prev() {
    currentSong--
    let play = document.getElementById("play")
    if(currentSong < 0) {
        currentSong = data.song.length - 1
        
    }

    playSong()
    play.src = "images/pause.png"
}

function next() {
    currentSong++
    let play = document.getElementById("play")
    if(currentSong > data.song.length - 1) {
        currentSong = 0
        
    }

    playSong()
    play.src = "images/pause.png"
}

function mute() {
    let mute = document.getElementById("mute")

    if(song.muted) {
        song.muted = false
        mute.src = "images/volume.png"
    }else {
        song.muted = true
        mute.src = "images/volume-mute.png"
    }
}

function decrease() {
    let mute = document.getElementById("mute")
    song.volume -= 0.2

    if(song.volume <= 0.1) {
        mute.src = "images/volume-mute.png"
    } 
}

function increase() {
    song.volume += 0.2

}