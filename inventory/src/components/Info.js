export default function Info() {
  const title = "This is my title";
  const showtitle = true;

  return (
    <div>
      <h1>{showtitle ? title : ""}</h1>
      <p> Manage your staffs.</p>
    </div>
  );
}
