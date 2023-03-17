export { rps, rpsls };

function rps(user_choice) {
  let randomNumber = Math.floor(Math.random() * 3);
  let choices = ["rock", "paper", "scissors"];
  let comp_choice = choices[randomNumber];
  var output_json = {};
  if (user_choice == null || user_choice == "") {
    output_json["player"] = comp_choice;
    return output_json;
  }
  user_choice = user_choice.toLowerCase();
  if (!choices.includes(user_choice)) {
    if (user_choice == "lizard" || user_choice == "spock") {
      console.error(`${user_choice} is out of range.`);
      throw new RangeError();
    } else {
      console.error(`${user_choice} is not a valid choice.`);
      throw new RangeError();
    }
  }
  var result = ["tie", "lose", "win"];
  var index1 = choices.indexOf(user_choice),
    index2 = choices.indexOf(comp_choice),
    dif = index2 - index1;
  if (dif < 0) {
    dif += choices.length;
  }
  output_json["player"] = user_choice;
  output_json["opponent"] = comp_choice;
  output_json["result"] = result[dif];

  return output_json;
}

function rpsls(user_choice) {
  let randomNumber = Math.floor(Math.random() * 5);
  let choices = ["scissors", "paper", "rock", "lizard", "spock"];
  let comp_choice = choices[randomNumber];
  var output_json = {};
  if (user_choice == null || user_choice == "") {
    output_json["player"] = comp_choice;
    return output_json;
  }
  user_choice = user_choice.toLowerCase();
  if (!choices.includes(user_choice)) {
    console.error(`${user_choice} is not a valid choice.`);
    throw new RangeError();
  }
  var result = ["tie", "lose", "win"];
  var index1 = choices.indexOf(user_choice),
    index2 = choices.indexOf(comp_choice),
    dif = index2 - index1;
  if ((dif < 0 && dif % 2 != 0) || (dif > 0 && dif % 2 == 0)) {
    dif = 1;
  } else if (dif == 0) {
    dif = 0;
  } else {
    dif = 2;
  }
  output_json["player"] = user_choice;
  output_json["opponent"] = comp_choice;
  output_json["result"] = result[dif];
  return output_json;
}
