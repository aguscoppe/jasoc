export interface QuestionItem {
  id: number;
  question: string;
  answer: string;
  open: boolean;
}

export interface Item {
  id: number;
  title: string;
  icon: string;
  text: string;
}

export const navLinks = [
  { id: 1, title: "Inicio", url: "/#header" },
  { id: 2, title: "Trayectoria", url: "/#about" },
  { id: 3, title: "Áreas", url: "/#areas" },
  { id: 4, title: "Preguntas", url: "/#faq" },
  { id: 5, title: "Contacto", url: "/#contact" },
];

export const fullAboutMe = [
  "Abogada recibida en la Universidad de Buenos Aires (UBA) - Facultad de Derecho y Ciencias Sociales en el año 1997. Matriculada en el Colegio Público de Abogados de Capital Federal en el año 1999 (Tomo 67 Folio 205) y en el Colegio de Abogados de San Isidro en el año 2003 (Tomo XXXV - Folio 20).",
  "Dedicada desde el año 2000 a la resolución de conflictos personales y patrimoniales relacionados con el derecho de familia y asuntos sucesorios. Práctica adquirida en estudios jurídicos de primer nivel, cursos de posgrado y actualización legislativa. Experiencia y desempeño de alto rendimiento en la especialidad.",
  "Interrelación con juristas dedicados al derecho de familia y otras áreas para derivaciones y/o trabajos en conjunto. Corresponsales en distintos puntos del país. Vinculación con estudios de mediación, escribanías, estudios contables, peritos en distintas especialidades y gestorías.",
  "Asesoramiento integral del cliente mediante el abordaje de distintas soluciones extrajudiciales o judiciales según las características del asunto.",
  "Ética, seriedad, calidez humana, compromiso y eficacia.",
];

export const shortAboutMe =
  "Abogada recibida en la Universidad de Buenos Aires (UBA) - Facultad de Derecho y Ciencias Sociales en el año 1997. Dedicada desde el año 2000 a la resolución de conflictos personales y patrimoniales relacionados con el derecho de familia y asuntos sucesorios. Práctica adquirida en estudios jurídicos de primer nivel, cursos de posgrado y actualización legislativa. Experiencia y desempeño de alto rendimiento en la especialidad.";

export const itemsAreas: Item[] = [
  {
    id: 1,
    title: "Divorcio",
    icon: "heart_broken",
    text: "Petición unilateral con propuesta reguladora o petición conjunta con convenio regulador; atribución de la vivienda familiar; compensación económica; régimen patrimonial del matrimonio (comunidad: bienes propios y gananciales, o separación de bienes); liquidación del régimen de comunidad de bienes y partición; fijación de renta compensatoria por uso de vivienda.",
  },
  {
    id: 2,
    title: "Medidas provisionales",
    icon: "policy",
    text: "Medidas relativas a las personas y a los bienes: embargo de bienes muebles o inmuebles; inhibición general de bienes; medidas de no innovar; exclusión del hogar; entrega de objetos de uso personal; alimentos provisorios.",
  },
  {
    id: 3,
    title: "Uniones convivenciales",
    icon: "groups",
    text: "Pactos de convivencia (confección, modificación, rescisión, extinción) y efectos frente a terceros; cese de la convivencia con confección de convenio regulador; compensación económica; atribución de la vivienda familiar; fijación de renta compensatoria por uso de vivienda.",
  },
  {
    id: 4,
    title: "Régimen de Alimentos",
    icon: "restaurant",
    text: "Fijación de la prestación alimentaria; reclamo a ascendientes (abuelos); modificación de la prestación (aumento, disminución, cesación); alimentos para hijos mayores de edad; alimentos para ex cónyuge o ex conviviente en situaciones excepcionales; liquidación y ejecución de alimentos impagos o adeudados.",
  },
  {
    id: 5,
    title: "Responsabilidad parental",
    icon: "family_restroom",
    text: "Cuidado personal y régimen de comunicación de los hijos: cuidado personal compartido (indistinto o alternado); regímenes de comunicación con progenitor no conviviente; cuidado personal unilateral; residencia o domicilio principal del hijo; extinción, privación, suspensión y rehabilitación de la responsabilidad parental; regímenes de comunicación con abuelos y familiares.",
  },
  {
    id: 6,
    title: "Violencia familiar",
    icon: "shield",
    text: "Protección de personas ante actos que incluyen fuerza física, hostigamiento, acoso, intimidación o abusos dentro o fuera del hogar, perpetrados por un miembro de la familia contra otro; asesoramiento previo a la denuncia; seguimiento del trámite hasta su finalización; prórroga de las medidas dictadas.",
  },
  {
    id: 7,
    title: "Filiación",
    icon: "badge",
    text: "Determinación de la maternidad; determinación de la filiación matrimonial y extramatrimonial; acciones de reclamación e impugnación de filiación; filiación por técnicas de reproducción humana asistida; filiación por adopción.",
  },
  {
    id: 8,
    title: "Adopción",
    icon: "child_care",
    text: "Guarda con fines de adopción; adopción plena; adopción simple; adopción de integración (adopción del hijo del cónyuge o del conviviente).",
  },
  {
    id: 9,
    title: "Guarda",
    icon: "supervised_user_circle",
    text: "Petición judicial de guarda del menor a favor de un pariente en supuestos de gravedad, por el plazo de un año, prorrogable por otro período igual; resolución posterior de la situación del niño, niña o adolescente.",
  },
  {
    id: 10,
    title: "Tutela",
    icon: "security",
    text: "Protección de la persona y de los bienes de un niño, niña o adolescente cuando no exista persona que ejerza la responsabilidad parental.",
  },
  {
    id: 11,
    title: "Autorizaciones de viaje",
    icon: "flight_takeoff",
    text: "Venia judicial en distintas hipótesis: oposición de uno de los progenitores al viaje de un menor al exterior; viajes que no contemplan el superior interés del menor; viajes sin condiciones de seguridad; revocación de autorizaciones existentes; pedido de radicación de un menor en el exterior conforme al superior interés del niño.",
  },
  {
    id: 12,
    title: "Exequatur",
    icon: "public",
    text: "Reconocimiento de sentencias extranjeras; trámite de validación de sentencia dictada en otro país e inscripción ante el Registro del Estado Civil y Capacidad de las Personas.",
  },
  {
    id: 13,
    title: "Informaciones sumarias",
    icon: "description",
    text: "Inscripción de matrimonio celebrado en el extranjero; inscripción tardía de nacimiento; inscripción de adopción celebrada en el extranjero; rectificación de partidas.",
  },
  {
    id: 14,
    title: "Salud Mental - Internaciones",
    icon: "psychology",
    text: "Determinación de la capacidad de las personas; restricciones a la capacidad; sistemas de apoyo al ejercicio de la capacidad; cese a la incapacidad; inhabilitaciones.",
  },
  {
    id: 15,
    title: "Sucesiones",
    icon: "account_balance",
    text: "Sucesiones ab intestato (sin testamento) y testamentarias (testamento a sobre cerrado, por acto público ante escribano, u ológrafo escrito de puño y letra, fechado y firmado); representación de herederos en forma conjunta o separada; protección de la legítima; acción de colación; acuerdos particionales de la herencia; beneficio de inventario; asesoramiento sobre donaciones en vida o testamentos.",
  },
];

export const itemsFAQ: QuestionItem[] = [
  {
    id: 1,
    question:
      "¿Me puedo divorciar de mi cónyuge aunque el mismo no esté de acuerdo?",
    answer:
      "Sí, a partir de la sanción del nuevo Código Civil y Comercial se puede lograr que se decrete el divorcio de los cónyuges, aunque uno de ellos no preste su conformidad o esté en desacuerdo.",
    open: false,
  },
  {
    id: 2,
    question:
      "¿Es obligatorio incluir en el divorcio una propuesta que regule los efectos del mismo (alimentos, régimen de comunicación, atribución de vivienda, etcétera?",
    answer:
      "Sí, es obligatorio incluir la propuesta respecto de todos esos temas en la petición de divorcio.",
    open: false,
  },
  {
    id: 3,
    question:
      "¿Qué ocurre si con mi cónyuge estamos de acuerdo en divorciarnos, pero disentimos en materia de alimentos, régimen de comunicación, distribución de los bienes, etcétera?",
    answer:
      "En ese caso pueden divorciarse, pero deberán concurrir a mediación y/o juicio para tratar aquellos temas en los que no hayan logrado un acuerdo.",
    open: false,
  },
  {
    id: 4,
    question:
      "¿Qué rubros debo tener en cuenta para calcular los alimentos de mi/s hijo/s?",
    answer:
      "Los rubros que deben ponderarse son: manutención, educación, esparcimiento, vestimenta, habitación, asistencia, gastos por enfermedad y gastos necesarios para adquirir una profesión u oficio.",
    open: false,
  },

  {
    id: 5,
    question: "¿Se puede modificar la cuota alimentaria?",
    answer:
      "Sí, los alimentos son esencialmente revisables, ya sea para aumentarlos, disminuirlos o pedir la cesación de los mismos.",
    open: false,
  },
  {
    id: 6,
    question:
      "¿Es cierto que la cuota alimentaria es el 30% de los ingresos del obligado a abonarla?",
    answer:
      "No, ese porcentaje consiste en una creencia errónea. En algunos casos el juez puede establecer un porcentaje de los ingresos del alimentante, que no necesariamente tiene que ser en dicha proporción, puede ser mayor o menor según el caso. En otras ocasiones o bien se establece un monto fijo o cuotas mixtas que incluyen el pago directo de rubros en especie ej. cuota escolar, prepaga, entre otros.",
    open: false,
  },
  {
    id: 7,
    question:
      "¿Se puede modificar el cuidado personal o el régimen de comunicación de los hijos?",
    answer:
      "Sí, al igual que los alimentos las decisiones sobre cuidado personal o régimen de comunicación de los hijos se pueden revisar. Para ello siempre se debe ponderar el superior interés de los niños.",
    open: false,
  },
  {
    id: 8,
    question:
      "¿Qué ocurre si con mi cónyuge no estamos de acuerdo con la distribución de bienes gananciales?",
    answer:
      "En ese caso hay que peticionar una mediación prejudicial obligatoria a los fines de intentar arribar a un acuerdo y si no se logra hay que tramitar el correspondiente proceso para que lo determine el juez.",
    open: false,
  },
  {
    id: 9,
    question: "¿Qué es la compensación económica?",
    answer:
      "La compensación económica consiste en una prestación única o renta por tiempo determinado para el cónyuge o conviviente que sufra un desequilibrio económico manifiesto con motivo de la ruptura de la convivencia o del matrimonio.",
    open: false,
  },
  {
    id: 10,
    question:
      "¿Es cierto que para iniciar una sucesión debemos estar de acuerdo todos los herederos?",
    answer:
      "No. La sucesión la puede abrir cualquiera de los herederos sin perjuicio de que los otros no estén de acuerdo, o prefieran tener otro patrocinio letrado.",
    open: false,
  },
];
