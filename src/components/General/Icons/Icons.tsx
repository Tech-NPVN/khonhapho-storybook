import Typography from '../Typography';

type icon = {
  icon: React.ReactNode;
  name: string;
};

export type iconsType = {
  items: icon[];
};

export const Icons = ({ items = [] }: iconsType) => {
  return (
    <div className="icons">
      {items.map((item) => (
        <div key={item.name} className="flex flex-col gap-3">
          <div className="flex items-center justify-center bg-white rounded-md shadow-md min-h-16 ">
            {item.icon}
          </div>
          <Typography variant="span" className="overflow-hidden text-sm font-medium text-center">
            {item.name}
          </Typography>
        </div>
      ))}
    </div>
  );
};
