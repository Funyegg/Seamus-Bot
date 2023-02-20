//Basic bot setup
const discord = require("discord.js");
const bot = new discord.Client({intents:[3276799]}); //ALL intents.
const prefix = "k!";
const admins = ["array of admins"];
const owner = "your user id";
let range = 50;
let min = 10;
let seed = Math.floor(Math.random()*range)+min;
//The funy commands
const commands = {
test:(message, param)=>{
    message.channel.send("Bot works.");
},
status:(message, param, auth)=>{
    if(!auth) return;
    message.channel.send("Setting status to: "+param);
    bot.user.setActivity(param);
},
rng:(message, param, auth)=>{
    if(!auth) return;
    var numbers = param.split(" ");
        if(numbers.length!=2){
            message.channel.send("Invalid parameters count");
            return;
        }
        numbers.forEach((number)=>{
            if(isNaN(parseInt(number))){
                message.channel.send("Invalid parameter");
                return;
            }
        })
        range = parseInt(numbers[0]);
        min = parseInt(numbers[1]);
        message.channel.send("New Range: "+range+"\nNew minimum: "+min)
},
kill:(message, param, auth)=>{
    if(!auth) return;
    process.exit();
},
generate: (message, param)=>{
    if(isNaN(parseInt(param))){
        message.channel.send("Invalid number");
        return;
    }
    var msg = generate(parseInt(param));
    message.channel.send(msg);
}
}

bot.login("bot token");
bot.on("ready", ()=>{
    bot.user.setActivity("with little boy's noodles");
})

//Message generator. Credits to ziggy for coding this
			var out = "";
			var s_core_sentence = [
			"{SUB} is a {INS}.",
			"{GUD} is {ADG}.",
			"Why is {SUB} such a [ADJ]{INS}?",
			"Stop being so {ADJ}!",
			"Stop being so {ADJ} you [ADJ]{INS}!",
			"You [ADJ]{INS}!",
			"{SUB} is worse than {SUB}[-EXP].",
			"{GUD} is better than {SUB}[-EXP].",
			"{SUB} {VRB} {GUD}[-EXP].",
			"{GEN} only {UNG} you [ADJ]{INS}!!!",
			"{SUB} moment XD!!!!!",
			"{SUB} be like: ''Me hate {GUD}'' Lol!!!!!!",
			"{SUB} when he sees [ADG]{GUD}! What a poopface XD!!!!",
			"Age is just a number.",
			"I will make a VideoEditBot video out of you YOU {INS} {INS}!",
			"You will never recover from my latest MSAgent skit, {SUB} you {INS}!",
			"What {SUB} the [ADJ]{INS} doesn't realize is that he BIG BAD LOL!",
			"BANNED!",
			"Banned for being a [ADJ]{INS}!",
			"I now identify as {IDT}!",
			"YOU ARE BANNED I QUIT!!!!!!",
			"{PLC} is full of [ADJ]{INS}s.",
			"I declare warrrr on {PLC}.",
			"GUYS RAID {PLC}!!!!",
			"Please get {GUD} to 999 subscribers to own {SUB}.",
			"{SUB} when I say that {GUD} is good LOOOOL!!!",
			"That's it!",
			"I've had enough of {SUB} being {ADJ}!"
			];
        let termss = {
			"IDT":[
			"a woman",
			"an african furry femboy",
			"skinny",
			"asexual",
			"bisexual",
			"transgender",
			"transsexual",
			"transracial",
			"trans",
			"homosexual",
			"lesbian",
			"jewish"
			],
			"EXP": [
			" because {SUB} is a [ADJ]{INS}",
			" so he will continue to harass {GUD} like a fucking [ADJ]{INS}",
			", for this he must die",
			" all because {GUD} said that {SUB} is a {INS} (which is true!!)"
			],
			"PLC": [
			"Bonzi.ga", "{SUB}'s [ADJ]server", "Public space", "Any place that is not my basement", "{SUB}'s [ADJ]channel", "{SUB}'s account", "{SUB}'s [ADJ]BonziWORLD server", "Sullivan, Ohio"
			],
			"SUB": [
			"Ziggymoncher", "Jy", "Fune", "Crypt", "THLPLE", "Tylerrrrr", "Bonzi.ga", "Tyi", "DanielTR", "Edgy BonziWORLD user", "Losky"
			],
			"GUD": [
			"PB123Windows", "Diogo Mendes", "JEVILOGEN", "BWR", "Cosmic", "That one {SUB} hater", "Seamus", "Deisreich", "My Community", "Daisreich"
			],
			"ADJ": [
			"problematic", "racist", "homophobic", "transphobic", "acephobic", "anti-semitic", "evil", "bad", "terrible", "anti-{GUD}", "pro-{SUB}", "super {ADJ}", "super duper {ADJ}", "very {ADJ}", "the most {ADJ} of all", "retarded"
			],
			"ADG": [
			"innocent", "my good old friend", "good", "my boyfriend", "incredible", "fantastic", "flawless"
			],
			"INS": [
			"asshole", "nazi", "fraud", "evil", "reincarnation of Satan", "terrorist", "liberal", "fujitsu", "bigot", "KKK member", "demon", "homophobe", "pedophile", 
			"transphobe", "{SUB} fuckbuddy", "{SUB} alt", "{SUB} cuck", "harraser", "bully", "Hitler enthusiast", "{SUB}fag", "cyberbully", "manipulator"
			],
			"VRB": [
			"harrases", "trolls", "makes fun of", "made fun of", "harrased", "bullied", "bullies", "keeps harrasing", "is always harassing"
			],
			"GEN": [
			"He was", "She was", "Xe was", "They were"
			],
			"UNG": [
			"8 years old","8",
			"9 years old","9",
			"10 years old","10",
			"11 years old","11",
			"12 years old","12",
			"13 years old","13",
			"14 years old","14",
			"15 years old","15",
			"a year younger than me",
			"2 years younger than me",
			"3 years younger than me",
			"4 years younger than me"
			],
        }
		
			function Scan(handle){
                var wordlist = termss[handle];
				out = out.replace("{"+handle+"}", wordlist[Math.floor(Math.random()*wordlist.length)]);

				if(Math.random() < 0.5) out = out.replace("["+handle+"]", wordlist[Math.floor(Math.random()*wordlist.length)] + " ");
				else out = out.replace("["+handle+"]", "");

				if(Math.random() < 0.5) out = out.replace("[-"+handle+"]", wordlist[Math.floor(Math.random()*wordlist.length)]);
				else out = out.replace("[-"+handle+"]", "");
			}
            
			function generate(len){
                out = "";
				out += "Hello It's me Seamus! Did you know that {SUB} is a {INS} and {INS}? Betcha didn't! Let me explain: "
				for(i = 0; i < len; i++){
                    out += s_core_sentence[Math.floor(Math.random()*s_core_sentence.length)] + " ";
				}
				out += "And this is why {SUB} is a {INS} and a [ADJ]{INS}. FUCK HIM!!!!!"
				while (out.includes('{')){
                    Object.keys(termss).forEach(termm=>{
				        Scan(termm);
                    })
				}
				return out;
			}

//Message listener
bot.on("messageCreate",(message)=>{
    //Command handler
    if(message.content.startsWith(prefix)){
        //Get the parameters and command
        var command;
        var param;
        if(message.content.includes(" ")){
            command = message.content.substring(prefix.length, message.content.indexOf(" "));
            param = message.content.substring(message.content.indexOf(" ")+1, message.content.length);
        } else{
            param = "";
            command = message.content.substring(prefix.length, message.content.length);
        }
        //Try the command
        try{
            commands[command](message, param, admins.includes(message.author.id));
        }catch(exc){
            message.channel.send("something fucked");
        }
    }

    //Generation handler
    if(seed <= 0){
        seed = Math.floor(Math.random()*range)+min;
        message.channel.send(generate(10));
    }
    else seed--;
})
