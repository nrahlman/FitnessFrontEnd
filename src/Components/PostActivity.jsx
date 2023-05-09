const PostActivity = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [descritpion, setDescription] = useState("");

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await PostActivities(name, breed);
          navigate("/");
        }}
      >
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Name"
        />
        <input
          onChange={(e) => setDescription(e.target.value)}
          value={descritpion}
          type="text"
          placeholder="Breed"
        />
        <button type="submit">Create Activity</button>
      </form>
    </div>
  );
};

export default PostActivity;
