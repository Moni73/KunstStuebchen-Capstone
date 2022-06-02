import light from "./img/lampeorange.jpeg";
import hexe from "./img/hexe.jpeg";
import light2 from "./img/innenansicht.jpg";
import hexe2 from "./img/hexe2.jpeg";
import metall from "./img/metall.jpeg";
import metall2 from "./img/metall2.jpeg";

export const MovieState = () => {
  return [
    {
      title: "Licht",
      mainImg: light,
      secondaryImg: light2,
      url: "/work/the-light",
      awards: [
        {
          title: "Licht",
          description: "“Lass Dich einfangen von der Magie des Lichts”",
        },
      ],
    },
    {
      title: "Holz u. Stein",
      mainImg: metall,
      url: "/work/metall-design",
      secondaryImg: metall2,
      awards: [
        {
          title: "Der Drache",
          description:
            "“Hier wurden 3 Techniken miteinander vereint: Holz, Stein und Metall”",
        },
      ],
    },
    {
      title: "Metalldesign",
      mainImg: hexe,
      url: "/work/the-hexe",
      secondaryImg: hexe2,
      awards: [
        {
          title: "Die Hexe",
          description: "“Ein Einzelanfertigung”",
        },
      ],
    },
  ];
};
