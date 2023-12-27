interface IProps {
  header: React.ReactNode;
  main: React.ReactNode;
}

export default function AppLayout({ header, main }: IProps) {
  return (
    <div>
      {header}
      {main}
    </div>
  );
}
