import type { FC, ReactNode } from 'react';

interface DefaultFCProps {
  children: ReactNode;
  className: string;
}
export type FCProps<T = unknown> = Partial<DefaultFCProps> & T;
export type ExtendedFC<T = unknown> = FC<FCProps<T>>;

export type TLayout = FC<Pick<DefaultFCProps, 'children'>>;

interface PageProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}
export type TPage = FC<Partial<PageProps>>;

export type TAirPort = {
  name: string;
  code: string;
  city: string;
  country: string;
};
export type TJourney = {
  from: TAirPort;
  to: TAirPort;
  startDate: Date;
  endDate: Date;
};
