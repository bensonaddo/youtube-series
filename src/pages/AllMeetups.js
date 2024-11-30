import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  // Set the initial state of the component
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  // Use effect to fetch data once the component is mounted.
  // The empty array as the second argument makes sure that the effect runs only once.
  useEffect(() => {
    setIsLoading(true);
    fetch("https://meetups-ed686-default-rtdb.firebaseio.com/meetups.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // Transform the data into an array of objects
        const meetups = [];

        // Loop through the data object and push each object into the meetups array
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };

          // Push the meetup object into the meetups array
          meetups.push(meetup);
        }

        // Set the loadedMeetups state to the meetups array
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  // Display a loading message if the data is still loading
  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  // Display the list of meetups if the data is loaded
  return (
    <>
      <h1>All Meetups Page</h1>
      <MeetupList meetups={loadedMeetups} />
    </>
  );
}

export default AllMeetupsPage;
