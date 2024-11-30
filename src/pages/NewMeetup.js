import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/form/new-meetup/NewMeetupForm";
function NewMeetupPage() {
  const navigate = useNavigate();

  // Create a Realtime Database in Firebase and get the URL
  const firebaseUrl = "https://meetups-ed686-default-rtdb.firebaseio.com/";
  function addMeetupHandler(meetupData) {
    fetch(`${firebaseUrl}/meetups.json`, {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      navigate("/");
    });
  }
  return (
    <div>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </div>
  );
}

export default NewMeetupPage;
