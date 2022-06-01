//Import Images
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
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "Metalldesign",
      mainImg: metall,
      url: "/work/metall-design",
      secondaryImg: metall2,
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "Die Hexe",
      mainImg: hexe,
      url: "/work/the-hexe",
      secondaryImg: hexe2,
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
  ];
};
