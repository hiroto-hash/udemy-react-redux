import React from 'react';

const App = () => {
  //配列
  const profile = [
    { name:"mista",age:"20"},
    { name:"dio",age:"22"},
    { name:"zo"}
  ];
  return(
    <div>
      {
        // const profileを渡す
        profile.map((profile,index) => {
          return <User name={profile.name} age={profile.age}  key={index}/>
        })
      }
      <User name={"Hanako"} age="10" />
    </div>
  )
};

//profile（親）からデータをpropsで受け取ってその中身を表示している
const User = (props) => {
return <div>Hi, I am { props.name }, and { props.age } years old!</div>
}

//propsの中に要素が無い時にはdefaultとしてこの値が入る
User.defaultProps = {
  age:1
}
export default App;
