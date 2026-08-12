function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


console.log(dateCalculator("2026-08-20"));
console.log(dateCalculator("2026-06-19"));
console.log(BanglaTime("00:30"));
console.log(BanglaTime("05:15"));
console.log(BanglaTime("08:38"));
console.log(BanglaTime("12:45"));
console.log(BanglaTime("17:30"));
console.log(BanglaTime("21:59"));


// taka to word
// taka to word

console.log(BanglaWordstaka(10542.51))
// taka to word


// <!-- ========== Start Section ========== -->
let NEWShop = "";
const Shop = ["Select One", "Bkash", "Nogad", "Rocket", "Upay"];
Shop.forEach(myfncrtion_shop);
document.getElementById("Shop001").innerHTML = NEWShop;
function myfncrtion_shop(items1) {
  NEWShop += "<option value=" + items1 + ">" + items1 + "</option>";
}
function hem() {
  let NEWBkah = "";
  let NEWNogad = "";
  const Bkash = ["favourite Bkash Agent", "Normal Bkash Agent"];
  const Nogada = ["With Nogad Apps", "Without Nogad apps"];
  let ro = `<option  value="Rocket" >Rocket</option>`;
  let upay = `<option  value="Upay" >Upay</option>`;
  Bkash.forEach(myfncrtion_Bkash);
  Nogada.forEach(myfncrtion_Nogada);
  function myfncrtion_Bkash(items7, index) {
    NEWBkah +=
      "<option value=" + "Bkash" + index + items7 + ">" + items7 + "</option>";
  }
  function myfncrtion_Nogada(items8, index) {
    NEWNogad +=
      "<option value=" + "Nogad" + index + items8 + ">" + items8 + "</option>";
  }
  var sop_1 = document.getElementById("Shop001").value;
  console.log(sop_1);
  if (sop_1 == "Bkash") {
    opt = NEWBkah;
  } else if (sop_1 == "Nogad") {
    opt = NEWNogad;
  } else if (sop_1 == "Rocket") {
    opt = ro;
  } else if (sop_1 == "Upay") {
    opt = upay;
  }
  document.getElementById("Shop003").innerHTML = opt;
}
function bkasss() {
  let amounts = document.getElementById("amount");
  let amount = parseFloat(amounts.value);
  let methood = document.getElementById("Shop003").value;
  let bkfa = 1.395;
  let bkno = 1.85;
  let ngaps = 1.199;
  let ng = 1.5;
  let rc = 1.67;
  let up = 1.4;
  console.log(amount);
  console.log(methood);
  if (methood == "Bkash0favourite") {
    sch =
      "<h3>Your account balance is : " +
      amount +
      " Taka</h3><h3>Cash Out Charge Rate is : " +
      bkfa +
      "%</h3>" +
      "<h3> Cash Out Charge is :" +
      amount * (bkfa / 100) +
      " Taka</h3><h3> Your totel amount need : " +
      (amount + amount * (bkfa / 100)) +
      " Taka</h3> <h3>If You have not Cash Out Charge,You enter the amount is :" +
      (amount - amount * (bkfa / 100)) +
      " Taka</h3>";
  } else if (methood == "Bkash1Normal") {
    sch =
      "<h3>Your account balance is : " +
      amount +
      " Taka</h3><h3>Cash Out Charge Rate is : " +
      bkno +
      "%</h3>" +
      "<h3> Cash Out Charge is :" +
      amount * (bkno / 100) +
      "</h3><h3> Your totel amount need : " +
      (amount + amount * (bkno / 100)) +
      "</h3> <h3>If You have not Cash Out Charge,You enter the amount is :" +
      (amount - amount * (bkno / 100)) +
      "</h3>";
  } else if (methood == "Nogad1Without") {
    sch =
      "<h3>Your account balance is : " +
      amount +
      " Taka</h3><h3>Cash Out Charge Rate is : " +
      ng +
      "%</h3>" +
      "<h3> Cash Out Charge is :" +
      amount * (ng / 100) +
      "</h3><h3> Your totel amount need : " +
      (amount + amount * (ng / 100)) +
      "</h3> <h3>If You have not Cash Out Charge,You enter the amount is :" +
      (amount - amount * (ng / 100)) +
      "</h3>";
  } else if (methood == "Nogad0With") {
    sch =
      "<h3>Your account balance is : " +
      amount +
      " Taka</h3><h3>Cash Out Charge Rate is : " +
      ngaps +
      "%</h3>" +
      "<h3> Cash Out Charge is :" +
      amount * (ngaps / 100) +
      "</h3><h3> Your totel amount need : " +
      (amount + amount * (ngaps / 100)) +
      "</h3> <h3>If You have not Cash Out Charge,You enter the amount is :" +
      (amount - amount * (ngaps / 100)) +
      "</h3>";
  } else if (methood == "Rocket") {
    sch =
      "<h3>Your account balance is : " +
      amount +
      " Taka</h3><h3>Cash Out Charge Rate is : " +
      rc +
      "%</h3>" +
      "<h3> Cash Out Charge is :" +
      amount * (rc / 100) +
      "</h3><h3> Your totel amount need : " +
      (amount + amount * (rc / 100)) +
      "</h3> <h3>If You have not Cash Out Charge,You enter the amount is :" +
      (amount - amount * (rc / 100)) +
      "</h3>";
  } else if (methood == "Upay") {
    sch =
      "<h3>Your account balance is : " +
      amount +
      " Taka</h3><h3>Cash Out Charge Rate is : " +
      up +
      "%</h3>" +
      "<h3> Cash Out Charge is :" +
      amount * (up / 100) +
      "</h3><h3> Your totel amount need : " +
      (amount + amount * (up / 100)) +
      "</h3> <h3>If You have not Cash Out Charge,You enter the amount is :" +
      (amount - amount * (up / 100)) +
      "</h3>";
  } else {
    sch = `<h1 class="baksss">Plase full fill correctly. thank you!</h1> ${methood}`;
  }
  console.log(sch);
  document.getElementById("hemout").innerHTML = sch;
}
// <!-- ========== End Section ========== -->

// <!-- ========== End Section ========== -->
let year = new Date().getFullYear();
document.getElementById("Year").innerHTML = year;

// bangla date & days
//Get the button
// var mybutton = document.getElementById("myBtn");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function () {
//   scrollFunction();
// };

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }
// ? ===================================== Onclick =========================================


// =========================================== dom ================================


const sections = {
  school: document.getElementById("school"),
  college: document.getElementById("college"),
  university: document.getElementById("university"),
  medical: document.getElementById("medical"),
  job: document.getElementById("job"),
};

const buttons = document.querySelectorAll(".button");

function showSection(sectionName, button) {

  // সব section hide
  Object.values(sections).forEach(section => {
    section.style.display = "none";
  });

  // নির্দিষ্ট section show
  sections[sectionName].style.display = "block";

  // সব button inactive
  buttons.forEach(btn => {
    btn.classList.remove("active");
  });

  // বর্তমান button active
  button.classList.add("active");
}

// ? ===================================== Onclick =========================================
// ? ===================================== noice =========================================



//all tableHead
const tableHTMLHeadall = `<table>
    <tr>
      <th colspan="2" style="text-align: center;">আবেদনের যোগ্যতা</th>
    </tr>
    `;
//university tableHead
const untableHTMLHead = `<table>
    <tr>
      <th colspan="2" style="text-align: center;">আবেদনের যোগ্যতা</th>
    </tr>
     <tr style="text-align: center;">
              <td>ইউনিটের নাম</td>
              <td> ফলাফল</td>
            </tr>`;
const tableFooter = `</table>`;
//all apply fee
const applyfeeheader = `
            <tr>
              <th colspan="2" style="text-align: center;">অনলাইনে আবেদনের টাকার পরিমান</th>
            </tr>`;
// unit apply fee
const unapplyfeeunit = `
            <tr style="text-align: center;">
              <td>ইউনিটের নাম</td>
              <td> টাকার পরিমাণ</td>
            </tr>`;
const unadmitcardheader = `
            <tr>
              <th colspan="2" style="text-align: center;">প্রবেশপত্র সংগ্রহের সময়সৃচী</th>
            </tr>
            <tr style="text-align: center;">
              <td>ইউনিটের নাম</td>
              <td> টাকার পরিমাণ</td>
            </tr>`;
// all admit head
const admitcardheaderall = `
            <tr>
              <th colspan="2" style="text-align: center;">প্রবেশপত্র সংগ্রহের সময়সৃচী</th>
            </tr>`;
// all exam head
const examheaderall = `
            <tr>
              <th colspan="2" style="text-align: center;">ভর্তি পরীক্ষার সময়সৃচী</th>
            </tr>`;
// all result hed
const reusltheaderall = `
            <tr>
              <th colspan="2" style="text-align: center;">ভর্তি পরীক্ষার ফলাফল</th>
            </tr>`;
// univarsity name of unit
const universityunitdatetime = `
            <tr style="text-align: center;">
              <td>ইউনিটের নাম</td>
              <td>তারিখ ও সময়</td>
            </tr>`;

// const onlinechagr =
const onlineTimeHead = ` 
            <tr>
              <th colspan="2" style="text-align: center;">অনলাইনে আবেদনে সময়সীমা</th>
            </tr>`;
const note = `<div class="note">বিশেষ দ্রষ্টব্যঃ বিস্তারিত তথ্যের জন্য  অফিসিয়াল ওয়েবসাইটে অথবা নেটিশে দেখুন।</div>`;
const notnoticePUb = `<h1 ‍style="font-size: 40px;font-weight: lighter;text-align: justify;"> অফিসিয়াল ভাবে কোন নোটিশ প্রকাশিত হয়নি।প্রকাশিত হলে ওযেবসােইটের মাধ্যমে জানিয়ে দেওয়া হবে।বিস্তারিত তথ্যের জন্য  অফিসিয়াল ওয়েবসাইটে দেখুন।</h1>`

// * For alll


const MADICALADDATA = [
  {
    id:0,
    NameEng: "bangladesh medical admission", // name of english
    NameBng: "মেডিকেল কলেজ ভর্তি পরীক্ষা", // name of bangla
    Images: "mbbsbds.png", //logo
    onclick: "mbbs()", // onclick
    OutptuID: "mbbs_output", // output div
    IconID: "mbbs_icon", //icon
    tabeloutputId: "mbbs_table_output", //table id
    outmain: "mbbs_output_main", //main out put
    notice: "MBBS.pdf", // notce
    noticepub : true,
    appweb:
      "https://admission.eis.du.ac.bd/bn/408b7c8ad06e4d9954fa2d948a01f508", //main web
    mainweb: "https://www.du.ac.bd/", //main web
    appDateStart: new Date("2026-08-01"), // date start
    appDateend: new Date("2026-08-10"), // date end
    admitdn: true,
    admitdnunitwise: false, // False for Unit-wise NO , true for Unit-wise yes  Unit-wise Admit Card Download
    admitDNUnitwisdatestart: new Date("2026-08-15"), // start date
    admitDNUnitwistimestart: ``, // start time
    admitDNUnitwisdateend: new Date("2026-08-18"), // start date
    admitDNUnitwistimeend: "", // start date
    examCenter: "বিভাগীয় শহরে অনুষ্ঠিত হবে", //exam center.
    examUnitwise: true, // False for Unit-wise NO , true for Unit-wise yes
    examteststart: new Date("2026-08-20"), // examdate start
    examtestend: new Date("2026-08-22"), // examdate end
    examresult :true,
    examresultUnitwis :true,
    examresultdate : new Date("2026-09-20"),
    examresulttme : "",
  },
  {
    id:1,
    NameEng: "Armed Forces Medical College", // name of english
    NameBng: "আর্মড ফোর্সেস মেডিকেল কলেজ", // name of bangla
    Images: "bnmc.png", //logo
    onclick: "afmc()", // onclick
    OutptuID: "afmc_output", // output div
    IconID: "afmc_icon", //icon
    tabeloutputId: "afmc_table_output", //table id
     outmain: "mbbs_output_main", //main out put
    notice: "AFMC.pdf", // notce
    noticepub : false,
    appweb:
      "https://admission.eis.du.ac.bd/bn/408b7c8ad06e4d9954fa2d948a01f508", //main web
    mainweb: "https://www.du.ac.bd/", //main web
    appDateStart: new Date("2026-08-01"), // date start
    appDateend: new Date("2026-08-10"), // date end
    admitdn: true,
    admitdnunitwise: false, // False for Unit-wise NO , true for Unit-wise yes  Unit-wise Admit Card Download
    admitDNUnitwisdatestart: new Date("2026-08-15"), // start date
    admitDNUnitwistimestart: ``, // start time
    admitDNUnitwisdateend: new Date("2026-08-18"), // start date
    admitDNUnitwistimeend: "", // start date
    examCenter: "বিভাগীয় শহরে অনুষ্ঠিত হবে", //exam center.
    examUnitwise: true, // False for Unit-wise NO , true for Unit-wise yes
    examteststart: new Date("2026-08-20"), // examdate start
    examtestend: new Date("2026-08-22"), // examdate end
    examresult :true,
    examresultUnitwis :true,
    examresultdate : new Date("2026-09-20"),
    examresulttme : "",
  },
]
let madicalOPTmian = "";
MADICALADDATA.forEach(function (madicaldata) {
  madicalOPTmian += `<div class="NotiecList">
        <div class="nameofevent" onclick="toggleOutput('${madicaldata.OutptuID}','${madicaldata.IconID}' )"> <!-- on click-->
          <div class="nameofevent_content icons"><i id="${madicaldata.IconID}" class="fa-solid fa-plus"> </i></div> <!-- icon-->
          <div class="nameofevent_content">${madicaldata.NameEng}</div> <!-- Name -->
          
        </div><!-- output div-->
        
        <div id="${madicaldata.OutptuID}" style="display: none;"> <!-- onclick output-->
        <h1>${madicaldata.NameBng}</h1><!-- name bangla-->
          <div class="logoofunvi">
            <img class="logoofunvio"  src="./src/img/${madicaldata.Images}" alt="">
          </div>
          <div id="${madicaldata.outmain}">
            <div id="${madicaldata.tabeloutputId}"></div><!-- table section -->
            <div id="tex"></div>
            <div id="notice_section">
              <div class="button_section">
              <a href="./src/noticfile/${madicaldata.notice}" target="_blank">সাধারণ নেটিশ</a>
              <a href="${madicaldata.appweb}" target="_blank">আবেদনের ওয়েবসাইটে</a>
              <a href="${madicaldata.mainweb}" target="_blank">অফিসিয়াল ওয়েবসাইটে</a>
            </div><!-- notice section -->
          </div>
        </div>
        </div> <!-- output div-->
        
        `;
        // mdddd = `<h1>${madicaldata.NameBng}</h1>
        // <p>${madicaldata.NameEng}</p>
        // `
      //   const madicaldatanotice = madicaldata.noticepub;
     
});
document.getElementById("madicalOPTmian").innerHTML = madicalOPTmian; //medical main output 
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


// function mbbs() {
//   const mbbsoutput = document.getElementById("mbbs_output");
//   const mbbsIcon = document.getElementById("mbbs_icon");
//   if (mbbsoutput.style.display === "none") {
//     mbbsoutput.style.display = "block";
//     mbbsIcon.classList.remove("fa-plus");
//     mbbsIcon.classList.add("fa-minus");
//   } else {
//     mbbsoutput.style.display = "none";
//     mbbsIcon.classList.remove("fa-minus");
//     mbbsIcon.classList.add("fa-plus");
//   }
// }
// function afmc() {
//   const afmcoutput = document.getElementById("afmc_output");
//   const afmcIcon = document.getElementById("afmc_icon");
//   if (afmcoutput.style.display === "none") {
//     afmcoutput.style.display = "block";
//     afmcIcon.classList.remove("fa-plus");
//     afmcIcon.classList.add("fa-minus");
//   } else {
//     afmcoutput.style.display = "none";
//     afmcIcon.classList.remove("fa-minus");
//     afmcIcon.classList.add("fa-plus");
//   }
// }

          
let universityOPTmian = "";
UNIVERSITYDTA.forEach(function (universitydata) {
  universityOPTmian += `<div class="NotiecList">
        <div class="nameofevent" onclick="toggleOutput('${universitydata.OutptuID}','${universitydata.IconID}' )"> <!-- on click-->
          <div class="nameofevent_content icons"><i id="${universitydata.IconID}" class="fa-solid fa-plus"> </i></div> <!-- icon-->
          <div class="nameofevent_content">${universitydata.NameEng}</div> <!-- Name -->
          
        </div><!-- output div-->
        
        <div id="${universitydata.OutptuID}" style="display: none;"> <!-- onclick output-->
        <h1>${universitydata.NameBng}</h1><!-- name bangla-->
          <div class="logoofunvi">
            <img class="logoofunvio"  src="./src/img/${universitydata.Images}" alt="">
          </div>
          <div id="${universitydata.outmain}">
            <div id="${universitydata.tabeloutputId}" clsss="noticepubliceture"></div><!-- table section -->
            
              
              <div class="button_section">
              <a href="./src/noticfile/${universitydata.notice}" target="_blank">সাধারণ নেটিশ</a>
              <a href="${universitydata.appweb}" target="_blank">আবেদনের ওয়েবসাইটে</a>
              <a href="${universitydata.mainweb}" target="_blank">অফিসিয়াল ওয়েবসাইটে</a>
            </div><!-- notice section -->
          </div>
        
        </div> <!-- output div-->
        
        `
        ;
});
document.getElementById("university_opt").innerHTML = universityOPTmian;

// !
// * coad for all
let dutableResultHTML = "";
let dutaelfee = "";
let admitDNHeadhtml = "";
let duadmitHTML = "";
let examheadhtml = "";
let duexmaHTML = "";
let duexmacenterHTML = "";
let duexamresultHtml = "";
let duexamresultHtmlheaad = "";

DUInfo.forEach(function (dudata) {
 
  dutableResultHTML += `<tr>
      <td>${dudata.NameofUnit}</td>
      <td style="width: 50%"> ${dudata.result}</td>
    </tr>  <!-- Result-->`;
  dutaelfee += `<tr>
      <td>${dudata.NameofUnit}</td>
      <td style="width: 50%"> ${dudata.applyfee.toLocaleString("bn-BD")} (${dudata.applyfeebd}) </td>
    </tr>`;
  // ?fee section
  // admitdnunitwise:true,
  let uintwiseADDU = UNIVERSITYDTA[duid].admitdnunitwise; //admit true flase
  let admitDNDU = UNIVERSITYDTA[duid].admitdn;
  if (admitDNDU===true && uintwiseADDU === false) {
    duadmitHTML = `
      <td colspan="2">সাকল ইউনিটের প্রবেশপত্র ডাউনলোডের আগামী ${UNIVERSITYDTA[duid].admitDNUnitwisdatestart.toLocaleDateString("bn-BD", dateBangla)} ${UNIVERSITYDTA[duid].admitDNUnitwistimestart} হতে ${UNIVERSITYDTA[duid].admitDNUnitwisdateend.toLocaleDateString("bn-BD", dateBangla)} ${UNIVERSITYDTA[duid].admitDNUnitwistimeend} পর্যন্ত প্রবেশপত্র সংগ্রহ করা যাবে।</td>
    </tr>`;
  } else if (admitDNDU===true && uintwiseADDU === true) {
    admitDNHeadhtml = ``;
    duadmitHTML += `<tr>
<td>${dudata.NameofUnit}</td>
      <td style="width: 50%"> ${dudata.admitdnstart.toLocaleDateString("bn-BD", dateBangla)} ${dudata.admitdnstartTtime} হতে ${dudata.admitdnend.toLocaleDateString("bn-BD", dateBangla)} ${dudata.admitdnendTime} </td>
      
    </tr>`;
  }
  let uintwiseExam = UNIVERSITYDTA[duid].examUnitwise; //admit true flase
  // * False for Unit-wise NO , true for Unit-wise yes
  if (uintwiseExam === false) {
    duexmaHTML = `
            <tr>
              <th colspan="2" style="text-align: center;">  পরীক্ষার  তারিখ</th>
            </tr>
            <tr>
<td colspan="2">সাকল ইউনিটের পরীক্ষা আগামী ${UNIVERSITYDTA[0].examteststart.toLocaleDateString("bn-BD", dateBangla)} হতে ${UNIVERSITYDTA[0].examtestend.toLocaleDateString("bn-BD", dateBangla)} মধ্যে ${UNIVERSITYDTA[duid].examCenter}  অনুষ্টিত হবে।  </td>      
    </tr>`;
  } else if (uintwiseExam === true) {
   examheadhtml = ` <tr>
              <th colspan="2" style="text-align: center;"> পরীক্ষার তারিখ</th>
            </tr>
            <tr style="text-align: center;">
              <td>ইউনিটের নাম</td>
              <td> তারিখ</td>
            </tr>`;

    duexmaHTML += `<tr>
<td>${dudata.NameofUnit}</td>
      <td style="width: 50%"> ${dudata.examdate.toLocaleDateString("bn-BD", dateBangla)} ${dudata.examtime} অনুষ্টিত হবে।  </td>
      
    </tr>`;
     duexmacenterHTML = `<tr>
              <td>পরীক্ষার কেন্দ্র</td>
              <td>${UNIVERSITYDTA[duid].examCenter}।</td>
            </tr>`;
  }
const duexamresult = UNIVERSITYDTA[duid].examresult;
const duexamresultunit = UNIVERSITYDTA[duid].examresultUnitwis;
if (duexamresult === true && duexamresultunit === false) {
  duexamresultHtml =`<tr>
              <th colspan="2" style="text-align: center;">পরীক্ষার ফলাফল</th>
              </tr>
              <tr>
              <td colspan="2">আগামী ${UNIVERSITYDTA[duid].examresultdate.toLocaleDateString("bn-BD", dateBangla)} তারিখে ${UNIVERSITYDTA[duid].examresulttme} প্রকাাশ করা হবে।</td>
            </tr>`;
}else if (duexamresult === true && duexamresultunit === true) {

  duexamresultHtmlheaad =`<tr>
              <th colspan="2" style="text-align: center;"> পরীক্ষার ফলাফল</th>
            </tr>
            <tr style="text-align: center;">
              <td>ইউনিটের নাম</td>
              <td> তারিখ</td>
            </tr>`
  duexamresultHtml +=`
            
            <tr>
              <td>${dudata.NameofUnit} </td>
              <td>${dudata.examresultdate.toLocaleDateString("bn-BD", dateBangla)} তারিখে ${dudata.examresulttme} প্রকাাশ করা হবে।</td>
            </tr>`;
}
  // exam center
});
// const
// ? table output section
//du
const duNoticePUB= UNIVERSITYDTA[duid].noticepub;
if (duNoticePUB === true) {
  dufinalopt= untableHTMLHead +
  dutableResultHTML + 
  tableFooter+
  note;
} else {
  dufinalopt = `${notnoticePUb}`
}
document.getElementById("du_table_output").innerHTML =dufinalopt;
//du
let rutableResultHTML = "";
let rutaelfee = "";
let ruadmitDNHeadhtml = "";
let ruadmitHTML = "";
let ruexamheadhtml = "";
let ruexmaHTML = "";
let ruexmacenterHTML = "";
let ruexamresultHtml = "";
let ruexamresultHtmlheaad = "";

RUInfo.forEach(function (rudata) {
  // du = 0
  rutableResultHTML += `<tr>
      <td>${rudata.NameofUnit}</td>
      <td style="width: 50%"> ${rudata.result}</td>
    </tr>  <!-- Result-->`;
  rutaelfee += `<tr>
      <td>${rudata.NameofUnit}</td>
      <td style="width: 50%"> ${rudata.applyfee.toLocaleString("bn-BD")} (${rudata.applyfeebd}) </td>
    </tr>`;
  // ?fee section
  // admitdnunitwise:true,
  let uintwiseADRU = UNIVERSITYDTA[ruid].admitdnunitwise; //admit true flase
  let admitcardDNru = UNIVERSITYDTA[ruid].admitdn; //admit true flase
  console.log(admitcardDNru)
  if (admitcardDNru ===true && uintwiseADRU === false) {
    ruadmitHTML = `<tr>
              <th colspan="2" style="text-align: center;"> প্রবেশপত্র সংগ্রহের তারিখ</th>
            </tr>
      <td colspan="2">সাকল ইউনিটের প্রবেশপত্র ডাউনলোডের আগামী ${UNIVERSITYDTA[ruid].admitDNUnitwisdatestart.toLocaleDateString("bn-BD", dateBangla)} ${UNIVERSITYDTA[ruid].admitDNUnitwistimestart} হতে ${UNIVERSITYDTA[ruid].admitDNUnitwisdateend.toLocaleDateString("bn-BD", dateBangla)} ${UNIVERSITYDTA[ruid].admitDNUnitwistimeend} পর্যন্ত প্রবেশপত্র সংগ্রহ করা যাবে।</td>
    </tr>`;
  } else if (admitcardDNru ===true && uintwiseADRU === true) {
    ruadmitDNHeadhtml = `
            <tr>
              <th colspan="2" style="text-align: center;"> প্রবেশপত্র সংগ্রহের তারিখ</th>
            </tr>
            <tr style="text-align: center;">
              <td>ইউনিটের নাম</td>
              <td> তারিখ  </td>
            </tr>`;
    ruadmitHTML += `<tr>
          <td>${rudata.NameofUnit}</td>
      <td style="width: 50%"> ${rudata.admitdnstart.toLocaleDateString("bn-BD", dateBangla)} </td>      
    </tr>`;
  }
  let RUuintwiseExam = UNIVERSITYDTA[ruid].examUnitwise; //admit true flase
  // * False for Unit-wise NO , true for Unit-wise yes
  if (RUuintwiseExam === false) {
    ruexmaHTML = `
            <tr>
              <th colspan="2" style="text-align: center;">  পরীক্ষার  তারিখ</th>
            </tr>
            <tr>
<td colspan="2">সাকল ইউনিটের পরীক্ষা আগামী ${UNIVERSITYDTA[ruid].examteststart.toLocaleDateString("bn-BD", dateBangla)} হতে ${UNIVERSITYDTA[ruid].examtestend.toLocaleDateString("bn-BD", dateBangla)} মধ্যে  ${UNIVERSITYDTA[ruid].examCenter} অনুষ্টিত হবে।  </td>      
    </tr>`;
  } else if (RUuintwiseExam === true) {
    ruexamheadhtml = ` <tr>
              <th colspan="2" style="text-align: center;"> পরীক্ষার তারিখ</th>
            </tr>
            <tr style="text-align: center;">
              <td>ইউনিটের নাম</td>
              <td> তারিখ</td>
            </tr>`;

    ruexmaHTML += `<tr>
<td>${rudata.NameofUnit}</td>
      <td style="width: 50%"> ${rudata.examdate.toLocaleDateString("bn-BD", dateBangla)} ${rudata.examtime} অনুষ্টিত হবে।  </td>
      
    </tr>`;
     ruexmacenterHTML = `<tr>
              <td>পরীক্ষার কেন্দ্র</td>
              <td>${UNIVERSITYDTA[ruid].examCenter}।</td>
            </tr>`;
  }
const ruexamresult = UNIVERSITYDTA[ruid].examresult;
const ruexamresultunit = UNIVERSITYDTA[ruid].examresultUnitwis;
if (ruexamresult === true && ruexamresultunit === false) {
  ruexamresultHtml =`
              <tr>
              <th colspan="2" style="text-align: center;"> পরীক্ষার ফলাফল</th>
            </tr>
              <tr>
              <td colspan="2">আগামী ${UNIVERSITYDTA[ruid].examresultdate.toLocaleDateString("bn-BD", dateBangla)} তারিখে ${UNIVERSITYDTA[ruid].examresulttme} প্রকাাশ করা হবে।</td>
            </tr>`;
}else if (ruexamresult === true && ruexamresultunit === true) {

  ruexamresultHtmlheaad =`<tr>
              <th colspan="2" style="text-align: center;"> পরীক্ষার ফলাফল</th>
            </tr>
            <tr style="text-align: center;">
              <td>ইউনিটের নাম</td>
              <td> তারিখ</td>
            </tr>`
  ruexamresultHtml +=`
            
            <tr>
              <td>${rudata.NameofUnit} </td>
              <td>${rudata.examresultdate.toLocaleDateString("bn-BD", dateBangla)} তারিখে ${rudata.examresulttme} প্রকাাশ করা হবে।</td>
            </tr>`;
}
  // exam center
 
});
// const
// ? table output section
//du
const ruNoticePUB= UNIVERSITYDTA[ruid].noticepub;
if (ruNoticePUB === true) {
    RUfinalopt = untableHTMLHead +
  rutableResultHTML + //du reuslt
  
  tableFooter+
  note;
} else {
  RUfinalopt = `${notnoticePUb}`
}
document.getElementById("ru_table_output").innerHTML =  RUfinalopt;

//ru 
// ? table output section

let jnutableResultHTML = "";
let jnutaelfee = "";
let jnuadmitDNHeadhtml = "";
let jnuadmitHTML = "";
let jnuexamheadhtml = "";
let jnuexmaHTML = "";
let jnuexmacenterHTML = "";
let jnuexamresultHtml = "";
let jnuexamresultHtmlheaad = "";

JNUInfo.forEach(function (jnudata) {
  // du = 0
  jnutableResultHTML += `<tr>
      <td>${jnudata.NameofUnit}</td>
      <td style="width: 50%"> ${jnudata.result}</td>
    </tr>  <!-- Result-->`;
  jnutaelfee += `<tr>
      <td>${jnudata.NameofUnit}</td>
      <td style="width: 50%"> ${jnudata.applyfee.toLocaleString("bn-BD")} (${jnudata.applyfeebd}) </td>
    </tr>`;
  // ?fee section
  // admitdnunitwise:tjnue,
  let uintwiseADJNU = UNIVERSITYDTA[jnuid].admitdnunitwise; //admit tjnue flase
  let admitdnjnu = UNIVERSITYDTA[jnuid].admitdn; //admit tjnue flase
  if (admitdnjnu === true && uintwiseADJNU === false) {
    jnuadmitHTML = `<tr>
              <th colspan="2" style="text-align: center;"> প্রবেশপত্র সংগ্রহের তারিখ</th>
            </tr>
            <tr>
      <td colspan="2">সাকল ইউনিটের প্রবেশপত্র ডাউনলোডের আগামী ${UNIVERSITYDTA[jnuid].admitDNUnitwisdatestart.toLocaleDateString("bn-BD", dateBangla)} ${UNIVERSITYDTA[jnuid].admitDNUnitwistimestart} হতে ${UNIVERSITYDTA[jnuid].admitDNUnitwisdateend.toLocaleDateString("bn-BD", dateBangla)} ${UNIVERSITYDTA[jnuid].admitDNUnitwistimeend} পর্যন্ত প্রবেশপত্র সংগ্রহ করা যাবে।</td>
    </tr>`;
  } else if (admitdnjnu === true && uintwiseADJNU === true) {
    jnuadmitDNHeadhtml = `
            <tr>
              <th colspan="2" style="text-align: center;"> প্রবেশপত্র সংগ্রহের তারিখ</th>
            </tr>
            <tr style="text-align: center;">
              <td>ইউনিটের নাম</td>
              <td> তারিখ  </td>
            </tr>`;
    jnuadmitHTML += `<tr>
<td>${jnudata.NameofUnit}</td>
      <td style="width: 50%"> ${jnudata.admitdnstart.toLocaleDateString("bn-BD", dateBangla)} </td>
      
    </tr>`;
  }
  let JNUuintwiseExam = UNIVERSITYDTA[jnuid].examUnitwise; //admit tjnue flase
  // * False for Unit-wise NO , tjnue for Unit-wise yes
  if (JNUuintwiseExam === false) {
    jnuexmaHTML = `
            <tr>
              <th colspan="2" style="text-align: center;">  পরীক্ষার  তারিখ</th>
            </tr>
            <tr>
<td colspan="2">সাকল ইউনিটের পরীক্ষা আগামী ${UNIVERSITYDTA[jnuid].examteststart.toLocaleDateString("bn-BD", dateBangla)} হতে ${UNIVERSITYDTA[jnuid].examtestend.toLocaleDateString("bn-BD", dateBangla)} ${UNIVERSITYDTA[jnuid].examCenter} মধ্যে অনুষ্টিত হবে।  </td>      
    </tr>`;
  } else if (JNUuintwiseExam === true) {
    jnuexamheadhtml = ` <tr>
              <th colspan="2" style="text-align: center;"> পরীক্ষার তারিখ</th>
            </tr>
            <tr style="text-align: center;">
              <td>ইউনিটের নাম</td>
              <td> তারিখ</td>
            </tr>`;

    jnuexmaHTML += `<tr>
<td>${jnudata.NameofUnit}</td>
      <td style="width: 50%"> ${jnudata.examdate.toLocaleDateString("bn-BD", dateBangla)} ${jnudata.examtime} অনুষ্টিত হবে।  </td>
      
    </tr>`;
    jnuexmacenterHTML = `<tr>
              <td>পরীক্ষার কেন্দ্র</td>
              <td>${UNIVERSITYDTA[jnuid].examCenter} বিশ্ববিদ্যালয়ে অনুষ্ঠিত হবে  ।</td>
            </tr>`;
  }
  const jnuexamresult = UNIVERSITYDTA[jnuid].examresult;
  const jnuexamresultunit = UNIVERSITYDTA[jnuid].examresultUnitwis;
  if (jnuexamresult === true && jnuexamresultunit === false) {
    jnuexamresultHtml = `<tr>
              <td>পরীক্ষার ফলাফল</td>
              <td>${UNIVERSITYDTA[jnuid].examresultdate.toLocaleDateString("bn-BD", dateBangla)} তারিখে ${UNIVERSITYDTA[jnuid].examresulttme} প্রকাাশ করা হবে।</td>
            </tr>`;
  } else if (jnuexamresult === true && jnuexamresultunit === true) {
    jnuexamresultHtmlheaad = `<tr>
              <th colspan="2" style="text-align: center;"> পরীক্ষার ফলাফল</th>
            </tr>
            <tr style="text-align: center;">
              <td>ইউনিটের নাম</td>
              <td> তারিখ</td>
            </tr>`;
    jnuexamresultHtml += `
            
            <tr>
              <td>${jnudata.NameofUnit} </td>
              <td>${jnudata.examresultdate.toLocaleDateString("bn-BD", dateBangla)} তারিখে ${jnudata.examresulttme} প্রকাাশ করা হবে।</td>
            </tr>`;
  }
  // exam center
});
// const
// ? table output section
const jnuNoticePUB= UNIVERSITYDTA[jnuid].noticepub;
if (jnuNoticePUB === true) {
    jnufinalopt = untableHTMLHead +
  jnutableResultHTML + //du reuslt
  tableFooter+
  note;
} else {
  jnufinalopt = notnoticePUb
}


document.getElementById("jnu_table_output").innerHTML =jnufinalopt;

let gsttableResultHTML = "";
let gsttaelfee = "";
let gstadmitDNHeadhtml = "";
let gstadmitHTML = "";
let gstexamheadhtml = "";
let gstexmaHTML = "";
let gstexmacenterHTML = "";
let gstexamresultHtml = "";
let gstexamresultHtmlheaad = "";

GSTInfo.forEach(function (gstdata) {
  // du = 0
  gsttableResultHTML += `<tr>
      <td>${gstdata.NameofUnit}</td>
      <td style="width: 50%"> ${gstdata.result}</td>
    </tr>  <!-- Result-->`;
  gsttaelfee += `<tr>
      <td>${gstdata.NameofUnit}</td>
      <td style="width: 50%"> ${gstdata.applyfee.toLocaleString("bn-BD")} (${gstdata.applyfeebd}) </td>
    </tr>`;
  // ?fee section
  // admitdnunitwise:tgste,
  let uintwiseADGST = UNIVERSITYDTA[gstid].admitdnunitwise; //admit tgste flase
  if (uintwiseADGST === false) {
    gstadmitHTML = `<tr>
              <th colspan="2" style="text-align: center;"> প্রবেশপত্র সংগ্রহের তারিখ</th>
            </tr>
            <tr>
      <td colspan="2">সাকল ইউনিটের প্রবেশপত্র ডাউনলোডের আগামী ${UNIVERSITYDTA[gstid].admitDNUnitwisdatestart.toLocaleDateString("bn-BD", dateBangla)} ${UNIVERSITYDTA[gstid].admitDNUnitwistimestart} হতে ${UNIVERSITYDTA[gstid].admitDNUnitwisdateend.toLocaleDateString("bn-BD", dateBangla)} ${UNIVERSITYDTA[gstid].admitDNUnitwistimeend} পর্যন্ত প্রবেশপত্র সংগ্রহ করা যাবে।</td>
    </tr>`;
  } else if (uintwiseADGST === true) {
    gstadmitDNHeadhtml = `
            <tr>
              <th colspan="2" style="text-align: center;"> প্রবেশপত্র সংগ্রহের তারিখ</th>
            </tr>
            <tr style="text-align: center;">
              <td>ইউনিটের নাম</td>
              <td> তারিখ  </td>
            </tr>`;
    gstadmitHTML += `<tr>
<td>${gstdata.NameofUnit}</td>
      <td style="width: 50%"> ${gstdata.admitdnstart.toLocaleDateString("bn-BD", dateBangla)} </td>
      
    </tr>`;
  }
  let GSTuintwiseExam = UNIVERSITYDTA[gstid].examUnitwise; //admit tgste flase
  // * False for Unit-wise NO , tgste for Unit-wise yes
  if (GSTuintwiseExam === false) {
    gstexmaHTML = `
            <tr>
              <th colspan="2" style="text-align: center;">  পরীক্ষার  তারিখ</th>
            </tr>
            <tr>
<td colspan="2">সাকল ইউনিটের পরীক্ষা আগামী ${UNIVERSITYDTA[gstid].examteststart.toLocaleDateString("bn-BD", dateBangla)} হতে ${UNIVERSITYDTA[gstid].examtestend.toLocaleDateString("bn-BD", dateBangla)} ${UNIVERSITYDTA[gstid].examCenter} মধ্যে অনুষ্টিত হবে।  </td>      
    </tr>`;
  } else if (GSTuintwiseExam === true) {
    gstexamheadhtml = ` <tr>
              <th colspan="2" style="text-align: center;"> পরীক্ষার তারিখ</th>
            </tr>
            <tr style="text-align: center;">
              <td>ইউনিটের নাম</td>
              <td> তারিখ</td>
            </tr>`;

    gstexmaHTML += `<tr>
<td>${gstdata.NameofUnit}</td>
      <td style="width: 50%"> ${gstdata.examdate.toLocaleDateString("bn-BD", dateBangla)} ${gstdata.examtime}  অনুষ্টিত হবে।  </td>
      
    </tr>`;
    gstexmacenterHTML = `<tr>
              <td>পরীক্ষার কেন্দ্র</td>
              <td>${UNIVERSITYDTA[gstid].examCenter}।</td>
            </tr>`;
  }
  const gstexamresult = UNIVERSITYDTA[gstid].examresult;
  const gstexamresultunit = UNIVERSITYDTA[gstid].examresultUnitwis;
  if (gstexamresult === true && gstexamresultunit === false) {
    gstexamresultHtml = `<tr>
              <td>পরীক্ষার ফলাফল</td>
              <td>${UNIVERSITYDTA[gstid].examresultdate.toLocaleDateString("bn-BD", dateBangla)} তারিখে ${UNIVERSITYDTA[gstid].examresulttme} প্রকাাশ করা হবে।</td>
            </tr>`;
  } else if (gstexamresult === true && gstexamresultunit === true) {
    gstexamresultHtmlheaad = `<tr>
              <th colspan="2" style="text-align: center;"> পরীক্ষার ফলাফল</th>
            </tr>
            <tr style="text-align: center;">
              <td>ইউনিটের নাম</td>
              <td> তারিখ</td>
            </tr>`;
    gstexamresultHtml += `
            
            <tr>
              <td>${gstdata.NameofUnit} </td>
              <td>${gstdata.examresultdate.toLocaleDateString("bn-BD", dateBangla)} তারিখে ${gstdata.examresulttme} প্রকাাশ করা হবে।</td>
            </tr>`;
  }
  // exam center
});
// const
// ? table output section
//du
const gstNoticePUB= UNIVERSITYDTA[gstid].noticepub;
if (gstNoticePUB === true) {
  gstfinalopt=  untableHTMLHead +
  gstexamresultHtmlheaad +
  gstexamresultHtml +
  tableFooter+
  note;
} else {
  gstfinalopt = `${notnoticePUb}`
}
document.getElementById("gst_table_output").innerHTML =gstfinalopt;
//gst

let jutableResultHTML = "";
let jutaelfee = "";
let juadmitDNHeadhtml = "";
let juadmitHTML = "";
let juexamheadhtml = "";
let juexmaHTML = "";
let juexmacenterHTML = "";
let juexamresultHtml = "";
let juexamresultHtmlheaad = "";

JUInfo.forEach(function (judata) {
  // du = 0
  jutableResultHTML += `<tr>
      <td>${judata.NameofUnit}</td>
      <td style="width: 50%"> ${judata.result}</td>
    </tr>  <!-- Result-->`;
  jutaelfee += `<tr>
      <td>${judata.NameofUnit}</td>
      <td style="width: 50%"> ${judata.applyfee.toLocaleString("bn-BD")} (${judata.applyfeebd}) </td>
    </tr>`;
  // ?fee section
  // admitdnunitwise:true,
  let uintwiseADJU = UNIVERSITYDTA[juid].admitdnunitwise; //admit true flase
  if (uintwiseADJU === false) {
    juadmitHTML = `
            <tr>
      <td colspan="2">সাকল ইউনিটের প্রবেশপত্র ডাউনলোডের আগামী ${UNIVERSITYDTA[juid].admitDNUnitwisdatestart.toLocaleDateString("bn-BD", dateBangla)} ${UNIVERSITYDTA[juid].admitDNUnitwistimestart} হতে ${UNIVERSITYDTA[juid].admitDNUnitwisdateend.toLocaleDateString("bn-BD", dateBangla)} ${UNIVERSITYDTA[juid].admitDNUnitwistimeend} পর্যন্ত প্রবেশপত্র সংগ্রহ করা যাবে।</td>
    </tr>`;
  } else if (uintwiseADJU === true) {
    juadmitDNHeadhtml = `
            <tr>
              <th colspan="2" style="text-align: center;"> প্রবেশপত্র সংগ্রহের তারিখ</th>
            </tr>
            <tr style="text-align: center;">
              <td>ইউনিটের নাম</td>
              <td> তারিখ  </td>
            </tr>`;
    juadmitHTML += `<tr>
<td>${judata.NameofUnit}</td>
      <td style="width: 50%"> ${judata.admitdnstart.toLocaleDateString("bn-BD", dateBangla)} </td>
      
    </tr>`;
  }
  let JUuintwiseExam = UNIVERSITYDTA[juid].examUnitwise; //admit true flase
  // * False for Unit-wise NO , true for Unit-wise yes
  if (JUuintwiseExam === false) {
    juexmaHTML = `
            <tr>
              <th colspan="2" style="text-align: center;">  পরীক্ষার  তারিখ</th>
            </tr>
            <tr>
<td colspan="2">সাকল ইউনিটের পরীক্ষা আগামী ${UNIVERSITYDTA[juid].examteststart.toLocaleDateString("bn-BD", dateBangla)} হতে ${UNIVERSITYDTA[juid].examtestend.toLocaleDateString("bn-BD", dateBangla)} মধ্যে অনুষ্টিত হবে।  </td>      
    </tr>`;
  } else if (JUuintwiseExam === true) {
    juexamheadhtml = ` <tr>
              <th colspan="2" style="text-align: center;"> পরীক্ষার তারিখ</th>
            </tr>
            <tr style="text-align: center;">
              <td>ইউনিটের নাম</td>
              <td> তারিখ</td>
            </tr>`;

    juexmaHTML += `<tr>
<td>${judata.NameofUnit}</td>
      <td style="width: 50%"> ${judata.examdate.toLocaleDateString("bn-BD", dateBangla)} ${judata.examtime}  অনুষ্টিত হবে।  </td>
      
    </tr>`;
    juexmacenterHTML = `<tr>
              <td>পরীক্ষার কেন্দ্র</td>
              <td>${UNIVERSITYDTA[juid].examCenter}।</td>
            </tr>`;
  }
  const juexamresult = UNIVERSITYDTA[juid].examresult;
  const juexamresultunit = UNIVERSITYDTA[juid].examresultUnitwis;
  if (juexamresult === true && juexamresultunit === false) {
    juexamresultHtml = `<tr>
              <td>পরীক্ষার ফলাফল</td>
              <td>${UNIVERSITYDTA[juid].examresultdate.toLocaleDateString("bn-BD", dateBangla)} তারিখে ${UNIVERSITYDTA[juid].examresulttme} প্রকাাশ করা হবে।</td>
            </tr>`;
  } else if (juexamresult === true && juexamresultunit === true) {
    juexamresultHtmlheaad = `<tr>
              <th colspan="2" style="text-align: center;"> পরীক্ষার ফলাফল</th>
            </tr>
            <tr style="text-align: center;">
              <td>ইউনিটের নাম</td>
              <td> তারিখ</td>
            </tr>`;
    juexamresultHtml += `
            
            <tr>
              <td>${judata.NameofUnit} </td>
              <td>${judata.examresultdate.toLocaleDateString("bn-BD", dateBangla)} তারিখে ${judata.examresulttme} প্রকাাশ করা হবে।</td>
            </tr>`;
  }
  // exam center
});
const juNoticePUB= UNIVERSITYDTA[juid].noticepub;
if (juNoticePUB === true) {
  jufinalopt=
  untableHTMLHead +
  jutableResultHTML + //du reuslt
  tableFooter+
  note;
} else {
  jufinalopt = `${notnoticePUb}`
}
document.getElementById("ju_table_output").innerHTML =jufinalopt;
//ju