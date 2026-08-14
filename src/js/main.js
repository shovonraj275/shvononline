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
  school: document.getElementById("school"),
  college: document.getElementById("college"),
  university: document.getElementById("university"),
  medical: document.getElementById("medical"),
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
              <th colspan="2" style="text-align: center;">ভর্তি পরীক্ষার সময়সৃচী</th>
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
        
        `;
});
document.getElementById("university_opt").innerHTML = universityOPTmian;

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
  let duadmitdownloduintwis = UNIVERSITYDTA[duid].admitdnunitwise; //admit true flase
  let duadmitdownlod = UNIVERSITYDTA[duid].admitdn;
  // ? admit card section
  if (duadmitdownlod === true && duadmitdownloduintwis === false) {
    dutableadmit = `${admitcardheaderall}
      <td colspan="2">সাকল ইউনিটের প্রবেশপত্র ডাউনলোডের আগামী ${UNIVERSITYDTA[duid].admitDNUnitwisdatestart.toLocaleDateString("bn-BD", dateBangla)} ${UNIVERSITYDTA[duid].admitDNUnitwistimestart} হতে ${UNIVERSITYDTA[duid].admitDNUnitwisdateend.toLocaleDateString("bn-BD", dateBangla)} ${UNIVERSITYDTA[duid].admitDNUnitwistimeend} পর্যন্ত প্রবেশপত্র সংগ্রহ করা যাবে।</td>
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
  let uintwiseExam = UNIVERSITYDTA[duid].examUnitwise; //admit true flase
  // * False for Unit-wise NO , true for Unit-wise yes
  if (uintwiseExam === false) {
    dutableexam = ` 
            ${examheaderall}
<td colspan="2">সাকল ইউনিটের ভর্তি  পরীক্ষা আগামী ${UNIVERSITYDTA[duid].examteststart.toLocaleDateString("bn-BD", dateBangla)} হতে ${UNIVERSITYDTA[duid].examtestend.toLocaleDateString("bn-BD", dateBangla)} মধ্যে ${UNIVERSITYDTA[duid].examCenter}  অনুষ্টিত হবে।  </td>      
    </tr>`;
  } else if (uintwiseExam === true) {
    duexamheadunit=  `${examheaderall}${universityunitdatetime}`
    dutableexam += `<tr>
<td>${dudata.NameofUnit}</td>
      <td style="width: 50%"> ${dudata.examdate.toLocaleDateString("bn-BD", dateBangla)} ${dudata.examtime} ।  </td>
      
    </tr>`;
    dutableexmacente= `<tr>
              <td>পরীক্ষার কেন্দ্র</td>
              <td>${UNIVERSITYDTA[duid].examCenter} অনুষ্টিত হবে।</td>
            </tr>`;
  }
  //* result section ;
  const duexamresult = UNIVERSITYDTA[duid].examresult;
  const duexamresultunit = UNIVERSITYDTA[duid].examresultUnitwis;
  const duexamresultafter = UNIVERSITYDTA[duid].examrestultafter;
  if (duexamresult === true && duexamresultunit === false && duexamresultafter ===false) {
    //result   uint and after false
    dutableexamresult = `${reusltheaderall}
              <td colspan="2">আগামী ${UNIVERSITYDTA[duid].examresultdate.toLocaleDateString("bn-BD", dateBangla)} তারিখে ${UNIVERSITYDTA[duid].examresulttme} ভর্তি পরীক্ষার ফলাফল প্রকাাশ করা হবে।</td>
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
              <td colspan="2"> পরীক্ষার  ${UNIVERSITYDTA[duid].examrestultafterday.toLocaleString("bn-BD")} দিন পর ভর্তি পরীক্ষার ফলাফল  প্রকাাশ করা হবে।</td>
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
      <td style="width: 50%"> ${UNIVERSITYDTA[duid].appDateStart.toLocaleDateString("bn-BD", dateBangla)} ${UNIVERSITYDTA[duid].appstarttime}</td>
    </tr> 
    <tr>
      <td>আবদেন শেষের তারিখ</td>
      <td style="width: 50%"> ${UNIVERSITYDTA[duid].appDateend.toLocaleDateString("bn-BD", dateBangla)}</td>
    </tr> 
    <tr>
      <td>আবদেন বর্তমান অবস্থান</td>
      <td style="width: 50%"> ${UNIVERSITYDTA[duid].datecount}।</td>
    </tr> 
`;

const duNoticePUB = UNIVERSITYDTA[duid].noticepub;
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
    note;
} else {
  dufinalopt = `${notnoticePUb}`;
}
document.getElementById("du_table_output").innerHTML = dufinalopt;
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
  let ruadmitdownloruintwis = UNIVERSITYDTA[ruid].admitdnunitwise; //admit true flase
  let ruadmitdownlod = UNIVERSITYDTA[ruid].admitdn;
  // ? admit card section
  if (ruadmitdownlod === true && ruadmitdownloruintwis === false) {
    rutableadmit = `${admitcardheaderall}
      <td colspan="2">সাকল ইউনিটের প্রবেশপত্র ডাউনলোডের আগামী ${UNIVERSITYDTA[ruid].admitDNUnitwisdatestart.toLocaleDateString("bn-BD", dateBangla)} ${UNIVERSITYDTA[ruid].admitDNUnitwistimestart} হতে ${UNIVERSITYDTA[ruid].admitDNUnitwisdateend.toLocaleDateString("bn-BD", dateBangla)} ${UNIVERSITYDTA[ruid].admitDNUnitwistimeend} পর্যন্ত প্রবেশপত্র সংগ্রহ করা যাবে।</td>
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
  let uintwiseExam = UNIVERSITYDTA[ruid].examUnitwise; //admit true flase
  // * False for Unit-wise NO , true for Unit-wise yes
  if (uintwiseExam === false) {
    rutableexam = ` 
            ${examheaderall}
<td colspan="2">সাকল ইউনিটের ভর্তি  পরীক্ষা আগামী ${UNIVERSITYDTA[ruid].examteststart.toLocaleDateString("bn-BD", dateBangla)} হতে ${UNIVERSITYDTA[ruid].examtestend.toLocaleDateString("bn-BD", dateBangla)} মধ্যে ${UNIVERSITYDTA[ruid].examCenter}  অনুষ্টিত হবে।  </td>      
    </tr>`;
  } else if (uintwiseExam === true) {
    ruexamhearunit=  `${examheaderall}${universityunitdatetime}`
    rutableexam += `<tr>
<td>${rudata.NameofUnit}</td>
      <td style="width: 50%"> ${rudata.examdate.toLocaleDateString("bn-BD", dateBangla)} ${rudata.examtime}।  </td>
      
    </tr>`;
    rutableexmacente= `<tr>
              <td>পরীক্ষার কেন্দ্র</td>
              <td>${UNIVERSITYDTA[ruid].examCenter} অনুষ্টিত হবে।</td>
            </tr>`;
  }
  //* result section ;
  const ruexamresult = UNIVERSITYDTA[ruid].examresult;
  const ruexamresultunit = UNIVERSITYDTA[ruid].examresultUnitwis;
  const ruexamresultafter = UNIVERSITYDTA[ruid].examrestultafter;
  if (ruexamresult === true && ruexamresultunit === false && ruexamresultafter ===false) {
    //result   uint and after false
    rutableexamresult = `${reusltheaderall}
              <td colspan="2">আগামী ${UNIVERSITYDTA[ruid].examresultdate.toLocaleDateString("bn-BD", dateBangla)} তারিখে ${UNIVERSITYDTA[ruid].examresulttme} ভর্তি পরীক্ষার ফলাফল প্রকাাশ করা হবে।</td>
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
              <td colspan="2"> পরীক্ষার  ${UNIVERSITYDTA[ruid].examrestultafterday.toLocaleString("bn-BD")} দিন পর ভর্তি পরীক্ষার ফলাফল  প্রকাাশ করা হবে।</td>
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
      <td style="width: 50%"> ${UNIVERSITYDTA[ruid].appDateStart.toLocaleDateString("bn-BD", dateBangla)} ${UNIVERSITYDTA[ruid].appstarttime}</td>
    </tr> 
    <tr>
      <td>আবদেন শেষের তারিখ</td>
      <td style="width: 50%"> ${UNIVERSITYDTA[ruid].appDateend.toLocaleDateString("bn-BD", dateBangla)}</td>
    </tr> 
    <tr>
      <td>আবদেন বর্তমান অবস্থান</td>
      <td style="width: 50%"> ${UNIVERSITYDTA[ruid].datecount}।</td>
    </tr> 
`;

const ruNoticePUB = UNIVERSITYDTA[ruid].noticepub;
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
    note;
} else {
  rufinalopt = `${notnoticePUb}`;
}
document.getElementById("ru_table_output").innerHTML = rufinalopt;
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
  let jnuadmitdownlojnuintwis = UNIVERSITYDTA[jnuid].admitdnunitwise; //admit true flase
  let jnuadmitdownlod = UNIVERSITYDTA[jnuid].admitdn;
  // ? admit card section
  if (jnuadmitdownlod === true && jnuadmitdownlojnuintwis === false) {
    jnutableadmit = `${admitcardheaderall}
      <td colspan="2">সাকল ইউনিটের প্রবেশপত্র ডাউনলোডের আগামী ${UNIVERSITYDTA[jnuid].admitDNUnitwisdatestart.toLocaleDateString("bn-BD", dateBangla)} ${UNIVERSITYDTA[jnuid].admitDNUnitwistimestart} হতে ${UNIVERSITYDTA[jnuid].admitDNUnitwisdateend.toLocaleDateString("bn-BD", dateBangla)} ${UNIVERSITYDTA[jnuid].admitDNUnitwistimeend} পর্যন্ত প্রবেশপত্র সংগ্রহ করা যাবে।</td>
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
  let uintwiseExam = UNIVERSITYDTA[jnuid].examUnitwise; //admit true flase
  // * False for Unit-wise NO , true for Unit-wise yes
  if (uintwiseExam === false) {
    jnutableexam = ` 
            ${examheaderall}
<td colspan="2">সাকল ইউনিটের ভর্তি  পরীক্ষা আগামী ${UNIVERSITYDTA[jnuid].examteststart.toLocaleDateString("bn-BD", dateBangla)} হতে ${UNIVERSITYDTA[jnuid].examtestend.toLocaleDateString("bn-BD", dateBangla)} মধ্যে ${UNIVERSITYDTA[jnuid].examCenter}  অনুষ্টিত হবে।  </td>      
    </tr>`;
  } else if (uintwiseExam === true) {
    jnuexamheajnunit=  `${examheaderall}${universityunitdatetime}`
    jnutableexam += `<tr>
<td>${jnudata.NameofUnit}</td>
      <td style="width: 50%"> ${jnudata.examdate.toLocaleDateString("bn-BD", dateBangla)} ${jnudata.examtime}।  </td>
      
    </tr>`;
    jnutableexmacente= `<tr>
              <td>পরীক্ষার কেন্দ্র</td>
              <td>${UNIVERSITYDTA[jnuid].examCenter} অনুষ্টিত হবে।</td>
            </tr>`;
  }
  //* result section ;
  const jnuexamresult = UNIVERSITYDTA[jnuid].examresult;
  const jnuexamresultunit = UNIVERSITYDTA[jnuid].examresultUnitwis;
  const jnuexamresultafter = UNIVERSITYDTA[jnuid].examrestultafter;
  if (jnuexamresult === true && jnuexamresultunit === false && jnuexamresultafter ===false) {
    //result   uint and after false
    jnutableexamresult = `${reusltheaderall}
              <td colspan="2">আগামী ${UNIVERSITYDTA[jnuid].examresultdate.toLocaleDateString("bn-BD", dateBangla)} তারিখে ${UNIVERSITYDTA[jnuid].examresulttme} ভর্তি পরীক্ষার ফলাফল প্রকাাশ করা হবে।</td>
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
              <td colspan="2"> পরীক্ষার  ${UNIVERSITYDTA[jnuid].examrestultafterday.toLocaleString("bn-BD")} দিন পর ভর্তি পরীক্ষার ফলাফল  প্রকাাশ করা হবে।</td>
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
      <td style="width: 50%"> ${UNIVERSITYDTA[jnuid].appDateStart.toLocaleDateString("bn-BD", dateBangla)} ${UNIVERSITYDTA[jnuid].appstarttime}</td>
    </tr> 
    <tr>
      <td>আবদেন শেষের তারিখ</td>
      <td style="width: 50%"> ${UNIVERSITYDTA[jnuid].appDateend.toLocaleDateString("bn-BD", dateBangla)}</td>
    </tr> 
    <tr>
      <td>আবদেন বর্তমান অবস্থান</td>
      <td style="width: 50%"> ${UNIVERSITYDTA[jnuid].datecount}।</td>
    </tr> 
`;

const jnuNoticePUB = UNIVERSITYDTA[jnuid].noticepub;
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
    note;
} else {
  jnufinalopt = `${notnoticePUb}`;
}
document.getElementById("jnu_table_output").innerHTML = jnufinalopt;
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
  let gstadmitdownlogstintwis = UNIVERSITYDTA[gstid].admitdnunitwise; //admit true flase
  let gstadmitdownlod = UNIVERSITYDTA[gstid].admitdn;
  // ? admit card section
  if (gstadmitdownlod === true && gstadmitdownlogstintwis === false) {
    gsttableadmit = `${admitcardheaderall}
      <td colspan="2">সাকল ইউনিটের প্রবেশপত্র ডাউনলোডের আগামী ${UNIVERSITYDTA[gstid].admitDNUnitwisdatestart.toLocaleDateString("bn-BD", dateBangla)} ${UNIVERSITYDTA[gstid].admitDNUnitwistimestart} হতে ${UNIVERSITYDTA[gstid].admitDNUnitwisdateend.toLocaleDateString("bn-BD", dateBangla)} ${UNIVERSITYDTA[gstid].admitDNUnitwistimeend} পর্যন্ত প্রবেশপত্র সংগ্রহ করা যাবে।</td>
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
  let uintwiseExam = UNIVERSITYDTA[gstid].examUnitwise; //admit true flase
  // * False for Unit-wise NO , true for Unit-wise yes
  if (uintwiseExam === false) {
    gsttableexam = ` 
            ${examheaderall}
<td colspan="2">সাকল ইউনিটের ভর্তি  পরীক্ষা আগামী ${UNIVERSITYDTA[gstid].examteststart.toLocaleDateString("bn-BD", dateBangla)} হতে ${UNIVERSITYDTA[gstid].examtestend.toLocaleDateString("bn-BD", dateBangla)} মধ্যে ${UNIVERSITYDTA[gstid].examCenter}  অনুষ্টিত হবে।  </td>      
    </tr>`;
  } else if (uintwiseExam === true) {
    gstexamheagstnit=  `${examheaderall}${universityunitdatetime}`
    gsttableexam += `<tr>
<td>${gstdata.NameofUnit}</td>
      <td style="width: 50%"> ${gstdata.examdate.toLocaleDateString("bn-BD", dateBangla)} ${gstdata.examtime}।  </td>
      
    </tr>`;
    gsttableexmacente= `<tr>
              <td>পরীক্ষার কেন্দ্র</td>
              <td>${UNIVERSITYDTA[gstid].examCenter} অনুষ্টিত হবে।</td>
            </tr>`;
  }
  //* result section ;
  const gstexamresult = UNIVERSITYDTA[gstid].examresult;
  const gstexamresultunit = UNIVERSITYDTA[gstid].examresultUnitwis;
  const gstexamresultafter = UNIVERSITYDTA[gstid].examrestultafter;
  if (gstexamresult === true && gstexamresultunit === false && gstexamresultafter ===false) {
    //result   uint and after false
    gsttableexamresult = `${reusltheaderall}
              <td colspan="2">আগামী ${UNIVERSITYDTA[gstid].examresultdate.toLocaleDateString("bn-BD", dateBangla)} তারিখে ${UNIVERSITYDTA[gstid].examresulttme} ভর্তি পরীক্ষার ফলাফল প্রকাাশ করা হবে।</td>
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
              <td colspan="2"> পরীক্ষার  ${UNIVERSITYDTA[gstid].examrestultafterday.toLocaleString("bn-BD")} দিন পর ভর্তি পরীক্ষার ফলাফল  প্রকাাশ করা হবে।</td>
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
      <td style="width: 50%"> ${UNIVERSITYDTA[gstid].appDateStart.toLocaleDateString("bn-BD", dateBangla)} ${UNIVERSITYDTA[gstid].appstarttime}</td>
    </tr> 
    <tr>
      <td>আবদেন শেষের তারিখ</td>
      <td style="width: 50%"> ${UNIVERSITYDTA[gstid].appDateend.toLocaleDateString("bn-BD", dateBangla)}</td>
    </tr> 
    <tr>
      <td>আবদেন বর্তমান অবস্থান</td>
      <td style="width: 50%"> ${UNIVERSITYDTA[gstid].datecount}।</td>
    </tr> 
`;

const gstNoticePUB = UNIVERSITYDTA[gstid].noticepub;
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
    note;
} else {
  gstfinalopt = `${notnoticePUb}`;
}
document.getElementById("gst_table_output").innerHTML = gstfinalopt;
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
  let juadmitdownlojuintwis = UNIVERSITYDTA[juid].admitdnunitwise; //admit true flase
  let juadmitdownlod = UNIVERSITYDTA[juid].admitdn;
  // ? admit card section
  if (juadmitdownlod === true && juadmitdownlojuintwis === false) {
    jutableadmit = `${admitcardheaderall}
      <td colspan="2">সাকল ইউনিটের প্রবেশপত্র ডাউনলোডের আগামী ${UNIVERSITYDTA[juid].admitDNUnitwisdatestart.toLocaleDateString("bn-BD", dateBangla)} ${UNIVERSITYDTA[juid].admitDNUnitwistimestart} হতে ${UNIVERSITYDTA[juid].admitDNUnitwisdateend.toLocaleDateString("bn-BD", dateBangla)} ${UNIVERSITYDTA[juid].admitDNUnitwistimeend} পর্যন্ত প্রবেশপত্র সংগ্রহ করা যাবে।</td>
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
  let uintwiseExam = UNIVERSITYDTA[juid].examUnitwise; //admit true flase
  // * False for Unit-wise NO , true for Unit-wise yes
  if (uintwiseExam === false) {
    jutableexam = ` 
            ${examheaderall}
<td colspan="2">সাকল ইউনিটের ভর্তি  পরীক্ষা আগামী ${UNIVERSITYDTA[juid].examteststart.toLocaleDateString("bn-BD", dateBangla)} হতে ${UNIVERSITYDTA[juid].examtestend.toLocaleDateString("bn-BD", dateBangla)} মধ্যে ${UNIVERSITYDTA[juid].examCenter}  অনুষ্টিত হবে।  </td>      
    </tr>`;
  } else if (uintwiseExam === true) {
    juexamheajunit=  `${examheaderall}${universityunitdatetime}`
    jutableexam += `<tr>
<td>${judata.NameofUnit}</td>
      <td style="width: 50%"> ${judata.examdate.toLocaleDateString("bn-BD", dateBangla)} ${judata.examtime}।  </td>
      
    </tr>`;
    jutableexmacente= `<tr>
              <td>পরীক্ষার কেন্দ্র</td>
              <td>${UNIVERSITYDTA[juid].examCenter} অনুষ্টিত হবে।</td>
            </tr>`;
  }
  //* result section ;
  const juexamresult = UNIVERSITYDTA[juid].examresult;
  const juexamresultunit = UNIVERSITYDTA[juid].examresultUnitwis;
  const juexamresultafter = UNIVERSITYDTA[juid].examrestultafter;
  if (juexamresult === true && juexamresultunit === false && juexamresultafter ===false) {
    //result   uint and after false
    jutableexamresult = `${reusltheaderall}
              <td colspan="2">আগামী ${UNIVERSITYDTA[juid].examresultdate.toLocaleDateString("bn-BD", dateBangla)} তারিখে ${UNIVERSITYDTA[juid].examresulttme} ভর্তি পরীক্ষার ফলাফল প্রকাাশ করা হবে।</td>
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
              <td colspan="2"> পরীক্ষার  ${UNIVERSITYDTA[juid].examrestultafterday.toLocaleString("bn-BD")} দিন পর ভর্তি পরীক্ষার ফলাফল  প্রকাাশ করা হবে।</td>
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
      <td style="width: 50%"> ${UNIVERSITYDTA[juid].appDateStart.toLocaleDateString("bn-BD", dateBangla)} ${UNIVERSITYDTA[juid].appstarttime}</td>
    </tr> 
    <tr>
      <td>আবদেন শেষের তারিখ</td>
      <td style="width: 50%"> ${UNIVERSITYDTA[juid].appDateend.toLocaleDateString("bn-BD", dateBangla)}</td>
    </tr> 
    <tr>
      <td>আবদেন বর্তমান অবস্থান</td>
      <td style="width: 50%"> ${UNIVERSITYDTA[juid].datecount}।</td>
    </tr> 
`;

const juNoticePUB = UNIVERSITYDTA[juid].noticepub;
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
    note;
} else {
  jufinalopt = `${notnoticePUb}`;
}
document.getElementById("ju_table_output").innerHTML = jufinalopt;
//ju