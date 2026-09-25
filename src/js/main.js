function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

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
  All: document.getElementById("all"),
  school: document.getElementById("school"),
  college: document.getElementById("college"),
  university: document.getElementById("university"),
  medical: document.getElementById("medical"),
  engineering: document.getElementById("engineering"),
  job: document.getElementById("job"),
};

const buttons = document.querySelectorAll(".button");

function showSection(sectionName, button) {
  // সব section hide
  Object.values(sections).forEach((section) => {
    section.style.display = "none";
  });

  // নির্দিষ্ট section show
  sections[sectionName].style.display = "block";

  // সব button inactive
  buttons.forEach((btn) => {
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

/* untableHTMLHead + applyfeeheader + unapplyfeeunit +*/
const applyfeeheader = `
            <tr>
              <th colspan="2" style="text-align: center;">অনলাইনে আবেদনের টাকার পরিমান</th>
            </tr>`;
// unit apply fee
const applyfeeunit = `
            <tr style="text-align: center;">
              <td>ইউনিটের নাম</td>
              <td> টাকার পরিমাণ</td>
            </tr>`;
// const admitcardheader = `
//             <tr>
//               <th colspan="2" style="text-align: center;">প্রবেশপত্র সংগ্রহের সময়সৃচী</th>
//             </tr>
//             <tr style="text-align: center;">
//               <td>ইউনিটের নাম</td>
//               <td> টাকার পরিমাণ</td>
//             </tr>`;
// all admit head
const timetablehead = `<tr>
          <th colspan="2" style="text-align: center;"> অনলাইনে আবেদনের সময়সৃচী</th>
    </tr>`;
const admitcardheaderall = `
            <tr>
              <th colspan="2" style="text-align: center;">প্রবেশপত্র সংগ্রহের সময়সৃচী</th>
            </tr>`;
// all exam head
const examheaderall = `
            <tr>
              <th colspan="2" style="text-align: center;">ভর্তি পরীক্ষার সময়সৃচী ও পরীক্ষার ধরণ</th>
            </tr>`;
// all result hed
const reusltheaderall = `
            <tr>
              <th colspan="2" style="text-align: center;">ভর্তি পরীক্ষার ফলাফল প্রকাশের সময়সৃচী</th>
            </tr>`;
// univarsity name of unit & time date
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
const notnoticePUb = `<h1 ‍style="font-size: 40px;font-weight: lighter;text-align: justify;"> অফিসিয়াল ভাবে কোন নোটিশ প্রকাশিত হয়নি।প্রকাশিত হলে ওযেবসােইটের মাধ্যমে জানিয়ে দেওয়া হবে।বিস্তারিত তথ্যের জন্য  অফিসিয়াল ওয়েবসাইটে দেখুন।</h1>`;

// * For alll


const allData = Object.values(ADDMISSIONDATA)
  .flatMap(data => Array.isArray(data) ? data : [data]);
// js
// ========================================
// SORT FUNCTION
// ========================================

function sortAdmissionData(data, type) {

  const list = [...data];


  // -------------------------
  // A → Z
  // -------------------------

  if (type === "az") {

    return list.sort((a, b) =>
      (a.NameEng || "").localeCompare(
        (b.NameEng || ""),
        undefined,
        {
          sensitivity: "base"
        }
      )
    );

  }


  // -------------------------
  // Date
  // -------------------------

  if (type === "date") {

    return list.sort((a, b) =>
      new Date(b.appDateend)-
    new Date(a.appDateend) 
      
    );

  }

  if (type === "date2") {

    return list.sort((a, b) =>
             new Date(b.noticepubdate)-new Date(a.noticepubdate)
    );

  }


  // কোনো sort না থাকলে
  return list;

}

// SEARCH + SORT FUNCTION
function filterAdmission() {
  // 1. Search value
  const searchInput =
    document.getElementById("searchjs");

  const searchValue =
    searchInput
      ? searchInput.value.trim().toLowerCase()
      : "";
  // 2. Sort value
  const sortInput =
    document.getElementById("sortjs");

  const sortValue =
    sortInput
      ? sortInput.value
      : "";
  // 3. Search / Filter


  const filteredData = allData.filter(data => {
    const nameEng =
      data.NameEng?.toLowerCase() || "";
    const nameBng =
      data.NameBng || "";
    const sortname =
      data.Sortname || "";
    return (
      nameEng.includes(searchValue) ||
      nameBng.includes(searchValue) ||
      sortname.includes(searchValue) 
    );

  });



  // ======================================
  // 4. Sort
  // ======================================

  const sortedData =
    sortAdmissionData(
      filteredData,
      sortValue
    );



  // ======================================
  // 5. HTML তৈরি
  // ======================================

  let alloptp = "";


  sortedData.forEach(data => {

    alloptp += createAdmissionHTML(
      data,
      "all_result_"
    );

  });



  // ======================================
  // 6. Main result
  // ======================================

  const allOutput =
    document.getElementById("all_opt");
      if (allOutput) {
    allOutput.innerHTML =
      alloptp;
  }
  const mbbsOutput =
    document.getElementById(
      "all_result_mbbs_table_output"
    );
  if (mbbsOutput) {
    mbbsOutput.innerHTML =
      mbbsmianopt + tableFooter;
  }
  const afmcOutput =
    document.getElementById(
      "all_result_afmc_table_output"
    );
  if (afmcOutput) {
    afmcOutput.innerHTML =
      afmcmianopt + tableFooter;
  }
  const bnmcOutput =
    document.getElementById(
      "all_result_bnnc_table_output"
    );


  if (bnmcOutput) {
    bnmcOutput.innerHTML =
      bnmcotp;
  }
  const juOutput =
    document.getElementById(
      "all_result_ju_table_output"
    );
  if (juOutput) {

    juOutput.innerHTML =
      jufinalopt;
  }
  const DUOutput =
    document.getElementById(
      "all_result_du_table_output"
    );
  if (DUOutput) {
    DUOutput.innerHTML =
      dufinalopt;
  }
  const RUOutput =
    document.getElementById(
      "all_result_ru_table_output"
    );
  if (RUOutput) {
    RUOutput.innerHTML =
      rufinalopt;
  }
  const GSTOutput =
    document.getElementById(
      "all_result_gst_table_output"
    );


  if (GSTOutput) {

    GSTOutput.innerHTML =
      gstfinalopt;

  }
  const JUOutput =
    document.getElementById(
      "all_result_ju_table_output"
    );


  if (JUOutput) {

    JUOutput.innerHTML =
      jufinalopt;

  } 
  const jnuOutput =
    document.getElementById(
      "all_result_jnu_table_output"
    );
  if (jnuOutput) {

    jnuOutput.innerHTML =
      jnufinalopt;

  }

}



// ========================================
// SEARCH EVENT
// ========================================

const searchInput =
  document.getElementById("searchjs");


if (searchInput) {

  searchInput.addEventListener(
    "input",
    filterAdmission
  );

}



// ========================================
// SORT EVENT
// ========================================

const sortInput =
  document.getElementById("sortjs");


if (sortInput) {

  sortInput.addEventListener(
    "change",
    filterAdmission
  );

}



// ========================================
// TEST SORT
// ========================================

const sortdata =
  sortAdmissionData(
    allData,
    "az"
  );


console.log(sortdata);



let html = "";

  sortdata.forEach(data => {
    html += createAdmissionHTML(data, "all_");
  });


  // Output
  document.getElementById("all_opt").innerHTML = html;
let madicalOPTmian = "";

ADDMISSIONDATA.MADICALADDATA.forEach(function (data) {

  madicalOPTmian += createAdmissionHTML(data, "medical_");

});

document.getElementById("madicalOPTmian").innerHTML =madicalOPTmian;

let universityOPTmian = "";

ADDMISSIONDATA.UNIVERSITYDTA.forEach(function (data) {

  universityOPTmian += createAdmissionHTML(data, "university_");

});

document.getElementById("university_opt").innerHTML = universityOPTmian;

let engineeringOPTmian = "";

ADDMISSIONDATA.ENGINEERING.forEach(function (data) {

  engineeringOPTmian += createAdmissionHTML(data, "engineering_");

});

document.getElementById("engineeringOPTmian").innerHTML =  engineeringOPTmian;
let collegeOPTmian = "";

ADDMISSIONDATA.COLLEGE.forEach(function (data) {

  collegeOPTmian += createAdmissionHTML(data, "college_");

});

document.getElementById("college_opt").innerHTML =
  collegeOPTmian;;
let mbbsnotivcepub = ADDMISSIONDATA.MADICALADDATA[mbbsid].noticepub;
let mbbsadmitdn = ADDMISSIONDATA.MADICALADDATA[mbbsid].admitdn;
if (mbbsadmitdn ===true) {
  admitmbbs= ` ${admitcardheaderall}
  <td colspan="2"> ${ADDMISSIONDATA.MADICALADDATA[mbbsid].NameBng} এর প্রবেশপত্র আগামী  ${ADDMISSIONDATA.MADICALADDATA[mbbsid].admitdndatestart.toLocaleDateString("bn-BD", dateBangla)} ${ADDMISSIONDATA.MADICALADDATA[mbbsid].admitdntimestart} হতে ${ADDMISSIONDATA.MADICALADDATA[mbbsid].admitdndateend.toLocaleDateString("bn-BD", dateBangla)} ${ADDMISSIONDATA.MADICALADDATA[mbbsid].admitdntimeend} পর্যন্ত প্রবেশপত্র ডাউনলোড করা যাবে।</td>`
} else {
  admitmbbs= ``
}  mbbsresult = ADDMISSIONDATA.MADICALADDATA[mbbsid].examresult 
  if(mbbsresult === true){
    mbbsresulthtml = `${reusltheaderall}
     <tr>
      <td colspan="2"> ${ADDMISSIONDATA.MADICALADDATA[mbbsid].NameBng} এর ভর্তি পরীক্ষার ফলাফল  ${ADDMISSIONDATA.MADICALADDATA[mbbsid].examresultdate.toLocaleDateString("bn-BD", dateBangla)} তারিখে  ${ADDMISSIONDATA.MADICALADDATA[mbbsid].examresulttme} এর এ প্রকাাশ করা হবে।</td>
    </tr> `
  }else{mbbsresulthtml=``}
if (mbbsnotivcepub === true) {
  mbbsmianopt = `${tableHTMLHeadall}
  </tr><td colspan="2" sytle="text-align: justify;">
  ২০২৫-২০২৬ খ্রি. শিক্ষাবর্ষে ভর্তি পরীক্ষায় অংশগ্রহণে ইচ্ছুক প্রার্থীকে ২০২৪ সাল অথবা ২০২৫ সালে এইচএসসি/'এ' লেভেল/সমমান পরীক্ষায় উত্তীর্ণ হতে হবে। ২০২২ সালের পূর্বে এসএসসি/ 'ও' লেভেল/সমমান পরীক্ষায় উত্তীর্ণ শিক্ষার্থীরা আবেদনের যোগ্য বলে বিবেচিত হবেন না।প্রার্থীকে এসএসসি /'ও' লেভেল/সমমান পরীক্ষায় বিজ্ঞান বিভাগে উত্তীর্ণ হতে হবে এবং এইচএসসি/'এ' লেভেল/সমমান পরীক্ষায় বিজ্ঞান বিভাগসহ অবশ্যই জীববিজ্ঞান, পদার্থবিজ্ঞান ও রসায়ন থাকতে হবে।
<b>এসএসসি/ 'ও' লেভেল/সমমান এবং এইচএসসি /'এ' লেভেল/সমমান দুটি পরীক্ষায় মোট জিপিএ কমপক্ষে ৮.৫০ পয়েন্ট হতে হবে। তবে এককভাবে কোনো পরীক্ষায় জিপিএ ৪.০০ পয়েন্ট এর কম থাকলে আবেদনের যোগ্য বলে বিবেচিত হবেন না।</b>
  </td></tr>
  ${timetablehead}
  
  <tr>
      <td>আবদেন শুরুর তারিখ ও সময়</td>
      <td style="width: 50%"> ${ADDMISSIONDATA.MADICALADDATA[mbbsid].appDateStart.toLocaleDateString("bn-BD", dateBangla)} ${ADDMISSIONDATA.MADICALADDATA[mbbsid].appstarttime}</td>
    </tr> 
    <tr>
      <td>আবদেন শেষের তারিখ</td>
      <td style="width: 50%"> ${ADDMISSIONDATA.MADICALADDATA[mbbsid].appDateend.toLocaleDateString("bn-BD", dateBangla)} ${ADDMISSIONDATA.MADICALADDATA[mbbsid].appendtime}</td>
    </tr> 
    <tr>
      <td>আবদেন বর্তমান অবস্থান</td>
      <td style="width: 50%">${ADDMISSIONDATA.MADICALADDATA[mbbsid].datecount}।</td>
    </tr> 
    ${applyfeeheader}
  <tr>
      <td colspan="2"> ${ADDMISSIONDATA.MADICALADDATA[mbbsid].NameBng} এর আবেদন ফি ${ADDMISSIONDATA.MADICALADDATA[mbbsid].applyfee.toLocaleString("bn-BD")} (${ADDMISSIONDATA.MADICALADDATA[mbbsid].applyfeebd})।</td>
    </tr> 
    ${admitmbbs}
    ${examheaderall}
    <tr>
    <td>পরীক্ষার তারিখ ও সময়</td>
    <td> ${ADDMISSIONDATA.MADICALADDATA[mbbsid].NameBng} এর পরীক্ষা আগামী  ${ADDMISSIONDATA.MADICALADDATA[mbbsid].examtestdate.toLocaleDateString("bn-BD", dateBangla)} ${ADDMISSIONDATA.MADICALADDATA[mbbsid].examtesttime} অনুষ্টিত হবে।
    </tr>
    <tr>
    <td>পরীক্ষার কেন্দ্র  </td>
    <td> <u> <a style="color:#000;" href="./src/noticfile/${ADDMISSIONDATA.MADICALADDATA[mbbsid].notice}" target="_blank" >পরীক্ষার কেন্দ্র ${ADDMISSIONDATA.MADICALADDATA[afmcid].examCenter}</a> </u> </td>
    </tr>
    <tr>
    <td>পরীক্ষার ধরণ</td>
    <td>${ADDMISSIONDATA.MADICALADDATA[mbbsid].examtype}</td>
    </tr>
    ${mbbsresulthtml}
    ${tableFooter}<p class="notice_date"> নোটিশ প্রকাশের তারিখ : ${ADDMISSIONDATA.MADICALADDATA[mbbsid].noticepubdate.toLocaleDateString("bn-BD", dateBangla)} </p> ${note}
  `

} else {
  mbbsmianopt =`${notnoticePUb}`
}
document.getElementById("all_mbbs_table_output").innerHTML=mbbsmianopt +tableFooter
document.getElementById("medical_mbbs_table_output").innerHTML=mbbsmianopt;
// mediacl teble

let afmcnotivcepub = ADDMISSIONDATA.MADICALADDATA[afmcid].noticepub;
let afmcadmitdn = ADDMISSIONDATA.MADICALADDATA[afmcid].admitdn;
if (afmcadmitdn ===true) {
  admitafmc= ` ${admitcardheaderall}
  <td colspan="2"> ${ADDMISSIONDATA.MADICALADDATA[afmcid].NameBng} এর প্রবেশপত্র আগামী  ${ADDMISSIONDATA.MADICALADDATA[afmcid].admitdndatestart.toLocaleDateString("bn-BD", dateBangla)} ${ADDMISSIONDATA.MADICALADDATA[afmcid].admitdntimestart} হতে ${ADDMISSIONDATA.MADICALADDATA[afmcid].admitdndateend.toLocaleDateString("bn-BD", dateBangla)} ${ADDMISSIONDATA.MADICALADDATA[afmcid].admitdntimeend} পর্যন্ত প্রবেশপত্র ডাউনলোড করা যাবে।</td>`
} else {
  admitafmc= ``
}  afmcresult = ADDMISSIONDATA.MADICALADDATA[afmcid].examresult 
  if(afmcresult === true){
    afmcresulthtml = `${reusltheaderall}
     <tr>
      <td colspan="2"> ${ADDMISSIONDATA.MADICALADDATA[afmcid].NameBng} এর ভর্তি পরীক্ষার ফলাফল  ${ADDMISSIONDATA.MADICALADDATA[afmcid].examresultdate.toLocaleDateString("bn-BD", dateBangla)} তারিখে  ${ADDMISSIONDATA.MADICALADDATA[afmcid].examresulttme} এ প্রকাাশ করা হবে।</td>
    </tr> `
  }else{afmcresulthtml=``}
if (afmcnotivcepub === true) {
  afmcmianopt = `${tableHTMLHeadall}
  </tr><td colspan="2" sytle="text-align: justify;">
  ২০২৫-২০২৬ খ্রি. শিক্ষাবর্ষে ভর্তি পরীক্ষায় অংশগ্রহণে ইচ্ছুক প্রার্থীকে ২০২৪ সাল অথবা ২০২৫ সালে এইচএসসি/'এ' লেভেল/সমমান পরীক্ষায় উত্তীর্ণ হতে হবে। ২০২২ সালের পূর্বে এসএসসি/ 'ও' লেভেল/সমমান পরীক্ষায় উত্তীর্ণ শিক্ষার্থীরা আবেদনের যোগ্য বলে বিবেচিত হবেন না।প্রার্থীকে এসএসসি /'ও' লেভেল/সমমান পরীক্ষায় বিজ্ঞান বিভাগে উত্তীর্ণ হতে হবে এবং এইচএসসি/'এ' লেভেল/সমমান পরীক্ষায় বিজ্ঞান বিভাগসহ অবশ্যই জীববিজ্ঞান, পদার্থবিজ্ঞান ও রসায়ন থাকতে হবে।
<b>এসএসসি/ 'ও' লেভেল/সমমান এবং এইচএসসি /'এ' লেভেল/সমমান দুটি পরীক্ষায় মোট জিপিএ কমপক্ষে ৮.৫০ পয়েন্ট হতে হবে। তবে এককভাবে কোনো পরীক্ষায় জিপিএ ৪.০০ পয়েন্ট এর কম থাকলে আবেদনের যোগ্য বলে বিবেচিত হবেন না। সকলের ক্ষেত্রে এইচএসসি/‘এ’ লেভেল/সমমান পরীক্ষায় জীববিজ্ঞানে (Biology) ন্যূনতম গ্রেড পয়েন্ট ৩.৫০
না থাকলে আবেদনের যোগ্য বলে বিবেচিত হবে না।</b>
  </td></tr>
  ${timetablehead}
  
  <tr>
      <td>আবদেন শুরুর তারিখ ও সময়</td>
      <td style="width: 50%"> ${ADDMISSIONDATA.MADICALADDATA[afmcid].appDateStart.toLocaleDateString("bn-BD", dateBangla)} ${ADDMISSIONDATA.MADICALADDATA[afmcid].appstarttime}</td>
    </tr> 
    <tr>
      <td>আবদেন শেষের তারিখ</td>
      <td style="width: 50%"> ${ADDMISSIONDATA.MADICALADDATA[afmcid].appDateend.toLocaleDateString("bn-BD", dateBangla)} ${ADDMISSIONDATA.MADICALADDATA[afmcid].appendtime}</td>
    </tr> 
    <tr>
      <td>আবদেন বর্তমান অবস্থান</td>
      <td style="width: 50%">${ADDMISSIONDATA.MADICALADDATA[afmcid].datecount}।</td>
    </tr> 
    ${applyfeeheader}
  <tr>
      <td colspan="2"> ${ADDMISSIONDATA.MADICALADDATA[afmcid].NameBng} এর আবেদন ফি ${ADDMISSIONDATA.MADICALADDATA[afmcid].applyfee.toLocaleString("bn-BD")} (${ADDMISSIONDATA.MADICALADDATA[afmcid].applyfeebd})।</td>
    </tr> 
    ${admitafmc}
    ${examheaderall}

    <tr>
    <td>পরীক্ষার তারিখ ও সময়</td>
    <td> ${ADDMISSIONDATA.MADICALADDATA[afmcid].NameBng} এর পরীক্ষা আগামী  ${ADDMISSIONDATA.MADICALADDATA[afmcid].examtestdate.toLocaleDateString("bn-BD", dateBangla)} ${ADDMISSIONDATA.MADICALADDATA[afmcid].examtesttime} অনুষ্টিত হবে।
    </tr>
    <tr>
    <td>পরীক্ষার কেন্দ্র  </td>
    <td> <u> <a style="color:#000;" href="./src/noticfile/${ADDMISSIONDATA.MADICALADDATA[afmcid].notice}" target="_blank" >পরীক্ষার কেন্দ্র ${ADDMISSIONDATA.MADICALADDATA[afmcid].examCenter}</a> </u> </td>
    </tr>
    <tr>
    <td>পরীক্ষার ধরণ</td>
    <td>${ADDMISSIONDATA.MADICALADDATA[afmcid].examtype}</td>
    ${afmcresulthtml}${tableFooter}<p class="notice_date"> নোটিশ প্রকাশের তারিখ : ${ADDMISSIONDATA.MADICALADDATA[afmcid].noticepubdate.toLocaleDateString("bn-BD", dateBangla)} </p> ${note}
  `

} else {
  afmcmianopt =`${notnoticePUb}`
}
document.getElementById("all_afmc_table_output").innerHTML=afmcmianopt ;
document.getElementById("medical_afmc_table_output").innerHTML=afmcmianopt;


let bnmcotpcourse ="";
let bnnmcapplyfee ="";
bnncdata.forEach(function(bnmcata){
  bnmcotpcourse +=` <tr>
          <td>${bnmcata.Nameofcourse}</td>
          <td style="width: 50%;text-align: justify;">${bnmcata.result}</td>
          </tr>
          
          `
          bnnmcapplyfee += `<tr>
          <td>${bnmcata.Nameofcourse}</td>
          <td style="width: 50%;text-align: justify;">${bnmcata.applyfee.toLocaleString("bn-BD")} (${bnmcata.applyfeebd})</td>
          </tr>`
})
bnmctime = `
    ${timetablehead}
    <tr>
      <td>আবদেন শুরুর তারিখ ও সময়</td>
      <td style="width: 50%"> ${ADDMISSIONDATA.MADICALADDATA[bnmcid].appDateStart.toLocaleDateString("bn-BD", dateBangla)} ${ADDMISSIONDATA.MADICALADDATA[bnmcid].appstarttime}</td>
    </tr> 
    <tr>
      <td>আবদেন শেষের তারিখ</td>
      <td style="width: 50%"> ${ADDMISSIONDATA.MADICALADDATA[bnmcid].appDateend.toLocaleDateString("bn-BD", dateBangla)} ${ADDMISSIONDATA.MADICALADDATA[bnmcid].appendtime}</td>
    </tr> 
    <tr>
      <td>আবদেন বর্তমান অবস্থান</td>
      <td style="width: 50%">${ADDMISSIONDATA.MADICALADDATA[bnmcid].datecount}।</td>
    </tr>
    ${applyfeeheader} `



   bnmcotherhhtml =`
    ${admitcardheaderall}
    <tr>
      <td colspan="2">এর প্রবেশপত্র আগামী শনিবার, ১৫ আগস্ট, ২০২৬ বিকাল ৪টা ৩০ মিনিট হতে মঙ্গলবার, ১৮ আগস্ট, ২০২৬ রাত ১১টা ৫৯ মিনিট পর্যন্ত প্রবেশপত্র ডাউনলোড করা যাবে।  </td>
    </tr>
    ${examheaderall}
    <tr>
    <td>পরীক্ষার তারিখ ও সময়</td>
    <td> ${ADDMISSIONDATA.MADICALADDATA[bnmcid].NameBng} এর পরীক্ষা আগামী  ${ADDMISSIONDATA.MADICALADDATA[bnmcid].examtestdate.toLocaleDateString("bn-BD", dateBangla)} ${ADDMISSIONDATA.MADICALADDATA[bnmcid].examtesttime} অনুষ্টিত হবে।
    </tr>
    <tr>
    <td>পরীক্ষার কেন্দ্র  </td>
    <td> <u> <a style="color:#000;" href="./src/noticfile/${ADDMISSIONDATA.MADICALADDATA[bnmcid].notice}" target="_blank" >পরীক্ষার কেন্দ্র ${ADDMISSIONDATA.MADICALADDATA[bnmcid].examCenter}</a> </u> </td>
    </tr>
    <tr>
    <td>পরীক্ষার ধরণ</td>
    <td>${ADDMISSIONDATA.MADICALADDATA[bnmcid].examtype}</td>


    ${examheaderall}
    <tr>
      <td colspan="2">${ADDMISSIONDATA.MADICALADDATA[bnmcid].NameBng} এর ভর্তি পরীক্ষার ফলাফল  ${ADDMISSIONDATA.MADICALADDATA[bnmcid].examresultdate.toLocaleDateString("bn-BD", dateBangla)} তারিখে  ${ADDMISSIONDATA.MADICALADDATA[bnmcid].examresulttme} এ প্রকাাশ করা হবে।
      </td>
    </tr>
  
    `



    
bnmcnoticpub = ADDMISSIONDATA.MADICALADDATA[bnmcid].noticepub;

bnmcfiOPT = `${tableHTMLHeadall} ${bnmcotpcourse}${bnmctime}${bnnmcapplyfee}${bnmcotherhhtml}${tableFooter} <p class="notice_date"> নোটিশ প্রকাশের তারিখ : ${ADDMISSIONDATA.MADICALADDATA[bnmcid].noticepubdate.toLocaleDateString("bn-BD", dateBangla)} </p>${note}` ;

if (bnmcnoticpub === true) {
  bnmcotp =`${bnmcfiOPT}`;
} else {
  bnmcotp = `${notnoticePUb}`
}
document.getElementById("all_bnnc_table_output").innerHTML = bnmcotp;
document.getElementById("medical_bnnc_table_output").innerHTML = bnmcotp;

// +`<p class="notice_date"> নোটিশ প্রকাশের তারিখ : ${ADDMISSIONDATA.MADICALADDATA[bnmcid].noticepubdate.toLocaleDateString("bn-BD", dateBangla)} </p> ${note}
// !
let applyfeeunithtml = "";
// * coad for all
let dutableResult = "";
let dutablefee = "";
let duadmitheadunit = "";
let dutableadmit = "";
let duexamheadunit = "";
let dutableexam = "";
let dutableexmacente = "";
let dutableexamresulthead = "";
let dutableexamresult = "";

DUInfo.forEach(function (dudata) {
  // * result srction 
  dutableResult += `<tr>
      <td>${dudata.NameofUnit}</td>
      <td style="width: 50%;text-align: justify;"> ${dudata.result}</td>
    </tr>  <!-- Result-->`;
  // *fee section
    dutablefee += `<tr>
      <td>${dudata.NameofUnit}</td>
      <td style="width: 50%;"> ${dudata.applyfee.toLocaleString("bn-BD")} (${dudata.applyfeebd}) </td>
    </tr>`;
    applyfeeunithtml = `${applyfeeunit}`
  // * admit section
  let duadmitdownloduintwis = ADDMISSIONDATA.UNIVERSITYDTA[duid].admitdnunitwise; //admit true flase
  let duadmitdownlod = ADDMISSIONDATA.UNIVERSITYDTA[duid].admitdn;
  // ? admit card section
  if (duadmitdownlod === true && duadmitdownloduintwis === false) {
    dutableadmit = `${admitcardheaderall}
      <td colspan="2">সাকল ইউনিটের প্রবেশপত্র ডাউনলোডের আগামী ${ADDMISSIONDATA.UNIVERSITYDTA[duid].admitDNUnitwisdatestart.toLocaleDateString("bn-BD", dateBangla)} ${ADDMISSIONDATA.UNIVERSITYDTA[duid].admitDNUnitwistimestart} হতে ${ADDMISSIONDATA.UNIVERSITYDTA[duid].admitDNUnitwisdateend.toLocaleDateString("bn-BD", dateBangla)} ${ADDMISSIONDATA.UNIVERSITYDTA[duid].admitDNUnitwistimeend} পর্যন্ত প্রবেশপত্র সংগ্রহ করা যাবে।</td>
    </tr>`;
  } 
  // admit down unit
  else if (duadmitdownlod === true && duadmitdownloduintwis === true) {
    // unitwise
    duadmitheadunit=  `${admitcardheaderall}${universityunitdatetime}`
    dutableadmit += `<tr>
      <td>${dudata.NameofUnit}</td>
      <td style="width: 50%;text-align: justify;"> ${dudata.admitdnstart.toLocaleDateString("bn-BD", dateBangla)} ${dudata.admitdnstartTtime} হতে ${dudata.admitdnend.toLocaleDateString("bn-BD", dateBangla)} ${dudata.admitdnendTime} পর্যন্ত প্রবেশপত্র সংগ্রহ করা যাবে। </td>
      
    </tr>`;
  }
  //* exam section 
  let uintwiseExam = ADDMISSIONDATA.UNIVERSITYDTA[duid].examUnitwise; //admit true flase
  // * False for Unit-wise NO , true for Unit-wise yes
  if (uintwiseExam === false) {
    dutableexam = ` 
            ${examheaderall}
<td colspan="2">সাকল ইউনিটের ভর্তি  পরীক্ষা আগামী ${ADDMISSIONDATA.UNIVERSITYDTA[duid].examteststart.toLocaleDateString("bn-BD", dateBangla)} হতে ${ADDMISSIONDATA.UNIVERSITYDTA[duid].examtestend.toLocaleDateString("bn-BD", dateBangla)} মধ্যে ${ADDMISSIONDATA.UNIVERSITYDTA[duid].examCenter}  অনুষ্টিত হবে। উক্ত ভর্তি পরীক্ষাটি ${ADDMISSIONDATA.UNIVERSITYDTA[duid].examtype} প্রশ্নে অনুষ্টিত হবে। </td>      
    </tr>`;
  } else if (uintwiseExam === true) {
    duexamheadunit=  `${examheaderall}${universityunitdatetime}`
    dutableexam += `<tr>
<td>${dudata.NameofUnit}</td>
      <td style="width: 50%"> ${dudata.examdate.toLocaleDateString("bn-BD", dateBangla)} ${dudata.examtime} ।  </td>
      
    </tr>`;
    dutableexmacente= `
            <tr>
              <td>পরীক্ষার কেন্দ্র</td>
              <td>${ADDMISSIONDATA.UNIVERSITYDTA[duid].examCenter} অনুষ্টিত হবে।</td>
            </tr>
            <tr>
              <td>পরীক্ষার ধরণ</td>
              <td>${ADDMISSIONDATA.UNIVERSITYDTA[duid].examtype} প্রশ্নে অনুষ্টিত হবে।</td>
            </tr>
            `;
  }
  //* result section ;
  const duexamresult = ADDMISSIONDATA.UNIVERSITYDTA[duid].examresult;
  const duexamresultunit = ADDMISSIONDATA.UNIVERSITYDTA[duid].examresultUnitwis;
  const duexamresultafter = ADDMISSIONDATA.UNIVERSITYDTA[duid].examrestultafter;
  if (duexamresult === true && duexamresultunit === false && duexamresultafter ===false) {
    //result   uint and after false
    dutableexamresult = `${reusltheaderall}
              <td colspan="2">আগামী ${ADDMISSIONDATA.UNIVERSITYDTA[duid].examresultdate.toLocaleDateString("bn-BD", dateBangla)} তারিখে ${ADDMISSIONDATA.UNIVERSITYDTA[duid].examresulttme} ভর্তি পরীক্ষার ফলাফল প্রকাাশ করা হবে।</td>
            </tr>`;
  } else if (duexamresult === true && duexamresultunit === true && duexamresultafter ===false) {
  dutableexamresulthead = `${reusltheaderall}${universityunitdatetime}`;
  //result   uint true and after false
    dutableexamresult += `            
            <tr>
              <td>${dudata.NameofUnit} </td>
              <td>${dudata.examresultdate.toLocaleDateString("bn-BD", dateBangla)} তারিখে ${dudata.examresulttme} ভর্তি পরীক্ষার ফলাফল প্রকাাশ করা হবে।</td>
            </tr>`;
  } else if (duexamresult === true && duexamresultunit === true && duexamresultafter ===true) {
  dutableexamresulthead = `${reusltheaderall}`;
    dutableexamresult = `            
            <tr>
              <td colspan="2"> পরীক্ষার  ${ADDMISSIONDATA.UNIVERSITYDTA[duid].examrestultafterday.toLocaleString("bn-BD")} দিন পর ভর্তি পরীক্ষার ফলাফল  প্রকাাশ করা হবে।</td>
            </tr>`;
  }
  // exam center
});
// const
// ? table output section
//du
const dutimetable = `
    <tr>
      <td>আবদেন শুরুর তারিখ</td>
      <td style="width: 50%"> ${ADDMISSIONDATA.UNIVERSITYDTA[duid].appDateStart.toLocaleDateString("bn-BD", dateBangla)} ${ADDMISSIONDATA.UNIVERSITYDTA[duid].appstarttime}</td>
    </tr> 
    <tr>
      <td>আবদেন শেষের তারিখ</td>
      <td style="width: 50%"> ${ADDMISSIONDATA.UNIVERSITYDTA[duid].appDateend.toLocaleDateString("bn-BD", dateBangla)}</td>
    </tr> 
    <tr>
      <td>আবদেন বর্তমান অবস্থান</td>
      <td style="width: 50%"> ${ADDMISSIONDATA.UNIVERSITYDTA[duid].datecount}।</td>
    </tr> 
`;

const duNoticePUBDate = `<p class="notice_date"> নোটিশ প্রকাশের তারিখ : ${ADDMISSIONDATA.UNIVERSITYDTA[duid].noticepubdate.toLocaleDateString("bn-BD", dateBangla)} </p>`;

const duNoticePUB = ADDMISSIONDATA.UNIVERSITYDTA[duid].noticepub;
if (duNoticePUB === true) {
  dufinalopt =
    untableHTMLHead +
    dutableResult +
    timetablehead+
    dutimetable+
    applyfeeheader +
    applyfeeunithtml+
    dutablefee +    
    duadmitheadunit+
    dutableadmit+
    duexamheadunit+
    dutableexam+
    dutableexmacente+
    dutableexamresulthead+
    dutableexamresult+
    tableFooter +
    duNoticePUBDate+
    note;
} else {
  dufinalopt = `${notnoticePUb}`;
}
document.getElementById("all_du_table_output").innerHTML = dufinalopt;
document.getElementById("university_du_table_output").innerHTML = dufinalopt;
//du
let rutableResult = "";
let rutablefee = "";
let ruadmithearunit = "";
let rutableadmit = "";
let ruexamhearunit = "";
let rutableexam = "";
let rutableexmacente = "";
let rutableexamresulthead = "";
let rutableexamresult = "";



RUInfo.forEach(function (rudata) {
  // * result srction 
  rutableResult += `<tr>
      <td>${rudata.NameofUnit}</td>
      <td style="width: 50%;text-align: justify;"> ${rudata.result}</td>
    </tr>  <!-- Result-->`;
  // *fee section
    rutablefee += `<tr>
      <td>${rudata.NameofUnit}</td>
      <td style="width: 50%;"> ${rudata.applyfee.toLocaleString("bn-BD")} (${rudata.applyfeebd}) </td>
    </tr>`;
    applyfeeunithtml = `${applyfeeunit}`
  // * admit section
  let ruadmitdownloruintwis = ADDMISSIONDATA.UNIVERSITYDTA[ruid].admitdnunitwise; //admit true flase
  let ruadmitdownlod = ADDMISSIONDATA.UNIVERSITYDTA[ruid].admitdn;
  // ? admit card section
  if (ruadmitdownlod === true && ruadmitdownloruintwis === false) {
    rutableadmit = `${admitcardheaderall}
      <td colspan="2">সাকল ইউনিটের প্রবেশপত্র ডাউনলোডের আগামী ${ADDMISSIONDATA.UNIVERSITYDTA[ruid].admitDNUnitwisdatestart.toLocaleDateString("bn-BD", dateBangla)} ${ADDMISSIONDATA.UNIVERSITYDTA[ruid].admitDNUnitwistimestart} হতে ${ADDMISSIONDATA.UNIVERSITYDTA[ruid].admitDNUnitwisdateend.toLocaleDateString("bn-BD", dateBangla)} ${ADDMISSIONDATA.UNIVERSITYDTA[ruid].admitDNUnitwistimeend} পর্যন্ত প্রবেশপত্র সংগ্রহ করা যাবে।</td>
    </tr>`;
  } 
  // admit down unit
  else if (ruadmitdownlod === true && ruadmitdownloruintwis === true) {
    // unitwise
    ruadmithearunit=  `${admitcardheaderall}${universityunitdatetime}`
    rutableadmit += `<tr>
      <td>${rudata.NameofUnit}</td>
      <td style="width: 50%;text-align: justify;"> ${rudata.admitdnstart.toLocaleDateString("bn-BD", dateBangla)} ${rudata.admitdnstartTtime} হতে ${rudata.admitdnend.toLocaleDateString("bn-BD", dateBangla)} ${rudata.admitdnendTime} পর্যন্ত প্রবেশপত্র সংগ্রহ করা যাবে। </td>
      
    </tr>`;
  }
  //* exam section 
  let uintwiseExam = ADDMISSIONDATA.UNIVERSITYDTA[ruid].examUnitwise; //admit true flase
  // * False for Unit-wise NO , true for Unit-wise yes
  if (uintwiseExam === false) {
    rutableexam = ` 
            ${examheaderall}
<td colspan="2">সাকল ইউনিটের ভর্তি  পরীক্ষা আগামী ${ADDMISSIONDATA.UNIVERSITYDTA[ruid].examteststart.toLocaleDateString("bn-BD", dateBangla)} হতে ${ADDMISSIONDATA.UNIVERSITYDTA[ruid].examtestend.toLocaleDateString("bn-BD", dateBangla)} মধ্যে ${ADDMISSIONDATA.UNIVERSITYDTA[ruid].examCenter}  অনুষ্টিত হবে। উক্ত ভর্তি পরীক্ষাটি ${ADDMISSIONDATA.UNIVERSITYDTA[ruid].examtype} প্রশ্নতে অনুষ্টিত হবে।  </td>      
    </tr>`;
  } else if (uintwiseExam === true) {
    ruexamhearunit=  `${examheaderall}${universityunitdatetime}`
    rutableexam += `<tr>
<td>${rudata.NameofUnit}</td>
      <td style="width: 50%"> ${rudata.examdate.toLocaleDateString("bn-BD", dateBangla)} ${rudata.examtime}।  </td>
      
    </tr>`;
    rutableexmacente= `<tr>
              <td>পরীক্ষার কেন্দ্র</td>
              <td>${ADDMISSIONDATA.UNIVERSITYDTA[ruid].examCenter} অনুষ্টিত হবে।</td>
            </tr>
            <tr>
              <td>পরীক্ষার ধরণ</td>
              <td>${ADDMISSIONDATA.UNIVERSITYDTA[ruid].examtype} অনুষ্টিত হবে।</td>
            </tr>`;
  }
  //* result section ;
  const ruexamresult = ADDMISSIONDATA.UNIVERSITYDTA[ruid].examresult;
  const ruexamresultunit = ADDMISSIONDATA.UNIVERSITYDTA[ruid].examresultUnitwis;
  const ruexamresultafter = ADDMISSIONDATA.UNIVERSITYDTA[ruid].examrestultafter;
  if (ruexamresult === true && ruexamresultunit === false && ruexamresultafter ===false) {
    //result   uint and after false
    rutableexamresult = `${reusltheaderall}
              <td colspan="2">আগামী ${ADDMISSIONDATA.UNIVERSITYDTA[ruid].examresultdate.toLocaleDateString("bn-BD", dateBangla)} তারিখে ${ADDMISSIONDATA.UNIVERSITYDTA[ruid].examresulttme} ভর্তি পরীক্ষার ফলাফল প্রকাাশ করা হবে।</td>
            </tr>`;
  } else if (ruexamresult === true && ruexamresultunit === true && ruexamresultafter ===false) {
  rutableexamresulthead = `${reusltheaderall}${universityunitdatetime}`;
  //result   uint true and after false
    rutableexamresult += `            
            <tr>
              <td>${rudata.NameofUnit} </td>
              <td>${rudata.examresultdate.toLocaleDateString("bn-BD", dateBangla)} তারিখে ${rudata.examresulttme} ভর্তি পরীক্ষার ফলাফল প্রকাাশ করা হবে।</td>
            </tr>`;
  } else if (ruexamresult === true && ruexamresultunit === true && ruexamresultafter ===true) {
  rutableexamresulthead = `${reusltheaderall}`;
    rutableexamresult = `            
            <tr>
              <td colspan="2"> পরীক্ষার  ${ADDMISSIONDATA.UNIVERSITYDTA[ruid].examrestultafterday.toLocaleString("bn-BD")} দিন পর ভর্তি পরীক্ষার ফলাফল  প্রকাাশ করা হবে।</td>
            </tr>`;
  }
  // exam center
});
// const
// ? table output section
//ru
const rutimetable = `
    <tr>
      <td>আবদেন শুরুর তারিখ</td>
      <td style="width: 50%"> ${ADDMISSIONDATA.UNIVERSITYDTA[ruid].appDateStart.toLocaleDateString("bn-BD", dateBangla)} ${ADDMISSIONDATA.UNIVERSITYDTA[ruid].appstarttime}</td>
    </tr> 
    <tr>
      <td>আবদেন শেষের তারিখ</td>
      <td style="width: 50%"> ${ADDMISSIONDATA.UNIVERSITYDTA[ruid].appDateend.toLocaleDateString("bn-BD", dateBangla)}</td>
    </tr> 
    <tr>
      <td>আবদেন বর্তমান অবস্থান</td>
      <td style="width: 50%"> ${ADDMISSIONDATA.UNIVERSITYDTA[ruid].datecount}।</td>
    </tr> 
`;

const ruNoticePUBDate =`<p class="notice_date"> নোটিশ প্রকাশের তারিখ : ${ADDMISSIONDATA.UNIVERSITYDTA[ruid].noticepubdate.toLocaleDateString("bn-BN",dateBangla)} </p>` ;
// const ruNoticePUBDate = ;

const ruNoticePUB = ADDMISSIONDATA.UNIVERSITYDTA[ruid].noticepub;
if (ruNoticePUB === true) {
  rufinalopt =
    untableHTMLHead +
    rutableResult +
    timetablehead+
    rutimetable+
    applyfeeheader +
    applyfeeunithtml+
    rutablefee +    
    ruadmithearunit+
    rutableadmit+
    ruexamhearunit+
    rutableexam+
    rutableexmacente+
    rutableexamresulthead+
    rutableexamresult+
    tableFooter +
    ruNoticePUBDate+
    note;
} else {
  rufinalopt = `${notnoticePUb}`;
}
document.getElementById("all_ru_table_output").innerHTML = rufinalopt;
document.getElementById("university_ru_table_output").innerHTML = rufinalopt;

//ru
let jnutableResult = "";
let jnutablefee = "";
let jnuadmitheajnunit = "";
let jnutableadmit = "";
let jnuexamheajnunit = "";
let jnutableexam = "";
let jnutableexmacente = "";
let jnutableexamresulthead = "";
let jnutableexamresult = "";
JNUInfo.forEach(function (jnudata) {
  // * result srction 
  jnutableResult += `<tr>
      <td>${jnudata.NameofUnit}</td>
      <td style="width: 50%;text-align: justify;"> ${jnudata.result}</td>
    </tr>  <!-- Result-->`;
  // *fee section
    jnutablefee += `<tr>
      <td>${jnudata.NameofUnit}</td>
      <td style="width: 50%;"> ${jnudata.applyfee.toLocaleString("bn-BD")} (${jnudata.applyfeebd}) </td>
    </tr>`;
    applyfeeunithtml = `${applyfeeunit}`
  // * admit section
  let jnuadmitdownlojnuintwis = ADDMISSIONDATA.UNIVERSITYDTA[jnuid].admitdnunitwise; //admit true flase
  let jnuadmitdownlod = ADDMISSIONDATA.UNIVERSITYDTA[jnuid].admitdn;
  // ? admit card section
  if (jnuadmitdownlod === true && jnuadmitdownlojnuintwis === false) {
    jnutableadmit = `${admitcardheaderall}
      <td colspan="2">সাকল ইউনিটের প্রবেশপত্র ডাউনলোডের আগামী ${ADDMISSIONDATA.UNIVERSITYDTA[jnuid].admitDNUnitwisdatestart.toLocaleDateString("bn-BD", dateBangla)} ${ADDMISSIONDATA.UNIVERSITYDTA[jnuid].admitDNUnitwistimestart} হতে ${ADDMISSIONDATA.UNIVERSITYDTA[jnuid].admitDNUnitwisdateend.toLocaleDateString("bn-BD", dateBangla)} ${ADDMISSIONDATA.UNIVERSITYDTA[jnuid].admitDNUnitwistimeend} পর্যন্ত প্রবেশপত্র সংগ্রহ করা যাবে।</td>
    </tr>`;
  } 
  // admit down unit
  else if (jnuadmitdownlod === true && jnuadmitdownlojnuintwis === true) {
    // unitwise
    jnuadmitheajnunit=  `${admitcardheaderall}${universityunitdatetime}`
    jnutableadmit += `<tr>
      <td>${jnudata.NameofUnit}</td>
      <td style="width: 50%;text-align: justify;"> ${jnudata.admitdnstart.toLocaleDateString("bn-BD", dateBangla)} ${jnudata.admitdnstartTtime} হতে ${jnudata.admitdnend.toLocaleDateString("bn-BD", dateBangla)} ${jnudata.admitdnendTime} পর্যন্ত প্রবেশপত্র সংগ্রহ করা যাবে। </td>
      
    </tr>`;
  }
  //* exam section 
  let uintwiseExam = ADDMISSIONDATA.UNIVERSITYDTA[jnuid].examUnitwise; //admit true flase
  // * False for Unit-wise NO , true for Unit-wise yes
  if (uintwiseExam === false) {
    jnutableexam = ` 
            ${examheaderall}
<td colspan="2">সাকল ইউনিটের ভর্তি  পরীক্ষা আগামী ${ADDMISSIONDATA.UNIVERSITYDTA[jnuid].examteststart.toLocaleDateString("bn-BD", dateBangla)} হতে ${ADDMISSIONDATA.UNIVERSITYDTA[jnuid].examtestend.toLocaleDateString("bn-BD", dateBangla)} মধ্যে ${ADDMISSIONDATA.UNIVERSITYDTA[jnuid].examCenter}  অনুষ্টিত হবে।এবং উক্ত ভর্তি পরীক্ষাটি ${ADDMISSIONDATA.UNIVERSITYDTA[jnuid].examtype} প্রশ্নতে পরীক্ষা দিতে হবে।   </td>      
    </tr>`;
  } else if (uintwiseExam === true) {
    jnuexamheajnunit=  `${examheaderall}${universityunitdatetime}`
    jnutableexam += `<tr>
<td>${jnudata.NameofUnit}</td>
      <td style="width: 50%"> ${jnudata.examdate.toLocaleDateString("bn-BD", dateBangla)} ${jnudata.examtime}।  </td>
      
    </tr>`;
    jnutableexmacente= `<tr>
              <td>পরীক্ষার কেন্দ্র</td>
              <td>${ADDMISSIONDATA.UNIVERSITYDTA[jnuid].examCenter} অনুষ্টিত হবে।</td>
            </tr>
            <tr>
              <td>পরীক্ষার ধরণ</td>
              <td>${ADDMISSIONDATA.UNIVERSITYDTA[jnuid].examtype} অনুষ্টিত হবে।</td>
            </tr>`;
  }
  //* result section ;
  const jnuexamresult = ADDMISSIONDATA.UNIVERSITYDTA[jnuid].examresult;
  const jnuexamresultunit = ADDMISSIONDATA.UNIVERSITYDTA[jnuid].examresultUnitwis;
  const jnuexamresultafter = ADDMISSIONDATA.UNIVERSITYDTA[jnuid].examrestultafter;
  if (jnuexamresult === true && jnuexamresultunit === false && jnuexamresultafter ===false) {
    //result   uint and after false
    jnutableexamresult = `${reusltheaderall}
              <td colspan="2">আগামী ${ADDMISSIONDATA.UNIVERSITYDTA[jnuid].examresultdate.toLocaleDateString("bn-BD", dateBangla)} তারিখে ${ADDMISSIONDATA.UNIVERSITYDTA[jnuid].examresulttme} ভর্তি পরীক্ষার ফলাফল প্রকাাশ করা হবে।</td>
            </tr>`;
  } else if (jnuexamresult === true && jnuexamresultunit === true && jnuexamresultafter ===false) {
  jnutableexamresulthead = `${reusltheaderall}${universityunitdatetime}`;
  //result   uint true and after false
    jnutableexamresult += `            
            <tr>
              <td>${jnudata.NameofUnit} </td>
              <td>${jnudata.examresultdate.toLocaleDateString("bn-BD", dateBangla)} তারিখে ${jnudata.examresulttme} ভর্তি পরীক্ষার ফলাফল প্রকাাশ করা হবে।</td>
            </tr>`;
  } else if (jnuexamresult === true && jnuexamresultunit === true && jnuexamresultafter ===true) {
  jnutableexamresulthead = `${reusltheaderall}`;
    jnutableexamresult = `            
            <tr>
              <td colspan="2"> পরীক্ষার  ${ADDMISSIONDATA.UNIVERSITYDTA[jnuid].examrestultafterday.toLocaleString("bn-BD")} দিন পর ভর্তি পরীক্ষার ফলাফল  প্রকাাশ করা হবে।</td>
            </tr>`;
  }
  // exam center
});
// const
// ? table output section
//jnu
const jnutimetable = `
    <tr>
      <td>আবদেন শুরুর তারিখ</td>
      <td style="width: 50%"> ${ADDMISSIONDATA.UNIVERSITYDTA[jnuid].appDateStart.toLocaleDateString("bn-BD", dateBangla)} ${ADDMISSIONDATA.UNIVERSITYDTA[jnuid].appstarttime}</td>
    </tr> 
    <tr>
      <td>আবদেন শেষের তারিখ</td>
      <td style="width: 50%"> ${ADDMISSIONDATA.UNIVERSITYDTA[jnuid].appDateend.toLocaleDateString("bn-BD", dateBangla)}</td>
    </tr> 
    <tr>
      <td>আবদেন বর্তমান অবস্থান</td>
      <td style="width: 50%"> ${ADDMISSIONDATA.UNIVERSITYDTA[jnuid].datecount}।</td>
    </tr> 
`;
const jnunoticepubdate = `<p class="notice_date"> নোটিশ প্রকাশের তারিখ : ${ADDMISSIONDATA.UNIVERSITYDTA[jnuid].noticepubdate.toLocaleDateString("bn-BN",dateBangla)} </p>`;

const jnuNoticePUB = ADDMISSIONDATA.UNIVERSITYDTA[jnuid].noticepub;
if (jnuNoticePUB === true) {
  jnufinalopt =
    untableHTMLHead +
    jnutableResult +
    timetablehead+
    jnutimetable+
    applyfeeheader +
    applyfeeunithtml+
    jnutablefee +    
    jnuadmitheajnunit+
    jnutableadmit+
    jnuexamheajnunit+
    jnutableexam+
    jnutableexmacente+
    jnutableexamresulthead+
    jnutableexamresult+
    tableFooter +
    jnunoticepubdate+
    note;
} else {
  jnufinalopt = `${notnoticePUb}`;
}
document.getElementById("all_jnu_table_output").innerHTML = jnufinalopt;
document.getElementById("university_jnu_table_output").innerHTML = jnufinalopt;
//jnu
let gsttableResult = "";
let gsttablefee = "";
let gstadmitheagstnit = "";
let gsttableadmit = "";
let gstexamheagstnit = "";
let gsttableexam = "";
let gsttableexmacente = "";
let gsttableexamresulthead = "";
let gsttableexamresult = "";



GSTInfo.forEach(function (gstdata) {
  // * result srction 
  gsttableResult += `<tr>
      <td>${gstdata.NameofUnit}</td>
      <td style="width: 50%;text-align: justify;"> ${gstdata.result}</td>
    </tr>  <!-- Result-->`;
  // *fee section
    gsttablefee += `<tr>
      <td>${gstdata.NameofUnit}</td>
      <td style="width: 50%;"> ${gstdata.applyfee.toLocaleString("bn-BD")} (${gstdata.applyfeebd}) </td>
    </tr>`;
    applyfeeunithtml = `${applyfeeunit}`
  // * admit section
  let gstadmitdownlogstintwis = ADDMISSIONDATA.UNIVERSITYDTA[gstid].admitdnunitwise; //admit true flase
  let gstadmitdownlod = ADDMISSIONDATA.UNIVERSITYDTA[gstid].admitdn;
  // ? admit card section
  if (gstadmitdownlod === true && gstadmitdownlogstintwis === false) {
    gsttableadmit = `${admitcardheaderall}
      <td colspan="2">সাকল ইউনিটের প্রবেশপত্র ডাউনলোডের আগামী ${ADDMISSIONDATA.UNIVERSITYDTA[gstid].admitDNUnitwisdatestart.toLocaleDateString("bn-BD", dateBangla)} ${ADDMISSIONDATA.UNIVERSITYDTA[gstid].admitDNUnitwistimestart} হতে ${ADDMISSIONDATA.UNIVERSITYDTA[gstid].admitDNUnitwisdateend.toLocaleDateString("bn-BD", dateBangla)} ${ADDMISSIONDATA.UNIVERSITYDTA[gstid].admitDNUnitwistimeend} পর্যন্ত প্রবেশপত্র সংগ্রহ করা যাবে।</td>
    </tr>`;
  } 
  // admit down unit
  else if (gstadmitdownlod === true && gstadmitdownlogstintwis === true) {
    // unitwise
    gstadmitheagstnit=  `${admitcardheaderall}${universityunitdatetime}`
    gsttableadmit += `<tr>
      <td>${gstdata.NameofUnit}</td>
      <td style="width: 50%;text-align: justify;"> ${gstdata.admitdnstart.toLocaleDateString("bn-BD", dateBangla)} ${gstdata.admitdnstartTtime} হতে ${gstdata.admitdnend.toLocaleDateString("bn-BD", dateBangla)} ${gstdata.admitdnendTime} পর্যন্ত প্রবেশপত্র সংগ্রহ করা যাবে। </td>
      
    </tr>`;
  }
  //* exam section 
  let uintwiseExam = ADDMISSIONDATA.UNIVERSITYDTA[gstid].examUnitwise; //admit true flase
  // * False for Unit-wise NO , true for Unit-wise yes
  if (uintwiseExam === false) {
    gsttableexam = ` 
            ${examheaderall}
<td colspan="2">সাকল ইউনিটের ভর্তি  পরীক্ষা আগামী ${ADDMISSIONDATA.UNIVERSITYDTA[gstid].examteststart.toLocaleDateString("bn-BD", dateBangla)} হতে ${ADDMISSIONDATA.UNIVERSITYDTA[gstid].examtestend.toLocaleDateString("bn-BD", dateBangla)} মধ্যে ${ADDMISSIONDATA.UNIVERSITYDTA[gstid].examCenter}  অনুষ্টিত হবে। ${ADDMISSIONDATA.UNIVERSITYDTA[gstid].examtype}  </td>      
    </tr>`;
  } else if (uintwiseExam === true) {
    gstexamheagstnit=  `${examheaderall}${universityunitdatetime}`
    gsttableexam += `<tr>
<td>${gstdata.NameofUnit}</td>
      <td style="width: 50%"> ${gstdata.examdate.toLocaleDateString("bn-BD", dateBangla)} ${gstdata.examtime}।  </td>
      
    </tr>`;
    gsttableexmacente= `<tr>
              <td>পরীক্ষার কেন্দ্র</td>
              <td>${ADDMISSIONDATA.UNIVERSITYDTA[gstid].examCenter}।</td>
            </tr>
            <tr>
              <td>পরীক্ষার ধরণ</td>
              <td>${ADDMISSIONDATA.UNIVERSITYDTA[gstid].examtype} ।</td>
            </tr>`;
  }
  //* result section ;
  const gstexamresult = ADDMISSIONDATA.UNIVERSITYDTA[gstid].examresult;
  const gstexamresultunit = ADDMISSIONDATA.UNIVERSITYDTA[gstid].examresultUnitwis;
  const gstexamresultafter = ADDMISSIONDATA.UNIVERSITYDTA[gstid].examrestultafter;
  if (gstexamresult === true && gstexamresultunit === false && gstexamresultafter ===false) {
    //result   uint and after false
    gsttableexamresult = `${reusltheaderall}
              <td colspan="2">আগামী ${ADDMISSIONDATA.UNIVERSITYDTA[gstid].examresultdate.toLocaleDateString("bn-BD", dateBangla)} তারিখে ${ADDMISSIONDATA.UNIVERSITYDTA[gstid].examresulttme} ভর্তি পরীক্ষার ফলাফল প্রকাাশ করা হবে।</td>
            </tr>`;
  } else if (gstexamresult === true && gstexamresultunit === true && gstexamresultafter ===false) {
  gsttableexamresulthead = `${reusltheaderall}${universityunitdatetime}`;
  //result   uint true and after false
    gsttableexamresult += `            
            <tr>
              <td>${gstdata.NameofUnit} </td>
              <td>${gstdata.examresultdate.toLocaleDateString("bn-BD", dateBangla)} তারিখে ${gstdata.examresulttme} ভর্তি পরীক্ষার ফলাফল প্রকাাশ করা হবে।</td>
            </tr>`;
  } else if (gstexamresult === true && gstexamresultunit === true && gstexamresultafter ===true) {
  gsttableexamresulthead = `${reusltheaderall}`;
    gsttableexamresult = `            
            <tr>
              <td colspan="2"> পরীক্ষার  ${ADDMISSIONDATA.UNIVERSITYDTA[gstid].examrestultafterday.toLocaleString("bn-BD")} দিন পর ভর্তি পরীক্ষার ফলাফল  প্রকাাশ করা হবে।</td>
            </tr>`;
  }
  // exam center
});
// const
// ? table output section
//gst
const gsttimetable = `
    <tr>
      <td>আবদেন শুরুর তারিখ</td>
      <td style="width: 50%"> ${ADDMISSIONDATA.UNIVERSITYDTA[gstid].appDateStart.toLocaleDateString("bn-BD", dateBangla)} ${ADDMISSIONDATA.UNIVERSITYDTA[gstid].appstarttime}</td>
    </tr> 
    <tr>
      <td>আবদেন শেষের তারিখ</td>
      <td style="width: 50%"> ${ADDMISSIONDATA.UNIVERSITYDTA[gstid].appDateend.toLocaleDateString("bn-BD", dateBangla)}</td>
    </tr> 
    <tr>
      <td>আবদেন বর্তমান অবস্থান</td>
      <td style="width: 50%"> ${ADDMISSIONDATA.UNIVERSITYDTA[gstid].datecount}।</td>
    </tr> 
`;
const gstNoticePUBDate = `<p class="notice_date"> নোটিশ প্রকাশের তারিখ : ${ADDMISSIONDATA.UNIVERSITYDTA[gstid].noticepubdate.toLocaleDateString("bn-BN",dateBangla)} </p>`


// ADDMISSIONDATA.UNIVERSITYDTA[gstid].noticepubdate.toLocaleDateString("bn-BD", dateBangla)

const gstNoticePUB = ADDMISSIONDATA.UNIVERSITYDTA[gstid].noticepub;
if (gstNoticePUB === true) {
  gstfinalopt =
    untableHTMLHead +
    gsttableResult +
    timetablehead+
    gsttimetable+
    applyfeeheader +
    applyfeeunithtml+
    gsttablefee +    
    gstadmitheagstnit+
    gsttableadmit+
    gstexamheagstnit+
    gsttableexam+
    gsttableexmacente+
    gsttableexamresulthead+
    gsttableexamresult+
    tableFooter +
    gstNoticePUBDate+
    note;
} else {
  gstfinalopt = `${notnoticePUb}`;
}
document.getElementById("all_gst_table_output").innerHTML = gstfinalopt;
document.getElementById("university_gst_table_output").innerHTML = gstfinalopt;
//gst
let jutableResult = "";
let jutablefee = "";
let juadmitheajunit = "";
let jutableadmit = "";
let juexamheajunit = "";
let jutableexam = "";
let jutableexmacente = "";
let jutableexamresulthead = "";
let jutableexamresult = "";



JUInfo.forEach(function (judata) {
  // * result srction 
  jutableResult += `<tr>
      <td>${judata.NameofUnit}</td>
      <td style="width: 50%;text-align: justify;"> ${judata.result}</td>
    </tr>  <!-- Result-->`;
  // *fee section
    jutablefee += `<tr>
      <td>${judata.NameofUnit}</td>
      <td style="width: 50%;"> ${judata.applyfee.toLocaleString("bn-BD")} (${judata.applyfeebd}) </td>
    </tr>`;
    applyfeeunithtml = `${applyfeeunit}`
  // * admit section
  let juadmitdownlojuintwis = ADDMISSIONDATA.UNIVERSITYDTA[juid].admitdnunitwise; //admit true flase
  let juadmitdownlod = ADDMISSIONDATA.UNIVERSITYDTA[juid].admitdn;
  // ? admit card section
  if (juadmitdownlod === true && juadmitdownlojuintwis === false) {
    jutableadmit = `${admitcardheaderall}
      <td colspan="2">সাকল ইউনিটের প্রবেশপত্র ডাউনলোডের আগামী ${ADDMISSIONDATA.UNIVERSITYDTA[juid].admitDNUnitwisdatestart.toLocaleDateString("bn-BD", dateBangla)} ${ADDMISSIONDATA.UNIVERSITYDTA[juid].admitDNUnitwistimestart} হতে ${ADDMISSIONDATA.UNIVERSITYDTA[juid].admitDNUnitwisdateend.toLocaleDateString("bn-BD", dateBangla)} ${ADDMISSIONDATA.UNIVERSITYDTA[juid].admitDNUnitwistimeend} পর্যন্ত প্রবেশপত্র সংগ্রহ করা যাবে।</td>
    </tr>`;
  } 
  // admit down unit
  else if (juadmitdownlod === true && juadmitdownlojuintwis === true) {
    // unitwise
    juadmitheajunit=  `${admitcardheaderall}${universityunitdatetime}`
    jutableadmit += `<tr>
      <td>${judata.NameofUnit}</td>
      <td style="width: 50%;text-align: justify;"> ${judata.admitdnstart.toLocaleDateString("bn-BD", dateBangla)} ${judata.admitdnstartTtime} হতে ${judata.admitdnend.toLocaleDateString("bn-BD", dateBangla)} ${judata.admitdnendTime} পর্যন্ত প্রবেশপত্র সংগ্রহ করা যাবে। </td>
      
    </tr>`;
  }
  //* exam section 
  let uintwiseExam = ADDMISSIONDATA.UNIVERSITYDTA[juid].examUnitwise; //admit true flase
  // * False for Unit-wise NO , true for Unit-wise yes
  if (uintwiseExam === false) {
    jutableexam = ` 
            ${examheaderall}
<td colspan="2">সাকল ইউনিটের ভর্তি  পরীক্ষা আগামী ${ADDMISSIONDATA.UNIVERSITYDTA[juid].examteststart.toLocaleDateString("bn-BD", dateBangla)} হতে ${ADDMISSIONDATA.UNIVERSITYDTA[juid].examtestend.toLocaleDateString("bn-BD", dateBangla)} মধ্যে ${ADDMISSIONDATA.UNIVERSITYDTA[juid].examCenter}  অনুষ্টিত হবে। উক্ত ভর্তি পরীক্ষাটি ${ADDMISSIONDATA.UNIVERSITYDTA[juid].examtype} প্রশ্নতে অনুষ্টিত হবে।  </td>      
    </tr>`;
  } else if (uintwiseExam === true) {
    juexamheajunit=  `${examheaderall}${universityunitdatetime}`
    jutableexam += `<tr>
<td>${judata.NameofUnit}</td>
      <td style="width: 50%"> ${judata.examdate.toLocaleDateString("bn-BD", dateBangla)} ${judata.examtime}।  </td>
      
    </tr>`;
    jutableexmacente= `
    <tr>
              <td>পরীক্ষার কেন্দ্র</td>
              <td>${ADDMISSIONDATA.UNIVERSITYDTA[juid].examCenter} অনুষ্টিত হবে।</td>
            </tr>
    <tr>
              <td>পরীক্ষার ধরণ</td>
              <td>${ADDMISSIONDATA.UNIVERSITYDTA[juid].examtype}</td>
            </tr>
            `;
  }
  //* result section ;
  const juexamresult = ADDMISSIONDATA.UNIVERSITYDTA[juid].examresult;
  const juexamresultunit = ADDMISSIONDATA.UNIVERSITYDTA[juid].examresultUnitwis;
  const juexamresultafter = ADDMISSIONDATA.UNIVERSITYDTA[juid].examrestultafter;
  if (juexamresult === true && juexamresultunit === false && juexamresultafter ===false) {
    //result   uint and after false
    jutableexamresult = `${reusltheaderall}
              <td colspan="2">আগামী ${ADDMISSIONDATA.UNIVERSITYDTA[juid].examresultdate.toLocaleDateString("bn-BD", dateBangla)} তারিখে ${ADDMISSIONDATA.UNIVERSITYDTA[juid].examresulttme} ভর্তি পরীক্ষার ফলাফল প্রকাাশ করা হবে।</td>
            </tr>`;
  } else if (juexamresult === true && juexamresultunit === true && juexamresultafter ===false) {
  jutableexamresulthead = `${reusltheaderall}${universityunitdatetime}`;
  //result   uint true and after false
    jutableexamresult += `            
            <tr>
              <td>${judata.NameofUnit} </td>
              <td>${judata.examresultdate.toLocaleDateString("bn-BD", dateBangla)} তারিখে ${judata.examresulttme} ভর্তি পরীক্ষার ফলাফল প্রকাাশ করা হবে।</td>
            </tr>`;
  } else if (juexamresult === true && juexamresultunit === true && juexamresultafter ===true) {
  jutableexamresulthead = `${reusltheaderall}`;
    jutableexamresult = `            
            <tr>
              <td colspan="2"> পরীক্ষার  ${ADDMISSIONDATA.UNIVERSITYDTA[juid].examrestultafterday.toLocaleString("bn-BD")} দিন পর ভর্তি পরীক্ষার ফলাফল  প্রকাাশ করা হবে।</td>
            </tr>`;
  }
  // exam center
});
// const
// ? table output section
//ju
const jutimetable = `
    <tr>
      <td>আবদেন শুরুর তারিখ</td>
      <td style="width: 50%"> ${ADDMISSIONDATA.UNIVERSITYDTA[juid].appDateStart.toLocaleDateString("bn-BD", dateBangla)} ${ADDMISSIONDATA.UNIVERSITYDTA[juid].appstarttime}</td>
    </tr> 
    <tr>
      <td>আবদেন শেষের তারিখ</td>
      <td style="width: 50%"> ${ADDMISSIONDATA.UNIVERSITYDTA[juid].appDateend.toLocaleDateString("bn-BD", dateBangla)}</td>
    </tr> 
    <tr>
      <td>আবদেন বর্তমান অবস্থান</td>
      <td style="width: 50%"> ${ADDMISSIONDATA.UNIVERSITYDTA[juid].datecount}।</td>
    </tr> 
`;
const junoticepubdate = `<p class="notice_date"> নোটিশ প্রকাশের তারিখ : ${ADDMISSIONDATA.UNIVERSITYDTA[juid].noticepubdate.toLocaleDateString("bn-BN",dateBangla)} </p>`
const juNoticePUB = ADDMISSIONDATA.UNIVERSITYDTA[juid].noticepub;
if (juNoticePUB === true) {
  jufinalopt =
    untableHTMLHead +
    jutableResult +
    timetablehead+
    jutimetable+
    applyfeeheader +
    applyfeeunithtml+
    jutablefee +    
    juadmitheajunit+
    jutableadmit+
    juexamheajunit+
    jutableexam+
    jutableexmacente+
    jutableexamresulthead+
    jutableexamresult+
    tableFooter +
    junoticepubdate+
    note;
} else {
  jufinalopt = `${notnoticePUb}`;
}
document.getElementById("all_ju_table_output").innerHTML = jufinalopt;
document.getElementById("university_ju_table_output").innerHTML = jufinalopt;
//ju
//ju