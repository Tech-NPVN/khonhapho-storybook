export type TChat = {
  id?: string;
  src?: string;
  name?: string;
  timeOperation?: string;
};

export const Chat = ({ user }: { user: TChat }) => {
  return (
    <div>
      <p>{user.id}</p>
      <p>{user.name}</p>
      <p>year</p>
    </div>
  );
};
