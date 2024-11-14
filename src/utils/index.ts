import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import duration from "dayjs/plugin/duration";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc"; // Import UTC for proper handling

// Extend dayjs to use the necessary plugins
dayjs.extend(relativeTime);
dayjs.extend(duration);
dayjs.extend(utc);
dayjs.extend(timezone);

const engToBnNumber = (char: string) => {
  const numbersObj: { [key: string]: string } = {
    0: "০",
    1: "১",
    2: "২",
    3: "৩",
    4: "৪",
    5: "৫",
    6: "৬",
    7: "৭",
    8: "৮",
    9: "৯",
    ".": ".",
    "-": "-",
  };
  return numbersObj[char];
};

// Use string literal types for days and months
const banglaDays = {
  Sunday: "রবিবার",
  Monday: "সোমবার",
  Tuesday: "মঙ্গলবার",
  Wednesday: "বুধবার",
  Thursday: "বৃহস্পতিবার",
  Friday: "শুক্রবার",
  Saturday: "শনিবার",
};

const banglaMonths = {
  January: "জানুয়ারি",
  February: "ফেব্রুয়ারি",
  March: "মার্চ",
  April: "এপ্রিল",
  May: "মে",
  June: "জুন",
  July: "জুলাই",
  August: "আগস্ট",
  September: "সেপ্টেম্বর",
  October: "অক্টোবর",
  November: "নভেম্বর",
  December: "ডিসেম্বর",
};

function dateIsValid(date: any) {
  return dayjs(date).isValid();
}

export const getStoryTime = (publishedTime: any) => {
  if (!dateIsValid(publishedTime)) return "";

  // Use Asia/Dhaka timezone
  const publishedDate = dayjs.tz(publishedTime, "Asia/Dhaka");

  let pattern = `HH:mm`;

  const formattedDate = publishedDate.format(pattern);

  return formattedDate
    .split("")
    .map((char) => engToBnNumber(char) || char)
    .join("")
    .replace(":", ": ");
};

// export const getStoryDate = (publishedTime: any, storyPage: any) => {
//   if (!dateIsValid(publishedTime)) return "";

//   // Use Asia/Dhaka timezone
//   const publishedDate = dayjs.tz(publishedTime, "Asia/Dhaka");
//   const hourDifference = dayjs().diff(publishedDate, "hour");

//   if (hourDifference < 23 && !storyPage) {
//     const relativeTimeString = publishedDate.fromNow();
//     return relativeTimeString
//       .replace(/ago|আগে/gi, "আগে")
//       .replace(/hours|hour|ঘন্টা/gi, "ঘণ্টা")
//       .replace(/minutes|minute|মিনিট/gi, "মিনিট")
//       .replace(/seconds|second|সেকেন্ড/gi, "সেকেন্ড")
//       .replace(/an/gi, "১")
//       .split("")
//       .map((char) => engToBnNumber(char) || char)
//       .join("")
//       .trim();
//   }

//   let pattern = `DD MMMM YYYY`;

//   if (storyPage) {
//     pattern = "DD MMMM YYYY, HH:mm";
//   }

//   const formattedDate = publishedDate.format(pattern);

//   return formattedDate
//     .replace(
//       /Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday/gi,
//       (day) => banglaDays[day as keyof typeof banglaDays]
//     )
//     .replace(
//       /January|February|March|April|May|June|July|August|September|October|November|December/gi,
//       (month) => banglaMonths[month as keyof typeof banglaMonths]
//     )
//     .split("")
//     .map((char) => engToBnNumber(char) || char)
//     .join("")
//     .replace(":", ": ");
// };

export const getStoryDate = (publishedTime: any, storyPage: any) => {
  if (!dateIsValid(publishedTime)) return "";

  // Use Asia/Dhaka timezone
  const publishedDate = dayjs.tz(publishedTime, "Asia/Dhaka");
  const now = dayjs();
  const hourDifference = now.diff(publishedDate, "hour");
  const dayDifference = now.diff(publishedDate, "day");

  // Handle time differences in hours, minutes, seconds, or days
  if (dayDifference < 25 && !storyPage) {
    const relativeTimeString = publishedDate.fromNow();
    return (
      relativeTimeString
        .replace(/ago|আগে/gi, "আগে")
        .replace(/hours|hour|ঘন্টা/gi, "ঘণ্টা")
        .replace(/minutes|minute|মিনিট/gi, "মিনিট")
        .replace(/seconds|second|সেকেন্ড/gi, "সেকেন্ড")
        .replace(/an/gi, "১")
        // Add the logic for days
        .replace(/days|day|দিন/gi, "দিন")
        .replace(/months|month|মাস/gi, "মাস")
        .replace(/a/gi, "১")
        .split("")
        .map((char) => engToBnNumber(char) || char)
        .join("")
        .trim()
    );
  }

  let pattern = `DD MMMM YYYY`;

  if (storyPage) {
    pattern = "DD MMMM YYYY, HH:mm";
  }

  const formattedDate = publishedDate.format(pattern);

  return formattedDate
    .replace(
      /Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday/gi,
      (day) => banglaDays[day as keyof typeof banglaDays]
    )
    .replace(
      /January|February|March|April|May|June|July|August|September|October|November|December/gi,
      (month) => banglaMonths[month as keyof typeof banglaMonths]
    )
    .split("")
    .map((char) => engToBnNumber(char) || char)
    .join("")
    .replace(":", ": ");
};

export const today = () =>
  dayjs()
    .tz("Asia/Dhaka")
    .format("dddd, DD MMMM YYYY")
    .replace(
      /Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday/gi,
      (day) => banglaDays[day as keyof typeof banglaDays]
    )
    .replace(
      /January|February|March|April|May|June|July|August|September|October|November|December/gi,
      (month) => banglaMonths[month as keyof typeof banglaMonths]
    )
    .split("")
    .map((char) => engToBnNumber(char) || char)
    .join("");

export const toBanglaNum = (value: any) => {
  if (isNaN(parseFloat(value)) || isNaN(value - 0)) {
    return "Invalid input type";
  }

  return value
    .toString()
    .split("")
    .map((num: string) => engToBnNumber(num) || num)
    .join("");
};

export const toBanglaMonth = (value: number) => {
  const monthsObj: { [key: number]: string } = {
    1: "জানুয়ারি",
    2: "ফেব্রুয়ারি",
    3: "মার্চ",
    4: "এপ্রিল",
    5: "মে",
    6: "জুন",
    7: "জুলাই",
    8: "আগস্ট",
    9: "সেপ্টেম্বর",
    10: "অক্টোবর",
    11: "নভেম্বর",
    12: "ডিসেম্বর",
  };

  return monthsObj[value];
};

export function get150Characters(banglaString: string) {
  if (banglaString.length <= 150) {
    return banglaString;
  }
  return banglaString.slice(0, 150);
}
