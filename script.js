// heartIncrement

let count = 0;
const heartNumber = document.getElementById("heartCount");
const hearts = document.querySelectorAll(".allHeart");
for (const call of hearts) {
  call.addEventListener("click", function () {
    count++;
    heartNumber.innerText = count;
  });
}

// copyIncrement

let count2 = 0;
const copyNumber = document.getElementById("copyCount");
const copies = document.querySelectorAll(".allCopy");
for (const copy of copies) {
  copy.addEventListener("click", function () {
    count2++;
    copyNumber.innerText = count2;
  });
}
// coinDecrement

let count3 = 100;
const callNumber = document.getElementById("coinCount");
const calls = document.querySelectorAll(".allCall");
for (const call of calls) {
  call.addEventListener("click", function (e) {
    const card = e.target.closest(".parent");
    const title = card.querySelector(".title").innerText;
    const number = card.querySelector(".number").innerText;
    const name = card.querySelector(".name").innerText;

    alert(`Calling ${title} ${number}...`);
    count3 -= 20;
    callNumber.innerText = count3;

    if (count3 < 0) {
      alert("again");
      const count4 = 0;
      callNumber.innerText = count4;
      div = "";
    }

    const data = {
      historyName: `${name}`,
      historyNumber: `${number}`,
      date: new Date().toLocaleTimeString(),
    };

    const callHistory = document.getElementById("callHistory");

    const div = document.createElement("div");
    div.innerHTML = `
  <div class="flex justify-between items-center bg-[#FAFAFA] p-[16px] rounded-lg font-[inter]">
    <div>
      <p class="font-[inter] font-semibold text-[18px] callHistoryTitle">${data.historyName}</p>
      <p class="text-[#5C5C5C] text-[18px] callHistoryNumber">${data.historyNumber}</p>
    </div>
    <p class="text-[18px] time">${data.date}</p>
  </div>
`;

    callHistory.appendChild(div);
  });
}

// clear button

document.getElementById("clearBtn").addEventListener("click", function () {
  const divContent = document.getElementById("callHistory");
  divContent.innerHTML = "";
});
