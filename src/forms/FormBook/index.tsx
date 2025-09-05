interface FormBookProps {
  className?: string;
}

export const FormBook = ({ className }: FormBookProps) => {
  return (
    <form className={className}>
      <h2>Book Your Trip</h2>
      <label>
        Name:
        <input type="text" name="name" required />
      </label>
      <label>
        Email:
        <input type="email" name="email" required />
      </label>
      <label>
        Date:
        <input type="date" name="date" required />
      </label>
      <button type="submit">Book Now</button>
    </form>
  );
};
