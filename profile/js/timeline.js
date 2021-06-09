import { Data } from "./data.js";

// window.onload
// console.log(`${Data[0].title}\n${Data[0].subtitle}`);

function createTimeline() {
  const timelineSection = document.getElementById("Timeline");
  Data.forEach((entry) => {
    //console.log(entry.title ? entry.title : entry.subtitle);
    const timelineCard = document.createElement("div");
    timelineCard.innerHTML = `
      <h1>${entry.title ? entry.title : entry.subtitle}</h1>
      <h3>${entry.subtitle ? entry.subtitle : ""}</h3>
      <p>${entry.date}</p>
    `;
    timelineCard.classList.add("timeline-card");
    timelineSection.appendChild(timelineCard);
  });
}

createTimeline();
