// Generated using typescript-generator version 1.8.202 on 2016-06-02 15:50:56.

export interface Hotel {
    id: number;
    name: string;
    description: string;
    zipCode: string;
    street: string;
    streetNumber: string;
    city: string;
    countryCode: string;
    website: string;
    contactEmail: string;
    tripAdvisorUrl: string;
    holidayCheckUrl: string;
    rooms: number;
    offers: Offer[];
}

export interface Offer {
    id: number;
    offerDate: Date;
    expirationDate: Date;
    from: Date;
    to: Date;
    singleRooms: number;
    doubleRooms: number;
    costPerPerson: number;
    currency: Currency;
    numberOfPeople: number;
    description: string;
    requestingPerson: string;
    hotel: Hotel;
}

export interface Currency extends Serializable {
}

export interface Serializable {
}
