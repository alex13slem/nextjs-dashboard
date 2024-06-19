import { ComponentProps, FC, HTMLAttributes } from 'react';

interface Props extends ComponentProps<FC>, HTMLAttributes<HTMLDivElement> {}

const Page: FC<Props> = () => {
  return (
    <section>
      <h1>Customers page</h1>
    </section>
  );
};

export default Page;
