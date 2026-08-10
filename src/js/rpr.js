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
      <td style="color:green"আজকেই শেষ দিন </td>
    </tr>`;
} else if (juapplicationenddate < todays) {
  juappdateLine = ` <tr>
      <td>আবেদন সময়সীমা </td>
      <td style="color:red">আবেদনের সময় শেষ </td>
    </tr>`;
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


let jutableResultHTML = "";
let jutaelfee = "";
let juadmitDNHeadhtml = "";
let juadmitHTML = "";
let juexamheadhtml = "";
let juexmaHTML = "";
let juexmacenterHTML = "";
let juexamreusultHtml = "";
let juexamreusultHtmlheaad = "";

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
  // admitDNUnitwise:true,
  let uintwiseADJU = UNIVERSITYDTA[juid].admitDNUnitwise; //admit true flase
  if (uintwiseADJU === false) {
    juadmitHTML = `<tr>
              <th colspan="2" style="text-align: center;"> প্রবেশপত্র সংগ্রহের তারিখ</th>
            </tr>
            <tr>
      <td colspan="2">সাকল ইউনিটের প্রবেশপত্র ডাউনলোডের আগামী ${UNIVERSITYDTA[juid].admitDNUnitwisdatestart.toLocaleDateString("bn-BD", dateBangla)} ${UNIVERSITYDTA[juid].admitDNUnitwistimestart} হতে ${UNIVERSITYDTA[juid].admitDNUnitwisdateend.toLocaleDateString("bn-BD", dateBangla)} ${UNIVERSITYDTA[juid].admitDNUnitwistimeend} পর্যন্ত করা যাবে।</td>
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
  const juexamreusult = UNIVERSITYDTA[juid].examreusult;
  const juexamreusultunit = UNIVERSITYDTA[juid].examreusultUnitwis;
  if (juexamreusult === true && juexamreusultunit === false) {
    juexamreusultHtml = `<tr>
              <td>পরীক্ষার ফলাফল</td>
              <td>${UNIVERSITYDTA[juid].examreusultdate.toLocaleDateString("bn-BD", dateBangla)} তারিখে ${UNIVERSITYDTA[juid].examreusulttme} প্রকাাশ করা হবে।</td>
            </tr>`;
  } else if (juexamreusult === true && juexamreusultunit === true) {
    juexamreusultHtmlheaad = `<tr>
              <th colspan="2" style="text-align: center;"> পরীক্ষার ফলাফল</th>
            </tr>
            <tr style="text-align: center;">
              <td>ইউনিটের নাম</td>
              <td> তারিখ</td>
            </tr>`;
    juexamreusultHtml += `
            
            <tr>
              <td>${judata.NameofUnit} </td>
              <td>${judata.examreusultdate.toLocaleDateString("bn-BD", dateBangla)} তারিখে ${judata.examreusulttme} প্রকাাশ করা হবে।</td>
            </tr>`;
  }
  // exam center
});
const juNoticePUB= UNIVERSITYDTA[juid].noticepub;
if (juNoticePUB === true) {
  jufinalopt=
  tableHTMLHead +
  jutableResultHTML + //du reuslt
  onlineTimeHead +
  jutimetable + // time table
  juappdateLine + //time table
  applyfeeheader +
  jutaelfee + // fee
  admitDNHeadhtml +
  juadmitHTML + // admit downlaod
  juexamheadhtml +
  juexmaHTML + // exam date
  juexmacenterHTML +
  juexamreusultHtmlheaad +
  juexamreusultHtml +
  tableFooter+
  note;
} else {
  jufinalopt = `${notnoticePUb}`
}
document.getElementById("ju_table_output").innerHTML =jufinalopt;
//ju


ব.
ফিার ৪থ বিষয়সহ নোট ভি গণণা করা হবে।
গ.
ইউনিটের নাম
মাধ্যমিক/সমমান ও উচ্চমাধ্যমিক/সমমান পরীক্ষায় ন্যূনতম শিক্ষাগত যোগ্যতা
A ইউনিট (গাণিতিক ও পদার্থ বিষয়ক অনুষদ এবং ইনস্টিটিউট অব ইনফরমেশন টেকনোলজি, আইআইটি)

B ইউনিট (সমাজবিজ্ঞান অনুষদ), C ইউনিট (কলা ও মানবিকী অনুষদ, আইন অনুষদ এবং তুলনামূলক সাহিত্য ও সংস্কৃতি ইনস্টিটিউট)
উভয় পরীক্ষায় বিজ্ঞান শাখার জন্য মোট জিপিএ ৮.৫০ (পৃথকভাবে ন্যূনতম জিপিএ ৩.৫০ থাকতে হবে); মানবিক/ব্যবসায় শিক্ষা/অন্যান্য শাখার জন্য মোট জিপিএ ৭.৫০ (পৃথকভাবে ন্যূনতম জিপিএ ৩.৫০ থাকতে হবে)।
C1 ইউনিট (কলা ও মানবিক অনুষদ: নাটক ও নাট্যতত্ত্ব বিভাগ এবং চারুকলা বিভাগ)






