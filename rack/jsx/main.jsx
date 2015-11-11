/*@author MR*/
var MyComponent = React.createClass({
    render: function(){
         return (
            <h1>Here is content wrapper!</h1>
        );
    }
});

React.render(
    <MyComponent/>,
    document.getElementById('maincontent')
);  