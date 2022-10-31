import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="main">
        <section className="profile">
          <img src="profile.jpg" alt="" id="profile__img" />
          <h3 id="twitter">@sito_37</h3>
          <h3 id="slack">sito</h3>
          <div className="svg__container">
            <a href="google.com" title="share">
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="1" y="1" width="40" height="40" rx="20" fill="white" />
                <path
                  d="M28.3261 21.5062C28.5296 21.3318 28.6313 21.2446 28.6686 21.1409C28.7013 21.0498 28.7013 20.9502 28.6686 20.8591C28.6313 20.7554 28.5296 20.6682 28.3261 20.4938L21.2672 14.4433C20.917 14.1431 20.7419 13.9931 20.5937 13.9894C20.4648 13.9862 20.3418 14.0428 20.2603 14.1427C20.1667 14.2576 20.1667 14.4883 20.1667 14.9495V18.5289C18.3878 18.8401 16.7597 19.7415 15.5498 21.0949C14.2307 22.5704 13.501 24.48 13.5 26.4591V26.9691C14.3745 25.9157 15.4663 25.0638 16.7006 24.4716C17.7889 23.9495 18.9653 23.6403 20.1667 23.5588V27.0505C20.1667 27.5117 20.1667 27.7424 20.2603 27.8573C20.3418 27.9572 20.4648 28.0138 20.5937 28.0106C20.7419 28.0069 20.917 27.8569 21.2672 27.5567L28.3261 21.5062Z"
                  stroke="#98A2B3"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <rect
                  x="1"
                  y="1"
                  width="40"
                  height="40"
                  rx="20"
                  stroke="#D0D5DD"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-dasharray="1 3"
                />
              </svg>
            </a>
          </div>
          <div className="mobile__share">
            <img src="_Avatar share button.png" alt="" />
          </div>
        </section>
        <section className="links">
          <a className="link" href="twitter">
            Twitter Link
          </a>
          <a className="link" id="btn__zuri" href="https://training.zuri.team/">
            Zuri Team
          </a>
          <a
            className="link"
            id="books"
            href="http://books.zuri.team"
            title="this is where you find books about design and coding"
          >
            Zuri Books
          </a>
          <a
            className="link"
            id="book__python"
            href="https://books.zuri.team/python-for-beginners?ref_id=nelson37"
            title="grab a copy of and in depth python book at a discounted price"
          >
            Python Books
          </a>
          <a
            className="link"
            id="pitch"
            href="https://background.zuri.team"
            title="You want to hire, We make it seemless for YOU!"
          >
            Background Check For Coders
          </a>
          <a
            className="link"
            id="book__design"
            href="https://books.zuri.team/design-rules"
            title="free design book offered by Zuri"
          >
            Design Books
          </a>
          <div>
            <a href="https://app.slack.com/client/T042F7V19Q8/C041JU70S5U/rimeto_profile/U049CN55K40">
              <img src="slack.png" alt="" />
            </a>
            <a href="https://github.com/sito-mi-37">
              <img src="Icon.png" alt="" />
            </a>
          </div>
        </section>
      </div>
      <footer>
        <div>
          <div className="zuri__logo">
            Zuri<span>.</span>Internship
          </div>
          <div>HNG internship 9 Frontend Task</div>
          <div>
            <img src="I4G.png" alt="" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
