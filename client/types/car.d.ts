export enum Transmission {
  AUTOMATIC,
  MANUAL
}

export enum VehicleType {
  SEDAN,
  COUPE,
  MICRO,
  PICKUP,
  HATCHBACK
}

export enum Gasoline {
  ELECTRIC,
  GASOLINE
}

export type Vehicle = {
  brand: string
  model: string
  year: number
  color: string
  capacity: string
  transmission: Transmission
  fuel: Gasoline
  vehicleType: VehicleType
  price: number
}
