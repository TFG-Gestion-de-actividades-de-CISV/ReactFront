import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Switch,
} from "@mui/material";

const CisvConditionsDialog = ({ value, onChange }) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <div>
      <Typography variant="h6">¿Autorización de CISV?</Typography>
      <Button variant="outlined" onClick={handleDialogOpen}>
        Leer condiciones
      </Button>
      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Condiciones de Autorización de CISV</DialogTitle>
        <DialogContent>
          <Typography variant="body1" paragraph>
            <b>Protección de datos</b>
            <br />
            En aras a dar cumplimiento al Reglamento (UE) 2016/679 del
            Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a
            la protección de las personas físicas en lo que respecta al
            tratamiento de datos personales y a la libre circulación de estos
            datos, así como a la Ley Orgánica 3/2018 de 5 de diciembre de
            Protección de Datos Personales y Garantía de los Derechos Digitales
            (LOPDGDD) y siguiendo las Recomendaciones e Instrucciones emitidas
            por la Agencia Española de Protección de Datos (A.E.P.D.), SE LE
            INFORMA:
          </Typography>
          <Typography variant="body2" paragraph>
            Los datos de carácter personal solicitados y facilitados por usted,
            son incorporados a un fichero de titularidad privada cuyo
            responsable y único destinatario es <b>CISV BARCELONA</b>.
          </Typography>
          <Typography variant="body2" paragraph>
            Solo serán solicitados aquellos datos estrictamente necesarios para
            prestar adecuadamente los servicios solicitados, pudiendo ser
            necesario recoger datos de contacto de terceros, tales como
            representantes legales, tutores, o personas a cargo designadas por
            los mismos.
          </Typography>
          <Typography variant="body2" paragraph>
            Todos los datos recogidos cuentan con el compromiso de
            confidencialidad, con las medidas de seguridad establecidas
            legalmente, y bajo ningún concepto son cedidos o tratados por
            terceras personas, físicas o jurídicas, sin el previo consentimiento
            del titular, tutor o representante legal, salvo en aquellos casos en
            los que fuere imprescindible para la correcta prestación del
            servicio.
          </Typography>
          <Typography variant="body2" paragraph>
            Una vez finalizada la relación entre CISV Barcelona y el titular los
            datos serán archivados y conservados, durante un período máximo de 2
            años, tras lo cual serán devueltos íntegramente al cliente o
            autorizado legal o bien serán destruidos.
          </Typography>
          <Typography variant="body2" paragraph>
            También se le informa de la posibilidad de ejercitar los derechos de
            acceso, rectificación o supresión así como solicitar que se limite
            el tratamiento de sus datos, oponerse al mismo, solicitar la
            portabilidad de sus datos, o revocar el consentimiento prestado
            dirigiéndose por escrito a <b>CISV BARCELONA</b> con domicilio en
            Calabria 162, 4° 2*, 08015 Barcelona. Asimismo se le informa que
            puede también presentar una reclamación ante la Agencia Española de
            Protección de Datos, C/ Jorge Juan, 6, 28001 Madrid.
          </Typography>
          <Typography variant="body1" paragraph>
            <b>Normativa</b>
          </Typography>
          <Typography variant="body2" paragraph>
            <b>CANCELACIÓN DE LA PLAZA:</b> En caso de cancelación una vez
            aceptada la plaza, no se devolverá el importe abonado. Únicamente se
            guardará a modo de bono para un minicamp posterior, si se debe a una
            causa de fuerza mayor justificada siempre acompañada de un documento
            que lo acredite.
          </Typography>
          <Typography variant="body2" paragraph>
            <b>EXPULSIÓN DEL PROGRAMA:</b> En el caso de que un participante sea
            expulsado del programa en virtud de las normas referidas en el
            documento R-07 Behaviour Policy (1713) de CISV Internacional, los
            padres o tutores de dicho participante deberán venir a buscar al
            niño.
          </Typography>
          <Typography variant="body2" paragraph>
            <b>CIERRE DEL PLAZO DE INSCRIPCIÓN:</b> El plazo de inscripción
            finalizará el 4 de diciembre a las 12h. Cualquier inscripción
            posterior no será válida.
          </Typography>
          <Typography variant="body2" paragraph>
            <b>LISTA PROVISIONAL:</b> El día 4 se enviará la lista provisional
            de apuntados al minicamp con el fin de que las familias la revisen y
            se puedan subsanar posibles errores.
          </Typography>
          <Typography variant="body2" paragraph>
            <b>LISTA DEFINITIVA:</b> El 5 se publicará la lista definitiva,
            quien no esté en la lista no podrá participar en el minicamp salvo
            que sea por error de CISV Barcelona.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cerrar</Button>
        </DialogActions>
      </Dialog>
      <Switch checked={value} onChange={onChange} color="primary" />
    </div>
  );
};

export default CisvConditionsDialog;
