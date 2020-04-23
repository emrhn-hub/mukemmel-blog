export const getPosts = () => {
  return [
    {
      title: "İlk Yazım",
      slug: "ilk-yazim",
      details: require("./posts/ilk-yazim.md").default,
      img:"https://images.pexels.com/photos/2263679/pexels-photo-2263679.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      tag:"history",
      date: "Apr 17, 2020",
      desc: "merhabalar flan filna"
    },
   
  ];
};
