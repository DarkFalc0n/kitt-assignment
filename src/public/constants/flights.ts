import { TItinerary } from '@/lib/types';
import { sleep } from '@/lib/utils';

export const flightLoadingCardItems = [
  'Searching 400+ flights',
  'Attaching company rules',
  'Serving best results'
];

export const flightIcons = {
  Emirates:
    'https://s3-alpha-sig.figma.com/img/7076/3924/882e9e02ae1c412e82b17d8766c73164?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aVb0rdjzLY2C06JwAyrBc~7BnZGwIGC6pnvDE8ew16MK1XPsylyRKSaByuiPAsSRGfazRMhZEdlEIp32uUIF-HaQYMWIe~blkGKWNs3PTfTWmCws7WlZWWe~~8-GQbmEqappxUDskT48dSanp85xHuWMytrterFgtS7N~tOTLBLui1D~5wlWwZcWAaC8nkgzt12H96qYVFQ5fea-HWKiK9wS7zmjVezDrl8F8-DZ5fXd4T-ffVoCXNNX7gdWiD40LVCP2ceU8Vyw3dKiup0psXtetsRyWGumX~iEgfC64os-k~~-uS0ot7BK2YuaUGoi2PqHJcTB645hE~mPwd~1FQ__',
  Lufthansa:
    'https://s3-alpha-sig.figma.com/img/ea70/b280/dfe3360521722410b57f9f5917445a6f?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SNGYlBMh3nww5FNvKrNg5~L32TsVlY9Ko9hiAIjgBQuFr~g2Kot7W17x6HlKLKqNg2rXLd6NGafMaTlPz-UyQnE0W8ribMAbhAQB6ABL7rce2wIuJpFP3kSesPxeaVoKiV8cygczQVI2UbgZRrPBLDBCX8JRpPWVHB4~Ig6-4hlF~u3-g~P6ZyTSn1gzg2nRyzGU0-KyCunskcCRmZISjbcgCIHBezhzcAEGZpTkBzntlGqGpUMaUpqtw0r0EKYOQ1XO~o1Cse~S9ZPIcgHdFv5X20SX7v8n6CypsYIa-JfeP3ZJYIDdqPWCCW0eEEizdNOr-UViG~~4ivjwlhMlHQ__'
};

export const twoWayJourneys: TItinerary[] = [
  {
    outgoingFlights: [
      {
        id: 'SV553',
        airline: 'Emirates',
        airlineIcon: flightIcons.Emirates,
        class: 'Economy',
        classid: 'A330',
        from: 'DXB',
        to: 'JFK',
        departure: new Date('2024-08-01T09:00:00Z'),
        arrival: new Date('2024-08-01T14:00:00Z')
      },
      {
        id: 'HF533',
        airline: 'Emirates',
        airlineIcon: flightIcons.Emirates,
        class: 'Economy',
        classid: 'A331',
        from: 'JFK',
        to: 'DEL',
        departure: new Date('2024-08-01T16:45:00Z'),
        arrival: new Date('2024-08-02T20:50:00Z')
      }
    ],
    returnFlights: [
      {
        id: 'SV554',
        airline: 'Lufthansa',
        airlineIcon: flightIcons.Lufthansa,
        class: 'Economy',
        classid: 'A330',
        from: 'DEL',
        to: 'DXB',
        departure: new Date('2024-08-02T09:45:00Z'),
        arrival: new Date('2024-08-02T14:00:00Z')
      }
    ],
    price: 3240.4
  }
];

export const getItineraries = async () => {
  await sleep(1000);
  return twoWayJourneys;
};
