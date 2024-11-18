
import React from "react";
import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import '../App.css'
import imgurl from '../components/imgurl/imgurl'


export default function Main_page() {
  return (

    <section className="min-h-screen flex items-stretch text-white ">
      <div className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center">
        <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
        
        <div className="w-full px-24 z-10">
          {/* <h1 className="text-5xl font-bold text-left tracking-wide">Inicio</h1> */}
          <p className="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none">
            .  .  .    Inicio de pagina principal  .   .   .  
          </p>
          {/* <p className="text-3xl my-4">Capture your personal memory in unique way, anywhere.</p> */}
        </div>

      </div>
    </section>
  );
}
