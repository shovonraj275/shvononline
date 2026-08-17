
const MADICALADDATA = [
  {
    id:0,
    NameEng: "bangladesh medical & Dental admission", // name of english
    NameBng: "মেডিকেল কলেজ এন্ড ডেন্টাল ", // name of bangla
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
    appstarttime: BanglaTime("10:00"),
    datecount : dateCalculator("2026-08-19"), // start date
    appDateend: new Date("2026-08-19"), // date end
    appendtime: BanglaTime("23:59"),
    applyfee : 1000,
    applyfeebd : BanglaWordstaka(1000),
    admitdn: true,
    admitdndatestart: new Date("2026-08-15"), // start date
    admitdntimestart: BanglaTime("16:30"), // start time
    admitdndateend: new Date("2026-08-18"), // start date
    admitdntimeend: BanglaTime("23:59"), // start date
    examCenter: "অফিসিয়াল নেটিশে দেখুন", //exam center.
    examUnitwise: true, // False for Unit-wise NO , true for Unit-wise yes
    examtestdate: new Date("2026-08-20"), // examdate start   
    examtesttime: BanglaTime("10:00"), // examdate start   
    examresult :true,
    examresultdate : new Date("2026-10-20"),
    examresulttme : "",
    examresulttme : BanglaTime("18:30"),
  },
  {
    id:1,
    NameEng: "Armed Forces Medical College", // name of english
    NameBng: "আর্মড ফোর্সেস মেডিকেল কলেজ", // name of bangla
    Images: "afmc.png", //logo
    onclick: "afmc()", // onclick
    OutptuID: "afmc_output", // output div
    IconID: "afmc_icon", //icon
    tabeloutputId: "afmc_table_output", //table id
     outmain: "afmc_output_main", //main out put
    notice: "AFMC.pdf", // notce
    noticepub : true,
    appweb:
      "https://admission.eis.du.ac.bd/bn/408b7c8ad06e4d9954fa2d948a01f508", //main web
    mainweb: "https://www.du.ac.bd/", //main web
     appDateStart: new Date("2026-08-01"), // date start
    appstarttime: BanglaTime("10:00"),
    datecount : dateCalculator("2026-08-19"), // start date
    appDateend: new Date("2026-08-19"), // date end
    appendtime: BanglaTime("23:59"),
    applyfee : 1000,
    applyfeebd : BanglaWordstaka(1000),
    admitdn: true,
    admitdndatestart: new Date("2026-08-15"), // start date
    admitdntimestart: BanglaTime("16:30"), // start time
    admitdndateend: new Date("2026-08-18"), // start date
    admitdntimeend: BanglaTime("23:59"), // start date
    examCenter: "অফিসিয়াল নেটিশে দেখুন", //exam center.
    examtestdate: new Date("2026-08-20"), // examdate start   
    examtesttime: BanglaTime("10:00"), // examdate start   
    examresult :true,
    examresultdate : new Date("2026-10-20"),
    examresulttme : "",
    examresulttme : BanglaTime("18:30"),
  },
  {
    id:2,
     NameEng: "Bangladesh Nursing and Midwifery Counci", // name of english
    NameBng: "বাংলাদেশ নার্সিং ও মিডওয়াইফারি কাউন্সিল", // name of bangla
    Images: "bnmc.png", //logo
    onclick: "bnnc()", // onclick
    OutptuID: "bnnc_output", // output div
    IconID: "bnnc_icon", //icon
    tabeloutputId: "bnnc_table_output", //table id
     outmain: "bnnc_output_main", //main out put
    notice: "bnmc.pdf", // notce
    noticepub : true,
    appweb:
      "https://admission.eis.du.ac.bd/bn/408b7c8ad06e4d9954fa2d948a01f508", //main web
    mainweb: "https://www.du.ac.bd/", //main web
      appDateStart: new Date("2026-08-01"), // date start
    appstarttime: BanglaTime("10:00"),
    datecount : dateCalculator("2026-08-19"), // start date
    appDateend: new Date("2026-08-19"), // date end
    appendtime: BanglaTime("23:59"),
    // applyfee : 1000,
    // applyfeebd : BanglaWordstaka(1000),
    admitdn: true,
    admitdndatestart: new Date("2026-08-15"), // start date
    admitdntimestart: BanglaTime("16:30"), // start time
    admitdndateend: new Date("2026-08-18"), // start date
    admitdntimeend: BanglaTime("23:59"), // start date
    examCenter: "অফিসিয়াল নেটিশে দেখুন", //exam center.
    examUnitwise: true, // False for Unit-wise NO , true for Unit-wise yes
    examtestdate: new Date("2026-08-20"), // examdate start   
    examtesttime: BanglaTime("10:00"), // examdate start   
    examresult :true,
    examresultdate : new Date("2026-10-20"),
    examresulttme : "",
    examresulttme : BanglaTime("18:30"),
  },
]

const bnncdata =[
  {
    Nameofcourse :"০৪ বছর মেয়াদি বিএসসি ইন নার্সিং",
    result: " ৪ বছর মেয়াদি ব্যাচেলর অব সায়েন্স ইন নার্সিং (বিএসসি ইন নার্সিং কোর্স): আবেদনকারীকে বিজ্ঞান বিভাগে এসএসসি/সমমান ও এইচএসসি/সমমানের পরীক্ষায় উত্তীর্ণ হতে হবে। দুটি পরীক্ষায় মোট জিপিএ ন্যূনতম ৬.৫০ থাকতে হবে। তবে কোনো পরীক্ষায় জিপিএ ৩.০০ এর কম হবে না। আবেদনকারীকে এইচএসসি/সমমান পরীক্ষায় জীববিজ্ঞানে ন্যূনতম জিপিএ ২.৫০ থাকতে হবে।",
    applyfee:700,
    applyfeebd:BanglaWordstaka(700),
  },
  {
    Nameofcourse :"০৩ বছর মেয়াদি ডিপ্লোমা ইন নার্সিং সায়েন্স এন্ড মিডওয়াইফারি এবং ০৩ বছর মেয়াদি ডিপ্লোমা ইন মিডওয়াইফারি কোর্সে ",
    result: "৩ বছর মেয়াদি ডিপ্লোমা ইন নার্সিং সায়েন্স এন্ড মিডওয়াইফারি ও ডিপ্লোমা ইন মিডওয়াইফারি: আবেদনকারীকে যে কোনো বিভাগে এসএসসি বা সমমান ও এইচএসসি বা সমমানের পরীক্ষায় উত্তীর্ণ হতে হবে। দুটি পরীক্ষায় মোট জিপিএ ন্যূনতম ৬.০০ থাকতে হবে। তবে কোনো একটি পরীক্ষায় জিপিএ ২.৫০ এরকম হবে না।",
    applyfee:500,
    applyfeebd:BanglaWordstaka(500),
  },
]
const mbbsid =MADICALADDATA[0].id
const afmcid =MADICALADDATA[1].id
const bnmcid =MADICALADDATA[2].id
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
    appstarttime :"",
    datecount : dateCalculator("2026-09-19"),
    appDateend: new Date("2026-09-19"), // date end
    appendtime: BanglaTime("23:59"),
    admitdn: true,
    admitdnunitwise: false, // False for Unit-wise NO , true for Unit-wise yes  Unit-wise Admit Card Download
    admitDNUnitwisdatestart: new Date("2026-08-15"), // start date
    admitDNUnitwistimestart: BanglaTime("16:30"), // start time
    admitDNUnitwisdateend: new Date("2026-08-18"), // start date
    admitDNUnitwistimeend: BanglaTime("23:59"), // start date
    examCenter: "বিভাগীয় শহরে অনুষ্ঠিত হবে", //exam center.
    examUnitwise: true, // False for Unit-wise NO , true for Unit-wise yes
    examteststart: new Date("2026-08-20"), // examdate start
    examtestend: new Date("2026-08-22"), // examdate end
    examresult :true,
    examresultUnitwis :true,
    examresultdate : new Date("2026-09-20"),
    examresulttme :'',
    examrestultafter: true,
    examrestultafterday:2,
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
    appstarttime :"",
    datecount : dateCalculator("2026-09-19"),
    appDateend: new Date("2026-09-19"), // date end
    appendtime: BanglaTime("23:59"),
    admitdn: true,
    admitdnunitwise: false, // False for Unit-wise NO , true for Unit-wise yes  Unit-wise Admit Card Download
    admitDNUnitwisdatestart: new Date("2026-08-15"), // start date
    admitDNUnitwistimestart: BanglaTime("16:30"), // start time
    admitDNUnitwisdateend: new Date("2026-08-18"), // start date
    admitDNUnitwistimeend: BanglaTime("23:59"), // start date
    examCenter: "রাজশাহী বিশ্ববিদ্যালয়ে নিজস্ব ক্যাম্পাসে ", //exam center.
    examUnitwise: true, // False for Unit-wise NO , true for Unit-wise yes
    examteststart: new Date("2026-08-20"), // examdate start
    examtestend: new Date("2026-08-22"), // examdate end
    examresult :true,
    examresultUnitwis :true,
    examresultdate : new Date("2026-09-20"),
    examresulttme :'',
    examrestultafter: true,
    examrestultafterday:2,
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
    appweb: "https://bachelor.ju-admission.com/", //main web
    mainweb: "https://www.juniv.edu/", //main web
    appDateStart: new Date("2026-08-01"), // date start
    appstarttime :"",
    datecount : dateCalculator("2026-09-19"),
    appDateend: new Date("2026-09-19"), // date end
    appendtime: BanglaTime("23:59"),
    admitdn: true,
    admitdnunitwise: false, // False for Unit-wise NO , true for Unit-wise yes  Unit-wise Admit Card Download
    admitDNUnitwisdatestart: new Date("2026-08-15"), // start date
    admitDNUnitwistimestart: BanglaTime("16:30"), // start time
    admitDNUnitwisdateend: new Date("2026-08-18"), // start date
    admitDNUnitwistimeend: BanglaTime("23:59"), // start date
    examCenter: "বিভাগীয় শহরে অনুষ্ঠিত হবে", //exam center.
    examUnitwise: true, // False for Unit-wise NO , true for Unit-wise yes
    examteststart: new Date("2026-08-20"), // examdate start
    examtestend: new Date("2026-08-22"), // examdate end
    examresult :true,
    examresultUnitwis :true,
    examresultdate : new Date("2026-09-20"),
    examresulttme :'',
    examrestultafter: true,
    examrestultafterday:2,
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
   appDateStart: new Date("2026-08-01"), // date start
    appstarttime :"",
    datecount : dateCalculator("2026-09-19"),
    appDateend: new Date("2026-09-19"), // date end
    appendtime: BanglaTime("23:59"),
    admitdn: true,
    admitdnunitwise: false, // False for Unit-wise NO , true for Unit-wise yes  Unit-wise Admit Card Download
    admitDNUnitwisdatestart: new Date("2026-08-15"), // start date
    admitDNUnitwistimestart: BanglaTime("16:30"), // start time
    admitDNUnitwisdateend: new Date("2026-08-18"), // start date
    admitDNUnitwistimeend: BanglaTime("23:59"), // start date
    examCenter: "বিভাগীয় শহরে অনুষ্ঠিত হবে", //exam center.
    examUnitwise: true, // False for Unit-wise NO , true for Unit-wise yes
    examteststart: new Date("2026-08-20"), // examdate start
    examtestend: new Date("2026-08-22"), // examdate end
    examresult :true,
    examresultUnitwis :true,
    examresultdate : new Date("2026-09-20"),
    examresulttme :'',
    examrestultafter: true,
    examrestultafterday:2,
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
    appweb: "https://gstadmission.ac.bd/site/gst-universities", //main web
    mainweb: "https://gstadmission.ac.bd/site/gst-universities", //main web
    appDateStart: new Date("2026-08-01"), // date start
    appstarttime :"",
    datecount : dateCalculator("2026-09-19"),
    appDateend: new Date("2026-09-19"), // date end
    appendtime: BanglaTime("23:59"),
    admitdn: true,
    admitdnunitwise: true , // False for Unit-wise NO , true for Unit-wise yes  Unit-wise Admit Card Download
    admitDNUnitwisdatestart: new Date("2026-08-15"), // start date
    admitDNUnitwistimestart: BanglaTime("16:30"), // start time
    admitDNUnitwisdateend: new Date("2026-08-18"), // start date
    admitDNUnitwistimeend: BanglaTime("23:59"), // start date
    examCenter: "জাহাঙ্গীরনগর বিশ্ববিদ্যালয়ে  নিজস্ব ক্যাম্পাসে", //exam center.
    examUnitwise: true, // False for Unit-wise NO , true for Unit-wise yes
    examteststart: new Date("2026-08-20"), // examdate start
    examtestend: new Date("2026-08-22"), // examdate end
    examresult :true,
    examresultUnitwis : true,
    examresultdate : new Date("2026-09-20"),
    examresulttme :'',
    examrestultafter: false,
    examrestultafterday:2,
    },
  {
    id:5,
    NameEng: " university",
    NameBng: " বিশ্ববিদ্যালয়",
    Images: "cu.png",
    onclick: "cu()",
    OutptuID: "cu_output",
    tabeloutputId: "cu_table_output", //table id
    IconID: "cu_icon",
    outmain: "cu_output_main", //main out put
    noticepub : false,
    notice: "CU.pdf", // notce
    appweb: "https://gstadmission.ac.bd/site/gst-universities", //main web
    mainweb: "https://gstadmission.ac.bd/site/gst-universities", //main web
    appDateStart: new Date("2026-08-01"), // date start
    appstarttime :"",
    datecount : dateCalculator("2026-09-19"),
    appDateend: new Date("2026-09-19"), // date end
    appendtime: BanglaTime("23:59"),
    admitdn: true,
    admitdnunitwise: false, // False for Unit-wise NO , true for Unit-wise yes  Unit-wise Admit Card Download
    admitDNUnitwisdatestart: new Date("2026-08-15"), // start date
    admitDNUnitwistimestart: BanglaTime("16:30"), // start time
    admitDNUnitwisdateend: new Date("2026-08-18"), // start date
    admitDNUnitwistimeend: BanglaTime("23:59"), // start date
    examCenter: "বিভাগীয় শহরে অনুষ্ঠিত হবে", //exam center.
    examUnitwise: true, // False for Unit-wise NO , true for Unit-wise yes
    examteststart: new Date("2026-08-20"), // examdate start
    examtestend: new Date("2026-08-22"), // examdate end
    examresult :true,
    examresultUnitwis :true,
    examresultdate : new Date("2026-09-20"),
    examresulttme :'',
    examrestultafter: true,
    examrestultafterday:2,
    },
];
//! universtiuy data
const duid = UNIVERSITYDTA[0].id;
const ruid = UNIVERSITYDTA[1].id;
const jnuid = UNIVERSITYDTA[2].id;
const gstid = UNIVERSITYDTA[3].id;
const juid = UNIVERSITYDTA[4].id;
const cuid = UNIVERSITYDTA[5].id;
 const DUInfo = [
  {
    NameofUnit: "ক - ইউনিট (বিজ্ঞান শাখা)", // name of unit
    result:
      "মাধ্যমিক (এস.এস.সি.) তে চতুর্থ বিষয় সহ ন্যূনতম ৩.৫০ ও উচ্চ         মাধ্যমিক (এইচ.এস.সি.) তে চতুর্থ বিষয় সহ বিজ্ঞান বিভাগ হতে ন্যূনতম ৩.৫০ এবং্রাপ্ত জিপিএ-দ্বয়ের যোগফল ন্যূনতম ৮.০ হতে হবে।", //result
    applyfee: 1100, //fee
    applyfeebd: BanglaWordstaka(1100), // word bd
    admitdnstart: new Date("2026-11-03"), // admitcard download
    admitdnstartTtime: BanglaTime("15:00"), // admitcard download
    admitdnend: new Date("2026-11-10"), // admitcard download
    admitdnendTime: BanglaTime("23:59"), // admitcard download
    examdate: new Date("2026-08-15"), // admitcard download
    examtime: BanglaTime("10:00"), // admitcard download
    examresultdate : new Date("2026-09-18"),
    examresulttme : "",
  },
  {
    NameofUnit: "খ - ইউনিট (মানবিক শাখা)",
    result:
      "মাধ্যমিক (এস.এস.সি.) তে চতুর্থ বিষয় সহ ন্যূনতম ৩.৫০ ও উচ্চ মাধ্যমিক (এইচ.এস.সি.) তে চতুর্থ বিষয় সহ ন্যূনতম ৩.৫০ মানবিক বিভাগ হতে এবং প্রপ্ত জিপিএ-দ্বয়ের যোগফল ন্যূনতম ৮.০ হতে হবে।", //result
    applyfee: 1100, // fee
    applyfeebd: BanglaWordstaka(1100), // word bd
    admitdnstart: new Date("2026-08-03"), // admitcard download date  start
    admitdnstartTtime: BanglaTime("18:00"), // admitcard download time start
    admitdnend: new Date("2026-08-05"), // admitcard download date  end
    admitdnendTime: BanglaTime("23:59"), // admitcard download time end
    examdate: new Date("2026-08-15"), // exam date
    examtime: BanglaTime("10:30"), // exam time
    examresultdate : new Date("2026-09-19"),
    examresulttme : "",
  },
  {
    NameofUnit: "গ - ইউনিট (ব্যবসায় শিক্ষা শাখা)",
    result:
      "মাধ্যমিক (এস.এস.সি.) তে চতুর্থ বিষয় সহ ন্যূনতম ৩.৫০ ও উচ্চ মাধ্যমিক (এইচ.এস.সি.) তে চতুর্থ বিষয় সহ ন্যূনতম ৩.৫০ ব্যবসায় শিক্ষা শাখা হতে এবং প্রপ্ত জিপিএ-দ্বয়ের যোগফল ন্যূনতম ৮.০ হতে হবে।", //result
    applyfee: 1100, // fee
    applyfeebd: BanglaWordstaka(1100), // word bd
    admitdnstart: new Date("2026-08-03"), // admitcard download date  start
    admitdnstartTtime: BanglaTime("18:30"), // admitcard download time start
    admitdnend: new Date("2026-08-05"), // admitcard download date  end
    admitdnendTime: BanglaTime("23:59"), // admitcard download time end
    examdate: new Date("2026-08-15"), // exam date
    examtime: BanglaTime("11:30"), // exam time
    examresultdate : new Date("2026-09-20"),
    examresulttme : BanglaTime("18:30"),
  },
  {
    NameofUnit: "ঘ - ইউনিট (বিভাগ পরিবর্তন) ",
    result:
      "মাধ্যমিক (এস.এস.সি.) তে চতুর্থ বিষয় সহ ন্যূনতম ৩.৫০ ও উচ্চ মাধ্যমিক (এইচ.এস.সি.) তে চতুর্থ বিষয় সহ ন্যূনতম ৩.৫০ হতে এবং প্রপ্ত জিপিএ-দ্বয়ের যোগফল ন্যূনতম ৮.০ হতে হবে। উলেখ্য সকল বিভাগে শিক্ষার্থী আবেদন করতে পাবে।", //result
    applyfee: 1100, // fee
    applyfeebd: BanglaWordstaka(1100), // word bd
    admitdnstart: new Date("2026-08-03"), // admitcard download date  start
    admitdnstartTtime: BanglaTime("17:30"), // admitcard download time start
    admitdnend: new Date("2026-08-05"), // admitcard download date  end
    admitdnendTime: BanglaTime("23:59"), // admitcard download time end
    examdate: new Date("2026-08-15"), // exam date
    examtime: BanglaTime("12:30"), // exam time
    examresultdate : new Date("2026-09-28"),
    examresulttme : BanglaTime("17:30"),
  },
];
const RUInfo = [
  {
    NameofUnit: "ক - ইউনিট (মানবিক শাখা)",
    result:
      "মানবিক শাখা থেকে উত্তীর্ণ আবেদনকারীদের এসএসসি/সমমান ও এইচএসসি/সমমান উভয় পরীক্ষায় (৪র্থ বিষয়সহ) ন্যূনতম জিপিএ ৩.০০ সহ মোট জিপিএ ৭.০০ পেতে হবে।", //result
    applyfee: 1120, // fee
    applyfeebd: BanglaWordstaka(1120), // word bd
     admitdnstart: new Date("2026-11-03"), // admitcard download
    admitdnstartTtime: BanglaTime("15:00"), // admitcard download
    admitdnend: new Date("2026-11-10"), // admitcard download
    admitdnendTime: BanglaTime("23:59"), // admitcard download
    examdate: new Date("2026-08-15"), // admitcard download
    examtime: BanglaTime("10:00"), // admitcard download
    examresultdate : new Date("2026-09-18"),
    examresulttme : "",
  },
  {
    NameofUnit: "খ - ইউনিট (ব্যবসায় শিক্ষা শাখা)",
    result:
      "বাণিজ্য শাখা থেকে উত্তীর্ণ আবেদনকারীদের এসএসসি/সমমান ও এইচএসসি/সমমান উভয় পরীক্ষায় (৪র্থ বিষয়সহ) ন্যূনতম জিপিএ ৩.০০ সহ মোট জিপিএ ৭.০০ পেতে হবে।", //result
    applyfee: 1120, // fee
    applyfeebd: BanglaWordstaka(1120), // word bd
     admitdnstart: new Date("2026-11-03"), // admitcard download
    admitdnstartTtime: BanglaTime("15:00"), // admitcard download
    admitdnend: new Date("2026-11-10"), // admitcard download
    admitdnendTime: BanglaTime("23:59"), // admitcard download
    examdate: new Date("2026-08-15"), // admitcard download
    examtime: BanglaTime("10:00"), // admitcard download
    examresultdate : new Date("2026-09-18"),
    examresulttme : "",
  },
  {
    NameofUnit: "গ - ইউনিট (বিজ্ঞান শাখা)",
    result:
      "বিজ্ঞান শাখা থেকে উত্তীর্ণ আবেদনকারীদের এসএসসি/সমমান ও এইচএসসি/সমমান উভয় পরীক্ষায় (৪র্থ বিষয়সহ) ন্যূনতম জিপিএ ৩.৫০ সহ মোট জিপিএ ৮.০০ পেতে হবে।", //result
    applyfee: 1320, // fee
    applyfeebd: BanglaWordstaka(1320), // word bd
     admitdnstart: new Date("2026-11-03"), // admitcard download
    admitdnstartTtime: BanglaTime("15:00"), // admitcard download
    admitdnend: new Date("2026-11-10"), // admitcard download
    admitdnendTime: BanglaTime("23:59"), // admitcard download
    examdate: new Date("2026-08-15"), // admitcard download
    examtime: BanglaTime("10:00"), // admitcard download
    examresultdate : new Date("2026-09-18"),
    examresulttme : "",
  },
];
const JNUInfo = [
  {
    NameofUnit:
      "ইউনিট—A (বিজ্ঞান ও লাইফ এন্ড আর্থ সায়েন্স অনুষদ) বিজ্ঞান ও ভোকেশনাল (উপযুক্ত বিষয়সহ)",
    result:
      "বিজ্ঞান ও ভোকেশনাল (উপযুক্ত বিষয়সহ) এসএসসি/সমমান ও এইচএসসি/সমমান উভয় পরীক্ষায় মোট জিপিএ ৭.৫০ থাকতে হবে। তবে কোনো পরীক্ষায় প্রাপ্ত জিপিএ ৩.২৫ এর কম নয়।", //result
    applyfee: 1100, // fee
    applyfeebd: BanglaWordstaka(1100), // word bd
     admitdnstart: new Date("2026-11-03"), // admitcard download
    admitdnstartTtime: BanglaTime("15:00"), // admitcard download
    admitdnend: new Date("2026-11-10"), // admitcard download
    admitdnendTime: BanglaTime("23:59"), // admitcard download
    examdate: new Date("2026-08-15"), // admitcard download
    examtime: BanglaTime("10:00"), // admitcard download
    examresultdate : new Date("2026-09-18"),
    examresulttme : "",
  },
  {
    NameofUnit: "ইউনিট—B (কলা ও আইন অনুষদ)",
    result:
      "বিজ্ঞান , মানবিক ও ব্যবসায় শিক্ষা শাখার সকল শিক্ষার্থী আবেদন করতে পারবে। শিক্ষার্থীদের এসএসসি/সমমান ও এইচএসসি/সমমান উভয় পরীক্ষায় মোট জিপিএ ৬.৫০ থাকতে হবে। তবে কোনো পরীক্ষায় প্রাপ্ত জিপিএ ৩.০০ এর কম নয়।", //result
    applyfee: 1100, // fee
    applyfeebd: BanglaWordstaka(1100), // word bd
     admitdnstart: new Date("2026-11-03"), // admitcard download
    admitdnstartTtime: BanglaTime("15:00"), // admitcard download
    admitdnend: new Date("2026-11-10"), // admitcard download
    admitdnendTime: BanglaTime("23:59"), // admitcard download
    examdate: new Date("2026-08-15"), // admitcard download
    examtime: BanglaTime("10:00"), // admitcard download
    examresultdate : new Date("2026-09-18"),
    examresulttme : "",
  },
  {
    NameofUnit: "ইউনিট - C (ব্যবসায় শিক্ষা শাখা)",
    result:
      "বিজ্ঞান , মানবিক ও ব্যবসায় শিক্ষা শাখার সকল শিক্ষার্থী আবেদন করতে পারবে। শিক্ষার্থীদের এসএসসি/সমমান ও এইচএসসি/সমমান উভয় পরীক্ষায় মোট জিপিএ ৬.৫০ থাকতে হবে। তবে কোনো পরীক্ষায় প্রাপ্ত জিপিএ ৩.০০ এর কম নয়।", //result
    applyfee: 1100, // fee
    applyfeebd: BanglaWordstaka(1100), // word bd
     admitdnstart: new Date("2026-11-03"), // admitcard download
    admitdnstartTtime: BanglaTime("15:00"), // admitcard download
    admitdnend: new Date("2026-11-10"), // admitcard download
    admitdnendTime: BanglaTime("23:59"), // admitcard download
    examdate: new Date("2026-08-15"), // admitcard download
    examtime: BanglaTime("10:00"), // admitcard download
    examresultdate : new Date("2026-09-18"),
    examresulttme : "",
  },
  {
    NameofUnit: "ইউনিট — D (সামাজিক বিজ্ঞান অনুষদ) ",
    result:
      "বিজ্ঞান , মানবিক ও ব্যবসায় শিক্ষা শাখার সকল শিক্ষার্থী আবেদন করতে পারবে। শিক্ষার্থীদের এসএসসি/সমমান ও এইচএসসি/সমমান উভয় পরীক্ষায় মোট জিপিএ ৬.৫০ থাকতে হবে। তবে কোনো পরীক্ষায় প্রাপ্ত জিপিএ ৩.০০ এর কম নয়।", //result
    applyfee: 1100, // fee
    applyfeebd: BanglaWordstaka(1100), // word bd
     admitdnstart: new Date("2026-11-03"), // admitcard download
    admitdnstartTtime: BanglaTime("15:00"), // admitcard download
    admitdnend: new Date("2026-11-10"), // admitcard download
    admitdnendTime: BanglaTime("23:59"), // admitcard download
    examdate: new Date("2026-08-15"), // admitcard download
    examtime: BanglaTime("10:00"), // admitcard download
    examresultdate : new Date("2026-09-18"),
    examresulttme : "",
  },
  {
    NameofUnit: "ইউনিট —E (চারুকলা অনুষদ) ",
    result:
      "বিজ্ঞান , মানবিক ও ব্যবসায় শিক্ষা শাখার সকল শিক্ষার্থী আবেদন করতে পারবে। শিক্ষার্থীদের এসএসসি/সমমান ও এইচএসসি/সমমান উভয় পরীক্ষায় মোট জিপিএ ৬.৫০ থাকতে হবে। তবে কোনো পরীক্ষায় প্রাপ্ত জিপিএ ৩.০০ এর কম নয়।", //result
    applyfee: 1100, // fee
    applyfeebd: BanglaWordstaka(1100), // word bd
     admitdnstart: new Date("2026-11-03"), // admitcard download
    admitdnstartTtime: BanglaTime("15:00"), // admitcard download
    admitdnend: new Date("2026-11-10"), // admitcard download
    admitdnendTime: BanglaTime("23:59"), // admitcard download
    examdate: new Date("2026-08-15"), // admitcard download
    examtime: BanglaTime("10:00"), // admitcard download
    examresultdate : new Date("2026-09-18"),
    examresulttme : "",
  },
];
const GSTInfo = [
  {
    NameofUnit: "ইউনিট—A (বিজ্ঞান অনুষদ)",
    result:
      "বিজ্ঞান শাখা হতে এইচএসসি/সমমান পরীক্ষায় উত্তীর্ণ আবেদনকারীদের এসএসসি/সমমান ও এইচএসসি/সমমান উভয় পরীক্ষায় (৪র্থ বিষয়সহ) ন্যূনতম জিপিএ ৩.২৫ সহ সর্বমোট জিপিএ কমপক্ষে ৭.০০ থাকতে হবে। সাধারণ শিক্ষা বোর্ডের বিজ্ঞান শাখাসহ মাদ্রাসা বোর্ড (বিজ্ঞান) এবং ভোকেশনাল (এইচএসসি) বিজ্ঞান শাখা হিসাবে বিবেচিত হবে।", //result
    applyfee: 1100, // fee
    applyfeebd: BanglaWordstaka(1100), // word bd
     admitdnstart: new Date("2026-11-03"), // admitcard download
    admitdnstartTtime: BanglaTime("15:00"), // admitcard download
    admitdnend: new Date("2026-11-10"), // admitcard download
    admitdnendTime: BanglaTime("23:59"), // admitcard download
    examdate: new Date("2026-08-15"), // admitcard download
    examtime: BanglaTime("10:00"), // admitcard download
    examresultdate : new Date("2026-09-18"),
    examresulttme : "",
  },
  {
    NameofUnit: "ইউনিট—B (কলা ও আইন অনুষদ)",
    result:
      "মানবিক শাখা হতে এইচএসসি/সমমান পরীক্ষায় উত্তীর্ণ আবেদনকারীদের এসএসসি/সমমান ও এইচএসসি/সমমান উভয় পরীক্ষায় (৪র্থ বিষয়সহ) ন্যূনতম জিপিএ ৩.০০ সহ সর্বমোট জিপিএ কমপক্ষে ৬.০০ থাকতে হবে। সাধারণ শিক্ষা বোর্ডের মানবিক শাখাসহ মিউজিক, গার্হস্থ্য অর্থনীতি এবং মাদ্রাসা বোর্ড (সাধারণ, মুজাব্বিদ) মানবিক শাখা হিসাবে বিবেচিত হবে।", //result
    applyfee: 1100, // fee
    applyfeebd: BanglaWordstaka(1100), // word bd
     admitdnstart: new Date("2026-11-03"), // admitcard download
    admitdnstartTtime: BanglaTime("15:00"), // admitcard download
    admitdnend: new Date("2026-11-10"), // admitcard download
    admitdnendTime: BanglaTime("23:59"), // admitcard download
    examdate: new Date("2026-08-15"), // admitcard download
    examtime: BanglaTime("10:00"), // admitcard download
    examresultdate : new Date("2026-09-18"),
    examresulttme : "",
  },
  {
    NameofUnit: "ইউনিট - C (ব্যবসায় শিক্ষা শাখা)",
    result:
      "বাণিজ্য শাখা হতে এইচএসসি/সমমান পরীক্ষায় উত্তীর্ণ আবেদনকারীদের এসএসসি/সমমান ও এইচএসসি/সমমান উভয় পরীক্ষায় (৪র্থ বিষয়সহ) ন্যূনতম জিপিএ ৩.০০ সহ সর্বমোট জিপিএ কমপক্ষে ৬.২৫ থাকতে হবে। সাধারণ শিক্ষা বোর্ডের বাণিজ্য শাখাসহ ডিপ্লোমা ইন বিজনেস স্টাডিজ, ব্যবসায় ব্যবস্থাপনা (এইচএসসি) এবং ডিপ্লোমা ইন কমার্স বাণিজ্য শাখা হিসাবে বিবেচিত হবে।", //result
    applyfee: 1100, // fee
    applyfeebd: BanglaWordstaka(1100), // word bd
     admitdnstart: new Date("2026-11-03"), // admitcard download
    admitdnstartTtime: BanglaTime("15:00"), // admitcard download
    admitdnend: new Date("2026-11-10"), // admitcard download
    admitdnendTime: BanglaTime("23:59"), // admitcard download
    examdate: new Date("2026-08-15"), // admitcard download
    examtime: BanglaTime("10:00"), // admitcard download
    examresultdate : new Date("2026-09-18"),
    examresulttme : "",
  },
];
const JUInfo = [
  {
    NameofUnit: "A ইউনিট (গাণিতিক ও পদার্থ বিষয়ক অনুষদ এবং ইনস্টিটিউট অব ইনফরমেশন টেকনোলজি, আইআইটি)",
    result:
      "উভয় পরীক্ষায় মোট জিপিএ ৮.৫০ (পৃথকভাবে ন্যূনতম জিপিএ ৪.০০ থাকতে হবে)।", //result
      applyfee: 800, // fee
    applyfeebd: BanglaWordstaka(800), // word bd
     admitdnstart: new Date("2026-11-03"), // admitcard download
    admitdnstartTtime: BanglaTime("15:00"), // admitcard download
    admitdnend: new Date("2026-11-10"), // admitcard download
    admitdnendTime: BanglaTime("23:59"), // admitcard download
    examdate: new Date("2026-08-15"), // admitcard download
    examtime: BanglaTime("10:00"), // admitcard download
    examresultdate : new Date("2026-09-18"),
    examresulttme : "",
  },
  {
    NameofUnit: "B ইউনিট (সমাজবিজ্ঞান অনুষদ),  ",
    result:
      "উভয় পরীক্ষায় বিজ্ঞান শাখার জন্য মোট জিপিএ ৮.৫০ (পৃথকভাবে ন্যূনতম জিপিএ ৩.৫০ থাকতে হবে); মানবিক/ব্যবসায় শিক্ষা/অন্যান্য শাখার জন্য মোট জিপিএ ৭.৫০ (পৃথকভাবে ন্যূনতম জিপিএ ৩.৫০ থাকতে হবে)।", //result
    applyfee: 800, // fee
    applyfeebd: BanglaWordstaka(800), // word bd
     admitdnstart: new Date("2026-11-03"), // admitcard download
    admitdnstartTtime: BanglaTime("15:00"), // admitcard download
    admitdnend: new Date("2026-11-10"), // admitcard download
    admitdnendTime: BanglaTime("23:59"), // admitcard download
    examdate: new Date("2026-08-15"), // admitcard download
    examtime: BanglaTime("10:00"), // admitcard download
    examresultdate : new Date("2026-09-18"),
    examresulttme : "",
  },
  {
    NameofUnit: "C ইউনিট (কলা ও মানবিক অনুষদ, আইন অনুষদ এবং তুলনামূলক সাহিত্য ও সংস্কৃতি ইনস্টিটিউট)",
    result:
      "উভয় পরীক্ষায় বিজ্ঞান শাখার জন্য মোট জিপিএ ৮.৫০ (পৃথকভাবে ন্যূনতম জিপিএ ৩.৫০ থাকতে হবে); মানবিক/ব্যবসায় শিক্ষা/অন্যান্য শাখার জন্য মোট জিপিএ ৭.৫০ (পৃথকভাবে ন্যূনতম জিপিএ ৩.৫০ থাকতে হবে)।", //result
    applyfee: 800, // fee
    applyfeebd: BanglaWordstaka(800), // word bd
     admitdnstart: new Date("2026-11-03"), // admitcard download
    admitdnstartTtime: BanglaTime("15:00"), // admitcard download
    admitdnend: new Date("2026-11-10"), // admitcard download
    admitdnendTime: BanglaTime("23:59"), // admitcard download
    examdate: new Date("2026-08-15"), // admitcard download
    examtime: BanglaTime("10:00"), // admitcard download
    examresultdate : new Date("2026-09-18"),
    examresulttme : "",
  },
  {
    NameofUnit: "C1 ইউনিট (কলা ও মানবিক অনুষদ: নাটক ও নাট্যতত্ত্ব বিভাগ এবং চারুকলা বিভাগ)",
    result:
      "উভয় পরীক্ষায় মোট জিপিএ ৭.৫০ (পৃথকভাবে ন্যূনতম জিপিএ ৩.৫০ থাকতে হবে)।", //result
    applyfee: 700, // fee
    applyfeebd: BanglaWordstaka(700), // word bd
     admitdnstart: new Date("2026-11-03"), // admitcard download
    admitdnstartTtime: BanglaTime("15:00"), // admitcard download
    admitdnend: new Date("2026-11-10"), // admitcard download
    admitdnendTime: BanglaTime("23:59"), // admitcard download
    examdate: new Date("2026-08-15"), // admitcard download
    examtime: BanglaTime("10:00"), // admitcard download
    examresultdate : new Date("2026-09-18"),
    examresulttme : "",
  },
  {
    NameofUnit: "D ইউনিট (জীববিজ্ঞান অনুষদ)",
    result:
      "উভয় পরীক্ষায় মোট জিপিএ ৯.০০ (পৃথকভাবে ন্যূনতম জিপিএ ৪.০০ থাকতে হবে)।", //result
    applyfee: 800, // fee
    applyfeebd: BanglaWordstaka(800), // word bd
     admitdnstart: new Date("2026-11-03"), // admitcard download
    admitdnstartTtime: BanglaTime("15:00"), // admitcard download
    admitdnend: new Date("2026-11-10"), // admitcard download
    admitdnendTime: BanglaTime("23:59"), // admitcard download
    examdate: new Date("2026-08-15"), // admitcard download
    examtime: BanglaTime("10:00"), // admitcard download
    examresultdate : new Date("2026-09-18"),
    examresulttme : "",
  },
  {
    NameofUnit: "E ইউনিট (বিজনেস স্টাডিজ অনুষদ)",
    result:"উভয় পরীক্ষায় মোট জিপিএ ৮.০০ তন্মধ্যে মাধ্যমিক/সমমান পরীক্ষায় ন্যূনতম জিপিএ ৪.০০ ও উচ্চমাধ্যমিক/সমমান পরীক্ষায় ন্যূনতম জিপিএ ৩.৫০ থাকতে হবে।উভয় পরীক্ষায় মোট জিপিএ ৯.০০ (পৃথকভাবে ন্যূনতম জিপিএ ৪.০০ থাকতে হবে)।", //result
    applyfee: 700, // fee
    applyfeebd: BanglaWordstaka(700), // word bd
     admitdnstart: new Date("2026-11-03"), // admitcard download
    admitdnstartTtime: BanglaTime("15:00"), // admitcard download
    admitdnend: new Date("2026-11-10"), // admitcard download
    admitdnendTime: BanglaTime("23:59"), // admitcard download
    examdate: new Date("2026-08-15"), // admitcard download
    examtime: BanglaTime("10:00"), // admitcard download
    examresultdate : new Date("2026-09-18"),
    examresulttme : "",
  },
  {
    NameofUnit: "ইনস্টিটিউট অব বিজনেস এ্যাডমিনিস্ট্রেশন, আইবিএ-জেইউ",
    result:"উভয় পরীক্ষায় বিজ্ঞান শাখার জন্য মোট জিপিএ ৮.০০ (পৃথকভাবে ন্যূনতম জিপিএ ৩.৭৫); মানবিক/ব্যবসায় শিক্ষা/অন্যান্য শাখার জন্য মোট জিপিএ ৭.৫০ (পৃথকভাবে ন্যূনতম জিপিএ ৩.৫০) থাকতে হবে।", //result
    applyfee: 700, // fee
    applyfeebd: BanglaWordstaka(700), // word bd
     admitdnstart: new Date("2026-11-03"), // admitcard download
    admitdnstartTtime: BanglaTime("15:00"), // admitcard download
    admitdnend: new Date("2026-11-10"), // admitcard download
    admitdnendTime: BanglaTime("23:59"), // admitcard download
    examdate: new Date("2026-08-15"), // admitcard download
    examtime: BanglaTime("10:00"), // admitcard download
    examresultdate : new Date("2026-09-18"),
    examresulttme : "",
  },
];
