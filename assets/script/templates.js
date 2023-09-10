const testimonials = [
  {
    rating: "⭐️⭐️⭐️⭐️⭐️",
    title: "Lorem ipsum dolor sit amet",
    content:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    avatar: "http://via.placeholder.com/400x400",
  },
  {
    rating: "⭐️⭐️⭐️⭐️⭐️",
    title: "Lorem ipsum dolor sit amet",
    content:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    avatar: "http://via.placeholder.com/400x400",
  },
  {
    rating: "⭐️⭐️⭐️⭐️⭐️",
    title: "Lorem ipsum dolor sit amet",
    content:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    avatar: "http://via.placeholder.com/400x400",
  },
  {
    rating: "⭐️⭐️⭐️⭐️⭐️",
    title: "Lorem ipsum dolor sit amet",
    content:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    avatar: "http://via.placeholder.com/400x400",
  },
  {
    rating: "⭐️⭐️⭐️⭐️⭐️",
    title: "Lorem ipsum dolor sit amet",
    content:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    avatar: "http://via.placeholder.com/400x400",
  },
];
const whyus = [
  {
    icon: "./assets/icons/icon_complete.svg",
    title: "Mobil Lengkap",
    content:
      "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat",
  },
  {
    icon: "./assets/icons/icon_price.svg",
    title: "Harga Murah",
    content:
      "Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain",
  },
  {
    icon: "./assets/icons/icon_24hrs.svg",
    title: "Layanan 24 Jam",
    content:
      "Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu",
  },
  {
    icon: "./assets/icons/icon_professional.svg",
    title: "Sopir  Profesional",
    content:
      "Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu",
  },
];
const faq = [
  {
    label: "Apa saja syarat yang dibutuhkan?",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
  },
  {
    label: "Berapa hari minimal sewa mobil lepas kunci?",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
  },
  {
    label: "Berapa hari sebelumnya sabaiknya booking sewa mobil?",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
  },
  {
    label: "Apakah Ada biaya antar-jemput?",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
  },
  {
    label: "Bagaimana jika terjadi kecelakaan",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
  },
];
function generateTestimonial(section) {
  testimonials.forEach((testimonial) => {
    const card = document.createElement("div");
    card.className = "col-11 col-sm-11 col-md-6 col-lg-4 mb-3 mb-sm-0 px-3";
    card.innerHTML = `
    <div class="card py-2" style="background: #F1F3FF">
      <div class="card-body d-flex flex-column flex-lg-row justify-content-between align-items-center px-2 pl-3 pl-lg-4">
        <div class="px-3">
          <img src="${
            testimonial.avatar
          }" alt="avatar" width="80" style="border-radius: 50%;"/>
        </div>
        <div >
          <h5 class="card-title">${testimonial.rating}</h5>
          <p class="card-text" style="white-space: wrap;">${
            testimonial.content
          }</p>
          <p class="card-text" style="white-space: wrap; font-weight: bold;">${`January 01 1990`}</p>
        </div>
      </div>
    </div>
  `;
    section.appendChild(card);
  });
}

function generateWhyus(section) {
  whyus.forEach((data) => {
    const card = document.createElement("div");
    card.className = "card mb-3 mb-lg-0 col-12 col-lg-3 mx-2";
    card.innerHTML = `
      <div class="card-body">
        <img src="${data.icon}" alt="icons" />
        <h5 class="mt-2">${data.title}</h5>
        <p class="mt-3">
       ${data.content}
        </p>
      </div>
  `;
    section.appendChild(card);
  });
}
function generateFaq(section) {
  faq.forEach((data) => {
    const randomId = Math.floor(Math.random() * 100);
    const card = document.createElement("div");
    card.className = "accordion-item border border-light-subtle mb-3";
    card.innerHTML = `
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
        data-bs-target="#${randomId}" aria-expanded="false" aria-controls="flush-collapseOne">
       ${data.label}
      </button>
    </h2>
    <div id="${randomId}" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        ${data.content}
      </div>
    </div>
  `;
    section.appendChild(card);
  });
}

generateTestimonial(document.querySelector("#card-testimonial"));
generateWhyus(document.querySelector("#card-whyus"));

generateFaq(document.querySelector("#card-accordion"));
