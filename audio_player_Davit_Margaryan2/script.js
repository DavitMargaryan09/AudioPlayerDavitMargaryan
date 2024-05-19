let data = {
    title : [
        "Michael Jackson - Billie jean", 
        "Eminem - Mockingbird", 
        "GTA IV Theme Song",
        "Modern Talking - Cheri Cheri Lady",
        "PSY - Gangnam Style",
        "Stromae - Alors on danse",
        "Jennifer Lopez - On The Floor",
        "XXXtentacion - Moonlight"
    ],
    song : [
        "music/Michael Jackson - Billie Jean.mp3",
        "music/Eminem - Mockingbird.mp3",
        "music/GTA_IV-GTA_IV-world76.spcs.bio.mp3",
        "music/Modern Talking - Cheri Cheri Lady.mp3",
        "music/PSY - Gangnam Style.mp3",
        "music/Stromae - Alors on danse.mp3",
        "music/Jennifer Lopez - On The Floor.mp3",
        "music/XXXtentacion - Moonlight.mp3"
    ],
    poster : [
        "https://downloadwap.com/thumbs3/screensavers/d/new/fcelebs/michael_joseph_jackson-329739.gif",
        "https://m.media-amazon.com/images/I/41cLDavIUTL._AC_UF894,1000_QL80_.jpg",
        "https://cdn.cloudflare.steamstatic.com/steam/apps/12210/capsule_616x353.jpg?t=1695131205",
        "https://i.makeagif.com/media/10-19-2022/mgq2w1.gif",
        "https://n1s2.hsmedia.ru/04/3a/7a/043a7a05c46ec85dcce4a861ed1d006f/1200x630_0xac120003_2985818291660227758.png",
        "https://i1.sndcdn.com/artworks-N4VzVPwHFSlKDij1-bcOJUg-t500x500.jpg",
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

    totalTime(Math.floor(song.duration))
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
    let mute = document.getElementById("mute")
    song.volume += 0.2

    if(song.muted = false && song.volume <= 0.1) {
        song.volume = 0.2
    }
    if(song.volume > 0.1) {
        mute.src = "images/volume.png"
    }
}