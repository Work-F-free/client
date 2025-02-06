export interface CoworkingItem {
  quantity?: string,
  rating?: string,
  amenities?: string[]
  id: string,
  name: string,
  address: string,
  owner: string,
  description: string
  availableSeats: number
}
