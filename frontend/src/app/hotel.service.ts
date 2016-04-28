import {Injectable} from 'angular2/core';
import {Hotel} from './app.component';

@Injectable()
export class HotelService {

  private MOCK_HOTELS: Hotel[] = [
    new Hotel(1, 'Schloss Münchenweiler', 'A hotel', '007', 'Münchenweiler', 'CH', 'http://www.schloss-muenchenwiler.ch/home.html', 'http://test.com', 'http://test.com', 15),
    new Hotel(2, 'Hotel Moosegg', 'A hotel', '007', 'Moosegg', 'CH', 'http://www.moosegg.ch/v2/', 'http://test.com', 'http://test.com', 30),
    new Hotel(3, 'Steigenberger Inselhotel', 'A hotel', '007', 'Konstanz', 'DE', 'http://de.steigenberger.com/Konstanz/Steigenberger-Inselhotel', 'http://test.com', 'http://test.com', 30)
  ];

  getHotels(): Promise<Hotel[]> {
    return Promise.resolve(this.MOCK_HOTELS);
  }

  getHotelsDelayed(): Promise<Hotel[]> {
    return new Promise(resolve => setTimeout(() => resolve(this.MOCK_HOTELS), 2000)
    );
  }
}
