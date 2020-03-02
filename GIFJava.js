
//   <div id="buttons">
//     <button data-person="Rugrats">
//       Rugrats
//     </button>
//     <button data-person="Spongebob">
//       Spongebob
//     </button>
//     <button data-person="Doug">
//       Nemo
//     </button>
//     <button data-person="The Simpsons">
//       The Simpsons
//     </button>
//     <button data-person="Family Guy">
//       Family Guy
//     </button>
//     <button data-person="Rocket Power">
//       Rocket Power
//     </button>
//     <button data-person="Animaniacs">
//       Animaniacs
//     </button>
//     <button data-person="Looney Tunes">
//       Looney Tunes
//     </button>
//     <button data-person="Ren & Stimpy">
//       Ren & Stimpy
//     </button>
//   </div>

//   <div id="gifs-appear-here">
//   </div>
   
//   <img src="https://media0.giphy.com/media/kEKcOWl8RMLde/200.gif" data-still="https://media0.giphy.com/media/kEKcOWl8RMLde/200.gif" data-animate="https://media0.giphy.com/media/kEKcOWl8RMLde/200.gif" data-state="still" class="gif"> -->

console.log="hellloooo"
var topics = {"Family Guy", "Rocket Power","Looney Tunes", "Ren & Stimpy", "Animaniacs", "Rugrats","The Simpsons","Doug"};

let i = 1;
let body = document.getElementsByTagName("body")[0];

for (i; i <= 8; i++) {
  let button = document.createElement("button");
  button.innerHTML = 'topics '+i;
  body.appendChild(button);
  button.addEventListener ("click", function() {
    alert(this.innerHTML);
  });
}
// $("button").on("click", function() {
    // var topics = $(this).attr("data-topics");
    // var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    //   topics + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";


