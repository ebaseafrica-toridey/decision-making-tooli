
function recommendStory(value) {
  let box = document.getElementById('recommendation');
  let rec = "No recommendation yet.";
  switch(value) {
    case "The approach and methodology we employed/the way we did our work":
      rec = "Recommended story type: Process Story.";
      break;
    case "The way we worked and the results":
      rec = "Recommended story type: Narrative Story.";
      break;
    case "The impact of our work on People’s lives":
      rec = "Recommended story type: Impact Story.";
      break;
    case "How scientific data can elicit artistic creativity":
      rec = "Recommended story type: Creative Story.";
      break;
  }
  box.innerText = rec;
}

function setLanguage(lang) {
  document.querySelectorAll('[data-en]').forEach(el => {
    el.innerText = el.getAttribute('data-' + lang);
  });
}
