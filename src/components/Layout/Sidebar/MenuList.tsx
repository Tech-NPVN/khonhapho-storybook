import { AngleDownIcon, AngleUpIcon } from '@/components/General';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { TItemMenu } from '.';

export const MenuList = ({ item }: { item: TItemMenu }) => {
  const [show, setShow] = useState<boolean>(false);

  const handleShow = () => {
    setShow((prev) => !prev);
  };

  return (
    <>
      <li key={item.id} className="flex items-center justify-between">
        <NavLink
          to={item.href}
          onClick={(e) => {
            item.subMenu && e.preventDefault();
            handleShow();
          }}
          className={({ isActive }) =>
            [
              'flex items-center justify-between flex-1 p-3 text-sm font-semibold transition-colors rounded-lg cursor-pointer  hover:bg-secondaryColorLightD2 hover:dark:bg-secondaryColorDark',
              isActive ? 'bg-secondaryColorLightD2 dark:bg-secondaryColorDark' : 'bg-transparent',
            ].join(' ')
          }
          end
        >
          {item.name}
          {item?.subMenu ? <>{show ? <AngleUpIcon /> : <AngleDownIcon />}</> : null}
        </NavLink>
      </li>

      {show &&
        item?.subMenu?.map((sub) => (
          <li key={sub.id} className="flex items-center justify-between ">
            <NavLink
              to={sub.href}
              className={({ isActive }) =>
                [
                  'flex items-center justify-between flex-1 p-3 text-sm font-semibold transition-colors rounded-lg cursor-pointer  hover:bg-secondaryColorLightD2 hover:dark:bg-secondaryColorDark',
                  isActive
                    ? 'bg-secondaryColorLightD2 dark:bg-secondaryColorDark'
                    : 'bg-transparent',
                ].join(' ')
              }
              end
            >
              · {sub.name}
            </NavLink>
          </li>
        ))}
    </>
  );
};
