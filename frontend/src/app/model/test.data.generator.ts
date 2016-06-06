import {Hotel} from "./backend-typings";

export class TestDataGenerator {
  static generateHotels():Hotel[] {
    let hotels:Hotel[] = [];
    hotels.push(TestDataGenerator.createHotel(12, "Vier Jahreszeiten", "Schluchsee", "toll"));
    hotels.push(TestDataGenerator.createHotel(13, "Am Berg", "Brugg", "super"));
    hotels.push(TestDataGenerator.createHotel(14, "Schloss Wartegg", "Basel", "supertoll"));
    hotels.push(TestDataGenerator.createHotel(15, "Schlosshotel Brugg", "Schluchmatt", "Toll"));
    hotels.push(TestDataGenerator.createHotel(16, "Drei Jahreszeiten", "Ritterdingen", "SuPeRTOll"));
    hotels.push(TestDataGenerator.createHotel(17, "Vier Ritter", "Baselingen", "genial"));
    hotels.push(TestDataGenerator.createHotel(18, "HotelHotel", "Bern", "wow"));
    return hotels;
  }

  static createHotel(id:number, name:string, city:string, description:string):Hotel {
    let hotel:Hotel = {
      city: city,
      contactEmail: "contact",
      countryCode: "CH",
      description: description,
      holidayCheckUrl: "url",
      id: id,
      name: name,
      offers: [],
      rooms: 65,
      street: "street",
      streetNumber: "as",
      tripAdvisorUrl: "url2",
      website: "site",
      zipCode: "5200"
    };
    return hotel;
  }
}
