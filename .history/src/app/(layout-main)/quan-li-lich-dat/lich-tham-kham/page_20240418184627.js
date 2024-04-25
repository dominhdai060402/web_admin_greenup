"use client";
import React, { useEffect } from "react";
import { faker } from "@faker-js/faker";

const data = [
  {
    id: "9d48cbac-6476-4700-a319-0e12bbedc627",
    bookingType: "kbBooking",
    bookingStatus: "pending",
    bookingDate: "2024-03-19",
    bookingTime: "9:00 - 10:00",
    userName: "Bùi Quang Trưởng",
    userNumber: "0977354956",
    userEmail: "buiquangtruong1105@gmail.com",
    userPets: [
      {
        petId: "c1ed8af2-f770-4ec5-b503-dd98856026a8",
        petName: "John",
        petType: "dog",
        petOld: "1",
        petSex: "male",
        staffId: "fe090a69-9d7f-4dad-a398-56556be0658e",
        petNote: "Khám định kỳ",
      },
      {
        petId: "c1ed8af2-f770-4ec5-b503-dd98856026a8",
        petName: "Meo",
        petType: "cat",
        petOld: "3",
        petSex: "female",
        staffId: "fe090a69-9d7f-4dad-a398-56556be0658e",
        petNote: "Khám định kỳ",
      },
    ],
  },
  {
    id: "a0025536-e351-4eed-b7e4-4298baa40aef",
    bookingType: "kbBooking",
    bookingStatus: "pending",
    bookingDate: "2024-01-02",
    bookingTime: "10:00 - 11:00",
    userName: "Trần Đức Trung",
    userNumber: "0944354956",
    userEmail: "tranductrung1182@gmail.com",
    userPets: [
      {
        petId: "9935fce4-3e8c-4386-b12f-1079bd882d77",
        petName: "SuSu",
        petType: "dog",
        petOld: "1",
        petSex: "male",
        staffId: "fe090a69-9d7f-4dad-a398-56556be0658e",
        petNote: "Khám định kỳ",
      },
      {
        petId: "a2752c84-03d8-43f1-b43f-93821109428c",
        petName: "OhS",
        petType: "cat",
        petOld: "3",
        petSex: "female",
        staffId: "fe090a69-9d7f-4dad-a398-56556be0658e",
        petNote: "Khám định kỳ",
      },
    ],
  },
  {
    id: "3cd73cd3-12a8-4ecb-b34b-767ce9a9858f",
    bookingType: "kbBooking",
    bookingStatus: "pending",
    bookingDate: "2023-01-02",
    bookingTime: "10:00 - 11:00",
    userName: "Hoàng Trung Đức",
    userNumber: "0944354956",
    userEmail: "hoangtrungduc324@gmail.com",
    userPets: [
      {
        petId: "6ae0ad84-142e-4827-9624-fd861665b162",
        petName: "Mini",
        petType: "cat",
        petOld: "3",
        petSex: "female",
        staffId: "fe090a69-9d7f-4dad-a398-56556be0658e",
        petNote: "Khám định kỳ",
      },
    ],
  },
  {
    id: "af978dd5-d4b3-4090-88da-ca1135491155",
    bookingType: "kbBooking",
    bookingStatus: "done",
    bookingDate: "2023-09-11",
    bookingTime: "10:00 - 11:00",
    userName: "Bùi Văn Quỳnh",
    userNumber: "0977564956",
    userEmail: "buivanquynh234@gmail.com",
    userPets: [
      {
        petId: "0f7fdb7d-dab7-4db5-a3e3-bef7374b0b26",
        petName: "Kaka",
        petType: "dog",
        petOld: "2",
        petSex: "male",
        staffId: "fe090a69-9d7f-4dad-a398-56556be0658e",
        petNote: "Khám định kỳ",
      },
    ],
  },
  {
    id: "52e503bc-2732-4cc8-91b6-3104617bfd63",
    bookingType: "kbBooking",
    bookingStatus: "done",
    bookingDate: "2023-07-08",
    bookingTime: "10:00 - 11:00",
    userName: "Phạm Văn Ngọc",
    userNumber: "0345354956",
    userEmail: "phamvanngoc@gmail.com",
    userPets: [
      {
        petId: "6edddf37-b645-4816-b7ee-1992a40e5043",
        petName: "Kaka",
        petType: "dog",
        petOld: "2",
        petSex: "male",
        staffId: "fe090a69-9d7f-4dad-a398-56556be0658e",
        petNote: "Khám định kỳ",
      },
    ],
  },
  {
    id: "c0ff9b00-ef1b-4ccc-ab50-d00da91e6f24",
    bookingType: "kbBooking",
    bookingStatus: "cancel",
    bookingDate: "2023-07-08",
    bookingTime: "10:00 - 11:00",
    userName: "Trần Thanh Chương",
    userNumber: "0345354956",
    userEmail: "tranthanhchuong234@gmail.com",
    userPets: [
      {
        petId: "cdd4c303-f7e0-4e29-ade8-fcef339ddc9c",
        petName: "Kaka",
        petType: "dog",
        petOld: "2",
        petSex: "male",
        staffId: "fe090a69-9d7f-4dad-a398-56556be0658e",
        petNote: "Khám định kỳ",
      },
    ],
  },
  {
    id: "2685585d-8545-4693-b5b8-955e2b324e2d",
    bookingType: "kbBooking",
    bookingStatus: "cancel",
    bookingDate: "2023-07-08",
    bookingTime: "16:00 - 17:00",
    userName: "Bùi Thị Huyền",
    userNumber: "0345354956",
    userEmail: "buithihuyen234@gmail.com",
    userPets: [
      {
        petId: "667e6260-88d3-48f7-8274-ab2af235f4e1",
        petName: "Kaka",
        petType: "dog",
        petOld: "2",
        petSex: "male",
        staffId: "fe090a69-9d7f-4dad-a398-56556be0658e",
        petNote: "Khám định kỳ",
      },
    ],
  },
  ,
  {
    id: "44865432-c752-40d8-847f-bd2c1391a337",
    bookingType: "kbBooking",
    bookingStatus: "done",
    bookingDate: "2023-07-08",
    bookingTime: "16:00 - 17:00",
    userName: "Hoàng Văn Công",
    userNumber: "0977453345",
    userEmail: "hoangvancong234@gmail.com",
    userPets: [
      {
        petId: "58c177ce-e1a2-4c62-9a72-c7014e8efdc6",
        petName: "Kiki",
        petType: "dog",
        petOld: "2",
        petSex: "male",
        staffId: "fe090a69-9d7f-4dad-a398-56556be0658e",
        petNote: "Khám định kỳ",
      },
    ],
  },
];

export default function Page() {
  useEffect(() => {}, []);
  return (
    <section className="section">
      <h1 className="section-heading">QUẢN LÝ LỊCH ĐẶT/LỊCH THĂM KHÁM</h1>
    </section>
  );
}
