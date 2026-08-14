let jutableResult = "";
let jutablefee = "";
let juadmitheajunit = "";
let jutableadmit = "";
let juexamheajunit = "";
let jutableexam = "";
let jutableexmacente = "";
let jutableexamresulthead = "";
let jutableexamresult = "";



JNInfo.forEach(function (judata) {
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
      <td style="width: 50%"> ${judata.examdate.toLocaleDateString("bn-BD", dateBangla)} ${judata.examtime} অনুষ্টিত হবে।  </td>
      
    </tr>`;
    jutableexmacente= `<tr>
              <td>পরীক্ষার কেন্দ্র</td>
              <td>${UNIVERSITYDTA[juid].examCenter}।</td>
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
const juapplastdate = UNIVERSITYDTA[juid].appDateend
const juapplast = UNIVERSITYDTA[juid].appstarttime
const jutimetable = `
    <tr>
      <td>আবদেন শুরুর তারিখ</td>
      <td style="width: 50%"> ${UNIVERSITYDTA[juid].appDateStart.toLocaleDateString("bn-BD", dateBangla)} ${UNIVERSITYDTA[juid].appstarttime}</td>
    </tr> 
    <tr>
      <td>আবদেন শেষের তারিখ</td>
      <td style="width: 50%"> ${juapplastdate.toLocaleDateString("bn-BD", dateBangla)}</td>
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