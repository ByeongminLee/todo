export type ContainerType<C extends React.ElementType> = {
  children: React.ReactNode;
  as?: C;
};

export type ContainerProps<C extends React.ElementType> = React.PropsWithChildren<
  ContainerType<C>
> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof ContainerType<C>>;

export const Container = <C extends React.ElementType = 'div'>({
  children,
  as,
  ...props
}: ContainerProps<C>): JSX.Element => {
  const Comp = as || 'div';

  return <Comp {...props}>{children}</Comp>;
};
