import Card from "../../card/Card";
import newMeetupFormCSS from "./NewMeetupForm.module.css";
function NewMeetupForm() {
  return (
    <Card>
      <form className={newMeetupFormCSS.form}>
        <div className={newMeetupFormCSS.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" id="title" required />
        </div>
        <div className={newMeetupFormCSS.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" id="image" required />
        </div>
        <div className={newMeetupFormCSS.control}>
          <label htmlFor="address">Meetup Address</label>
          <input type="text" id="address" required />
        </div>
        <div className={newMeetupFormCSS.control}>
          <label htmlFor="description">Meetup Description</label>
          <textarea id="description" required rows="5"></textarea>
        </div>
        <div className={newMeetupFormCSS.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
