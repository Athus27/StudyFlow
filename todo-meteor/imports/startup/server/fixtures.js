import { LinksCollection } from "../../api/links/links.collection";

const defaultLinks = [
  {
    title: "Do the Tutorial",
    url: "https://docs.meteor.com/tutorials/react/",
  },
  {
    title: "Follow the Guide",
    url: "https://docs.meteor.com/tutorials/application-structure/",
  },
  {
    title: "Read the Docs",
    url: "https://docs.meteor.com",
  },
  {
    title: "Discussions",
    url: "https://forums.meteor.com",
  },
  {
    title: "Join us on Discord",
    url: "https://discord.gg/6mS3wHNg",
  },
  {
    title: "Deploying in Galaxy",
    url: "https://www.meteor.com/hosting",
  },
];

async function insertLink({ title, url }) {
  await LinksCollection.insertAsync({ title, url, createdAt: new Date() });
}

export async function seedLinks() {
  if ((await LinksCollection.find().countAsync()) > 0) {
    return;
  }

  await Promise.all(defaultLinks.map(insertLink));
}
