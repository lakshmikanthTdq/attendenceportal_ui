import React from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <img src="https://lakshmikanthtdq.github.io/attendenceportal_ui/assests/landingbackground.png" alt="profile" className="backgroundimg" />


      <div className="widgets">
      <h2>Hi Lorem !</h2>
        <section>
        <div className="card" onClick={() => { navigate('/layout/customermanagement/view') }}>
          <div className="svgimages" alt="customer-management">
            <svg xmlns="http://www.w3.org/2000/svg" width="76.93" height="78.493" viewBox="0 0 76.93 78.493">
              <path id="customer-service" d="M30.727,53.166a28.825,28.825,0,0,0,2.716,10.171L28.119,66.41a34.957,34.957,0,0,1-3.536-13.244h6.143ZM61.146,28.858a8.156,8.156,0,1,1-8.156,8.156A8.156,8.156,0,0,1,61.146,28.858ZM46.84,61.2H75.453a1.467,1.467,0,0,0,1.437-1.792,16.134,16.134,0,0,0-31.486,0A1.467,1.467,0,0,0,46.84,61.2ZM58.767,75.9c1.4.17,2.542-.25,2.93-1.7a2.489,2.489,0,0,0-1.7-2.956,68.616,68.616,0,0,1-10.82-3.206c-4.332-1.566-5.463-1.934-9.736.54l-7.686,4.45,6.382,11.277.5-.291a1.3,1.3,0,0,1,.985-.129l17.33,4.639a6.791,6.791,0,0,0,6.164-.9l23.8-14.654a2.679,2.679,0,0,0,1-2.552,2.444,2.444,0,0,0-1.28-2.01c-1.238-.627-3.388-.44-6.713,1.5L66.758,77.57a9.615,9.615,0,0,1-3.276,1.2c-3.264.548-8.18-.99-11.1-1.825-.939-.268-1.893-.541-2.824-.79a1.306,1.306,0,0,1,.675-2.524c2.841.761,5.658,1.676,8.537,2.273ZM27.789,71.336l10.4,18.383a1.862,1.862,0,0,1-.7,2.531l-3.539,2a1.862,1.862,0,0,1-2.531-.7l-10.4-18.383a1.862,1.862,0,0,1,.7-2.531l3.539-2A1.862,1.862,0,0,1,27.789,71.336ZM25.4,74.092a1.264,1.264,0,1,0,1.433,1.068A1.263,1.263,0,0,0,25.4,74.092Zm-.82-25.442a34.813,34.813,0,0,1,3.545-13.239L33.484,38.5A29.675,29.675,0,0,0,30.751,48.65ZM30.389,31.5a35.174,35.174,0,0,1,9.688-9.694l3.06,5.3a28.708,28.708,0,0,0-7.411,7.475Zm13.6-11.956A34.759,34.759,0,0,1,57.228,16v6.141a28.623,28.623,0,0,0-10.182,2.7ZM61.743,16v6.143A28.872,28.872,0,0,1,88.123,54.5H86.107a.7.7,0,0,0-.554,1.142L91,62.557a.706.706,0,0,0,1.108,0l5.447-6.919A.7.7,0,0,0,97,54.5H94.293a35.382,35.382,0,0,0,.182-3.588A34.983,34.983,0,0,0,61.743,16Z" transform="translate(-20.779 -16)" fill="#1a2b6d" fill-rule="evenodd" />
            </svg>
          </div>
          <p>
            Customer <br /> Management
          </p>
        </div>
        <div className="card" onClick={() => { navigate('/layout/employees/view') }}>
          <div className="svgimages" alt="employees">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="73.05"
              height="73.064"
              viewBox="0 0 73.05 73.064"
            >
              <g
                id="Group_5521"
                data-name="Group 5521"
                transform="translate(-70.35 -48.945)"
              >
                <path
                  id="_003-analysis"
                  data-name="003-analysis"
                  d="M51.206,14.173l5.125,9.118a1.217,1.217,0,0,0,1.059.621H68.346a1.217,1.217,0,0,0,1.059-.621l5.478-9.739a1.217,1.217,0,0,0,0-1.217L69.4,2.6A1.217,1.217,0,0,0,68.346,2H57.39a1.217,1.217,0,0,0-1.059.621l-5.125,9.118H38.521A1.217,1.217,0,0,0,37.3,12.956v7.365A18.26,18.26,0,0,0,20.322,37.3h-4.93V23.912h4.261a1.217,1.217,0,0,0,1.059-.621l5.478-9.739a1.217,1.217,0,0,0,0-1.217L20.711,2.6A1.217,1.217,0,0,0,19.652,2H8.7a1.217,1.217,0,0,0-1.059.621L2.159,12.36a1.217,1.217,0,0,0,0,1.217l5.478,9.739a1.217,1.217,0,0,0,1.059.6h4.261V38.52a1.217,1.217,0,0,0,1.217,1.217h6.148A18.26,18.26,0,0,0,37.3,56.78v6.087H25.836l-5.125-9.118a1.217,1.217,0,0,0-1.059-.621H8.7a1.217,1.217,0,0,0-1.059.621L2.159,63.488a1.217,1.217,0,0,0,0,1.217l5.478,9.739a1.217,1.217,0,0,0,1.059.6H19.652a1.217,1.217,0,0,0,1.059-.621L25.836,65.3H38.521a1.217,1.217,0,0,0,1.217-1.217v-7.3A18.26,18.26,0,0,0,56.781,39.737H61.65V53.128H57.39a1.217,1.217,0,0,0-1.059.621l-5.478,9.739a1.217,1.217,0,0,0,0,1.217l5.478,9.739a1.217,1.217,0,0,0,1.059.621H68.346a1.217,1.217,0,0,0,1.059-.621L74.883,64.7a1.217,1.217,0,0,0,0-1.217L69.4,53.749a1.217,1.217,0,0,0-1.059-.621H64.085V38.52A1.217,1.217,0,0,0,62.868,37.3H56.781A18.26,18.26,0,0,0,39.738,20.321V14.173Zm-9.033,18.26a3.652,3.652,0,0,1-1.509,2.946,4.869,4.869,0,0,1,2.727,4.358v8.521H33.652V39.737a4.869,4.869,0,0,1,2.727-4.358,3.652,3.652,0,1,1,5.795-2.946Z"
                  transform="translate(68.354 46.945)"
                  fill="#1a2b6d"
                />
                <g id="customer" transform="translate(127.197 106.02)">
                  <circle
                    id="Ellipse_1"
                    data-name="Ellipse 1"
                    cx="2.126"
                    cy="2.126"
                    r="2.126"
                    transform="translate(1.576)"
                    fill="#fff"
                  />
                  <path
                    id="Path_2"
                    data-name="Path 2"
                    d="M124.56,239.876a4.875,4.875,0,0,0-3.139.594c-1.5.962-1.214,2.258-1.214,3.844a.881.881,0,0,0,.96.767c5.786,0,6.017.149,6.36-.458.113-.205.082-.14.082-2.1C127.608,240.958,125.918,239.876,124.56,239.876Z"
                    transform="translate(-120.185 -234.996)"
                    fill="#fff"
                  />
                </g>
                <g
                  id="customer-2"
                  data-name="customer"
                  transform="translate(127.197 55.02)"
                >
                  <circle
                    id="Ellipse_1-2"
                    data-name="Ellipse 1"
                    cx="2.126"
                    cy="2.126"
                    r="2.126"
                    transform="translate(1.576)"
                    fill="#fff"
                  />
                  <path
                    id="Path_2-2"
                    data-name="Path 2"
                    d="M124.56,239.876a4.875,4.875,0,0,0-3.139.594c-1.5.962-1.214,2.258-1.214,3.844a.881.881,0,0,0,.96.767c5.786,0,6.017.149,6.36-.458.113-.205.082-.14.082-2.1C127.608,240.958,125.918,239.876,124.56,239.876Z"
                    transform="translate(-120.185 -234.996)"
                    fill="#fff"
                  />
                </g>
                <g
                  id="customer-3"
                  data-name="customer"
                  transform="translate(78.197 55.02)"
                >
                  <circle
                    id="Ellipse_1-3"
                    data-name="Ellipse 1"
                    cx="2.126"
                    cy="2.126"
                    r="2.126"
                    transform="translate(1.576)"
                    fill="#fff"
                  />
                  <path
                    id="Path_2-3"
                    data-name="Path 2"
                    d="M124.56,239.876a4.875,4.875,0,0,0-3.139.594c-1.5.962-1.214,2.258-1.214,3.844a.881.881,0,0,0,.96.767c5.786,0,6.017.149,6.36-.458.113-.205.082-.14.082-2.1C127.608,240.958,125.918,239.876,124.56,239.876Z"
                    transform="translate(-120.185 -234.996)"
                    fill="#fff"
                  />
                </g>
                <g
                  id="customer-4"
                  data-name="customer"
                  transform="translate(78.197 105.02)"
                >
                  <circle
                    id="Ellipse_1-4"
                    data-name="Ellipse 1"
                    cx="2.126"
                    cy="2.126"
                    r="2.126"
                    transform="translate(1.576)"
                    fill="#fff"
                  />
                  <path
                    id="Path_2-4"
                    data-name="Path 2"
                    d="M124.56,239.876a4.875,4.875,0,0,0-3.139.594c-1.5.962-1.214,2.258-1.214,3.844a.881.881,0,0,0,.96.767c5.786,0,6.017.149,6.36-.458.113-.205.082-.14.082-2.1C127.608,240.958,125.918,239.876,124.56,239.876Z"
                    transform="translate(-120.185 -234.996)"
                    fill="#fff"
                  />
                </g>
              </g>
            </svg>
          </div>

          <p>Employees</p>
        </div>
        <div className="card" onClick={() => { navigate('/layout/attendance/view') }}>
          <div className="svgimages" alt="attendance">
            <svg xmlns="http://www.w3.org/2000/svg" width="78.179" height="73.064" viewBox="0 0 78.179 73.064">
              <g id="_001-calendar" data-name="001-calendar" transform="translate(-1 -2)">
                <path id="Path_6341" data-name="Path 6341" d="M70.655,2H63.348V9.306a2.435,2.435,0,1,1-4.871,0V2H19.51V9.306a2.435,2.435,0,1,1-4.871,0V2H7.332C3.679,2,1,5.166,1,9.306v8.768H78.935V9.306C78.935,5.166,74.551,2,70.655,2ZM1,23.189V67.758c0,4.384,2.679,7.306,6.576,7.306H70.9c3.9,0,8.281-3.166,8.281-7.306V23.189ZM22.676,64.1H16.831a1.921,1.921,0,0,1-1.948-1.948V56.068a1.921,1.921,0,0,1,1.948-1.948h6.089a1.921,1.921,0,0,1,1.948,1.948v6.089A2.132,2.132,0,0,1,22.676,64.1Zm0-21.919H16.831a1.921,1.921,0,0,1-1.948-1.948V34.148A1.921,1.921,0,0,1,16.831,32.2h6.089a1.921,1.921,0,0,1,1.948,1.948v6.089a2.132,2.132,0,0,1-2.192,1.948ZM42.16,64.1H36.071a1.921,1.921,0,0,1-1.948-1.948V56.068a1.921,1.921,0,0,1,1.948-1.948H42.16a1.921,1.921,0,0,1,1.948,1.948v6.089A1.792,1.792,0,0,1,42.16,64.1Zm0-21.919H36.071a1.921,1.921,0,0,1-1.948-1.948V34.148A1.921,1.921,0,0,1,36.071,32.2H42.16a1.921,1.921,0,0,1,1.948,1.948v6.089A1.792,1.792,0,0,1,42.16,42.185ZM61.643,64.1H55.555a1.921,1.921,0,0,1-1.948-1.948V56.068a1.921,1.921,0,0,1,1.948-1.948h6.089a1.921,1.921,0,0,1,1.948,1.948v6.089A1.792,1.792,0,0,1,61.643,64.1Zm0-21.919H55.555a1.921,1.921,0,0,1-1.948-1.948V34.148A1.921,1.921,0,0,1,55.555,32.2h6.089a1.921,1.921,0,0,1,1.948,1.948v6.089A1.792,1.792,0,0,1,61.643,42.185Z" fill="#1a2b6d" />
              </g>
            </svg>
          </div>

          <p>Attendance</p>
        </div>
        <div className="card" onClick={() => { navigate('/layout/reports/view') }}>
          <div className="svgimages" alt="reports">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="81.921"
              height="81.921"
              viewBox="0 0 81.921 81.921"
            >
              <g id="_29-Tax" data-name="29-Tax" transform="translate(-2 -2)">
                <path
                  id="Path_6343"
                  data-name="Path 6343"
                  d="M26.926,18.418h12.9L24,2.59v12.9A2.926,2.926,0,0,0,26.926,18.418Z"
                  transform="translate(42.366 1.136)"
                  fill="#1a2b6d"
                />
                <path
                  id="Path_6344"
                  data-name="Path 6344"
                  d="M57.738,25.406a8.777,8.777,0,0,1-8.777-8.777V2H16.777A8.777,8.777,0,0,0,8,10.777V31.843A29.257,29.257,0,0,1,31.406,83.921H63.589a8.777,8.777,0,0,0,8.777-8.777V25.406Zm-17.554,0H22.629a2.926,2.926,0,1,1,0-5.851H40.183a2.926,2.926,0,1,1,0,5.851ZM57.738,69.292H51.886a2.926,2.926,0,0,1,0-5.851h5.851a2.926,2.926,0,0,1,0,5.851Zm0-14.629H51.886a2.926,2.926,0,0,1,0-5.851h5.851a2.926,2.926,0,0,1,0,5.851Zm0-14.629h-11.7a2.926,2.926,0,0,1,0-5.851h11.7a2.926,2.926,0,1,1,0,5.851Z"
                  transform="translate(11.554 0)"
                  fill="#1a2b6d"
                />
                <path
                  id="Path_6345"
                  data-name="Path 6345"
                  d="M25.406,14A23.406,23.406,0,1,0,48.812,37.406,23.406,23.406,0,0,0,25.406,14ZM19.554,28.629a2.926,2.926,0,1,1-2.926,2.926A2.926,2.926,0,0,1,19.554,28.629Zm11.7,17.554a2.926,2.926,0,1,1,2.926-2.926A2.926,2.926,0,0,1,31.257,46.183Zm2.077-12.551-11.7,11.7a2.938,2.938,0,1,1-4.155-4.155l11.7-11.7a2.938,2.938,0,1,1,4.155,4.155Z"
                  transform="translate(0 23.109)"
                  fill="#1a2b6d"
                />
                <circle
                  id="Ellipse_167"
                  data-name="Ellipse 167"
                  cx="16.5"
                  cy="16.5"
                  r="16.5"
                  transform="translate(8.943 44.205)"
                  fill="#1a2b6d"
                />
              </g>
            </svg>
          </div>
          <p>Reports</p>
        </div>
        <div className="card" onClick={() => { navigate('/layout/salaries/view') }}>
          <div className="svgimages" alt="salaries">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="81.921"
              height="81.921"
              viewBox="0 0 81.921 81.921"
            >
              <path
                id="_004-funds"
                data-name="004-funds"
                d="M9.782,67.127,25.757,51.153,37.226,62.621,56.068,43.78l7.373,7.373V30.672H42.96l7.373,7.373L37.226,51.153,25.757,39.684,5.686,59.754A40.067,40.067,0,0,1,2,42.96,40.746,40.746,0,1,1,9.782,67.127Z"
                transform="translate(-2 -2)"
                fill="#1a2b6d"
              />
            </svg>
          </div>
          <p>Salaries</p>
        </div>
        </section>
      </div>

      <div className="arrow">
        <div></div>
        <img src="https://lakshmikanthtdq.github.io/attendenceportal_ui/assests/peoplearrowicon.png" alt="arrowicon" />
      </div>
    </div>
  );
}

export default LandingPage;