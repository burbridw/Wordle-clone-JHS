const jshWords = ["able","about","above","abroad","absent","across","action","active","actpr","add",
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