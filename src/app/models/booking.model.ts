import { Slot } from "./slot.model";

export interface Booking{
      bookingId?:String,
      userId?:String,
      doctorName?:String,
      day:String,
      slot:Slot;

}