var contacts = [
	{
	  id: 1,
	  firstName: 'Jan',
	  lastName: 'Nowak',
	  email: 'jan.nowak@example.com',
	},
	{
	  id: 2,
	  firstName: 'Adam',
	  lastName: 'Kowalski',
	  email: 'adam.kowalski@example.com',
	},
	{
	  id: 3,
	  firstName: 'Zbigniew',
	  lastName: 'Koziol',
	  email: 'zbigniew.koziol@example.com',
	}
  ];

  var contactForm = {
	firstName: '',
	lastName: '',
	email: ''
  };

  var App = React.createClass({
	render: function() {
	  return (
		<div className={'app'}>
			<ContactForm contact={contactForm} />
			<Contacts items={contacts} />
		</div>
	  );
	}
  });

  var ContactForm = React.createClass({
	propTypes: {
	  contact: React.PropTypes.object.isRequired
	},

	render: function() {
		return (
			<form className={'contactForm'}>
				<input type={'text'} placeholder={'Name'} value={this.props.contact.firstName} />
				<input type={'text'} placeholder={'Surname'} value={this.props.contact.lastName} />
				<input type={'email'} placeholder={'E-mail'} value={this.props.contact.email} />
				<button type={'submit'}>
					Add contact
				</button>
			</form>
		);
	}
  })

  var Contacts = React.createClass({
	propTypes: {
	  items: React.PropTypes.array.isRequired,
	},

	render: function() {
	  var contacts = this.props.items.map(function(contact) {
		  return <Contact item={contact} key={contact.id} />;
	  });

	  return (
		  <ul className={'contactList'}>
			{contacts}
		  </ul>
	  );
	}
  });

  var Contact = React.createClass({
	propTypes: {
	  item: React.PropTypes.object.isRequired,
	},

	render: function() {
	  	return (
		  <div className={'contactItem'}>
			<img className={'contactImage'} src={'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-128.png'} />
			<p className={'contactLabel'}>
				{this.props.item.firstName}
			</p>
			<p className={'contactLabel'}>
				{this.props.item.lastName}
			</p>
			<a className={'contactEmail'} href={'mailto:' + this.props.item.email}>
				{this.props.item.email}
			</a>
		  </div>
		)
	},
  });

  var app = React.createElement(App);
  ReactDOM.render(app, document.getElementById('app'));

