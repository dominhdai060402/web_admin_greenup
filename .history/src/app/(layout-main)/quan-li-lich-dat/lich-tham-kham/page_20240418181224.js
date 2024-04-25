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
  useEffect(() => {}, []);
  return (
    <section className="section">
      <h1 className="section-heading">QUẢN LÝ LỊCH ĐẶT/LỊCH THĂM KHÁM</h1>
    </section>
  );
}
