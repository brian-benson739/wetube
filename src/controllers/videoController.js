let videos = [
  {
    title: "First video",
    rating: 5,
    Comments: 2,
    createdAt: "2 minutes ago",
    views: 1,
    id: 1
  },
  {
    title: "Second video",
    rating: 5,
    Comments: "100M",
    createdAt: "2 minutes ago",
    views: "592M",
    id: 2
  },
  {
    title: "Third video",
    rating: 5,
    Comments: "102K",
    createdAt: "2 minutes ago",
    views: "59K",
    id: 3
  }
];

export const trending = (req, res) => {
  res.render("home", { pageTitle: "Home", videos });
};
export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("watch", { pageTitle: `Watching: ${video.title}`, video });
};

export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("edit", { pageTitle: `Editing: ${video.title}`, video });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};
