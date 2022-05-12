import React, { useRef } from "react";
import faker from "@faker-js/faker";
import {
  IonAlert,
  IonAvatar,
  IonBadge,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonChip,
  IonCol,
  IonContent,
  IonDatetime,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonInput,
  IonItem,
  IonItemSliding,
  IonLabel,
  IonList,
  IonLoading,
  IonMenuButton,
  IonNote,
  IonPage,
  IonRippleEffect,
  IonRow,
  IonSearchbar,
  IonSelect,
  IonSelectOption,
  IonText,
  IonTextarea,
  IonThumbnail,
  IonTitle,
  IonToast,
  IonToolbar,
} from "@ionic/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import PageHeader from "../components/PageHeader";
import "../styles/Page.css";
import "../styles/NewPatient.css";
import {
  add,
  chevronForward,
  informationCircle,
  pencil,
  save,
} from "ionicons/icons";
import { localImages } from "../images/images";

const ViewPatient: React.FC = () => {
  const { name } = useParams<{ name: string; mode?: string }>();
  const formRef = useRef<HTMLFormElement>(null);
  const patientImageInputRef = useRef<HTMLInputElement>(null);
  const [alertDischarge, setAlertDischarge] = useState(false);
  const [alertAdmit, setAlertAdmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [operationSuccessful, setOperationSuccessful] = useState(false);
  return (
    <IonPage>
      <PageHeader name={name}></PageHeader>
      <IonContent color="light">
        <IonToolbar color="light" className="pt-4">
          <IonText slot="start" color="primary">
            <IonTitle className="ion-padding-horizontal">
              <p className="text-bold">
                <span>Patient Info</span> -{" "}
                <span className="fs-6">
                  <IonText color="medium">Dr. {faker.name.findName()}</IonText>
                </span>
                <br />
                <span className="text-regular">
                  <IonText className="text-small" color="danger">
                    Amitted
                  </IonText>
                </span>
              </p>
            </IonTitle>
          </IonText>
          <IonButton
            color="success"
            slot="end"
            onClick={() => {
              setAlertDischarge(true);
            }}
            className="m-3"
          >
            Discharge Patient
          </IonButton>
          {/* <IonButton
            color="danger"
            slot="end"
            onClick={() => {
              setAlertAdmit(true);
            }}
          >
            Admit Patient
          </IonButton>
        </IonToolbar> */}
        </IonToolbar>

        <IonCard>
          <IonCardHeader mode="ios">
            <IonAvatar className="ion-float-end br-2">
              <IonImg src={localImages.commy}></IonImg>
            </IonAvatar>
            <IonCardTitle>
              {faker.name.findName()}{" "}
              <IonChip color="medium" mode="md">
                <IonIcon icon={pencil}></IonIcon>
                <IonLabel>edit</IonLabel>
              </IonChip>
            </IonCardTitle>
            <IonCardSubtitle className="pt-1">
              <span>Male</span> ~{" "}
              <span>{faker.date.recent().toLocaleDateString()}</span>
            </IonCardSubtitle>
            <IonCardSubtitle className="text-lowercase pt-1">
              <span>{6723339123}</span> ~ <span>{"email@awakedom.com"}</span>
            </IonCardSubtitle> 
            <IonCardSubtitle className="text-lowercase text-capitalize pt-1">
              {faker.address.state()}
            </IonCardSubtitle>
          </IonCardHeader>
        </IonCard>

        <IonToolbar color="light" className="pt-4">
          <IonText color="primary" slot="start">
            <IonTitle className="ion-padding-horizontal">
              <p className="text-bold">
                <span>Patient Records</span>{" "}
                <span>
                  <IonText color="medium" className="fw-bold">
                    {" "}
                    ~{" "}
                  </IonText>
                </span>
                <span className="fs-6">
                  <IonText color="success" className="fs-4">
                    {" "}
                    {Math.floor(Math.random() * 30)}
                  </IonText>
                </span>
              </p>
            </IonTitle>
          </IonText>
          <IonGrid>
            <IonRow>
              <IonCol></IonCol>
              <IonCol>
                <IonButton color="success" className="float-end">
                  <IonIcon slot="start" icon={add}></IonIcon> New Record
                </IonButton>
              </IonCol>
              <IonCol sizeLg="4" size="12">
                <IonSearchbar mode="ios"></IonSearchbar>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>

        <div className="px-1">
          <IonList>
            <IonItem lines="none" button routerLink="/patient-record">
              <IonCardHeader>
                <IonCardTitle>Record ID</IonCardTitle>
                <IonCardSubtitle>[Record Creation Date]</IonCardSubtitle>
              </IonCardHeader>
              <IonButtons slot="end">
                <IonButton>
                  <IonIcon slot="icon-only" icon={chevronForward}></IonIcon>
                </IonButton>
              </IonButtons>
            </IonItem>
          </IonList>
        </div>
      </IonContent>

      {/* alerts */}
      <IonAlert
        isOpen={alertDischarge}
        onDidDismiss={() => setAlertDischarge(false)}
        cssClass="alert-discharge"
        message={"Discharge [Patient Name]"}
        header={"Discharge Patient"}
        buttons={[
          {
            text: "cancel",
            cssClass: "alert-discharge-cancel",
            handler: () => {
              console.log("Confirm failed");
            },
            role: "cancel",
          },
          {
            text: "Discharge",
            cssClass: "alert-discharge-confirm",
            handler: () => {
              console.log("Patient Discharged");
              setOperationSuccessful(true);
            },
            role: "confirm",
          },
        ]}
      ></IonAlert>
      <IonAlert
        isOpen={alertAdmit}
        onDidDismiss={() => setAlertAdmit(false)}
        cssClass="alert-admit"
        message={"Admit [Patient Name]"}
        header={"Admit Patient"}
        buttons={[
          {
            text: "cancel",
            cssClass: "alert-admit-cancel",
            handler: () => {
              console.log("Confirm failed");
            },
            role: "cancel",
          },
          {
            text: "Admit",
            cssClass: "alert-admit-confirm",
            handler: () => {
              console.log("Patient Admitted");
              setOperationSuccessful(true);
            },
            role: "confirm",
          },
        ]}
      ></IonAlert>

      {/* loading */}
      <IonLoading
        isOpen={loading}
        onDidDismiss={() => {
          setLoading(false);
          setOperationSuccessful(true);
        }}
      ></IonLoading>

      {/* toast */}
      <IonToast
        isOpen={operationSuccessful}
        message={"Operation Successful"}
        icon={informationCircle}
        color="success"
        duration={2000}
        onDidDismiss={() => {
          setOperationSuccessful(false);
        }}
      ></IonToast>
    </IonPage>
  );
};

export default ViewPatient;
