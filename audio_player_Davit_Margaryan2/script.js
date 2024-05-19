let data = {
    title : [
        "Michael Jackson - Billie jean", 
        "Eminem - Mockingbird", 
        "GTA IV Theme Song",
        "Modern Talking - Cheri Cheri Lady",
        "PSY - Gangnam Style",
        "Stromae - Alors on danse",
        "Jennifer Lopez - On The Floor",
        "XXXtentacion - Moonlight",
        "Eminem, Nate Dogg – 'Till I Collapse",
        "Doja Cat – Woman",
        "Michael Jackson – Stranger in Moscow"
    ],
    song : [
        "music/Michael Jackson - Billie Jean.mp3",
        "music/Eminem - Mockingbird.mp3",
        "music/GTA_IV-GTA_IV-world76.spcs.bio.mp3",
        "music/Modern Talking - Cheri Cheri Lady.mp3",
        "music/PSY - Gangnam Style.mp3",
        "music/Stromae - Alors on danse.mp3",
        "music/Jennifer Lopez - On The Floor.mp3",
        "music/XXXtentacion - Moonlight.mp3",
        "music/Eminem, Nate Dogg – 'Till I Collapse.mp3",
        "music/Doja Cat – Woman.mp3",
        "music/Michael Jackson – Stranger in Moscow.mp3"
    ],
    poster : [
        "https://downloadwap.com/thumbs3/screensavers/d/new/fcelebs/michael_joseph_jackson-329739.gif",
        "https://m.media-amazon.com/images/I/41cLDavIUTL._AC_UF894,1000_QL80_.jpg",
        "https://cdn.cloudflare.steamstatic.com/steam/apps/12210/capsule_616x353.jpg?t=1695131205",
        "https://i.makeagif.com/media/10-19-2022/mgq2w1.gif",
        "https://n1s2.hsmedia.ru/04/3a/7a/043a7a05c46ec85dcce4a861ed1d006f/1200x630_0xac120003_2985818291660227758.png",
        "https://i1.sndcdn.com/artworks-N4VzVPwHFSlKDij1-bcOJUg-t500x500.jpg",
        "https://phuketnews.phuketindex.com/wp-content/uploads/2011/03/27.jpg",
        "https://www.billboard.com/wp-content/uploads/media/XXXTENTACION-MOONLIGHT-2018-billboard-1548.jpg",
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f8a240bb-b9ea-4c45-9f41-ac71cb09fe1a/d9gnm1p-d55d4473-5c09-466d-9278-94f3533a2216.jpg/v1/fill/w_1024,h_1409,q_75,strp/eminem_poster_art_by_kibgraphics_d9gnm1p-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQwOSIsInBhdGgiOiJcL2ZcL2Y4YTI0MGJiLWI5ZWEtNGM0NS05ZjQxLWFjNzFjYjA5ZmUxYVwvZDlnbm0xcC1kNTVkNDQ3My01YzA5LTQ2NmQtOTI3OC05NGYzNTMzYTIyMTYuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.n1ubTSx5h5EIwq2_tZOZaCZZam91vh1HhiQmdgKHnzo",
        "https://i.pinimg.com/originals/62/0c/5a/620c5a819f8b8fa2a75575edf1d155ec.gif",
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/24945872-6dda-46ed-b196-b7ed15e09825/d37m1gs-d13c1c37-7369-47cc-896f-fd9a137a5990.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI0OTQ1ODcyLTZkZGEtNDZlZC1iMTk2LWI3ZWQxNWUwOTgyNVwvZDM3bTFncy1kMTNjMWMzNy03MzY5LTQ3Y2MtODk2Zi1mZDlhMTM3YTU5OTAuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.fwrOXL931c7rn3Hivnk4myMQmyM0-WXLXBMIKMXDKgA"
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