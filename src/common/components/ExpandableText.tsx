import { Typography } from '@/components/General';
import { useState } from 'react';

export const ExpandableText = ({ text, maxLength = 50 }: { text: string; maxLength: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const renderText = () => {
    if (isExpanded) {
      return text;
    } else {
      return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
    }
  };

  return (
    <div onClick={toggleExpand}>
      <Typography
        variant="span"
        className="text-sm text-primaryColorDark dark:text-primaryColorLight "
      >
        {renderText()}{' '}
      </Typography>
      {text.length > maxLength && (
        <span onClick={toggleExpand}>
          {isExpanded ? (
            ''
          ) : (
            <b className="text-sm cursor-pointer text-infoLight dark:text-infoDark">Xem thêm</b>
          )}
        </span>
      )}
    </div>
  );
};
