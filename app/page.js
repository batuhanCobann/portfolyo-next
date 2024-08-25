"use client"
import Image from "next/image";
import styles from "./page.module.css";
import White from "./components/White";
import Green from "./components/Green";
import { useEffect } from "react";
import Swal from "sweetalert2";

export default function Home() {

  useEffect(() => {
    Swal.fire({
      title: "MERHABA",
      text: "Bu web sitesi şuan kapsamlı bir degişim aşamasında CV için lütfen sayfanın sağ üst köşede bulunan cv aç butonuna tıklayınız !",
      icon: "warning",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Teşekkürler"
    })
  }, []);


  

  return (
       <div className="big-conteiner">
        
        <Green />

        <White />
       </div>
  );
}
