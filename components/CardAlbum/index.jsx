import styles from "./styles.module.scss";
import Image from "next/image";

import Link from "next/link";

export default function CardAlbum({ allData, inputSearchValue }) {
  return (
    <div className={styles.all}>
      {allData &&
        allData
          .filter((el) =>
            el.users.includes(parseInt(localStorage.getItem("userId")))
          )
          .filter(
            (el) =>
              el?.title
                .toLowerCase()
                .trim()
                .includes(inputSearchValue.toLowerCase().trim()) ||
              el?.genres
                .toString()
                .toLowerCase()
                .trim()
                .includes(inputSearchValue.toLowerCase().trim()) ||
              el?.artist
                .toString()
                .toLowerCase()
                .trim()
                .includes(inputSearchValue.toLowerCase().trim())
          )

          .map((el) => (
            <div className={styles.CardAlbum} key={el.id}>
            <Link href={ el.iam === "album" ? `album/${el.id}` : `playlist/${el.id}`} key={el.id}>
              <a>
                <div className={styles.CardAlbum__container}>
                      <div className={styles.CardAlbum__container__img}>
                        <Image
                          src={el?.cover}
                          alt={el?.title}
                          width={200}
                          height={200}
                          layout="fill"
                        />
                      </div>
                      <div className={styles.CardAlbum__container__info}>
                        <h2>{el?.title}</h2>
                        <p className={styles.artist}>{el?.artist}</p>
                      </div>
                </div>
              </a>
            </Link>
            </div>
          ))}
    </div>
  );
}
