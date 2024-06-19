import { ComponentProps, FC, HTMLAttributes } from 'react';

interface Props extends ComponentProps<FC>, HTMLAttributes<HTMLDivElement> {}

const ComponentName: FC<Props> = () => {
  return (
    <section>
      <h1>Invoices page</h1>
    </section>
  );
};

export default ComponentName;
