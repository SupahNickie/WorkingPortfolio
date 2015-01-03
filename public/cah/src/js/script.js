var stablePlayerBlacks = [["dummy_index"], [], [], [], [], [], [], [], []]
var stablePlayerNames = ["dummy_index"]
var stablePlayerScores = [0, 0, 0, 0, 0, 0, 0, 0, 0]
var stableWhiteCards = [
  "How did I lose my virginity?",
  "Why can't I sleep at night?",
  "What's that smell?",
  "I got 99 problems but _________ ain't one.",
  "Maybe she's born with it. Maybe it's _________.",
  "What's the next Happy Meal toy?",
  "Here is the church, here is the steeple, open the doors, and there is _________.",
  "It's a pity that kids these days are all getting involved with _________.",
  "Today on Maury: \"Help! My son is _________!\"",
  "Alternative medicine is now embracing the curative powers of _________.",
  "What's that sound?",
  "What ended my last relationship?",
  "MTV's new reality show features eight washed-up celebrities living with _________.",
  "I drink to forget _________.",
  "I'm sorry, Professor, but I couldn't complete my homework because of _________.",
  "What is Batman's guilty pleasure?",
  "This is the way the world ends, not with a bang but with _________.",
  "What's a girl's best friend?",
  "TSA guidelines now prohibit _________ on airplanes.",
  "_________. That's how I want to die.",
  "In the new Disney Channel original movie, Hannah Montana struggles with _________ for the first time.",
  "I get by with a little help from _________.",
  "Dear Abby, I'm having some trouble with _________ and would like your advice.",
  "Instead of coal, Santa now gives the bad children _________.",
  "What's the most emo?",
  "In 1,000 years, when paper money is a distant memory, how will we pay for goods and services?",
  "A romantic candlelit dinner would be incomplete without _________.",
  "_________. Betcha can't have just one!",
  "White people like _________.",
  "_________. High five, bro.",
  "Next from JK Rowling: Harry Potter and the Chamber of _________.",
  "Introducing Xtreme Baseball! It's like baseball, but with _________!",
  "War! What is it good for?",
  "During sex, I like to think about _________.",
  "What are my parents hiding from me?",
  "What will always get you laid?",
  "In LA County Jail, word is you can trade 200 cigarettes for _________.",
  "What did I bring back from Mexico?",
  "What don't you want to find in your Kung Pao chicken?",
  "What will I bring back in time to convince people that I am a powerful wizard?",
  "How am I maintaining my relationship status?",
  "_________. It's a trap!",
  "Coming to Broadway this season, _________: The Musical.",
  "While the US raced the Soviet Union to the moon, the Mexican government funneled millions of pesos into research on _________.",
  "After the earthquake, Sean Penn brought _________ to the people of Haiti.",
  "Next on ESPN2, the World Series of _________.",
  "But before I kill you, Mr. Bond, I must show you _________.",
  "What gives me uncontrollable gas?",
  "The new Chevy Tahoe. With the power and space to take _________ everywhere you go.",
  "The class field trip was completely ruined by _________.",
  "When Pharaoh remained unmoved, Moses called down a plague of _________.",
  "What's my secret power?",
  "What's there a ton of in Heaven?",
  "What would grandma find disturbing, yet oddly charming?",
  "What did the US airdrop to the children of Afghanistan?",
  "What helps Obama unwind?",
  "What did Vin Diesel eat for dinner?",
  "_________: good to the last drop.",
  "Why am I sticky?",
  "What gets better with age?",
  "_________: kid-tested, mother-approved.",
  "Daddy, why is Mommy crying?",
  "What's Teach for America using to inspire inner city students to succeed?",
  "A recent lab study shows that undergrads have 50% less sex after being exposed to _________.",
  "Life for American Indians was forever changed when the White Man introduced them to _________.",
  "I do not know with what weapons World War III will be fought, but World War IV will be fought with _________.",
  "Why do I hurt all over?",
  "What am I giving up for Lent?",
  "What's George W. Bush thinking about right now?",
  "The Smithsonian Museum of Natural History has just opened an interactive exhibit on _________.",
  "When I am President of the United States, I will create the Department of _________.",
  "When I am a billionaire, I shall erect a 50-foot statue to commemorate _________.",
  "What's my anti-drug?",
  "What never fails to liven up the party?",
  "What's the new fad diet?",
  "Fun tip! When your man asks you to go down on him, try surprising him with _________ instead."
]
var stableBlackCards = [
  "Being on fire.",
  "Racism",
  "Old-people smell.",
  "A micropenis.",
  "Women in yogurt commercials.",
  "Classist undertones.",
  "Not giving a shit about the Third World",
  "Inserting a mason jar into my anus.",
  "Court-ordered rehab.",
  "A windmill full of corpses.",
  "The gays.",
  "An oversized lollipop.",
  "African children.",
  "An asymmetric boob job.",
  "Bingeing and purging.",
  "The hardworking Mexican.",
  "An Oedipus complex.",
  "A tiny horse.",
  "Boogers.",
  "Penis envy.",
  "Barack Obama.",
  "My humps.",
  "The Tempur-Pedic Swedish Sleep System.",
  "Scientology.",
  "Dry heaving.",
  "Skeletor.",
  "Darth Vader.",
  "Figgy pudding.",
  "Advice from a wise, old black man.",
  "Five Dollar Footlongs.",
  "Elderly Japanese men.",
  "Free samples.",
  "Estrogen.",
  "Sexual tension.",
  "Famine.",
  "A stray pube.",
  "Men.",
  "Heartwarming orphans.",
  "Chunks of dead hitchhiker.",
  "A bag of magic beans.",
  "Repression.",
  "Prancing.",
  "My relationship status.",
  "Overcompensation.",
  "Peeing a little bit.",
  "Pooping back and forth. Forever.",
  "A ball of earwax, semen, and toenail clippings.",
  "Testicular torsion.",
  "The Devil himself.",
  "The World of Warcraft.",
  "Dick Cheney.",
  "MechaHitler.",
  "Being fabulous.",
  "Pictures of boobs.",
  "A gentle caress of the inner thigh.",
  "The Amish.",
  "The rhythms of Africa.",
  "Lance Armstrong's missing testicle.",
  "The Pope.",
  "Flying sex snakes.",
  "Sarah Palin.",
  "Feeing Rosie O'Donnell.",
  "Sexy pillow fights.",
  "Invading Poland.",
  "Cybernetic enhancements.",
  "Civilian casualties.",
  "Jobs.",
  "The female orgasm.",
  "Bitches.",
  "The Boy Scouts of America.",
  "Auschwitz.",
  "Finger painting.",
  "The Care Bear Stare.",
  "The Jews.",
  "Being marginalized.",
  "The Blood of Christ.",
  "Dead parents.",
  "The art of seduction.",
  "Dying of dysentery.",
  "Mr. Clean, right behind you.",
  "Magnets.",
  "Jewish fraternities.",
  "Hot Pockets.",
  "Natalie Portman.",
  "Agriculture.",
  "Judge Judy.",
  "Surprise sex.",
  "The homosexual agenda.",
  "Robert Downey, Jr.",
  "The Trail of Tears.",
  "An M. Night Shyamalan plot twist.",
  "Funky fresh rhymes.",
  "The light of a billion suns.",
  "Amputees.",
  "Throwing a virgin into a volcano.",
  "Italians.",
  "Explosions.",
  "A good sniff.",
  "Destroying the evidence.",
  "Children on leashes.",
  "Catapults.",
  "One trillion dollars.",
  "Friends with benefits.",
  "Dying.",
  "Silence.",
  "Growing a pair.",
  "YOU MUST CONSTRUCT ADDITIONAL PYLONS.",
  "Justin Bieber.",
  "The Holy Bible.",
  "Balls.",
  "Praying the gay away.",
  "Teenage pregnancy.",
  "German dungeon porn.",
  "The invisible hand.",
  "My inner demons.",
  "Powerful thighs.",
  "Getting naked and watching Nickelodeon.",
  "Crippling debt.",
  "Kamikaze pilots.",
  "Teaching a robot to love.",
  "Police brutality.",
  "Horse meat.",
  "All-you-can-eat-shrimp for $4.99.",
  "Heteronormativity.",
  "Michael Jackson.",
  "A really cool hat.",
  "Copping a feel.",
  "Crystal meth.",
  "Shapeshifters.",
  "Fingering.",
  "A disappointing birthday party.",
  "The Patriarchy.",
  "My soul.",
  "A sausage festival.",
  "The chronic.",
  "Eugenics.",
  "Synergistic management solutions.",
  "Robocop.",
  "Serfdom.",
  "Stephen Hawking talking dirty.",
  "A man on the brink of orgasm.",
  "Fiery poops.",
  "Public ridicule.",
  "White-man scalps.",
  "The morbidly obese.",
  "Object permanence.",
  "Go-gurt.",
  "Lockjaw.",
  "Joe Biden.",
  "Bioengineered assault turtles with acid breath.",
  "Wet dreams.",
  "Hip hop jewels.",
  "Firing a rifle into the air while balls deep in a squealing hog.",
  "Panda sex.",
  "Necrophilia.",
  "Grave robbing.",
  "A bleached asshole.",
  "Muhammad (Praise Be Unto Him).",
  "Multiple stab wounds.",
  "Daniel Radcliffe's delicious asshole.",
  "A monkey smoking a cigar.",
  "Smegma.",
  "A live studio audience.",
  "Making a pouty face.",
  "The violation of our most basic human rights.",
  "Unfathomable stupidity.",
  "Sunshine and rainbows.",
  "Whipping it out.",
  "The token minority.",
  "The terrorists.",
  "The Three-Fifths compromise.",
  "A snapping turtle biting the tip of your penis.",
  "Vehicular manslaughter.",
  "The Great Depression.",
  "Emotions.",
  "Getting so angry that you pop a boner.",
  "Same-sex ice dancing.",
  "A M-16 assault rifle.",
  "Man meat.",
  "Incest.",
  "A foul mouth.",
  "Flightless birds.",
  "Doing the right thing.",
  "When you fart and a little shit comes out.",
  "Frolicking.",
  "Being a dick to children.",
  "Poopy diapers.",
  "Seeing grandma naked.",
  "Raptor attacks.",
  "Swooping.",
  "Concealing a boner.",
  "Full frontal nudity.",
  "Vigorous jazz hands.",
  "Nipple blades.",
  "A bitch slap.",
  "Michelle Obama's arms.",
  "Mouth herpes.",
  "A robust mongoloid.",
  "Mutually assured destruction.",
  "The Rapture.",
  "Road head.",
  "Stalin.",
  "Lactation.",
  "Hurricane Katrina.",
  "The true meaning of Christmas.",
  "Self loathing.",
  "A brain tumor.",
  "Dead babies.",
  "New Age music.",
  "A thermonuclear detonation.",
  "Geese.",
  "Kanye West.",
  "God.",
  "A spastic nerd.",
  "Harry Potter erotica.",
  "Kids with ass cancer.",
  "Lumberjack fantasies.",
  "The American Dream.",
  "Puberty.",
  "Sweet, sweet vengeance.",
  "Winking at old people.",
  "The wonders of the Orient.",
  "Oompa-Loompas.",
  "Authentic Mexican cuisine.",
  "Preteens.",
  "The Little Engine That Could.",
  "A Fleshlight.",
  "Erectile dysfunction.",
  "Having anuses for eyes.",
  "Rush Limbaugh's soft, shitty body.",
  "Saxophone solos.",
  "Landmines.",
  "Running out of semen.",
  "Me time.",
  "Nickelback.",
  "Vigilante justice.",
  "The South.",
  "Opposable thumbs.",
  "Ghosts.",
  "Alcoholism.",
  "Poorly timed Holocaust jokes.",
  "Inappropriate yodeling.",
  "Battlefield amputations.",
  "Exactly what you'd expect.",
  "A time travel paradox.",
  "AXE body spray.",
  "The pirate's life.",
  "Saying \"I love you\".",
  "A sassy black woman.",
  "Being a motherfucking sorceror.",
  "A mopey zoo lion.",
  "A murder most foul.",
  "A falcon with a cap on its head.",
  "Farting and walking away.",
  "A mating display.",
  "The Chinese gymnastics team.",
  "Friction.",
  "Asians who aren't good at math.",
  "Fear itself.",
  "A can of whoopass.",
  "Yeast.",
  "Lunchables.",
  "Licking things to claim them as your own.",
  "Vikings.",
  "The Koolaid Man.",
  "Hot cheese.",
  "Nicolas Cage.",
  "A defective condom.",
  "The inevitable heat death of the universe.",
  "Republicans.",
  "William Shatner.",
  "Tentacle porn.",
  "Sperm whales.",
  "Lady Gaga.",
  "The wrath of Vladimir Putin.",
  "Gloryholes.",
  "Daddy issues.",
  "A mime having a stroke.",
  "White people.",
  "A lifetime of sadness.",
  "Tasteful sideboob.",
  "A sea of troubles.",
  "Nazis.",
  "A cooler full of organs.",
  "Giving 110%.",
  "Doin' it in the butt.",
  "John Wilkes Booth.",
  "Holding down a child and farting all over him.",
  "A homoerotic volleyball montage.",
  "Puppies.",
  "Natural male enhancement.",
  "Brown people.",
  "Dropping a chandelier on your enemies and riding the rope up.",
  "Soup that is too hot.",
  "Sex with Patrick Stewart.",
  "Hormone injections.",
  "Pulling out.",
  "The Big Bang.",
  "Switching to Geico.",
  "Giving birth to the Antichrist.",
  "Dark and mysterious forces beyond our control.",
  "Christopher Walken.",
  "Count Chocula.",
  "The Hamburglar.",
  "Not reciprocating oral sex.",
  "Aaron Burr.",
  "Hot people.",
  "Foreskin.",
  "Assless chaps.",
  "The miracle of childbirth.",
  "Waiting 'til marriage.",
  "Two midgets shitting in a bucket.",
  "Adderall.",
  "A sad handjob.",
  "Cheating in the Special Olympics.",
  "The glass ceiling.",
  "The Hustle.",
  "Miley Cyrus at 55.",
  "Our first chimpanzee president.",
  "Breaking out into song and dance.",
  "A SuperSoaker full of cat pee.",
  "The Underground Railroad.",
  "Home video of Oprah sobbing into a Lean Cuisine.",
  "The Reverend Dr. Martin Luther King, Jr.",
  "Extremely tight pants.",
  "Third base.",
  "Waking up half-naked in a Denny's parking lot.",
  "The cool, refreshing taste of Pepsi.",
  "White privilege.",
  "Hope.",
  "Taking off your shirt.",
  "Smallpox blankets.",
  "Ethnic cleansing.",
  "Queefing.",
  "Getting really high.",
  "Natural selection.",
  "A gassy antelope.",
  "My sex life.",
  "Arnold Schwarzenegger.",
  "Pretending to care.",
  "Ronald Reagan.",
  "Toni Morrison's vagina.",
  "An ugly face.",
  "My black ass.",
  "Batman.",
  "Homeless people.",
  "Racially-biased SAT questions.",
  "Centaurs.",
  "A salty surprise.",
  "72 virgins.",
  "Embyonic stem cells.",
  "Pixelated bukkake.",
  "Seppuku.",
  "An icepick lobotomy.",
  "Genuine human connection.",
  "Menstrual rage.",
  "Sexual peeing.",
  "An endless stream of diarrhea.",
  "Shaquille O'Neal's acting career.",
  "Horrifying laser hair removal accidents.",
  "Autocannibalism.",
  "A fetus.",
  "Riding off into the sunset.",
  "Goblins.",
  "Eating the last known bison.",
  "Shiny objects.",
  "Being rich.",
  "A Bop It.",
  "Leprosy.",
  "World peace.",
  "Dick fingers.",
  "Chainsaws for hands.",
  "The Make-A-Wish Foundation.",
  "Penis breath.",
  "Laying an egg.",
  "The folly of man.",
  "My genitals.",
  "Grandma.",
  "Flesh-eating bacteria.",
  "Poor people.",
  "50,000 volts straight to the nipples.",
  "Active listening.",
  "The Ubermensch.",
  "Poor life choices.",
  "Altar boys.",
  "My vagina.",
  "Pac-Man uncontrollably guzzling cum.",
  "Sniffing glue.",
  "The placenta.",
  "The profoundly handicapped.",
  "Spontaneous human combustion.",
  "The KKK.",
  "The clitoris.",
  "Not wearing pants.",
  "Consensual sex.",
  "Black people.",
  "A bucket of fish heads.",
  "Hospice care.",
  "Passive-aggressive Post-It notes.",
  "Fancy Feast.",
  "The heart of a child.",
  "Crumbs all over the God damn carpet.",
  "Your weird brother.",
  "Being fat and stupid.",
  "Getting married, having a few kids, buying some stuff, retiring to Florida, and dying.",
  "Sean Penn.",
  "Sean Connery.",
  "Expecting a burp and vomiting on the floor.",
  "Wifely duties.",
  "A pyramid of severed heads.",
  "Genghis Kahn.",
  "Historically black colleges.",
  "Crucifixion.",
  "A subscription to Men's Fitness.",
  "The milk man.",
  "Friendly fire.",
  "Women's suffrage.",
  "AIDS.",
  "Former president George W. Bush.",
  "8 ounces of sweet Mexican black tar heroin.",
  "Half-assed foreplay.",
  "Edible underpants.",
  "My collection of high-tech sex toys.",
  "The Force.",
  "Bees?",
  "Some God damn peace and quiet.",
  "Jerking off into a pool of children's tears.",
  "A micropig wearing a tiny raincoat and booties.",
  "Three dicks at the same time.",
  "Masturbation.",
  "Tom Cruise.",
  "A balanced breakfast.",
  "Anal beads.",
  "Drinking alone.",
  "Cards Against Humanity.",
  "Coat hanger abortions.",
  "Used panties.",
  "Cuddling.",
  "Wiping her butt.",
  "Domino's Oreo Dessert Pizza.",
  "A zesty breakfast burrito.",
  "Morgan Freeman's voice.",
  "A middle-aged man on roller skates.",
  "Gandhi.",
  "The penny whistle solo from \"My Heart Will Go On\".",
  "Spectacular abs.",
  "Keanu Reeves.",
  "Child beauty pageants.",
  "Child abuse.",
  "Bill Nye the Science Guy.",
  "Science.",
  "A tribe of warrior women.",
  "Viagra.",
  "Her Majesty, Queen Elizabeth II.",
  "The entire Mormon Tabernacle Choir.",
  "The year's mass shooting.",
  "Take-backsies.",
  "An erection that lasts longer than four hours."
]

var playerBlacks = stablePlayerBlacks.slice()
var playerNames = stablePlayerNames.slice()
var playerScores = stablePlayerScores.slice()
var whiteCards = []
var blackCards = []
var players = 0
var guessingPlayer = 1
var currentPlayer = 2
var gameArray = []

var game = {
  assignPlayerNames: function() {
    counter = 1
    while (counter <= players) {
      name = prompt("What is player " + counter + "'s name?")
      playerNames.push(name)
      counter++
    }
  },
  drawBlackCard: function() {
    card = blackCards.splice(Math.floor(Math.random() * blackCards.length), 1)[0]
    return card
  },
  drawWhiteCard: function() {
    card = whiteCards.splice(Math.floor(Math.random() * whiteCards.length), 1)[0]
    return card
  },
  cycleToNextPlayer: function() {
    if (guessingPlayer == (players - 1)) {
      guessingPlayer++
      currentPlayer = 1
    } else if (guessingPlayer < players) {
      guessingPlayer++
      currentPlayer = (guessingPlayer + 1)
    } else {
      guessingPlayer = 1
      currentPlayer = 2
    }
    game.updatePlayerName()
    gameArray = []
    game.updateWhiteCard()
    game.updateScores()
  },
  initialDeal: function() {
    whiteCards = stableWhiteCards.slice()
    preNames = stableBlackCards.slice()
    blackCards = preNames.concat(playerNames.slice(1, players + 1))
    shuffle(whiteCards)
    shuffle(whiteCards)
    shuffle(whiteCards)
    shuffle(blackCards)
    shuffle(blackCards)
    shuffle(blackCards)
    playerCounter = 1
    while (playerCounter <= players) {
      drawCounter = 0
      while (drawCounter < 7) {
        playerBlacks[playerCounter].push(game.drawBlackCard())
        drawCounter++
      }
      playerCounter++
    }
    game.updatePlayerName()
  },
  updateScores: function() {
    string = ""
    for (i in playerNames) {
      if (i > 0) {
        string = (string + playerNames[i] + ": " + playerScores[i] + "    ")
      }
    }
    $("#score").text(string)
  },
  updatePlayerName: function() {
    $("#player_name").text("It's " + playerNames[guessingPlayer] + "'s turn to pick the winning card.")
    $("#pass_around").css("visibility", "visible")
    $("#pass_around").text("Show " + playerNames[currentPlayer] + "'s cards")
  },
  updateWhiteCard: function() {
    $("#white_card").text(game.drawWhiteCard())
  },
  restart: function() {
    location.reload()
  }
};

function shuffle(o){
  for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
};

$(document).ready(function () {
  $(".player_select").on("click", function() {
    $(".player_select").css("visibility", "hidden")
    players = parseInt($(this).data("players"))
    game.assignPlayerNames()
    game.initialDeal()
    $("#white_card").css("visibility", "visible")
    $("#score").css("visibility", "visible")
    game.updateWhiteCard()
  }),
  $("#pass_around").on("click", function() {
    $(this).css("visibility", "hidden")
    $(".card_select").css("visibility", "visible")
    if (currentPlayer == guessingPlayer) {
      card_counter = 0
      while (card_counter < gameArray.length) {
        $("#cs" + (card_counter + 1)).text(gameArray[card_counter][1])
        card_counter++
      }
      while ((card_counter >= gameArray.length) && (card_counter < 7)) {
        $("#cs" + (card_counter + 1)).css("visibility", "hidden")
        card_counter++
      }
    } else {
      card_counter = 0
      while (card_counter < 7) {
        $("#cs" + (card_counter + 1)).text(playerBlacks[currentPlayer][card_counter])
        card_counter++
      }
    }
  }),
  $("#player_cards div").on("click", function() {
      $("#player_cards div").css("visibility", "hidden")
    if (currentPlayer == guessingPlayer) {
      playerScores[gameArray[$(this).data("position")][0]]++
      $("#round_winner").text(playerNames[gameArray[$(this).data("position")][0]] + "'s card was chosen last round.")
      $("#round_winner").css("visibility", "visible")
      if (Math.max.apply(Math, playerScores) == 10) {
        alert(playerNames[gameArray[$(this).data("position")][0]] + " has won!")
      }
      game.cycleToNextPlayer()
    } else {
      gameArray.push([currentPlayer, playerBlacks[currentPlayer][$(this).data("position")]])
      shuffle(gameArray)
      playerBlacks[currentPlayer].splice($(this).data("position"), 1)
      playerBlacks[currentPlayer].push(game.drawBlackCard())
      if (currentPlayer == players) {
        currentPlayer = 1
      } else {
        currentPlayer++
      }
      game.updatePlayerName()
      if (currentPlayer == guessingPlayer) {
        $("#pass_around").text("Decide the winner!")
      }
      $("#pass_around").css("visibility", "visible")
    }
  }),
  $("#restart").on("click", function() {
    game.restart()
  })
});
