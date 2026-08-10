import { numberToBanglaWords } from './ntw.js';
//! universtiuy data
function convertToBanglaNumber(number) {
  const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

  return number.toString().replace(/\d/g, (digit) => banglaDigits[digit]);
}

const am10 = convertToBanglaNumber(10);
const am10bd = ` সকাল ${am10} টা`;
const am11 = convertToBanglaNumber(11);
const am11bd = ` সকাল ${am11} টা`;
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
export const MADICALADDATA = [
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

export const UNIVERSITYDTA = [
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
    noticepub : false,
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
    noticepub : false,
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
    noticepub : false,
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
    noticepub : false,
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
export const DUInfo = [
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
export const RUInfo = [
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
export const JNUInfo = [
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
export const GSTInfo = [
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
export const JUInfo = [
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
