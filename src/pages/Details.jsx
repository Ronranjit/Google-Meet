import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
const Details = () => {
  const { users, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  return (
    <section className="capitalize">
      <section className=" ">
        {users.map((user) => {
          return (
            <section className="font-primary">
              <div class="transition-all p-3 mb-3 duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
                <div className="text-center">
                  <h1 className="font-semibold mb-3">{user.title}</h1>
                  <p className="mb-3">{user.dateList}</p>
                  <p className="text-gray-500 mb-6">{user.description}</p>
                </div>
                <div className="relative inline-flex  group w-full">
                  <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                  <button
                    type="submit "
                    className="spacing relative capitalize w-full inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white transition-all duration-200 bg-gray-900 font-pj rounded-md focus:outline-none  "
                  >
                    <a href="https://meet.google.com/" target="_blank">
                      join meeting
                    </a>
                  </button>
                </div>
              </div>
            </section>
          );
        })}
      </section>
    </section>
  );
};

export default Details;
