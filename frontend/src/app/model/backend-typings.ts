
export interface Camp {
    fromDate: Date;
    id: number;
    name: string;
    numberOfPeople: number;
    offerRequests: OfferRequest[];
    status: string;
    team: string;
    toDate: Date;
}

export interface Country {
    code: string;
    name: string;
}

export interface Currency {
}

export interface Hotel {
    city: string;
    contactEmail: string;
    countryCode: string;
    description: string;
    holidayCheckUrl: string;
    id: number;
    name: string;
    offers: Offer[];
    pictureUrl: string;
    rooms: number;
    street: string;
    streetNumber: string;
    tripAdvisorUrl: string;
    website: string;
    zipCode: string;
}

export interface MailTemplate {
    id: number;
    language: string;
    text: string;
}

export interface Offer {
    costPerPerson: number;
    currency: Currency;
    description: string;
    doubleRooms: number;
    expirationDate: Date;
    fromDate: Date;
    id: number;
    numberOfPeople: number;
    offerDate: Date;
    requestingPerson: string;
    singleRooms: number;
    toDate: Date;
}

export interface OfferRequest {
    date: Date;
    hotel: Hotel;
    id: number;
    lastStatusChange: Date;
    status: RequestStatus;
}

export interface Rating {
    date: Date;
    description: string;
    hotel: Hotel;
    id: number;
    person: string;
    ratingFrom1To5: number;
}

export type RequestStatus = "REQUEST_SENT" | "OFFER_RECEIVED" | "WAITING_FOR_CLARIFCATION" | "OFFER_CONFIRMED" | "OFFER_DECLINED";
