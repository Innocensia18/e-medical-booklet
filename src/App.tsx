import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Menu from "./components/Menu";
import Page from "./pages/Page";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import "./styles/App.css";
import Routes from "./routes/Routes";
import "chart.js/auto";
import { Redirect, Route } from "react-router";
import Login from "./pages/Login";
import { useContext, useEffect, useState } from "react";
import { PatientContext, PatientRecordContext, StaffContext } from "./context/AppContent";
import { Patient, PatientRecordInterface, Staff } from "./interfaces/types";
import { GetAppColor } from "./Functions/functions";

setupIonicReact();

const App: React.FC = () => {
  const [staff, setStaff] = useState<Staff>();
  const [patient, setPatient] = useState<Patient>();
  const [patientRecord, setPatientRecord] = useState<PatientRecordInterface>();

  function setAppMode(){ 
    GetAppColor().then(color=>{
      if(color==="dark"){
        document.body.setAttribute("color-theme","dark")
      }else{
        document.body.setAttribute("color-theme","light")
      }
    })  
  }
  useEffect(()=>{
    setAppMode()
  },[])
  return (
    <IonApp>
      <StaffContext.Provider value={{ staff, setStaff }}>
        <PatientContext.Provider value={{ patient, setPatient }}> 
          <PatientRecordContext.Provider value={{patientRecord, setPatientRecord}}> 
            <IonReactRouter>
              <Routes></Routes>
              <Route path={"/login"} exact={true}>
                <Login></Login>
              </Route>
              <Route path={"/"} exact={true}>
                <Login></Login>
              </Route>
            </IonReactRouter>
          </PatientRecordContext.Provider>
        </PatientContext.Provider>
      </StaffContext.Provider>
    </IonApp>
  );
};

export default App;
