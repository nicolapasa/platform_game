kaboom({
  global: true,
  fullscreen: false,
  scale: 1,
  debug: true,
  width: 640,
  height: 480,
  background: [0, 0, 0, ],
})

const ANIM_SPEED = 10
const SPEED = 120
const JUMP_FORCE = 500;
const POINTS_B_DIAMONDS = 50
const POINTS_B_TREASURE = 150
const POINTS_ENEMY = 150
const ENEMY_SPEED = 2
const BULLET_SPEED= 120
let musicOn=false
const VOLUME=0

const ANIM_SPEED_WATER = 5

let camScaleLevel =2 //default
let SCORE = 0
let LIFE = 3
const INITIAL_LIFE=3
let initial_pos = vec2(130, 250)
let fire = false
//let heroIsDiyng = false
//let heroIsStrike = false
//let hasKey=false

//debug.inspect = true;

loadRoot('assets/')
loadSprite("level0", 'level1_.png')
loadSprite("level1", 'level2.png')
loadSprite("level2", 'level3_.png')
loadSprite("level3", 'level4.png')
loadSprite("level4", 'level5.png')
loadSprite("level5", 'level6.png')
loadSprite("cover", 'cover.png')
loadSprite("jump", 'characters/jump.png')
loadSprite("box", '08-Box/box_idle.png')
loadSprite("box1", '08-Box/box_1.png')
loadSprite("box2", '08-Box/box_2.png')
loadSprite("box3", '08-Box/box_3.png')
loadSprite("box4", '08-Box/box_4.png')
loadSprite("spikes", 'traps/spikes.png')
loadSprite("door", 'door/door.png')

loadSprite("lift", 'oggetti/lift.png')

loadSprite("cannon", '10-Cannon/cannon.png')
loadSprite("ball", '10-Cannon/ball.png')

//sounds
loadSound("bg_music", "audio/bg.ogg");
loadSound("diamond_sfx", "audio/diamonds.wav");
loadSound("damage_sfx", "audio/damage.wav");
loadSound("hit_sfx", "audio/hit.wav");
loadSound("explosion_sfx", "audio/explosion.wav");
loadSound("fire_sfx", "audio/fire.wav");
loadSound("life_sfx", "audio/life.wav");
loadSound("break_sfx", "audio/break.wav");
loadSound("open_sfx", "audio/open.wav");


loadSpriteAtlas("oggetti/box.png", {
  "box_":
  {
    x: 0,
    y: 0,
    width: 698,
    height: 98,
    sliceX: 7,
    anims: {
      'box_idle': { from: 0, to: 0, loop: true, speed: ANIM_SPEED },
      'box_break': { from: 2, to: 6, loop: false, speed: ANIM_SPEED },
    }


  }
}
)


loadSpriteAtlas("oggetti/water.png", {
  "water_blu":
  {
    x: 0,
    y: 0,
    width: 392,
    height: 98,
    sliceX: 4,
    anims: {
      'water_blu': { from: 3, to: 0, loop: true, speed: ANIM_SPEED_WATER },
    }


  }
}
)


loadSpriteAtlas('oggetti/barrel.png', {
  "barrel":
  {
    x: 0,
    y: 0,
    width: 96,
    height: 96,

  }

})
loadSpriteAtlas("oggetti/chest.png", {
  "chest":
  {
    x: 0,
    y: 0,
    width: 882,
    height: 98,
    sliceX: 9,
    anims: {
      'chest_idle': { from: 0, to: 0, loop: true, speed: ANIM_SPEED_WATER },
      'chest_open': { from: 1, to: 8, loop: false, speed: ANIM_SPEED_WATER },
    }


  }
}
)

loadSpriteAtlas("oggetti/chest.png", {
  "key":
  {
    x: 980,
    y: 0,
    width: 1274,
    height:98,
    sliceX: 13,
    anims: {
      'key': { from: 0, to: 7, loop: true, speed: ANIM_SPEED_WATER },
    },

  }
}
)

loadSpriteAtlas("water.png", {
  "water":
  {
    x: 0,
    y: 0,
    width: 144,
    height: 24,
    sliceX: 6,
    anims: {
      'water_danger': { from: 1, to: 5, loop: true, speed: ANIM_SPEED },
    }


  }
}
)

loadSpriteAtlas("treasure.png", {
  "treasure":
  {
    x: 0,
    y: 0,
    width: 32,
    height: 64,
    sliceY: 2,
    anims: {
      'treasure_idle': { from: 0, to: 0, loop: true, speed: ANIM_SPEED },
      'treasure_open': { from: 0, to: 1, loop: false, speed: ANIM_SPEED },
    }


  }
}
)


loadSpriteAtlas("10-Cannon/shoot.png", {
  "cannon_fire":
  {
    x: 0,
    y: 0,
    width: 176,
    height: 28,
    sliceX: 4,
    anims: {
      'cannon_fire': { from: 0, to: 3, loop: false, speed: ANIM_SPEED },
    }


  }
}
)
loadSpriteAtlas("10-Cannon/boom.png", {
  "boom":
  {
    x: 0,
    y: 0,
    width: 312,
    height: 56,
    sliceX: 6,
    anims: {
      'boom': { from: 0, to: 5, loop: false, speed: ANIM_SPEED },
    }


  }
}
)
loadSpriteAtlas("enemies/pig_idle.png", {
  "enemy":
  {
    x: 0,
    y: 0,
    width: 374,
    height: 28,
    sliceX: 11,
    anims: {
      'enemy_idle': { from: 0, to: 10, loop: true, speed: ANIM_SPEED },
    }


  }
}
)
loadSpriteAtlas("enemies/pig_run.png", {
  "enemy_run":
  {
    x: 0,
    y: 0,
    width: 204,
    height: 28,
    sliceX: 6,
    anims: {
      'enemy_run': { from: 0, to: 5, loop: true, speed: ANIM_SPEED },
    }


  }
}
)
loadSpriteAtlas("enemies/pig_attack.png", {
  "enemy_fire":
  {
    x: 0,
    y: 0,
    width: 170,
    height: 28,
    sliceX: 5,
    anims: {
      'enemy_fire': { from: 0, to: 4, loop: false, speed: ANIM_SPEED },
    }


  }
}
)
loadSpriteAtlas("enemies/pig_death.png", {
  "enemy_die":
  {
    x: 0,
    y: 0,
    width: 136,
    height: 28,
    sliceX: 4,
    anims: {
      'enemy_die': { from: 0, to: 3, loop: false, speed: ANIM_SPEED },
    }


  }
}
)
loadSpriteAtlas("characters/idle.png", {
  "hero":
  {
    x: 0,
    y: 0,
    width: 858,
    height: 58,
    sliceX: 11,
    anims: {
      'idle': { from: 0, to: 10, loop: true, speed: ANIM_SPEED },
    }


  }
}
)
loadSpriteAtlas("characters/run.png", {
  "hero_run":
  {
    x: 0,
    y: 0,
    width: 624,
    height: 58,
    sliceX: 8,
    anims: {
      'run': { from: 0, to: 7, loop: true, speed: ANIM_SPEED },
    }


  }
}
)
loadSpriteAtlas("characters/attack.png", {
  "hero_attack":
  {
    x: 0,
    y: 0,
    width: 234,
    height: 58,
    sliceX: 3,
    anims: {
      'fire': { from: 0, to: 2, loop: false, speed: ANIM_SPEED },
    }


  }
}
)
loadSpriteAtlas("characters/death.png", {
  "hero_die":
  {
    x: 0,
    y: 0,
    width: 312,
    height: 58,
    sliceX: 4,
    anims: {
      'hero_a_die': { from: 0, to: 3, loop: false, speed: 5 },
    }


  }
}
)
loadSpriteAtlas("live_coins/big_heart.png", {
  "life_extra":
  {
    x: 0,
    y: 0,
    width: 144,
    height: 14,
    sliceX: 8,
    anims: {
      'idle_extra_life': { from: 0, to: 7, loop: true, speed: ANIM_SPEED },
    }


  }
}
)
loadSpriteAtlas("live_coins/big_diamond.png", {
  "big_diamond":
  {
    x: 0,
    y: 0,
    width: 180,
    height: 14,
    sliceX: 10,
    anims: {
      'idle_big_diamond': { from: 0, to: 9, loop: true, speed: ANIM_SPEED },
    }


  }
}
)
loadSpriteAtlas("door/door_open.png", {
  "door_open":
  {
    x: 0,
    y: 0,
    width: 230,
    height: 56,
    sliceX: 5,
    anims: {
      'door_open': { from: 0, to: 4, loop: false, speed: ANIM_SPEED },
    }


  }
}
)
function addMusic(){
  const music = play("bg_music", {
    volume: VOLUME,
    loop: true
});
return music
}
function addSfx(sound){

  
  play(sound);
}

function addUi(txt, p, s){

  const msg = add([
		text(txt, 8),
		pos(p),
		scale(s),
		origin("center"),
    lifespan(1),
    layer('ui'),
    z(2),
	]);
}
function addButton(txt, p, f) {

	const btn = add([
		text(txt, 8),
		pos(p),
		area({ cursor: "pointer", }),
		scale(0.5),
		origin("center"),
	]);

	btn.onClick(f);

	btn.onHover(() => {
		const t = time() * 10;
		btn.color = rgb(
			wave(0, 255, t),
			wave(0, 255, t + 2),
			wave(0, 255, t + 4),
		);
		//btn.scale = vec2(3);
	}, () => {
		//btn.scale = vec2(3);
		btn.color = rgb();
	});

}
//component traiettoria ball
function ballTarget(speedX=50, speedY=80, dir=1){
  return {
    id: "ballTarget",
    require: ["pos", "area",],
    add(){
           this.pos.y+=-25
           this.pos.x+=-25
    },
    update() {
      loop(1, () => {
        speedY--
        this.move(speedX * -dir, speedY * -dir);

      })
    },
  };


}

function spawnBall(p) {
  add([
    sprite('ball'),
    area(),
    pos(p),
    origin("center"),
    ballTarget(),
    lifespan(3),
    // strings here means a tag
    "balls",
  ]);
}

// custom component controlling enemy patrol movement
function patrol(speed = 30, dir = 1) {
  return {
    id: "patrol",
    require: ["pos", "area",],
    add() {
      this.on("collide", (obj, col) => {
        if (col.isLeft() || col.isRight()) {
          dir = -dir;
        }
      });
    },
    update() {
      this.move(speed * dir, 0);
    },
  };
}
function lift(speed = 40, dir = 1) {
  return {
    id: "lift",
    require: ["pos", "area",],
    add() {
      this.on("collide", (obj, col) => {
        if ((col.isTop()   ||  (col.isBottom()) ) ) {
          dir = -dir;
        }
      });
    },
    update() {
      this.move(0, speed * dir);
    },
  };
}
function platform(speed = 30, dir = 1) {
  return {
    id: "platform",
    require: ["pos", "area",],
    add() {
      this.on("collide", (obj, col) => {
        if ((col.isLeft()   ||  (col.isRight()) ) ) {
          dir = -dir;
        }
      });
    },
    update() {
      this.move(speed * dir,0);
    },
  };
}


function add_borders(level) {


  //borders
  switch (level) {
    case 0:
      initial_pos = vec2(130, 250)
      camScaleLevel=1.5//setting specifico del livello
     if(LIFE==0) LIFE=INITIAL_LIFE
   

      break;
    case 1:
      initial_pos = vec2(120, 340)
      camScaleLevel=1.5//setting specifico del livello
    
      add([
        pos(256, 480),
        sprite("water_blu", {anim: "water_blu",}),
        area(),
        origin("bot"),
        solid(),
        scale(0.8),
        "water",
      ]);
      break;

    case 2:
      initial_pos = vec2(350, 160)
     // initial_pos = vec2(590, 750)
      camScaleLevel=2 //setting specifico del livello
  
      break;
      case 3:
        initial_pos = vec2(94, 170)
       // initial_pos = vec2(672, 370)
        camScaleLevel=2 //setting specifico del livello
        //oggetti specifici
        add([
          pos(176, 265),
          sprite("water", {anim: "water_danger",}),
          area(),
          origin("bot"),
          solid(),
          scale(1.2),
          "water",
        ]);
        add([
          pos(400, 475),
          sprite("water", {anim: "water_danger",}),
          area(),
          origin("bot"),
          solid(),
          scale(1.2),
          "water",
        ]);
        add([
          sprite("chest", { anim: "chest_idle", }),
          area(scale(0.3)),
          pos(256, 245),
          origin("center"),
          scale(1),
          {
            value: POINTS_B_TREASURE,
          },
          "treasure",
          "items",
          z(2)
        ])
        add([
          sprite("chest", { anim: "chest_idle", }),
          area(scale(0.3)),
          pos(565, 308),
          origin("center"),
          scale(1),
          {
            value: POINTS_B_TREASURE,
          },
          "treasure",
          "items",
          z(2)
        ])
     add([
      sprite("box_", {anim: "box_idle",}),
      area({width: 28, height: 16,offset: vec2(0, 8)}),
      body(),
      pos(690, 322),
      origin("center"),
      scale(1),
      "box_",
      "items"
    ],)       
    break;
    case 4:
        initial_pos = vec2(102, 170)
        camScaleLevel=2 //setting specifico del livello
        add([
          sprite("chest", { anim: "chest_idle", }),
          area(scale(0.3)),
          pos(247, 240),
          origin("center"),
          scale(1),
          {
            value: POINTS_B_TREASURE,
          },
          "treasure",
          "items",
          z(2)
        ])
        add([
          sprite("chest", { anim: "chest_idle", }),
          area(scale(0.3)),
          pos(690, 465),
          origin("center"),
          scale(1),
          {
            value: POINTS_B_TREASURE,
          },
          "treasure",
          "items",
          z(2)
        ])
        add([
          pos(335, 645),
          sprite("water", {anim: "water_danger",}),
          area(),
          origin("bot"),
          solid(),
          scale(1.2),
          "water",
        ]);
        break;
        case 5:
          initial_pos = vec2(120, 234)
          camScaleLevel=2 //setting specifico del livello2
          add([
            pos(110, 575),
            sprite("water", {anim: "water_danger",}),
            area(),
            origin("bot"),
            solid(),
            scale(1.2),
            "water",
          ])
          add([
            pos(527, 575),
            sprite("water", {anim: "water_danger",}),
            area(),
            origin("bot"),
            solid(),
            scale(1.3),
            "water",
          ])
       
          add([
            sprite("cannon"),
            area(),
            pos(320, 228),
            solid(),
            origin("bot"),
            scale(1),
            {timer:0},
            z(1),
            'cannon',
          ]),
          add( [
            rect(50,10),
            area(),
            pos(160, 230),
            origin("bot"),
            scale(1),
            opacity(0),
            z(1),
            'trigger',
          ])
          add([
            sprite("cannon"),
            area(),
            pos(180, 384),
            solid(),
            origin("bot"),
            scale(1),
            {timer:0},
            z(1),
            'cannon',
          ])
          add( [
            rect(50,10),
            area(),
            pos(120, 384),
            origin("bot"),
            scale(1),
            opacity(0),
            z(1),
            'trigger',
          ])
          add([
            sprite("chest", { anim: "chest_idle", }),
            area(scale(0.3)),
            pos(70, 370),
            origin("center"),
            scale(1),
            {
              value: POINTS_B_TREASURE,
            },
            "treasure",
            "items",
            z(2)
          ])
          add([
            sprite("box_", { anim: "box_idle", }),
            area({width: 28, height: 16,offset: vec2(0, 8)}),
            pos(130, 210),
            origin("center"),
            scale(1),
            "box_",
            "items",
            z(2)
          ])
          break;
    default:
      break;
  }


}





scene('game', ({ level, score, life }) => {
  layers(['bg', 'obj', 'ui'], 'obj')


  const maps = [
    [
      '                M ',
      ' MF F F             ', //livwllo 1
      '                M ',
      ' M                ',
      '          *     M ',
      ' M        F F dd  ',
      '   o            M ',
      ' M             ',
      '  F M  cc    FpFM',
      '          ccb    ',
      '    M   d x B  xM    ',
      '     F F F F F F    ',


    ],
    [
      '        ',
      ' MF F F F FM       ',
      '                    ',
      ' Md        M     ',
      '         dFd        ',
      ' M xo  d           ',
      '  FF    cc              ',//livello2
      ' M  FF               ',
      '                F Fd',
      ' M       F      b    ',
      '  d    ccMM  xB bb   ',
      ' F F F     F F F Fp  ',
      '        ^           ',
      '                    ',


    ],
    [
      '                    ',
      '                   ',
      '    F F F F         ',
      '   M        M      ',
      '        d  d        ',//livello 3
      '   M   d    M       ',
      '          F         ',
      '   M        M        ',
      '    FF              ',
      '   M        F F F    ',
      '                 M ',
      '   M         bbd  ',//550 330
      '     FF     MFbFpM ',
      '   M    l           ',
      '        d  dM       ',
      '   M   d            ',
      '            M       ',
      '   M     dd F F F F F  ',
      '    FF               M',
      '   M    d  d     tdd    ',
      '       d    F F F M  F M   ',
      '   M        M           ',
      '          l       M    M',
      '   M l  d cdM     M cb ',
      '        d  d          DM', //768
      '   M    d  d          c ', //352 800
      '        d  d         cdM', //352 800
      '   M    d  d          d ', //352 800
      '      FF          C  d M', //352 800
      '   M              cck ', //352 800
      '                       M', //352 800
      '    F F F FFTF F FxF F ', //352 800



    ],
    [
      '                            ',
      ' MF F F F F F F F   F F F F F       ',
      '                  MM         ',
      ' M                         d  ',
      '        d  d    d MMF FM MFdFp',//inizio livello 4
      ' FF M MFdFFdFF  dM               ',//inizio livello
      '                         M    ',//inizio livello
      '    M M          M FM          ',//inizio livello
      '       F FxFFFB M        M ',//inizio livello
      '    M                 c  d ',//inizio livello
      '        d  d    FdF Fbb  M      ',//inizio livello
      '    M D d  d    d        l   ',//inizio livello
      '     FFxFBF  F F F F F F       ',//inizio livello
      '           M M    ',//inizio livello
    ],
    [
      '                             ',
      ' F F F F F F F F F F F F F F         ',//livello 5
      ' M                M         M',
      ' M      d d d    dM  dd      ',
      ' M   d                     PM',
      '  F MdMF F F FM  F        ccc    ',
      '     dM          MM    c    M       ',
      '    Ml     xB      F F   F F   ',
      '      F F F FF  F           M     ',
      '    M           M              ',
      '        d dd           cc   FM  ',
      '    M         B   x    B   c          ',
      '     F F F  F F F F F FM     M        ',
      '       M  bb             c       ',
      '         *bb  Byx      M  c  M   ',
      '        MMMM F F F F F    MF        ',
      '       M                      ',
      '                 F F M  xBM     ',
      '       M D       M   F F F ',
      '        F  F F F         ',
    ],
    [
      '                             ',
      ' F F F F F M                 ',//livello 6
      ' M               MF F F F F M  ',
      ' M  d d d dM     M          ',
      ' M   d           M    d d d M',
      '           MMF F                 ',
      ' Md                         M    ',
      'M F F  lFF MM    MFF F   F F      ',
      '                F           M     ',
      'M          MM ddM                ',
      '        d dd    M D    cc   FM  ',
      'M           M    *x    B              ',
      ' F F F      MFpF FF F FM  c  M       ',
      'M           b               c       ',
      '      M  c   bb      B x   c M   ',
      'FDM MF FxF F F M MF F F F F F           ',
      '                             ',
      '  M M          M M                 ',
      '   F            F             ',
      '             ',
    ],
  ]
  const levelCfg = {
    width: 32,
    height: 32,
    "M": ()=>[
      rect(32, 64),
      opacity(0),
      area({ width: 32 }),
      solid(),
      'walls',
    ],
    "F": ()=>[
      rect(64, 32),
      opacity(0),
      area({ height: 32 }),
      solid(),
      'floor',
    ],
    "b": () => [
      sprite("box_", {anim: "box_idle",}),
      area({width: 28, height: 16,offset: vec2(0, 8)}),
      body(),
      origin("center"),
      scale(1),
      "box_",
      "items"
    ],
    "B": () => [
      sprite("box"),
      area(),
      body(),
      origin("bot"),
      scale(2),
      "items"
    ],
    "^": () => [
      sprite("spikes"),
      area({ width: 40, height: 10 }),
      origin("bot"),
      solid(),
      scale(1.5),
      "spikes"
    ],
    "w": () => [
      sprite("water", {anim: "water_danger",}),
      area(),
      origin("bot"),
      solid(),
      scale(1.1),
      "water"
    ],
    "*": () => [
      sprite("life_extra", { anim: "idle_extra_life", }),
      area(),
      origin("bot"),
      scale(1.2),
      "extra_life",
      "items"
    ],
    "d": () => [
      sprite("big_diamond", { anim: "idle_big_diamond", }),
      area(),
      origin("bot"),
      scale(1.2),
      {
        value: POINTS_B_DIAMONDS,
      },
      "big_diamond",
      "items",
      z(2)
    ],
    "D": () => [
      sprite("big_diamond", { anim: "idle_big_diamond", }),
      area(),
      origin("bot"),
      scale(2),
      {
        value: POINTS_B_DIAMONDS*3,
      },
      "big_diamond",
      "items",
      z(2)
    ],
    "p": () => [
      sprite("door"),
      area(),
      origin("bot"),
      scale(1),
      "door",
    ],
    "P": () => [
      sprite("door"),//chiusa
      area(),
      origin("bot"),
      scale(1),
      {
        open:false
      },
      "door_close",
    ],
    "x": () => [
      sprite("enemy_run", { anim: 'enemy_run' }),
      area({ scale: 0.5 }),
      body(),
      origin("bot"),
      scale(1),
      patrol(),
      {
        value: POINTS_ENEMY,
        isDiyng: false,
      },
      "enemy",
      z(1),
    ],
    "o": () => [
      sprite("barrel"),
      area({width: 20, height: 20, offset: vec2(0, 10)}),
      body(),
      origin("center"),
      scale(1),
      "items"
    ],
    "l": () => [
      sprite("lift"),
      area(),
      solid(),
      origin("bot"),
      scale(1),
      lift(),
      z(1),
      'plat',
    ],
    "k": () => [
      sprite("lift"),
      area(),
      solid(),
      origin("bot"),
      scale(1),
      lift(50,-1),
      z(1),
      'plat',
    ],
    "L": () => [
      sprite("lift"),
      area(),
      solid(),
      origin("bot"),
      scale(1),
      platform(50,-1),
      z(1),
    ],
    "c": () => [
      sprite("lift"),
      area(),
      solid(),
      origin("bot"),
      scale(1),
      z(1),
    ],
    "C": () => [
      sprite("cannon"),
      area(),
      solid(),
      origin("bot"),
      scale(1),
      {timer:0},
      z(1),
      'cannon',
    ],
    "T": () => [
      rect(50,10),
      area(),
      origin("bot"),
      scale(1),
      opacity(0),
      z(1),
      'trigger',
    ],
    "t": () => [
      sprite("chest", { anim: "chest_idle", }),
      area(scale(0.3)),
      origin("center"),
      scale(1),
      body(),
      {
        value: POINTS_B_TREASURE,
      },
      "treasure",
      "items",
      z(2)
    ],
    "y": () => [
      sprite("key", { anim: "key", }),
      area(scale(0.2)),
      origin("center"),
      scale(1),
      "key",
      "items",
      z(2)
    ],
  

  }

  addLevel(maps[level], levelCfg)

gravity=4000


  add([sprite('level' + level), layer('bg')])

  if(! musicOn) {
    musicOn=true
   const  music =addMusic() 
   music.play()
  }
  add_borders(level)


  const scoreLabel = add([
    text(SCORE),
    pos(300, 450),
    layer('ui'),
    {
      value: score,
    },
    fixed(true),
    scale(0.4),
  ])
  const lifeLabel = add([
    text('life:' + INITIAL_LIFE),
    pos(380, 450),
    layer('ui'),
    {
      value: INITIAL_LIFE,
    },
    fixed(true),
    scale(0.4),
  ])


  add([text('stage: ' + parseInt(level + 1) + ' score: '), fixed(true), pos(0, 450), scale(0.4)])

  const player = add([
    sprite("hero", { anim: "idle" }),
    pos(initial_pos),
    scale(1),
    area({ width: 20, height: 20, offset: vec2(0, -10) }),
    origin('bot'),
    solid(),
    body(),
    {
      heroIsDiyng: false,
      heroIsStrike: false,
      hasKey:false,
      onEnemy: false,
    },
    layer('obj'),
    'player',
    z(1),
  ])

  function lostLife() {
   
    LIFE--;
    if (LIFE <= 0) {
      //game over
      go('game_over', { score: SCORE })
    }
    else {
      //  go('game', { level: level, score: SCORE, life: LIFE, initial_pos: initial_pos })
      player.heroIsDiyng=false
      player.pos = initial_pos
      lifeLabel.value = LIFE
      lifeLabel.text = 'life: ' + lifeLabel.value
      player.use(sprite('hero'))
      player.play("idle");


    }

  }
  function openDoor(door) {
   // music.pause();
    door.use(sprite('door_open'))
    door.play("door_open")
    addSfx('open_sfx')
    door.on("animEnd", () => {
      //todo initial pos delle mappe da un array
      if(level+1 <maps.length){
        go('game', { level: level + 1, score: scoreLabel.value, life: lifeLabel.value })
      }
      else{
        go('win', { score: scoreLabel.value })
      }
      

    })


  }



  function heroDie() {
    console.log('die '+LIFE)
   // player.heroIsDiyng=true
    player.use(sprite('hero_die'))
    player.play('hero_a_die')
   console.log(player.curAnim())
   wait(1.2, ()=>{
    lostLife()
   })
   //lostLife()
   /*player.on('animEnd', (hero_a_die)=>{
     console.log(player.curAnim())
    lostLife()
   })*/
 
 
  }

  function addLife(obj) {

    LIFE++
    addSfx('life_sfx')
    destroy(obj)
    lifeLabel.value = LIFE
    lifeLabel.text = 'life: ' + lifeLabel.value

  }

  function addCoins(obj) {
   
    addSfx('diamond_sfx')
    SCORE += obj.value
    destroy(obj)
    scoreLabel.value = SCORE
    scoreLabel.text = scoreLabel.value
  }

  //add pezzi rotti
  function brokenBox(obj) {

    let array = ['box1', 'box2', 'box3', 'box4']

    for (let index = 0; index < array.length; index++) {


      add([
        sprite(array[index]),
        pos((obj.pos.x + rand(10, 50)), (obj.pos.y - rand(10, 50))),
        scale(1),
        origin('center'),
        { speed: rand(SPEED * 0.5, SPEED * 1.5) },
        layer('obj'),
        'pieces',
        z(1),
        lifespan(1, { fade: 0.5 }),
      ])



    }

  }
  function  pickKey(obj){
    addSfx('life_sfx')
    destroy(obj)
    player.hasKey=true
  }
  action("pieces", (p) => {
    p.move(player.pos.angle(vec2(rand(-90, 90), rand(120, -56))), p.speed)
  });

  let last_move

  const dirs = {
    "left": LEFT,
    "right": RIGHT
  };
  keyDown("right", () => {
    player.flipX(false);
    player.move(SPEED, 0);
    last_move = 'right'
  });

  keyDown("left", () => {
    player.flipX(true);
    player.move(-SPEED, 0);
    last_move = 'left'
  });



  keyPress(["left", "right"], () => {

    player.use(sprite('hero_run'))
    player.play("run");


  });

  keyRelease(["left", "right", "enter", "space"], () => {
    if (
      !keyIsDown("left")
      && !keyIsDown("right")
      && !keyIsDown("enter")
     // && !keyIsDown("space")
    ) {

      
      player.use(sprite('hero'))
      player.play("idle");
      if (last_move == 'left') {
        player.flipX(true);
      }
    }
  
        player.area.offset.x= 0
      //  console.log(player.area.offset.x)
     

  });


  //jump 
  // jump with space
  keyPress("space", () => {
    // these 2 functions are provided by body() component
    if (player.grounded()) {
      player.jump(JUMP_FORCE);
    }
  });

 

  player.collides('plat', (e, p)=>{
         if( p.isBottom())  player.move(0, -25)
   })




  let onBox = false
  let boxHit
  let enemyCur
  //rompi scatola
  keyPress("enter", () => {
   //quando attacca bisogna vedere chi attacca
    //espando area in avanti
  
    player.use(sprite('hero_attack'))
    player.play("fire")
   /* player.on("animEnd", ()=>{
      console.log('end')
      player.area.offset.x= 0
      console.log(player.area.offset.x)
    })*/

    if (last_move == 'left') {
      player.flipX(true);
      player.area.offset.x= -20
    }
    else{
      player.area.offset.x= 20
    }

    //determinare distanza dal nemico 
     //attacco nemico 
     if(player.onEnemy){   
      enemyCur.use(sprite('enemy_die'))
      enemyCur.play("enemy_die");
      enemyCur.on("animEnd", ()=>{
        addSfx('hit_sfx')
        destroy(enemyCur)
        player.heroIsStrike=false
        player.onEnemy=false
      
      })

     }

    //attacco scatola
    if (onBox) {
      addSfx('break_sfx')
      
     boxHit.hidden=true
     boxHit.solid=false  
     // boxHit.play('box_break')
     /* boxHit.on("animEnd", ()=>{
        destroy(boxHit)
        player.heroIsStrike=false
      })*/
      //const particles=add([explode(boxHit.pos.x, boxHit.pos.y)])
  
      brokenBox(boxHit)
      onBox = false
      player.heroIsStrike=false
    }
  
  });
  //enemy

  
collides("enemy", "player", (e) => {
  
  if(e.pos.dist(player.pos) <= 25 && !player.heroIsDiyng){
 
      player.onEnemy=false
      player.heroIsDiyng=true
      e.use(sprite('enemy_fire'))
      e.play("enemy_fire");
      e.on('animEnd', ()=>{
        e.use(sprite('enemy_run'))
        e.play('enemy_run')
      })
      addSfx('damage_sfx')
      heroDie()
    

  }else {
   
      player.heroIsStrike =true 
      player.onEnemy=true
      enemyCur=e    
    
  }
   

     

/*
    }
    else {
      player.use(sprite('hero_attack'))
      player.play("fire");
      player.heroIsStrike=true
      e.use(sprite('enemy_die'))
      e.play("enemy_die");
      e.on("animEnd", ()=>{
        addSfx('hit_sfx')
        destroy(e)
        player.heroIsStrike=false
      })

    }*/
  })
  player.collides("box_", (b) => {
    onBox = true
    boxHit = b
  });

 

 player.collides("spikes", (s) => {

  if(!player.heroIsDiyng){
    addSfx('damage_sfx')
    heroDie()
  }


  });
collides("water", "enemy", (w, e) => {

    if(!e.IsDiyng)  {
      e.isDiyng=true
      addSfx('damage_sfx')
      e.use(sprite('enemy_die'))
      e.play("enemy_die");
      e.on("animEnd", ()=>{
        destroy(e)
      })
      
    } 


  });
  player.collides("water", (s) => {


    if(!player.heroIsDiyng)  {
      addSfx('damage_sfx')
      heroDie()
    } 


  });

  player.collides("extra_life", (s) => {
    
    addLife(s)

  });
  player.collides("door", (d) => {

    openDoor(d)

  });
  player.collides("door_close", (d) => {

   if(player.hasKey){
    openDoor(d)
   }
   else{
     addUi('You need the key!', d.pos, 0.2)
   }
   

  });
  player.collides("key", (b) => {

    pickKey(b)

  });
  player.collides("big_diamond", (b) => {

    addCoins(b)

  });
  player.collides("treasure", (b) => {
    
    b.play('chest_open')
    b.on("animEnd", ()=>{
      addCoins(b)
    })
 

  });
//todo fare area trigger

         //trigger
         player.collides('trigger', ()=>{
               //shoot
           every('cannon', (s)=>{
            s.use(sprite('cannon_fire'))
            s.play('cannon_fire')
            addSfx('fire_sfx')
            s.on("animEnd", ()=>{
                  spawnBall(s.pos)
              }) 
           })
  })
  player.collides("balls", (b) => {
    b.use(sprite('boom'))
    b.play('boom')
    addSfx('explosion_sfx')
    b.on("animEnd", ()=>{
      b.destroy()
    heroDie()
     }) 
    

  });
//todo config
  camScale(camScaleLevel)
  // camera follows player
  player.action(() => {
 
    camPos(player.pos);
  });

})


//scena game over
scene('menu', () => {

  //add([text('The Iron Hammer', 8), scale(0.8), origin('center'), pos(width() / 2, height() / 2)])
  add([sprite('cover', 8), scale(0.8), origin('center'), pos(width() / 2, height() / 2)])
  addButton("New Game", (width() / 2, height() / 2+75), () =>  go('game', { level: 0, score: SCORE, life: INITIAL_LIFE}));
  add([text('by Nicola Pasa', 8), scale(0.2), origin('center'), pos(width() / 2, height() / 2+200)])

})

scene('game_over', ({ score }) => {
//  music.pause();
  add([text('Game Over', 8), scale(0.8), origin('center'), pos(center().x, center().y-75)])
  add([text('Score :' + SCORE, 8),scale(0.8),  origin('center'), pos(center().x, center().y)])
  addButton("Try again", (center().x, (center().y+100)), () =>  go('game', { level: 0, score: SCORE, life: INITIAL_LIFE}));

})
scene('win', ({ score }) => {
 // music.pause();
  add([text('You Win!', 8), scale(0.8), origin('center'), pos(center().x, center().y-75)])
  add([text('Score :' + SCORE, 8),scale(0.8),  origin('center'), pos(center().x, center().y)])
  addButton("Restart Game", (center().x, (center().y+100)), () =>  go('game', { level: 0, score: SCORE, life: INITIAL_LIFE}));

})

//go('game_over', (0))
go('menu')
//go('game', { level: 0, score: SCORE, life: LIFE})
//go('game', { level: 1, score: SCORE, life: LIFE })
//go('game', { level: 2, score: SCORE, life: LIFE })
//go('game', { level: 3, score: SCORE, life: LIFE })
//go('game', { level: 4, score: SCORE, life: LIFE })
//go('game', { level: 5, score: SCORE, life: LIFE })


//testare destroy oggetto in mappa come oggetto singolo 
//https://github.com/replit/kaboom/blob/master/src/kaboom.ts#L1562

//to deploy zip files only

//

//
//features   

//refactor dei livelli come l'ultimo e posizionare meglio oggetti FATTO
  //refactor del player usare isDiyng come componente
  /*

  bug sistemare gestione morte e attacco 
  */
 
//  fare lore  
//  ascensori e piattaforme che si muovono - risolto basta applicare un movimento con velocità inferiore a quella del lift
//altri nemici 
// cannone che spara FATTO @todo ottimizzare trigger che punta a specifico cannone
//  oggetti chiave FATTO fare messaggio FATTO
//tesori  FATTO
//fare acque insidiose FATTO
//audio FATTO

//usare sprites da treasure pirate per nuove features
//fare schermata del gioco FATTO


//sostituire treasure con chest -FIXARE
//provare animazione box nuova 
//fare nuovi livelli sommersi e livelli con sfondo di montagne e cieli almeno 10 livelli
//boss finale


/*
add([
  //components...
  {
    collided: false,
  }
])

collides("obj1", "obj2", (obj1) => {
  if(obj1.collided) return;
})

// only do collision checking when a block is close to player for performance
action("block", (b) => {
    b.solid = b.pos.dist(player.pos) <= 64;
});

// enemy throwing feces at player
const projectile = add([
    sprite("feces"),
    pos(player.pos),
    area(),
    move(player.pos.angle(enemy.pos), 1200),
]);
cleanup(3),
// move every "tree" 120 pixels per second to the left, destroy it when it leaves screen
// there'll be nothing to run if there's no "tree" obj in the scene
action("tree", (tree) => {
    tree.move(-120, 0);
    if (tree.pos.x < 0) {
        destroy(tree);
    }
});

function spawnBullet(p) {
		add([
			rect(12, 48),
			area(),
			pos(p),
			origin("center"),
			color(127, 127, 255),
			outline(4),
			move(UP, BULLET_SPEED),
			cleanup(),
			// strings here means a tag
			"bullet",
		]);
	}
*/