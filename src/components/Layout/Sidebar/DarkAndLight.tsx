import { DarkIcon, LightIcon } from '@/components/General';

export const DarkAndLight = ({ theme = 'light', onToggleDarkAndLight = () => {} }) => {
  return (
    <div className="p-3 transition-colors rounded-lg bg-color-bg hover:bg-secondaryColorLightD2 hover:dark:bg-secondaryColorDark">
      <div className="flex items-center justify-between" onClick={onToggleDarkAndLight}>
        <span className="flex-1 text-sm font-semibold cursor-pointer dark:text-white text-secondaryColorDark">
          Chế độ {theme === 'light' ? 'tối' : 'sáng'}
        </span>
        <div className="text-inherit hover:!text-inherit">
          <button
            type="submit"
            className="flex items-center justify-center p-1.5 hover:bg-dividerDark/25 rounded-full transition-all"
          >
            {theme === 'light' ? (
              <DarkIcon width="16" height="16" />
            ) : (
              <LightIcon width="20" height="20" color={theme === 'light' ? '' : 'white'} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
