//write your code here
const who = ["The dog", "My grandma", "His turtle", "My bird"];
const action = ["ate", "peed", "crushed", "broke"];
const what = ["my homework", "the keys", "the car"];
const when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying",
];

function Escusas() {
  const aleatorioWho = Math.floor(Math.random() * who.length);
  const aleatorioAction = Math.floor(Math.random() * action.length);
  const aleatorioWhat = Math.floor(Math.random() * what.length);
  const aleatorioWhen = Math.floor(Math.random() * when.length);
  const escusa = `${who[aleatorioWho]} ${action[aleatorioAction]} ${what[aleatorioWhat]} ${when[aleatorioWhen]}`;

  return escusa;
}

window.onload = function() {
  for (let i = 0; i < 20; i++) {
    const escusa = Escusas();
    const Elementoescusa = document.getElementById("MiEscusa");
    Elementoescusa.innerHTML = escusa;
  }
};
