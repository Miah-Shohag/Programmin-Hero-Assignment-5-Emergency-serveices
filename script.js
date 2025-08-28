let totalHeart = 0;

const cards = document.getElementsByClassName("card");

Array.from(cards).forEach((card) => {
  card.addEventListener("click", (e) => {
    if (e.target.classList.contains("add_heart")) {
      totalHeart++;
      document.getElementById("total_heart").innerText = totalHeart;
    }
  });
});

// Increase Heart value by clicking
// const increaseHeart = () => {
//   const addHeart = document.querySelectorAll(".add_heart");
//   let totalHeart = parseInt(document.getElementById("total_heart").innerText);

//   addHeart.forEach((btn) => {
//     btn.addEventListener("click", () => {
//       totalHeart += 1;
//       document.getElementById("total_heart").innerText = totalHeart;
//     });
//   });
// };
// increaseHeart();

// const callFunctionality = () => {
//   const callBtn = document.querySelectorAll(".call_btn");
//   let total_coin = parseInt(document.getElementById("total_coin").innerText);
//   callBtn.forEach((btn) => {
//     btn.addEventListener("click", () => {
//       const parentCard = btn.closest(".card"); // card element
//       const contactNumber =
//         parentCard.querySelector("h5.contact-number").innerText;
//       const title = parentCard.querySelector("h3").innerText;

//       if (total_coin < 20) {
//         alert("You don't have enough coins.");
//         return;
//       }

//       alert(`Calling ${title} ${contactNumber}...`);

//       total_coin -= 20;
//       document.getElementById("total_coin").innerText = total_coin;

//       function addHistory(title, contactNumber) {
//         let historyData = document.getElementById("history_data");
//         const wrapper = document.createElement("div");
//         wrapper.className =
//           "bg-gray-200 flex items-center justify-between gap-3 px-3 py-2 rounded-md";
//         const leftSideDiv = document.createElement("div");

//         const h5 = document.createElement("h5");
//         h5.className = "title font-semibold text-md";
//         h5.innerText = title;

//         const p = document.createElement("p");
//         p.className = "contact-number text-gray-600 text-sm";
//         p.innerText = contactNumber;

//         const span = document.createElement("span");
//         span.className = "text-xs font-semibold";
//         const now = new Date();
//         span.innerText = now.toLocaleTimeString();

//         leftSideDiv.appendChild(h5);
//         leftSideDiv.appendChild(p);
//         wrapper.appendChild(leftSide);
//         wrapper.appendChild(span);
//         historyData.appendChild(wrapper);
//       }

//       addHistory(title, contactNumber);
//     });
//   });
// };

// callFunctionality();
