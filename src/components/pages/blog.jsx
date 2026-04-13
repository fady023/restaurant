import "./blog.css";

const blogData = [
  {
    id: 1,
    title: "How to prepare a delicious gluten free sushi",
    date: "January 3, 2023",
    img: "https://images.unsplash.com/photo-1553621042-f6e147245754",
  },
  {
    id: 2,
    title: "Exclusive baking lessons from the pastry king",
    date: "January 3, 2023",
    img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
  },
  {
    id: 3,
    title: "How to prepare the perfect fries in an air fryer",
    date: "January 3, 2023",
    img: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5",
  },
  {
    id: 4,
    title: "How to prepare delicious chicken tenders",
    date: "January 3, 2023",
    img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
  },
  {
    id: 5,
    title: "5 great cooking gadgets you can buy to save time",
    date: "January 3, 2023",
    img: "https://images.unsplash.com/photo-1586201375761-83865001e31c",
  },
  {
    id: 6,
    title: "The secret tips & tricks to prepare a perfect burger",
    date: "January 3, 2023",
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349",
  },
];

function Blog() {
  return (
    <section className="blog-page">

      {/* Header */}
      <div className="blog-header">
        <h1>Our Blog & Articles</h1>
        <p>
          We consider all the drivers of change gives you the components
          you need to create a truly happens.
        </p>
      </div>

      {/* Grid */}
      <div className="blog-grid">
        {blogData.map((post) => (
          <div className="blog-card" key={post.id}>
            <img src={post.img} alt={post.title} />
            <div className="blog-content">
              <span>{post.date}</span>
              <h3>{post.title}</h3>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Blog;