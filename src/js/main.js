function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
function convertToBanglaNumber(number) {
    const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    
    return number
        .toString()
        .replace(/\d/g, (digit) => banglaDigits[digit]);
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
const half= convertToBanglaNumber(30);
const halfbd= ` ${half} মিনিট`;
const time59m= convertToBanglaNumber(59);
const time59mbd= `${time59m} মিনিট` ;
const lastLine =`${pm11bd} ${time59mbd}`;
// console.log(convertToBanglaNumber(12)); 
console.log(lastLine); 
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
      (num % 10000000 !== 0 ? numberToBanglaWords(num % 10000000) : " টাকা মাত্র।")
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
function school() {
  schooldom.style.display = "block";
  collegedom.style.display = "none";
  universitydom.style.display = "none";
  jobdom.style.display = "none";
}
function college() {
  schooldom.style.display = "none";
  collegedom.style.display = "block";
  universitydom.style.display = "none";
  jobdom.style.display = "none";
}
function university() {
  schooldom.style.display = "none";
  collegedom.style.display = "none";
  universitydom.style.display = "block";
  jobdom.style.display = "none";
}
function job() {
  schooldom.style.display = "none";
  collegedom.style.display = "none";
  universitydom.style.display = "none";
  jobdom.style.display = "block";
}

function du() {  
  const duoutput = document.getElementById("du_output");
  const duIcon = document.getElementById("du_icon");
    if (duoutput.style.display === 'none') {
    duoutput.style.display = 'block'; 
    duIcon.classList.remove('fa-plus');
    duIcon.classList.add('fa-minus');
  } else {
    duoutput.style.display = 'none'; 
    duIcon.classList.remove('fa-minus');
    duIcon.classList.add('fa-plus');
  }
}
function ru() {
  const ruoutput = document.getElementById("ru_output");
  const ruIcon = document.getElementById("ru_icon");
    if (ruoutput.style.display === 'none') {
    ruoutput.style.display = 'block'; 
    ruIcon.classList.remove('fa-plus');
    ruIcon.classList.add('fa-minus');
  } else {
    ruoutput.style.display = 'none'; 
    ruIcon.classList.remove('fa-minus');
    ruIcon.classList.add('fa-plus');
  }
}
function jnu() {
  const jnuoutput = document.getElementById("jnu_output");
  const jnuIcon = document.getElementById("jnu_icon");
    if (jnuoutput.style.display === 'none') {
    jnuoutput.style.display = 'block'; 
    jnuIcon.classList.remove('fa-plus');
    jnuIcon.classList.add('fa-minus');
  } else {
    jnuoutput.style.display = 'none'; 
    jnuIcon.classList.remove('fa-minus');
    jnuIcon.classList.add('fa-plus');
  }
}
function gst() {
  const gstoutput = document.getElementById("gst_output");
  const gstIcon = document.getElementById("gst_icon");
    if (gstoutput.style.display === 'none') {
    gstoutput.style.display = 'block'; 
    gstIcon.classList.remove('fa-plus');
    gstIcon.classList.add('fa-minus');
  } else {
    gstoutput.style.display = 'none'; 
    gstIcon.classList.remove('fa-minus');
    gstIcon.classList.add('fa-plus');
  }
}
function cu() {
  // $("#du_output,#ru_output").css("display", "none");
  const cu_output = document.getElementById("cu_output");
  cu_output.style.display = "block";
}


// ? ===================================== Onclick =========================================
// ? ===================================== noice =========================================

const dateBangla = {
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "long",
};
const calendarDate = { year: 'numeric', month: '2-digit', day: '2-digit' };
const today = new Date();
const todays= today.toISOString().split('T')[0]
// ! changeable uint
<<<<<<< HEAD
=======
const duappstart = new Date("2026-07-15");
const duappsEnd = new Date("2026-08-03");
const duaunitfee= 1250
const dubunitfee= 1250;
const ducunitfee= 1150;
const dudunitfee= 1500;

const duaunitadmitdnstart = new Date("2026-08-19");
const duaunitadmitdnend = new Date("2026-08-25");
const dubunitadmitdnstart = new Date("2026-08-22");
const dubunitadmitdnend = new Date("2026-08-28");
const ducunitadmitdnstart = new Date("2026-08-25");
const ducunitadmitdnend = new Date("2026-09-01");
const dudunitadmitdnstart = new Date("2026-08-28");
const dudunitadmitdnend = new Date("2026-09-04");
const duaunitexamdate =new Date("2026-08-08");
const duaunitexamtime = `${am10bd}`;
const dubunitexamdate =new Date("2026-08-15");
const dubunitexamtime = `${am10bd}${halfbd}`;
const ducunitexamdate =new Date("2026-08-22");
const ducunitexamtime = `${am10bd}`;
const dudunitexamdate =new Date("2026-08-29");
const dudunitexamtime = `${pm04bd}`;
// ?du 
// ? ru
const ruappstart = new Date("2026-07-15");
const ruappsEnd = new Date("2026-07-18");
const ruaunitfee= 1320;
const rubunitfee= 1100;
const rucunitfee= 1320;
const ruaunitadmitdnstart = new Date("2026-08-19");
const ruaunitadmitdnend = new Date("2026-08-25");
const rubunitadmitdnstart = new Date("2026-08-22");
const rubunitadmitdnend = new Date("2026-08-28");
const rucunitadmitdnstart = new Date("2026-08-25");
const rucunitadmitdnend = new Date("2026-09-01");
const rurunitadmitdnstart = new Date("2026-08-28");
const rurunitadmitdnend = new Date("2026-09-04");
const ruaunitexamdate =new Date("2026-08-08");
const ruaunitexamtime = `${am10bd}`;
const rubunitexamdate =new Date("2026-08-15");
const rubunitexamtime = `${am10bd}${halfbd}`;
const rucunitexamdate =new Date("2026-08-22");
const rucunitexamtime = `${am10bd}`;
const rurunitexamdate =new Date("2026-08-29");
const rurunitexamtime = `${pm04bd}`;

// ? ru
// ? jun
const jnuappstart = new Date("2026-07-15");
const jnuappsEnd = new Date("2026-08-05");
const jnuaunitfee= 1000 + (1000*0.01);
const jnubunitfee= 1000 + (1000*0.01);
const jnucunitfee= 1000 + (1000*0.01);
const jnudununitfee= 1000 + (1000*0.01);
const jnueununitfee= 1200 + (1200*0.01);
const jnuaunitadmitdnstart = new Date("2026-08-19");
const jnuaunitadmitdnend = new Date("2026-08-25");
const jnubunitadmitdnstart = new Date("2026-08-22");
const jnubunitadmitdnend = new Date("2026-08-28");
const jnucunitadmitdnstart = new Date("2026-08-25");
const jnucunitadmitdnend = new Date("2026-09-01");
const jnudunitadmitdnstart = new Date("2026-08-28");
const jnudunitadmitdnend = new Date("2026-09-04");
const jnueunitadmitdnstart = new Date("2026-08-28");
const jnueunitadmitdnend = new Date("2026-09-04");
const jnuaunitexamdate =new Date("2026-08-08");
const jnuaunitexamtime = `${am10bd}`;
const jnubunitexamdate =new Date("2026-08-15");
const jnubunitexamtime = `${am10bd}${halfbd}`;
const jnucunitexamdate =new Date("2026-08-22");
const jnucunitexamtime = `${am10bd}`;
const jnudunitexamdate =new Date("2026-08-03");
const jnudunitexamtime = `${pm04bd}`;
const jnueunitexamdate =new Date("2026-08-29");
const jnueunitexamtime = `${pm04bd}`;
// ? jun

const gstappstart = new Date("2026-07-15");
const gstappsEnd = new Date("2026-08-10");
const gstaunitfee= 1000;
const gstbunitfee= 1000;
const gstcunitfee= 1000;
const gstaunitadmitdnstart = new Date("2026-08-19");
const gstaunitadmitdnend = new Date("2026-08-25");
const gstbunitadmitdnstart = new Date("2026-08-22");
const gstbunitadmitdnend = new Date("2026-08-28");
const gstcunitadmitdnstart = new Date("2026-08-25");
const gstcunitadmitdnend = new Date("2026-09-01");
const gstaunitexamdate =new Date("2026-08-08");
const gstaunitexamtime = `${am10bd}`;
const gstbunitexamdate =new Date("2026-08-15");
const gstbunitexamtime = `${am10bd}${halfbd}`;
const gstcunitexamdate =new Date("2026-08-22");
const gstcunitexamtime = `${am10bd}`;
>>>>>>> f53afec75d709fb25c0e6b3fb6afe75bc3d71bd0




const universityName ={
  DU:[{
    // 0
    NameEng : "Dhaka university",
    NameBng : "ঢাকা বিশ্ববিদ্যালয়",
    Images : "du.png",
    appDateStart :new Date("2026-07-02"),
    appDateend :new Date("2026-07-26"),
    mainweb : "",
    appweb : "",
    notice : "DU.jpg.jpeg",
  }
]
}
console.log(universityName.DU[0].NameBng)
document.getElementById("DUNmaeEng").innerHTML = universityName.DU[0].NameEng;//main name  du
document.getElementById("DUNmaeBng").innerHTML = universityName.DU[0].NameBng; // outp name  du
document.getElementById("DUImg").innerHTML = `<img src="./src/img/${universityName.DU[0].Images}" class="logoofunvio" alt="du">`;//img du
document.getElementById("dudatestart").innerHTML = universityName.DU[0].appDateStart.toLocaleDateString("bn-BD", dateBangla) + am10bd + halfbd; //time start du
document.getElementById("dudateend").innerHTML = universityName.DU[0].appDateend.toLocaleDateString("bn-BD", dateBangla) +lastLine; //time end du
document.getElementById("DUNotice").innerHTML =`<a href="./src/noticfile/${universityName.DU[0].notice}" target="_blank"> নেটিশ</a><a href="${universityName.DU[0].appweb}">আবেদনের ওয়েবসাইটে</a><a href="${universityName.DU[0].mainweb}">অফিসিয়াল ওয়েবসাইটে</a>`; //link section du
const DUInfo = {
  UnitA:[{
    NameofUnit: "ক - ইউনিট (বিজ্ঞান শাখা)",
    result: "মাধ্যমিক (এস.এস.সি.) তে চতুর্থ বিষয় সহ ন্যূনতম ৩.৫০ ও উচ্চ         মাধ্যমিক (এইচ.এস.সি.) তে চতুর্থ বিষয় সহ বিজ্ঞান বিভাগ হতে ন্যূনতম ৩.৫০ এবং্রাপ্ত জিপিএ-দ্বয়ের যোগফল ন্যূনতম ৮.০ হতে হবে।", //result 
    applyfee : 1100,
    applyfeebd : numberToBanglaWords(1100),
    admitdnstart : new Date("2026-08-03"),
    admitdnstartTtime : "",
    // admitdnstartTtime : `${pm04bd} ${halfbd}`,
    admitdnend : new Date("2026-08-05"),
    admitdnendTime : `${lastLine}`,
    examdate : new Date("2026-08-15"),
    examtime : `${am10bd}${halfbd}`,
  },
],
  UnitB:[{
    NameofUnit: "খ - ইউনিট (মানবিক শাখা)",
    result: "মাধ্যমিক (এস.এস.সি.) তে চতুর্থ বিষয় সহ ন্যূনতম ৩.৫০ ও উচ্চ মাধ্যমিক (এইচ.এস.সি.) তে চতুর্থ বিষয় সহ ন্যূনতম ৩.৫০ মানবিক বিভাগ হতে এবং প্রপ্ত জিপিএ-দ্বয়ের যোগফল ন্যূনতম ৮.০ হতে হবে।", //result 
    applyfee : 1100,
    applyfeebd : numberToBanglaWords(1100),
    admitdnstart : new Date("2026-08-03"),
    admitdnstartTtime : "",
    // admitdnstartTtime : `${pm04bd} ${halfbd}`,
    admitdnend : new Date("2026-08-05"),
    admitdnendTime : `${lastLine}`,
    examdate : new Date("2026-08-15"),
    examtime : `${am10bd}${halfbd}`,
  },
],
  UnitC:[{
    NameofUnit: "গ - ইউনিট (ব্যবসায় শিক্ষা শাখা)",
    result: "মাধ্যমিক (এস.এস.সি.) তে চতুর্থ বিষয় সহ ন্যূনতম ৩.৫০ ও উচ্চ মাধ্যমিক (এইচ.এস.সি.) তে চতুর্থ বিষয় সহ ন্যূনতম ৩.৫০ ব্যবসায় শিক্ষা শাখা হতে এবং প্রপ্ত জিপিএ-দ্বয়ের যোগফল ন্যূনতম ৮.০ হতে হবে।", //result 
    applyfee : 1100,
    applyfeebd : numberToBanglaWords(1100),
    admitdnstart : new Date("2026-08-03"),
    admitdnstartTtime : "",
    // admitdnstartTtime : `${pm04bd} ${halfbd}`,
    admitdnend : new Date("2026-08-05"),
    admitdnendTime : `${lastLine}`,
    examdate : new Date("2026-08-15"),
    examtime : `${am10bd}${halfbd}`,
  },
],
  UnitD:[{
    NameofUnit: "ঘ - ইউনিট (বিভাগ পরিবর্তন) ",
    result: "মাধ্যমিক (এস.এস.সি.) তে চতুর্থ বিষয় সহ ন্যূনতম ৩.৫০ ও উচ্চ মাধ্যমিক (এইচ.এস.সি.) তে চতুর্থ বিষয় সহ ন্যূনতম ৩.৫০ হতে এবং প্রপ্ত জিপিএ-দ্বয়ের যোগফল ন্যূনতম ৮.০ হতে হবে। উলেখ্য সকল বিভাগে শিক্ষার্থী আবেদন করতে পাবে।", //result 
    applyfee : 1100,
    applyfeebd : numberToBanglaWords(1100),
    admitdnstart : new Date("2026-08-03"),
    admitdnstartTtime : "",
    // admitdnstartTtime : `${pm04bd} ${halfbd}`,
    admitdnend : new Date("2026-08-05"),
    admitdnendTime : `${lastLine} `,
    examdate : new Date("2026-08-15"),
    examtime : `${am10bd}${halfbd}`,
  },
]

}
document.querySelectorAll('.DUunitA').forEach(element =>{
  element.innerHTML= DUInfo.UnitA[0].NameofUnit;
}) //A uint  name du
document.getElementById("DUunitAresult").innerHTML = DUInfo.UnitA[0].result; // a unit resu;t
document.getElementById("DUunitAFee").innerHTML = `${DUInfo.UnitA[0].applyfee.toLocaleString("bn-BD")}  (${DUInfo.UnitA[0].applyfeebd})` ; // a unit fee fee
document.getElementById("DUunitAadmitdn").innerHTML =  `${DUInfo.UnitA[0].admitdnstart.toLocaleDateString("bn-BD", dateBangla)} ${DUInfo.UnitA[0].admitdnstartTtime} হতে ${DUInfo.UnitA[0].admitdnend.toLocaleDateString("bn-BD", dateBangla)} ${DUInfo.UnitA[0].admitdnendTime} পর্যন্ত।`; //a admit  du 
document.getElementById("DUunitAExam").innerHTML = `${DUInfo.UnitA[0].examdate.toLocaleDateString("bn-BD", dateBangla)}`; // a unit exam date
// B uint
document.querySelectorAll('.DUunitB').forEach(element =>{
  element.innerHTML= DUInfo.UnitB[0].NameofUnit; // b unit name du 
})
document.getElementById("DUunitBresult").innerHTML = DUInfo.UnitB[0].result; //b unit resutlt du 
document.getElementById("DUunitBFee").innerHTML = `${DUInfo.UnitB[0].applyfee.toLocaleString("bn-BD")}  (${DUInfo.UnitB[0].applyfeebd})` ; //b unit fee  du
document.getElementById("DUunitBadmitdn").innerHTML =  `${DUInfo.UnitB[0].admitdnstart.toLocaleDateString("bn-BD", dateBangla)} ${DUInfo.UnitB[0].admitdnstartTtime} হতে ${DUInfo.UnitB[0].admitdnend.toLocaleDateString("bn-BD", dateBangla)} ${DUInfo.UnitB[0].admitdnendTime} পর্যন্ত।`; //b unit admit du
document.getElementById("DUunitBExam").innerHTML = `${DUInfo.UnitB[0].examdate.toLocaleDateString("bn-BD", dateBangla)}`; //b unit exam date du
document.querySelectorAll('.DUunitC').forEach(element =>{
  element.innerHTML= DUInfo.UnitC[0].NameofUnit;
}) // c unit name du 
document.getElementById("DUunitCresult").innerHTML = DUInfo.UnitC[0].result; // c unit result  du 
document.getElementById("DUunitCFee").innerHTML = `${DUInfo.UnitC[0].applyfee.toLocaleString("bn-BD")}  (${DUInfo.UnitC[0].applyfeebd})` ; // c unit  fee
document.getElementById("DUunitCadmitdn").innerHTML =  `${DUInfo.UnitC[0].admitdnstart.toLocaleDateString("bn-BD", dateBangla)} ${DUInfo.UnitC[0].admitdnstartTtime} হতে ${DUInfo.UnitC[0].admitdnend.toLocaleDateString("bn-BD", dateBangla)} ${DUInfo.UnitC[0].admitdnendTime} পর্যন্ত।`; // C unit admit du
document.getElementById("DUunitCExam").innerHTML = `${DUInfo.UnitC[0].examdate.toLocaleDateString("bn-BD", dateBangla)}`; // C unit exam time
document.querySelectorAll('.DUunitD').forEach(element =>{
  element.innerHTML= DUInfo.UnitD[0].NameofUnit;
}) // d unit
document.getElementById("DUunitDresult").innerHTML = DUInfo.UnitD[0].result; // d unit 
document.getElementById("DUunitDFee").innerHTML = `${DUInfo.UnitD[0].applyfee.toLocaleString("bn-BD")}  (${DUInfo.UnitD[0].applyfeebd})` ; // d unit  fee
document.getElementById("DUunitDadmitdn").innerHTML =  `${DUInfo.UnitD[0].admitdnstart.toLocaleDateString("bn-BD", dateBangla)} ${DUInfo.UnitD[0].admitdnstartTtime} হতে ${DUInfo.UnitD[0].admitdnend.toLocaleDateString("bn-BD", dateBangla)} ${DUInfo.UnitD[0].admitdnendTime} পর্যন্ত `; //a admit
document.getElementById("DUunitDExam").innerHTML = `${DUInfo.UnitD[0].examdate.toLocaleDateString("bn-BD", dateBangla)}`;
const dudateendstyle = document.getElementById("timedu");
const DUendDate =universityName.DU[0].appDateend.toISOString().split('T')[0];
const dustingtodate =new Date(DUendDate);
const DUDaysEng = Math.abs(dustingtodate  - today);
const DUDaysEngs = Math.floor(DUDaysEng / (1000 * 60 * 60 * 24) +1);
const DUDaysEngbd = DUDaysEngs.toLocaleString("bn-bd");
if (DUendDate > todays) {
  gstappdateLine = ` আবেদন চলমাান এবং ${DUDaysEngbd} দিন বাকি আছে।  `;
  dudateendstyle.style.color = "green";
} else if (DUendDate === todays) {
  gstappdateLine = ` আজকেই শেষ দিন।`;
  dudateendstyle.style.color = "red"}
   else if (DUendDate < todays) {
  gstappdateLine  = ` সময় অতিক্রম হয়েছে।`;
  dudateendstyle.style.color = "black";
  dudateendstyle.style.textDecoration = "line-through red";
  };
  document.getElementById("timedu").innerHTML =gstappdateLine;
