import "../../styles/Playstore.css"

const Playstore = () => {
  return (
    <>

      <section className="footer-section">
        <div className="left-section">
          <h2 >
            Get Personal with <br /> FXST Wallet Today!
          </h2>
          <p>
            {" "}
            Experience the convenience of instant transactions, robust security<br />
            features, and a user-friendly interface designed to streamline your<br />
            crypto experience. Join the future of finance with FXST Wallet today.
          </p>
          <div className="block">
            <div className="block1">
              <p>
                {" "}
                Download on <br /> App Store
              </p>
              <img src="footer21.png" alt="Block 1 image" />
            </div>
            <div className="block2" >
              <p>
                {" "}
                Download on <br /> Play Store
              </p>
              <img src="footer22.png" alt="Block 2 image" />
            </div>
          </div>

          <div className="blockdown">
            <div className="ios">
              <h3> For ios ios15.6+  </h3>
              <h3> ios15.6+  </h3>
            </div>
            <div className="Andriod">
              {/* For Andriod Andriod 8.0+ */}
              <h3> For Andriod  </h3>
              <h3>  Andriod 8.0+ </h3>


            </div>
          </div>
        </div>
        <div className="right-section">
          <img src="footer2img.png" alt="Right side image" />
        </div>
      </section>
    </>
  )
}

export default Playstore