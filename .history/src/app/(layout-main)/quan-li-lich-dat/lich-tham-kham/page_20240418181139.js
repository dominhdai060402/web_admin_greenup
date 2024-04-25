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
];

export default function Page() {
  useEffect(() => {
    for (let i = 0; i < 39; i++) {
      const userPet1 = {
        petId: faker.datatype.uuid(),
        petName: faker.name.firstName(),
        petType: "dog",
        petOld: faker.datatype.number({ min: 1, max: 15 }).toString(),
        petSex: faker.datatype.boolean() ? "male" : "female",
        staffId: "fe090a69-9d7f-4dad-a398-56556be0658e",
        petNote: "Khám định kỳ",
      };

      const userPet2 = {
        petId: faker.datatype.uuid(),
        petName: faker.name.firstName(),
        petType: "cat",
        petOld: faker.datatype.number({ min: 1, max: 15 }).toString(),
        petSex: faker.datatype.boolean() ? "male" : "female",
        staffId: "fe090a69-9d7f-4dad-a398-56556be0658e",
        petNote: "Khám định kỳ",
      };

      const booking = {
        id: faker.datatype.uuid(),
        bookingType: "kbBooking",
        bookingStatus: "pending",
        bookingDate: faker.date.future().toISOString().split("T")[0],
        bookingTime: "9:00 - 10:00",
        userName: faker.name.findName(),
        userNumber: faker.phone.phoneNumber(),
        userEmail: faker.internet.email(),
        userPets: [userPet1, userPet2],
      };

      data.push(booking);
      console.log(data);
    }
  }, []);
  return (
    <section className="section">
      <h1 className="section-heading">QUẢN LÝ LỊCH ĐẶT/LỊCH THĂM KHÁM</h1>
    </section>
  );
}
