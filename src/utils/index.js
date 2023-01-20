import Moment from 'react-moment';
import moment from 'moment';
import 'moment-timezone';

export const ValidateEmail = () => {
  return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
};

export const ValidatePassword = () => {
  return (/^[a-zA-Z0-9!@#$%^&*]{6,12}$/);
};

export const ValidateName = () => {
  return (/^[a-zA-Z ]+$/);
};

export const ValidateNumber = () => {
  return (/^[789]\d{8}$/);
};

export const timeZone = [
  {
    day: moment().format('dddd'),
    date: moment().format('Do'),
    month: moment().format('MMM'),
  },
  {
    day: moment().add(1, 'days').format('dddd'),
    date: moment().add(1, 'days').format('Do'),
    month: moment().add(1, 'days').format('MMM'),
  },
  {
    day: moment().add(2, 'days').format('dddd'),
    date: moment().add(2, 'days').format('Do'),
    month: moment().add(2, 'days').format('MMM'),
  },
  {
    day: moment().add(3, 'days').format('dddd'),
    date: moment().add(3, 'days').format('Do'),
    month: moment().add(3, 'days').format('MMM'),
  },
  {
    day: moment().add(4, 'days').format('dddd'),
    date: moment().add(4, 'days').format('Do'),
    month: moment().add(4, 'days').format('MMM'),
  },
]