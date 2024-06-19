import { ComponentProps, FC, HTMLAttributes } from 'react';

interface Props extends ComponentProps<FC>, HTMLAttributes<HTMLDivElement> {}

const Page: FC<Props> = () => {
  return (
    <main>
      <h1>Dashboard page</h1>
    </main>
  );
};

export default Page;
