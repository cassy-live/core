define(function(require) {

  var $ = require('jquery');

  var React = require('react');
  var ReactBootstrap = require('react-bootstrap');
  var ReactQuill = require('react-quill');

  var HeaderBar = require('jsx!components/globals/HeaderBar');
  var FooterBar = require('jsx!components/globals/FooterBar');

  var MemberHome = React.createClass({
    getInitialState: function() {
      return {
        tag: '',
        data: null
      };
    },

    validationState() {
      var length = this.state.tag.length;
      if (length > 10) { return 'success'; }
      else if (length > 5) { return 'warning'; }
      else if (length > 0) { return 'error'; }
    },

    onTextChange: function(value) {
      this.setState({ data: value });
    },

    onTagChange: function() {
      this.setState({ tag: this.refs.input.getValue() });
    },

    handleClick: function() {
      $.ajax({
        url: '/api/documents',
        method: 'post',
        data: {
          'tags': this.state.tag,
          'content': this.state.data
        },
        dataType: 'json',
        success: function(data) {
          console.log('scooby', data);
        },
        error: function(xhr, status, err) {
          console.log(status, err.toString());
        }
      });
    },

    render: function() {
      var Button = ReactBootstrap.Button;
      var Input = ReactBootstrap.Input;
      var user = this.props.user;

      return (
        <div>
          <HeaderBar user={user}/>
          <div>
            <h3>Hello <strong>{user.fullName}</strong></h3>
            <p>Let it be said that {user.givenName} the great has done it again!</p>
          </div>
          <FooterBar />
        </div>
      );
    }

  });

  return MemberHome;
});
