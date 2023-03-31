
import { useEffect, useState } from "react"
export default function MdjCard({ props, children }) {
  const [url, setUrl] = useState('')
  const [isHover, setHover] = useState(false)
  const styles = {
    mdjImg: {
      "width": "100%",
      transform:isHover?"scale(1.1)":'',
      transition: "all ease .5s"
    },
    cc: {
      boxShadow: "0 2px 8px 0 rgba(99, 99, 99, 0.2)",
      padding: "0px 30px 20px 30px",
     
    }
  }

  

  const handleMouseEnter = ()=>{
    setHover(true)
  }
  const handleMouseLeave = () =>{
    setHover(false)
  }
  useEffect(() => {
    const _url = new URL(`../images/mdj/${props.name}.webp`, import.meta.url)
    setUrl(_url.pathname)

    // async function imgUrl() {
    //  const _url2 = await import(`../images/mdj/${props.name}.webp`)
    //   setUrl2(_url2.default)
    // };
    // if (!url2) {
    //   imgUrl();
    // }
  }, []);

  return (
    <div>
      <div style={styles.cc} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <p style={{ textAlign: "center", fontSize: isHover?"25px":"30px", padding: "20px 0px", color: "#333",  transition: "all ease .5s"  }}>{props.name}</p>
        <img style={styles.mdjImg} src={url} />
      </div>

    </div>
  )
}