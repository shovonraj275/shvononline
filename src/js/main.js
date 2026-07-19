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
const halfbd= `${half} মিনিট`;
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
      (num % 10 !== 0 ? " " + units[num % 10] : "" + "  টাকা মাত্র।")
    ); //10,20,30
  if (num < 1000)
    return (
      units[Math.floor(num / 100)] +
      "শত " +
      (num % 100 !== 0 ? numberToBanglaWords(num % 100) : "  টাকা মাত্র।")
    );
  if (num < 100000)
    return (
      teentdss[Math.floor(num / 1000)] +
      " হাজার    " +
      (num % 1000 !== 0 ? numberToBanglaWords(num % 1000) : "")
    );
  if (num < 10000000)
    return (
      teentdss[Math.floor(num / 100000)] +
      " লাক্ষ   " +
      (num % 100000 !== 0 ? numberToBanglaWords(num % 100000) : "")
    );
  if (num < 1000000000)
    return (
      teentdss[Math.floor(num / 10000000)] +
      " কোটি   " +
      (num % 10000000 !== 0 ? numberToBanglaWords(num % 10000000) : "")
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

// ? ===================================== noice =========================================
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
// ? ===================================== noice =========================================

const dateBangla = {
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "long",
};
const today = new Date();
// ! changeable uint
const duappstart = new Date("2026-07-15");
const duappsEnd = new Date("2026-08-18");
const duaunitfee= 1250;
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
// ! changeable uint 8 15 22 29
// free
const duaunitfeebd = duaunitfee.toLocaleString("bn-BD");
const duaunitfeeword = numberToBanglaWords(duaunitfee);
const duaunitfeebdword = `${duaunitfeebd} (${duaunitfeeword})`;
document.getElementById("duauintfee").innerHTML=duaunitfeebdword
const dubunitfeebd = dubunitfee.toLocaleString("bn-BD");
const dubunitfeeword = numberToBanglaWords(dubunitfee);
const dubunitfeebdword = `${dubunitfeebd} (${dubunitfeeword})`
document.getElementById("dubuintfee").innerHTML=dubunitfeebdword;
const ducunitfeebd = ducunitfee.toLocaleString("bn-BD");
const ducunitfeeword = numberToBanglaWords(ducunitfee);
const ducunitfeebdword = `${ducunitfeebd} (${ducunitfeeword})`
document.getElementById("ducuintfee").innerHTML=ducunitfeebdword;
const dudunitfeebd = dudunitfee.toLocaleString("bn-BD");
const dudunitfeeword = numberToBanglaWords(dudunitfee);
const dudunitfeebdword = `${dudunitfeebd} (${dudunitfeeword})`
document.getElementById("duduintfee").innerHTML=dudunitfeebdword;
// fee
const duappstartbd = duappstart.toLocaleDateString("bn-BD", dateBangla);
document.getElementById("dudatestart").innerHTML=duappstartbd;
const duappsEndbd = duappsEnd.toLocaleDateString("bn-BD", dateBangla);
document.getElementById("dudateend").innerHTML=duappsEndbd;
const duappduedate = Math.abs(duappsEnd - today);
const duappduedatetoday = Math.floor(duappduedate / (1000 * 60 * 60 * 24));
const duappduedatetodayebd = duappduedatetoday.toLocaleString("bn-bd");
const duappdateLineIdStyle = document.getElementById("duappdateLineId");
if (duappsEnd > today) {
  duappdateLine = `${duappduedatetodayebd} দিন বাকি আছে।`;
  duappdateLineIdStyle.style.color = "green";
} else if (duappsEnd < today) {
  duappdateLine = `সময় অতিক্রম হয়েছে।`;
  duappdateLineIdStyle.style.color = "red"};
document.getElementById("duappdateLineId").innerHTML= duappdateLine;
const duaunitadmitdnstartbd = duaunitadmitdnstart.toLocaleDateString("bn-BD", dateBangla);
const duaunitadmitdnendbd = duaunitadmitdnend.toLocaleDateString("bn-BD", dateBangla);
const dubunitadmitdnstartbd = dubunitadmitdnstart.toLocaleDateString("bn-BD", dateBangla);
const dubunitadmitdnendbd = dubunitadmitdnend.toLocaleDateString("bn-BD", dateBangla);
const ducunitadmitdnstartbd = ducunitadmitdnstart.toLocaleDateString("bn-BD", dateBangla);
const ducunitadmitdnendbd = ducunitadmitdnend.toLocaleDateString("bn-BD", dateBangla);
const dudunitadmitdnstartbd = dudunitadmitdnstart.toLocaleDateString("bn-BD", dateBangla);
const dudunitadmitdnendbd = dudunitadmitdnend.toLocaleDateString("bn-BD", dateBangla);
const duaunitadmitdncom = `${duaunitadmitdnstartbd} হতে ${duaunitadmitdnendbd} পর্যন্ত।`;
document.getElementById("duaunitadmitdnop").innerHTML=duaunitadmitdncom;
const dubunitadmitdncom = `${dubunitadmitdnstartbd} হতে ${dubunitadmitdnendbd} পর্যন্ত।`;
document.getElementById("dubunitadmitdnop").innerHTML= dubunitadmitdncom;
const ducunitadmitdncom = `${ducunitadmitdnstartbd} হতে ${ducunitadmitdnendbd} পর্যন্ত।`;
document.getElementById("ducunitadmitdnop").innerHTML= ducunitadmitdncom;
const dudunitadmitdncom = `${dudunitadmitdnstartbd} হতে ${dudunitadmitdnendbd} পর্যন্ত।`;
document.getElementById("dudunitadmitdnop").innerHTML= dudunitadmitdncom;
const duaunitexamdatebd = duaunitexamdate.toLocaleDateString("bn-BD", dateBangla);
document.getElementById("duaexemop").innerHTML=duaunitexamdatebd + duaunitexamtime ;
const dubunitexamdatebd = dubunitexamdate.toLocaleDateString("bn-BD", dateBangla);
document.getElementById("dubexemop").innerHTML=dubunitexamdatebd + dubunitexamtime ;
const ducunitexamdatebd = ducunitexamdate.toLocaleDateString("bn-BD", dateBangla);
document.getElementById("ducexemop").innerHTML=ducunitexamdatebd + ducunitexamtime ;
const dudunitexamdatebd = dudunitexamdate.toLocaleDateString("bn-BD", dateBangla);
document.getElementById("dudexemop").innerHTML=dudunitexamdatebd + dudunitexamtime ;
// ?===========================ru===================================
const ruaunitfeebd = ruaunitfee.toLocaleString("bn-BD");
const ruaunitfeeword = numberToBanglaWords(ruaunitfee);
const ruaunitfeebdword = `${ruaunitfeebd} (${ruaunitfeeword})`;
document.getElementById("ruauintfee").innerHTML=ruaunitfeebdword
const rubunitfeebd = rubunitfee.toLocaleString("bn-BD");
const rubunitfeeword = numberToBanglaWords(rubunitfee);
const rubunitfeebdword = `${rubunitfeebd} (${rubunitfeeword})`
document.getElementById("rubuintfee").innerHTML=rubunitfeebdword;
const rucunitfeebd = rucunitfee.toLocaleString("bn-BD");
const rucunitfeeword = numberToBanglaWords(rucunitfee);
const rucunitfeebdword = `${rucunitfeebd} (${rucunitfeeword})`
document.getElementById("rucuintfee").innerHTML=rucunitfeebdword;

// fee
const ruappstartbd = ruappstart.toLocaleDateString("bn-BD", dateBangla);
document.getElementById("rudatestart").innerHTML=ruappstartbd;
const ruappsEndbd = ruappsEnd.toLocaleDateString("bn-BD", dateBangla);
document.getElementById("rudateend").innerHTML=ruappsEndbd;
const ruappruedate = Math.abs(ruappsEnd - today);
const ruappruedatetoday = Math.floor(ruappruedate / (1000 * 60 * 60 * 24));
const ruappruedatetodayebd = ruappruedatetoday.toLocaleString("bn-bd");
const ruappdateLineIdStyle = document.getElementById("ruappdateLineId");
if (ruappsEnd > today) {
  ruappdateLine = `${ruappruedatetodayebd} দিন বাকি আছে।`;
  ruappdateLineIdStyle.style.color = "green";
} else if (ruappsEnd < today) {
  ruappdateLine = `সময় অতিক্রম হয়েছে।`;
  ruappdateLineIdStyle.style.color = "red"};
document.getElementById("ruappdateLineId").innerHTML= ruappdateLine;

const ruaunitadmitdnstartbd = ruaunitadmitdnstart.toLocaleDateString("bn-BD", dateBangla);
const ruaunitadmitdnendbd = ruaunitadmitdnend.toLocaleDateString("bn-BD", dateBangla);
const rubunitadmitdnstartbd = rubunitadmitdnstart.toLocaleDateString("bn-BD", dateBangla);
const rubunitadmitdnendbd = rubunitadmitdnend.toLocaleDateString("bn-BD", dateBangla);
const rucunitadmitdnstartbd = rucunitadmitdnstart.toLocaleDateString("bn-BD", dateBangla);
const rucunitadmitdnendbd = rucunitadmitdnend.toLocaleDateString("bn-BD", dateBangla);
const rurunitadmitdnstartbd = rurunitadmitdnstart.toLocaleDateString("bn-BD", dateBangla);
const rurunitadmitdnendbd = rurunitadmitdnend.toLocaleDateString("bn-BD", dateBangla);
const ruaunitadmitdncom = `${ruaunitadmitdnstartbd} হতে ${ruaunitadmitdnendbd} পর্যন্ত।`;
document.getElementById("ruaunitadmitdnop").innerHTML=ruaunitadmitdncom;
const rubunitadmitdncom = `${rubunitadmitdnstartbd} হতে ${rubunitadmitdnendbd} পর্যন্ত।`;
document.getElementById("rubunitadmitdnop").innerHTML= rubunitadmitdncom;
const rucunitadmitdncom = `${rucunitadmitdnstartbd} হতে ${rucunitadmitdnendbd} পর্যন্ত।`;
document.getElementById("rucunitadmitdnop").innerHTML= rucunitadmitdncom;
const ruaunitexamdatebd = ruaunitexamdate.toLocaleDateString("bn-BD", dateBangla);
document.getElementById("ruaexemop").innerHTML=ruaunitexamdatebd + ruaunitexamtime ;
const rubunitexamdatebd = rubunitexamdate.toLocaleDateString("bn-BD", dateBangla);
document.getElementById("rubexemop").innerHTML=rubunitexamdatebd + rubunitexamtime ;
const rucunitexamdatebd = rucunitexamdate.toLocaleDateString("bn-BD", dateBangla);
document.getElementById("rucexemop").innerHTML=rucunitexamdatebd + rucunitexamtime ;
  // ??================================================rru +==================================


function du() {
  const duoutput = document.getElementById("du_output");
  duoutput.style.display = "block";
}
// const date1 = new Date('2026-08-01');
// const dateBangla = { weekday: 'long',year: 'numeric', month: 'long', day: 'numeric'};
// const formattedDate = date1.toLocaleDateString('bn-BD', dateBangla);
// console.log(formattedDate);
// const date2 = new Date();
// const date2BD=  date2.toLocaleDateString('bn-BD', dateBangla);
// console.log(date2BD);

// const dateStart = new Date('2026-07-01');
// const dateend = new Date('2026-07-20')
// const msDifference = Math.abs(dateend - today);
// // Convert milliseconds to days
// const daysDifference = Math.floor(msDifference / (1000 * 60 * 60 * 24));
// const daysDifferencebd=daysDifference.toLocaleString("bn-bd")
// if (dateStart>today){
//   console.log("you are rady")
// }else if(dateStart<today)(
// !//   console.log("not rady")
// )
// // Subtracting dates returns the difference in milliseconds
//   // $("#ru_output,#cu_output").each(
//   //   function(){
//   //     $(this).css("display","none")
//   //   });
//   //  // $("#ru_output,#cu_output").hide()
//   // $("#ru_output,#cu_output").css("display", "none");

// console.log(daysDifference); // Output: 12
// console.log(daysDifferencebd); // Output: 12
function ru() {
  // $("#du_output,#cu_output").css("display", "none");
  const ruoutput = document.getElementById("ru_output");
  ruoutput.style.display = "block";
}
function cu() {
  // $("#du_output,#ru_output").css("display", "none");
  const cu_output = document.getElementById("cu_output");
  cu_output.style.display = "block";
}

// const button = document.getElementById("toggleBtn");
// const content = document.getElementById("content");

// button.addEventListener("click", () => {
//   if (content.style.display === "none") {
//     content.style.display = "block"; // Shows element
//   } else {
//     content.style.display = "none"; // Hides element
//   }
// });
