import React from 'react';
import PropsTypes from 'prop-types';

const App = () => {
  //配列
  const profiles = [
    { name: "mista", age: 20 },
    { name: "dio", age: 22 },
  ]
  return (
    <div>
      {
        // const profileを渡す
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
  )
};

//profile（親）からデータをpropsで受け取ってその中身を表示している
const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} years old!</div>
}

//型チェック
User.propTypes = {
  name: PropsTypes.string,
  age: PropsTypes.number.isRequired
}
export default App;
