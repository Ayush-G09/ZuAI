"use client";
import { Label } from "@/components/ui/label";
import { faRocket, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import useFileStore from "../store/store";

function Notifications() {
  const { cards, removeCard } = useFileStore();

  return (
    <div className="w-screen h-screen fixed pointer-events-none z-20 pt-8 flex flex-col items-center gap-3">
      {cards.map((card) => (
        <div
          key={card.id}
          className="flex p-3 rounded-xl bg-white border gap-5 pointer-events-auto shadow-allSide md:min-w-[500px] transition-all duration-300 ease-in-out"
        >
          <FontAwesomeIcon
            icon={faRocket}
            className={`h-4 w-4 ${
              card.type === "success" ? "text-green-500" : "text-red-500"
            }`}
          />
          <div className="flex flex-col gap-2">
            <Label>{card.type === "success" ? "Heads up!" : "Error"}</Label>
            <Label>{card.msg}</Label>
          </div>
          <div
            onClick={() => removeCard(card.id)}
            className="h-full flex items-center cursor-pointer ml-auto"
          >
            <FontAwesomeIcon icon={faX} className="h-4 w-4" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Notifications;
