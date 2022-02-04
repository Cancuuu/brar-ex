import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [realAmount, setRealAmount] = useState(0);
  const [arsAmount, setArsAmount] = useState(0);

  const exchangeReal = () => {
    const real = realAmount;
    const realToUsd = real / 5.28;
    const usdToArs = realToUsd * 183; //masomenos
    setArsAmount(usdToArs.toFixed(2));
  };

  useEffect(() => {
    exchangeReal();
  }, [realAmount, arsAmount]);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div>
          <p className={styles.title}>BRL to ARS</p>
          <div className={styles.input_container}>
            <label className={styles.label}>🇧🇷</label>
            <input
              className={styles.input}  
              placeholder="Real Brasilero"
              type="number"
              onChange={(e) => setRealAmount(e.target.value)}
            />
          </div>
          <div className={styles.input_container}>
            <label className={styles.label}>🇦🇷</label>
            <input
            className={styles.input}
            placeholder="Peso Argentino"
            type="number"
            value={arsAmount}
            onChange={(e) => setArsAmount(e.target.value)}
          />
          </div>
        </div>
      </main>
    </div>
  );
}
