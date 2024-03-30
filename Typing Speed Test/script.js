const sentences = [
  "After all, you're only an immortal until someone manages to kill you. After that, you were just long-lived. As long as poverty, injustice and gross inequality persist in our world, none of us can truly rest.",

  "We were like deaf people trying to dance to a beat we couldn't hear, long after the music actually stopped. For once you have tasted flight you will walk the earth with your eyes turned skywards, for there you have been and there you will long to return.",

  "Time plays like an accordion in the way it can stretch out and compress itself in a thousand melodic ways. Months on end may pass blindingly in a quick series of chords, open-shut, together-apart; and then a single melancholy week may seem like a year's pining, one long unfolding note.",

  "Life is beautiful, as long as it consumes you. When it is rushing through you, destroying you, life is gorgeous, glorious. It is when you burn a slow fire and save fuel, that life's not worth having.",

  "As long as people have been on this earth, the moon has been a mystery to us. Think about it. She is strong enough to pull the oceans, and when she dies away, she always comes back again. My mama used to tell me Our Lady lived on the moon and that I should dance when her face was bright and hibernate when it was dark.",
];

const msg = document.getElementById("msg");
const typedWords = document.getElementById("mywords");
const btn = document.getElementById("btn");

let startTime, endTime;

const playGame = () => {
  let randomNumber = Math.floor(Math.random() * sentences.length);
  msg.innerText = sentences[randomNumber];
  let date = new Date();
  startTime = date.getTime();
  btn.innerText = "Done";
};

const endGame = () => {
  let date = new Date();
  endTime = date.getTime();
  let totalTime = 0,
    wordsCount = 0;
  totalTime = Math.round((endTime - startTime) / 1000);

  let totalStr = typedWords.value;
  wordsCount = wordsCounter(totalStr);

  let finalMsg = `You Typed Total ${wordsCount} words in  ${totalTime} seconds`;
  msg.innerText = finalMsg;
};

const wordsCounter = (str) => {
  let response = str.split(" ").length;
  return response;
};

btn.addEventListener("click",function(){
	if(this.innerText === "Start"){
		typedWords.disabled=false;
		playGame();
	}else if(this.innerText === "Done"){
		typedWords.disabled=true;
		btn.innerText="Start";
		endGame();
	}
})
