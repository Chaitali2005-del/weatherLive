import React from "react";

const trendingNews = [
  { title: "Sorem Ipsum Dolor Sit Amet Ipsum, Consectetur", image: "/src/assets/img.png" },
  { title: "Sorem Ipsum Dolor Sit Amet Ipsum, Consectetur", image: "/src/assets/imgg.png" },
  { title: "Sorem Ipsum Dolor Sit Amet Ipsum, Consectetur", image: "/src/assets/imggg.png" },
  { title: "Sorem Ipsum Dolor Sit Amet Ipsum, Consectetur", image: "/src/assets/img5.png" },
];

const liveNews = [
  { title: "Sorem Ipsum Dolor Sit Amet Ipsum, Consectetur", image: "/src/assets/img6.png" },
  { title: "Sorem Ipsum Dolor Sit Amet Ipsum, Consectetur", image: "/src/assets/img7.png" },
  { title: "Sorem Ipsum Dolor Sit Amet Ipsum, Consectetur", image: "/src/assets/img8.png" },
];

export default function Article() {
  return (
    <div className="flex flex-col lg:flex-row px-4 sm:px-6 lg:px-10 py-8 max-w-7xl mx-auto gap-8">
      {/* Main Content */}
      <div className="w-full lg:w-2/3">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          Cold Weather Alert Issued As Temperatures Set To Plummet
        </h1>
        <p className="text-gray-800 text-base sm:text-lg mb-4">
          Sorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Nunc Amet
          Vulputate Libero Et Velit Interdum, Ac Aliquet Odio Mattis.
        </p>
        <img
          src="/src/assets/imgback.png"
          alt="featured"
          className="w-full h-auto shadow-md rounded-md mb-6"
        />

        <div className="text-gray-700 space-y-4 text-justify leading-relaxed">
          <p>
            Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
            Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
            lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
            elementum tellus.
          </p>
          <p>
            Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque
            quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo
            vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex
            eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus,
            porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna
            non ligula vestibulum eleifend. Nulla varius volutpat turpis sed
            lacinia. Nam eget mi in purus lobortis eleifend. Sed nec ante dictum
            sem condimentum ullamcorper quis venenatis nisi. Proin vitae
            facilisis nisi, ac posuere leo.
          </p>
          <p>
            Nam pulvinar blandit velit, id condimentum diam faucibus at. Aliquam
            lacus nisi, sollicitudin at nisi nec, fermentum congue felis.
            Quisque mauris dolor, fringilla sed tincidunt ac, finibus non odio.
            Sed vitae mauris nec ante pretium finibus. Donec nisl neque, pharetra
            ac elit eu, faucibus aliquam ligula. Nullam dictum, tellus tincidunt
            tempor laoreet, nibh elit sollicitudin felis, eget feugiat sapien
            diam nec nisl. Aenean gravida turpis nisi, consequat dictum risus
            dapibus a. Duis felis ante, varius in neque eu, tempor suscipit sem.
            Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar
            purus vitae justo pharetra consequat. Mauris id mi ut arcu feugiat
            maximus. Mauris consequat tellus id tempus aliquet.
          </p>
          <p>
            Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque
            quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo
            vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex
            eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus,
            porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna
            non ligula vestibulum eleifend. Nulla varius volutpat turpis sed
            lacinia. Nam eget mi in purus lobortis eleifend. Sed nec ante dictum
            sem condimentum ullamcorper quis venenatis nisi. Proin vitae
            facilisis nisi, ac posuere leo.
          </p>
        </div>
      </div>

      {/* Sidebar */}
      <aside className="w-full lg:w-1/3 space-y-8">
        {/* Trending News */}
        <div>
          <h2 className="text-lg sm:text-xl font-semibold mb-4">🔵 Trending News</h2>
          <div className="space-y-4">
            {trendingNews.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-1">
                  <p className="text-sm sm:text-base font-semibold text-black">
                    {item.title}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-700 mt-1">
                  Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                  </p>
                </div>
                <img
                  src={item.image}
                  alt="trending"
                  className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover rounded-md flex-shrink-0"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Live News */}
        <div>
          <h2 className="text-lg sm:text-xl font-semibold mb-4">🔵 Live News</h2>
          <div className="space-y-4">
            {liveNews.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-1">
                  <p className="text-sm sm:text-base font-semibold text-black">
                    {item.title}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-700 mt-1">
                    Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                  </p>
                </div>
                <img
                  src={item.image}
                  alt="live"
                  className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover rounded-md flex-shrink-0"
                />
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
