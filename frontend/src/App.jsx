import { useState } from "react";

function App() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(false);
  const [loading, setLoading] = useState(false);

  const upgradePhoto = () => {
    setLoading(true);

    setTimeout(() => {
      setResult(true);
      setLoading(false);
    }, 1500);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f7fb",
        padding: "40px",
        fontFamily: "Arial"
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "auto",
          background: "white",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          textAlign: "center"
        }}
      >
        <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>
          Photo Upgrader
        </h1>

        <p style={{ color: "gray", marginBottom: "30px" }}>
          Convert low-quality supplier images into premium ecommerce photos
        </p>

        <input
          type="file"
          onChange={(e) =>
            setImage(URL.createObjectURL(e.target.files[0]))
          }
        />

        <br /><br />

        <button
          onClick={upgradePhoto}
          style={{
            background: "black",
            color: "white",
            border: "none",
            padding: "12px 24px",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "16px"
          }}
        >
          {loading ? "Upgrading..." : "Upgrade Photo"}
        </button>

        <div
          style={{
            marginTop: "50px",
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            flexWrap: "wrap"
          }}
        >
          {image && (
            <div>
              <h3>Original</h3>
              <img
                src={image}
                width="300"
                style={{
                  borderRadius: "15px"
                }}
              />
            </div>
          )}

          {image && result && (
            <div>
              <h3>Upgraded</h3>
              <img
                src={image}
                width="300"
                style={{
                  borderRadius: "15px",
                  filter:
                    "brightness(1.18) contrast(1.22) saturate(1.35) drop-shadow(0 12px 24px rgba(0,0,0,0.25))"
                }}
              />

              <br /><br />

              <a href={image} download="premium-photo.jpg">
                <button
                  style={{
                    padding: "10px 18px",
                    borderRadius: "10px",
                    border: "1px solid black",
                    cursor: "pointer"
                  }}
                >
                  Download Image
                </button>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;