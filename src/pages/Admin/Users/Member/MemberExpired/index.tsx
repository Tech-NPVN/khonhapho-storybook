import { Table } from '@/common/components';
import { MEMBER_COLUMNS, MemberType } from '../constant';

const MemberExpired = () => {
  return <Table<MemberType> rows={[]} columns={MEMBER_COLUMNS} />;
};

export default MemberExpired;
