import {useState} from "react"
import './App.css';

var emojiData={
  "🚣":"Person Rowing Boat",
  "🗾":"Map of Japan",
  "⛰️":"Mountain",
  "🏕️":"Camping",
  "🌋":"Volcano",
  "🗻":"Mountain Fuji",
  "🏞️":"National Park",
  "🏜️":"Desert",
  "🏖️":"Beach with Umbrella",
  "🏟️":"Stadium",
  "🏗️":"Building Construction",
  "🏝️":"Desert Island",
  "🏛️": "Classical Building",
  "🏚️": "Derelict House",
  "🏢": "Office Building",
  "🏠": "House",
  "🏥": "Hospital",
  "🏦": "Bank",
  "🏤":"Post Office",
  "🏫": "School",
  "⛺": "Tent"
}

var emojiDataArray=Object.keys(emojiData);

var color="white";

function App() {
  const [value,setValue]=useState("")
  function emojiClickHandler(emoji){
   var emojiMeaning=emojiData[emoji];
   setValue(emojiMeaning)}

   function emojiInputHandler(event){
        var emojiInputMeaning=event.target.value
        var value=emojiData[emojiInputMeaning]
        if(value===undefined){
          value="we don't have this emoji in our database"
        }
        setValue(value)
   }
  return (
    <div className="emoji-identifier">
      <div className="emoji-identifier-child">
        <div className="emoji-identifier-child-child">
             <h1 style={{color:color}}>Emoji Identifier</h1>
             <input placeholder="Please enter an emoji" onChange={emojiInputHandler}></input>
             <h1 style={{fontSize:"40px"}}>{value}</h1>
        </div>
      </div>
            <div className="emoji-identifier-child-adj">
                <h2>Emojis</h2>
                <h3>Click any one to know the meaning</h3>
                 {emojiDataArray.map((emoji)=>{
                     return(
                        <p className="emojis-display"onClick={()=>emojiClickHandler(emoji)}>{emoji}</p>
                          )
                 })}
       </div>
        </div>
  );
}

export default App;
