import React, { useEffect, useRef } from "react";

const Intro = () => {
  useEffect(() => {}, []);

  return (
    <div className="grid-intro">
      {/* @ts-ignore */}
      <div name="intro" className="pos-int"></div>
      {/* <div className="filler"></div> */}
      <div className="intro">
        <div className="intro__container">
          <h2 className="intro__span">Hey, my name is </h2>
          <h1 className="intro__header">Gili Menahem</h1>
          <h2 className="intro__sub-header">
            I build things for{" "}
            <span id="ripple" className="ripple">
              the web.
            </span>
          </h2>

          <div className="intro__container-body">
            <p>
              I'm a Fullstack Developer focusing on creating great experiences
            </p>
            <p>
              Currently working at iNT college - Institute of Innovation &
              Technology,
            </p>
            <p> and working on Creating Learning tools</p>
          </div>
        </div>
      </div>
      <div className="blob blob--1 blob--animation-3">blob</div>
      <div className="blob blob--2 blob--animation-1">blob</div>
      <div className="blob blob--3 blob--animation-2">blob</div>
      <div className="blob blob--4 blob--animation-4" >blob</div>
      <div className="blob blob--5 blob--animation-1">blob</div>
      <div className="blob blob--6 blob--animation-3">blob</div>
      <div className="blob blob--7 blob--animation-2" >blob</div>
      <div className="blob blob--8 blob--animation-4">blob</div>
      <div className="blob blob--9 blob--animation-4">blob</div>
      <div className="blob blob--10 blob--animation-3">blob</div>
      <div className="blob blob--11 blob--animation-2">blob</div>
      <div className="blob blob--12 blob--animation-4">blob</div>
      <div className="blob blob--13 blob--animation-1">blob</div>
      <div className="blob blob--14 blob--animation-3">blob</div>
      <div className="blob blob--15 blob--animation-2">blob</div>

      <div className="blob blob--16 blob--animation-4">blob</div>
      <div className="blob blob--17 blob--animation-1">blob</div>
      <div className="blob blob--18 blob--animation-3">blob</div>
      <div className="blob blob--19 blob--animation-2">blob</div>
      <div className="blob blob--20 blob--animation-4">blob</div>
      <div className="blob blob--21 blob--animation-1">blob</div>
      <div className="blob blob--22 blob--animation-3">blob</div>
      <div className="blob blob--23 blob--animation-2">blob</div>
      <div className="blob blob--24 blob--animation-4">blob</div>
      <div className="blob blob--25 blob--animation-1">blob</div>
      <div className="blob blob--26 blob--animation-3">blob</div>
      <div className="blob blob--27 blob--animation-2">blob</div>
      <div className="blob blob--28 blob--animation-4">blob</div>
      <div className="blob blob--29 blob--animation-1">blob</div>
      <div className="blob blob--30 blob--animation-2">blob</div>
    </div>
  );
};

export default Intro;
