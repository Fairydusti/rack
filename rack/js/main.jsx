/*@author MR*/
var MyComponent = React.createClass({
    render: function(){
         return (
            React.createClass('h1', null, ["Here is content wrapper!"])
        );
    }
});

React.render(
    MyComponent(),
    document.getElementById('maincontent')
);