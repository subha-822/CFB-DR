import React from "react";
import Header from "./Header";
import Footer from "./footer";
import Note from "./Note";
import notes from "./notex";
// console.log(notes)

// function createNotes(noteItem)
// {
//     return <Note
//     key={noteItem.key}
//     title={noteItem.title}
//     content={noteItem.content}
//     />
// }
// function App(){
//     return(
//     <div>
//         <Header />
//         {notes.map(createNotes)};
//         <Note title="This is the title" content="This is the content"/>
//         <Footer />
//     </div>
//     );
// }

function App(){
    return(
    <div>
        <Header />
        {notes.map(noteItem=> (

    <Note
     key={noteItem.key}
     title={noteItem.title}
     content={noteItem.content}
     />
        ))}
        <Note title="This is the title" content="This is the content"/>
        <Footer />
    </div>
    );
}

export default App;