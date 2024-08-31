import React from "react";
import styles from "./ModalAnimadoFull.module.css";

export default function App() {
  const openModal = () => {
    document.querySelector("dialog").showModal();
  };

  return (
    <>
      <div>
        <dialog className={styles.dialog}>
          <p>Modal</p>
          <form method="dialog">
            <button>OK</button>
          </form>
        </dialog>

        <button id="button" onClick={openModal}>
          Open Modal
        </button>
      </div>
    </>
  );
}
