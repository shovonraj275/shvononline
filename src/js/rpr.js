
const doo = UNIVERSITYDTA[duid].appDateend
console.log(doo)
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
console.log(duDaysEngbd)    
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

console.log(duappdateLine)
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

  duexmacenterHTML+
  duexamresultHtmlheaad+
  duexamresultHtml+
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