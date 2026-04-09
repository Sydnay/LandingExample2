import React from "react";

export default function ChemistryTutorLanding() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    phone: "",
    messenger: "",
    comment: "",
  });

  const openModal = () => {
    setIsModalOpen(true);
    setIsSubmitted(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsSubmitted(false);
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };
  const sectionTitleClass = "max-w-full text-3xl font-black leading-[1.02] tracking-[-0.035em] text-slate-950 sm:text-4xl lg:text-5xl xl:text-6xl";

  const features = [
    {
      title: "Подготовка к ОГЭ и ЕГЭ",
      text: "Пошаговая система, где каждая тема раскладывается по шагам, а экзаменационные задания перестают выглядеть пугающе.",
      badge: "Экзамены",
    },
    {
      title: "Повысить успеваемость в школе",
      text: "Помогаю закрыть пробелы, навести порядок в темах и научиться уверенно решать задания.",
      badge: "Школа",
    },
    {
      title: "Индивидуальные занятия",
      text: "Программа и темп подстраиваются под уровень ученика, чтобы материал усваивался спокойно и последовательно.",
      badge: "Персонально",
    },
  ];

  const prices = [
    {
      title: "Индивидуальное занятие",
      subtitle: "60 минут",
      price: "1 500 ₽",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1400&q=80",
      position: "center center",
    },
    {
      title: "Индивидуальное занятие Plus",
      subtitle: "90 минут",
      price: "2 100 ₽",
      image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?auto=format&fit=crop&w=1400&q=80",
      position: "center center",
    },
    {
      title: "Мини-группа",
      subtitle: "90 минут",
      price: "1 200 ₽",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80",
      position: "center center",
    },
  ];

  const reviews = [
    {
      author: "Алина, 10 класс",
      text: "Я впервые начала понимать химию, а не просто заучивать темы. На контрольных стало гораздо спокойнее.",
    },
    {
      author: "Мама ученика 9 класса",
      text: "Очень нравится подача материала: всё понятно, логично и без давления. У ребёнка появился интерес к предмету.",
    },
    {
      author: "Даниил, 11 класс",
      text: "Очень сильный разбор задач. Даже сложные темы объясняются так, что потом их можно решать самостоятельно.",
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7fbff] text-slate-900">
      <style>{`
        body { overflow-x: hidden; }
        .modal-scroll-hidden { overflow: hidden; }
        @keyframes floatOrb {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
        @keyframes slowSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .float-orb { animation: floatOrb 7s ease-in-out infinite; }
        .slow-spin { animation: slowSpin 18s linear infinite; }
      `}</style>

      <div className="relative isolate">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="float-orb absolute left-[-80px] top-[120px] h-[220px] w-[220px] rounded-full bg-cyan-200/45 blur-3xl" />
          <div className="float-orb absolute right-[-60px] top-[260px] h-[260px] w-[260px] rounded-full bg-emerald-200/40 blur-3xl" />
          <div className="slow-spin absolute right-[8%] top-[140px] hidden h-40 w-40 rounded-full border border-cyan-200/40 lg:block" />
          <div className="absolute left-[7%] top-[760px] text-7xl opacity-[0.08]">⚗️</div>
          <div className="absolute right-[8%] top-[1320px] text-7xl opacity-[0.08]">🧪</div>
        </div>

        <header className="mx-auto grid max-w-[1560px] grid-cols-[auto_1fr_auto] items-center gap-8 px-4 py-6 sm:px-5 lg:px-6 lg:py-7 2xl:max-w-[1720px]">
          <div className="min-w-0 self-center">
            <div className="text-[34px] font-black leading-[0.95] tracking-[-0.03em] text-slate-950 sm:text-[40px] lg:text-[46px]">
              Репетитор по химии
            </div>
          </div>

          <nav className="hidden items-center justify-center gap-10 self-center text-[18px] font-semibold text-slate-700 lg:flex xl:gap-12 xl:text-[19px]">
            <a href="#about" className="transition hover:text-slate-950">О занятиях</a>
            <a href="#services" className="transition hover:text-slate-950">Форматы</a>
            <a href="#prices" className="transition hover:text-slate-950">Цены</a>
            <a href="#reviews" className="transition hover:text-slate-950">Отзывы</a>
          </nav>

          <div className="self-center">
            <button
              onClick={openModal}
              className="min-h-[62px] rounded-full bg-slate-900 px-8 text-[17px] font-bold text-white shadow-xl shadow-slate-900/15 transition hover:-translate-y-0.5 sm:px-10 lg:min-h-[66px] lg:px-11 lg:text-[18px]"
            >
              Записаться
            </button>
          </div>
        </header>

        <section className="mx-auto grid max-w-[1560px] grid-cols-1 gap-10 px-4 pb-14 pt-4 sm:px-5 md:gap-12 lg:grid-cols-[minmax(0,1.03fr)_minmax(0,0.97fr)] lg:px-6 lg:pb-24 lg:pt-10 xl:gap-14 2xl:max-w-[1720px]">
          <div className="order-2 min-w-0 lg:order-1">

            <div className="mt-2 max-w-[980px] lg:mt-6">
              <h1 className="max-w-full text-4xl font-black leading-[0.94] tracking-[-0.05em] text-slate-950 sm:text-5xl md:text-6xl lg:text-[78px] xl:text-[92px]">
                Химия без стресса
                <span className="mt-2 block text-cyan-700">и с понятным объяснением</span>
              </h1>
            </div>

            <p className="mt-8 max-w-[760px] text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9 lg:text-[22px]">
              Индивидуальные занятия для школьников и студентов: подготовка к экзаменам, повышение успеваемости и разбор сложных тем спокойным человеческим языком.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <button
                onClick={openModal}
                className="min-h-[68px] rounded-full bg-slate-900 px-8 text-lg font-semibold text-white shadow-2xl shadow-slate-900/20 transition hover:-translate-y-0.5 sm:px-10"
              >
                Оставить заявку
              </button>
              <button className="min-h-[68px] rounded-full border border-slate-300 bg-white px-8 text-lg font-semibold text-slate-800 transition hover:-translate-y-0.5 sm:px-10">
                Смотреть прайс
              </button>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              <div className="flex min-h-[168px] flex-col items-center justify-center rounded-[2rem] border border-slate-200/70 bg-white/72 px-6 py-7 text-center shadow-lg shadow-slate-100 backdrop-blur-sm">
                <div className="text-[42px] font-black leading-none tracking-[-0.03em] text-slate-950">6 лет</div>
                <div className="mt-3 max-w-[180px] text-base leading-7 text-slate-600">преподавательской практики</div>
              </div>
              <div className="flex min-h-[168px] flex-col items-center justify-center rounded-[2rem] border border-slate-200/70 bg-white/72 px-6 py-7 text-center shadow-lg shadow-slate-100 backdrop-blur-sm">
                <div className="text-[42px] font-black leading-none tracking-[-0.03em] text-slate-950">100+</div>
                <div className="mt-3 max-w-[180px] text-base leading-7 text-slate-600">учеников прошли обучение</div>
              </div>
              <div className="flex min-h-[168px] flex-col items-center justify-center rounded-[2rem] border border-slate-200/70 bg-white/72 px-6 py-7 text-center shadow-lg shadow-slate-100 backdrop-blur-sm">
                <div className="text-[42px] font-black leading-none tracking-[-0.03em] text-slate-950">78+</div>
                <div className="mt-3 max-w-[180px] text-base leading-7 text-slate-600">средний балл учеников на ЕГЭ</div>
              </div>
            </div>
          </div>

          <div className="order-1 min-w-0 lg:order-2">
            <div className="relative mx-auto max-w-[760px] sm:max-w-[820px] xl:max-w-[860px]">
              <div className="mb-4 grid gap-4 sm:grid-cols-2 lg:absolute lg:-left-6 lg:top-10 lg:z-10 lg:mb-0 lg:max-w-[220px] lg:grid-cols-1">
                <div className="rounded-[2rem] border border-cyan-100/70 bg-white/80 p-5 shadow-xl shadow-cyan-100/30 backdrop-blur-sm">
                  <div className="text-sm uppercase tracking-[0.24em] text-slate-400">Формат</div>
                  <div className="mt-2 text-xl font-bold text-slate-900">Онлайн и офлайн</div>
                </div>
                <div className="rounded-[2rem] border border-emerald-100 bg-white/92 p-5 shadow-xl shadow-emerald-100/50 backdrop-blur-sm">
                  <div className="text-sm uppercase tracking-[0.24em] text-slate-400">Подход</div>
                  <div className="mt-2 text-xl font-bold text-slate-900">Спокойно и по шагам</div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/55 p-3 shadow-[0_40px_120px_-20px_rgba(8,47,73,0.18)] backdrop-blur-sm sm:p-4 lg:ml-8">
                <img
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=80"
                  alt="Преподаватель химии"
                  className="h-[460px] w-full rounded-[2rem] object-cover sm:h-[620px] lg:h-[620px] xl:h-[700px]"
                />

                <div className="absolute inset-x-4 bottom-3 rounded-[2rem] border border-white/60 bg-white/82 p-5 shadow-2xl backdrop-blur-md sm:inset-x-7 sm:bottom-7 sm:p-8">
                  <div className="text-[12px] uppercase tracking-[0.24em] text-slate-400 sm:text-sm">Преподаватель</div>
                  <div className="mt-3 text-[28px] font-black leading-tight text-slate-950 sm:text-3xl">Екатерина Морозова</div>
                  <p className="mt-3 max-w-2xl text-[15px] leading-7 text-slate-600 sm:mt-4 sm:text-lg sm:leading-8">
                    Помогает школьникам и студентам понять химию через систему, визуальные ассоциации и нормальное объяснение без сухого академического перегруза.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-[1560px] px-4 py-8 sm:px-5 md:px-6 lg:px-6 lg:py-14 2xl:max-w-[1720px]">
          <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] xl:gap-8">
            <div className="min-w-0 overflow-hidden rounded-[2.5rem] border border-slate-200/70 bg-white shadow-xl shadow-slate-100">
              <img
                src="https://images.unsplash.com/photo-1532634993-15f421e42ec0?auto=format&fit=crop&w=1400&q=80"
                alt="Лабораторная эстетика"
                className="h-[320px] w-full object-cover sm:h-[420px] lg:h-full"
              />
            </div>

            <div className="min-w-0 rounded-[2.5rem] bg-slate-950 p-8 text-white shadow-[0_30px_80px_-20px_rgba(15,23,42,0.5)] sm:p-10 lg:p-12 xl:p-14">
              <div>
                <h2 className="max-w-full text-3xl font-black leading-[1.02] tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl xl:text-6xl">
                  О занятиях
                </h2>
              </div>
              <p className="mt-6 text-lg leading-9 text-white/75 sm:text-xl">
                Каждая тема разбирается через логику, примеры и практику. Не просто формулы ради формул, а понимание того, как химия работает и как применять это в задачах.
              </p>
              <p className="mt-5 text-lg leading-9 text-white/75 sm:text-xl">
                Такой формат помогает убрать страх перед предметом, выстроить базу и начать чувствовать себя увереннее на уроках, контрольных и экзаменах.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-[1560px] px-4 py-10 sm:px-5 md:px-6 lg:px-6 lg:py-16 2xl:max-w-[1720px]">
          <div className="mb-8 max-w-5xl">
            <div>
              <h2 className={sectionTitleClass}>
                Виды занятий
              </h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {features.map((item) => (
              <div
                key={item.title}
                className="flex min-w-0 flex-col rounded-[2.5rem] border border-slate-200/70 bg-white p-7 shadow-xl shadow-slate-100 sm:p-8 lg:p-10"
              >
                <div className="inline-flex w-fit rounded-full bg-cyan-50 px-4 py-2 text-sm font-bold text-cyan-700">
                  {item.badge}
                </div>
                <h3 className="mt-6 text-2xl font-black leading-tight text-slate-950 sm:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="prices" className="mx-auto max-w-[1560px] px-4 py-10 sm:px-5 md:px-6 lg:px-6 lg:py-16 2xl:max-w-[1720px]">
          <div className="rounded-[2.8rem] bg-[linear-gradient(135deg,#052c3b_0%,#0f172a_100%)] p-7 text-white shadow-[0_35px_90px_-25px_rgba(3,30,45,0.5)] sm:p-8 lg:p-12 xl:p-14">
            <div className="flex flex-col gap-8 xl:flex-row xl:items-end xl:justify-between">
              <div className="max-w-3xl">
                <div>
                  <h2 className="max-w-full text-3xl font-black leading-[1.02] tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
                    Стоимость <span className="text-cyan-300">занятий</span>
                  </h2>
                </div>
                <p className="mt-5 text-lg leading-9 text-white/70 sm:text-xl">
                  Без спрятанных условий и лишней путаницы. Формат занятий подбирается под цель ученика и его текущий уровень.
                </p>
              </div>

              <button
                onClick={openModal}
                className="min-h-[64px] w-full rounded-full bg-white px-8 text-lg font-bold text-slate-950 transition hover:-translate-y-0.5 sm:w-auto sm:px-10"
              >
                Узнать свободные места
              </button>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {prices.map((item) => (
                <div
                  key={item.title}
                  className="group relative isolate overflow-hidden rounded-[2.2rem] border border-white/10 bg-slate-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-[1.03]"
                    style={{
                      backgroundImage: `url(${item.image})`,
                      backgroundPosition: item.position,
                    }}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,18,33,0.22)_0%,rgba(7,18,33,0.48)_42%,rgba(7,18,33,0.82)_100%)]" />
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(56,189,248,0.07),rgba(15,23,42,0.18))]" />

                  <div className="relative z-10 flex min-h-[210px] flex-col justify-between p-7 sm:p-8">
                    <div>
                      <div className="text-base uppercase tracking-[0.2em] text-white/72">{item.subtitle}</div>
                      <div className="mt-4 max-w-[290px] text-2xl font-black leading-tight text-white sm:text-3xl">
                        {item.title}
                      </div>
                    </div>

                    <div className="mt-8 text-4xl font-black text-cyan-300 drop-shadow-[0_8px_22px_rgba(34,211,238,0.22)] sm:text-5xl">
                      {item.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="mx-auto max-w-[1560px] px-4 py-10 sm:px-5 md:px-6 lg:px-6 lg:py-16 2xl:max-w-[1720px]">
          <div className="mb-8 max-w-5xl">
            <div className="mt-4">
              <h2 className={sectionTitleClass}>
                Отзывы <span className="text-cyan-700">учеников и родителей</span>
              </h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {reviews.map((review) => (
              <div key={review.author} className="flex h-full flex-col rounded-[2.5rem] border border-slate-200/70 bg-white p-7 shadow-xl shadow-slate-100 sm:p-8 lg:p-10">
                <div className="text-2xl">★★★★★</div>
                <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">“{review.text}”</p>
                <div className="mt-8 text-lg font-black text-slate-950">{review.author}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1560px] px-4 py-12 sm:px-5 md:px-6 lg:px-6 lg:py-20 2xl:max-w-[1720px]">
          <div className="overflow-hidden rounded-[3rem] border border-slate-200 bg-white px-7 py-10 shadow-[0_30px_80px_-25px_rgba(15,23,42,0.18)] sm:px-8 sm:py-12 lg:px-10 lg:py-16 xl:px-12">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:items-center xl:gap-12">
              <div className="min-w-0 max-w-[760px]">
                <h2 className="max-w-[760px] text-[38px] font-black leading-[0.95] tracking-[-0.04em] text-slate-950 sm:text-[46px] lg:text-[58px] xl:text-[64px]">
                  Запишитесь на
                  <span className="block text-cyan-700">первое занятие</span>
                </h2>
                <p className="mt-6 max-w-[620px] text-[17px] leading-8 text-slate-600 sm:text-lg sm:leading-9 lg:text-[20px]">
                  Разберём текущий уровень, определим слабые места и составим понятный маршрут занятий без хаоса, перегруза и лишней воды.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:max-w-[380px] lg:ml-auto lg:w-full">
                <button
                  onClick={openModal}
                  className="min-h-[72px] rounded-full bg-slate-900 px-8 text-lg font-bold text-white shadow-2xl shadow-slate-900/15 transition hover:-translate-y-0.5 lg:min-h-[76px] lg:text-[19px]"
                >
                  Записаться на урок
                </button>
                <button
                  onClick={openModal}
                  className="min-h-[72px] rounded-full border border-slate-300 bg-white px-8 text-lg font-bold text-slate-900 transition hover:-translate-y-0.5 lg:min-h-[76px] lg:text-[19px]"
                >
                  Написать в мессенджер
                </button>
              </div>
            </div>
          </div>
        </section>

        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <div
              className="absolute inset-0 bg-slate-950/55 backdrop-blur-[3px]"
              onClick={closeModal}
            />

            <div className="relative z-10 w-full max-w-[680px] overflow-hidden rounded-[2.25rem] border border-white/60 bg-white shadow-[0_40px_120px_-30px_rgba(15,23,42,0.35)]">
              <button
                onClick={closeModal}
                className="absolute right-5 top-5 inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-2xl text-slate-500 transition hover:text-slate-900"
                aria-label="Закрыть окно"
              >
                ×
              </button>

              {!isSubmitted ? (
                <div className="p-7 sm:p-8 lg:p-10">
                  <div className="max-w-[520px] pr-12">
                    <div className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-700">
                      Заявка на занятие
                    </div>
                    <h3 className="mt-4 text-3xl font-black leading-tight tracking-[-0.03em] text-slate-950 sm:text-4xl">
                      Оставьте контакты,
                      <span className="block text-cyan-700">и мы свяжемся с вами</span>
                    </h3>
                    <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
                      Заполните форму ниже. Специалист скоро свяжется с вами, чтобы уточнить формат занятий и удобное время.
                    </p>
                  </div>

                  <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <label className="block">
                        <span className="mb-2 block text-sm font-semibold text-slate-700">Ваше имя</span>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          placeholder="Введите имя"
                          className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 text-base text-slate-900 outline-none transition focus:border-cyan-400 focus:bg-white"
                          required
                        />
                      </label>

                      <label className="block">
                        <span className="mb-2 block text-sm font-semibold text-slate-700">Телефон</span>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          placeholder="+7 (999) 123-45-67"
                          className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 text-base text-slate-900 outline-none transition focus:border-cyan-400 focus:bg-white"
                          required
                        />
                      </label>
                    </div>

                    <label className="block">
                      <span className="mb-2 block text-sm font-semibold text-slate-700">Мессенджер для связи</span>
                      <input
                        type="text"
                        value={formData.messenger}
                        onChange={(e) => handleChange("messenger", e.target.value)}
                        placeholder="Telegram / WhatsApp"
                        className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 text-base text-slate-900 outline-none transition focus:border-cyan-400 focus:bg-white"
                      />
                    </label>

                    <label className="block">
                      <span className="mb-2 block text-sm font-semibold text-slate-700">Комментарий</span>
                      <textarea
                        value={formData.comment}
                        onChange={(e) => handleChange("comment", e.target.value)}
                        placeholder="Например: цель занятий, класс, удобное время"
                        rows={4}
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-base text-slate-900 outline-none transition focus:border-cyan-400 focus:bg-white"
                      />
                    </label>

                    <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                      <button
                        type="submit"
                        className="min-h-[60px] rounded-full bg-slate-900 px-8 text-base font-bold text-white shadow-xl shadow-slate-900/15 transition hover:-translate-y-0.5 sm:text-lg"
                      >
                        Отправить
                      </button>
                      <button
                        type="button"
                        onClick={closeModal}
                        className="min-h-[60px] rounded-full border border-slate-300 bg-white px-8 text-base font-bold text-slate-900 transition hover:-translate-y-0.5 sm:text-lg"
                      >
                        Отмена
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="p-7 text-center sm:p-8 lg:p-12">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-cyan-50 text-4xl text-cyan-700 shadow-inner shadow-cyan-100">
                    ✓
                  </div>
                  <h3 className="mt-6 text-3xl font-black leading-tight tracking-[-0.03em] text-slate-950 sm:text-4xl">
                    Заявка отправлена
                  </h3>
                  <p className="mx-auto mt-4 max-w-[460px] text-base leading-8 text-slate-600 sm:text-lg">
                    Скоро с вами свяжется специалист, чтобы уточнить детали и подобрать удобный формат занятий.
                  </p>
                  <button
                    onClick={closeModal}
                    className="mt-8 min-h-[60px] rounded-full bg-slate-900 px-8 text-base font-bold text-white shadow-xl shadow-slate-900/15 transition hover:-translate-y-0.5 sm:text-lg"
                  >
                    Закрыть
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
