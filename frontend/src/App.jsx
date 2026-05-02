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
    }, 1200);
  };

  const downloadImage = () => {
    const img = document.getElementById("upgradedImage");

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const image = new Image();
    image.crossOrigin = "anonymous";
    image.src = img.src;

    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;

      ctx.filter = "brightness(1.2) contrast(1.2) saturate(1.3)";
      ctx.drawImage(image, 0, 0);

      const link = document.createElement("a");
      link.download = "upgraded-image.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    };
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        padding: "40px",
        fontFamily: "Arial"
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "auto",
          background: "white",
          borderRadius: "20px",
          padding: "40px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
          textAlign: "center"
        }}
      >
        <h1>Photo Upgrader</h1>

        <p style={{ color: "gray" }}>
          Improve ecommerce product images instantly
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
            background: loading ? "#64748b" : "#0f172a",
            color: "white",
            padding: "12px 24px",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer"
          }}
        >
          {loading ? "Upgrading..." : "Upgrade Photo"}
        </button>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            marginTop: "40px",
            flexWrap: "wrap"
          }}
        >
          {image && (
            <div>
              <h3>Before</h3>
              <img src={image} width="300" style={{ borderRadius: "10px" }} />
            </div>
          )}

          {image && result && (
            <div>
              <h3>After</h3>
              <img
                id="upgradedImage"
                src={image}
                width="300"
                style={{
                  borderRadius: "10px",
                  filter:
                    "brightness(1.2) contrast(1.2) saturate(1.3) drop-shadow(0 10px 20px rgba(0,0,0,0.25))"
                }}
              />

              <br /><br />

              <button
                onClick={downloadImage}
                style={{
                  padding: "10px 18px",
                  borderRadius: "10px",
                  border: "1px solid black",
                  cursor: "pointer"
                }}
              >
                Download Upgraded Image
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;