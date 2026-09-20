function dateCalculator(newdate) {

    const today = new Date();
    const targetDate = new Date(newdate);

    today.setHours(0, 0, 0, 0);
    targetDate.setHours(0, 0, 0, 0);


    // সময় শেষ
    if (targetDate < today) {
        return "আবেদনের সময় শেষ।";
    }


    // আজ শেষ দিন
    if (targetDate.getTime() === today.getTime()) {
        return "আজকেই শেষ দিন।";
    }


    let years =
        targetDate.getFullYear() -
        today.getFullYear();

    let months =
        targetDate.getMonth() -
        today.getMonth();

    let days =
        targetDate.getDate() -
        today.getDate();


    // দিন negative হলে
    if (days < 0) {

        months--;

        const previousMonth = new Date(
            targetDate.getFullYear(),
            targetDate.getMonth(),
            0
        );

        days += previousMonth.getDate();
    }


    // মাস negative হলে
    if (months < 0) {

        years--;
        months += 12;
    }


    // বাংলা সংখ্যা
    const banglaNumber = number =>
        number
            .toString()
            .replace(/\d/g, d => "০১২৩৪৫৬৭৮৯"[d]);


    const result = [];


    if (years > 0) {
        result.push(
            `${banglaNumber(years)} বছর`
        );
    }

    if (months > 0) {
        result.push(
            `${banglaNumber(months)} মাস`
        );
    }

    if (days > 0) {
        result.push(
            `${banglaNumber(days)} দিন`
        );
    }


    return `আবেদন চলমান এবং ${result.join(" ")} বাকি আছে`;
}
dateCalculator("1996-01-25")
function toggleOutput(outputId, iconId) {
  const output = document.getElementById(outputId);
  const icon = document.getElementById(iconId);

  if (!output || !icon) {
    console.error("Output অথবা Icon পাওয়া যায়নি:", outputId, iconId);
    return;
  }

  if (output.style.display === "none") {
    output.style.display = "block";

    icon.classList.remove("fa-plus");
    icon.classList.add("fa-minus");
  } else {
    output.style.display = "none";

    icon.classList.remove("fa-minus");
    icon.classList.add("fa-plus");
  }
}

function createAdmissionHTML(data, prefix = "") {

  const outputId = `${prefix}${data.OutptuID}`;
  const iconId = `${prefix}${data.IconID}`;

  return `
    <div class="NotiecList">

      <div
        class="nameofevent"
        onclick="toggleOutput('${outputId}', '${iconId}')"
      >

        <div class="nameofevent_content icons">
          <i
            id="${iconId}"
            class="fa-solid fa-plus"
          ></i>
        </div>

        <div class="nameofevent_content">
          ${data.NameEng}
        </div>

      </div>


      <div
        id="${outputId}"
        style="display: none;"
      >

        <h1>${data.NameBng}</h1>

        <div class="logoofunvi">
          <img
            class="logoofunvio"
            src="./src/img/${data.Images}"
            alt="${data.NameEng}"
          >
        </div>

        <div id="${prefix}${data.outmain}">

          <div
            id="${prefix}${data.tabeloutputId}"
            class="noticepubliceture"
          ></div>

          <div class="button_section">

            <a
              href="./src/noticfile/${data.notice}"
              target="_blank"
            >
              সাধারণ নেটিশ
            </a>

            <a
              href="${data.appweb}"
              target="_blank"
            >
              আবেদনের ওয়েবসাইটে
            </a>

            <a
              href="${data.mainweb}"
              target="_blank"
            >
              অফিসিয়াল ওয়েবসাইটে
            </a>

          </div>

        </div>

      </div>

    </div>
  `;
}
console.log(dateCalculator("2028-10-25"));
//bangla dat
const dateBangla = {
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "long",
};
