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
      <td style="color:green"আজকেই শেষ দিন </td>
    </tr>`;
} else if (gstapplicationenddate < todays) {
  gstappdateLine = ` <tr>
      <td>আবেদন সময়সীমা </td>
      <td style="color:red">আবেদনের সময় শেষ </td>
    </tr>`;
}

let gsttableResultHTML = "";
let gsttaelfee = "";
let gstadmitDNHeadhtml = "";
let gstadmitHTML = "";
let gstexamheadhtml = "";
let gstexmaHTML = "";
let gstexmacenterHTML = "";
let gstexamreusultHtml = "";
let gstexamreusultHtmlheaad = "";

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
  // admitDNUnitwise:true,
  let uintwiseADGST = UNIVERSITYDTA[gstid].admitDNUnitwise; //admit true flase
  if (uintwiseADGST === false) {
    gstadmitHTML = `<tr>
              <th colspan="2" style="text-align: center;"> প্রবেশপত্র সংগ্রহের তারিখ</th>
            </tr>
            <tr>
      <td colspan="2">সাকল ইউনিটের প্রবেশপত্র ডাউনলোডের আগামী ${UNIVERSITYDTA[gstid].admitDNUnitwisdatestart.toLocaleDateString("bn-BD", dateBangla)} ${UNIVERSITYDTA[gstid].admitDNUnitwistimestart} হতে ${UNIVERSITYDTA[gstid].admitDNUnitwisdateend.toLocaleDateString("bn-BD", dateBangla)} ${UNIVERSITYDTA[gstid].admitDNUnitwistimeend} পর্যন্ত করা যাবে।</td>
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
  let GSTuintwiseExam = UNIVERSITYDTA[gstid].examUnitwise; //admit true flase
  // * False for Unit-wise NO , true for Unit-wise yes
  if (GSTuintwiseExam === false) {
    gstexmaHTML = `
            <tr>
              <th colspan="2" style="text-align: center;">  পরীক্ষার  তারিখ</th>
            </tr>
            <tr>
<td colspan="2">সাকল ইউনিটের পরীক্ষা আগামী ${UNIVERSITYDTA[gstid].examteststart.toLocaleDateString("bn-BD", dateBangla)} হতে ${UNIVERSITYDTA[gstid].examtestend.toLocaleDateString("bn-BD", dateBangla)} মধ্যে অনুষ্টিত হবে।  </td>      
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
  const gstexamreusult = UNIVERSITYDTA[gstid].examreusult;
  const gstexamreusultunit = UNIVERSITYDTA[gstid].examreusultUnitwis;
  if (gstexamreusult === true && gstexamreusultunit === false) {
    gstexamreusultHtml = `<tr>
              <td>পরীক্ষার ফলাফল</td>
              <td>${UNIVERSITYDTA[gstid].examreusultdate.toLocaleDateString("bn-BD", dateBangla)} তারিখে ${UNIVERSITYDTA[gstid].examreusulttme} প্রকাাশ করা হবে।</td>
            </tr>`;
  } else if (gstexamreusult === true && gstexamreusultunit === true) {
    gstexamreusultHtmlheaad = `<tr>
              <th colspan="2" style="text-align: center;"> পরীক্ষার ফলাফল</th>
            </tr>
            <tr style="text-align: center;">
              <td>ইউনিটের নাম</td>
              <td> তারিখ</td>
            </tr>`;
    gstexamreusultHtml += `
            
            <tr>
              <td>${gstdata.NameofUnit} </td>
              <td>${gstdata.examreusultdate.toLocaleDateString("bn-BD", dateBangla)} তারিখে ${gstdata.examreusulttme} প্রকাাশ করা হবে।</td>
            </tr>`;
  }
  // exam center
});
// const
// ? table output section
//du
document.getElementById("gst_table_output").innerHTML =
  tableHTMLHead +
  gsttableResultHTML + //du reuslt
  onlineTimeHead +
  gsttimetable + // time table
  gstappdateLine + //time table
  applyfeeheader +
  gsttaelfee + // fee
  admitDNHeadhtml +
  gstadmitHTML + // admit downlaod
  gstexamheadhtml +
  gstexmaHTML + // exam date
  gstexmacenterHTML +
  gstexamreusultHtmlheaad +
  gstexamreusultHtml +
  tableFooter;
//gst
