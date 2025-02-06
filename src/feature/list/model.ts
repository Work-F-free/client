export interface CoworkingItem {
  id: string;
  name: string;
  address: string;
  owner: string;
  description: string;
}

export interface CoworkingItemDetailed extends CoworkingItem {
  seats: Seat[];
}

interface Seat {
  id: string;
  type: string;  
  seatNumber: number;
  capacity: number;
  price: number;
  description: string;
  bookings:  {
    from: Date;
    to: Date;
  }[];
} 
