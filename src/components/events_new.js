import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postEvents } from '../actions';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom'

class EventsNew extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }
  renderField(field) {
    const { input, label, type, meta: { touched, error } } = field
    return (
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    )
  }
  async onSubmit(values) {
    await this.props.postEvents(values)
    this.props.history.push('/')
  }
  render() {
    const { handleSubmit, pristine, submitting, invalid } = this.props
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div><Field label='Title' name='title' type='text' component={this.renderField} /> </div>
        <div><Field label='Body' name='body' type='text' component={this.renderField} /></div>
        <div>
          <input type='submit' value='Submit' disabled={pristine || submitting || invalid} />
          <Link to='/'>Cancel</Link>
        </div>
      </form>
    )
  }
}

const validate = values => {
  const errors = {}
  if (!values.title) errors.title = 'Enter a title, please.'
  if (!values.body) errors.body = 'Enter a body, pliase.'

  return errors
}
const mapDispatchToProps = ({ postEvents })
export default connect(null, mapDispatchToProps)(
  reduxForm({ validate, form: 'eventNewForm' })(EventsNew)
)
