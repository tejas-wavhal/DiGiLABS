import React from 'react'
import { useState } from 'react'
import Slider from './Slider'
import { Link } from 'react-router-dom'

const Verification = () => {

  const [otp, setOtp] = useState({ value: '', otp1: "", otp2: "", otp3: "", otp4: "", otp5: "", otp6: "" })

  const handleChange = (value1, e) => {
    setOtp({ [value1]: e.target.value })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target);
    // console.log(otp);
  }

  const inputfocus = (e) => {
    if (e.key === "Delete" || e.key === "Backspace") {
      const next = e.target.tabIndex - 2;
      if (next > -1) {
        e.target.form.elements[next].focus()
      }
    }
    else {
      // console.log("next");
      const next = e.target.tabIndex;
      if (next < 6) {
        e.target.form.elements[next].focus()
      }
    }
  }

  return (
    <>
      <section className="mx-5 flex justify-center my-7 md:mx-auto md:mt-52 lg:mt-0 lg:flex lg:justify-evenly lg:items-center lg:space-x-0 md:mr-6 relative lg:bottom-10">
        <form className="mt-1 max-w-[344px] md:mx-auto lg:mx-0 " onSubmit={handleOnSubmit}>
          <div className="-space-y-3">
            <h1 className="text-[28px] font-bold">Enter the verification</h1>
            <h2 className="text-[28px] font-bold">code to continue</h2>
          </div>
          <p className='text-[#7A7A85] text-base font-medium mb-7 mt-3'>We sent to <Link className='text-maincolor-100 cursor-pointer'>hellouser@heads.design.</Link> If you don’t see it, check your spam.</p>

          <div id="otp" className="mt-5 flex flex-row justify-center px-2 text-center">
            <input
              name='otp1'
              autoComplete='off'
              value={otp.otp1}
              onChange={e => handleChange("otp1", e)}
              tabIndex="1"
              onKeyUp={e => inputfocus(e)}
              className="form-control focus:ring-4 focus:outline-none focus:ring-blue-200 m-1 h-14 w-12 rounded-xl border border-maincolor-100 text-center" type="text"
              maxLength={1} />
            <input
              name='otp2'
              autoComplete='off'
              value={otp.otp2}
              onChange={e => handleChange("otp2", e)}
              tabIndex="2"
              onKeyUp={e => inputfocus(e)}
              className="form-control focus:ring-4 focus:outline-none focus:ring-blue-200 m-1 h-14 w-12 rounded-xl border border-maincolor-100 text-center" type="text"
              maxLength={1} />
            <input
              name='otp3'
              autoComplete='off'
              value={otp.otp3}
              onChange={e => handleChange("otp3", e)}
              tabIndex="3"
              onKeyUp={e => inputfocus(e)}
              className="form-control focus:ring-4 focus:outline-none focus:ring-blue-200 m-1 h-14 w-12 rounded-xl border border-maincolor-100 text-center" type="text"
              maxLength={1} />
            <input
              name='otp4'
              autoComplete='off'
              value={otp.otp4}
              onChange={e => handleChange("otp4", e)}
              tabIndex="4"
              onKeyUp={e => inputfocus(e)}
              className="form-control focus:ring-4 focus:outline-none focus:ring-blue-200 m-1 h-14 w-12 rounded-xl border border-maincolor-100 text-center" type="text"
              maxLength={1} />
            <input
              name='otp5'
              autoComplete='off'
              value={otp.otp5}
              onChange={e => handleChange("otp5", e)}
              tabIndex="5"
              onKeyUp={e => inputfocus(e)}
              className="form-control focus:ring-4 focus:outline-none focus:ring-blue-200 m-1 h-14 w-12 rounded-xl border border-maincolor-100 text-center" type="text"
              maxLength={1} />
            <input
              name='otp6'
              autoComplete='off'
              value={otp.otp6}
              onChange={e => handleChange("otp6", e)}
              tabIndex="6"
              onKeyUp={e => inputfocus(e)}
              className="form-control focus:ring-4 focus:outline-none focus:ring-blue-200 m-1 h-14 w-12 rounded-xl border border-maincolor-100 text-center" type="text"
              maxLength={1} />
          </div>

          <div className='mt-8 flex justify-between font-bold'>
            <Link to={'/'}><button className='text-maincolor-100'>Back</button></Link>
            <span className='text-[#CACACE]'>Resend 00.10</span>
          </div>
        </form>
        <Slider />
      </section>
      <div className="relative bottom-20 space-x-2 font-medium text-sm hidden lg:flex px-14">
        <h1>Not member?</h1>  <button className="text-maincolor-100">Create account</button>
      </div>
    </>
  )
}

export default Verification