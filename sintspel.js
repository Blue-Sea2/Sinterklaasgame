var games = {
    verstoppen: 'pietengames-2023/verstoppen.html',
    ozosnel: 'pietengames-2019/ozosnel.html',
    waarozosnel: 'pieten-minigames-2021/ozosnel.html',
    precisiestrooien: 'pieten-minigames-2020/precisiestrooien.html',
    babypiet: 'pietengames-2021/babypiet.html',
    schoenenzoeken: 'pieten-minigames-2020/schoenenzoeken.html',
    paardvoeren: 'pieten-minigames-2018/paardvoeren.html',
    chocoladegereedschap: 'pieten-minigames-2021/chocoladegereedschap.html',
    taartversieren: 'pietengames-2021/taartversieren.html',
    trefbal: 'pietengames-2016/trefbal.html',
    burgemeestersketting: 'pieten-minigames-2020/burgemeestersketting.html',
    pakjeskamer: 'pietengames-2020/pakjeskamer.html',
    pong: 'pietengames-2016/pong.html',
    bootspel: 'pietengames-2020/bootspel.html',
    dakspel: 'pietengames-2016/dakspel.html',
    schudspel: 'pietengames-2016/schudspel.html',
    tikspel: 'pietengames-2017/tikspel.html',
    pepernotenfeest: 'pieten-minigames-2018/pepernotenfeest.html',
    pietenpetten: 'pieten-minigames-2018/pietenpetten.html',
    vangspel: 'pietengames-2017/vangspel.html',
    mallenknallen: 'pietengames-2018/mallenknallen.html',
    plaatjesbende: 'pietengames-2018/plaatjesbende.html',
    sjoelen: 'pietengames-2019/sjoelen.html',
    treinspel: 'pietengames-2019/treinspel.html',
    verlanglijstje: 'pieten-minigames-2019/verlanglijstje.html',
    vlekkenpoetsen: 'pieten-minigames-2019/vlekkenpoetsen.html',
    pietenjump: 'pietengames-2018/pietenjump.html',
    aankleden: 'pietengames-2023/aankleden.html',
    rijmen: 'pietengames-2022/rijmen.html',
    muziekband: 'pietengames-2022/muziekband.html',
    geefhetdoor: 'pieten-minigames-2022/geefhetdoor.html',
    paardjepoetsen: 'pieten-minigames-2022/paardjepoetsen.html',
    raapspel: 'pietengames-2017/raapspel.html',
    aanmeren: 'pietengames-2023/aanmeren.html'
}

let player = document.createElement("iframe");
selector = document.getElementById("selector");
overlay = document.getElementById("overlay")

function StartGame(){
    player.src = "https://cdn-sinterklaasjournaal.ntr.nl/assets/games/2023/" + games[selector.value];
    player.id = "player";
    on();
}

function on() {
    overlay.appendChild(player)
    overlay.style.display = "block";
}

function off() {
    overlay.style.display = "none";
    document.getElementById("player").remove();
}

document.onkeyup = function(e) {
    if (e.key === "Escape") {
       off()
   }
};
