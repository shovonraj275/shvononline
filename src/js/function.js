import { MADICALADDATA,UNIVERSITYDTA, } from './info.js';
const duid = UNIVERSITYDTA[0].id;
export const ruid = UNIVERSITYDTA[1].id;
const jnuid = UNIVERSITYDTA[2].id;
const gstid = UNIVERSITYDTA[3].id;
const juid = UNIVERSITYDTA[4].id;


const today = new Date();
const todays = today.toISOString().split("T")[0];   
const calendarDate = { year: "numeric", month: "2-digit", day: "2-digit" };
const dateBangla = {
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "long",
};
/*
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
export function dudate(duapplicationenddate ,todays,duDaysEngbd ){
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

return duappdateLine;
}
//  const result = dudate(duapplicationenddate, todays, duDaysEngbd); console.log(result);


 console.log(duappdateLine)

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
}*/
