const increaseHeart = () => {
  const addHeart = document.getElementsByClassName("add_heart");
  let totalHeart = parseInt(document.getElementById("total_heart").innerText);

  for (let i = 0; i < addHeart.length; i++) {
    addHeart[i].addEventListener("click", () => {
      totalHeart += 1;
      document.getElementById("total_heart").innerText = totalHeart;
    });
  }
};
increaseHeart();

const callFunctionality = () => {
  const callBtn = document.querySelectorAll(".call_btn");
  let total_coin = parseInt(document.getElementById("total_coin").innerText);
  callBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      const parentCard = btn.closest(".card"); // card element
      const contactNumber =
        parentCard.querySelector("h5.contact-number").innerText;
      const title = parentCard.querySelector("h3").innerText;

      if (total_coin < 20) {
        alert("You don't have enough coins.");
        return;
      }

      alert(`Calling ${title} ${contactNumber}...`);

      // Deduct 20 coins
      total_coin -= 20;
      document.getElementById("total_coin").innerText = total_coin;

      function addHistory(title) {
        let historyData = document.getElementById("history_data");
        const wrapper = document.createElement("div");
        wrapper.className =
          "bg-gray-200 flex items-center justify-between gap-3 px-3 py-2 rounded-md";
        const leftSide = document.createElement("div");

        const h5 = document.createElement("h5");
        h5.className = "title font-semibold text-md";
        h5.innerText = title;

        const p = document.createElement("p");
        p.className = "contact-number text-gray-600 text-sm";
        p.innerText = contactNumber;

        const span = document.createElement("span");
        span.className = "text-xs font-semibold";
        const now = new Date();
        span.innerText = now.toLocaleTimeString();

        leftSide.appendChild(h5);
        leftSide.appendChild(p);
        wrapper.appendChild(leftSide);
        wrapper.appendChild(span);
        historyData.appendChild(wrapper);
      }

      addHistory(title, contactNumber);
    });
  });
};

callFunctionality();

const clearHistory = () => {
  const clear_btn = document.getElementById("clear_history_btn");
  let history_data = document.getElementById("history_data");
  clear_btn.addEventListener("click", () => {
    history_data.innerHTML = "";
  });
};

clearHistory();

const copyText = () => {
  const copyButtons = document.querySelectorAll("#copy_btn");
  const totalCopyElem = document.getElementById("total_copy");

  copyButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const parentCard = btn.closest(".card");
      const contactNumber =
        parentCard.querySelector("h5.contact-number").textContent;

      // Copy to clipboard
      navigator.clipboard
        .writeText(contactNumber)
        .then(() => {
          let totalCopied = parseInt(totalCopyElem.innerText);
          totalCopied += 1;
          totalCopyElem.innerText = totalCopied;

          alert(`Copied contact number: ${contactNumber}`);
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
        });
    });
  });
};

copyText();
