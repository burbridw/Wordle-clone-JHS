const jshWords = ["able","about","above","abroad","absent","across","action","active","actor","add",
"adult","affect","afraid","africa","after","ago","agree","air","all","allow","almost","alone","along","also","among","amount",
"angel","angry","ankle","answer","ant","any","anyone","apron","area","arena","arm","army","around","arrive","asia",
"ask","asleep","atomic","attack","aunt","aurora","award","away","baby","back","bacon","bad","bake","bamboo","bang",
"bank","barber","barrel","basket","bath","beak","bean","beast","beat","beaver","became","become","bed","bee","beef",
"been","before","began","begin","behind","bell","belong","belt","bench","bend","berlin","best","better","beyond","bike",
"bird","bit","bitter","blame","bleed","blog","boat","boccia","body","boil","bomb","border","bored","boring","born",
"both","bought","bowl","boxing","brain","bread","break","breeze","bridge","bright","bring","broke","broken","brush",
"bucket","budge","build","built","bun","burger","burn","burst","bury","bush","butter","bye","cacao","cage","calf",
"call","came","camera","can","cancel","cancer","candy","cannot","canoe","car","care","carpet","carrot","carry",
"case","catch","caught","cent","center","chance","change","chat","cheap","check","cheek","cheer","cheese","chef","chess",
"chest","child","chilly","chin","chip","choice","choose","chorus","chose","chosen","church","circle","city","clay",
"clear","clerk","clever","climb","clip","clock","close","closed","closet","cloth","coast","coat","coin","cola","come",
"comfy","comic","cookie","corner","cost","cotton","couch","could","course","court","cousin","cover","crane","create",
"cross","crush","cry","cut","cymbal","dad","daily","dam","damage","dancer","dark","date","day","dead","debut","decide",
"deep","deeply","defeat","degree","demand","design","did","die","dinner","dirty","dive","does","dollar","done",
"door","draw","dress","drew","drill","drone","drop","drum","dry","dryer","due","during","dust","dutch","each","early",
"easily","east","easy","eaten","eel","effect","either","elbow","else","email","empty","end","empty","end","ending",
"enemy","energy","enough","enter","eraser","escape","europe","even","event","ever","every","exam","excuse","exit",
"expert","eyelid","facial","fact","fail","fair","fairy","fall","family","famous","fan","far","farm","fat","faucet",
"feel","feet","fell","felt","female","fence","ferret","fever","few","fight","figure","fill","final","find","finger",
"finish","first","fish","flew","flip","float","floor","flour","fluffy","flute","fly","fold","follow","foot","for",
"force","forest","forget","forgot","former","fought","found","fox","free","freely","freeze","fresh","from","front",
"full","fun","funny","future","garden","gate","gave","get","giant","give","given","glad","glass","goal","golf",
"good","goods","gosh","got","grade","gray","greece","ground","group","grow","guide","guitar","gum","gunman","habit",
"had","hair","half","hand","hang","happen","harm","harp","has","hate","have","health","hear","heard","heart",
"heater","heavy","heel","held","hello","helmet","help","her","here","hers","hey","hide","hiking","hill","him",
"his","hit","hobby","hockey","hold","hole","home","honest","hope","hopter","hour","huge","hula","human","hurry",
"hurt","idea","idol","ignore","image","indoor","inner","inside","into","invent","iran","iraq","island","issue",
"jacket","jail","jeans","job","just","keep","keeper","kept","kettle","key","kid","kill","kindly","king","knee",
"knew","knife","know","known","koala","korean","krona","lack","ladle","lady","land","large","last","lastly",
"late","later","laugh","lawyer","lay","leader","leaf","league","learn","least","leaves","leg","lend","lens",
"lent","let","level","lick","lid","lie","life","light","like","limit","line","lion","lip","listen","little",
"lives","local","lock","lodge","lonely","look","lose","lot","lotus","loud","love","loving","low","lower","luck",
"lucky","made","magic","male","man","mango","map","march","mark","mash","match","matter","may","maybe","meal","mean",
"meant","medium","meet","member","met","meter","middle","might","mind","mine","minus","minute","mirror","miss",
"model","mole","mom","moment","money","month","more","most","mouse","move","movie","moving","much","mumbai",
"museum","must","mutual","nail","nap","narrow","navel","nazis","near","nearby","neck","need","needle","net",
"next","night","nobody","nod","noise","noodle","noon","normal","north","notice","novel","now","number","obey",
"often","omelet","once","onion","online","only","onto","open","order","other","ouch","ours","out","outing","outlet",
"over","own","oyster","pack","pain","paint","palm","paper","pardon","parent","parody","parrot","part","party",
"pass","past","patch","patent","pause","paw","peace","penny","people","pepper","person","pet","phone","photo","pick",
"picnic","pie","piece","pin","pinky","pirate","plan","plane","plant","player","plug","pocket","poet","point",
"polite","pollen","pond","pool","poor","pop","power","pray","price","prince","prize","pro","proud","push","quiet",
"quilt","quit","quiz","racket","radio","rain","raise","ran","reach","ready","real","really","reason","recent",
"record","reduce","relax","relay","renew","report","rescue","rest","result","return","rifle","right","ring","rise",
"road","roar","robot","roll","roof","round","row","rowing","rub","ruby","rule","runner","safe","safety","said",
"sail","salt","same","sang","sank","sauce","sauna","save","say","scale","school","score","scowl","screen","scroll",
"search","season","secret","see","seed","seem","seen","select","sell","send","sent","serve","set","shake","shape",
"share","shawl","sheet","shelf","shin","ship","shirt","shoe","shoot","short","shot","should","shout","shovel","show",
"shower","shy","sick","side","sign","silent","silly","since","sink","sir","sit","site","size","skate","ski","skin",
"skirt","sky","sleep","sleepy","sleeve","sleigh","slept","slope","sly","smart","smell","smile","smoke","snack",
"soap","sofa","softly","soil","sold","sole","solid","solve","some","son","song","soon","sore","sorry","sound",
"south","space","speak","speech","speed","spell","spend","spent","spin","spite","splash","spoke","spot","square",
"stack","staff","stage","stain","stair","start","statue","stay","steal","steam","step","stern","stew","stick",
"still","stole","stood","stool","story","stove","subway","such","sugar","sung","super","sure","surf","sweat",
"sweaty","swiss","switch","sydney","system","tackle","tahiti","tail","take","taken","talent","talk","tall","tank",
"taste","tasty","taught","taxi","teach","tear","teeth","tell","tent","term","test","than","thank","their","theirs",
"them","then","there","these","they","thick","thigh","thin","thing","those","though","throat","throw","thumb","ticket",
"tie","tight","time","tiny","title","toast","today","toe","told","ton","too","took","tool","tooth","top","topic","touch",
"toward","towel","tower","toy","train","trash","travel","treat","trick","trip","truck","true","truly","trunk","trust",
"tug","tunnel","turkey","turn","turtle","twice","type","uncle","unique","unless","until","use","used","useful","van",
"vase","vendor","victim","view","violin","visa","voice","wait","wake","walk","walker","wall","war","warm","way",
"weak","weakly","wear","week","well","were","west","wet","what","which","while","whine","whole","whose","why","wide",
"will","win","wind","window","windy","wing","winner","wipe","wish","with","woman","won","wood","word","work","worker",
"world","worn","worry","worse","would","wow","wrap","wrist","write","writer","wrong","wrote","yard","yeah","year",
"yet","yogurt","young","yours","yummy","zero"]

const jhsVerbList = ["cut","hit","hurt","let","put","read","set","beat","beaten","become","became","come","came",
"coming","run","ran","bring","build","built","buy","bought","buying","catch","caught","feel","felt","fight","fought",
"find","found","forget","forgot","get","got","gotten","have","has","had","having","hear","heard","hold","held","keep",
"kept","leave","left","lend","lent","lose","lost","losing","make","made","making","mean","meant","pay","paid","paying",
"say","said","saying","sell","sold","send","sent","shoot","shot","sit","sat","sleep","slept","smell","smelt","spend",
"spent","stand","stood","stick","stuck","teach","taught","tell","told","think","win","won","are","was","were","been",
"being","bear","bore","born","begin","began","begun","break","broke","broken","choose","chose","chosen","dive","dove",
"dived","diving","does","did","done","doing","draw","drew","drawn","drink","drank","drunk","eat","ate","eaten","eating",
"fall","fell","fallen","fly","flew","flown","flying","freeze","froze","frozen","give","gave","given","giving","goes",
"went","gone","going","grow","grew","grown","hang","hung","hanged","hide","hid","hidden","hiding","know","knew","known",
"lie","lay","lain","lying","ride","rode","ridden","riding","see","saw","seen","seeing","shake","shook","shaken","show",
"showed","shown","sing","sang","sung","sink","sank","sunk","speak","spoke","spoken","steal","stole","stolen","swim","swam",
"swum","take","took","taken","taking","throw","threw","thrown","wake","woke","woken","waking","wear","wore","worn",
"write","wrote"]

const combine = jshWords.concat(jhsVerbList)
const fullList = new Set([...combine])
const finalArr = Array.from(fullList)

const jhsWords3 = finalArr.filter(word => word.length === 3 )
const jhsWords4 = finalArr.filter(word => word.length === 4 )
const jhsWords5 = finalArr.filter(word => word.length === 5 )
const jhsWords6 = finalArr.filter(word => word.length === 6 )

const gameTypeObj = {
    3: jhsWords3,
    4: jhsWords4,
    5: jhsWords5,
    6: jhsWords6
}

let word = ""
let randomSelect = "" 
let answerCount = 0
let round = 0
let correctGuess = 0
let gameActive = false
let inputArr = []
let answerArr = []
let dictionaryOpen = false
let gameArr = []
let gameType = 3
let random = false
let blockDictionary = false

const dictionary = document.querySelector(".dictionary")
function buildDictionary(arr) {
    dictionary.innerHTML = ""
    arr.forEach( (x) => {
        dictionary.innerHTML += `<div class="dictionary-image"><div>${x}</div></div>`
    })
}

let answerInput 
let answerBox0
let answerBox1
let answerBox2
let answerBox3
let answerBox4
let answerBox5

const answerBox = {
    0: answerBox0,
    1: answerBox1,
    2: answerBox2,
    3: answerBox3,
    4: answerBox4,
    5: answerBox5
}

function renderGame(type){
    if ( type === "randomGame" ) {
        random = true
        let getRandom = Math.floor( Math.random()*4 )
        let choiceArr = ["gs3","gs4","gs5","gs6"]
        type = choiceArr[getRandom]
    }

    const gameTypeCheck = {
        "gs3": 3,
        "gs4": 4,
        "gs5": 5,
        "gs6": 6
    }
    gameType = gameTypeCheck[type]
    answerInputs.forEach( (grid)=>{ 
        grid.innerHTML = ""
        for ( let i = 0; i < gameType; i++ ) {
            grid.innerHTML += `<div class="answer-box"></div>`
        }
    })
    answerInput = document.querySelector(".answer-active")
    answerBox0 = answerInput.children[0]
    answerBox1 = answerInput.children[1]
    answerBox2 = answerInput.children[2]
    if ( gameType > 3 ) {
        answerBox3 = answerInput.children[3]
    }
    if ( gameType > 4 ) {
        answerBox4 = answerInput.children[4]
    }
    if ( gameType > 5 ) {
        answerBox5 = answerInput.children[5]
    }
    gameArr = gameTypeObj[gameType]
    buildDictionary(gameArr)
    start(gameArr)
}

function start(arr) {
    randomSelect = Math.floor( Math.random()*arr.length )
    word = arr[randomSelect]
    console.log(word)
    answerArr = word.split("")
    answerCount = 0
    round = 0
    correctGuess = 0
    gameActive = true
    inputArr = []
    let allInputs = document.querySelectorAll(".answer-box")
    allInputs.forEach( (x) => {
        x.textContent = ""
        if (x.style.backgroundColor !== "rgb(243, 243, 231)")
        x.style.backgroundColor = "rgb(243, 243, 231)"
    })
    let allKeys = document.querySelectorAll(".key")
    allKeys.forEach( (x) => {
        if (x.style.backgroundColor !== "rgb(243, 243, 231)")
        x.style.backgroundColor = "rgb(243, 243, 231)"
    })
}

const delBtn = document.getElementById("delete")
const enterBtn = document.getElementById("enter")
const keyboardDiv = document.querySelector(".keyboard")
const messageBox = document.getElementById("message-box")
const endMessage = document.getElementById("end-message")
const endImage = document.getElementById("end-image")
const resetBtn = document.getElementById("reset-btn")
const changeBtn = document.getElementById("change-btn")
const endBox = document.querySelector(".reset-box")
const upperBox = document.querySelector(".upper-container")
const lowerBox = document.querySelector(".lower-container")
const imageBox = document.querySelector(".answer-image-container")
const dictionaryBtn = document.getElementById("dictionary-button")
const answerBoxContainer = document.querySelector(".answer-box-container")
const gameSelectWindow = document.querySelector(".game-select-window")
const gameSelectButtons = document.querySelectorAll(".game-select-button")
const answerInputs = document.querySelectorAll(".answer-input")



let allKeys = document.querySelectorAll(".key")
allKeys.forEach( (x) => {
    x.addEventListener("click",function() {
        let letter = x.textContent
        press(letter)
    })
})

window.addEventListener("keydown", (x) => {
    if (gameActive) {
    if (x.key === "Enter") {
        blockDictionary = true
        checkGuess()
    } else if (x.key === "Backspace") {
        del()
    } else {
    if ( /[a-z]/.test(x.key) && x.key.length === 1) {
        press(x.key)
    }
    }
    } else {
    if (x.key === "Enter") {
        blockDictionary = true
        resetGame()
    }
}
})
window.addEventListener("keyup", (x) => {
    if ( x.key === "Enter" ) {
        blockDictionary = false
    }
})


function press(key) {
    if (answerBox0.textContent === "") { 
    answerBox0.textContent = key
    answerCount = 1
    inputArr.push(key)
    } else if (answerBox1.textContent === "") {
        answerBox1.textContent = key
        answerCount = 2
        inputArr.push(key)
    } else if (answerBox2.textContent === "") {
        answerBox2.textContent = key
        answerCount = 3
        inputArr.push(key)
    } else if (answerBox3.textContent === "" && gameType > 3) {
        answerBox3.textContent = key
        answerCount = 4
        inputArr.push(key)
    } else if (answerBox4.textContent === "" && gameType > 4) {
        answerBox4.textContent = key
        answerCount = 5
        inputArr.push(key)
    } else if (answerBox5.textContent === "" && gameType > 5) {
        answerBox5.textContent = key
        answerCount = 6
        inputArr.push(key)
    }
}

function del() {
    if (gameActive) {
        if ( gameType === 6 ) {
            if ( answerBox5.textContent !== "") {
                answerBox5.textContent = ""
                inputArr.pop()
                answerCount = 5
            } else if ( answerBox4.textContent !== "" ) {
                answerBox4.textContent = ""
                inputArr.pop()
                answerCount = 4
            } else if ( answerBox3.textContent !== "" ) {
                answerBox3.textContent = ""
                inputArr.pop()
                answerCount = 3
            } else if (answerBox2.textContent !== "") {
                answerBox2.textContent = ""
                inputArr.pop()
                answerCount = 2
            } else if (answerBox1.textContent !== "") {
                answerBox1.textContent = ""
                inputArr.pop()
                answerCount = 1
            } else if (answerBox0.textContent !== "") {
                answerBox0.textContent = ""
                inputArr.pop()
                answerCount = 0
            }
        } else if ( gameType === 5 ) {
            if ( answerBox4.textContent !== "" ) {
                answerBox4.textContent = ""
                inputArr.pop()
                answerCount = 4
            } else if ( answerBox3.textContent !== "" ) {
                answerBox3.textContent = ""
                inputArr.pop()
                answerCount = 3
            } else if (answerBox2.textContent !== "") {
                answerBox2.textContent = ""
                inputArr.pop()
                answerCount = 2
            } else if (answerBox1.textContent !== "") {
                answerBox1.textContent = ""
                inputArr.pop()
                answerCount = 1
            } else if (answerBox0.textContent !== "") {
                answerBox0.textContent = ""
                inputArr.pop()
                answerCount = 0
            }
        } else if ( gameType === 4 ) {
            if ( answerBox3.textContent !== "" ) {
                answerBox3.textContent = ""
                inputArr.pop()
                answerCount = 3
            } else if (answerBox2.textContent !== "") {
                answerBox2.textContent = ""
                inputArr.pop()
                answerCount = 2
            } else if (answerBox1.textContent !== "") {
                answerBox1.textContent = ""
                inputArr.pop()
                answerCount = 1
            } else if (answerBox0.textContent !== "") {
                answerBox0.textContent = ""
                inputArr.pop()
                answerCount = 0
            }
        } else if (answerBox2.textContent !== "") {
            answerBox2.textContent = ""
            inputArr.pop()
            answerCount = 2
        } else if (answerBox1.textContent !== "") {
            answerBox1.textContent = ""
            inputArr.pop()
            answerCount = 1
        } else if (answerBox0.textContent !== "") {
            answerBox0.textContent = ""
            inputArr.pop()
            answerCount = 0
        }
    }
}

gameSelectButtons.forEach( (button) =>{
    button.addEventListener("click",()=>{
        let gameId = button.getAttribute("ID")
        renderGame(gameId)
        gameSelectWindow.classList.add("behind")
    })
})

delBtn.addEventListener("click", function(){
    del()
})

enterBtn.addEventListener("click",function(){
    checkGuess()
})

resetBtn.addEventListener("click",function(){
    resetGame()
})
changeBtn.addEventListener("click",()=>{
    resetGame()
    gameActive = false
    gameSelectWindow.classList.remove("behind")
})
dictionaryBtn.addEventListener("click",function(){
    if ( gameActive && !blockDictionary) {
        if (!dictionaryOpen) {
            dictionaryOpen = true
            dictionary.classList.remove("dictionary-close")
        } else {
            dictionaryOpen = false
            dictionary.classList.add("dictionary-close")
        }
    }
})

function changeGame() {
    endBox.classList.add("hide-me")
    upperBox.classList.remove("go-transparent")
    lowerBox.classList.remove("go-transparent")
    answerInput.classList.remove("answer-active")
    let currentAnswerBox = answerBoxContainer.children[0]
    currentAnswerBox.classList.add("answer-active")
    answerInput = document.querySelector(".answer-active")
    answerBox0 = answerInput.children[0]
    answerBox1 = answerInput.children[1]
    answerBox2 = answerInput.children[2]
    answerBox3 = answerInput.children[3]
    answerBox4 = answerInput.children[4]
    answerBox5 = answerInput.children[5]
}

function resetGame() {
    endBox.classList.add("hide-me")
    upperBox.classList.remove("go-transparent")
    lowerBox.classList.remove("go-transparent")
    answerInput.classList.remove("answer-active")
    let currentAnswerBox = answerBoxContainer.children[0]
    currentAnswerBox.classList.add("answer-active")
    answerInput = document.querySelector(".answer-active")
    answerBox0 = answerInput.children[0]
    answerBox1 = answerInput.children[1]
    answerBox2 = answerInput.children[2]
    answerBox3 = answerInput.children[3]
    answerBox4 = answerInput.children[4]
    let imageBoxes = document.querySelectorAll(".answer-image")
    imageBoxes.forEach( (x) => {
        x.textContent = ""
    })
    if ( !random ) {
        start(gameArr)
    } else {
        renderGame("randomGame")
    }
}


function checkGuess() {
    let thisGuess = inputArr.join("")
    
    if (gameActive) {
    if (answerCount !== gameType) {
        showMessage("Not enough letters")
    } else if ( !gameArr.includes(thisGuess) ) {
        showMessage("Word not in list")
    } else {
        greenCheck()
    }
}
}

function showMessage(message) {
    messageBox.textContent = message
    messageBox.classList.remove("hide-me")
    setTimeout( () => {
        messageBox.classList.add("hide-me")
    }, 3000)
}

function greenCheck() {
    for ( let i = 0; i < answerArr.length; i++ ) {
        if (answerArr[i] === inputArr[i]) {
            let currentAnswer = answerInput.children[i]
            currentAnswer.style.backgroundColor ="greenyellow"

            let allKeys = document.querySelectorAll(".key")
            allKeys.forEach ( (x) => {
                if (x.textContent === inputArr[i]) {
                    x.style.backgroundColor = "greenyellow"
                }
            })
            correctGuess++
            answerArr.splice( i, 1, "*")
            inputArr.splice( i, 1, "@")
            }
        }   
            if ( correctGuess === gameType) {
            playerWins()
        } else {    
            yellowCheck()
    } 
}

function yellowCheck() {
    for ( let i = 0; i < answerArr.length; i++ ) {
        if (answerArr.includes(inputArr[i]) && answerArr[i] !== inputArr[i]) {
        let currentAnswer = answerInput.children[i]
            currentAnswer.style.backgroundColor ="yellow"

            let allKeys = document.querySelectorAll(".key")
            allKeys.forEach ( (x) => {
                if (x.textContent === inputArr[i] && x.style.backgroundColor !== "greenyellow") {
                    x.style.backgroundColor = "yellow"
                }
            })
        let cutIndex = answerArr.indexOf(`${inputArr[i]}`)

        inputArr.splice( i, 1, "@")
        
        answerArr.splice( cutIndex, 1, "*")
        
        } 
    }  for ( let i = 0; i < gameType; i++ ) {
        let currentAnswer = answerInput.children[i]
        let allKeys = document.querySelectorAll(".key")
        if (currentAnswer.style.backgroundColor !== "greenyellow" && currentAnswer.style.backgroundColor !== "yellow") {
            currentAnswer.style.backgroundColor = "darkgray"
            allKeys.forEach ( (x) => {
                if (x.textContent === currentAnswer.textContent && x.style.backgroundColor !== "greenyellow" && x.style.backgroundColor !== "goldenrod") {
                    x.style.backgroundColor = "darkgray"
                }
            })
        }
    }   if ( round < 5) {
        resetRound()
    }  else if ( round === 5 && correctGuess < gameType) {
        gameOver()
    }
}

function playerWins() {
    gameActive = false
    endMessage.innerHTML = `You Win! <div>It was "${word}"</div>`
    upperBox.classList.add("go-transparent")
    lowerBox.classList.add("go-transparent")
    setTimeout( () => {
        endBox.classList.remove("hide-me")
    }, 1000)
}

function gameOver() {
    gameActive = false
    endMessage.innerHTML = `You Lose! <div>It was "${word}"</div>`
    upperBox.classList.add("go-transparent")
    lowerBox.classList.add("go-transparent")
    setTimeout( () => {
        endBox.classList.remove("hide-me")
    }, 1000)
}

function resetRound() {
    answerArr = word.split("")
    let currentAnswerBox = answerBoxContainer.children[round]
    currentAnswerBox.classList.remove("answer-active")
    round++
    let nextAnswerBox = answerBoxContainer.children[round]
    nextAnswerBox.classList.add("answer-active")
    answerInput = document.querySelector(".answer-active")
    answerBox0 = answerInput.children[0]
    answerBox1 = answerInput.children[1]
    answerBox2 = answerInput.children[2]
    answerBox3 = answerInput.children[3]
    answerBox4 = answerInput.children[4]
    answerBox5 = answerInput.children[5]
    inputArr = []
    correctGuess = 0
    answerCount = 0
}