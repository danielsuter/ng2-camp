
export interface Camp {
    from: Date;
    id: number;
    name: string;
    numberOfPeople: number;
    offerRequests: OfferRequest[];
    offers: Offer[];
    status: string;
    team: string;
    to: Date;
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
    from: Date;
    hotel: Hotel;
    id: number;
    numberOfPeople: number;
    offerDate: Date;
    requestingPerson: string;
    singleRooms: number;
    to: Date;
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
