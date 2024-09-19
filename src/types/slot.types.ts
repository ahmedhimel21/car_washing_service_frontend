export type TSlot = {
  _id: string;
  service: {
    _id: string;
    name: string;
    description: string;
    price: number;
    duration: number;
    isDeleted: boolean;
    image: string;
  };
  date: string;
  startTime: string;
  endTime: string;
  isBooked: string;
};
