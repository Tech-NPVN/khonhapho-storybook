import { cn } from '@/utils';
import { HTMLAttributes } from 'react';

type ProgressProps = HTMLAttributes<HTMLDivElement> & {
  percent?: number;
  showInfo?: boolean;
  width?: number;
  strokeColor?: string;
  textDirection?: 'before' | 'after';
};

export const Progress = ({
  className,
  width = 300,
  percent = 44,
  showInfo = false,
  textDirection = 'before',
  strokeColor = '#FBBD23',
}: ProgressProps) => {
  const widthPercent = (percent: number) => {
    if (percent > 100) return width;
    return (percent * width) / 100;
  };

  return (
    <div
      className={cn(
        `flex gap-2 items-center ${textDirection === 'before' ? 'flex-row-reverse' : ''}`,
        className,
      )}
    >
      <div className="relative">
        <div
          className={`px-2 rounded-md absolute top-0 left-0 h-full overflow-hidden`}
          style={{ width: widthPercent(percent), backgroundColor: strokeColor }}
        ></div>
        <div className="bg-[#D9D9D9] px-2 h-[8px] rounded-md" style={{ width }}></div>
      </div>
      {showInfo && <span>{percent}%</span>}
    </div>
  );
};
