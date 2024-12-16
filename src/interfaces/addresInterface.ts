export interface IAddress {
    city: string
    geo: ILocation
    street: string
    zipcode: string
}

interface ILocation {
    lat: string,
    lng: string
}