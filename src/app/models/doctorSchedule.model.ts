import { Slot } from "./slot.model";

export interface DoctorSchedule{
     doctorName:String,
     day:String,
     slots:Slot[]
}