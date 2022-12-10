import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <br />
      <br />
      <br />
      <div>
        <button onClick={() => navigate("/table1")} className="button-49">
          Table1
        </button>
        <>&nbsp;</>
        <>&nbsp;</>
        <>&nbsp;</>
        <button onClick={() => navigate("/table2")} className="button-49">
          Table2
        </button>
      </div>
      <br />
      <div>
        <button onClick={() => navigate("/table3")} className="button-49">
          Table3
        </button>
        <>&nbsp;</>
        <>&nbsp;</>
        <>&nbsp;</>
        <button onClick={() => navigate("/table4")} className="button-49">
          Table4
        </button>
      </div>
      <br />
      <div>
        <button onClick={() => navigate("/table5")} className="button-49">
          Table5
        </button>
        <>&nbsp;</>
        <>&nbsp;</>
        <>&nbsp;</>
        <button onClick={() => navigate("/table6")} className="button-49">
          Table6
        </button>
      </div>
      <br />
      <div>
        <button onClick={() => navigate("/table7")} className="button-49">
          Table7
        </button>
        <>&nbsp;</>
        <>&nbsp;</>
        <>&nbsp;</>
        <button onClick={() => navigate("/table8")} className="button-49">
          Table8
        </button>
      </div>
      <br />
      <div>
        <button onClick={() => navigate("/table9")} className="button-49">
          Table9
        </button>
        <>&nbsp;</>
        <>&nbsp;</>
        <>&nbsp;</>
        <button onClick={() => navigate("/table10")} className="button-49">
          Table10
        </button>
      </div>
    </div>
  );
}

export default Home;
