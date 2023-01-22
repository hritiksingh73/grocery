import moment from 'moment';
//import { View } from "react-native";
// import { Text, View } from "react-native";

export const deliveryDateSlot = [
  {
    day: moment().format('ddd'),
    date: moment().format('Do'),
    month: moment().format('MMM'),
    // time:moment().format('llll')
  },
  {
    day: moment().add(1,"days").format('ddd'),
    date: moment().add(1,"days").format('Do'),
    month: moment().add(1,"days").format('MMM'),
    // time:moment().format('llll')
  },
  {
    day: moment().add(2,"days").format('ddd'),
    date: moment().add(2,"days").format('Do'),
    month: moment().add(2,"days").format('MMM'),
    // time:moment().format('llll')
  },
  {
    day: moment().add(3,"days").format('ddd'),
    date: moment().add(3,"days").format('Do'),
    month: moment().add(3,"days").format('MMM'),
    // time:moment().format('llll')
  },
  {
    day: moment().add(4,"days").format('ddd'),
    date: moment().add(4,"days").format('Do'),
    month: moment().add(4,"days").format('MMM'),
    // time:moment().format('llll')
  },
];

// for (var i = 1; i < 13; i++) {
//   //console.log(moment().month(i).format('MMMM'));
//   deliveryDateSlot.push({
//     day: moment().date(i).format('ddd'),
//     // month: moment().month(1).format('MMM'),
//     date: moment().day(i).format('Do'),
//     time:moment().format('llll')
//   });
// }
