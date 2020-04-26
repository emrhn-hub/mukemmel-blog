export const getPosts = () => {
  return [
    {
      title: "İlk Yazım",
      slug: "ilk-yazim",
      details: require("./posts/ilk-yazim.md").default,
      img: "https://images.pexels.com/photos/2263679/pexels-photo-2263679.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      tag: ["tag1", "tag2"],
      date: "Apr 17, 2020",
      desc: "Ben Emirhan. Lise 3. sınıfa gitmekteyim. Müzik dinlemekten, film-belgesel-dizi izlemekten, yazılım ile uğraşmaktan zevk alan birisiyim. Bilgisayar'ı oldum olası merak ederdim. Ben 5 ve 6. sınıftayken iyi kötü bir bilgisayarımız da vardı. Bilgisayarın kaldırabildiği oyunları indirip"
    },

  ];
};
