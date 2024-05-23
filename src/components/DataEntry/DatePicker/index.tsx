import { VariantProps, cva } from 'class-variance-authority';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Input } from '../Input';
import { CloseIcon } from '@/components/General';
import { format, getMonth, getYear } from 'date-fns';
import './styles.css';

const starStyles = cva('', {
  variants: {},
  defaultVariants: {
    size: 'small',
  },
});

type Locale = {
  localize: {
    day: (n: number) => string;
    month: (n: number) => string;
  };
  formatLong: {
    date: () => string;
  };
};
//https://codesandbox.io/p/sandbox/react-datepicker-custom-locale-example-3z1kp?file=%2Fsrc%2Findex.js%3A17%2C2
const days = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];
const months = [
  'Th01',
  'Th02',
  'Th03',
  'Th04',
  'Th05',
  'Th06',
  'Th07',
  'Th08',
  'Th09',
  'Th10',
  'Th11',
  'Th12',
];

const locale: Locale = {
  localize: {
    day: (n) => days[n],
    month: (n) => months[n],
  },
  formatLong: {
    date: () => 'mm/dd/yyyy',
  },
};

type DatePickerProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof starStyles> & {
    className?: string;
    autoFocus?: boolean;
    disabled?: boolean;
    inputReadOnly?: boolean;
    open?: boolean;
    allowClear?: boolean;
    placeholder?: string;
    toggleCalendarOnIconClick?: boolean;
    placeHolder?: string;
  };

export const DatePickerComponent = ({
  toggleCalendarOnIconClick = true,
  ...props
}: DatePickerProps) => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const [isClear, setIsClear] = useState<boolean>(false);

  const handleSetToday = () => {
    setStartDate(new Date()); 
  };

  return (
    <DatePicker
      // showIcon
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      toggleCalendarOnIconClick={toggleCalendarOnIconClick}
      startDate={startDate}
      // endDate={endDate}
      //@ts-ignore
      locale={locale}
      className="relative"
      calendarClassName={'hidden'}
      customInput={
        <Input
          suffixIcon={
            <div onMouseEnter={() => setIsClear(true)} onMouseLeave={() => setIsClear(false)}>
              {!isClear ? (
                <div>
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="calendar"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z"></path>
                  </svg>
                </div>
              ) : (
                <div>
                  <CloseIcon className="cursor-pointer" />
                </div>
              )}
            </div>
          }
        />
      }
      renderCustomHeader={({
        date,
        changeYear,
        changeMonth,
        decreaseMonth,
        increaseMonth,
        increaseYear,
        decreaseYear,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <div className="flex justify-around">
          <div className="flex gap-2">
            <button onClick={decreaseYear} disabled={prevMonthButtonDisabled}>
              {'<<'}
            </button>
            <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
              {'<'}
            </button>
          </div>
          <p className="font-bold">
            Th{format(new Date(getYear(date), getMonth(date)), `MM yyyy`)}
          </p>
          <div className="flex gap-2">
            <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
              {'>'}
            </button>
            <button onClick={increaseYear} disabled={nextMonthButtonDisabled}>
              {'>>'}
            </button>
          </div>
        </div>
      )}
    >
      <button className="flex justify-center w-full py-2 text-[#1677FF]" onClick={handleSetToday}>
        Hôm nay
      </button>
    </DatePicker>
  );
};
