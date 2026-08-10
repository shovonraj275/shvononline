function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
function convertToBanglaNumber(number) {
  const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

  return number.toString().replace(/\d/g, (digit) => banglaDigits[digit]);
}
const am10 = convertToBanglaNumber(10);
const am10bd = ` সকাল ${am10} টা`;
const am11 = convertToBanglaNumber(11);
const am11bd = ` সকাল ${am11} টা`;
// const am11 = convertToB1nglaNumber(11);
// const am11bd = `সকাল ${am11} টা`;
const am12 = convertToBanglaNumber(12);
const am12bd = ` দুপুর ${am12} টা`;
const pm04 = convertToBanglaNumber(4);
const pm04bd = ` বিকাল ${pm04} টা`;
const pm05 = convertToBanglaNumber(5);
const pm05bd = ` বিকাল ${pm05} টা`;
const pm11 = convertToBanglaNumber(11);
const pm11bd = ` রাত ${pm11} টা`;
const half = convertToBanglaNumber(30);
const halfbd = ` ${half} মিনিট`;
const time59m = convertToBanglaNumber(59);
const time59mbd = `${time59m} মিনিট`;
const lastLine = `${pm11bd} ${time59mbd}`;

// taka to word
function numberToBanglaWords(num) {
  const units = [
    "",
    "এক",
    "দুই",
    "তিন",
    "চার",
    "পাঁচ",
    "ছয়",
    "সাত",
    "আট",
    "নয়",
  ];
  // const teens = ['দশ 1144444', 'এগারো', 'বারো', 'তেরো', 'চৌদ্দ', 'পনেরো', 'ষোলো', 'সতেরো', 'আঠারো', 'ঊনিশ'];q`
  const teentdss = [
    "",
    "এক",
    "দুই",
    "তিন",
    "চার",
    "পাঁচ",
    "ছয়",
    "সাত",
    "আট",
    "নয়",
    "দশ",
    "এগারো",
    "বারো",
    "তেরো",
    "চৌদ্দ",
    "পনেরো",
    "ষোলো",
    "সতেরো",
    "আঠারো",
    "ঊনিশ",
    "বিশ ",
    "একুশ",
    "বাইশ",
    "তেইশ",
    "চব্বিশ",
    "পঁচিশ",
    "ছাব্বিশ",
    "সাতাশ",
    "আটাশ",
    "উনত্রিশ",
    "ত্রিশ",
    "একত্রিশ",
    "বত্রিশ",
    "তেত্রিশ",
    "চৌত্রিশ",
    "পঁইত্রিশ",
    "ছত্রিশ",
    "সাঁইত্রিশ",
    "আটত্রিশ",
    "উনচল্লিশ",
    "চল্লিশ",
    "একচল্লিশ",
    "বিয়াল্লিশ",
    "তেতাল্লিশ",
    "চুয়াল্লিশ",
    "পঁয়তাল্লিশ",
    "ছিচল্লিশ",
    "সাতচল্লিশ",
    "আটচল্লিশ",
    "উনপঞ্চাশ",
    "পঞ্চাশ",
    "একান্ন",
    "বায়ান্ন",
    "তিয়ান্ন",
    "চুয়ান্ন",
    "পঞ্চান্ন",
    "ছাপান্ন",
    "সাতান্ন",
    "আটান্ন",
    "উনষাট",
    "ষাট",
    "একষাট",
    "বাষট্টি",
    "তেষট্টি",
    "চৌষট্টি",
    "পঁইষট্টি",
    "ছেষট্টি",
    "সাতষট্টি",
    "আটষট্টি",
    "উনসত্তর",
    "সত্তর",
    "একাত্তর",
    "বাহাত্তর",
    "তিয়াত্তর",
    "চুয়াত্তর",
    "পঁইত্তর",
    "ছিয়াত্তর",
    "সাতাত্তর",
    "আটাত্তর",
    "উনআশি",
    "আশি",
    "একাশি",
    "বিরাশি",
    "তিরাশি",
    "চুরাশি",
    "পঁইরাশি",
    "ছিয়াশি",
    "সাতাশি",
    "আটাশি",
    "উননব্বই",
    "নব্বই",
    "একানব্বই",
    "বিরানব্বই",
    "তিরানব্বই",
    "চুরানব্বই",
    "পঁচ্চানব্বই",
    "ছিয়ানব্বই",
    "সাতানব্বই",
    "আটানব্বই",
    "নিরানব্বই",
  ];

  const tens = [
    "",
    "দশ",
    "বিশ",
    "ত্রিশ ",
    "চল্লিশ ",
    "পঞ্চাশ",
    "ষাট",
    "সত্তর",
    "আশি",
    "নব্বই",
  ];

  if (num === 0) return "শূন্য";
  if (num < 100) return teentdss[num] + " টাকা মাত্র।";
  if (num < 100)
    return (
      tens[Math.floor(num / 10)] +
      (num % 10 !== 0 ? " " + units[num % 10] : "" + " টাকা মাত্র।")
    ); //10,20,30
  if (num < 1000)
    return (
      units[Math.floor(num / 100)] +
      "শত " +
      (num % 100 !== 0 ? numberToBanglaWords(num % 100) : " টাকা মাত্র।")
    );
  if (num < 100000)
    return (
      teentdss[Math.floor(num / 1000)] +
      " হাজার    " +
      (num % 1000 !== 0 ? numberToBanglaWords(num % 1000) : " টাকা মাত্র।")
    );
  if (num < 10000000)
    return (
      teentdss[Math.floor(num / 100000)] +
      " লাক্ষ   " +
      (num % 100000 !== 0 ? numberToBanglaWords(num % 100000) : " টাকা মাত্র।")
    );
  if (num < 1000000000)
    return (
      teentdss[Math.floor(num / 10000000)] +
      " কোটি   " +
      (num % 10000000 !== 0
        ? numberToBanglaWords(num % 10000000)
        : " টাকা মাত্র।")
    );

  return num; // Extendable for thousands/lakhs
}
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
var schooldom = document.getElementById("school");
var collegedom = document.getElementById("college");
var universitydom = document.getElementById("university");
var jobdom = document.getElementById("job");
var madicaldom = document.getElementById("medical");
function school() {
  schooldom.style.display = "block";
  collegedom.style.display = "none";
  universitydom.style.display = "none";
  jobdom.style.display = "none";
  madicaldom.style.display = "none";
}
function college() {
  schooldom.style.display = "none";
  collegedom.style.display = "block";
  universitydom.style.display = "none";
  jobdom.style.display = "none";
  madicaldom.style.display = "none";
}
function university() {
  schooldom.style.display = "none";
  collegedom.style.display = "none";
  universitydom.style.display = "block";
  jobdom.style.display = "none";
  madicaldom.style.display = "none";
}
function job() {
  schooldom.style.display = "none";
  collegedom.style.display = "none";
  universitydom.style.display = "none";
  jobdom.style.display = "block";
  madicaldom.style.display = "none";
}
function medical() {
  schooldom.style.display = "none";
  collegedom.style.display = "none";
  universitydom.style.display = "none";
  jobdom.style.display = "none";
  madicaldom.style.display = "block";
}

// ? ===================================== Onclick =========================================
// ? ===================================== noice =========================================

const dateBangla = {
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "long",
};
const calendarDate = { year: "numeric", month: "2-digit", day: "2-digit" };
const today = new Date();
const todays = today.toISOString().split("T")[0];
//all tableHead
const tableHTMLHeadall = `<table>
    <tr>
      <th colspan="2" style="text-align: center;">আবেদনের যোগ্যতা</th>
    </tr>
    `;
//university tableHead
const universitytableHTMLHead = `<table>
    <tr>
      <th colspan="2" style="text-align: center;">আবেদনের যোগ্যতা</th>
    </tr>
     <tr style="text-align: center;">
              <td>ইউনিটের নাম</td>
              <td> ফলাফল</td>
            </tr>`;
const tableFooter = `</table>`;
//all apply fee
const applyfeeheaderall = `
            <tr>
              <th colspan="2" style="text-align: center;">অনলাইনে আবেদনের টাকার পরিমান</th>
            </tr>`;
//apply time
const applytimetableheaderall = `
            <tr>
              <th colspan="2" style="text-align: center;">অনলাইনে আবেদনের টাকার পরিমান</th>
            </tr>`;
// univarsity unit apply fee
const univarsityapplyfeeunit = `
            <tr>
              <th colspan="2" style="text-align: center;">অনলাইনে আবেদনের টাকার পরিমান</th>
            </tr>
            <tr style="text-align: center;">
              <td>ইউনিটের নাম</td>
              <td> টাকার পরিমাণ</td>
            </tr>`;
// const unadmitcardheader = `
//             <tr>
//               <th colspan="2" style="text-align: center;">প্রবেশপত্র সংগ্রহের সময়সৃচী</th>
//             </tr>
//             `;
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
    admitDNUnitwistimeend: `${lastLine}`, // start date
    examCenter: "বিভাগীয় শহরে অনুষ্ঠিত হবে", //exam center.
    examUnitwise: true, // False for Unit-wise NO , true for Unit-wise yes
    examteststart: new Date("2026-08-20"), // examdate start
    examtestend: new Date("2026-08-22"), // examdate end
    examresult :true,
    examresultUnitwis :true,
    examresultdate : new Date("2026-09-20"),
    examresulttme : `${pm04bd}`,
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
    admitDNUnitwistimeend: `${lastLine}`, // start date
    examCenter: "বিভাগীয় শহরে অনুষ্ঠিত হবে", //exam center.
    examUnitwise: true, // False for Unit-wise NO , true for Unit-wise yes
    examteststart: new Date("2026-08-20"), // examdate start
    examtestend: new Date("2026-08-22"), // examdate end
    examresult :true,
    examresultUnitwis :true,
    examresultdate : new Date("2026-09-20"),
    examresulttme : `${pm04bd}`,
  },
]
let madicalOPTmian = "";
MADICALADDATA.forEach(function (madicaldata) {
  madicalOPTmian += `<div class="NotiecList">
        <div class="nameofevent" onclick="${madicaldata.onclick}"> <!-- on click-->
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

const mbbsid = MADICALADDATA[0];
const mbbsnoticepub = mbbsid.noticepub;
 if (mbbsnoticepub === true){
        mbbsoutput = `
        <table>
          
          <th>
            <td></td>
          </th>
        </table>
        `
      }else if(mbbsnoticepub === false){
        mbbsoutput = notnoticePUb;
      }
document.getElementById("mbbs_table_output").innerHTML +=mbbsoutput;
function mbbs() {
  const mbbsoutput = document.getElementById("mbbs_output");
  const mbbsIcon = document.getElementById("mbbs_icon");
  if (mbbsoutput.style.display === "none") {
    mbbsoutput.style.display = "block";
    mbbsIcon.classList.remove("fa-plus");
    mbbsIcon.classList.add("fa-minus");
  } else {
    mbbsoutput.style.display = "none";
    mbbsIcon.classList.remove("fa-minus");
    mbbsIcon.classList.add("fa-plus");
  }
}
function afmc() {
  const afmcoutput = document.getElementById("afmc_output");
  const afmcIcon = document.getElementById("afmc_icon");
  if (afmcoutput.style.display === "none") {
    afmcoutput.style.display = "block";
    afmcIcon.classList.remove("fa-plus");
    afmcIcon.classList.add("fa-minus");
  } else {
    afmcoutput.style.display = "none";
    afmcIcon.classList.remove("fa-minus");
    afmcIcon.classList.add("fa-plus");
  }
}

//! universtiuy data
const UNIVERSITYDTA = [
  {
    id:0,
    NameEng: "Dhaka university", // name of english
    NameBng: "ঢাকা বিশ্ববিদ্যালয়", // name of bangla
    Images: "du.png", //logo
    onclick: "du()", // onclick
    OutptuID: "du_output", // output div
    IconID: "du_icon", //icon
    tabeloutputId: "du_table_output", //table id
    outmain: "du_output_main", //main out put
    noticepub : true,
    notice: "DU.jpg.jpeg", // notce
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
    admitDNUnitwistimeend: `${lastLine}`, // start date
    examCenter: "বিভাগীয় শহরে অনুষ্ঠিত হবে", //exam center.
    examUnitwise: true, // False for Unit-wise NO , true for Unit-wise yes
    examteststart: new Date("2026-08-20"), // examdate start
    examtestend: new Date("2026-08-22"), // examdate end
    examresult :true,
    examresultUnitwis :true,
    examresultdate : new Date("2026-09-20"),
    examresulttme : `${pm04bd}`,
  },
  {
    id:1,
    NameEng: "Rajshahi university", // name english
    NameBng: "রাজশাহী বিশ্ববিদ্যালয়", // name of bangla
    Images: "ru.png", // logo
    onclick: "ru()", // onclick
    OutptuID: "ru_output", // output div
    IconID: "ru_icon",
    outmain: "ru_output_main", //main out put
    noticepub : true,
    tabeloutputId: "ru_table_output", //table id
    notice: "ru.pdf", // notce
    appweb: "https://application.ru.ac.bd/", //main web
    mainweb: "https://www.ru.ac.bd/", //main web
    appDateStart: new Date("2026-08-01"), // date start
    appDateend: new Date("2026-08-14"), // date end
    admitdn: true,
    admitdnunitwise: true, // False for Unit-wise NO , true for Unit-wise yes  Unit-wise Admit Card Download
    admitDNUnitwisdatestart: new Date("2026-08-15"), // start date
    admitDNUnitwistimestart: ``, // start time
    admitDNUnitwisdateend: new Date("2026-08-18"), // start date
    admitDNUnitwistimeend: `${lastLine}`, // start date
    examCenter: "নিজেস্ব ক্যাম্পাসে ", //exam center.
    examUnitwise: true, // False for Unit-wise NO , true for Unit-wise yes
    examteststart: new Date("2026-08-20"), // examdate start
    examtestend: new Date("2026-08-22"), // examdate end
    examresult : true,
    examresultUnitwis :true,
    examresultdate : new Date("2026-09-19"),
    examresulttme : `${pm05bd}`,
  },
  {
    id:2,
    NameEng: "Jagannath  university",
    NameBng: "জগন্নাথ  বিশ্ববিদ্যালয়",
    Images: "jnu.png",
    onclick: "jnu()",
    OutptuID: "jnu_output",
    tabeloutputId: "jnu_table_output", //table id
    IconID: "jnu_icon",
    outmain: "jnu_output_main", //main out put
    noticepub : true,
    notice: "JNU.pdf", // notce
    appweb: "https://jnu.ac.bd/newsite/getdata/6001", //main web
    mainweb: "https://www.jnu.ac.bd/", //main web
    appDateStart: new Date("2026-08-01"), // date start
    appDateend: new Date("2026-08-25"), // date end
    admitdn: true,
    admitdnunitwise: true, // False for Unit-wise NO , true for Unit-wise yes  Unit-wise Admit Card Download
    admitDNUnitwisdatestart: new Date("2026-08-15"), // start date
    admitDNUnitwistimestart: ``, // start time
    admitDNUnitwisdateend: new Date("2026-08-18"), // start date
    admitDNUnitwistimeend: `${lastLine}`, // start date
    examCenter: "ঢাকা, রাজশাহী ও কুমিল্লা", //exam center.
    examUnitwise: true, // False for Unit-wise NO , true for Unit-wise yes
    examteststart: new Date("2026-08-20"), // examdate start
    examtestend: new Date("2026-08-22"), // examdate end
    examresult :true,
    examresultUnitwis :true,
    examresultdate : new Date("2026-09-26"),
    examresulttme : `${pm05bd}`,
  },
  {
    id:3,
    NameEng: "General, Science and Technology",
    NameBng: "গুচ্ছভুক্ত  বিশ্ববিদ্যালয়",
    Images: "gst.png",
    onclick: "gst()",
    OutptuID: "gst_output",
    tabeloutputId: "gst_table_output", //table id
    IconID: "gst_icon",
    outmain: "gst_output_main", //main out put
    // *  notice
    noticepub : true,
    notice: "GST.pdf", // notce
    appweb: "https://gstadmission.ac.bd/site/gst-universities", //main web
    mainweb: "https://gstadmission.ac.bd/site/gst-universities", //main web
    // * time 
    appDateStart: new Date("2026-08-01"), // date start
    appDateend: new Date("2026-08-25"), // date end
    // *Admitcard
    admitdn: true,
    admitdnunitwise: false, // False for Unit-wise NO , true for Unit-wise yes  Unit-wise Admit Card Download
    admitDNUnitwisdatestart: new Date("2026-08-15"), // start date
    admitDNUnitwistimestart: ``, // start time
    admitDNUnitwisdateend: new Date("2026-08-18"), // start date
    admitDNUnitwistimeend: `${lastLine}`, // start date
    // *center
    examCenter: "গুচ্ছভুক্ত  বিশ্ববিদ্যালয় গুলোতে অনুষ্ঠিত হবে", //exam center.
    examUnitwise: true, // False for Unit-wise NO , true for Unit-wise yes
    examteststart: new Date("2026-08-20"), // examdate start
    examtestend: new Date("2026-08-22"), // examdate end
    // *result
    examresult :true,
    examresultUnitwis :false,
    examresultdate : new Date("2026-09-26"),
    examresulttme : `${pm05bd}`,
  },
  {
    id:4,
    NameEng: "jahangirnagar university",
    NameBng: "জাহাঙ্গীরনগর বিশ্ববিদ্যালয়",
    Images: "ju.png",
    onclick: "ju()",
    OutptuID: "ju_output",
    tabeloutputId: "ju_table_output", //table id
    IconID: "ju_icon",
    outmain: "ju_output_main", //main out put
    noticepub : true,
    notice: "JU.pdf", // notce
    notice: "JU.pdf", // notce
    appweb: "https://gstadmission.ac.bd/site/gst-universities", //main web
    mainweb: "https://gstadmission.ac.bd/site/gst-universities", //main web
    appDateStart: new Date("2026-07-01"), // date start
    appDateend: new Date("2026-08-18"), // date end
    admitdn: true,
    admitdnunitwise: false, // False for Unit-wise NO , true for Unit-wise yes  Unit-wise Admit Card Download
    admitDNUnitwisdatestart: new Date("2026-08-15"), // start date
    admitDNUnitwistimestart: ``, // start time
    admitDNUnitwisdateend: new Date("2026-08-18"), // start date
    admitDNUnitwistimeend: `${lastLine}`, // start date
    examCenter: "জাহাঙ্গীরনগর বিশ্ববিদ্যালয়", //exam center.
    examUnitwise: false, // False for Unit-wise NO , true for Unit-wise yes
    examteststart: new Date("2026-08-20"), // examdate start
    examtestend: new Date("2026-08-29"), // examdate end
    examresult :false,
    examresultUnitwis :true,
    examresultdate : new Date("2026-09-26"),
    examresulttme : `${pm05bd}`,
  },
];
//! universtiuy data
 const duid = UNIVERSITYDTA[0].id;
 const ruid = UNIVERSITYDTA[1].id;
 const jnuid = UNIVERSITYDTA[2].id;
 const gstid = UNIVERSITYDTA[3].id;
 const juid = UNIVERSITYDTA[4].id;
const DUInfo = [
  {
    NameofUnit: "ক - ইউনিট (বিজ্ঞান শাখা)", // name of unit
    result:
      "মাধ্যমিক (এস.এস.সি.) তে চতুর্থ বিষয় সহ ন্যূনতম ৩.৫০ ও উচ্চ         মাধ্যমিক (এইচ.এস.সি.) তে চতুর্থ বিষয় সহ বিজ্ঞান বিভাগ হতে ন্যূনতম ৩.৫০ এবং্রাপ্ত জিপিএ-দ্বয়ের যোগফল ন্যূনতম ৮.০ হতে হবে।", //result
    applyfee: 1100, //fee
    applyfeebd: numberToBanglaWords(1100), // word bd
    admitdnstart: new Date("2026-08-03"), // admitcard download
    admitdnstartTtime: "", // admitcard download
    admitdnend: new Date("2026-08-05"), // admitcard download
    admitdnendTime: `${lastLine}`, // admitcard download
    examdate: new Date("2026-08-15"), // admitcard download
    examtime: `${am10bd}${halfbd}`, // admitcard download
    examresultdate : new Date("2026-09-18"),
    examresulttme : `${pm05bd} ${halfbd}`,
  },
  {
    NameofUnit: "খ - ইউনিট (মানবিক শাখা)",
    result:
      "মাধ্যমিক (এস.এস.সি.) তে চতুর্থ বিষয় সহ ন্যূনতম ৩.৫০ ও উচ্চ মাধ্যমিক (এইচ.এস.সি.) তে চতুর্থ বিষয় সহ ন্যূনতম ৩.৫০ মানবিক বিভাগ হতে এবং প্রপ্ত জিপিএ-দ্বয়ের যোগফল ন্যূনতম ৮.০ হতে হবে।", //result
    applyfee: 1100, // fee
    applyfeebd: numberToBanglaWords(1100), // word bd
    admitdnstart: new Date("2026-08-03"), // admitcard download date  start
    admitdnstartTtime: "", // admitcard download time start
    admitdnend: new Date("2026-08-05"), // admitcard download date  end
    admitdnendTime: `${lastLine}`, // admitcard download time end
    examdate: new Date("2026-08-15"), // exam date
    examtime: `${am10bd}${halfbd}`, // exam time
    examresultdate : new Date("2026-09-19"),
    examresulttme : `${pm05bd}`,
  },
  {
    NameofUnit: "গ - ইউনিট (ব্যবসায় শিক্ষা শাখা)",
    result:
      "মাধ্যমিক (এস.এস.সি.) তে চতুর্থ বিষয় সহ ন্যূনতম ৩.৫০ ও উচ্চ মাধ্যমিক (এইচ.এস.সি.) তে চতুর্থ বিষয় সহ ন্যূনতম ৩.৫০ ব্যবসায় শিক্ষা শাখা হতে এবং প্রপ্ত জিপিএ-দ্বয়ের যোগফল ন্যূনতম ৮.০ হতে হবে।", //result
    applyfee: 1100, // fee
    applyfeebd: numberToBanglaWords(1100), // word bd
    admitdnstart: new Date("2026-08-03"), // admitcard download date  start
    admitdnstartTtime: "", // admitcard download time start
    admitdnend: new Date("2026-08-05"), // admitcard download date  end
    admitdnendTime: `${lastLine}`, // admitcard download time end
    examdate: new Date("2026-08-15"), // exam date
    examtime: `${am10bd}${halfbd}`, // exam time
    examresultdate : new Date("2026-09-20"),
    examresulttme : `${pm05bd}`,
  },
  {
    NameofUnit: "ঘ - ইউনিট (বিভাগ পরিবর্তন) ",
    result:
      "মাধ্যমিক (এস.এস.সি.) তে চতুর্থ বিষয় সহ ন্যূনতম ৩.৫০ ও উচ্চ মাধ্যমিক (এইচ.এস.সি.) তে চতুর্থ বিষয় সহ ন্যূনতম ৩.৫০ হতে এবং প্রপ্ত জিপিএ-দ্বয়ের যোগফল ন্যূনতম ৮.০ হতে হবে। উলেখ্য সকল বিভাগে শিক্ষার্থী আবেদন করতে পাবে।", //result
    applyfee: 1100, // fee
    applyfeebd: numberToBanglaWords(1100), // word bd
    admitdnstart: new Date("2026-08-03"), // admitcard download date  start
    admitdnstartTtime: "", // admitcard download time start
    admitdnend: new Date("2026-08-05"), // admitcard download date  end
    admitdnendTime: `${lastLine}`, // admitcard download time end
    examdate: new Date("2026-08-15"), // exam date
    examtime: `${am10bd}${halfbd}`, // exam time
    examresultdate : new Date("2026-09-28"),
    examresulttme : `${pm05bd}`,
  },
];
const RUInfo = [
  {
    NameofUnit: "ক - ইউনিট (মানবিক শাখা)",
    result:
      "মানবিক শাখা থেকে উত্তীর্ণ আবেদনকারীদের এসএসসি/সমমান ও এইচএসসি/সমমান উভয় পরীক্ষায় (৪র্থ বিষয়সহ) ন্যূনতম জিপিএ ৩.০০ সহ মোট জিপিএ ৭.০০ পেতে হবে।", //result
    applyfee: 1120, // fee
    applyfeebd: numberToBanglaWords(1120), // word bd
    admitdnstart: new Date("2026-09-09"), // admitcard download date  start
    admitdnstartTtime: "", // admitcard download time start
    admitdnend: new Date("2026-09-13"), // admitcard download date  end
    admitdnendTime: `${lastLine}`, // admitcard download time end
    examdate: new Date("2026-09-14"), // exam date
    examtime: `${am11bd}${halfbd}`, // exam time
    examresultdate : new Date("2026-09-29"),
    examresulttme : `${pm05bd} ${halfbd}`,
  },
  {
    NameofUnit: "খ - ইউনিট (ব্যবসায় শিক্ষা শাখা)",
    result:
      "বাণিজ্য শাখা থেকে উত্তীর্ণ আবেদনকারীদের এসএসসি/সমমান ও এইচএসসি/সমমান উভয় পরীক্ষায় (৪র্থ বিষয়সহ) ন্যূনতম জিপিএ ৩.০০ সহ মোট জিপিএ ৭.০০ পেতে হবে।", //result
    applyfee: 1120, // fee
    applyfeebd: numberToBanglaWords(1120), // word bd
    admitdnstart: new Date("2026-09-15"), // admitcard download date  start
    admitdnstartTtime: "", // admitcard download time start
    admitdnend: new Date("2026-09-18"), // admitcard download date  end
    admitdnendTime: `${lastLine}`, // admitcard download time end
    examdate: new Date("2026-09-19"), // exam date
    examtime: `${am10bd}`, // exam time
    examresultdate : new Date("2026-09-29"),
    examresulttme : `${pm05bd}`,
  },
  {
    NameofUnit: "গ - ইউনিট (বিজ্ঞান শাখা)",
    result:
      "বিজ্ঞান শাখা থেকে উত্তীর্ণ আবেদনকারীদের এসএসসি/সমমান ও এইচএসসি/সমমান উভয় পরীক্ষায় (৪র্থ বিষয়সহ) ন্যূনতম জিপিএ ৩.৫০ সহ মোট জিপিএ ৮.০০ পেতে হবে।", //result
    applyfee: 1320, // fee
    applyfeebd: numberToBanglaWords(1320), // word bd
    admitdnstart: new Date("2026-09-20"), // admitcard download date  start
    admitdnstartTtime: "", // admitcard download time start
    admitdnend: new Date("2026-09-25"), // admitcard download date  end
    admitdnendTime: `${lastLine}`, // admitcard download time end
    examdate: new Date("2026-09-26"), // exam date
    examtime: `${am10bd}${halfbd}`, // exam time
    examresultdate : new Date("2026-09-30"),
    examresulttme : `${pm04bd}`,
  },
];
const JNUInfo = [
  {
    NameofUnit:
      "ইউনিট—A (বিজ্ঞান ও লাইফ এন্ড আর্থ সায়েন্স অনুষদ) বিজ্ঞান ও ভোকেশনাল (উপযুক্ত বিষয়সহ)",
    result:
      "বিজ্ঞান ও ভোকেশনাল (উপযুক্ত বিষয়সহ) এসএসসি/সমমান ও এইচএসসি/সমমান উভয় পরীক্ষায় মোট জিপিএ ৭.৫০ থাকতে হবে। তবে কোনো পরীক্ষায় প্রাপ্ত জিপিএ ৩.২৫ এর কম নয়।", //result
    applyfee: 1100, // fee
    applyfeebd: numberToBanglaWords(1100), // word bd
    admitdnstart: new Date("2026-08-03"), // admitcard download date  start
    admitdnstartTtime: "", // admitcard download time start
    admitdnend: new Date("2026-08-05"), // admitcard download date  end
    admitdnendTime: `${lastLine}`, // admitcard download time end
    examdate: new Date("2026-08-15"), // exam date
    examtime: `${am10bd}${halfbd}`, // exam time
    examresultdate : new Date("2026-10-01"),
    examresulttme : `${pm04bd}`,
  },
  {
    NameofUnit: "ইউনিট—B (কলা ও আইন অনুষদ)",
    result:
      "বিজ্ঞান , মানবিক ও ব্যবসায় শিক্ষা শাখার সকল শিক্ষার্থী আবেদন করতে পারবে। শিক্ষার্থীদের এসএসসি/সমমান ও এইচএসসি/সমমান উভয় পরীক্ষায় মোট জিপিএ ৬.৫০ থাকতে হবে। তবে কোনো পরীক্ষায় প্রাপ্ত জিপিএ ৩.০০ এর কম নয়।", //result
    applyfee: 1100, // fee
    applyfeebd: numberToBanglaWords(1100), // word bd
    admitdnstart: new Date("2026-08-03"), // admitcard download date  start
    admitdnstartTtime: "", // admitcard download time start
    admitdnend: new Date("2026-08-05"), // admitcard download date  end
    admitdnendTime: `${lastLine}`, // admitcard download time end
    examdate: new Date("2026-08-15"), // exam date
    examtime: `${am10bd}${halfbd}`, // exam time
    examresultdate : new Date("2026-10-02"),
    examresulttme : `${pm04bd}`,
  },
  {
    NameofUnit: "ইউনিট - C (ব্যবসায় শিক্ষা শাখা)",
    result:
      "বিজ্ঞান , মানবিক ও ব্যবসায় শিক্ষা শাখার সকল শিক্ষার্থী আবেদন করতে পারবে। শিক্ষার্থীদের এসএসসি/সমমান ও এইচএসসি/সমমান উভয় পরীক্ষায় মোট জিপিএ ৬.৫০ থাকতে হবে। তবে কোনো পরীক্ষায় প্রাপ্ত জিপিএ ৩.০০ এর কম নয়।", //result
    applyfee: 1100, // fee
    applyfeebd: numberToBanglaWords(1100), // word bd
    admitdnstart: new Date("2026-08-03"), // admitcard download date  start
    admitdnstartTtime: "", // admitcard download time start
    admitdnend: new Date("2026-08-05"), // admitcard download date  end
    admitdnendTime: `${lastLine}`, // admitcard download time end
    examdate: new Date("2026-08-15"), // exam date
    examtime: `${am10bd}${halfbd}`, // exam time
    examresultdate : new Date("2026-10-03"),
    examresulttme : `${pm04bd}`,
  },
  {
    NameofUnit: "ইউনিট — D (সামাজিক বিজ্ঞান অনুষদ) ",
    result:
      "বিজ্ঞান , মানবিক ও ব্যবসায় শিক্ষা শাখার সকল শিক্ষার্থী আবেদন করতে পারবে। শিক্ষার্থীদের এসএসসি/সমমান ও এইচএসসি/সমমান উভয় পরীক্ষায় মোট জিপিএ ৬.৫০ থাকতে হবে। তবে কোনো পরীক্ষায় প্রাপ্ত জিপিএ ৩.০০ এর কম নয়।", //result
    applyfee: 1100, // fee
    applyfeebd: numberToBanglaWords(1100), // word bd
    admitdnstart: new Date("2026-08-03"), // admitcard download date  start
    admitdnstartTtime: "", // admitcard download time start
    admitdnend: new Date("2026-08-05"), // admitcard download date  end
    admitdnendTime: `${lastLine}`, // admitcard download time end
    examdate: new Date("2026-08-15"), // exam date
    examtime: `${am10bd}${halfbd}`, // exam time
    examresultdate : new Date("2026-10-04"),
    examresulttme : `${pm04bd}`,
  },
  {
    NameofUnit: "ইউনিট —E (চারুকলা অনুষদ) ",
    result:
      "বিজ্ঞান , মানবিক ও ব্যবসায় শিক্ষা শাখার সকল শিক্ষার্থী আবেদন করতে পারবে। শিক্ষার্থীদের এসএসসি/সমমান ও এইচএসসি/সমমান উভয় পরীক্ষায় মোট জিপিএ ৬.৫০ থাকতে হবে। তবে কোনো পরীক্ষায় প্রাপ্ত জিপিএ ৩.০০ এর কম নয়।", //result
    applyfee: 1100, // fee
    applyfeebd: numberToBanglaWords(1100), // word bd
    admitdnstart: new Date("2026-08-03"), // admitcard download date  start
    admitdnstartTtime: "", // admitcard download time start
    admitdnend: new Date("2026-08-05"), // admitcard download date  end
    admitdnendTime: `${lastLine}`, // admitcard download time end
    examdate: new Date("2026-08-15"), // exam date
    examtime: `${am10bd}${halfbd}`, // exam time
    examresultdate : new Date("2026-10-05"),
    examresulttme : `${pm04bd}`,
  },
];
const GSTInfo = [
  {
    NameofUnit: "ইউনিট—A (বিজ্ঞান অনুষদ)",
    result:
      "বিজ্ঞান শাখা হতে এইচএসসি/সমমান পরীক্ষায় উত্তীর্ণ আবেদনকারীদের এসএসসি/সমমান ও এইচএসসি/সমমান উভয় পরীক্ষায় (৪র্থ বিষয়সহ) ন্যূনতম জিপিএ ৩.২৫ সহ সর্বমোট জিপিএ কমপক্ষে ৭.০০ থাকতে হবে। সাধারণ শিক্ষা বোর্ডের বিজ্ঞান শাখাসহ মাদ্রাসা বোর্ড (বিজ্ঞান) এবং ভোকেশনাল (এইচএসসি) বিজ্ঞান শাখা হিসাবে বিবেচিত হবে।", //result
    applyfee: 1100, // fee
    applyfeebd: numberToBanglaWords(1100), // word bd
    admitdnstart: new Date("2026-08-03"), // admitcard download date  start
    admitdnstartTtime: "", // admitcard download time start
    admitdnend: new Date("2026-08-05"), // admitcard download date  end
    admitdnendTime: `${lastLine}`, // admitcard download time end
    examdate: new Date("2026-08-15"), // exam date
    examtime: `${am10bd}${halfbd}`, // exam time
    examresultdate : new Date("2026-10-02"),
    examresulttme : `${pm04bd} ${halfbd}`,
  },
  {
    NameofUnit: "ইউনিট—B (কলা ও আইন অনুষদ)",
    result:
      "মানবিক শাখা হতে এইচএসসি/সমমান পরীক্ষায় উত্তীর্ণ আবেদনকারীদের এসএসসি/সমমান ও এইচএসসি/সমমান উভয় পরীক্ষায় (৪র্থ বিষয়সহ) ন্যূনতম জিপিএ ৩.০০ সহ সর্বমোট জিপিএ কমপক্ষে ৬.০০ থাকতে হবে। সাধারণ শিক্ষা বোর্ডের মানবিক শাখাসহ মিউজিক, গার্হস্থ্য অর্থনীতি এবং মাদ্রাসা বোর্ড (সাধারণ, মুজাব্বিদ) মানবিক শাখা হিসাবে বিবেচিত হবে।", //result
    applyfee: 1100, // fee
    applyfeebd: numberToBanglaWords(1100), // word bd
    admitdnstart: new Date("2026-08-03"), // admitcard download date  start
    admitdnstartTtime: "", // admitcard download time start
    admitdnend: new Date("2026-08-05"), // admitcard download date  end
    admitdnendTime: `${lastLine}`, // admitcard download time end
    examdate: new Date("2026-08-15"), // exam date
    examtime: `${am10bd}${halfbd}`, // exam time\
    examresultdate : new Date("2026-10-02"),
    examresulttme : `${pm04bd}`,
  },
  {
    NameofUnit: "ইউনিট - C (ব্যবসায় শিক্ষা শাখা)",
    result:
      "বাণিজ্য শাখা হতে এইচএসসি/সমমান পরীক্ষায় উত্তীর্ণ আবেদনকারীদের এসএসসি/সমমান ও এইচএসসি/সমমান উভয় পরীক্ষায় (৪র্থ বিষয়সহ) ন্যূনতম জিপিএ ৩.০০ সহ সর্বমোট জিপিএ কমপক্ষে ৬.২৫ থাকতে হবে। সাধারণ শিক্ষা বোর্ডের বাণিজ্য শাখাসহ ডিপ্লোমা ইন বিজনেস স্টাডিজ, ব্যবসায় ব্যবস্থাপনা (এইচএসসি) এবং ডিপ্লোমা ইন কমার্স বাণিজ্য শাখা হিসাবে বিবেচিত হবে।", //result
    applyfee: 1100, // fee
    applyfeebd: numberToBanglaWords(1100), // word bd
    admitdnstart: new Date("2026-08-03"), // admitcard download date  start
    admitdnstartTtime: "", // admitcard download time start
    admitdnend: new Date("2026-08-05"), // admitcard download date  end
    admitdnendTime: `${lastLine}`, // admitcard download time end
    examdate: new Date("2026-08-15"), // exam date
    examtime: `${am10bd}${halfbd}`, // exam time
    examresultdate : new Date("2026-10-02"),
    examresulttme : `${pm04bd}`,
  },
];
const JUInfo = [
  {
    NameofUnit: "A ইউনিট (গাণিতিক ও পদার্থ বিষয়ক অনুষদ এবং ইনস্টিটিউট অব ইনফরমেশন টেকনোলজি, আইআইটি)",
    result:
      "উভয় পরীক্ষায় মোট জিপিএ ৮.৫০ (পৃথকভাবে ন্যূনতম জিপিএ ৪.০০ থাকতে হবে)।", //result
    applyfee: 800, // fee
    applyfeebd: numberToBanglaWords(800), // word bd
    admitdnstart: new Date("2026-08-03"), // admitcard download date  start
    admitdnstartTtime: "", // admitcard download time start
    admitdnend: new Date("2026-08-05"), // admitcard download date  end
    admitdnendTime: `${lastLine}`, // admitcard download time end
    examdate: new Date("2026-08-06"), // exam date
    examtime: `${am10bd}${halfbd}`, // exam time
    examresultdate : new Date("2026-10-07"),
    examresulttme : `${pm04bd}`,
  },
  {
    NameofUnit: "B ইউনিট (সমাজবিজ্ঞান অনুষদ),  ",
    result:
      "উভয় পরীক্ষায় বিজ্ঞান শাখার জন্য মোট জিপিএ ৮.৫০ (পৃথকভাবে ন্যূনতম জিপিএ ৩.৫০ থাকতে হবে); মানবিক/ব্যবসায় শিক্ষা/অন্যান্য শাখার জন্য মোট জিপিএ ৭.৫০ (পৃথকভাবে ন্যূনতম জিপিএ ৩.৫০ থাকতে হবে)।", //result
    applyfee: 800, // fee
    applyfeebd: numberToBanglaWords(800), // word bd
    admitdnstart: new Date("2026-08-8"), // admitcard download date  start
    admitdnstartTtime: "", // admitcard download time start
    admitdnend: new Date("2026-08-09"), // admitcard download date  end
    admitdnendTime: `${lastLine}`, // admitcard download time end
    examdate: new Date("2026-08-10"), // exam date
    examtime: `${am10bd}${halfbd}`, // exam time\
    examresultdate : new Date("2026-10-11"),
    examresulttme : `${pm04bd}`,
  },
  {
    NameofUnit: "C ইউনিট (কলা ও মানবিক অনুষদ, আইন অনুষদ এবং তুলনামূলক সাহিত্য ও সংস্কৃতি ইনস্টিটিউট)",
    result:
      "উভয় পরীক্ষায় বিজ্ঞান শাখার জন্য মোট জিপিএ ৮.৫০ (পৃথকভাবে ন্যূনতম জিপিএ ৩.৫০ থাকতে হবে); মানবিক/ব্যবসায় শিক্ষা/অন্যান্য শাখার জন্য মোট জিপিএ ৭.৫০ (পৃথকভাবে ন্যূনতম জিপিএ ৩.৫০ থাকতে হবে)।", //result
    applyfee: 800, // fee
    applyfeebd: numberToBanglaWords(800), // word bd
    admitdnstart: new Date("2026-08-12"), // admitcard download date  start
    admitdnstartTtime: "", // admitcard download time start
    admitdnend: new Date("2026-08-13"), // admitcard download date  end
    admitdnendTime: `${lastLine}`, // admitcard download time end
    examdate: new Date("2026-08-14"), // exam date
    examtime: `${am10bd}${halfbd}`, // exam time
    examresultdate : new Date("2026-10-15"),
    examresulttme : `${pm04bd}`,
  },
  {
    NameofUnit: "C1 ইউনিট (কলা ও মানবিক অনুষদ: নাটক ও নাট্যতত্ত্ব বিভাগ এবং চারুকলা বিভাগ)",
    result:
      "উভয় পরীক্ষায় মোট জিপিএ ৭.৫০ (পৃথকভাবে ন্যূনতম জিপিএ ৩.৫০ থাকতে হবে)।", //result
    applyfee: 700, // fee
    applyfeebd: numberToBanglaWords(700), // word bd
    admitdnstart: new Date("2026-08-16"), // admitcard download date  start
    admitdnstartTtime: "", // admitcard download time start
    admitdnend: new Date("2026-08-17"), // admitcard download date  end
    admitdnendTime: `${lastLine}`, // admitcard download time end
    examdate: new Date("2026-08-18"), // exam date
    examtime: `${am10bd}${halfbd}`, // exam time
    examresultdate : new Date("2026-08-19"),
    examresulttme : `${pm04bd}`,
  },
  {
    NameofUnit: "D ইউনিট (জীববিজ্ঞান অনুষদ)",
    result:
      "উভয় পরীক্ষায় মোট জিপিএ ৯.০০ (পৃথকভাবে ন্যূনতম জিপিএ ৪.০০ থাকতে হবে)।", //result
    applyfee: 800, // fee
    applyfeebd: numberToBanglaWords(800), // word bd
    admitdnstart: new Date("2026-08-20"), // admitcard download date  start
    admitdnstartTtime: "", // admitcard download time start
    admitdnend: new Date("2026-08-21"), // admitcard download date  end
    admitdnendTime: `${lastLine}`, // admitcard download time end
    examdate: new Date("2026-08-22"), // exam date
    examtime: `${am10bd}${halfbd}`, // exam time
    examresultdate : new Date("2026-08-23"),
    examresulttme : `${pm04bd}`,
  },
  {
    NameofUnit: "E ইউনিট (বিজনেস স্টাডিজ অনুষদ)",
    result:"উভয় পরীক্ষায় মোট জিপিএ ৮.০০ তন্মধ্যে মাধ্যমিক/সমমান পরীক্ষায় ন্যূনতম জিপিএ ৪.০০ ও উচ্চমাধ্যমিক/সমমান পরীক্ষায় ন্যূনতম জিপিএ ৩.৫০ থাকতে হবে।উভয় পরীক্ষায় মোট জিপিএ ৯.০০ (পৃথকভাবে ন্যূনতম জিপিএ ৪.০০ থাকতে হবে)।", //result
    applyfee: 700, // fee
    applyfeebd: numberToBanglaWords(700), // word bd
    admitdnstart: new Date("2026-09-01"), // admitcard download date  start
    admitdnstartTtime: "", // admitcard download time start
    admitdnend: new Date("2026-09-02"), // admitcard download date  end
    admitdnendTime: `${lastLine}`, // admitcard download time end
    examdate: new Date("2026-09-03"), // exam date
    examtime: `${am10bd}${halfbd}`, // exam time
    examresultdate : new Date("2026-09-05"),
    examresulttme : `${pm04bd}`,
  },
  {
    NameofUnit: "ইনস্টিটিউট অব বিজনেস এ্যাডমিনিস্ট্রেশন, আইবিএ-জেইউ",
    result:"উভয় পরীক্ষায় বিজ্ঞান শাখার জন্য মোট জিপিএ ৮.০০ (পৃথকভাবে ন্যূনতম জিপিএ ৩.৭৫); মানবিক/ব্যবসায় শিক্ষা/অন্যান্য শাখার জন্য মোট জিপিএ ৭.৫০ (পৃথকভাবে ন্যূনতম জিপিএ ৩.৫০) থাকতে হবে।", //result
    applyfee: 700, // fee
    applyfeebd: numberToBanglaWords(700), // word bd
    admitdnstart: new Date("2026-09-01"), // admitcard download date  start
    admitdnstartTtime: "", // admitcard download time start
    admitdnend: new Date("2026-09-02"), // admitcard download date  end
    admitdnendTime: `${lastLine}`, // admitcard download time end
    examdate: new Date("2026-09-03"), // exam date
    examtime: `${am10bd}${halfbd}`, // exam time
    examresultdate : new Date("2026-09-05"),
    examresulttme : `${pm04bd}`,
  },
];

let universityOPTmian = "";
UNIVERSITYDTA.forEach(function (universitydata) {
  universityOPTmian += `<div class="NotiecList">
        <div class="nameofevent" onclick="${universitydata.onclick}"> <!-- on click-->
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
function du() {
  const duoutput = document.getElementById("du_output");
  const duIcon = document.getElementById("du_icon");

  if (duoutput.style.display === "none") {
    duoutput.style.display = "block";
    duIcon.classList.remove("fa-plus");
    duIcon.classList.add("fa-minus");
  } else {
    duoutput.style.display = "none";
    duIcon.classList.remove("fa-minus");
    duIcon.classList.add("fa-plus");
  }
}
function ru() {
  const ruoutput = document.getElementById("ru_output");
  const ruIcon = document.getElementById("ru_icon");
  if (ruoutput.style.display === "none") {
    ruoutput.style.display = "block";
    ruIcon.classList.remove("fa-plus");
    ruIcon.classList.add("fa-minus");
  } else {
    ruoutput.style.display = "none";
    ruIcon.classList.remove("fa-minus");
    ruIcon.classList.add("fa-plus");
  }
}
function jnu() {
  const jnuoutput = document.getElementById("jnu_output");
  const jnuIcon = document.getElementById("jnu_icon");
  if (jnuoutput.style.display === "none") {
    jnuoutput.style.display = "block";
    jnuIcon.classList.remove("fa-plus");
    jnuIcon.classList.add("fa-minus");
  } else {
    jnuoutput.style.display = "none";
    jnuIcon.classList.remove("fa-minus");
    jnuIcon.classList.add("fa-plus");
  }
}
function gst() {
  const gstoutput = document.getElementById("gst_output");
  const gstIcon = document.getElementById("gst_icon");
  if (gstoutput.style.display === "none") {
    gstoutput.style.display = "block";
    gstIcon.classList.remove("fa-plus");
    gstIcon.classList.add("fa-minus");
  } else {
    gstoutput.style.display = "none";
    gstIcon.classList.remove("fa-minus");
    gstIcon.classList.add("fa-plus");
  }
}
function ju() {
  const juoutput = document.getElementById("ju_output");
  const juIcon = document.getElementById("ju_icon");
  if (juoutput.style.display === "none") {
    juoutput.style.display = "block";
    juIcon.classList.remove("fa-plus");
    juIcon.classList.add("fa-minus");
  } else {
    juoutput.style.display = "none";
    juIcon.classList.remove("fa-minus");
    juIcon.classList.add("fa-plus");
  }
}


const duapplicationenddate = UNIVERSITYDTA[duid].appDateend
  .toISOString()
  .split("T")[0]; // object outupt to string
const dustingtodate = new Date(duapplicationenddate); // into a date
const duDaysEng = Math.abs(dustingtodate - today); // find out days
const duDaysEngs = Math.floor(duDaysEng / (1000 * 60 * 60 * 24) + 1); // convate to date
const duDaysEngbd = duDaysEngs.toLocaleString("bn-bd"); // convate into bangla
const dutimetable = ` <tr>
      <td>আবেদন শুরু</td>
      <td>${UNIVERSITYDTA[duid].appDateStart.toLocaleDateString("bn-BD", dateBangla)}</td>
    </tr>
    <tr>
      <td> আবেদন শেষ</td>
      <td>${UNIVERSITYDTA[duid].appDateend.toLocaleDateString("bn-BD", dateBangla)}</td>
    </tr>`;
if (duapplicationenddate > todays) {
  duappdateLine = `
    <tr>
      <td>আবেদন আর বাকি আছে</td>
      <td style="color:green">আবেদন চলমাান ${duDaysEngbd} দিন বাকি আছে </td>
    </tr>
  `;
  // dudateendstyle.style.color = "green";  এবং ${duDaysEngbd} দিন বাকি আছে।
} else if (duapplicationenddate === todays) {
  duappdateLine = `<tr>
      <td>আবেদন আর বাকি আছে</td>
      <td style="color:green">আজকেই শেষ দিন </td>
    </tr>`;
  // dudateendstyle.style.color = "red"
} else if (duapplicationenddate < todays) {
  duappdateLine = ` <tr>
      <td>আবেদন সময়সীমা </td>
      <td style="color:red">আবেদনের সময় শেষ </td>
    </tr>`;
}

const ruapplicationenddate = UNIVERSITYDTA[ruid].appDateend.toISOString().split("T")[0]; // object outupt to string
const rustingtodate = new Date(ruapplicationenddate); // into a date
const ruDaysEng = Math.abs(rustingtodate - today); // find out days
const ruDaysEngs = Math.floor(ruDaysEng / (1000 * 60 * 60 * 24) + 1); // convate to date
const ruDaysEngbd = ruDaysEngs.toLocaleString("bn-bd"); // convate into bangla
const rutimetable = ` <tr>
      <td>আবেদন শুরু</td>
      <td>${UNIVERSITYDTA[ruid].appDateStart.toLocaleDateString("bn-BD", dateBangla)}</td>
    </tr>
    <tr>
      <td> আবেদন শেষ</td>
      <td>${UNIVERSITYDTA[ruid].appDateend.toLocaleDateString("bn-BD", dateBangla)}</td>
    </tr>`;
if (ruapplicationenddate > todays) {
  ruappdateLine = `
    <tr>
      <td>আবেদন আর বাকি আছে</td>
      <td style="color:green">আবেদন চলমাান ${ruDaysEngbd} দিন বাকি আছে </td>
    </tr>
  `;
} else if (ruapplicationenddate === todays) {
  ruappdateLine = `<tr>
      <td>আবেদন আর বাকি আছে</td>
      <td style="color:green">আজকেই শেষ দিন </td>
    </tr>`;
} else if (ruapplicationenddate < todays) {
  ruappdateLine = ` <tr>
      <td>আবেদন সময়সীমা </td>
      <td style="color:red">আবেদনের সময় শেষ </td>
    </tr>`;
};
const jnuapplicationenddate = UNIVERSITYDTA[jnuid].appDateend
  .toISOString()
  .split("T")[0]; // object outupt to string
const jnustingtodate = new Date(jnuapplicationenddate); // into a date
const jnuDaysEng = Math.abs(jnustingtodate - today); // find out days
const jnuDaysEngs = Math.floor(jnuDaysEng / (1000 * 60 * 60 * 24) + 1); // convate to date
const jnuDaysEngbd = jnuDaysEngs.toLocaleString("bn-bd"); // convate into bangla
const jnutimetable = ` <tr>
      <td>আবেদন শুরু</td>
      <td>${UNIVERSITYDTA[jnuid].appDateStart.toLocaleDateString("bn-BD", dateBangla)}</td>
    </tr>
    <tr>
      <td> আবেদন শেষ</td>
      <td>${UNIVERSITYDTA[jnuid].appDateend.toLocaleDateString("bn-BD", dateBangla)}</td>
    </tr>`;
if (jnuapplicationenddate > todays) {
  jnuappdateLine = `
    <tr>
      <td>আবেদন আর বাকি আছে</td>
      <td style="color:green">আবেদন চলমাান ${jnuDaysEngbd} দিন বাকি আছে </td>
    </tr>
  `;
} else if (jnuapplicationenddate === todays) {
  jnuappdateLine = `<tr>
      <td>আবেদন আর বাকি আছে</td>
      <td style="color:green">আজকেই শেষ দিন </td>
    </tr>`;
} else if (jnuapplicationenddate < todays) {
  jnuappdateLine = ` <tr>
      <td>আবেদন সময়সীমা </td>
      <td style="color:red">আবেদনের সময় শেষ </td>
    </tr>`;
}

const juapplicationenddate = UNIVERSITYDTA[juid].appDateend
  .toISOString()
  .split("T")[0]; // object outupt to string
const justingtodate = new Date(juapplicationenddate); // into a date
const juDaysEng = Math.abs(justingtodate - today); // find out days
const juDaysEngs = Math.floor(juDaysEng / (1000 * 60 * 60 * 24) + 1); // convate to date
const juDaysEngbd = juDaysEngs.toLocaleString("bn-bd"); // convate into bangla
const jutimetable = ` <tr>
      <td>আবেদন শুরু</td>
      <td>${UNIVERSITYDTA[juid].appDateStart.toLocaleDateString("bn-BD", dateBangla)}</td>
    </tr>
    <tr>
      <td> আবেদন শেষ</td>
      <td>${UNIVERSITYDTA[juid].appDateend.toLocaleDateString("bn-BD", dateBangla)}</td>
    </tr>`;
if (juapplicationenddate > todays) {
  juappdateLine = `
    <tr>
      <td>আবেদন আর বাকি আছে</td>
      <td style="color:green">আবেদন চলমাান ${juDaysEngbd} দিন বাকি আছে </td>
    </tr>
  `;
} else if (juapplicationenddate === todays) {
  juappdateLine = `<tr>
      <td>আবেদন আর বাকি আছে</td>
      <td style="color:green">আজকেই শেষ দিন </td>
    </tr>`;
} else if (juapplicationenddate < todays) {
  juappdateLine = ` <tr>
      <td>আবেদন সময়সীমা </td>
      <td style="color:red">আবেদনের সময় শেষ </td>
    </tr>`;
}

const gstapplicationenddate = UNIVERSITYDTA[gstid].appDateend
  .toISOString()
  .split("T")[0]; // object outupt to string
const gststingtodate = new Date(gstapplicationenddate); // into a date
const gstDaysEng = Math.abs(gststingtodate - today); // find out days
const gstDaysEngs = Math.floor(gstDaysEng / (1000 * 60 * 60 * 24) + 1); // convate to date
const gstDaysEngbd = gstDaysEngs.toLocaleString("bn-bd"); // convate into bangla
const gsttimetable = ` <tr>
      <td>আবেদন শুরু</td>
      <td>${UNIVERSITYDTA[gstid].appDateStart.toLocaleDateString("bn-BD", dateBangla)}</td>
    </tr>
    <tr>
      <td> আবেদন শেষ</td>
      <td>${UNIVERSITYDTA[gstid].appDateend.toLocaleDateString("bn-BD", dateBangla)}</td>
    </tr>`;
if (gstapplicationenddate > todays) {
  gstappdateLine = `
    <tr>
      <td>আবেদন আর বাকি আছে</td>
      <td style="color:green">আবেদন চলমাান ${gstDaysEngbd} দিন বাকি আছে </td>
    </tr>
  `;
} else if (gstapplicationenddate === todays) {
  gstappdateLine = `<tr>
      <td>আবেদন আর বাকি আছে</td>
      <td style="color:green">আজকেই শেষ দিন </td>
    </tr>`;
} else if (gstapplicationenddate < todays) {
  gstappdateLine = ` <tr>
      <td>আবেদন সময়সীমা </td>
      <td style="color:red">আবেদনের সময় শেষ </td>
    </tr>`;
}

// !
// * coad for all
let duapplyResultHTML = "";
let dutableapplyfee = "";
let admitDNHeadhtml = "";
let duadmitHTML = "";
let examheadhtml = "";
let duexmaHTML = "";
let duexmacenterHTML = "";
let duexamresultHtml = "";
let duexamresultHtmlheaad = "";

DUInfo.forEach(function (dudata) {
 
  duapplyResultHTML += `<tr>
      <td>${dudata.NameofUnit}</td>
      <td style="width: 50%"> ${dudata.result}</td>
    </tr>  <!-- Result-->`;
  dutableapplyfee += `<tr>
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
const /* */ duNoticePUB= UNIVERSITYDTA[duid].noticepub;
if (duNoticePUB === true) {
  dufinalopt=
  universitytableHTMLHead+
  duapplyResultHTML+
  dutableapplyfee+ // apply free
  dutimetable+ //app start and end
  duappdateLine+ //duddate
  applyfeeheaderall+
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
  rutableResultHTML + /* */
  unonlineTimeHead +
  rutimetable + // time table
  ruappdateLine + //time table
  unapplyfeeheader +
  rutaelfee + // fee
  ruadmitDNHeadhtml+  
  admitDNHeadhtml +
  ruadmitHTML + // admit downlaod
  ruexamheadhtml +
  ruexmaHTML + // exam date
  ruexmacenterHTML+
  ruexamresultHtmlheaad+
  ruexamresultHtml+
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
  unonlineTimeHead +
  jnutimetable + // time table
  jnuappdateLine + //time table
  unapplyfeeheader +
  jnutaelfee + // fee
  admitDNHeadhtml +
  jnuadmitHTML + // admit downlaod
  jnuexamheadhtml +
  jnuexmaHTML + // exam date
  jnuexmacenterHTML +
  jnuexamresultHtmlheaad +
  jnuexamresultHtml +
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
  gsttableResultHTML + //du reuslt
  unonlineTimeHead +
  gsttimetable + // time table
  gstappdateLine + //time table
  unapplyfeeheader +
  gsttaelfee + // fee
  admitDNHeadhtml +
  gstadmitHTML + // admit downlaod
  gstexamheadhtml +
  gstexmaHTML + // exam date
  gstexmacenterHTML +
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
  unonlineTimeHead +
  jutimetable + // time table
  juappdateLine + //time table
  unapplyfeeheader +
  jutaelfee + // fee
  admitDNHeadhtml +
  juadmitHTML + // admit downlaod
  juexamheadhtml +
  juexmaHTML + // exam date
  juexmacenterHTML +
  juexamresultHtmlheaad +
  juexamresultHtml +
  tableFooter+
  note;
} else {
  jufinalopt = `${notnoticePUb}`
}
document.getElementById("ju_table_output").innerHTML =jufinalopt;
//ju