const m = require("mithril");
import UIButton from "./ui/UIButton.jsx";


const styles = {
naughty: { color: 'red' },
nice: { color: 'green' },
}

const EntryForm = {
  // below how you write state with Mithril (very similar to React)
  data: {
    nice: false,
    naughty: false,
  },


  view: (vnode) => (
    <form name="entry-form" id="entry-form">
      <label for="child-name">{`Childs Name`}</label>
      <input id="child-name" type="text" name="name" />
      <label for="location">{`Location (City, State)`}</label>
      <input id="location" type="text" name="location" />
      <label for="naughty-or-nice">{`We're they Naughty or Nice? `}</label>
      
      <label for="naughty">
        {`Naughty:`}
        <input
          type="checkbox"
          // hidden
          id="naughty"
          name="naughty"
          onclick={() => {
            // on click change to opposite of whatever state was before)
            vnode.state.naughty = !vnode.state.naughty;
            console.log("naughty", vnode.state.naughty);
          }}
        />

        {/* Can't figure out how to get this ternary to change color on click...*/}
      <span> <i class="far fa-frown" style={vnode.state.naughty != false ? 'color: red' : 'color: black'}/> </span>
        </label>
       
        <label for="nice">
        {`Nice:`}
          
        <input
          type="checkbox"
          // hidden
          id="nice"
          name="nice"
          onclick={() => {
            // on click change to opposite of whatever state was before)
            vnode.state.nice = !vnode.state.nice;
            
            console.log("nice", vnode.state.nice);
          }}
        />
    
        <span>{<i class="far fa-smile" style={vnode.state.naughty != false ? 'color: green' : 'color: black'}/>}</span>
        </label>
      

      <UIButton
        action={() => console.log(`Adding to list...`)}
        buttonName="Add to list"
      />
    </form>
  ),
};

export default EntryForm;
