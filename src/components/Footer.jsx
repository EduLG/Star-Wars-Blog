export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer mt-auto py-3 text-end">
      <button className="btn text-white bg-dark" onClick={scrollToTop}>
        Go Up ↑
      </button>
    </footer>
  );
};
