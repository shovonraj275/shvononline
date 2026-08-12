function dateCalculator(newdate) {
  const today = new Date();
  const targetDate = new Date(newdate);

  today.setHours(0, 0, 0, 0);
  targetDate.setHours(0, 0, 0, 0);

  if (targetDate < today) {
    return "তারিখটি পার হয়ে গেছে";
  }

  if (targetDate.getTime() === today.getTime()) {
    return "আজ";
  }

  let years = targetDate.getFullYear() - today.getFullYear();
  let months = targetDate.getMonth() - today.getMonth();
  let days = targetDate.getDate() - today.getDate();

  if (days < 0) {
    months--;

    const previousMonth = new Date(
      targetDate.getFullYear(),
      targetDate.getMonth(),
      0
    );

    days += previousMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  const banglaNumber = number =>
    number.toString().replace(/\d/g, d => "০১২৩৪৫৬৭৮৯"[d]);

  let result = [];

  if (years > 0) {
    result.push(`${banglaNumber(years)} বছর`);
  }

  if (months > 0) {
    result.push(`${banglaNumber(months)} মাস`);
  }

  if (days > 0) {
    result.push(`${banglaNumber(days)} দিন`);
  }

  return result.join(" ") + " বাকি ";
}

console.log(dateCalculator("2028-10-25"));
const dateBangla = {
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "long",
};
