const Card = ({user, img, date, comment, darkMode}) => {
    return(
        <div className={(darkMode) ? "card dark-color-2" : "card"}>
          <div className="date"><div>{date}</div></div>
          <div className="description">
            <div className="profileImg">
              <img src="https://www.baytekent.com/wp-content/uploads/2016/12/facebook-default-no-profile-pic1.jpg" alt=""/>
            </div>
            <div className="comment">
              <div className={(darkMode) ? "user-name-dark" : "user-name"}>
                  {user}
              </div>
              <p>
                {comment}
              </p>
            </div>
          </div>
          <div className="image">
            <img src={img} alt=""/>
          </div>
        </div>
    )
}
export default Card;