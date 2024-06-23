import Template from "../Templates/index.jsx";

import Sidebar from "./sidebar/Sidebar";
import imageBlog from "../../assets/image/blog/blog-5.png";

export default function Blog() {
  return (
    <Template>
      <section className="mx-5">
        <div>
          <div className="text-start">
            <h1 className="text-3xl font-bold ">
              Hati-hati Memilih Waktu Menyiram Tanaman
            </h1>
            <span className="block my-3">27 Nopember 2021</span>

            <div className="flex gap-40">
              <div className="w-8/12">
                <div className="mb-14">
                  <img src={imageBlog} className="rounded w-full" />
                </div>

                <div id="text" className="text-start">
                  <div className="mb-8">
                    Waktu terbaik untuk menyiram tanaman adalah pagi hari,
                    karena akan memberi tanaman waktu untuk mengering sebelum
                    malam hari. Membiarkan air diam di tanaman semalaman bisa
                    memicu pertumbuhan jamur. Penyiraman di saat yang tepat dan
                    dengan menggunakan metode yang tepat akan menjaga tanaman
                    Anda tetap sehat.
                  </div>

                  <span className="block font-bold mb-8">
                    Memilih Waktu yang Tepat
                  </span>

                  <div className="mb-8">
                    Jika memungkinkan, siram tanaman di pagi hari. Pagi hari
                    adalah waktu terbaik untuk menyiram tanaman karena cocok
                    dengan siklus pertumbuhan alami tanaman. Tanaman siap untuk
                    mengonsumsi air di awal pagi hari, ketika matahari sudah
                    terbit namun belum terlalu tinggi. Di siang hari, tanaman
                    sebaiknya disiram sebelum sinar matahari terasa terlalu
                    panas. Tanaman yang terhidrasi akan lebih bisa bertahan
                    dalam menghadapi panas yang ekstrem.
                  </div>
                  <div>
                    Jika Anda menunggu hingga siang atau sore hari, ketika cuaca
                    sedang sangat panas, air justru bisa membakar tanaman. Air
                    yang panas karena terkena sinar matahari akan terlalu panas
                    bagi batang dan daun yang rapuh, serta akan menimbulkan
                    kerusakan pada tanaman tersebut.
                  </div>
                  <div>
                    Coba untuk menyiram tanaman sebelum jam 10 pagi. Ini untuk
                    memastikan air bisa terserap ke dalam tanah dan sedikit
                    mengering sebelum sinar matahari terasa terlalu panas.
                  </div>
                  <div className="mb-8">
                    Jika pagi hari tidak memungkinkan, siram tanaman di sore
                    hari. Penyiraman di pagi hari mungkin akan sulit dilakukan
                    ketika ada segudang hal lainnya yang juga harus dilakukan.
                    Jika Anda tidak bisa menyiram di pagi hari, tunggu hingga
                    sore hari, saat sinar matahari sudah terasa tidak terlalu
                    panas. Dengan begitu, tanaman tidak akan terbakar dan air
                    masih bisa diserap sebelum malam datang.
                  </div>
                  <div className="">
                    Jika Anda menunggu hingga siang hari, siram tanaman setelah
                    jam 4 sore. Jika penyiraman dilakukan sebelum jam 4 sore,
                    sinar matahari mungkin akan terlalu panas dan bisa membakar
                    tanaman Anda.
                  </div>
                  <div className="">
                    Jika Anda harus menyiram di siang hari, lakukan hanya
                    sesekali dan jangan buat jadi kebiasaan yang dilakukan
                    setiap hari.
                  </div>
                  <div className="mb-8">
                    Jangan menyiram tanaman pada malam hari. Jika tanaman
                    disiram pada malam hari, air tidak akan menguap serta akan
                    diam di daun dan batang tanaman. Tanpa bantuan matahari,
                    tanahnya mungkin akan penuh dengan air dan air tidak akan
                    terserap dengan baik. Hal ini merugikan tanaman karena akan
                    memicu pertumbuhan jamur di sekitar akar, batang dan daun.
                  </div>
                  <div>
                    Siram tanaman di malam hari hanya jika terpaksa, yaitu
                    ketika tanaman Anda sangat membutuhkan air dan Anda tidak
                    bisa menunggu sampai pagi hari.
                  </div>
                  <div className="mb-8">
                    Jika Anda menyiram di malam hari, gunakan lebih sedikit air
                    agar tanahnya tidak penuh dengan air.
                  </div>
                  <div className="flex flex-col">
                    <span>Sumber:</span>
                    https://disperkimta.bulelengkab.go.id/informasi/detail/artikel/cara-memilih-waktu-terbaik-untuk-menyiram-tanaman-70
                  </div>
                </div>
              </div>

              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </Template>
  );
}
