import MeetupList from "../components/meetups/MeetupList";

const Dummy_Data = [
  {
    id: "m1",
    title: "This is a first meetup",
    image: "https://unsplash.com/photos/fBYb2zqZRAQ/download?force=true",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image: "https://unsplash.com/photos/FrYKObAq92U/download?force=true",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a second, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m3",
    title: "This is a third meetup",
    image:
      "https://unsplash.com/photos/vsZAIJqQqdo/download?ixid=M3wxMjA3fDF8MXxhbGx8MXx8fHx8fHx8MTczMjkzNTYzMnw&force=true&w=640",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a third, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m4",
    title: "This is a fourth meetup",
    image:
      "https://unsplash.com/photos/xpQ4GNj3shc/download?ixid=M3wxMjA3fDB8MXxhbGx8OXx8fHx8fHx8MTczMjkzNTYzMnw&force=true",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a fourth, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m5",
    title: "This is a fifth meetup",
    image:
      "https://unsplash.com/photos/Uq8ruVURhZI/download?force=truehttps://unsplash.com/photos/Uq8ruVURhZI/download?force=true",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a fifth, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m6",
    title: "This is a sixth meetup",
    image: "https://unsplash.com/photos/k71oaXUoQnQ/download?force=true",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a sixth, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m7",
    title: "This is a seventh meetup",
    image: "https://unsplash.com/photos/BwV1wdf0iW8/download?force=true",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a seventh, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m8",
    title: "This is a eighth meetup",
    image: "https://unsplash.com/photos/ogVQY_h07fg/download?force=true",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a eighth, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m9",
    title: "This is a ninth meetup",
    image: "https://unsplash.com/photos/t8OfFJJBKh8/download?force=true",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a ninth, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m10",
    title: "This is a tenth meetup",
    image: "https://unsplash.com/photos/Ch32blBKXE8/download?force=true",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a tenth, amazing meetup which you definitely should not miss. It will be a lot of fun !",
  },
];

function AllMeetupsPage() {
  return (
    <>
      <h1>All Meetups Page</h1>
      <MeetupList meetups={Dummy_Data} />
    </>
  );
}

export default AllMeetupsPage;
