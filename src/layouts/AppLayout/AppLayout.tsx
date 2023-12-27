import { SignButton } from '@/components/Sign';

interface IProps {
  header: React.ReactNode;
  main: React.ReactNode;
}

export default function AppLayout({ header, main }: IProps) {
  return (
    <div>
      {header}
      {main}
      <SignButton />
    </div>
  );
}
