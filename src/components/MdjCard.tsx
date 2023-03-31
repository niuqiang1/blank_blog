
export default function MdjCard({ props, children }) {
  const styles = {
    mdjImg: {
      "width": "100%",

    },
    cc: {
      boxShadow: "0 2px 8px 0 rgba(99, 99, 99, 0.2)",
      padding: "0px 30px 20px 30px",
      "img": {
        width: "10%",
        transform: "scale(4)"
      }
    }
  }
  return (
    <div>
      <div style={styles.cc} >
        <p style={{ textAlign: "center", fontSize: "30px", padding: "20px 0px", color: "#333" }}>{props.name}</p>
        <img style={styles.mdjImg} src={props.url} />
      </div>

    </div>
  )
}