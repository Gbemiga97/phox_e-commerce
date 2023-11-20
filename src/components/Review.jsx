

const Review = () => {
  return (
    <section className="review__container">
      <h4>Add a review</h4>
      <p>Your email adress will not be published. Required fields are marked *</p>
      <div className="review__input-container">
        <form action="">
          <input type="text" placeholder="Name" />
          <input type="email" name="email"  placeholder="Email"/>
          <textarea placeholder="Your review"></textarea>
        </form>
      </div>
      <button className="btn">
          Submit
        </button>
    </section>
  )
}

export default Review