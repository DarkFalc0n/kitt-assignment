import { ExtendedFC } from '@/lib/types';
import { cn } from '@/lib/utils';
import { CircleCheck } from 'lucide-react';
import Image from 'next/image';
import { flightLoadingCardItems } from '@/public/constants/flights';

const LoadingCard: ExtendedFC<{
  items?: string[];
  loadedItems: number;
}> = ({ items = flightLoadingCardItems, loadedItems = 0, className }) => {
  const loadingCardBannerURL =
    'https://s3-alpha-sig.figma.com/img/df34/ff5d/de2e13b8b13ef90316e36338415b882b?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lbNdpXJEZpCLF~KVtFsGwnVHJMN7YiA8FtyMHNNmzvHa2N6JDdlV6rd20GV-MC3Sql~-zWshyEtecc6osLzrfiiWt89BNbycWeUx7kNLlF-T8cbbTG9AZ15keg6lMVcWkdugHKWUqtMxNklBbI561V0p0AVz1LzeLMwgEHiEB29C8s-pM-U6vNcQhRS-ipgLdwuEEioBwsJ8KXyPEY3NmZky6bwDvV6rQPDOQp1qxvQABzPKL9PHaz2xNrzEmMnBkwOgs8Tkp-WpzUalI3Rg58O13-OfVdLMMKeWKAt0iEUXbONUbgNQOUcT0qPQ~oXeQw5airpjlGDqNmKOOlRShA__';
  const spinnerURL =
    'https://s3-alpha-sig.figma.com/img/25eb/a584/a27d163d3ba2e57eae9546247443a830?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pbw0~0DdhoQsU~~HiOkFHk5bmcuNwMtfcnqKOdxdDlfohGl1hNdJdSa-lKajQ8K~MOU4DmHGYcdaIGQ0feCl~LWOECt7GNKW7YQLWBo-Ha3jran4gpBBkBew1erw2OkEUXF9tD0Nse01Bz3~9vVYCH7WvonnI2ijKQ5gS04MJAlcnawAF7POQWCYa8IcwqHGEQ8MWM6DaSuYDw2ykOyagBM8gWNdeYUT-2KLNUwa61S285ekVo~0lMbgw72--otVk8GWITT4dMmx2iAZX3xyt82QptDfSd8Zq4ROKmGSXEARa1kEt-uSvp1e~IPkvjUjrptFwC1rnBTvf7MVyN44lQ__';
  return (
    <div
      className={cn(
        'mx-auto my-12 w-[325px] rounded-2xl border border-border drop-shadow',
        className
      )}
    >
      <Image
        src={loadingCardBannerURL}
        width={150}
        height={150}
        alt="plane-gif"
        className="mx-auto"
      />
      <div className="ml mb-7 ml-7 mt-4 flex flex-col gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className={cn(
              `${loadedItems > index ? 'text-large-tertiary' : 'text-large-muted'}`,
              'flex gap-4'
            )}
          >
            <div className="flex flex-col justify-center">
              {index < loadedItems && (
                <CircleCheck size={18} className="text-success" />
              )}
              {index === loadedItems && (
                <Image src={spinnerURL} width={18} height={18} alt="spinner" />
              )}
              {index > loadedItems && <div className="h-4 w-4" />}
            </div>
            <div className="flex h-full flex-col justify-center">{item}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadingCard;
