import { Meta, StoryObj } from '@storybook/react';
import { AddIcon } from './AddIcon';
import { AlarmClock } from './AlarmClock';
import { AngleDownIcon } from './AngleDownIcon';
import { AngleNextIcon } from './AngleNextIcon';
import { AnglePrevIcon } from './AnglePrevIcon';
import { AngleUpIcon } from './AngleUpIcon';
import { ArrowDownArrowUpIcon } from './ArrowDownArrowUpIcon';
import { ArrowsExchangeIcon } from './ArrowsExchangeIcon';
import { ArrowsRotateIcon } from './ArrowsRotateIcon';
import { ArrowsUpToLineIcon } from './ArrowsUpToLineIcon';
import BirthdayIcon from './BirthdayIcon/BirthdayIcon';
import { BuildingIcon } from './BuildingIcon';
import { CameraIcon } from './CameraIcon';
import { CheckIcon } from './CheckIcon';
import { CircleCheckIcon } from './CircleCheckIcon';
import { ClockIcon } from './ClockIcon';
import { CloseIcon } from './CloseIcon';
import { CommentIcon } from './CommentIcon';
import { CopyIcon } from './CopyIcon';
import { CounterClockwiseClock } from './CounterClockwiseClock';
import { DarkIcon } from './DarkIcon';
import { DeleteIcon } from './DeleteIcon';
import { DetailIcon } from './DetailIcon';
import { DoubleArrowDownIcon } from './DoubleArrowDownIcon';
import { DoubleArrowUpIcon } from './DoubleArrowUpIcon';
import { DownSolidIcon } from './DownSolidIcon';
import { EditSolidIcon } from './EditSolidIcon';
import { EmailIcon } from './EmailIcon';
import { ExternalLinkAltIcon } from './ExternalLinkAltIcon';
import { EyeIcon } from './EyeIcon';
import { EyeOffIcon } from './EyeOffIcon';
import { EyeSlashIcon } from './EyeSlashIcon';
import { EyeSolidIcon } from './EyeSolidIcon';
import { FacebookIcon } from './FacebookIcon';
import { FacebookSolidIcon } from './FacebookSolidIcon';
import { GitBranchIcon } from './GitBranchIcon';
import { HeartIcon } from './HeartIcon';
import { Icons } from './Icons';
import { LightIcon } from './LightIcon';
import { LikeIcon } from './LikeIcon';
import { LinkIcon } from './LinkIcon';
import { ListUiIcon } from './ListUiIcon';
import { LockIcon } from './LockIcon';
import { MessageIcon } from './MessageIcon';
import { NextSolidIcon } from './NextSolidIcon';
import { NoteIcon } from './NoteIcon';
import { NotificationIcon } from './NotificationIcon';
import { PatchCheckFillIcon } from './PatchCheckFillIcon';
import { PhoneEnabledIcon } from './PhoneEnabledIcon';
import { PhoneIcon } from './PhoneIcon';
import { PinIcon } from './PinIcon';
import { PinSolidIcon } from './PinSolidIcon';
import { ReportIcon } from './ReportIcon';
import { ResetIcon } from './ResetIcon';
import { SearchIcon } from './SearchIcon';
import { SendIcon } from './SendIcon';
import { ShareIcon } from './ShareIcon';
import { StarIcon } from './StarIcon';
import { SuitableIcon } from './SuitableIcon';
import { ThreeDotsIcon } from './ThreeDotsIcon';
import { UserIcon } from './UserIcon';
import { WarningReverceIcon } from './WarningReverceIcon';

const items = [
  { icon: <AddIcon />, name: 'AddIcon' },
  { icon: <AlarmClock />, name: 'AlarmClock' },
  {
    icon: <AngleDownIcon />,
    name: 'AngleDownIcon',
  },
  {
    icon: <AngleNextIcon />,
    name: 'AngleNextIcon',
  },
  {
    icon: <AnglePrevIcon />,
    name: 'AnglePrevIcon',
  },
  {
    icon: <AngleUpIcon />,
    name: 'AngleUpIcon',
  },
  {
    icon: <ArrowDownArrowUpIcon />,
    name: 'ArrowDownArrowUpIcon',
  },
  {
    icon: <ArrowsExchangeIcon />,
    name: 'ArrowsExchangeIcon',
  },
  {
    icon: <CircleCheckIcon />,
    name: 'CircleCheckIcon',
  },
  {
    icon: <ClockIcon />,
    name: 'ClockIcon',
  },
  {
    icon: <CloseIcon />,
    name: 'CloseIcon',
  },
  {
    icon: <CommentIcon />,
    name: 'CommentIcon',
  },
  {
    icon: <CopyIcon />,
    name: 'CopyIcon',
  },
  {
    icon: <CounterClockwiseClock />,
    name: 'CounterClockwiseClock',
  },
  {
    icon: <DarkIcon />,
    name: 'DarkIcon',
  },
  {
    icon: <DetailIcon />,
    name: 'DetailIcon',
  },
  {
    icon: <DoubleArrowUpIcon />,
    name: 'DoubleArrowUpIcon',
  },
  {
    icon: <DoubleArrowDownIcon />,
    name: 'DoubleArrowDownIcon',
  },
  {
    icon: <DownSolidIcon />,
    name: 'DownSolidIcon',
  },
  {
    icon: <ExternalLinkAltIcon />,
    name: 'ExternalLinkAltIcon',
  },
  {
    icon: <EyeIcon />,
    name: 'EyeIcon',
  },
  {
    icon: <EyeSlashIcon />,
    name: 'EyeSlashIcon',
  },
  {
    icon: <EyeSolidIcon />,
    name: 'EyeSolidIcon',
  },
  {
    icon: <FacebookIcon />,
    name: 'FacebookIcon',
  },
  {
    icon: <HeartIcon />,
    name: 'HeartIcon',
  },
  {
    icon: <LightIcon />,
    name: 'LightIcon',
  },
  {
    icon: <LikeIcon />,
    name: 'LikeIcon',
  },
  {
    icon: <LinkIcon />,
    name: 'LinkIcon',
  },
  {
    icon: <ListUiIcon />,
    name: 'ListUiIcon',
  },
  {
    icon: <LockIcon />,
    name: 'LockIcon',
  },
  {
    icon: <MessageIcon />,
    name: 'MessageIcon',
  },
  {
    icon: <NextSolidIcon />,
    name: 'NextSolidIcon',
  },
  {
    icon: <NoteIcon />,
    name: 'NoteIcon',
  },
  {
    icon: <NotificationIcon />,
    name: 'NotificationIcon',
  },
  {
    icon: <PatchCheckFillIcon />,
    name: 'PatchCheckFillIcon',
  },
  {
    icon: <PhoneEnabledIcon />,
    name: 'PhoneEnabledIcon',
  },
  {
    icon: <PinIcon />,
    name: 'PinIcon',
  },
  {
    icon: <PinSolidIcon />,
    name: 'PinSolidIcon',
  },
  {
    icon: <ReportIcon />,
    name: 'ReportIcon',
  },
  {
    icon: <ResetIcon />,
    name: 'ResetIcon',
  },
  {
    icon: <SearchIcon />,
    name: 'SearchIcon',
  },
  {
    icon: <SendIcon />,
    name: 'SendIcon',
  },
  {
    icon: <ShareIcon />,
    name: 'ShareIcon',
  },
  {
    icon: <StarIcon />,
    name: 'StarIcon',
  },
  {
    icon: <SuitableIcon />,
    name: 'SuitableIcon',
  },
  {
    icon: <ThreeDotsIcon />,
    name: 'ThreeDotsIcon',
  },
  {
    icon: <UserIcon />,
    name: 'UserIcon',
  },
  {
    icon: <WarningReverceIcon />,
    name: 'WarningReverceIcon',
  },
  {
    icon: <ArrowsUpToLineIcon />,
    name: 'ArrowsUpToLineIcon',
  },

  {
    icon: <GitBranchIcon />,
    name: 'GitBranchIcon',
  },
  {
    icon: <BuildingIcon />,
    name: 'BuildingIcon',
  },
  {
    icon: <EmailIcon />,
    name: 'EmailIcon',
  },
  {
    icon: <PhoneIcon />,
    name: 'PhoneIcon',
  },
  {
    icon: <BirthdayIcon />,
    name: 'BirthdayIcon',
  },
  {
    icon: <CameraIcon />,
    name: 'CameraIcon',
  },
  {
    icon: <FacebookSolidIcon />,
    name: 'FacebookSolidIcon',
  },
  {
    icon: <EditSolidIcon />,
    name: 'EditSolidIcon',
  },
  {
    icon: <EyeOffIcon />,
    name: 'EyeOffIcon',
  },
  {
    icon: <DeleteIcon />,
    name: 'DeleteIcon',
  },

  {
    icon: <ArrowsRotateIcon />,
    name: 'ArrowsRotateIcon',
  },
  {
    icon: <CheckIcon />,
    name: 'CheckIcon',
  },
];

const meta: Meta<typeof Icons> = {
  title: 'General/Icons',
  component: Icons,
  args: {
    items,
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items,
  },
};
