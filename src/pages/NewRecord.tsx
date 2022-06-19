import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCheckbox,
  IonCol,
  IonContent,
  IonGrid,
  IonInput,
  IonItem,
  IonItemGroup,
  IonLabel,
  IonList,
  IonNote,
  IonPage,
  IonRadio,
  IonRadioGroup,
  IonRow,
  IonText,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { AnyObject } from "chart.js/types/basic";
import { terminalSharp } from "ionicons/icons";
import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import CheckList from "../components/CheckList";
import {
  PatientImmunity,
  PatientsHistory,
} from "../components/EditPatientRecordCategories";
import PageHeader from "../components/PageHeader";
import { PatientContext } from "../context/AppContent";
import { firestore } from "../Firebase";
import {
  ADL,
  ADL_States,
  Appearance,
  AppearanceStates,
  Continence,
  ContinenceStates,
  IADL,
} from "../interfaces/data";
import { PatientRecordInterface, VitalSigns } from "../interfaces/types";
import uniqid from "uniqid";

const NewRecord: React.FC = () => {
  const location = useLocation();
  const {patient} = useContext(PatientContext);
  const [patientRecord,setPatientRecord]=useState<PatientRecordInterface>()
  const [recordId,setRecordId]=useState<string>()
  const [startRecord,setStartRecord]=useState<boolean>(false)
  async function updatePatientRecord(section:string, data:AnyObject){
    
  }

  function createRecord(){
    let rID = uniqid();
    setRecordId(rID);
    firestore.collection("patients").doc(patient?.id).collection("records").doc(rID).set({id:rID,date:Date.now()})
    setStartRecord(true)
  }

  useEffect(()=>{ 
  },[])
  return (
    <IonPage>
      <PageHeader name="name"></PageHeader>
      <IonToolbar color="clear" className="pt-4">
        <IonText slot="start" color="primary">
          <IonTitle className="ion-padding-horizontal">
            <p className="text-bold">
              <span>New Record</span> -{" "}
              <span className="text-muted">{patient?.name}</span>
              <br />
              <span className="text-regular">
                <IonNote className="text-small">
                  Creating a New Patient Record
                </IonNote>
              </span>
            </p>
          </IonTitle>
        </IonText>
          <IonButton slot="end"
          onClick={()=>{
            firestore.collection("patients").doc(patient?.id).update({})
          }}
          >start record</IonButton>
      </IonToolbar>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol size="12" sizeLg="6">

                
              <IonCard mode="ios">
              <form action="" onSubmit={(e:any)=>{
                e.preventDefault();
                let data:VitalSigns={
                  bloodPressure:e.target.bloodPressure.value, 
                  pulse:e.target.pulse.value,
                  temperature:e.target.temperature.value,
                  weight:e.target.weight.value,
                }

                firestore.collection("patients").doc(patient?.id).collection("records").doc()
              }}>
                <IonCardHeader mode="md">
                  <IonCardTitle className="pt-2 fw-bold">
                    Vital Signs
                  </IonCardTitle>
                </IonCardHeader>
                <hr className="p-none m-0" />
                <IonCardContent mode="md">
                  <IonGrid>
                    <IonRow>
                      <IonCol size="12" sizeSm="12" sizeLg="6">
                        <IonItem fill="outline">
                          <IonLabel position="floating">Pulse</IonLabel>
                          <IonInput type="text" name="pulse"></IonInput>
                        </IonItem>
                      </IonCol>
                      <IonCol size="12" sizeSm="12" sizeLg="6">
                        <IonItem fill="outline" color="primary" lines="full">
                          <IonLabel position="floating">Weight</IonLabel>
                          <IonInput type="number" name="weight"></IonInput>
                        </IonItem>
                      </IonCol>
                      <IonCol size="12" sizeSm="12" sizeLg="6">
                        <IonItem fill="outline" color="primary" lines="full">
                          <IonLabel position="floating">
                            Blood Pressure
                          </IonLabel>
                          <IonInput type="text" name="bp"></IonInput>
                        </IonItem>
                      </IonCol>
                      <IonCol size="12" sizeSm="12" sizeLg="6">
                        <IonItem fill="outline" color="primary" lines="full">
                          <IonLabel position="floating">Temperature</IonLabel>
                          <IonInput type="number" name='temp'></IonInput>
                        </IonItem>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonCardContent>
                <div className="text-center p-2">
                  <IonButton mode="md" type="submit">submit</IonButton>
                </div> 
              </form>
              </IonCard>
            </IonCol>

            <IonCol size="12" sizeLg="6">
              <IonCard mode="ios">
                <IonCardHeader mode="md">
                  <IonCardTitle className="pt-2 fw-bold">
                    Patient's Complaint
                  </IonCardTitle>
                </IonCardHeader>
                <hr className="p-none m-0" />
                <IonCardContent mode="md">
                  <IonItem lines="full" fill="outline">
                    <IonLabel position="floating">Patient's Complaint</IonLabel>
                    <IonTextarea
                      placeholder="Write Patient's Complaint"
                      name="patientComplaint"
                    ></IonTextarea>
                  </IonItem>
                </IonCardContent>
                <hr className="p-none m-0" />
                <div className="text-center py-3">
                  <IonButton mode="md">Submit</IonButton>
                </div>
                
              </IonCard>
            </IonCol>

            <IonCol size="12" sizeLg="6">
              <IonCard mode="ios">
                <IonCardHeader mode="md">
                  <IonCardTitle className="pt-2 fw-bold">
                    Diagnosis
                  </IonCardTitle>
                </IonCardHeader>
                <hr className="p-none m-0" />
                <IonCardContent mode="md">
                  <IonItem lines="full" fill="outline">
                    <IonLabel position="floating">Diagnosis</IonLabel>
                    <IonTextarea
                      placeholder="Write Diagnosis"
                      name="diagnosis"
                    ></IonTextarea>
                  </IonItem>
                </IonCardContent>
                <hr className="p-none m-0" />
                <div className="text-center py-3">
                  <IonButton mode="md">Submit</IonButton>
                </div>
              </IonCard>
            </IonCol>


            <IonCol size="12" sizeLg="6">
              <IonCard mode="ios">
                <IonCardHeader mode="md">
                  <IonCardTitle className="pt-2 fw-bold">
                    Treatment
                  </IonCardTitle>
                </IonCardHeader>
                <hr className="p-none m-0" />
                <IonCardContent mode="md">
                  <IonItem lines="full" fill="outline">
                    <IonLabel position="floating">Treatment</IonLabel>
                    <IonTextarea
                      placeholder="Write Treatment"
                      name="treatment"
                    ></IonTextarea>
                  </IonItem>
                </IonCardContent>
                <hr className="p-none m-0" />
                <div className="text-center py-3">
                  <IonButton mode="md">Submit</IonButton>
                </div>
              </IonCard>
            </IonCol>


            <IonCol size="12" sizeLg="12">
              <hr />
            </IonCol>


            <IonCol size="12" sizeLg="6">
              <IonCard mode="ios">
                <IonCardHeader mode="md">
                  <IonCardTitle className="pt-2 fw-bold">
                    Immunity & Immunizations
                  </IonCardTitle>
                </IonCardHeader>
                <hr className="p-none m-0" />
                <IonCardContent mode="md">
                  <PatientImmunity></PatientImmunity>
                </IonCardContent>
                <hr className="p-none m-0" />
                <div className="text-center py-3">
                  <IonButton mode="md">Submit</IonButton>
                </div>
              </IonCard>
            </IonCol>
            <IonCol size="12" sizeLg="6">
              <IonCard mode="ios">
                <IonCardHeader mode="md">
                  <IonCardTitle className="pt-2 fw-bold">
                    Patient History
                  </IonCardTitle>
                </IonCardHeader>
                <hr className="p-none m-0" />
                <IonCardContent mode="md">
                  <PatientsHistory></PatientsHistory>
                </IonCardContent>
                <hr className="p-none m-0" />
                <div className="text-center py-3">
                  <IonButton mode="md">Submit</IonButton>
                </div>
              </IonCard>
            </IonCol>

            <IonCol size="12" sizeLg="6">
              <IonCard mode="ios">
                <IonCardHeader mode="md">
                  <IonCardTitle className="pt-2 fw-bold">
                    Immunity & Immunizations
                  </IonCardTitle>
                </IonCardHeader>
                <hr className="p-none m-0" />
                <IonCardContent mode="md">
                  <PatientImmunity></PatientImmunity>
                </IonCardContent>
                <hr className="p-none m-0" />
                <div className="text-center py-3">
                  <IonButton mode="md">Submit</IonButton>
                </div>
              </IonCard>
            </IonCol>

            <IonCol size="12" sizeLg="12">
              <hr />
            </IonCol>

            <IonCol size="12" sizeLg="12">
              <IonCard mode="ios">
                <IonCardHeader mode="md">
                  <IonCardTitle className="pt-2 fw-bold">
                    Appearance
                  </IonCardTitle>
                </IonCardHeader>
                <hr className="p-none m-0" />
                <IonCardContent mode="md">
                  <CheckList
                    data={Appearance}
                    states={AppearanceStates}
                  ></CheckList>
                </IonCardContent>
                <hr className="p-none m-0" />
                <div className="text-center py-3">
                  <IonButton mode="md">Submit</IonButton>
                </div>
              </IonCard>
            </IonCol>

            <IonCol size="12" sizeLg="12">
              <IonCard mode="ios">
                <IonCardHeader mode="md">
                  <IonCardTitle className="pt-2 fw-bold">
                    Activities of Daily Living
                  </IonCardTitle>
                </IonCardHeader>
                <hr className="p-none m-0" />
                <IonCardContent mode="md">
                  <CheckList data={ADL} states={ADL_States}></CheckList>
                </IonCardContent>
                <hr className="p-none m-0" />
                <div className="text-center py-3">
                  <IonButton mode="md">Submit</IonButton>
                </div>
              </IonCard>
            </IonCol>

            <IonCol size="12" sizeLg="12">
              <IonCard mode="ios">
                <IonCardHeader mode="md">
                  <IonCardTitle className="pt-2 fw-bold">
                    Continence
                  </IonCardTitle>
                </IonCardHeader>
                <hr className="p-none m-0" />
                <IonCardContent mode="md">
                  <CheckList
                    data={Continence}
                    states={ContinenceStates}
                    catheter
                  ></CheckList>
                </IonCardContent>
                <hr className="p-none m-0" />
                <div className="text-center py-3">
                  <IonButton mode="md">Submit</IonButton>
                </div>
              </IonCard>
            </IonCol>

            <IonCol size="12" sizeLg="12">
              <IonCard mode="ios">
                <IonCardHeader mode="md">
                  <IonCardTitle className="pt-2 fw-bold">
                    Instrumental Activities of Daily Living
                  </IonCardTitle>
                </IonCardHeader>
                <hr className="p-none m-0" />
                <IonCardContent mode="md">
                  <CheckList data={IADL} states={ADL_States}></CheckList>
                </IonCardContent>
                <hr className="p-none m-0" />
                <div className="text-center py-3">
                  <IonButton mode="md">Submit</IonButton>
                </div>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default NewRecord;
