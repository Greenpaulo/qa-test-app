import React, { Component, Fragment } from 'react';
import { withFormik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import Footer from './Footer';
import * as actions from '../actions';
import uuid from 'uuid';


class Dispensary extends Component {
  // Fetch the list of herbs for the herb select
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchHerbList();
  }

  renderHerbSelect = () => {
    if (this.props.herbList !== null && this.props.herbList !== undefined) {
      return this.props.herbList.map(herb => {
        return (
          <option key={uuid.v4()} id={herb.title}>{herb.title}</option>
        )
      })
    }
  }



  render() {
    if (!(this.props.isLoggedIn)) {
      return (
        <div className="container" id="sign-up">
          <h1 className="x-large text-primary"><i className="fas fa-lock animated bounce" id="lock" onClick={this.onLockClick}></i> The Dispensary Door Is Locked!</h1>
          <div id="login-reason">
            <p className="lead">In order to save your prescriptions and keep then secure - please Sign up/Login to use the Dispensary and Medicine Cabinet</p>
          </div>
          <Link to="/login" className="btn btn-primary shadow" id="sign-up-btn">Sign Up</Link>
          <p className="lead">Already have an account? <Link to="/login" className="text-primary animated-link" id="login-link">Login</Link></p>
        </div>
      )
    } else {
      return (
      <Fragment>
        <section className="container" id="dispensary">
          <h1 className="x-large text-primary animated fadeInDown">Dispensary</h1>

          <p className="medium animated fadeIn delay-custom1">Here in the dispensary you can create herbal prescriptions for yourself, friends and family</p>

          <div className="card animated fadeIn delay-custom1" id="card-one">
            <div className="icon-group">
              <i className="fas fa-leaf fa-lg"></i>
              <p>Select the herb you wish to dispense and then select the amount you wish to add to your prescription. You should aim for about 5-7 herbs per prescription. The maximum recommended is 7.</p>
            </div>
            <div className="icon-group">
              <i className="fas fa-flask fa-lg"></i>   
              <p>You can then save your newly created medicines in the medicine cabinet for future usage</p>
            </div>
            <div className="icon-group">
              <i className="fas fa-exclamation-circle fa-lg"></i>
              <p><strong>IMPORTANT :</strong> Please make sure you follow the dosage restrictions in the herb's materia medica entry.</p>
            </div>
          </div>
          <br />

          <p className="medium animated fadeIn delay-custom2">Tips For Prescribing</p>

          <div className="card animated fadeIn delay-custom2" id="card-two">
            <div className="list-group">
              <i className="fas fa-clipboard-check fa-lg"></i>
              <p> Try to focus on one or two problems to treat at a time. This will make a more focused prescription and increase the effectiveness of the treatment</p>
            </div>

            <div className="list-group">
              <i className="fas fa-clipboard-check fa-lg"></i>
              <p> At the same time try to treat the person holistically - for each physical symptom/problem area, try to treat the physical, emotional, mental and spiritual aspect of that problem. </p>
            </div>

            <div className="list-group">
              <i className="fas fa-clipboard-check fa-lg"></i>
              <p> Note: Whilst treating holistically, we are still focusing on one problem, but treating ALL aspects of that problem. This is not the same as treating many problems at once, which will lead to a more scattered treatment.</p>
            </div>
          </div>
          <br />

          <p className="medium animated fadeIn delay-custom3">Prescription</p>

          {/* Form to add herbs to a prescription */}
          <div className="card shadow animated fadeIn delay-custom3" id="prescription-form">
            <Form className="form">
              <i className="fas fa-prescription fa-3x"></i>
              <div className="form-group">
                <label htmlFor="patientName">Patient Name</label><br />
                <Field type="text" name="patientName" placeholder="Enter name..." id="patientName" required />
              </div>

              <div className="form-group">
                <label htmlFor="herb1">
                  Herb
                    <Field component="select" name="herb1">
                    <option>Please select...</option>
                    {this.renderHerbSelect()}
                  </Field>
                </label>
                <label htmlFor="dosage1">
                  Dosage (ml)
                  <Field type="number" name="dosage1" required />
                </label>
              </div>

              <div className="form-group">
                <label htmlFor="herb2">
                  Herb
                    <Field component="select" name="herb2">
                    <option>Please select...</option>
                    {this.renderHerbSelect()}
                  </Field>
                </label>
                <label htmlFor="dosage2">
                  Dosage (ml)
                  <Field type="number" name="dosage2" disabled/>
                </label>
              </div>

              <div className="form-group">
                <label htmlFor="herb3">
                  Herb
                    <Field component="select" name="herb3">
                    <option>Please select...</option>
                    {this.renderHerbSelect()}
                  </Field>
                </label>
                <label htmlFor="dosage3">
                  Dosage (ml)
                  <Field type="number" name="dosage3" />
                </label>
              </div>

              <div className="form-group">
                <label htmlFor="herb4">
                  Herb
                    <Field component="select" name="herb4">
                    <option>Please select...</option>
                    {this.renderHerbSelect()}
                  </Field>
                </label>
                <label htmlFor="dosage4">
                  Dosage (ml)
                  <Field type="number" name="dosage4" />
                </label>
              </div>

              <div className="form-group">
                <label htmlFor="herb5">
                  Herb
                    <Field component="select" name="herb5">
                    <option>Please select...</option>
                    {this.renderHerbSelect()}
                  </Field>
                </label>
                <label htmlFor="dosage5">
                  Dosage (ml)
                  <Field type="number" name="dosage5" />
                </label>
              </div>

              <div className="form-group">
                <label htmlFor="herb6">
                  Herb
                    <Field component="select" name="herb6">
                    <option>Please select...</option>
                    {this.renderHerbSelect()}
                  </Field>
                </label>
                <label htmlFor="dosage6">
                  Dosage (ml)
                  <Field type="number" name="dosage6" />
                </label>
              </div>

              <div className="form-group">
                <label htmlFor="herb7">
                  Herb
                    <Field component="select" name="herb7">
                    <option>Please select...</option>
                    {this.renderHerbSelect()}
                  </Field>
                </label>
                <label htmlFor="dosage7">
                  Dosage (ml)
                  <Field type="number" name="dosage7" />
                </label>
              </div>

              <div className="form-group">
                <label htmlFor="notes">Notes:</label><br />
                <Field component="textarea" name="notes" id="notes" cols="50" rows="5" />
              </div>

              <button className="btn btn-primary" type="submit">Dispense</button>
            </Form>
          </div>

        </section >
        <Footer />
      </Fragment >
      )
    }
  }
}

const FormikDispensary = withFormik({
  mapPropsToValues({ patientName, notes, herb1, herb2, herb3, herb4, herb5, herb6, herb7, dosage1, dosage2, dosage3, dosage4, dosage5, dosage6, dosage7 }) {
    return {
      patientName: patientName || '',
      herb1: herb1 || '',
      herb2: herb2 || '',
      herb3: herb3 || '',
      herb4: herb4 || '',
      herb5: herb5 || '',
      herb6: herb6 || '',
      herb7: herb7 || '',
      dosage1: dosage1 || '',
      dosage2: dosage2 || '',
      dosage3: dosage3 || '',
      dosage4: dosage4 || '',
      dosage5: dosage5 || '',
      dosage6: dosage6 || '',
      dosage7: dosage7 || '',
      notes: notes || ''
    };
  },
  handleSubmit(values, { props }) {
    console.error("Method POST does not exist")
  }

})(Dispensary)

const mapStateToProps = state => {
  return { herbList: state.herbList, isLoggedIn: state.isLoggedIn.isAuthenticated }
}

export default withRouter(connect(mapStateToProps, actions)(FormikDispensary));