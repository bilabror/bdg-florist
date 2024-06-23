import { useState } from "react";
import testImage from "../../../assets/image/blog/blog-1.png";

export default function Sidebar() {
  const [cardSidebar, setCardSidebar] = useState([
    {
      id: 1,
      heading: "Teknik Pembibitan",
      date: "27 Nopember 2021",
    },
    {
      id: 2,
      heading: "Pemilihan Media Tanam",
      date: "27 Nopember 2021",
    },
    {
      id: 3,
      heading: "Faktor Penyebab Tanam",
      date: "27 Nopember 2021",
    },
  ]);

  return (
    <section className="">
      <h1 className="text-xl font-bold border-b-4 border-black mb-5 pb-3 w-fit">
        Blog Terkait
      </h1>

      <div>
        {cardSidebar.map((e) => (
          <BlogCard key={e.id} sidebar={e} />
        ))}
      </div>
    </section>
  );
}

function BlogCard({ sidebar }) {
  const { heading, date } = sidebar;


  return (
    <div className="w-72 my-10">
      <img
        src={testImage}
        alt=""
        className="rounded-2xl"
      />
      <h5 className="text-xl font-bold my-5">{heading}</h5>
      <span>{date}</span>
    </div>
  );
}
