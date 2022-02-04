import React, {useState, useEffect} from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [realAmount, setRealAmount] = useState(0);
  const [arsAmount, setArsAmount] = useState(0);

  const exchangeReal = () => {
    const real = realAmount;  
    const realToUsd = real / 5.28;
    const usdToArs = realToUsd * 183; //masomenos
    setArsAmount(usdToArs.toFixed(2));
  }


  useEffect(() => {
    exchangeReal();
  }, [realAmount, arsAmount])



  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.ex_container}>
          <p>BRL to ARS</p>
          <input placeholder='Real Brasilero' type="text" value={realAmount} onChange={(e) => setRealAmount(e.target.value)} />
          <input placeholder='Peso Argentino' type="text" value={arsAmount} onChange={(e) => setArsAmount(e.target.value)} />
        </div>
      </main>

    </div>
  )
}
