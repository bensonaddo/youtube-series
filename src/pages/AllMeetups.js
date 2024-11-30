const Dummy_Data = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2b/Meetup_Logo.png",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2b/Meetup_Logo.png",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a second, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m3",
    title: "This is a third meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2b/Meetup_Logo.png",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a third, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m4",
    title: "This is a fourth meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2b/Meetup_Logo.png",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a fourth, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m5",
    title: "This is a fifth meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2b/Meetup_Logo.png",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a fifth, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m6",
    title: "This is a sixth meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2b/Meetup_Logo.png",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a sixth, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m7",
    title: "This is a seventh meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2b/Meetup_Logo.png",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a seventh, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m8",
    title: "This is a eighth meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2b/Meetup_Logo.png",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a eighth, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m9",
    title: "This is a ninth meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2b/Meetup_Logo.png",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a ninth, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m10",
    title: "This is a tenth meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2b/Meetup_Logo.png",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a tenth, amazing meetup which you definitely should not miss. It will be a lot of fun !",
  },
];

function AllMeetupsPage() {
  return (
    <>
      <h1>All Meetups Page</h1>
      <ul>
        {Dummy_Data.map((meetup) => (
          <li key={meetup.id}>{meetup.title}</li>
        ))}
      </ul>
    </>
  );
}

export default AllMeetupsPage;
