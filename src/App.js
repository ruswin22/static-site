function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to My Static React Website</h1>
      <p style={styles.subtitle}>This is a simple static site built with React.</p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "60px",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    color: "#222",
    fontSize: "40px",
    marginBottom: "20px",
  },
  subtitle: {
    color: "#555",
    fontSize: "20px",
    marginBottom: "30px",
  },
  button: {
    padding: "12px 24px",
    fontSize: "18px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#007bff",
    color: "white",
  }
};

export default App;
